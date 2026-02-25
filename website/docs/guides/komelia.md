# Read with Komelia

[Komelia](https://github.com/Snd-R/Komelia) is free and open source cross-platform Komga client. Supported platforms
include Android, Windows and Linux

## Installation

- Latest prebuilt installers for all platforms are available at https://github.com/Snd-R/Komelia/releases
- Android F-Droid package https://f-droid.org/packages/io.github.snd_r.komelia/
- Linux AUR package https://aur.archlinux.org/packages/komelia

## App updates

:::note
F-Droid package doesn't have self-update capability. Updates are handled by F-Droid app
:::

Android app can check and update itself to latest version. \
Permission to install apps is required, otherwise you'll need to download and install new apk from GitHub release page.

Windows and Linux version can only check for new version and direct you to download page. You'll need to manually
download and run installer.

Automatic update checks can be disabled in settings.

## Using in local network

<img src="assets/media/guides/komelia/login.png" style={{maxHeight: '600px'}} alt="Komelia login screen"/>

Enter localhost (or your host's internal IP address if on a different device on the same network, like a Android device), then follow with your open port; seperate with a colon.

For example: `http://localhost:25600` (`http://192.168.219.107:25600/`).

Enter your Komga server's username and password.

For access outside your local network, see [Expose your server](https://komga.org/docs/installation/https).
