# Read with the Webreader: EPUB

Komga has an integrated Webreader packed with features for EPUB books.

To start reading a book, you can click on the read button either on the book card, or on the book details screen.

<img src="/assets/media/guides/webreader/book-card.png" style={{maxHeight: '300px'}} alt="Book Card Read Button"/>

<img src="/assets/media/guides/webreader/read-button.png" style={{maxHeight: '300px'}} alt="Book Details read button"/>

Here is an overview of the Webreader's interface.

<a href="/assets/media/guides/webreader/reader-epub-overview.png">
<img src="/assets/media/guides/webreader/reader-epub-overview.png" alt="Webreader EPUB overview"/>
</a>

## Settings

The Webreader can be configured in various ways from the settings dialog.

<img src="/assets/media/guides/webreader/reader-epub-settings.png" style={{maxHeight: '400px'}} alt="Webreader EPUB settings"/>

### General

#### Always full screen

The reader will always start in full screen, and exit full screen when you exit from the reader.

#### Navigation mode

Navigate between pages using the buttons shown on screen, by taping/clicking, or both.

### Display

#### Font

Choose the font used to display the text. The _Publisher_ font is included with the book.

Additional fonts can be installed on the server:
1. Create a new `fonts` directory in the Komga configuration directory.
2. Create 1 sub-directory for each font family you want to add, for example `Liberation`.
3. Add all the fonts files in the sub-directory. 
   Komga will recognize the following extensions: `otf`, `ttf`, `woff`, and `woff2`.
   Komga will recognize the following keywords in file names: `bold` and `italic`, and categorize the fonts accordingly. 

An example file structure would be:
```
config/
  fonts/
    Liberation Serif/
      LiberationSerif-Bold.ttf 
      LiberationSerif-BoldItalic.ttf 
      LiberationSerif-Italic.ttf 
      LiberationSerif-Regular.ttf
    Liberation/
      Liberation-Bold.ttf 
      Liberation-BoldItalic.ttf 
      Liberation-Italic.ttf 
      Liberation-Regular.ttf
```

#### Viewing theme

You can choose the background color of the reader between white and black.

#### Layout

Two layouts are available:
  - Scroll
  - Paginated

#### Column count (Paginated layout only)

Choose the number of columns of text to display.

#### Text size & line spacing

Increase or decrese the text size and line spacing.

#### Page margins

You can increase the size of the margins.

## Help dialog

The help dialog will display the available keyboard shortcuts. The dialog is context-aware, and will only show shortcuts that are relevant to the current reading mode.
