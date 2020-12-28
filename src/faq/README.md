# Frequently Asked Questions

## How can I sync reading progress with tracker websites?

Komga does not support this outside the box.

You can try [MAL-Sync](https://github.com/MALSync/MALSync) which integrates with Komga and works with MyAnimeList, Kitsu, Anilist and others.

## Tachiyomi cannot connect, but works in WebView

Try disabling the __DNS over HTTPS__ option (in More > Settings > Advanced).

## How to enable DEBUG or TRACE logs?

### Via an `application.yml`

Add the following key in your `application.yml`:

```yaml
logging.level.org.gotson.komga: DEBUG
```

### Using the `jar` via the command line

Start the `jar` with the following option:

```shell script
java -jar komga-x.y.z.jar --logging.level.org.gotson.komga=DEBUG
```

### Using Docker

Add the following environment variable:

```shell script
LOGGING_LEVEL_ORG_GOTSON_KOMGA=DEBUG
```

## Can I use Komga with a Google Drive mount?

Yes, you can use [Plexdrive](https://github.com/plexdrive/plexdrive) or [rclone](https://rclone.org/).

You will need to configure your library to [force the directory modified time](/guides/libraries.md#force-directory-modified-time).

Rclone requires some specific configuration to cache files locally, and work better with Komga.
Here is a user-provided configuration that works well:

```shell script
rclone mount \
    --allow-other \
    --buffer-size 256M \
    --dir-cache-time 720h \
    --vfs-read-ahead 512M \
    --vfs-read-chunk-size 16M \
    --vfs-cache-mode full
```

## Webreader double pages are not showing as single page

The double pages feature of the webreader requires image sizes to be available. This feature was added in v`0.51.0`. If your books have been analyzed before that version, you will need to re-analyze them in order for the double pages feature to work properly.

## Migration from H2 to SQLite

The version `0.48.0` is changing the internal database from H2 to SQLite. The change is done transparently.

A migration will be triggered automatically at startup:
- if the H2 database has not been migrated yet
- if the SQLite database is newly created

The regular functions of Komga will not be available during the data transfer (API, webserver, library scan…).

After a successful migration, a file with the `.imported` extension will be created next to your existing H2 database (for example for the default configuration it would be `~/.komga/database.h2.mv.db.imported`).

By default, the SQLite database will be located in the same location as the H2 database:
- if using the _Jar_: `~/.komga/database.sqlite`
- if using _Docker_: `/config/database.sqlite`

You can customize the location of the SQLite database using the configuration `komga.database.file` or environment variable `KOMGA_DATABASE_FILE`.

The database backup feature introduced in `0.37.0` has been removed. It might be re-added later on using a different logic.

## Komga doesn't start, logs show error message about the database

:::tip
Migrate to `0.48.0` to avoid those issues!
:::

If Komga does not start, and you have this kind of error messages in the logs:

```log
org.h2.jdbc.JdbcSQLNonTransientException: General error: "java.lang.IllegalStateException: Chunk 20221 not found [1.4.200/9]" [50000-200]
```

It means the database is corrupt, and you need to restore from a backup.

Since `0.37.0` Komga has automatic database backups enabled by default. You will find a `database-backup.zip` file in `~/.komga/` (for `jar`) or `/config/` (for `docker`).

1. Make sure Komga is stopped
2. Delete the corrupt database (`database.h2.mv.db`)
3. Unzip `database-backup.zip`, it should contain a `database.h2.mv.db` file
4. Restart Komga

## Media type application/x-7z-compressed is not supported

Your files are compressed using 7zip, which is not supported. Extract your archives and compress them again using the `zip` format.

## ChunkyTNG displays the wrong number for my books

ChunkyTNG is doing a lot of caching, you may need to remove/add your OPDS server to force ChunkyTNG to update.

## My books/series show a different name than the files/folders

Komga automatically import metadata from `EPUB` files and from `ComicInfo.xml` for `cbz`/`cbr`. The imported metadata will override the file/folder name.

## This server has already been claimed

The server cannot be claimed if a user already exists in the database. It can happen when you start Komga for the first time without the `claim` profile as Komga will generate a default user.

You can solve the issue by deleting the database. By default it is located in `~/.komga/database.h2`. `~` is your home directory on Unix, and your User profile on Windows.

## Tachiyomi does not show thumbnails

Make sure the URL of your Komga server starts with `http` or `https` **in lowercase**.

## How can I disable the periodic scans?

Configure `KOMGA_LIBRARIES_SCAN_CRON` / `komga.libraries-scan-cron` to `-`.
