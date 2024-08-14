# Libraries

You can separate content in different libraries, a library is a group of books. Libraries access can also be restricted to specific users.

Each library has a root folder, and no library can share any part of their path.

For example if you have a library with a root path of `/books/mangas`, you can't create a library with a root path of `/books`, because the two root paths would overlap. You can however create a library with a root path of `/books/comics`.

## Creating libraries

From the web interface:
- click on the _+_ icon next to _Libraries_ in the sidebar <img src="/assets/media/guides/libraries/library-add.png" style={{verticalAlign: 'middle', maxHeight: '32px'}} />
- choose a _Name_ for your library
- click the _Browse_ button and select a root folder containing your books
- click _Add_

<img src="/assets/media/guides/libraries/library-add-dialog.png" style={{maxHeight: '300px'}} alt="Add Library Dialog"/>

You can also specify extra options.

### Scanner

<img src="/assets/media/guides/libraries/library-add-scanner.png" style={{maxHeight: '400px'}} alt="Add Library Dialog Scanner"/>

#### Empty trash automatically after every scan

See [Emptying library trash](/guides/trash.md#automatically-empty-trash).

#### Force directory modified time

This will force the last modified time of a directory as the maximum from its own last modified time and the last modified time from all the books inside the directory. This should be used only if your filesystem does not update the last modified time of a directory when files inside it are modified (Google Drive for instance).

#### Scan on startup

If enabled, the library will be scanned when Komga starts.

#### Scan interval

Choose to scan all of your libraries on a time-based interval. Choose the interval to use from the dropdown. Available frequencies:

- disabled
- hourly
- every 6 hours
- every 12 hours
- daily
- weekly

The scan interval is based on when Komga started, or when you changed that setting for the library. For instance, if you have it set to “every 6 hours” and you start your server at 12:35, then a scan will be started around 18:35.

#### One-Shots directory

See [One-Shots](/guides/oneshots.md).

#### Scan for these file types

This will configure the scanner to only look for files with specific file extensions. Available types:

- Comic Book archives: `cbz`, `zip`, `cbr`, `rar`
- PDF: `pdf`
- Epub: `epub`

#### Directory exclusions

You can specify any pattern to exclude directory subtrees from the scan.

Any directory for which the full path contains any of the configured patterns will be ignored during the scan.

Patterns are checked against **any part of the directory path**:
- `#recycle` will match on:
  - `/data/books/Comics/#recycle`
  - `/data/books/Comics/My weirdly named #recycle comic`

:::tip
To match only directories starting with the provided string, prefix the pattern with `/`, like `/#recycle`
:::

### Options

<img src="/assets/media/guides/libraries/library-add-options.png" style={{maxHeight: '500px'}} alt="Add Library Dialog Options"/>

#### Analysis

##### Compute hash for files

Komga will compute a filehash for your files. This is required for the "restore from trash bin" functionality to work, and to detect duplicate files.

This can consume lots of resources on large libraries or slow hardware.

##### Compute hash for pages

Komga will compute a filehash for the first and last 3 pages in each book (`cbz` only). Those are used to detect duplicate pages.

This can consume lots of resources on large libraries or slow hardware.

##### Analyze page dimensions

Komga will retrieve each page's dimensions (width and height). This is useful for:
- properly displaying landscape pages in the web reader, when using double pages
- comparing page dimensions in the "Import" dialog

This can consume lots of resources on large libraries or slow hardware.

#### File management

##### Automatically repair incorrect file extensions

Files with an incorrect extension will be automatically renamed in the background. For example a `zip` file with a `.cbr` extension will be renamed to `.cbz`.

##### Automatically convert to CBZ

Books in `rar`/`cbr` format will be converted to `cbz` automatically in the background. The `zip` files are created with the `DEFLATE` method without compression.

#### Series cover

Choose which book cover is used for the series.

### Metadata

<img src="/assets/media/guides/libraries/library-add-metadata.png" style={{maxHeight: '600px'}} alt="Add Library Dialog Metadata"/>

Check the [Refresh Metadata](/guides/scan-analysis-refresh.md#refresh-metadata) section to know more about what they do.

## Edit a library

To edit a library, look for the action menu icon <img src="/assets/media/guides/action-menu-icon.png" style={{verticalAlign: 'middle', maxHeight: '32px'}} /> and click on _Edit_.

:::warning
If you change the root folder of a library, and __the new path doesn't share anything with the previous path__, you will lose all your series, books and read progress for that library.

If you change the path __for a parent directory of the current path__, you will not lose your content.

If you change the path __for a child directory of the current path__, you will lose part of your content.
:::

## Delete a library

To delete a library, look for the action menu icon <img src="/assets/media/guides/action-menu-icon.png" style={{verticalAlign: 'middle', maxHeight: '32px'}} /> and click on _Delete_.

:::danger
Deleting a library will remove all series and books contained in this library. Read progress for all those books will be deleted.

Your media files will not be affected.

This cannot be undone.
:::
