# Read with Easemic

[Easemic](https://easemic.com) is a free and open-source ([Apache-2.0](https://github.com/dirtyfancy/easemic)) comic and manga reader for Android 10 and later. It reads Komga through OPDS v1.2, and can keep a copy of what you read in cloud storage you own.

## Features {#features}

- Browse your Komga libraries and series, and search them (OpenSearch).
- Read straight from the server: pages are streamed with OPDS page streaming, nothing has to be downloaded first.
- Download books to the phone for offline reading.
- Optionally keep a copy in your own storage: an S3-compatible bucket (such as Cloudflare R2 or Backblaze B2), WebDAV, Google Drive or OneDrive. Copies on WebDAV and the drives are always encrypted on the phone; on S3 encryption is your choice.
- Paged, right-to-left and vertical-strip reading modes.

:::info
Reading progress stays in Easemic: it is not written back to Komga.
:::

## Installation and configuration {#install}

1. Install the APK from [easemic.com](https://easemic.com) or the [GitHub releases](https://github.com/dirtyfancy/easemic/releases). Easemic is not on Google Play.
2. In Easemic, go to **More → OPDS libraries**.
3. Fill in:
   - **Display name**: any name, for example `Komga`
   - **OPDS URL**: `http(s)://your-server(:25600)(/baseUrl)/opds/v1.2/catalog`
   - **Username**: your Komga email
   - **Password**: your Komga password
4. Tap **Connect**. Your Komga server then appears under **Browse**.
