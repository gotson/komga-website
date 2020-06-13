# Frequently Asked Questions

## Komga doesn't start, logs show error message about the database

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