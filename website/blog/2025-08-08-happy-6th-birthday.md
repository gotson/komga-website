---
slug: happy-6th-birthday
title: Komga turns 6!
authors: gotson
tags: [komga]
---

Komga is 6 years old !

Back then Komga didn't even have a user interface, and at first it could only be used as a Tachiyomi (now Mihon) source.

<!-- truncate -->

The first version of the UI was only added in October 2019. At that time I didn't know much about web development, but building on Vue 2 / Vuetify 2 helped me to build a good-looking UI that has worked quite well so far. It has become however quite difficult to maintain and evolve:
- There are practically no tests, meaning bugs can be introduced easily.
- There is a lot of duplicated code, mostly due to Vue 2 limitations.
- The whole development stack is tedious to work with, again due to what the javascript ecosystem was like in 2019.

While Vue 3 came out around the end of 2020, it brought so many breaking changes that it's practically impossible to migrate a project from Vue 2 to Vue 3. Vuetify itself only came up with its version 3 end of 2022, and even at that time most of the components were not ready yet.

This year I've started to work on a complete rewrite of the UI, using a more recent development stack, but also more experience under my belt.

As of now the foundations are sound and solid, and I've started rewriting the pages one by one. I am also using the rewrite as an opportunity to include feature requests that were difficult to add in the current version of the UI. 

There is still quite a lot to do, so as usual I cannot provide any tentative release date, but I really hope this can be done in 2025. Stay tuned!