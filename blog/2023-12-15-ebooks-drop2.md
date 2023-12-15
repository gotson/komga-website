---
slug: ebook-drop2
title: eBook drop 2
authors: gotson
tags: [upgrade, komga]
---

Version [1.9.0](https://github.com/gotson/komga/releases/tag/1.9.0) contains the second feature drop for Ebooks support.

It brings nice additions to the initial release, most notably the read progress will be kept when reading and restored, same as with other books.

The analysis process of EPUB files was also revamped, and some EPUB files that were not analyzed before should be working fine now.

While the first release forced all the EPUB files through the Epub Reader, this release brings back compatibility with the Divina Reader for pre-paginated EPUB files containing only images. This also restores support for the Pages API, and thus the compatibility with Tachiyomi, or any OPDS-PSE client.

Head over to the [Release Notes](https://github.com/gotson/komga/releases/tag/1.9.0) for more details on all the new features and fixes.