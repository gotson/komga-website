# Libraries

You can separate content in different libraries, a library is a group of books. Libraries access can also be restricted to specific users.

Each library has a root folder, and no library can share any part of their path.

For example if you have a library with a root path of `/books/mangas`, you can't create a library with a root path of `/books`, because the two root paths would overlap. You can however create a library with a root path of `/books/comics`.

## Creating libraries

From the web interface:
- click on the _+_ icon next to _Libraries_ in the sidebar <img src="/assets/media/guides/libraries/library-add.png" style="vertical-align: middle" />
- choose a _Name_ for your library
- click the _Browse_ button and select a root folder containing your books
- click _Add_

<img src="/assets/media/guides/libraries/library-add-dialog.png" style="vertical-align: middle;max-height: 300px" alt="Add Library Dialog"/>

You can also specify extra options.

<img src="/assets/media/guides/libraries/library-add-options.png" style="vertical-align: middle; max-height: 350px" alt="Add Library Dialog Options"/>
<br/>
<br/>
<img src="/assets/media/guides/libraries/library-add-metadata.png" style="vertical-align: middle; max-height: 600px" alt="Add Library Dialog Metadata"/>

### Scanner options

#### Empty trash automatically after every scan <Badge text="0.107.0+" />

See [Emptying library trash](/guides/trash.md#automatically-empty-trash)

#### Force directory modified time <Badge text="0.56.0+" />

This will force the last modified time of a directory as the maximum from its own last modified time and the last modified time from all the books inside the directory. This should be used only if your filesystem does not update the last modified time of a directory when files inside it are modified (Google Drive for instance).

#### Deep scan <Badge text="0.56.0+" />

This will force the scanner to compare all scanned books with the ones stored in the database. Normally this is not required, as Komga uses the last modified time of the parent folders to decide whether to compare books, but some filesystems may behave differently.

Enable Deep Scan if Komga often miss some books after a scan.

### File management

#### Automatically repair incorrect file extensions <Badge text="0.92.0+" />

Files with an incorrect extension will be automatically renamed in the background. For exemple a `zip` file with a `.cbr` extension will be renamed to `.cbz`.

#### Automatically convert to CBZ <Badge text="0.91.0+" />

Books in `rar`/`cbr` format (RAR4 only) will be converted to `cbz` automatically in the background. The `zip` files are created with the `DEFLATE` method without compression.

### Metadata options

Check the [Refresh Metadata](/guides/scan-analysis-refresh.md#refresh-metadata) section to know more about what they do.

## Edit a library

To edit a library, look for the action menu icon <img src="/assets/media/guides/action-menu-icon.png" style="vertical-align: middle" height="32" /> and click on _Edit_.

:::warning
If you change the root folder of a library, and __the new path doesn't share anything with the previous path__, you will lose all your series, books and read progress for that library.

If you change the path __for a parent directory of the current path__, you will not lose your content.

If you change the path __for a child directory of the current path__, you will lose part of your content.
:::

## Delete a library

To delete a library, look for the action menu icon <img src="/assets/media/guides/action-menu-icon.png" style="vertical-align: middle" height="32" /> and click on _Delete_.

:::danger
Deleting a library will remove all series and books contained in this library. Read progress for all those books will be deleted.

Your media files will not be affected.

This cannot be undone.
:::