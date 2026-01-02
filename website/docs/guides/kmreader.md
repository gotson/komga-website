# Read with KMReader

[KMReader](https://kmreader.everpcpc.com/) is a native iOS, macOS, and tvOS client for Komga, featuring powerful comic (DIVINA) and EPUB readers with multi-server and offline support, as well as admin tools and realtime dashboard refresh via SSE like the WebUI.

<img src="/assets/media/guides/kmreader/icon.svg" style={{maxHeight: '128px'}}/>

[![Download on the App Store](https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?releaseDate=1640044800)](https://apps.apple.com/app/id6755198424)

## Features

- **Multi-Server Vault** — Save unlimited Komga servers with password or API key authentication
- **Offline Reading** — Background downloads with Live Activity on iOS. Set offline policies (manual, latest, all) per series. Progress syncs when connection restores
- **Flexible Browsing** — Search, filters, grid/list layouts with customizable dashboard sections per library
- **DIVINA Reader** — LTR/RTL/vertical/Webtoon reading modes with spreads, zoom, tap zones, and page export
- **EPUB Reader** — Custom fonts and themes, pagination, TOC navigation, and incognito mode
- **Admin Tools** — Metadata editing, library scans, task management, and live metrics via SSE
- **Smart Caching** — Three-tier caches (pages, books, thumbnails) with adjustable limits and auto-cleanup

## Adding your Komga server

When you first open KMReader, you'll be greeted by the onboarding screen. Tap the **+** button to add your server:

1. Enter your Komga **server URL** (e.g., `https://komga.example.com`)
2. Choose your authentication method:
   - **Username & Password** — Enter your Komga credentials
   - **API Key** — Paste an API key from your Komga user settings
3. Tap **Connect** to verify the connection

:::tip
You can add multiple servers and switch between them from settings.
:::

:::warning
For connections outside your local network, ensure your Komga server is accessible over **HTTPS**. Apple restricts unencrypted traffic for non-browser apps.
:::

## Offline Reading

KMReader supports downloading books for offline reading. You can set an **offline policy** per series from the series detail page:

| Policy                    | Description                                                         |
| ------------------------- | ------------------------------------------------------------------- |
| **Manual**                | Download or remove books manually                                   |
| **Unread Only**           | Auto-download all unread books                                      |
| **Unread Only + Cleanup** | Auto-download unread books and remove them after you finish reading |
| **All**                   | Keep the entire series downloaded                                   |

Progress syncs back to your server when you're online. On iOS, downloads show a **Live Activity** so you can track progress.

## Track Read Progress

Reading progress syncs **automatically in real-time** as you read — no manual save needed. Features include:

- Instant sync to your Komga server while reading
- Offline progress stored locally and synced when connection restores

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
