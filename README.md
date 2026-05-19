# Casino Comparison Site

Next.js 14 + Sanity v3, deployable via Docker.

---

## Project structure

```
casino-comparison/
├── app/
│   ├── page.tsx                  # Homepage — country flag picker
│   ├── [country]/page.tsx        # Country comparison page (/uk/, /fr/, etc.)
│   ├── studio/[[...tool]]/       # Sanity Studio embedded at /studio
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── CountryPicker.tsx         # Flag grid grouped by region
│   └── ComparisonTable.tsx       # Casino comparison table
├── sanity/
│   ├── schemas/countryPage.ts    # Sanity schema — countries + casinos
│   ├── lib/client.ts             # Sanity client
│   └── lib/queries.ts            # GROQ queries
├── sanity.config.ts              # Sanity Studio config
├── nginx/nginx.conf              # Reverse proxy config
├── Dockerfile
└── docker-compose.yml
```

---

## First-time setup

### 1. Create a Sanity project

Go to [sanity.io/manage](https://sanity.io/manage) and create a new project.
Note down your **Project ID** and use dataset name `production`.

### 2. Add your domain to Sanity CORS

In your Sanity project settings → **API → CORS origins**, add:
- `http://localhost:3000` (for local dev)
- `https://yourdomain.com` (for production)

Also create an **API token** with Editor permissions — you'll need this for on-demand revalidation later.

### 3. Configure environment variables

```bash
cp .env.example .env.local
```

Edit `.env.local`:
```
NEXT_PUBLIC_SANITY_PROJECT_ID=abc123xyz
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=sk...
```

### 4. Install and run locally

```bash
npm install
npm run dev
```

- Site: http://localhost:3000
- Studio: http://localhost:3000/studio

---

## Adding your first country

1. Open the Studio at `/studio`
2. Click **Country Pages** in the left sidebar → **Create new document**
3. Fill in:
   - **Country Name**: e.g. `United Kingdom`
   - **Page Title**: e.g. `Best Online Casinos in the UK`
   - **URL Slug**: click Generate → it will suggest `united-kingdom`, change it to `uk`
   - **Region**: select `Europe`
   - **Flag Image**: upload the country flag
4. Under **Casinos**, click **Add item** and fill in each casino
5. Hit **Publish**

The page will be live at `/uk/`.

---

## Docker deployment

### Build and start

```bash
# On your server — copy your .env file first
cp .env.example .env

# Build and start everything
docker compose up -d --build
```

The app runs on port 80 (via nginx). The Next.js container is not exposed publicly — all traffic goes through nginx.

### SSL / HTTPS

Once you have an SSL certificate (e.g. via Certbot/Let's Encrypt):

1. Uncomment the SSL blocks in `nginx/nginx.conf`
2. Update the domain and cert paths
3. Restart nginx: `docker compose restart nginx`

### Updating the site after code changes

```bash
git pull
docker compose up -d --build app
```

---

## How revalidation works

Pages are set to `revalidate = 60`, meaning the site will refresh content from Sanity
within 60 seconds of a publish. No manual rebuilds needed.

For instant updates, you can add a Sanity webhook pointing to Next.js on-demand
revalidation — ask Claude to set that up when you're ready.
