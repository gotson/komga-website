# Google Drive and rclone

If your books are stored on Google Drive, you can use [Plexdrive](https://github.com/plexdrive/plexdrive) or [rclone](https://rclone.org/) to make them accessible to Komga.

You will need to configure your library to [force the directory modified time](/guides/libraries.md#force-directory-modified-time).

Rclone requires some specific configuration to cache files locally, and work better with Komga.
Here is a user-provided configuration that works well (thanks Magikarp):

```shell
rclone mount <name>:<path> <mount_point/folder> \
  --no-checksum \
  --use-server-modtime \
  --no-gzip-encoding \
  --no-update-modtime \
  --no-seek \
  --modify-window 2m \
  --allow-other \
  --allow-non-empty \
  --dir-cache-time 30m \
  --cache-read-retries 15 \
  --cache-db-purge \
  --timeout 30m \
  --vfs-cache-mode full \
  --vfs-read-chunk-size 2M \
  --vfs-read-chunk-size-limit 5M \
  --vfs-cache-max-age 30m \
  --attr-timeout 20s \
  --poll-interval 9m \
  --vfs-cache-poll-interval 10m
```