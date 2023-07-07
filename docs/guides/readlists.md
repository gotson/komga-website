# Read lists

Read lists let you gather related books together. Think of it as playlists, but for books. For example, you might add all the books where Wolverine appears together in a "Wolverine" read list.

## Adding books to a read list

You can add a Book to a read list from the action menu icon <img src="/assets/media/guides/action-menu-icon.png" style={{verticalAlign: 'middle', maxHeight: '32px'}} /> and click on _Add to read list_.

You can also select multiple books, and click on _Add to read list_.

<img src="/assets/media/guides/readlists/multiselect-add-readlist.png" style={{maxHeight: ' 80px'}} />

A dialog will show up, where you can either add books to an existing read list, or create a new read list.

<img src="/assets/media/guides/readlists/add-readlist-dialog.png" style={{maxHeight: ' 300px'}}/>

## Finding the Read Lists

Read lists can be discovered or viewed in three ways:
1. Book details screen
2. Viewing the libraries "By Read List"
3. Searching in the search bar

### Book details screen

When viewing the details screen for a specific book that belongs to a read list, the read list will be displayed in a collapsible panel.

<img src="/assets/media/guides/readlists/book-readlist-collapsed.png" style={{maxHeight: '300px'}} />

Click on the panel to expand it and see the content of the read list.

<img src="/assets/media/guides/readlists/book-readlist-expanded.png" style={{maxHeight: '300px'}} />

### Viewing the libraries "By Read List"

Only show read lists that exist in the library. Opening a read list goes to the "read list details" screen (see below).

<img src="/assets/media/guides/readlists/browse-readlists.png" style={{maxHeight: '100px'}} />

## Read List details

The read list details screen contains all the books that belong to the read list. It can include books from any library and any series. By adding items in different libraries or series to read lists, you can relate them to each other.

### Read List ordering

By default books in a read list are ordered manually. However, you can edit a read list and choose to disable the manual ordering, in which case books will be ordered by release date.

Either click on the edit button on the read list card.

<img src="/assets/media/guides/readlists/readlist-edit-card.png" style={{maxHeight: '300px'}} />

Or click on the edit button from the read list details screen.

<img src="/assets/media/guides/readlists/readlist-edit-button.png" style={{maxHeight: '60px'}} />

A dialog will show up, where you can edit the read list's ordering.

<img src="/assets/media/guides/readlists/readlist-edit-dialog.png" style={{maxHeight: '300px'}} />

A manually ordered read list will be showing as such in the read list details screen.

<img src="/assets/media/guides/readlists/readlist-manual-ordering.png" style={{maxHeight: '50px'}} />

### Edit read list elements

From the read list details screen you can edit the elements composing a read list. To do so, click on the corresponding button in the toolbar.

<img src="/assets/media/guides/readlists/readlist-edit-elements-button.png" style={{maxHeight: '80px'}} />

The book cards will show two extra elements:
- a delete button, to remove the book from the read list
- a grip handle, which let you drag and drop books to reorder them (only available when the read list is manually ordered)

Once you are done with your changes, click the tick in the top bar. Click the cross to discard your changes.

<img src="/assets/media/guides/readlists/readlist-edit-elements.png" style={{maxHeight: '400px'}} />

## Deleting a read list

To delete a read list, look for the action menu icon <img src="/assets/media/guides/action-menu-icon.png" style={{verticalAlign: 'middle', maxHeight: '32px'}} /> and click on _Delete_.

This will not delete the items in the read list, nor your media files.

## Import read lists from ComicRack

You can import ComicRack reading lists in `.cbl` format from the _Import > Read List_ screen.

<img src="/assets/media/guides/readlists/import.png" style={{maxHeight: '400px'}} />

`.cbl` files contain the following information:
- read list name
- books contained in the list, in order
- for each book:
    - name of the series it is part of
    - volume of the series
    - year of the series
    - number of that book in the series

Komga will try to match each book in the list in the following way:
- part of a series named `Series` or `Series (Volume)`
- where the number matches

The result will be shown after you click the _Match_ button.

<img src="/assets/media/guides/readlists/import-results.png" style={{maxHeight: '500px'}} />

If some books are not matched, you can manually choose a series and a book. Duplicates and missing books will be shown with an error indicator on the right side.

Click _Create_ to create the read list. If some books are unmatched, you can still create the read list (a confirmation dialog will pop-up).