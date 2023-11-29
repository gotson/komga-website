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

For WebP, the native library will be used if present. Else, the Java implementation will be used as fallback.

| Platform     | JPEG XL (jxl)      | AVIF / HEIF        | WebP                        |
|--------------|--------------------|--------------------|-----------------------------|
| macOS app    | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: (native) |
| Windows app  | :heavy_check_mark: | :x:                | :heavy_check_mark: (java)   |
| Docker amd64 | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: (java)   |
| Docker arm64 | :x:                | :heavy_check_mark: | :heavy_check_mark: (java)   |
| Docker arm   | :x:                | :x:                | :heavy_check_mark: (java)   |

When using the `jar`, you will need to provide the native libraries yourself, and run Java with the correct arguments. You can check for more details [here](https://github.com/gotson/NightMonkeys#requirements).