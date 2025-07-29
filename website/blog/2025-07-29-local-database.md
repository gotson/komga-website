---
slug: local-database
title: Local databases and SQLite WAL
authors: gotson
tags: [performance, komga]
---

Komga has been using SQLite to store its data for around 5 years (v0.48.0 - July 2020), and while it works very well most of the time, some users have experienced bottlenecks on some systems.

In order to boost performances, Komga will enable the SQLite [WAL](https://sqlite.org/wal.html) mode (Write-Ahead Logging) by default in the near future.

Since WAL does not work over a network filesystem, release [1.23.0](https://github.com/gotson/komga/releases/tag/1.23.0) has introduced a startup check to ensure the databases are located on a local filesystem. Even without WAL, this is a good practice for SQLite performance.

If Komga does not start anymore after the upgrade to 1.23.0, check the logs to see if your setup falls into that case.