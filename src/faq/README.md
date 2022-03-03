# Frequently Asked Questions

## Where can I find the log files?

By default (if you haven't changed the configuration), log files are located:
- on Windows: `%USERPROFILE%/.komga/komga.log`
- on Unix: `~/.komga/komga.log`
- on Docker: in the directory you mounted as `/config`, in a subdirectory called `logs`

## Komga seems slow, how can I check what's going on?

If any activity is going on, an animated yellow bar will appear below the top-left logo. Hover your cursor over the bar to see the details of all pending tasks.

<video controls width="250">
    <source src="/assets/media/faq/server-activity.webm"
            type="video/webm">
    Sorry, your browser doesn't support embedded videos.
</video>

## How can I sync reading progress with tracker websites?

Komga does not support this outside the box.

You can try [MAL-Sync](https://github.com/MALSync/MALSync) which integrates with Komga and works with MyAnimeList, Kitsu, Anilist and others.

## The memory consumption is huge

TL;DR: The operating system _does not_ report the real memory usage of the application, so don't look at those figures.

Komga runs on the Java Virtual Machine (JVM). The JVM works differently than other native programs in regard to memory consumption.
On startup, the JVM will _reserve_ some memory from the OS, but that doesn't mean this memory is used by the application. If the OS needs to reclaim that memory, the JVM will try to release it.

By default, the JVM would reserve 1/4th of the physical memory (depends on the total memory and JVM version), for instance if you have 32 Gb of memory, the JVM would reserve 8 Gb.

To increase or limit the maximum memory, see [here](/installation/jar.md#increase-memory-limit) (jar) and [here](/installation/docker.md#increase-memory-limit) (Docker).

## How to enable DEBUG or TRACE logs?

### Via an `application.yml`

Add the following key in your `application.yml`:

```yaml
logging.level.org.gotson.komga: DEBUG
```

or

```yaml
logging.level.org.gotson.komga: TRACE
```

### Using the `jar` via the command line

Start the `jar` with the following option:

```shell script
java -jar komga-x.y.z.jar --logging.level.org.gotson.komga=DEBUG
```

or

```shell script
java -jar komga-x.y.z.jar --logging.level.org.gotson.komga=TRACE
```

### Using Docker

Add the following environment variable:

```shell script
LOGGING_LEVEL_ORG_GOTSON_KOMGA=DEBUG
```

or

```shell script
LOGGING_LEVEL_ORG_GOTSON_KOMGA=TRACE
```

## Webreader double pages are not showing as single page

The double pages feature of the webreader requires image sizes to be available. This feature was added in v`0.51.0`. If your books have been analyzed before that version, you will need to re-analyze them in order for the double pages feature to work properly.

## Media type application/x-7z-compressed is not supported

Your files are compressed using 7zip, which is not supported. Extract your archives and compress them again using the `zip` format.

## ChunkyTNG displays the wrong number for my books

ChunkyTNG is doing a lot of caching, you may need to remove/add your OPDS server to force ChunkyTNG to update.

## My books/series show a different name than the files/folders

Komga automatically import metadata from `EPUB` files and from `ComicInfo.xml` for `cbz`/`cbr`. The imported metadata will override the file/folder name.

## This server has already been claimed

The server cannot be claimed if a user already exists in the database. It can happen when you start Komga for the first time without the `claim` profile as Komga will generate a default user.

You can solve the issue by deleting the database. By default it is located in `~/.komga/database.sqlite`. `~` is your home directory on Unix, and your User profile on Windows.

## How can I disable the periodic scans?

Configure `KOMGA_LIBRARIES_SCAN_CRON` / `komga.libraries-scan-cron` to `-`. See [here](/installation/configuration.md#komga-libraries-scan-cron-komga-libraries-scan-cron-cron) for more details.

## Scan doesn't pick up new files under mergerfs 

Add `func.getattr=newest` to the options in your `/etc/fstab` entry for the mergerfs volume. By default, mergerfs doesn't update the modified times for everything for performance reasons. This forces it to. In most cases the performance impact is negligible. 

Example:

```shell
/media/user/disk* /media/user/storage fuse.mergerfs defaults,nonempty,allow_other,use_ino,cache.files=off,moveonenospc=true,dropcacheonclose=true,minfreespace=50G,category.create=mfs,func.getattr=newest,fsname=mergerfs 0 0
```
