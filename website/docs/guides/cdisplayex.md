# Read with CDisplayEx

The premium version of [CDisplayEx](https://www.cdisplayex.com/mobile/) for Android allows you to connect 
to Komga using the REST API.

:::warning
If you have disabled the [page dimensions analysis](libraries.md#analyze-page-dimensions) option, re-enable it, 
it is necessary to open books with CDisplayEx.
:::

## Add a new location

On the home page, use the big **+** button at the bottom right to add a new location. Then choose the Komga option from the list that appears.
A dialog box appears asking you to enter some information.

You can specify an **IP Address** or a **host name** to identify the remote server. 
Here are some examples: `192.168.1.12, computer.local, demo.komga.org, user.host.net/komga`

Enter your **username** and **password**.

Specify a **port** number if you are using a different port than the one used by default by the HTTP or HTTPS protocols. If you are using HTTPS, check the **SSL** option.

:::tip
If you are using a self-signed certificate and don't want to add it to your device, there is an experimental option to disable SSL certificate verification.
:::

The application uses a **virtual folder** structure to browse books by library, series, collections and reading lists. Select a folder to 
make only part of your library accessible. If you want to make everything accessible, leave the **path** blank.

Add a **description** and leave the other options checked.

Now press the **ADD** button, the synchronization will start, depending on the size of your library and the performance of your server, 
it may take a few minutes or a few seconds. You will be notified when this operation is complete.

## Nested folders

Without waiting for the synchronization to complete, you can browse folders by tapping on the location that was just 
added to the home page. In this view, the server must be reachable. You will be able to navigate in a virtual folder structure.

:::tip
To see a thumbnail on the folder and to display statistical information, 
you must activate the thumbnail option: [Show a thumbnail on folders](https://www.cdisplayex.com/mobile/settings/#show-a-thumbnail-on-folders)
:::

## Library

Once the synchronization is complete, the location has been added to the application library, it is accessible offline. 
Go to the series from the home page or by using the navigation bar. If you want to read a book offline you need to download it, 
long press on the book and use the download button.

## Reading status

Reading status and read progress are synced at different times when you use the app.

- When you sync location manually. (Make a long press on the location and start the synchronization)
- When you browse or refresh a series folder from a location.
- When you open and close a book.
- When the app goes into the background while a book is open.
