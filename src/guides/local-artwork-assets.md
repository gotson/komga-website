# Local Artwork Assets

## Supported Artwork Image Formats

There are a number of supported custom media items that need to be named correctly to be detected. The supported image file formats are:
- jpg
- jpeg
- png
- tbn

## Poster Artwork

Posters are typically displayed for books, series and collections on dashboards, library views, and when looking at details for the element. Poster art is typically of 21:29.7 aspect ratio. Custom Poster artwork will be detected and used if named and stored as follows.

#### Books

Custom poster must have the same name as the book file:
- `Exact book name.ext`

`ext` is the file extension.

```
/Series
  Book 10.cbz
  Book 10.jpg
```

More than one poster image can be included. For multiple items to be scanned, they should be named as follows:
- `Exact book name-X.ext`

Where `-X` is a number.

```
/Series
  Book 12.cbz
  Book 12-1.jpg
  Book 12-2.png
```

#### Series

Custom poster must be located in the Series directory and named as follows:
- `cover.ext`
- `default.ext`
- `folder.ext`
- `series.ext`
- `poster.ext`

`ext` is the file extension.

```
/Series
  poster.jpg
```
