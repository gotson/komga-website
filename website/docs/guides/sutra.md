# Read with Sutra

[Sutra](https://sutra-reader.com/) is a third-party ebook and comic reader for iOS and Android. Komga library access and full CBZ reading require Sutra Pro, a one-time purchase through each platform's store. Apple and Google purchases are separate.

## Install and connect {#install}

1. Install Sutra from the [App Store](https://apps.apple.com/ca/app/sutra-ebook-comic-reader/id6780096864) or [Google Play](https://play.google.com/store/apps/details?id=com.koustavdg.sutra).
2. Make sure your device can reach your Komga server. Use an account with access to the libraries you want to read.
3. In Sutra, choose **Add Library** and enter the server's base address, for example `https://komga.example.com`, without adding an OPDS catalog path.
4. Sign in with your Komga account email address and password. Sutra discovers the catalog from the server address.
5. Open the connected library and select a supported book.

Do not paste a full catalog URL ending in `/opds/v2/catalog` into this setup flow: Sutra adds the catalog path itself. Keep your credentials private and use a secured connection or VPN for remote access.

## Comic streaming and progress {#streaming}

- Sutra Pro can request CBZ pages from supported Komga setups without downloading the complete archive first.
- The Komga account must have **Page Streaming** permission and access to the library. An administrator can enable this in **Settings → Users** for that account.
- Individual pages still transfer over the network and may be cached. If streaming is unavailable, use the complete CBZ download. Download the full book before reading offline.
- Sutra synchronizes reading progress with Komga. Network access and the account's permissions apply.
- Supported comics can be read page by page or using Sutra's panel-by-panel mode, with right-to-left manga reading available.

## Limitations and help {#help}

CBR/RAR archives and DRM-protected files are not currently supported by Sutra. Komga's server format support does not imply that every format is supported by the client.

For current requirements and troubleshooting, see the [Sutra Komga guide](https://sutra-reader.com/komga-reader.html) and [Sutra Help](https://sutra-reader.com/help.html#komga).
