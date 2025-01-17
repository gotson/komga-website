# Deprecation


## To be removed in 2.0.0

The following API endpoints will be removed in version `2.0.0`.

### PUT /api/v1/libraries/\{libraryId}

Deprecated since version: `1.3.0`

Use `PATCH /api/v1/libraries/{libraryId}` instead, without any change needed. The `PUT` endpoint redirects to the `PATCH` endpoint internally.

The endpoint now accepts a partial DTO, and will only update fields that are present.

### GET /api/v1/series

Deprecated since version: `1.15.0`

Use `POST /api/v1/series/list` instead.

### GET /api/v1/alphabetical-groups

Deprecated since version: `1.15.0`

Use `POST /api/v1/series/list/alphabetical-groups` instead.

### GET /api/v1/books

Deprecated since version: `1.19.0`

Use `POST /api/v1/books/list` instead.

### GET /api/v1/series/\{seriesId}/books

Deprecated since version: `1.19.0`

Use `POST /api/v1/books/list` instead.