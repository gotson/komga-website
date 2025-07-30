# Introduction

## What is Komga?
Komga is a media server for your comics, mangas, BDs, magazines and eBooks.

How it works:
1. Install and run Komga on a computer or NAS.
2. Add libraries by type of content and let Komga do the rest.
3. Use the web interface or any compatible client.
4. Enjoy your books!

## What media and devices work?

### Komga supports these media file types

Komga supports the following file types:
- Comic book archives: _CBZ_ and _CBR_ (except solid archives, for RAR5 see below)
- eBooks in _EPUB_ format
- _PDF_ files

RAR 5 is supported on some platforms only, as it relies on native libraries for decoding.

| Platform     | RAR 5              |
|--------------|--------------------|
| macOS app    | :heavy_check_mark: |
| Windows app  | :heavy_check_mark: |
| Docker amd64 | :heavy_check_mark: |
| Docker arm64 | :heavy_check_mark: |
| Docker arm   | :x:                |

When using the `jar`, you will need to provide the native library yourself, and run Java with the [correct arguments](https://github.com/gotson/NightCompress/#requirements).

### Komga server compatibility

Komga can run on any system that can run Java or Docker:
- Windows
- macOS
- Linux
- Many popular NAS devices such as QNAP, Synology and more

## Demo

A demonstration website is available at: [https://demo.komga.org](https://demo.komga.org)

You can log in using the following credentials:
- Login: `demo@komga.org`
- Password: `komga-demo`
