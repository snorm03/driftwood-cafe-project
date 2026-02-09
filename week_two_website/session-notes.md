# Driftwood Cafe — Session Notes

## What Was Built

A fully responsive, multi-page React + Vite website for "Driftwood Cafe" using Tailwind CSS (v4) and React Router.

---

## Project Structure

```
week_two_website/
├── public/
│   └── logo.png              ← drop your logo here
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        ← sticky responsive nav, hamburger on mobile
│   │   └── Footer.jsx        ← three-column footer with links
│   ├── pages/
│   │   ├── Home.jsx          ← hero, coffee showcase grid, Valentine's specials, quick info
│   │   ├── About.jsx         ← founding story, mission, values, team
│   │   ├── Menu.jsx          ← tabbed drinks (4) / pastries & food (4) with images
│   │   ├── Contact.jsx       ← info sidebar + form with animated submit button (no backend)
│   │   └── Testimonials.jsx  ← stats bar, 6 placeholder reviews, CTA
│   ├── App.jsx               ← React Router routes
│   ├── main.jsx              ← entry point
│   └── index.css             ← Tailwind v4 @theme config + base/component layers
├── postcss.config.js         ← uses @tailwindcss/postcss
├── index.html                ← page title, Google Fonts (Inter)
└── package.json
```

---

## Color / Design System (defined in index.css @theme)

| Token              | Hex       | Usage          |
|--------------------|-----------|----------------|
| paper              | #EFEEDF   | Page background, badge text |
| heading            | #52662E   | h1–h3          |
| subheading         | #6E4A2E   | h4–h6, body copy |
| accent-blue        | #3C5B7C   | Buttons, prices, active nav |
| accent-gold        | #E8BB68   | Secondary buttons, highlights |
| accent-sage        | #8B9A71   | Decorative accents |

Reusable component classes: `.btn-primary`, `.btn-secondary`, `.card`

---

## Pages & Key Details

### Home
- Hero with logo placeholder (falls back to dashed circle if logo.png is missing)
- Coffee Showcase: 4-image grid (Unsplash) with hover zoom
- Valentine's Day Specials: 4 cards, each with a real image, solid accent-blue badge with paper-colored text, hover zoom on image
- Quick Info strip: Hours / Location / Get in Touch

### About
- Founding story with a cafe-interior image (Pexels)
- Mission quote
- Three value cards (Quality, Community, Sustainability) with circular images
- Team section: 3 members with portrait photos (Pexels)

### Menu
- Tabbed layout: Drinks / Pastries & Food
- 4 items per category, each with an Unsplash image and hover zoom
- Drinks include size options; pastries do not
- Dietary note footer

### Contact
- Left column: Address, Phone, Email, Hours + a map image
- Right column: Name / Email / Subject / Message form
- Submit button cycles: idle → spinning "Sending…" (1.5 s) → green checkmark "Message Sent!" (3 s) → resets
- Disclaimer note that no data is sent

### Testimonials
- Stats bar: 4.9 rating, 500+ customers, 5 years, 100% love
- 6 review cards with star ratings, quotes, avatar initials, roles, dates
- CTA section with "Leave a Review" and "Follow Us" buttons

---

## Changes Made During the Session

1. **Initial build** — scaffolded Vite + React, installed Tailwind CSS v4 and React Router, created all 5 pages, Navbar, and Footer.
2. **Tailwind v4 fix** — switched from legacy `tailwind.config.js` to CSS-based `@theme` config; installed `@tailwindcss/postcss`.
3. **Coffee imagery on Home** — added a 4-image showcase grid and subtle decorative coffee circles in the hero.
4. **Valentine's item images** — replaced SVG placeholders with real Unsplash images; added hover-zoom on each card.
5. **Badge text color** — changed Valentine's badge text from `text-accent-blue` to `text-paper` (#EFEEDF) and made the background solid `bg-accent-blue` for contrast.
6. **Menu trimmed to 4 + 4** — reduced drinks and pastries from 10 each to 4; added matching Unsplash images to every item; updated grid to 4 columns on large screens.
7. **User edits (preserved)** — Valentine's item names/images, About page images (Pexels cafe interior, team portraits, value icons), Contact map image, and various spacing tweaks were made directly and kept as-is.

---

## How to Run

```bash
npm run dev      # dev server (currently on :5174)
npm run build    # production build → dist/
```

## Next Steps (if needed)

- Replace `public/logo.png` with your actual logo.
- Swap any Unsplash/Pexels URLs for your own photos.
- Wire up the contact form to a real backend or service (e.g. Formspree, Netlify Forms).
- Add a favicon beyond the logo if desired.
