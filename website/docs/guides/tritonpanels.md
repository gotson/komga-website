# Read with TritonPanels

[TritonPanels](https://tritonpanels.tritonapps.com/komga-app) is a comic and manga reader for iPhone, iPad
and Android that connects to Komga directly, with reading progress synced **both ways**.

Install it from the [App Store](https://apps.apple.com/ie/app/tritonpanels-comic-book-reader/id6782908043)
(iOS / iPadOS 17 or later) or [Google Play](https://play.google.com/store/apps/details?id=com.tritonapps.tritonpanels)
(Android 7.0 or later). TritonPanels is a subscription app with a 14-day free trial; there is no free tier.

TritonPanels requires **Komga 1.19 or later**.

## Create an API key {#api-key}

In the Komga web interface, open **Account settings → API keys** and create a key. An API key is
recommended over your password, and you can revoke it from the same screen at any time.

## Add your Komga server {#add-server}

1. In TritonPanels, tap the **+** button in your library to open **Connect Storage**.
2. Under **CATALOGS**, tap **Komga**.
3. Enter a **Name** and the **Server address**, for example `http://192.168.1.20:25600` at home, or
   `https://komga.example.com`.
4. Under **Sign in with**, choose **API key** and paste the key, or choose **User name and password**.
5. Tap **Test and save**.
6. On iPhone and iPad, allow **Local Network** access when iOS asks. Without it the app cannot reach a
   server on your home network.

The key or password is stored only in the iOS Keychain or Android encrypted storage, and is sent only to
your server. The connection then appears under **Catalogs** on the Libraries screen.

:::warning
If no scheme is entered, `https://` is assumed. Plain HTTP is accepted only for home-network addresses
(`192.168.x.x`, `10.x.x.x`, `172.16–31.x.x`), after a confirmation prompt. The following are **not**
accepted: plain HTTP to a public address, plain HTTP to a Tailscale address (`100.x.x.x`), and
self-signed certificates. From TritonPanels 2.0.1, Tailscale works over HTTPS on a `*.ts.net` MagicDNS
name served with Tailscale Serve. To read away from home, use Tailscale Serve, a VPN into your home
network, or a reverse proxy with a certificate from a public authority.
:::

## Browse and read {#browse}

The connection follows Komga's own structure: libraries, then series, then books. Search uses Komga's
server-side search. Opening a book streams it into the full reader, with Single Page, Double Page,
Continuous Scroll and Panel by Panel views and a Right to Left (Manga) reading direction.

## Read progress {#read-progress}

While reading, TritonPanels sends the current page to Komga every few seconds and again when the book is
closed. When a book is opened, the app shows the progress held by the server, including pages read in the
Komga web reader. **Mark as read** and **Mark as unread** are sent to the server too.

## Offline reading {#offline-reading}

Tap **Make available offline** on a book to download it in the background. Downloaded books can be read
when the server is unreachable, and progress made offline is sent once the server is reachable again.
**Import to My Library** copies a book into the local TritonPanels library as an ordinary comic.

## Compatibility {#compatibility}

| Topic          | Details                                                           |
| -------------- | ----------------------------------------------------------------- |
| Platforms      | iPhone and iPad (iOS / iPadOS 17+), Android 7.0+                  |
| Komga version  | 1.19 or later                                                     |
| Authentication | API key (recommended) **or** user name and password               |
| Progress sync  | Two-way                                                           |
| Offline        | Per-book download; offline progress is sent on reconnect          |
| Pricing        | Subscription after a 14-day free trial                            |

For setup help, see the [TritonPanels Komga guide](https://tritonpanels.tritonapps.com/guides/komga-app-for-iphone-and-android)
or [TritonPanels support](https://tritonpanels.tritonapps.com/support).
