# Run on ZimaOS

:::warning
This method is not officially supported. Support is provided by the ZimaOS team — see [Need Help](#need-help) below.
:::

This guide covers installing and using Komga on [ZimaOS](https://www.zimaspace.com/zimaos?utm_source=komga&utm_medium=docs&utm_campaign=zimaos_integration). Komga is natively supported in the ZimaOS App Catalog and can be installed in just a few minutes.

## Prerequisites

- A running ZimaOS home server.
- Your PDF or EPUB files stored in a local folder on your ZimaOS home server.

## Install from the App Catalog

1. Find Komga in the ZimaOS App Catalog: open **App Store** and search for "Komga".

   ![ZimaOS App Catalog showing the Komga app page](/assets/media/installation/zimaos/appstore-komga.png)

2. Install it — Komga is ready to use right away.

   ![ZimaOS desktop with Komga installed](/assets/media/installation/zimaos/komga-installed.png)

## Upload Files via ZimaOS Files

Use ZimaOS Files to upload or copy your PDF or EPUB files directly:

1. Open ZimaOS Files.
2. Create a new folder.
3. Drag and drop your PDF or EPUB files to upload them into the directory.

![ZimaOS Files showing a komga-library folder](/assets/media/installation/zimaos/drag-import-files.png)

## Authorize Komga to Load Data

The following steps are **not required** — you can get started right away with the default configuration.

If you want to customize the container settings, open the options in the upper-right corner of the Komga app:

![Komga app options menu](/assets/media/installation/zimaos/configuration-menu.png)

ZimaOS supports multiple configuration methods, including form-based editing and YAML secondary editing.

In the ZimaOS configuration form for Komga, navigate to the **Volumes** (or path mapping) section and add a new volume rule:

- Set the **Container Path** to `/data` (the default media directory inside Komga).
- Set the **Host Path** to the local folder on your ZimaOS device where your comics are stored.

![ZimaOS Komga configuration showing volume bind mounts](/assets/media/installation/zimaos/volumes-configuration.png)

## Need Help? {#need-help}

If you run into any issues while installing or using Komga on ZimaOS, join the [ZimaSpace Discord community](https://discord.gg/f9nzbmpMtU). Our team and community members will be happy to help.
