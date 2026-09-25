# Read with Glimshelf

[Glimshelf](https://glimshelf.com) is a native comic, manga, PDF, and EPUB reader for iPhone and iPad with built-in Komga support.

:::note Public beta
Glimshelf is currently available through [TestFlight](https://testflight.apple.com/join/eCSAAcQF). It requires iOS or iPadOS 18 or later and Komga 1.20.0 or later. The beta includes Pro features; this does not grant a permanent Pro unlock for the future App Store release.
:::

## Adding your Komga server {#add-server}

1. Install Glimshelf using the TestFlight link above.
2. Open Glimshelf and choose **Komga** during setup.
3. Enter your **Server URL**, for example `https://komga.example.com`. Use the server's base URL, including any configured base path, rather than an OPDS feed URL.
4. Choose API key authentication and enter your Komga API key, or choose username and password authentication and enter your Komga account credentials.
5. Tap **Run Connection Doctor** to check connectivity and authentication.
6. When the connection check succeeds, tap **Save**. Glimshelf can then sync and display your library.

Use an address reachable from your iPhone or iPad. For remote access, use HTTPS or your private VPN connection. Your Komga account's library access and streaming/download permissions still apply.

## Reading and offline use {#reading}

Browse your library, open a book, and choose the reading direction and layout appropriate for your content. Glimshelf supports left-to-right, right-to-left, vertical scrolling, and double-page layouts for image-based books, plus an EPUB reader.

Download books before going offline and wait for the downloads to finish. Reading progress recorded offline is queued for synchronization when the server is reachable again. If the device and server have different saved progress, Glimshelf can present a choice of where to resume.

Glimshelf also supports Komga reading lists and collections.

## Free and Pro {#pricing}

The free tier includes one connected server, reading, server progress sync, and up to five downloaded books retained at a time. Optional Glimshelf Pro adds features including unlimited servers and downloads, reading-order tools, and Bubble Zoom. See the [Glimshelf website](https://glimshelf.com) for the current feature comparison and pricing.

## Beta feedback {#feedback}

Send Glimshelf-specific feedback through TestFlight or the app's Support screen. Include your Glimshelf and Komga versions and the steps needed to reproduce the problem. Do not include passwords or API keys.
