# Read with Apex Comics

[Apex Comics](https://apex-comics.uppr.be) is an Android comic and manga reader that connects
to Komga using the **REST API**.

Install it from [Google Play](https://play.google.com/store/apps/details?id=com.uppr.apexcomics).
Connecting a Komga server, browsing your collection, and downloading books for offline reading
are **free**. Two-way reading progress sync with Komga is part of **Apex Premium** (one-time
lifetime unlock).

## Add a Komga server {#add-komga-server}

1. Open **Settings → Libraries**.
2. Tap **Add library**, then choose **Komga server**.
3. Give the library a **name** (for example, _Home NAS_).
4. Enter your server **URL**.

   Apex expects the base address of your Komga instance. Examples:
   - `https://demo.komga.org`
   - `https://komga.example.com`
   - `http://192.168.1.12:25600`
   - `komga.local` (HTTPS is assumed when no scheme is provided)

   Include a **port** in the URL when Komga does not run on the default HTTP/HTTPS port.

5. Choose how to authenticate:
   - **Email and password** — your Komga user credentials.
   - **API key (advanced)** — a Komga API key sent as `X-API-Key` (recommended for Komga 1.20+
     and easy to revoke without changing your password).

6. Tap **Test connection**. If the server is reachable and your credentials are valid, Apex lists
   the libraries available on that server.
7. Select the **Komga library** you want to add, then tap **Add library**.

Apex validates the connection, stores your credentials securely on the device (they are never
included in backups), and starts listing books from the selected library.

:::tip
Each Apex library maps to **one** Komga library on a given server. To follow several Komga
libraries from the same server, add multiple Apex libraries and pick a different Komga library
each time.
:::

:::warning
If your server uses plain **HTTP** (common on a home LAN without TLS), Apex shows a security
warning before continuing. Only proceed on a network you trust.
:::

:::info
Your Komga account needs permission to **browse** the library. To download books for offline
reading, it also needs the **FILE_DOWNLOAD** permission.
:::

## Browse your collection {#browse}

Once connected, the Komga library appears in Apex's library switcher like any other source.

- Books are fetched from Komga over the REST API and grouped by **series** using Komga metadata.
- Covers use Komga thumbnails.
- Remote books are marked with a cloud badge; downloaded books show a cached badge.
- **Pull down** on the library to refresh the listing when your server is online.

The server must be reachable while you browse or refresh. Apex does not mirror your entire
collection locally — it keeps a lightweight catalog and downloads archives on demand.

## Offline reading {#offline-reading}

To read a book, Apex downloads the full archive from Komga and opens it in the reader.

- Tap a remote book to start a download, confirm if prompted, then read.
- Or **long-press** a book and use the download action to cache it ahead of time.

Supported formats are the same as for local files: **CBZ**, **CBR** (including RAR5), and **PDF**.

Once downloaded, a book opens from local storage even if the server is offline. You can filter
the library to show **Downloaded** or **In the cloud** books.

:::tip
Downloaded Komga comics behave like local files in the reader: horizontal, vertical, and
dual-axis modes, deep zoom, manga reading direction (right-to-left or left-to-right), and
ambient mode are all available.
:::

## Reading progress sync {#reading-progress}

With **Apex Premium**, reading progress is synchronized with Komga so you can pick up where you
left off on another device or in the Komga web reader.

Without Premium, progress is kept **locally in Apex only** — no progress is read from or written
to the server.

When Premium is active, sync is bidirectional and conflict-safe:

- **On open** — Apex pulls the latest progress from Komga (`GET /api/v1/books/{bookId}/progression`)
  and applies it if the server timestamp is newer than the local one.
- **On close** — when you leave the reader, Apex pushes your current page back to Komga
  (`PUT /api/v1/books/{bookId}/progression`), including a device identifier.

Progress sync requires the device to be **online** and the Komga server to be **reachable**.
If the server is temporarily unavailable, Apex keeps your local progress and resumes syncing
the next time conditions allow.

:::tip
Because Apex treats a Komga server as a first-class library, Premium features such as **Guided
View**, **X-Ray**, and **Premium Stats** also work on comics served from Komga — not only on
local files.
:::

## Backup and restore {#backup-restore}

Apex backup files include your server URL and library configuration, but **never** your Komga
credentials. After restoring a backup on a new device, open **Settings → Libraries** and
authenticate again to reconnect the Komga library.

## Compatibility {#compatibility}

| Topic                    | Details                                                        |
| ------------------------ | -------------------------------------------------------------- |
| Platform                 | Android                                                        |
| Komga API                | REST `v1` (session via `v2/users/me` for email/password login) |
| Authentication           | Email/password **or** API key                                  |
| Offline                  | Full archive download; no page-by-page streaming               |
| Progress sync            | Premium — two-way, timestamp-based conflict resolution         |
| Collections / Read Lists | Not yet supported (planned)                                    |

For setup help, feature requests, or bug reports, visit
[apex-comics.uppr.be](https://apex-comics.uppr.be) or the community at
[r/apexcomics](https://www.reddit.com/r/apexcomics/).
