# Read with LiveComics

[LiveComics](https://livecomics.to/komga-app) is a comic reader for the web, iPhone and iPad, Android and Windows. It browses Komga through OPDS v1.2, imports the books you pick, and shows them page by page or one panel at a time, with optional read-aloud narration, sound effects and audio description.

LiveComics is closed source. Connecting, browsing, and reading page by page or panel by panel are free: a free account imports 30 comics a month and holds 1 GB. Narration needs a paid plan or a top-up.

:::warning
LiveComics connects to Komga from its own servers, not from your device. Komga must be reachable from the internet at a public `https://` address with a domain name and a valid certificate, for example through a reverse proxy, a Cloudflare Tunnel or Tailscale Funnel. Home-network addresses, IP addresses and plain `http://` are refused.
:::

:::info
Books are not streamed: each book you pick is downloaded to LiveComics' servers and stored in your account. Reading progress stays in LiveComics: it is not written back to Komga.
:::

## Installation and configuration {#install}

LiveComics runs in a browser at [livecomics.to](https://livecomics.to), with nothing to install. There are also apps on the [App Store](https://apps.apple.com/app/id6792930184), [Google Play](https://play.google.com/store/apps/details?id=to.livecomics.app) and the [Microsoft Store](https://apps.microsoft.com/detail/9NGGWCT8242Z).

1. In Komga, open **Account settings → API keys** and create a key. An API key is recommended over your password, and you can revoke it from the same screen at any time.
2. In LiveComics, open your library, tap **From a link** next to **Add**, then choose **Your library server**.
3. Set **Server type** to **Komga** and fill in:
   - **Server address**: your Komga `https://` address, for example `https://komga.example.com`. The full `/opds/v1.2/catalog` URL works too.
   - **API key**: the key from step 1. To sign in with your Komga email and password, choose **Use a password instead**.
4. Tap **Connect**.

Your API key or password passes through LiveComics' servers to your Komga server on each request. It is not stored there. An API key can be remembered on your own device if you tick **Remember this server on this device**; a password is never saved.

## Browse and import {#browse}

Browse your libraries and series, or search them (OpenSearch). Tick the books you want and press **Add**. LiveComics' servers download them from Komga two at a time, so the download does not use your phone's data plan. When they have downloaded, choose how to import them and press **Add** again.

## Compatibility {#compatibility}

| Topic          | Details                                                                  |
|----------------|--------------------------------------------------------------------------|
| Platforms      | Web browser, iPhone and iPad, Android, Windows                           |
| Protocol       | OPDS v1.2, with OpenSearch. No page streaming                            |
| Server address | Public `https://` address with a domain name and a valid certificate     |
| Authentication | API key (recommended) **or** email and password                          |
| Formats        | CBZ, CBR and PDF, up to 2.6 GB each. EPUB cannot be imported yet         |
| Progress sync  | No                                                                       |
| Pricing        | Free to connect, browse and read. Narration is paid                      |

For help making a home server reachable, see the [LiveComics remote access guide](https://livecomics.to/komga-kavita-remote-access).
