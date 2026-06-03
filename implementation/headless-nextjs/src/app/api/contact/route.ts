import { NextResponse } from 'next/server';

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
  website?: unknown;
  startedAt?: unknown;
};

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ message: 'Invalid form payload.' }, { status: 400 });
  }

  const name = normalizeField(payload.name);
  const email = normalizeField(payload.email);
  const message = normalizeField(payload.message);
  const website = normalizeField(payload.website);
  const startedAt = typeof payload.startedAt === 'number' ? payload.startedAt : 0;

  if (website) {
    return NextResponse.json({ message: 'The form could not be submitted.' }, { status: 400 });
  }

  if (!startedAt || Date.now() - startedAt < 3000) {
    return NextResponse.json({ message: 'Please wait a moment before submitting the form.' }, { status: 400 });
  }

  if (!name || !email || !message) {
    return NextResponse.json({ message: 'Name, email, and project notes are required.' }, { status: 400 });
  }

  if (name.length > 120 || email.length > 180 || message.length > 3000) {
    return NextResponse.json({ message: 'The form content is too long.' }, { status: 400 });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ message: 'Enter a valid email address.' }, { status: 400 });
  }

  const endpoint = process.env.CONTACT_FORM_ENDPOINT;

  if (!endpoint) {
    return NextResponse.json(
      {
        message:
          'The form is valid, but CONTACT_FORM_ENDPOINT is not configured. Add a production endpoint before launch.'
      },
      { status: 503 }
    );
  }

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, email, message })
  });

  if (!response.ok) {
    return NextResponse.json({ message: 'The form endpoint rejected the submission.' }, { status: 502 });
  }

  return NextResponse.json({ message: 'Message sent.' });
}

function normalizeField(value: unknown) {
  return typeof value === 'string' ? value.trim() : '';
}
