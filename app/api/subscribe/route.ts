import { type NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { email, name, listId: bodyListId } = await req.json()

  // Basic email validation
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ message: 'Invalid email address.' }, { status: 400 })
  }

  const apiKey = process.env.INBOXROAD_API_KEY
  // Use per-country list ID from Sanity if set, otherwise fall back to env var default
  const listId = bodyListId ?? process.env.INBOXROAD_LIST_ID

  if (!apiKey || !listId) {
    console.error('Missing INBOXROAD_API_KEY or INBOXROAD_LIST_ID env vars')
    return NextResponse.json({ message: 'Server configuration error.' }, { status: 500 })
  }

  try {
    const res = await fetch(
      `https://webapi.inboxroad.com/api/v2/contacts-lists/${listId}/contacts/`,
      {
        method: 'POST',
        headers: {
          'X-API-Key': apiKey,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          first_name: name ?? '',
          status: 'subscribed',
        }),
      }
    )

    if (res.ok) {
      return NextResponse.json({ message: 'Subscribed successfully.' }, { status: 200 })
    }

    const data = await res.json().catch(() => ({}))

    // 400 can mean the contact already exists — treat as success
    if (res.status === 400) {
      const errorText = JSON.stringify(data.errors ?? '')
      if (errorText.toLowerCase().includes('already exists') || errorText.toLowerCase().includes('duplicate')) {
        return NextResponse.json({ message: 'Subscribed successfully.' }, { status: 200 })
      }
      console.error('InboxRoad 400:', data)
      return NextResponse.json({ message: 'Invalid data.' }, { status: 400 })
    }

    console.error('InboxRoad error:', res.status, data)
    return NextResponse.json({ message: 'Failed to subscribe. Please try again.' }, { status: 500 })
  } catch (err) {
    console.error('Subscribe error:', err)
    return NextResponse.json({ message: 'Server error. Please try again.' }, { status: 500 })
  }
}
