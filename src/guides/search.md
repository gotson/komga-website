# Full Text Search <Badge text="0.116.0+" />

Komga leverages [Full Text Search](https://en.wikipedia.org/wiki/Full-text_search) (FTS hereafter) to provide relevant results from your libraries.

- FTS will order results by relevance
- FTS is case-insensitive
- When searching with CJK characters (Chinese, Japanese, Korean), a minimum of 2 characters is required.
- The order of words is not important: `batman robin` will match `Robin & Batman`
- To search by words in order, enclose your search in `"`: `"white knight"` will not match `knight white` nor `white and knight`
- By default, the search will match the item title. For Books, the ISBN will also be matched by default.
- You can use the `AND`, `OR` and `NOT` operators (UPPERCASE) to build complex queries:
  - `batman NOT publisher:dc` will match all `Batman` series not published by _DC Comics_
  - `batman OR robin` will match `Batman` or `Robin`
  - `batman AND (robin OR superman)` will match `Superman & Batman` and `Batman & Robin`
  - `writer:remender penciller:murphy`
- You can perform range queries using the `[a TO b]` syntax. Example: `release_date:[1990 TO 2000]`. Note that the matching is lexicographic, not numerical. You can also use wildcards: `release_date:[2010 TO *]`.

Some extra fields are available for search using the `field:search` syntax, see after.

### Series additional fields
- `publisher`. Example: `publisher:vertigo`
- `status`
  - Possible values: `ongoing`, `ended`, `hiatus`, `abandoned`
  - Example: `status:hiatus`
- `reading_direction`
  - Possible values: `left_to_right`, `right_to_left`, `vertical`, `webtoon`
  - Example: `reading_direction:right_to_left`
- `age_rating`. Example: `age_rating:12`
- `language`. Example: `language:fr`
- `tag` will search any tag, whether it is set at Series or Book level. Example: `tag:action`
- `series_tag` will search series tags only
- `book_tag` will search book tags only
- `genre`. Example: `genre:action`
- `author` will search authors with any role. Example: `author:(sean murphy)`
  - You can also search by specific role. Example: `writer:remender`
  - Possible role values are: `writer`, `penciller`, `letterer`, `inker`, `editor`, `cover`, `colorist`
- `book_count`, which is the number of books present in that Series. Example: `book_count:1`
- `total_book_count`. Example: `total_book_count:100`
- `release_date` will search by year released. Example: `release_date:1999`
- `deleted` will search soft-deleted series. Example: `deleted:true` or `deleted:false`
- `complete` will search complete series, ie series where the _total book counts_ (from metadata) is equals to the actual book counts (number of files). Example: `complete:true` or `complete:false`

### Book additional fields
- `tag` will search any tag. Example: `tag:"double pages"`
- `author` will search authors with any role. Example: `author:(sean murphy)`
  - You can also search by specific role. Example: `writer:remender`
  - Possible role values are: `writer`, `penciller`, `letterer`, `inker`, `editor`, `cover`, `colorist`
- `release_date` will search by year released. Example: `release_date:1999`
- `status`
  - Possible values: `ready`, `unknown`, `error`, `unsupported`, `outdated`
  - Example: `status:(error OR unsupported)`
- `deleted` will search soft-deleted books. Example: `deleted:true` or `deleted:false`
