# Read with any OPDS reader

Komga should work with any OPDS reader, whether they use OPDS v1 or v2.

## OPDS v2

You will need to configure the following URL in your OPDS reader: 

```
http(s)://your-server(:25600)(/baseUrl)/opds/v2/catalog
```

Here is a list of reader applications that have been tested:


| OS            | App name                                                                                                                                                             |             Status              | Sync read progress | Streaming |
|---------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------:|:------------------:|:---------:|
| Android / iOS | Cantook by Aldiko ([Android](https://play.google.com/store/apps/details?id=com.aldiko.android), [iOS](https://apps.apple.com/us/app/cantook-by-aldiko/id1476410111)) | Covers are not showing properly |        Yes         |    No     |


## OPDS v1

You will need to configure the following URL in your OPDS reader:

```
http(s)://your-server(:25600)(/baseUrl)/opds/v1.2/catalog
```

Here is a list of reader applications that have been tested:

| OS      | App name                                                                                                             |                                                  Status                                                  |   OpenSearch support   |                  Page streaming support                   |
|---------|----------------------------------------------------------------------------------------------------------------------|:--------------------------------------------------------------------------------------------------------:|:----------------------:|:---------------------------------------------------------:|
| Android | [FBReader: Favorite Book Reader](https://play.google.com/store/apps/details?id=org.geometerplus.zlibrary.ui.android) | :x: Can't download CBR/CBZ, only PDF. PDF only supported in Premium version. Does not remember password. |           No           |                            No                             |
| Android | [Moon+ Reader](https://play.google.com/store/apps/details?id=com.flyersoft.moonreader)                               |                                            :heavy_check_mark:                                            |           No           |                            No                             |
| Android | [Librera](https://play.google.com/store/apps/details?id=com.foobnix.pdf.reader)                                      |                                            :heavy_check_mark:                                            |           No           |                            No                             |
| Android | [PocketBook](https://play.google.com/store/apps/details?id=com.obreey.reader)                                        |                                         :x: Doesn't show CBR/CBZ                                         |           No           |                            No                             |
| iOS     | [KyBook 3](http://kybook-reader.com/)                                                                                |                                            :heavy_check_mark:                                            |        **Yes**         |                            No                             |
| iOS     | [Panels](https://panels.app/)                                                                                        |                                            :heavy_check_mark:                                            | **Yes** <br/>(v3.0.0+) | **OPDS PSE 1.0** (v2.8.0+)<br/>**OPDS PSE 1.1** (v2.9.7+) |
| iPadOS  | [Chunky Comic Reader](https://apps.apple.com/us/app/chunky-comic-reader/id663567628)                                 |                               ✔️ OPDS v1                               |           No           |                     **OPDS PSE 1.0**                      |


The OPDS v1 feed also supports:

- OpenSearch functionality, to search by `Series`
- [OPDS Page Streaming Extension 1.2](https://anansi-project.github.io/docs/opds-pse/intro)
