'use client';

import { FormEvent, useState } from 'react';

type FormState = {
  status: 'idle' | 'submitting' | 'success' | 'error';
  message: string;
};

export function ContactForm() {
  const [startedAt] = useState(() => Date.now());
  const [formState, setFormState] = useState<FormState>({
    status: 'idle',
    message: ''
  });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormState({ status: 'submitting', message: 'Sending message...' });

    const formData = new FormData(event.currentTarget);

    const response = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify({
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message'),
        website: formData.get('website'),
        startedAt
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const result = (await response.json()) as { message?: string };

    setFormState({
      status: response.ok ? 'success' : 'error',
      message: result.message || 'The form could not be submitted.'
    });

    if (response.ok) {
      event.currentTarget.reset();
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>
        Name
        <input name="name" type="text" autoComplete="name" required />
      </label>
      <label>
        Email
        <input name="email" type="email" autoComplete="email" required />
      </label>
      <label>
        Project notes
        <textarea name="message" rows={5} required />
      </label>
      <label className="honeypot" aria-hidden="true">
        Website
        <input name="website" type="text" tabIndex={-1} autoComplete="off" />
      </label>
      <button type="submit" disabled={formState.status === 'submitting'}>
        {formState.status === 'submitting' ? 'Sending...' : 'Send message'}
      </button>
      {formState.message ? (
        <p
          aria-live="polite"
          className={`form-status ${formState.status === 'success' ? 'success' : 'error'}`}
          role="status"
        >
          {formState.message}
        </p>
      ) : null}
    </form>
  );
}
