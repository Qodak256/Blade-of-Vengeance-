# Blade of Vengeance

A mobile-first, browser-playable tactical strategy game prototype with a pseudo-3D/isometric battlefield, touch controls, turn-based enemies, vitality, renown, and a PWA install/offline shell.

## Run locally
Open `index.html` in a modern browser. Gameplay works without a server, but PWA installation and service-worker offline caching require HTTPS or localhost.

## Publish online
1. Create a GitHub repository and upload every file in this folder.
2. On GitHub, open **Settings → Pages**.
3. Choose **Deploy from a branch**, select `main` and `/ (root)`, then Save.
4. Wait for the HTTPS site URL to appear in Pages settings.
5. Open the URL on your phone and play. For updates, upload changed files and allow the deployment to finish.

Alternative: drag the project folder into a static hosting service such as Netlify or Cloudflare Pages.

## Add to home screen
- **iPhone/iPad (Safari):** open the published HTTPS URL → Share → Add to Home Screen → Add.
- **Android (Chrome):** open the HTTPS URL → browser menu → Install app or Add to Home screen.
- The service worker caches the game shell after the first online visit, allowing the shell to load offline on supported browsers.

## Current prototype controls
- Tap a highlighted adjacent tile to move.
- Tap an adjacent enemy to attack.
- **Rally** restores up to 18 vitality and uses your action.
- **Wait** ends the turn so enemies attack or advance.
- Defeat all enemies to win. The R key resets and Space ends a turn on desktop.

## Roadmap
1. Replace pseudo-3D canvas figures with a proper 3D scene (e.g. Three.js) and animated models.
2. Add map selection, equipment, campaign saves, sound and accessibility settings.
3. Add online accounts and multiplayer only after the core game is balanced.
4. Keep the first release free; consider monetization only if desired later.
