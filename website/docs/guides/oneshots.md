# One-Shots

## What are One-Shots?

One-Shots are series containing a single book. 

However not all series containing a single book are One-Shots. Here are some example of single book series that are not One-Shots:
- a series that has multiple books published, but only a single book is collected in Komga
- a series that currently has only 1 book published, but will have more in the future

Historically Komga required each series to be in its own directory on disk. This was cumbersome for One-Shots, as each book needed to be placed in a dedicated directory.

With One-Shots handling, this is not necessary anymore.

One-Shots are still composed of a series with a single book, but are handled slightly differently.

## One-Shots handling

### Configuration

You can enable One-Shots handling through [Library options](libraries.md#one-shots-directory).

### Processing

One-Shots are detected during the scan. Any directory for which the full path contains the configured _One-Shots directory_ will generate One-Shot series instead of standard Series.

Given the following directory structure, with _One-Shots directory_ configured to `_oneshots`:

```
/data/books/Comics
├── Space Adventures
│   ├── Space_Adventures_001.cbz
│   ├── Space_Adventures_002.cbz
│   ├── Space_Adventures_003.cbz
│   └── _oneshots
│       └── Pluto Adventures.cbz
├── Super Duck
│   ├── Super_Duck_001.cbz
│   ├── Super_Duck_002.cbz
│   └── Super_Duck_003.cbz
└── _oneshots
    ├── A oneshot.cbz
    ├── Another oneshot.cbz
    └── Yet another oneshot.cbz
```

This will result in:
- 2 regular series:
  - _Space Adventures_
  - _Super Duck_
- 4 One-Shots:
  - _Pluto Adventures_
  - _A oneshot_
  - _Another oneshot_
  - _Yet another oneshot_

_One-Shots directory_ is checked against **any part of the directory path**:
- `_oneshots` will match on:
  - `/data/books/Comics/_oneshots`
  - `/data/books/Comics/My weirdly named _oneshots`

:::tip
To match only directories starting with the provided string, prefix _One-Shots directory_ with `/`, like `/_oneshots` 
:::

### Metadata

While the book metadata will be processed as usual, the series metadata for One-Shots will be handled slightly differently:
- the Mylar `series.json` is ignored
- the local artwork is ignored. The one for the book is still processed as usual.
- in addition, some metadata is set:
  - the series title and summary are set from the one of the book
  - the series status is set to _Ended_
  - the series total book count is set to 1

### Dashboard

The Dashboard has specific handling for One-Shots:
- One-Shots are displayed in a new view that shows both series and book metadata fields
- when editing One-Shots metadata, a new dialog will allow to edit both book and series level metadata fields.
  - If you edit multiple items and all are One-Shots, this dialog is also used.
  - If there is a mix of One-Shots and normal items (series or books), the regular dialog will be used instead.s
- One-Shots can be added to both collections and readlists
- One-Shots will not show in the _Recently Added Series_ or _Recently Updated Series_ sections, but they will show in _Recently Added Books_.
- Item card in Series views (when browsing libraries or collections):
  - will show an unread indicator in the top-right corner, instead of the number of unread books
  - will display _One-shot_ at the bottom of the card instead of the number of books
- Item card in Book views (when browsing readlists or recommended) will not display the Series name nor the book number
- the Series filter panel has a _One-shot_ filter
- One-Shots will not show in the Series picker dialog when importing books
- One-Shots will show only as books in the search bar and detailed search view

### REST API

One-Shots are still composed of a Series with a single Book, however both have a new `boolean` attribute `oneshot` which can be used in client applications to handle One-Shots differently.