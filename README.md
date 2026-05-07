# Netflix-for-your-partner 💌

A pixel-faithful Netflix clone you can customize for your partner — profile select, PIN gate, "Who's watching?" screen, hero banner, and themed rows ("Top 10 in Our House This Week", "Because You Loved Me", etc.).

## Quick start

1. Drop photos / short videos into `assets/` (see `assets/README.md`).
2. Open `config.js` and change:
   - `pin` (the 4-digit code your partner enters)
   - `profiles[0].name` and `profiles[0].avatar`
   - The `hero` block (the big featured banner)
   - The `rows` array (each row's title and the items in it)
3. Open `index.html` in any browser. Done.

> **Tip:** because of browser autoplay rules, the page opens with a "Tap to start" button so the iconic ta-dum sound can play. Tap it, then screen-record from there.

## File structure

```
.
├── index.html      # Markup (don't usually need to edit)
├── styles.css      # Netflix-faithful styling
├── app.js          # Screen flow + rendering (don't usually need to edit)
├── config.js       # 🔧 Edit this — all your customization lives here
└── assets/         # 🖼️ Photos and videos go here
```

## Recording tips

- **For TikTok / Reels (9:16):** open in your browser, hit F11 for fullscreen, and screen-record. Crop in your editor.
- **For desktop / wider screens:** record at 1920x1080.
- Videos in cards will autoplay muted on loop, just like real Netflix hover previews.

## Local server (optional)

If your browser blocks local file access for videos, run a quick server:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```
