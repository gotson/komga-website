# Scanning, Analyzing and Refreshing Metadata

Once a library has been created, it is processed by Komga so all the files are matched to series and books, and metadata is gathered. As time goes on, you’ll add and remove books to the libraries or make other changes that mean the library is no longer up-to-date. You can Scan libraries to bring them up-to-date. Scanning, Analyzing and Refreshing a library do different things.

## Scan Library Files

Scanning a library makes Komga check its folders and sub-folders for new or removed books. If it finds new media, it then pulls it into the library. You can think of scanning as “check for new or changed content”.

All files that have changed after a scan will be Analyzed.

You should Scan Library Files if you have:
- Added or deleted files or folders
- Renamed a file or folder
- Moved files or folders from one location to another

By default, Komga will scan your libraries regularly.

## What happens during a Scan?

Komga will generate a library representation of your files on disk. A Komga library does _not_ represent exactly your folder structure.
- Komga will create a _Series_ for each subfolder of any library, whatever the depth of this subfolder in your directory structure
- Komga will create a _Book_ for each file found, and place it inside the _Series_ corresponding to the parent folder of the file

## Analyze books

Analysis is automatically performed when content is added to your Library. In rare cases, new versions of Komga may update the media analysis capabilities to correct something or add the ability to detect new things. In those cases, content may be re-analyzed when you access it after the new server version is installed.

### What happens during Analysis?

Whenever an item is added to one of your Libraries, Komga performs some analysis on it to gather information. In addition, all files analyzed will also be refreshed for metadata.

#### Gather media properties

The primary purpose of media analysis is to gather information about that media item. All of the media you add to a Library has properties that are useful to know, such as:
- Container: ZIP, RAR, EPUB, PDF, etc.
- Images Format: JPEG, PNG, WEBP, etc.

Why, though? What use are these media properties? Your Server, together with your apps, can use this information to help determine whether (and how) content can be played.

For example: Imagine you have a CBR file with WEBP images, but you’re using Internet Explorer (which can’t read WEBP). Since the webreader knows what kind of content your browser can display and since your media analysis detected that the book has WEBP images, your Komga Server can convert those images to a compatible format (like JPEG) for you in order to let you read your book successfully.

#### Generate default artwork

During analysis, artwork will automatically be grabbed from a book file. The first page will be used for poster/thumbnail type purposes.

### Analyze your content

You can analyze content in multiple ways: for a book, for a series, or even for an entire Library.

Look for the action menu icon <img src="/assets/media/guides/action-menu-icon.png" style="vertical-align: middle" height="32" /> and click on _Analyze_.

::: danger Warning
Depending on the size of your Library, analysis may take a while.
:::

## Refresh metadata

Refreshing Metadata for a library, series, or individual book causes the metadata for the item to be refreshed, even if it already has metadata. You can think of refreshing as “update metadata for the requested item even if it already has some”.

Metadata is gathered from the following sources:
- a local `ComicInfo.xml` file located inside a CBZ or CBR
- the metadata of an EPUB file