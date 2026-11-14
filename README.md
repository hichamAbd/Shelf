# Shelf

A home page that lists my apps: one line per app, with its icon and a sentence on what it does. Tap a line to open the app.

**Open it:** https://hichamabd.github.io/Shelf/

## Put it on your phone

- **iPhone:** open the link in Safari, tap Share, then Add to Home Screen.
- **Android:** open the link in Chrome, tap the menu, then Add to Home screen.

## Privacy

Shelf stores nothing and sends nothing. There are no analytics, no accounts and no outside servers: every file it uses is in this repo, and the page itself blocks requests to anywhere else. It works offline once it has been opened.

The colours follow the phone's light or dark setting.

## Add an app

The list is in [`js/apps.js`](js/apps.js). Add one entry (name, one sentence, kind, link, icon file), put the icon in `icons/apps/`, and add that icon to the file list in `sw.js` so it is saved for offline use too.

## How it is published

The repo has a single branch, `gh-pages`. Whatever is pushed there is live a minute or two later.
