# Full Text Search <Badge text="0.111.0+" />

Komga leverages [Full Text Search](https://en.wikipedia.org/wiki/Full-text_search) (FTS hereafter) to provide relevant results from your libraries.

- FTS will order results by relevance
- FTS matches on complete words: `bat` will not match `Batman`
- The order of words is not important: `batman robin` will match `Robin & Batman`
- You can search by prefix by adding the `*` character: `bat*` will match `Batman`
- You can search books by ISBN
- You can search series by publisher using the `publisher:term` syntax: `publisher:dc` will match all series published by _DC Comics_
- You can use the `AND`, `OR` and `NOT` operators (UPPERCASE) to build complex queries:
  - `batman NOT publisher:dc` will match all `Batman` series not published by _DC Comics_
  - `batman OR robin` will match `Batman` or `Robin`
  - `batman AND (robin OR superman)` will match `Superman & Batman` and `Batman & Robin`
- You can search by initial token using the `^` character: `batman ^superman` will match `Superman/Batman` but not `Batman/Superman`
- You can search for sequence of terms by enclosing them in the `"` character: `"three joker"` will match `Batman: Three Jokers` but not `The Joker War: Part Three`