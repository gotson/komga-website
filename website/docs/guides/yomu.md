# Read with Yomu

Komga is supported natively in [Yomu](https://yomureader.app/), a free manga, webtoon, and manhwa reader for iPhone, iPad, and Mac. No separate extension or repository to install, Komga support is built in.

## Install and configure {#install}

1. Download Yomu from the [App Store](https://apps.apple.com/app/yomu/id6760745234) (iOS, iPadOS, macOS).
2. Open the app and tap **Browse** → tap the **+** button → choose **Add Komga Server**.
3. Enter your server details:
   - **Name**: optional label shown in the Browse list
   - **Server URL**: e.g. `https://my.server:25600`
   - **Username** and **Password**
4. Tap **Test Connection** to verify, then **Save**.

:::tip
The server URL has no trailing slash. If you use a base URL path (e.g. `https://my.server/komga`) include it in the field.
:::

You can configure multiple Komga servers, each one appears as its own entry under _Browse_.

## Browse {#browse}

Yomu lets you browse series, filter, and search across every Komga server you've added.
- Browse popular and latest series
- Search by title across the server
- Filter by status, genre, or reading progress
- Tap any series to see chapters and start reading

## Read {#read}

The reader supports left-to-right (manga), right-to-left, and vertical / webtoon scroll modes, set per series. Pages download in the background for offline reading.
- Single page, double page, or continuous scroll
- Read-state syncs back to the Komga server automatically as you finish chapters
- Bookmarks and per-series reader settings
- External display support on iPad and Mac

## Track read progress {#read-progress}

Reading progress (last page read, completed chapters) syncs to your Komga server automatically, no extra setup. Open the same series on a different device or in the Komga web UI and it picks up where you left off.

You can also link series to AniList, MyAnimeList, Kitsu, or MangaUpdates for cross-service tracking.

## Compatibility {#compatibility}

For best results, keep both up to date:
- Komga server (latest stable)
- Yomu (latest from the App Store)

Yomu uses the official Komga REST API, no plugins or shims needed.
