# Read with Kobo

The Kobo integration is based on the native Kobo Sync capability, where your Kobo eReader will sync to a Komga server instead of the official Kobo servers.

## Features supported and limitations

This is what is currently supported:
- Only **EPUB** books from all libraries, along with their metadata and cover image, will be synced.
- When books metadata or cover is edited in Komga, they will be updated on the Kobo eReader.
- When books are deleted in Komga, they will be deleted on the Kobo eReader.
- Read progress is synced both ways
- EPUB books will be converted to KEPUB on-the-fly when downloaded by the Kobo, if Kepubify is configured and available (see [Kepubify](#kepubify))
- If Kobo proxying is enabled in _Server Settings_, Komga will relay requests to the official Kobo servers, and return both the Komga content and Kobo content to the Kobo eReader. This can be useful if you have official Kobo purchases.

Read progress syncs in the following way:
- For pre-paginated books, the read progress will be accurate per page.
- For regular EPUB books, Kobo can only keep track of read progress at the beginning of a chapter, not within a chapter. Mid-chapter read progress will be lost when switching from Kobo to Komga or Komga to Kobo. This is a Kobo limitation.
- For Kobo EPUB (KEPUB) books, Kobo uses its own mechanism to track progress. Komga does its best to map the Kobo specific read progress to Komga, but it may be off by a few pages.

## Configuration

In order to use Kobo Sync with Komga, a Komga user must have the roles `KOBO_SYNC` and `FILE_DOWNLOAD`.

Proxying of unknown requests to the official Kobo servers can be enabled in _Server Settings_. This is enabled globally for all users on the server.

### Generate API key

The Kobo Sync Komga API uses a dedicated set of endpoints which require an API key to be accessed. Users can generate API keys from the _Account Settings_ page. Make sure to write down the generated key, as it won't be shown afterwards.

If you have multiple Kobo devices, it is recommended to use a different API key for each.

### Kepubify

Komga uses [Kepubify](https://pgaskin.net/kepubify/) to automatically convert EPUB books to KEPUB when the Kobo requests a file.

Kepubify is bundled on the following distributions:
- Windows app
- macOS app
- Docker amd64
- Docker arm64
- Docker arm

When using the `jar`, you will need to configure the path to `kepubify` or `kepubify.exe` from the _Server Settings_.

### Setup Kobo

Connect your Kobo eReader to your computer and open the `.kobo/Kobo/Kobo eReader.conf` file (you may need to display hidden files on Mac/Linux).

The file should contain the following line (among others):

```
api_endpoint=https://storeapi.kobo.com
```

If the line does not exist, it must be created under the `[OneStoreServices]` group.

You will need to replace this line with your external server address, in the following form:

```
api_endpoint=https://<your_komga_address>/kobo/<api_key>
```

For example:

```
api_endpoint=https://demo.komga.org/kobo/ABC123456123ABCD
```

Or for a local connection:

```
api_endpoint=http://192.168.1.54/kobo/ABC123456123ABCD
```

### Force external port

The Kobo eReader does not send valid HTTP `Host` header, which could break the covers and file download in certain circumstances.  Komga will try its best to automatically fix the incorrect Kobo headers, but in some specific cases it's not possible.

If you experience some issues downloading covers or files from the Kobo, you will need to configure the _Kobo Sync external port_ (in _Server Settings_) to the port that your Kobo is accessing. Normally it should be what you have configured in `api_endpoint`.

A case where this would be required is if you access your Komga server directly (without a reverse proxy), with Komga running in Docker, and with a Docker mapped port that is different from the internal Komga port.

## Migrating from Calibre-Web

If you have used Calibre-Web with Kobo Sync before, you can migrate to Komga by changing the `Kobo eReader.conf` and point to your Komga server instead.

Books added by Calibre-Web should remain on your Kobo device.

If you have Kobo proxying enabled, Komga is able to extract your Kobo authentication tokens from the Calibre-Web token (stored on the Kobo) transparently.

## Privacy and Security

The Kobo eReader sends out sensitive information during the Sync protocol. It is highly recommended to only use Kobo Sync over HTTPS.

The API key is as sensitive as your username and password. Since the API key is part of the URL for Kobo Sync, you should not share this URL with anyone.

Be careful when sharing Komga logs or Kobo logs, and redact any sensitive information.

## Troubleshooting

### Force Kobo Sync

If the Kobo eReader becomes out of sync with Komga somehow, you can force a full sync from the _Account Settings_ page. Locate the API key, and click the _Force Kobo sync_ icon.

### Access Kobo eReader logs

Logs on the Kobo device are encrypted and cannot be read when connecting the device to a computer.

In order to get readable logs, you will need to enable Developer options:
- in the search bar, type `devmodeon` and search
- it will not show any search results, but you will be able to access Developer options under _Settings > Device Information > Developer options_
- In the _Logging Category_ section, enable the following: `sync`, `packetdump`
- Restart the Kobo eReader

Once that's set, you will be able to stream the Kobo's logs using netcat. Use the following command on a computer that is on the same network as the Kobo. Replace `<kobo IP address>` with the actual IP of your Kobo.

```shell
nc -v <kobo IP address> 5001
```

### Komga logs

Komga can log all incoming HTTP requests, including headers and body, by setting `logging.level.org.springframework.web.filter.CommonsRequestLoggingFilter` to `DEBUG`.

To log outgoing HTTP requests to the official Kobo Store, set `logging.level.org.gotson.komga.infrastructure.kobo` to `DEBUG`.

You can also access the recent HTTP exchanges under the `/actuator/httpexchanges` endpoint on your Komga server.