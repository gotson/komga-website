# Emptying Library Trash

Like modern operating systems, Komga uses a concept of placing items in the “trash” before they’re permanently removed. If you move or delete the file for a library item or if the file somehow becomes unavailable, then the library item will be placed into the “trash”. This helps prevent against items being accidentally or unintentionally removed from your Library. It can be particularly helpful in situations where a drive or network share where content is stored isn’t available when a Library Scan occurs. By default, the item will remain in the trash until you perform an “Empty Trash” on your Server.

If an item is currently in the trash, it can be restored back to the Library by making the file for the library item available again at the expected location. Conversely, if you perform an “Empty Trash” on your Server, then the item is discarded from the trash and can no longer be automatically restored.

Items currently in the trash will be displayed with an "Unavailable" indicator.

<img src="/assets/media/guides/trash/unavailable-card.png" style={{maxHeight: '300px'}} alt="Unavailable indicator on card"/>

<br/>
<br/>

<img src="/assets/media/guides/trash/unavailable-details.png" style={{maxHeight: '300px'}} alt="Unavailable indicator on details view"/>

## File Hashes

With the trash bin, you can move or rename files and folders without losing your metadata, read progress, or read lists and collections.

To track your files when they are renamed or restored, Komga generates a file hash for each file. If Komga doesn't have a file hash for a file, it won't be able to restore data after a file move or rename. Hashing files requires some computing power, so you may want to disable this entirely on low-end devices (see [Configuration](/installation/configuration.mdx)).

## Automatically Empty Trash {#automatically-empty-trash}

By default, items found removed from a Library are placed in the trash until the trash is emptied. You can choose to have your Server automatically empty the trash after every scan occurs if you wish. To do so:

1. Open Komga web interface
1. Edit the library for which you want to change the setting
1. Enable the _Empty trash automatically after every scan_ option
1. Save Changes

<img src="/assets/media/guides/trash/empty-trash-after-scan.png" style={{maxHeight: '300px'}} alt="Empty trash automatically after every scan option"/>

:::danger
Enabling this option means that content will be removed from your Library immediately with no chance to simply restore it if there was a mistake.

It will also prevent folder and file moves between libraries.
:::

## Manually Empty Trash

If you have items in the trash that you’re ready to remove, you can empty the trash.  When you choose to empty the trash, you’ll need to confirm your choice.

Look for the action menu icon <img src="/assets/media/guides/action-menu-icon.png" style={{verticalAlign: 'middle', maxHeight: '32px'}} /> and click on _Empty Trash_.

<img src="/assets/media/guides/trash/empty-trash-confirmation-dialog.png" style={{maxHeight: '250px'}} alt="Empty trash confirmation dialog"/>
