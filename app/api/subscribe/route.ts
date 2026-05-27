import { type NextRequest, NextResponse } from 'next/server'

const MJ_API_BASE = 'https://api.mailjet.com/v3/REST'

function mjAuth() {
  const creds = `${process.env.MJ_APIKEY_PUBLIC}:${process.env.MJ_APIKEY_PRIVATE}`
  return 'Basic ' + Buffer.from(creds).toString('base64')
}

export async function POST(req: NextRequest) {
  const { email, name } = await req.json()

  // Basic email validation
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ message: 'Invalid email address.' }, { status: 400 })
  }

  const listId = process.env.MJ_CONTACT_LIST_ID
  const headers = {
    'Content-Type': 'application/json',
    Authorization: mjAuth(),
  }

  try {
    // Step 1: Create or update the contact
    const contactRes = await fetch(`${MJ_API_BASE}/contact`, {
      method: 'POST',
      headers,
      body: JSON.stringify({ Email: email, Name: name ?? '' }),
    })

    // 400 with "already exists" is fine — Mailjet returns this for existing contacts
    if (!contactRes.ok && contactRes.status !== 400) {
      const err = await contactRes.json()
      console.error('Mailjet contact error:', err)
      return NextResponse.json({ message: 'Failed to create contact.' }, { status: 500 })
    }

    // Step 2: Add to contact list
    const listRes = await fetch(`${MJ_API_BASE}/listrecipient`, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        ContactAlt: email,
        ListID: Number(listId),
      }),
    })

    if (!listRes.ok) {
      const err = await listRes.json()
      // Code 9 = already subscribed — treat as success
      const alreadySubscribed = err?.ErrorCode === 'ps-MJ-0013' || err?.StatusCode === 400
      if (!alreadySubscribed) {
        console.error('Mailjet list error:', err)
        return NextResponse.json({ message: 'Failed to subscribe.' }, { status: 500 })
      }
    }

    return NextResponse.json({ message: 'Subscribed successfully.' }, { status: 200 })
  } catch (err) {
    console.error('Subscribe error:', err)
    return NextResponse.json({ message: 'Server error. Please try again.' }, { status: 500 })
  }
}
