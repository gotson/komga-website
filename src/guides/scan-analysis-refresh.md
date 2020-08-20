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

::: danger
Depending on the size of your Library, analysis may take a while.
:::

### Media Analysis screen

You can check all the media for which the analysis did not succeed from the Media Analysis screen. You can access it from _Server Settings > Media Analysis_.

It will show you all books with a status of:
- Error: Komga could not analyze the book. If possible, there will be a comment to describe the error.
- Unsupported: Komga does not support those files. The comment will give you more information.

<a href="/assets/media/guides/scan-analysis-refresh/media-analysis.png">
<img src="/assets/media/guides/scan-analysis-refresh/media-analysis.png" style="vertical-align: middle; max-height: 400px" alt="Media Analysis"/>
</a>

## Refresh metadata

Refreshing Metadata for a library, series, or individual book causes the metadata for the item to be refreshed, even if it already has metadata. You can think of refreshing as “update metadata for the requested item even if it already has some”.

You should refresh a library or individual item if:
- You’ve changed options for the library
- You’ve added "local media assets" (such as artwork)

Metadata is gathered from the following sources:
- a local `ComicInfo.xml` file located inside a CBZ or CBR
- the metadata of an EPUB file
- local media assets

The metadata refresh is dependent of the options of the Library.

### Import metadata for CBR/CBZ containing a ComicInfo.xml file

#### Book metadata

This will import the following fields from the `ComicInfo.xml` file into Komga:
- `Year`, `Month`, and `Day` to form the _Release Date_
- `Writer`, `Penciller`, `Inker`, `Colorist`, `Letterer`, `CoverArtist`, and `Editor` as _Authors_ with the according role
- A `Manga` field with the value `YesAndRightToLeft` will mark the reading direction as _Right to left_
- `Title`, `Summary`, `Number`, and `Publisher` as their Komga equivalent
- The various `AgeRating` values will be converted to a number in Komga

#### Series title

The `Series` tag will be used to overwrite the title of a Series, only if:
- at least one book in the series has the tag `Series` set
- if multiple books have the tag `Series` set, they must all have the same value

#### Collections

The `SeriesGroup` tag will be used to create a collection with that name, or add the series to an existing collection with that name.

If the `SeriesGroup` tag is set to a different value in each book of the series, then each value of the tag will create a collection.

#### Read lists <Badge text="0.57.0+" />

The `AlternateSeries` or `StoryArc` tags will be used to create a read list with that name, or add the book to an existing read list with that name.

If the `AlternateNumber` or `StoryArcNumber` tags are set, it will be used to position the book in the read list.

### Import metadata from EPUB files

#### Book metadata

This will import the following fields from the Epub metadata into Komga:
- `dc:title` element as the _Title_
- `dc:description` element as the _Summary_
- `dc:publisher` element as the _Publisher_
- `dc:date` element as the _Release date_
- The `page-progression-direction` property of the `spine` element as the _Reading direction_
- `dc:creator` element as _Authors_. The role will be imported either from the `opf:role` property, or from a `meta` element containing `role` property and a `marc:relators` scheme.

#### Series title

The `belongs-to-collection` meta property will be used to overwirte the title of a Series, only if:
- at least one book in the series has the property `belongs-to-collection` set
- if multiple books have the property `belongs-to-collection` set, they must all have the same value

### Import local media assets <Badge text="0.56.0+" />

#### Local artwork

This will enable import for local artwork, check the [Local Artwork Assets](/guides/local-artwork-assets) section for more information.