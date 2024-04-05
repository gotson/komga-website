# Install via third-party integrations

:::warning Warning
Those methods are not officially supported, if you encounter installation issues please contact the respective authors.
:::

## PikaPods

Offers managed hosting for Komga and shares part of the revenue back to the project. From $2.9/month with $5 free welcome credit.

[![Run on PikaPods](https://www.pikapods.com/static/run-button.svg)](https://www.pikapods.com/pods?run=komga)

## Windows Installer and Updater

A [Powershell script](https://github.com/losslesspng/SetUpKomgaJava) to get up and running with Komga.

## Scoop (Windows)

Komga is available in [Scoop](https://github.com/ScoopInstaller/Scoop)'s [extras](https://github.com/ScoopInstaller/Extras) bucket.

### Installation

You need Scoop to use this installation method. Instruction to install Scoop can be found [here](https://github.com/ScoopInstaller/Scoop#installation).

#### 1. (Skip if JDK is installed) Install JDK
Run `scoop bucket add java` and then run `scoop install java/temurin-lts-jdk`.

#### 2. Install Komga
Run `scoop bucket add extras` and then run `scoop install komga`.

### Manage
#### Run
Run `komga`.

Note: Default config dir is `%USERPROFILE%\scoop\apps\komga\current\config`

#### Update
Run `scoop update komga`.

#### Uninstall
Run `scoop uninstall komga`

## AUR - Arch User Repository

Komga is available as an [AUR](https://aur.archlinux.org/packages/komga/) package.

### Installation

It can be installed using `yay -S komga` (or any other AUR package manager).

### Run

Just run `komga`.

## QNAP

Komga is available as a [QPKG](https://www.qnapclub.eu/en/qpkg/853).

## FreeNAS

There is a [tutorial](https://blog.tommyku.com/blog/deploying-komga-on-freenas-jail/) to install Komga on FreeNAS jail.

## YunoHost

[![Install Komga with YunoHost](https://install-app.yunohost.org/install-with-yunohost.svg)](https://install-app.yunohost.org/?app=komga)

## TrueNAS SCALE

There are two primary methods to get Komga on TrueNAS SCALE. These are:
1. The built-in Community repository.
2. The TrueCharts community repository.

TrueCharts offers more features, such as easier management of domain names and https certificates.

### Built-in Community Repository

1. Open `Apps` then go to `Discover Apps` and then search for `Komga`.
2. Click on `Komga` and then click on `Install`.
3. Leave everything as default, except:
    1. Optional: Under `Network Configuration` you can change the `Web Port`. This is the port at which you can later access Komga.
    2. Optional: Under `Storage Configuration` you can add the location to wherever your media files are currently stored by clicking `Add` next to `Additional Storage`.
6. Click `Install`.

### TrueCharts

There is a [tutorial](https://truecharts.org/manual/SCALE/guides/getting-started#adding-truecharts) to install Truecharts on TrueNAS SCALE. Follow the steps to add TrueCharts to SCALE.
1. Open `Apps` then go to `Discover Apps` and then search for `Komga`.
2. Click on `Komga` and then click on `Install`. Make sure that the `Komga` that you select says `Truecharts` in the UI, and not `TrueNAS`.
3. Leave everything as default, except:
    1. Optional: Under `Networking and Services` you can change the `Port`. This is the port at which you can later access Komga.
    2. Optional: If you will only access Komga through a domain name, see the TrueCharts guides for (a) [Networking and Services](https://truecharts.org/manual/SCALE/options/networking) and (b) [Ingress](https://truecharts.org/manual/SCALE/options/ingress).
    3. Optional: In `Storage and Persistence`, under `App Data Storage` you can change the location to wherever your media files are currently stored. For detailed instructions, see the [TrueCharts guide for adding storage](https://truecharts.org/manual/SCALE/guides/add-storage).
4. Click `Install`.
