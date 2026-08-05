# Wheel Craft Website — GitHub Pages export

Static, self-contained HTML export of the Wheel Craft site.

## Pages
- `index.html` — Home
- `Wheel Craft Services.html`
- `Wheel Craft Quote.html`
- `Wheel Craft Reviews.html`
- `Wheel Craft FAQ.html`
- `Wheel Craft Contact.html`

## Deploy to GitHub Pages
1. Create a new GitHub repo and push the contents of this folder to it (keep the `assets/` folder alongside the HTML files — two before/after images load from there).
2. In the repo: **Settings → Pages → Deploy from a branch**, select `main` / `root`.
3. Your site will be live at `https://<username>.github.io/<repo-name>/`.

## Notes
- Each HTML file is a fully self-contained page (fonts, styles, scripts, most images inlined) — just needs `assets/` present for two before/after comparison photos.
- Links between pages use plain relative filenames, so folder structure must stay flat as-is.
- Placeholder photography is used throughout (`assets/generated/`) — swap in real photos/video whenever ready by editing the `<img>`/background references in each HTML file.
