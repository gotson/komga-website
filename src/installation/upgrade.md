# Prepare for v1.0.0

The future v1.0.0 will bring some breaking changes, this guide will help you to prepare for the next major version.

## Before upgrading

- If you run Docker, it is advisable to use the `0.x` tag instead of `latest`. You will be able to decide when you want to upgrade, especially if you are updating containers automatically.
- Backup your `database.sqlite`. You can find it in the configuration directory, by default:
  - on Windows: `%USERPROFILE%/.komga/database.sqlite`
  - on Unix: `~/.komga/database.sqlite`
  - on Docker: in the directory you mounted as `/config`

## Breaking changes

- The minimum Java version required will be Java 17:
  - If you run Komga using the `jar`, you will need to make sure your Java version is sufficient by running `java -version`.
  - If you run Komga using Docker, you don't need to do anything.
- The hashing algorithm for files and pages will change. Previous hashes for files and pages will be deleted. On startup, if hashing is enabled, Komga will re-hash files and pages using the new algorithm.
- The default port will be changed from `8080` to `25600`:
  - If you use Docker, you will need to update your container or compose configuration to expose the new port.
  - You may need to adjust your reverse proxy settings.
  - You can still change the port [through configuration](/installation/configuration.md#server-port-server-port-port).