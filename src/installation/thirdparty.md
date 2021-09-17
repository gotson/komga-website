# Install via third-party integrations

:::warning
Those methods are not officially supported, if you encounter installation issues please contact the respective authors.
:::

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
SCALE IS STILL IN BETA!
There is a [tutorial](https://truecharts.org/manual/Quick-Start%20Guides/01-Open-Apps/) to install Truecharts on TrueNAS SCALE. Follow steps 1-4 to add TrueCharts to SCALE. 
In order to create komga you need to find it under the TrueCharts apps in SCALE.
Scale needs access to ip range of: 172.16.0.0/16 in order to deploy. 
Keep all defaults and change:  
1. Enter a name with lowercase letters.
2. Change the update type to "Rolling Update:Create new pods and then kill old ones"
3. Next
4. You can change the node port to whatever you prefer, this is the port you will be accessing komga over. 
5. This is the Komga Data source, add what you need. 
6. Next
7. Next
8. Choose the container resources (I chose default), Next.
9. I left this at disabled, Next.
10. Install Komga and let it run. 
Once its installed click portal and you  now have komga setup in SCALE. 
