# Read with ComicVerse

Komga is supported in [ComicVerse](https://apps.apple.com/app/id6753079682), a comic reader for iPhone and iPad
(iOS / iPadOS 17.6 or later). Reading is free, with no ads and no subscription.

## Install and configure {#install}

1. Download ComicVerse from the [App Store](https://apps.apple.com/app/id6753079682).
2. In ComicVerse, open the **Library** tab, tap **+**, then **Comic Server → Add a Server**.
3. Enter the address you reach Komga on, for example `komga.example.com`, with a port or base URL if you set one.
   ComicVerse finds the catalog itself and uses `/opds/v2/catalog` when it can. A full catalog URL also works.
4. Tap **I have an account on this server**, then enter your Komga email address and password.
5. Leave **Share Reading Progress** on to sync your read progress to Komga.
6. Tap **Connect**, then **Add This Server**.

:::info
ComicVerse only connects to servers over HTTPS. Put Komga behind a reverse proxy with a certificate, or reach it
over a VPN.
:::

## Features {#features}

- Browse your libraries, series and collections, and search the whole server
- Stream pages straight from Komga, or download books for offline reading
- Read progress is sent to Komga, so other apps signed in to it stay in step
- Single page, double page, scroll and panel-by-panel views, with a right-to-left mode for manga
- Local CBZ, CBR, CB7, CBT, PDF and image-based EPUB files, and Kavita and other OPDS servers

For setup help and troubleshooting, see the [ComicVerse Komga guide](https://guides.comicverse.ai/opds/komga).
