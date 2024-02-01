# Duplicate Pages

Komga can detect duplicate pages among your books, and delete them manually or automatically.

You need to enable [page hashing](libraries.md#compute-hash-for-pages) for your libraries.

You can manage duplicate pages from _Server Settings > Duplicate Pages_.

:::warning
**Duplicate page removal will modify your files.**

It is recommended to perform a backup, and to try using manual deletion before using automatic deletion.
:::

## Browsing New Duplicates

This screen will show all the newly detected duplicate pages. You can sort them by _Count_ of duplicates, _Size_ of the image, or the _Total Size_ you could save by deleting it.

<img src="/assets/media/guides/duplicate-pages/duplicate-pages-new.png" style={{maxHeight: ' 400px'}} alt="Browse New Duplicates"/>

For each duplicate page, you can:
- _Ignore_: It won't show anymore on this page, and Komga won't do anything about it.
- _Manual Delete_: You will be able to trigger manual deletion from the _Known_ view.
- _Auto Delete_: Komga will automatically remove those pages after a library scan.

You can also see the detailed list of matches by clicking on the _Matches_ button. It will show all the books containing the duplicate page, as well as the image for each, so you can perform a visual check. You can also delete matches individually.

## Browsing Known Duplicates

This screen will show all the duplicate pages for which you chose an action. You can sort them by _Deletion Count_ , _Size_ of the image, or the _Space Saved_ so far.

<img src="/assets/media/guides/duplicate-pages/duplicate-pages-known.png" style={{maxHeight: ' 400px'}} alt="Browse Known Duplicates"/>

For each page, you can change the action. You can _Ignore_ a page that was set for deletion, or mark an ignored one for deletion, if you changed your mind.

For pages set for _Manual Delete_, you can trigger the deletion using the _Delete Matches_ button.