# Install via Scoop

:::warning
This method is not officially supported.
:::

Komga is available in [Scoop](https://github.com/ScoopInstaller/Scoop)'s [extras](https://github.com/ScoopInstaller/Extras) bucket.

## Installation

You need [Scoop](https://github.com/ScoopInstaller/Scoop#installation) to use this installation method.

### 1. (Skip if JDK is installed) Install JDK
Run `scoop bucket add java` and then run `scoop install java/temurin-lts-jdk`.

### 2. Install Komga
Run `scoop bucket add extras` and then run `scoop install komga`.

## Manage
### Run
Run `komga`.

Note: Default config dir is `%USERPROFILE%\scoop\apps\komga\current\config`

### Update
Run `scoop update komga`.

### Uninstall
Run `scoop uninstall komga`
