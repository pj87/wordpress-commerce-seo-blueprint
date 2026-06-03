# Form Spam Hardening

## Goal

Reduce low-effort spam before connecting a production form provider.

## Headless Next.js Path

The contact form includes:

- Required fields
- Email format validation
- Honeypot field
- Minimum submit time
- Basic length limits
- Invalid JSON handling
- Production forwarding through `CONTACT_FORM_ENDPOINT`

Implemented in:

- `implementation/headless-nextjs/src/app/contact/ContactForm.tsx`
- `implementation/headless-nextjs/src/app/api/contact/route.ts`

## Production Recommendations

Add at least one stronger production control before launch:

- Turnstile, reCAPTCHA, or hCaptcha
- Rate limiting by IP/session
- Form provider spam filtering
- Email provider suppression lists
- Server-side logging and alerting

## Block Theme Path

Use a form plugin or CRM embed that supports:

- Honeypot field
- Rate limiting or submission throttling
- CAPTCHA/Turnstile option
- Email validation
- Spam logging
- Consent checkbox if required

## Verification

- Empty fields are rejected.
- Invalid email is rejected.
- Honeypot submissions are rejected.
- Very fast submissions are rejected.
- Long payloads are rejected.
- Production endpoint is configured before launch.

