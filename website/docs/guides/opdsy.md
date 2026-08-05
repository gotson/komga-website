# Read with OPDSy

<div class="text--center">
  <img src="/assets/media/guides/opdsy/banner.png" alt="OPDSy, a beautiful reader for your books and comics"/>
</div>

[OPDSy](https://play.google.com/store/apps/details?id=com.opdsy) is an Android comic, manga and
ebook reader for self-hosted OPDS libraries. It connects to Komga over **OPDS**, streams comics
page-by-page with **OPDS-PSE**, and reads your Komga library alongside files stored on the device.

Install it from [Google Play](https://play.google.com/store/apps/details?id=com.opdsy). OPDSy is a
one-time paid app with no ads, no accounts and no tracking.

:::info
As well as Komga, OPDSy can read any folder on your device as a local library, and can open a file
sent to it from another app. Downloaded and on-device books sit alongside your Komga library on the
home screen, so everything you read is in one place.
:::

## Add your Komga server {#add-komga-server}

1. Open **Settings → Libraries** and tap **+ Add library**.
2. Under **Server type**, choose **Komga**. This fills the address field with the correct
   catalogue format.
3. Give the library a **Name** (for example, _Home NAS_).
4. Enter the **OPDS address**:

   ```
   http(s)://your-server(:25600)(/baseUrl)/opds/v1.2/catalog
   ```

   For example:
   - `https://demo.komga.org/opds/v1.2/catalog`
   - `http://192.168.1.12:25600/opds/v1.2/catalog`

5. Enter the **Username** and **Password** of your Komga user. Komga's OPDS feed uses HTTP Basic
   authentication with the same credentials as the web UI.
6. Optionally pick a **Colour tag**, which is used to badge this server's books throughout the app.
7. Tap **Test connection** to check the address and credentials, then tap **Add library**.

<div class="text--center">
  <img src="/assets/media/guides/opdsy/add-library.png" alt="Adding a Komga library in OPDSy" style={{maxHeight: '600px'}}/>
</div>

Passwords are stored in the device keychain rather than in plain text.

## Browse your library {#browse}

Komga's OPDS feeds map directly onto OPDSy's browser:

- **Keep Reading**, **On Deck** and **Latest** appear as navigation entries on the Komga source.
- Series, collections and read lists are browsable as folders.
- Covers use Komga's thumbnails, and are cached so your library stays readable when the server is
  temporarily unreachable.
- Books and folders can be marked as **favourites** for one-tap access from the home screen.

<div class="text--center">
  <img src="/assets/media/guides/opdsy/browse.png" alt="Browsing a comics folder in OPDSy" style={{maxHeight: '600px'}}/>
</div>

## Page streaming {#page-streaming}

Komga advertises the [OPDS Page Streaming Extension](https://anansi-project.github.io/docs/opds-pse/intro),
and OPDSy uses it by default (**OPDS-PSE 1.0**). Comics are read **page-by-page**, so no full
archive download is needed to start reading, and the next few pages are prefetched as you go.

Because pages arrive as images, the archive format doesn't matter: **CBR** and **CB7** comics stream
from Komga perfectly, even though OPDSy cannot open those archives from local storage. **PDFs**
stream the same way, in the comic reader.

The comic reader supports paged or continuous vertical scroll (webtoon), left-to-right and
right-to-left (manga) direction, fit-to-screen or fit-to-width, dual-page spreads in landscape, and
pinch or double-tap zoom.

<div class="text--center">
  <img src="/assets/media/guides/opdsy/reader.png" alt="The OPDSy comic reader with its display settings open" style={{maxHeight: '600px'}}/>
</div>

## Offline reading {#offline-reading}

Long-press any book, comic, series or folder and choose to download it. Whole folders are downloaded
recursively, preserving the structure, and interrupted downloads resume automatically.

Downloaded items are readable with no connection at all, and are listed under the **Downloads** tab
where they can be removed individually.

:::info
Downloading a comic requires your Komga user to have the **FILE_DOWNLOAD** permission. Page
streaming does not.
:::

<div class="text--center">
  <img src="/assets/media/guides/opdsy/downloads.png" alt="The Downloads tab listing comics available offline" style={{maxHeight: '600px'}}/>
</div>

## Read progress {#read-progress}

OPDSy currently tracks your reading position **on the device**, and does not yet write it back to
Komga. Syncing progress with Komga is on the roadmap.

**Continue Reading** on the OPDSy home screen therefore reflects what you have read in OPDSy, and is
independent of Komga's own **Keep Reading** and **On Deck** feeds.

Progress, favourites, highlights and bookmarks can optionally be synced between your own devices
using OPDSy's end-to-end-encrypted sync, which does not involve your Komga server.

## Supported formats {#formats}

Komga serves EPUB, PDF and CBZ/ZIP comics, all of which OPDSy reads. Formats Komga does not index
(such as MOBI, AZW3 and FB2) are unavailable regardless of the client. OPDSy supports those
formats for other servers and for on-device folders.

| Format from Komga | How OPDSy reads it                     |
| ----------------- | -------------------------------------- |
| CBZ / ZIP         | Comic reader, streamed via OPDS-PSE    |
| CBR / CB7         | Comic reader, streamed via OPDS-PSE    |
| PDF               | Comic reader, streamed via OPDS-PSE    |
| EPUB              | Ebook reader, with text-to-speech      |

## Other features {#other-features}

Everything below works with books and comics served by Komga, and with files held on the device.

### One home screen {#home}

**Continue Reading** puts you back where you left off, and favourites give one-tap access to the
books and folders you return to. Your Komga library carries a colour badge of your choosing, and
loads independently of anything stored on the device, so a Komga instance that is asleep or
unreachable never holds up the rest of the screen.

<div class="text--center">
  <img src="/assets/media/guides/opdsy/home.png" alt="The OPDSy home screen showing Continue Reading and favourites" style={{maxHeight: '600px'}}/>
</div>

### Ebook reader {#ebook-reader}

EPUBs from Komga open in a reader with adjustable font family and size, line spacing, and light,
sepia, dark and black themes.

Passages can be highlighted in five colours and annotated with your own notes. Highlights and
bookmarks from books, PDFs and comics all collect into a single list.

<div class="row">
  <div class="col col--6 text--center">
    <img src="/assets/media/guides/opdsy/ebook-reader.png" alt="The OPDSy ebook reader with its typography controls open" style={{maxHeight: '520px'}}/>
  </div>
  <div class="col col--6 text--center">
    <img src="/assets/media/guides/opdsy/highlights.png" alt="Highlighting a passage in five colours with a note" style={{maxHeight: '520px'}}/>
  </div>
</div>

### Listen to your books {#text-to-speech}

Any ebook can be read aloud, sentence by sentence, continuing automatically across chapters. Speed
and pitch are adjustable. On-device voices work offline and keep what you read private, while
online voices sound more natural.

<div class="text--center">
  <img src="/assets/media/guides/opdsy/text-to-speech.png" alt="Text-to-speech settings with speed, pitch and voice options" style={{maxHeight: '600px'}}/>
</div>

### E-ink friendly {#e-ink}

Independent toggles for a high-contrast black-on-white theme and for switching animations off, to
avoid ghosting on slow-refresh e-ink screens.

<div class="text--center">
  <img src="/assets/media/guides/opdsy/e-ink.png" alt="Appearance settings with high-contrast mode and animations toggles" style={{maxHeight: '600px'}}/>
</div>

### Optional cross-device sync {#sync}

Reading progress, favourites, your list of servers and, if you choose, your server sign-ins can be
kept in step across your own devices. Sync is end-to-end encrypted and does not involve your Komga
server; credentials are sealed with a passphrase only you hold.

<div class="text--center">
  <img src="/assets/media/guides/opdsy/sync.png" alt="Sync settings showing what is kept in step across devices" style={{maxHeight: '600px'}}/>
</div>

## Compatibility {#compatibility}

| Topic          | Details                                                           |
| -------------- | ----------------------------------------------------------------- |
| Platform       | Android                                                           |
| Protocol       | OPDS 1.2 (Atom) and OPDS 2.0 (JSON)                               |
| Authentication | HTTP Basic, same credentials as the Komga web UI                  |
| Page streaming | **OPDS-PSE 1.0**, including PDFs                                  |
| Offline        | Optional per-book, per-series or per-folder download              |
| Progress sync  | Local to the device; not yet written back to Komga                |
| Highlights     | Five colours with notes, plus bookmarks, synced across devices    |
| Text-to-speech | Offline or online voices, with speed and pitch control            |
| Privacy        | No accounts, ads or analytics; credentials in the device keychain |

## Useful links {#links}

- [Google Play](https://play.google.com/store/apps/details?id=com.opdsy), download OPDSy

:::note[Screenshot credits]
Sample content shown above is used under CC-BY 4.0, public domain or CC0: _Pepper & Carrot_ by
David Revoy, Golden Age comics via the Internet Archive, and novels from Standard Ebooks.
:::
