# Headless Next.js Frontend

Minimal JS-first frontend scaffold for using WordPress as a CMS through the REST API.

This is the alternative path to `implementation/wordpress-block-theme/`.

## Architecture

```text
WordPress admin
  -> posts, pages, categories, media
  -> WordPress REST API
  -> Next.js frontend
```

WordPress still requires PHP on the backend. The public frontend is built with TypeScript, React, and Next.js.

## Features

- Home page
- Blog index
- Blog post detail route
- WordPress REST API client
- Basic metadata handling
- Minimal CSS
- Typed post/page models

## Setup

1. Install dependencies:

```bash
npm install
```

2. Copy `.env.example` to `.env.local`.
3. Set `WORDPRESS_API_URL` to your WordPress REST API base URL:

```text
WORDPRESS_API_URL=https://example.com/wp-json/wp/v2
```

4. Run the dev server:

```bash
npm run dev
```

5. Open:

```text
http://localhost:3000
```

## Required WordPress Setup

- Permalinks enabled
- Public posts published
- REST API accessible
- Blog categories created
- Featured images optional

## When To Use This

Use this path when the frontend must be React/Next.js, but WordPress should remain the content admin.

Use the block theme path when WordPress-native editing and simpler hosting matter more.

