# Read with Paperback

Komga has an extension for [Paperback](https://paperback.moe/), a free iOS and iPadOS reader.

::: warning Warning
Paperback requires iOS 13.4+ or iPadOS 13.4+.
:::

## Install and configure

### Add the source repository
On your device open [https://framboisepi.github.io/paperback-extensions/komga/](https://framboisepi.github.io/paperback-extensions/komga/) then press **Add to Paperback**.

::: details Add the source repository manually
If you prefer, it is also possible to add the repository manually:

1. In the app, go to **Settings**, **External Sources** then press **Edit** on the top right hand corner.
1. Press the top left hand corner **+** button to add a repository.
1. Use the base url:
   ```
   https://framboisepi.github.io/paperback-extensions/komga/
   ```
:::

### Install the source
1. In the app **Settings**, **External Sources** windows, choose <code>Browse <span style="color: grey;">Lemon's Extensions - Komga</span></code>
   > or `Browse ...` followed by the repository name you chose previously

1. Install the source **Komga**

### Configure the source
1. In the app **Settings**, **External Sources**, press the Komga source
1. Select **Server Settings** and set your:
   * server url
   * username
   * password
1. Press **Save** to exit

::: tip Tip
You can test your settings by opening **Try settings** bellow the Server Settings section
:::

---

## Track read progress

It is possible to sync read chapters from the app to the Komga server using an implicit tracker.

### Add the tracker repository
1. In the app, go to **Settings**, **External Trackers** then press **Edit** on the top right hand corner
1. Press the top left hand corner **+** button to add a repository.
1. Use the base url (you should not open this url):
   ```
   https://framboisepi.github.io/paperback-trackers/komga/
   ```

### Install the tracker
1. In the app **Settings**, **External Trackers** windows, choose `Browse ...` for the repository you just added
1. Install the tracker **Komga**

When you read or mark as read a chapter in the app, it will now be marked as such on your Komga server.

## Changelog and Compatibility

Each version of the Komga extension need a specific version of the Komga server to work properly.