# Build Plan

## Prompt
- I would like to turn the hero image on the home page into a carousel that automatically flips through four images every two seconds. Can you break down how I might build this feature into multiple small steps?

## Step 1: Add carousel state and image array to Home.jsx
- Add `useState` to the existing import (line 1 already imports `useEffect`, `useRef`)
- Define an array of 4 image objects (src URL + alt text) — the first entry keeps `/hero-home.png`, the other three use Unsplash cafe/coffee URLs
- Add `const [currentIndex, setCurrentIndex] = useState(0)`

## Step 2: Add auto-rotation useEffect to Home.jsx
- Add a new `useEffect` that runs a `setInterval` every 2000ms
- Each tick: `setCurrentIndex(prev => (prev + 1) % images.length)`
- Return a cleanup function that calls `clearInterval`

## Step 3: ### Replace the static `<img>` with carousel markup
- Keep the outer `<div>` container and its classes (`max-w-4xl`, `rounded-2xl`, `shadow-xl`, `mb-6`)
- Inside, use `position: relative` with all 4 `<img>` tags stacked via `position: absolute`
- Each image gets `opacity: 1` when its index matches `currentIndex`, `opacity: 0` otherwise
- Apply a CSS `transition: opacity 0.8s ease-in-out` for the crossfade effect

## Step 4: Add crossfade CSS to `index.css`
- Add a `.carousel-image` class with `position: absolute; inset: 0; opacity: 0; transition: opacity 0.8s ease-in-out`
- Add a `.carousel-image.active` class with `opacity: 1`
- This keeps the Tailwind-first approach while using custom CSS for the animation (same pattern as the existing `.slide-in-item` classes)

## Step 5: Add dot indicators below the carousel
- Render a row of 4 small circles beneath the image container
- The active dot is highlighted using the `bg-accent-blue` theme color; inactive dots use `bg-accent-sage/50`
- Clicking a dot sets `currentIndex` to jump to that image
