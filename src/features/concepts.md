# Concepts

## Libraries

You can separate content in different libraries, a library is a group of books. Libraries access can also be restricted to specific users.

Each library has a root folder, and no library can share any part of their path.

For example if you have a library with a root path of `/books/mangas`, you can't create a library with a root path of `/books`, because the two root paths would overlap. You can however create a library with a root path of `/books/comics`.

## Series

Upon scanning your files, Komga will create a _Series_ for each subfolder of any library, whatever the depth of this subfolder in your directory structure.

## Books

Upon scanning your files, Komga will create a _Book_ for each file found, and place it inside the _Series_ corresponding to the parent folder of the file.

## Scanning

Komga regularly scan your libraries root folders to find if Series and Books have been added, removed, or modified.

## Media analysis

After each scan, every new or modified Book file is analyzed:
- verify that the mediatype of the file is proper (in case files were renamed with an incorrect extension)
- check all the images inside the file and determine their format

## Metadata

Komga let you edit metadata for Series and Books. Metadata is stored inside Komga's database, and is used to enrich information about the Series/Book.

### Series metadata

- **Title**: you can override the displayed title instead of renaming the folders
- **Sort Title**: used for sorting
- **Series Status**: if a Series is ongoing, ended, abandonned or in hiatus

### Book metadata

- **Title**: you can override the displayed title instead of renaming the file
- **Number**: the book number in the series
- **Sort Number**: a decimal number to order the books inside the series
- **Summary**: a short description of the book's content
- **Publisher**: the publisher of the book
- **Age Rating**: the minimum recommended age for the reader
- **Release Date**: when the book was published
- **Reading Direction**: how the book is supposed to be read (Left to right, Right to left, Vertical, Webtoon)
- **Authors**: a name and a role (i.e. writer, penciller…)

### Metadata import

Komga can import metadata from differents sources. All metadata fields can be locked from the UI to prevent modifications by automatic imports.

#### ComicInfo.xml

A popular format originaly from the application ComicRack, the `ComicInfo.xml` file is stored inside a `cbz`/`cbr` archive, and contains metadata about the book and series.

Komga will analyze your files and import metadata from `ComicInfo.xml` automatically.

#### Epub

`Epub` files contain metadata about the book, and will be imported automatically by Komga.
