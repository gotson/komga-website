# Read with any OPDS reader

Komga should work with any OPDS reader, unfortunately most readers badly implement the OPDS protocol :disappointed:.

The URL should be configured as `http(s)://your-server(:8080)(/baseUrl)/opds/v1.2/catalog`.

Here is a list of reader applications that have been tested:

| OS      | App name                                                                                                             | Status                                                                                                   | OpenSearch support     | Page streaming support |
|---------|----------------------------------------------------------------------------------------------------------------------|:--------------------------------------------------------------------------------------------------------:|:----------------------:|:----------------------:|
| Android | [FBReader: Favorite Book Reader](https://play.google.com/store/apps/details?id=org.geometerplus.zlibrary.ui.android) | :x: Can't download CBR/CBZ, only PDF. PDF only supported in Premium version. Does not remember password. | No                     | No                     |
| Android | [Moon+ reader](https://play.google.com/store/apps/details?id=com.flyersoft.moonreader)                               | :x: Cannot download files. Does not remember password.                                                   | No                     | No                     |
| Android | [Librera](https://play.google.com/store/apps/details?id=com.foobnix.pdf.reader)                                      | :heavy_check_mark:                                                                                       | No                     | No                     |
| Android | [PocketBook](https://play.google.com/store/apps/details?id=com.obreey.reader)                                        | :x: Doesn't show CBR/CBZ                                                                                 | No                     | No                     |
| iOS     | [KyBook 3](http://kybook-reader.com/)                                                                                | :heavy_check_mark:                                                                                       | **Yes**                | No                     |
| iOS     | [Chunky Comic Reader](http://chunkyreader.com/)                                                                      | :heavy_check_mark:                                                                                       | No                     | **Yes**                |
| iOS     | [Panels](https://panels.app/)                                                                                        | :heavy_check_mark:                                                                                       | **Yes**<br>*(v2.8.2+)* | **Yes**<br>*(v2.8.0+)* |

The OPDS feed also supports:

- OpenSearch functionality, to search by `Series`
- [OPDS Page Streaming Extension 1.0](https://gotson.github.io/odps-pse/)

## Mark read progress while streaming pages <Badge text="0.134.0+" />

You can configure clients that support the Page Streaming Extension to mark progress while reading.

To do so, change the URL to `http(s)://your-server(:8080)(/baseUrl)/opds/v1.2/catalog?markread=true`.
