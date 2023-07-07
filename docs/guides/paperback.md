# Read with Paperback

Komga has an extension for [Paperback](https://paperback.moe/), a free iOS and iPadOS reader.

:::caution
Paperback requires iOS 13.4+ or iPadOS 13.4+.
:::

## Install and configure

### Add the source repository
Support for Komga comes pre-installed with Paperback under the `Paperback` source name. If deleted the extension and repository simply open [the repository page](https://paperback-ios.github.io/extensions-main-promises/) on your device and tap **Add to Paperback**.

Once Paperback opens choose "Add as Source Repo" on the popup.

<details>
<summary>Add the source repository manually</summary>
If you prefer, it is also possible to add the repository manually:

1. In the app, go to **Settings**, **External Sources** then press **Edit** on the top right-hand corner.
1. Press the top left-hand corner **+** button to add a repository.
1. Use the base url:
   ```
   https://paperback-ios.github.io/extensions-main-promises/
   ```
   
</details>

### Install the source
1. In the app **Settings**, **External Sources** windows, choose `Browse Official Repo`, or `Browse ...` followed by the repository name you chose previously

1. Install the source **Paperback**

### Configure the source
1. In the app **Settings**, **External Sources**, press the `Paperback` source
1. Select **Server Settings** and set your:
   * server url
   * username
   * password
1. Press **Save** to exit

:::tip
You can test your settings by opening **Try Settings** below the Server Settings section
:::

## Track read progress

It is possible to sync read chapters from the app to the Komga server using an implicit tracker.

### Add the tracker repository
1. In the app, go to **Settings**, **External Trackers** then press **Edit** on the top right-hand corner
1. Press the top left-hand corner **+** button to add a repository.
1. Use the base url (**do not** open this url):
   ```
   https://paperback-ios.github.io/trackers-main/main/
   ```

### Install the tracker
1. In the app **Settings**, **External Trackers** windows, choose `Browse ...` for the repository you just added
1. Install the tracker **Paperback**

When you read or mark as read a chapter in the app, it will now be marked as such on your Komga server.

## Changelog and Compatibility

Each version of the Komga extension need a specific version of the Komga server to work properly.
