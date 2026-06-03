import { NextResponse } from 'next/server';

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
};

export async function POST(request: Request) {
  const payload = (await request.json()) as ContactPayload;
  const name = normalizeField(payload.name);
  const email = normalizeField(payload.email);
  const message = normalizeField(payload.message);

  if (!name || !email || !message) {
    return NextResponse.json({ message: 'Name, email, and project notes are required.' }, { status: 400 });
  }

  if (!email.includes('@')) {
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

