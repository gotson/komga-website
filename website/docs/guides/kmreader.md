# Read with KMReader

[KMReader](https://kmreader.everpcpc.com/) is a native iOS, macOS, and tvOS client for Komga, featuring powerful DIVINA and EPUB readers, a multi-server vault, cloud-drive-like offline access, adaptive dashboards, and admin tools with realtime metrics via SSE.

<div class="text--center">

<img src="/assets/media/guides/kmreader/icon.svg" style={{maxHeight: '128px'}}/>

[![Download on the App Store](https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?releaseDate=1640044800)](https://apps.apple.com/app/id6755198424)

</div>

## Features

- **Multi-Server Vault** — Save unlimited Komga servers with password or API key authentication
- **Cloud-Drive Offline** — Background downloads with Live Activity on iOS. Offline policies (manual, latest, all) per series, with read lists and collections available offline
- **Advanced Browsing** — Search, deep metadata filters with all/any logic, grid/list layouts, and customizable dashboard sections with drag-and-drop reordering
- **DIVINA Reader** — LTR/RTL/vertical/Webtoon reading modes with spreads, zoom, customizable tap zones, and native page curl transitions
- **Native EPUB Reader** — Custom fonts (.ttf/.otf), theme presets, multi-column layouts, nested TOC navigation, and chapter gestures
- **Privacy Controls** — Optional blur overlay, on-device credentials, and incognito mode that keeps progress off the server
- **Admin Tools** — Metadata editing, library scans, task management, live metrics via SSE, and a filterable log viewer
- **Smart Caching** — Three-tier caches (pages, books, thumbnails) with adjustable limits and auto-cleanup

## Adding your Komga server

When you first open KMReader, you'll be greeted by the onboarding screen. Tap the **+** button to add your server:

1. Enter your Komga **server URL** (e.g., `https://komga.example.com` or `http://komga.local`)
2. Choose your authentication method:
   - **Username & Password** — Enter your Komga credentials
   - **API Key** — Paste an API key from your Komga user settings
3. Tap **Connect** to verify the connection

:::tip
You can add multiple servers and switch between them from settings.
:::

:::warning
KMReader can connect to **HTTP** servers when needed (ATS exceptions are supported), but **HTTPS** is strongly recommended for any connection outside your local network.
:::

## Offline Reading

KMReader supports downloading books for offline reading. You can set an **offline policy** per series from the series detail page:

| Policy     | Description                                   |
| ---------- | --------------------------------------------- |
| **Manual** | Download or remove books manually             |
| **Latest** | Keep the latest books downloaded automatically |
| **All**    | Keep the entire series downloaded             |

Read lists and collections stay available offline. Progress syncs back to your server when you're online. On iOS, downloads show a **Live Activity** so you can track progress.

## Track Read Progress

Reading progress syncs **automatically in real-time** as you read — no manual save needed. Features include:

- Instant sync to your Komga server while reading
- Offline progress stored locally and synced when connection restores
- Optional incognito mode keeps progress off the server when needed

## Platform Support

| Platform | Minimum Version | Notes                         |
| -------- | --------------- | ----------------------------- |
| iOS      | 17.0+           | Full feature support          |
| iPadOS   | 17.0+           | Optimized for larger displays |
| macOS    | 14.0+           | Native Mac experience         |
| tvOS     | 17.0+           | DIVINA reader only            |

## Useful Links

- [KMReader Website](https://kmreader.everpcpc.com/) — Features, screenshots, and privacy policy
- [GitHub Repository](https://github.com/everpcpc/KMReader) — Source code, issues, and releases
- [App Store](https://apps.apple.com/app/id6755198424) — Download KMReader
