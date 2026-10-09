# Blade of Vengeance · Prototype 0.2

A mobile-first 3D tactical fantasy strategy game built with Three.js. Includes an isometric 3D battlefield, animated low-poly warriors, enemy turns, path-aware movement up to two tiles, Strike, Whirlwind, Blade Dash, vitality, renown and a PWA shell.

## Run locally
Because the game imports Three.js as an ES module, serve this folder from localhost rather than opening `index.html` directly. For example, if Python is installed:
`python -m http.server 8000`
Then open `http://localhost:8000`.

## Publish online
1. Create a GitHub repository and upload all files from this folder.
2. In repository **Settings → Pages**, select **Deploy from a branch**, choose `main` and `/(root)`, then Save.
3. Wait for GitHub Pages to publish the HTTPS URL.
4. Open the URL on your phone and play.

Alternative static hosts include Netlify or Cloudflare Pages.

## Add to home screen
- **iPhone/iPad:** open the HTTPS URL in Safari → Share → Add to Home Screen.
- **Android:** open the HTTPS URL in Chrome → menu → Install app or Add to Home screen.
The service worker attempts to cache the game shell and the Three.js module for subsequent offline launches. Offline behavior depends on the first successful online load and browser cache policies.

## Controls
- Tap a highlighted ground tile to move up to two tiles.
- Tap an enemy or use Strike to attack an adjacent foe.
- **Whirlwind:** 22 damage to every adjacent enemy.
- **Blade Dash:** leap beside the nearest enemy within three tiles and deal 38 damage.
- **Rally:** recover up to 18 vitality (uses your action).
- **End Turn:** enemies attack or advance.
- Defeat all enemies to win. Press R to restart on desktop.

## Current limits / roadmap
This is a proper lightweight 3D scene using primitive low-poly characters, not final production art. Next improvements: polished 3D models/animations, terrain pathfinding and cover rules, ability cooldowns, sound, campaign progression, save slots, accessibility, and then online multiplayer. No monetization is enabled.


## v0.3 Anime Edition
Toon shading with ink outlines, ruined-castle backdrop, glowing rune circle, slash effects and fireflies. Gameplay unchanged. Service worker cache bumped to v3.
