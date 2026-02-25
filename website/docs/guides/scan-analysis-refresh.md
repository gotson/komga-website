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

### Deep scan

This will force the scanner to compare all scanned books with the ones stored in the database. Normally this is not required, as Komga uses the last modified time of the parent folders to decide whether to compare books, but some filesystems may behave differently.

Trigger a Deep Scan if Komga is missing some books after a scan.

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

Look for the action menu icon <img src="/assets/media/guides/action-menu-icon.png" style={{verticalAlign: 'middle', maxHeight: '32px'}} /> and click on _Analyze_.

:::warning
Depending on the size of your Library, analysis may take a while.
:::

### Media Analysis screen

You can check all the media for which the analysis did not succeed from the Media Analysis screen. You can access it from _Media Management > Media Analysis_.

It will show you all books with a status of:
- Error: Komga could not analyze the book. If possible, there will be a comment to describe the error.
- Unsupported: Komga does not support those files. The comment will give you more information.

<a href="/assets/media/guides/scan-analysis-refresh/media-analysis.png">
<img src="/assets/media/guides/scan-analysis-refresh/media-analysis.png" style={{maxHeight: '400px'}} alt="Media Analysis"/>
</a>

## Refresh metadata {#refresh-metadata}

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

This will import the following elements from the `ComicInfo.xml` file in Komga:
- `Year`, `Month`, and `Day` to form the _Release Date_
- `Writer`, `Penciller`, `Inker`, `Colorist`, `Letterer`, `CoverArtist`, `Editor`, and `Translator` as _Authors_ with the according role. A value with multiple names separated by a `,` will be split in different authors.
- `Title`, `Summary`, `Number` as their Komga equivalent
- Valid `Web` links as a book link
- The `Tags` element will be split by `,` and added to the book's _tags_
- If the `GTIN` element contains a valid ISBN, as the book's _ISBN_

#### Series metadata

This will import the following elements from the `ComicInfo.xml` of the Series' books in Komga:
- The `Series` and `Volume` elements will be used to overwrite the title of the Series, in the form `<Series> (<Volume>)`, or just `<Series>` if the `Volume` element is not present, if the `Volume` is `1`, or if _Append volume to series title_ is disabled. If multiple values are present, the most frequent value from all books will be used.
- The various `AgeRating` values will be converted to a number in Komga. The highest value from all books will be used.
- The most frequent `Publisher` value will be used as Komga's equivalent.
- A `Manga` element with the value `YesAndRightToLeft` will mark the reading direction as _Right to left_. The most frequent value from all books will be used.
- The `Genre` element will be split by `,`. All genres from all books will be added to the Series.
- The `LanguageISO` element will be used as the Series' language. The most frequent value from all books will be used.
- The highest value from `Count` will be used as the total count of books.

#### Collections

The `SeriesGroup` element will be split by `,` and used to create collections with those names, or add the series to an existing collection if it exists.

If the `SeriesGroup` element is set to different values in each book of the series, then each value of the elements will create a collection.

#### Read lists

The `AlternateSeries` or `StoryArc` elements will be used to create a read list with that name, or add the book to an existing read list with that name.

If the `AlternateNumber` element is set, it will be used to position the book in the read list.

##### StoryArcNumber

If the `StoryArcNumber` element is set, it will be used in conjunction with `StoryArc` to position the book in the read list.

Both `StoryArc` and `StoryArcNumber` elements can contain multiple values, separated by `,`. Komga will do its best to match each pair:
- If both elements are set, but do not contain the same number of values, the extra values will not be used
- If there are invalid values, like blank strings or invalid numbers, the whole pair will be ignored

### Import metadata from EPUB files

#### Book metadata

This will import the following fields from the Epub metadata in Komga:
- `dc:title` element as the _Title_
- `dc:description` element as the _Summary_
- `dc:date` element as the _Release date_
- `dc:identifier` element as the _ISBN_, if it is a valid ISBN
- `dc:creator` element as _Authors_. The role will be imported either from the `opf:role` property, or from a `meta` element containing `role` property and a `marc:relators` scheme. A value with multiple names separated by a `,` will be split in different authors.
- the meta property `belongs-to-collection` refined as `group-position` will be used as the book _Number_ and _Number Sort_

#### Series metadata

This will import the following fields from the Epub metadata in Komga:
- `dc:publisher` element as the _Publisher_
- `dc:language` element as the _Language_
- The `page-progression-direction` property of the `spine` element as the _Reading direction_
- The `belongs-to-collection` meta property will be used to overwrite the title of a Series. If multiple values are present, the most frequent value from all books will be used.

### Import metadata generated by Mylar 

[Mylar](https://github.com/mylar3/mylar3) can generate a `series.json` file inside your Series folders. This option will import the following fields into Komga:
- The `name` field will be used for the Series title. If the `volume` field is set and is different from `1`, then the `year` field will be appended to the title, in the form `<name> (<year>)`.
- `status` will be used to set the Series status.
- `description_formatted` or `description_text` will be used for the Series summary.
- `publisher` will be used for the Series publisher.
- `age_rating` will be used for the Series age rating.
- `total_issues` will be used for the total count of books.

### Import local media assets

#### Local artwork

This will enable import for local artwork, check the [Local Artwork Assets](local-artwork-assets.md) section for more information.

### Import ISBN within barcode

#### ISBN barcode

Komga will inspect the first and last 3 pages of each book for barcodes. If a barcode is present and contains an ISBN code, it will be imported.
