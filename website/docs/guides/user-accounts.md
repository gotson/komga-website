# User accounts

The administrator of a Komga server has the ability to create other User Accounts for that server.

You can manage Users in _Server Settings > Users_.

<img src="/assets/media/guides/user-accounts/users-management.png" style={{maxHeight: '300px'}} alt="Users management"/>

## Creating Users

You can add a user by clicking on the _+_ button.

<img src="/assets/media/guides/user-accounts/add-user.png" style={{maxHeight: '200px'}} alt="Add User"/>

A dialog will show up. Fill in all the required information, and press _Add_.

<img src="/assets/media/guides/user-accounts/add-user-dialog.png" style={{maxHeight: '400px'}} alt="Add User Dialog"/>

## User Roles

Users can have different roles, giving them the ability to do certain things.

### Administrator

An administrator can perform all the management actions:
- add, edit, and delete libraries
- add, edit, and delete users
- add, edit, and delete collections
- edit series and book metadata
- manually scan, analyze and refresh metadata

### Page Streaming

A user with this role will be able to stream individual pages, for example to read using the Webreader.

### File Download

A user with this role will be able to download the file of a book.

## Shared Libraries

An administrator can limit what libraries users can access. This is done via the _Edit Restrictions_ button.

<img src="/assets/media/guides/user-accounts/edit-libraries.png" style={{maxHeight: '50px'}} alt="Edit Restrictions"/>

Choose the libraries the user will be able to access, or select _All libraries_ for unrestricted access (default option).

<img src="/assets/media/guides/user-accounts/edit-libraries-dialog.png" style={{maxHeight: '400px'}} alt="Edit Shared Libraries"/>

## Content Restrictions

Content restrictions lets you control more finely the content you share. You can select specific age rating as well as content that you’ve set with a specific Label.

Content restriction is performed at series level, and will also apply to books, collections and reading lists. 

### Age Rating

Select which age rating you wish to only allow or exclude. For instance, if you choose to only allow content under 10 as the restriction, then only content that has an age rating of 10 or under will be shared . If you choose to exclude content over 16 then those will be hidden.

<img src="/assets/media/guides/user-accounts/restriction-age-allow.png" style={{maxHeight: '400px'}} alt="Age Restriction Allow under"/>

<img src="/assets/media/guides/user-accounts/restriction-age-exclude.png" style={{maxHeight: '400px'}} alt="Age Restriction Exclude over"/>

### Labels

You can create arbitrary Labels when editing library content. When sharing, you can then choose to allow one or more Labels to have content matching those Labels shared. You can also exclude labels.

Labels are defined on Series:

<img src="/assets/media/guides/user-accounts/series-sharing.png" style={{maxHeight: '400px'}} alt="Edit Shared Libraries"/>

### Multiple restrictions

When combining multiple restrictions, the following rules apply:
- Exclusion rules have always priority over allow rules.
- Allow rules apply with an _OR_ condition: for example allowing a user to access content rated 10 or under, or labelled "kids", the user will be able to access content matching one or the other.

<img src="/assets/media/guides/user-accounts/restrictions-dialog.png" style={{maxHeight: '400px'}} alt="Edit Restrictions"/>

## Deleting Users

:::danger
Deleting a user will remove all read progress for this user.

This cannot be undone.
:::
