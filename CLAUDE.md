# Shelf: notes for future sessions

## What it is

A home page that lists the owner's own apps. One line per app: icon, name, one sentence, and a tag (Web or Android). Tapping a line opens the app or its download. It remembers nothing.

The owner is not a developer and works from an iPhone. Write to him in short, plain messages.

## Decisions already made (do not ask again)

- Look: "Contents page". Cool white, deep ink, one violet accent. A plank under the title with three objects standing on it is the one decorative element; keep everything else quiet.
- Name: Shelf. Language: English.
- Order: web apps first, Android downloads last.
- The list lives in `js/apps.js`. The owner asks a session to add an app; there is no editing on the page.

## To add an app

1. Add an entry to `js/apps.js`.
2. Put its icon in `icons/apps/` (the app's own icon, copied from its repo).
3. Add the icon to `FILES` in `sw.js`.
4. Check the link is the app's real address before publishing.

## House rules

- Light and dark follow the phone's setting. No manual switch.
- No tracking, no accounts, no outside servers. Fonts, icons and code stay in the repo. The content security policy in `index.html` allows only the app's own files: keep it.
- Nothing personal in the code or the commit messages: the repo is public.
- All his web apps share one web address, so any storage key or cache name must start with `shelf-`.
- Plain HTML, CSS and JavaScript with no build step. Relative links only.
- iPhone fit: safe areas, touch targets of 44px or more, reduced motion respected.

## How it is published

Single branch `gh-pages`. Push straight to it: the owner has given standing permission, and the page goes live from that branch a minute or two later at https://hichamabd.github.io/Shelf/.

Before saying a change is live, check that the latest "pages build and deployment" run succeeded (`gh api repos/hichamAbd/Shelf/actions/runs`).
