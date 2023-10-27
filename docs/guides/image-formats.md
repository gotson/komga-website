# Image Types

## Decoding images

Komga doesn't always need to decode images within your books. Image decoding is necessary in the following cases:
- thumbnail generation
- ISBN barcode detection
- analyze page dimensions
- on-the-fly page conversion

If the client requesting a page can decode the format, Komga passes the raw image data without decoding.

## Common types

The following types are supported on every platform:
- JPEG
- PNG
- GIF
- WebP

## Advanced types

More advanced types are supported on some platforms only, as they rely on native libraries for decoding.

| Platform     | JPEG XL (jxl)      | AVIF / HEIF        |
|--------------|--------------------|--------------------|
| macOS app    | :heavy_check_mark: | :heavy_check_mark: |
| Windows app  | :heavy_check_mark: | :x:                |
| Docker amd64 | :heavy_check_mark: | :heavy_check_mark: |
| Docker arm64 | :x:                | :heavy_check_mark: |
| Docker arm   | :x:                | :x:                |

When using the `jar`, you will need to provide the native libraries yourself, and run Java with the correct arguments. You can check for more details [here](https://github.com/gotson/NightMonkeys#requirements).