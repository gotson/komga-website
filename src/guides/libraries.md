# Libraries

You can separate content in different libraries, a library is a group of books. Libraries access can also be restricted to specific users.

Each library has a root folder, and no library can share any part of their path.

For example if you have a library with a root path of `/books/mangas`, you can't create a library with a root path of `/books`, because the two root paths would overlap. You can however create a library with a root path of `/books/comics`.

## Creating libraries

[Click for video guide](/assets/media/guides/libraries/library-add.webm)

From the web interface:
- click on the _+_ icon next to _Libraries_ in the sidebar <img src="/assets/media/guides/libraries/library-add.png" style="vertical-align: middle" />
- choose a _Name_ for your library
- click the _Browse_ button and select a root folder containing your books
- click _Add_

<img src="/assets/media/guides/libraries/library-add-dialog.png" style="vertical-align: middle" height="300" alt="Add Library Dialog"/>

## Edit a library

To edit a library, look for the action menu icon <img src="/assets/media/guides/action-menu-icon.png" style="vertical-align: middle" height="32" /> and click on _Edit_.

:::warning
If you change the root folder of a library, and __the new path doesn't share anything with the previous path__, you will lose all your series, books and read progress for that library.

If you change the path __for a parent directory of the current path__, you will not lose your content.

If you change the path __for a child directory of the current path__, you will lose part of your content.
:::

## Delete a library

To delete a library, look for the action menu icon <img src="/assets/media/guides/action-menu-icon.png" style="vertical-align: middle" height="32" /> and click on _Delete_.

:::danger
Deleting a library will remove all series and books contained in this library. Read progress for all those books will be deleted.

This cannot be undone.
:::