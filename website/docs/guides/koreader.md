# Read with KOReader

[KOReader](https://koreader.rocks) can access Komga using [OPDS v1](./opds.md#opds-v1).

## Read progress sync

Read progress syncs in the following way:
- For pre-paginated books, the read progress will be accurate per page.
- For regular EPUB books, the read progress will be tracker at the beginning of a chapter, not within a chapter. Mid-chapter read progress will be lost when switching from KOReader to Komga or Komga to KOReader.

## Configuration

In order to use KOReader Sync with Komga, a Komga user must have the role `KOREADER_SYNC`.

You also need to enable [file hashing for KOReader](libraries.md#compute-hash-for-files-for-koreader).

### Generate API key

The KOReader Sync Komga API uses a dedicated set of endpoints which require an API key to be accessed. Users can generate API keys from the _Account Settings_ page. Make sure to write down the generated key, as it won't be shown afterwards.

If you have multiple KOReader devices, it is recommended to use a different API key for each.

### Setup KOReader

#### Custom Sync Server

1. In the KOReader menu, go to _Progress sync_.
    <img src="/assets/media/guides/koreader/koreader-progress-sync-menu.png" style={{maxHeight: '200px'}} alt="KOReader configuration menu"/>

2. Click on _Custom sync server_.
    <img src="/assets/media/guides/koreader/koreader-custom-sync-server.png" style={{maxHeight: '70px'}} alt="KOReader progress sync menu"/>

3. Enter your Komga server address, followed by `/koreader`. For example: `https://demo.komga.org/koreader`

4. Click on _Register / Login_.
   <img src="/assets/media/guides/koreader/koreader-sync-server-login.png" style={{maxHeight: '100px'}} alt="KOReader progress sync menu"/>

5. In the _Register/login_ dialog, input the following:
    <img src="/assets/media/guides/koreader/koreader-sync-server-login-dialog.png" style={{maxHeight: '180px'}} alt="KOReader sync server login dialog"/>
    - _username_: the Komga API key
    - _password_: any dummy value, this field is not used by Komga

6. Click on _Login_.

#### Document Matching Method

1. In the KOReader menu, go to _Progress sync_.
   <img src="/assets/media/guides/koreader/koreader-progress-sync-menu.png" style={{maxHeight: '200px'}} alt="KOReader configuration menu"/>

2. Click on _Document matching method_.
   <img src="/assets/media/guides/koreader/koreader-progress-sync-menu-2.png" style={{maxHeight: '250px'}} alt="KOReader progress sync menu"/>

3. Select _Binary_.
   <img src="/assets/media/guides/koreader/koreader-matching-method.png" style={{maxHeight: '100px'}} alt="KOReader document matching method options"/>

## Troubleshooting

### Komga logs

Komga can log all incoming HTTP requests, including headers and body, by setting `logging.level.org.springframework.web.filter.CommonsRequestLoggingFilter` to `DEBUG`.

You can also access the recent HTTP exchanges under the `/actuator/httpexchanges` endpoint on your Komga server.

## Noteworthy Community Plugins

### Kobo Sync

If you use KOReader on a Kobo device, you can set up [Kobo Sync](kobo.mdx) and open books directly in KOReader by using the [kobo.koplugin](https://ogkevin.github.io/kobo.koplugin/scenarios/komga-calibre.html).

### ComicReader

[ComicReader](https://korcomic.github.io/docs/comicreader.koplugin/intro/): a plugin to enhance the reading experience for Comics.

### ComicMeta

[ComicMeta](https://korcomic.github.io/docs/comicmeta.koplugin/intro/): a plugin that extracts ComicInfo metadata from your comics.
