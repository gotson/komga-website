# Read with Kasane

[Kasane](https://kasane.rosystain.com) is a modern comic reader designed for iPhone and iPad. It connects to Komga via the native REST API or OPDS (v1.2 / v2), fully inheriting server-side metadata and organization while delivering powerful multi-instance aggregation and a refined reading experience.

<div class="text--center">

<img src="/assets/media/guides/kasane/logo.png" alt="Kasane logo" style={{maxHeight: '112px', marginBottom: '16px'}}/>

[![Download on the App Store](https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?releaseDate=1640044800)](https://apps.apple.com/app/kasane-comic-reader/id6802585922)

</div>


## Features {#features}

- **Multi-instance aggregation**: Seamlessly connect multiple Komga instances and OPDS sources, featuring a unified home view and real-time cross-library search.
- **Compound filters**: Powerful conditional filters supporting multi-dimensional combinations of authors, genres, tags, and read status.
- **Full Komga integration**: Complete access to Recommend, Browse, Collections, and Readlists, with bidirectional real-time progress synchronization.
- **Flexible reading modes**: Supports single-page, double-page (spreads), webtoon (continuous vertical scroll), and page offset, with reading direction and display mode remembered per series.
- **Smart reading experience**: Intelligent wide-image splitting, spread stitching, and a page-jump slider with thumbnail previews.
- **iCloud sync**: Seamlessly synchronizes app preferences, library settings, and server configurations across all your devices.

_* The Free tier supports one remote source aggregated with local files. Multi-instance aggregation requires an in-app purchase._

## Installation and configuration {#install}

Open Kasane, go to the **Library** screen, tap **Add Source**, and select **Komga Server** or **OPDS Server**.

### Native connection (recommended)

Connect via the official REST API for the best experience:

- **Server Address**: The full server address, e.g., `https://komga.example.com`
- **Authentication**:
  - **Basic Auth**: Enter your Komga username and password.
  - **API Key**: Enter an API key generated from your Komga user settings (recommended).

Tap **Connect** to verify credentials. Once connected, you can sort, hide, or disable specific libraries in **Manage Shelf**. Tap **Save** to complete setup.

### OPDS connection

- **Server Address**: The full OPDS catalog URL, e.g., `https://komga.example.com/opds/v2/catalog`
- **Authentication**: Select **Basic Auth** and enter your Komga credentials.

:::tip
While the native REST API offers the most complete feature set, OPDS provides distinct advantages for restricted or guest accounts. Kasane pairs each OPDS source with a Mihon-style library, allowing users with limited server permissions to pin titles, curate their own local shelves, and manage reading lists directly on their device.
:::

## Compatibility and platform support {#compatibility}

| Platform | Minimum version |
| :------- | :-------------- |
| **iOS** | 17.0+ |
| **iPadOS** | 17.0+ |

## Useful links {#links}

- [Kasane Website](https://kasane.rosystain.com) — Features and privacy policy
- [App Store](https://apps.apple.com/app/kasane-comic-reader/id6802585922) — Download Kasane