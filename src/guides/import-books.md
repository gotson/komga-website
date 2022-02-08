# Import Books

Komga lets you import files that are outside your existing libraries directly into existing series folder (from the _Import > Books_ screen).

## Scan for books

Start by choosing a folder to scan for eligible books, and click _Scan_.

<img src="/assets/media/guides/import-books/book-import-scan.png" style="vertical-align: middle;max-height: 400px" alt="Scan for books"/>

Komga will display a list of all files eligible for import.

## Select destination series

You will need to pick a destination series for each. You can choose individually, or for all the selected files at once using the _Select Series_ button.

<img src="/assets/media/guides/import-books/book-import-pick-series.png" style="vertical-align: middle;max-height: 400px" alt="Select series"/>

## Check book details

For each book, you can:
- display the book details: format, number of pages, and detailed page list
- browse the book pages
- change the destination file name

If you choose a number for a book, and a book already exists with that number, Komga will offer you to upgrade it, effectively replacing the existing file. In case of upgrade, you can:
- display the details of both books side by side
- browse both books side by side

<img src="/assets/media/guides/import-books/book-import-buttons.png" style="vertical-align: middle;max-height: 400px" alt="Book actions"/>

## Finalize the import

Komga will import only the selected files (checkbox on the left).

You can decide to:
- move the files: files will be moved from their location, effectively deleting the original file.
- copy/hardlink the files: Komga will try to hardlink the files to their destination (compatible file systems only), and if that doesn't work will copy the files to their destination, leaving the original file untouched.

Cick _Import_ to start the import process.
