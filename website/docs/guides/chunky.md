# Read with Chunky Reader (iPad)

:::danger Note
Chunky Reader does not work anymore with Komga 1.4.0+
:::

## Background

Thanks to Komga's OPDS support, you can use the [Chunky Reader](https://apps.apple.com/app/id663567628) application for iPad to remotely download or stream your comics. Chunky Reader is at time of writing the only comic reader on iPad that supports the OPDS page streaming extension. This lets you stream individual pages without having to download the whole comic file onto your iPad.

:::warning
Please note that Chunky Reader's OPDS support requires the in app purchase which costs $3.99 or the equivalent of your local currency.
:::

## Adding your Komga server to Chunky

First you need to make sure that you can browse to your komga server's web UI from Safari on your iPad. Open up Safari, navigate to your server's address and log in as normal. Next, open the address bar, delete `/dashboard` part which is added automatically when you log in, and then append `/opds/v1.2/catalog` to the end of the URL and press return.

<img src ="/assets/media/guides/chunky-setup/safari-check1.png"/>

You should then see a screen like the below image, if you do, you're ready to proceed with configuring Chunky Reader. You may wish to copy the URL to your iPad clipboard for pasting later.

<img src ="/assets/media/guides/chunky-setup/safari-check2.png" />

Open Chunky Reader and click the cloud icon, circled in red in the screenshot below.

<img src ="/assets/media/guides/chunky-setup/cloud-symbol.png"/>

In the pop up window, click the plus button, circled in red in the screenshot below.

<div class="text--center">
    <img src ="/assets/media/guides/chunky-setup/plus-button.png" width="300"/>
</div>

Now choose the green plus button next to "Calibre/Ubooquity/OPDS".

<div class="text--center">
    <img src ="/assets/media/guides/chunky-setup/opds-option.png" width="300"/>
</div>

In this dialogue box, enter your _server address_ (paste from the earlier step if you copied it to clipboard), _username_, and _password_. Then click _Connect_. Your Komga server should now appear in the cloud icon menu. You can stream comics by navigating to them and tapping the name, or download them via clicking the blue download button next to a comic. You can download all the comics in a given view by tapping the _All_ button in the bottom right of the menu.

<div class="text--center">
    <img src ="/assets/media/guides/chunky-setup/list-view.png" width="300" />
</div>

## Limitations

Reading comics via Chunky Reader **does not** update the read progress. This means you will need to manually mark your comics as read via the web UI.
