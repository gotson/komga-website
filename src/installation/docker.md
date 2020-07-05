# Install with Docker

## Version tags

This image provides various versions that are available via tags.


|**Tag** |**Description**         |
|:------:|------------------------|
|`latest`  |build from latest commit|
|`x.y.z` |version `x.y.z`         |

## Usage

Here are some example snippets to help you get started creating a container.

### docker

```
docker create \
  --name=komga \
  --user 1000:1000 \
  -p 8080:8080 \
  --mount type=bind,source=/path/to/config,target=/config \
  --mount type=bind,source=/path/to/books,target=/books \
  --restart unless-stopped \
  gotson/komga
```

Then start the container:

```
docker start komga
```

### docker-compose

```
---
version: '3.3'
services:
  komga:
    image: gotson/komga
    container_name: komga
    volumes:
      - type: bind
        source: /path/to/data
        target: /config
      - type: bind
        source: /path/to/books
        target: /books
      - type: bind
        source: /etc/timezone
        target: /etc/timezone
        read_only: true
    ports:
      - 8080:8080
    user: "1000:1000"
    environment:
      - <ENV_VAR>=<extra configuration>
    restart: unless-stopped
```

## Parameters

Container images are configured using parameters passed at runtime (such as those above).
These parameters are separated by a colon and indicate `external:internal` respectively.
For example, `-p 8080:80` would expose port `80` from inside the container to be accessible from the host's IP on port `8080` outside the container.

|                          Parameter                        | Function                                                              |
|:---------------------------------------------------------:|-----------------------------------------------------------------------|
| `-p 8080`                                                 | The port for the Komga APIs and web interface                         |
| `--user: 1000:1000`                                       | User:Group identifier - see below for explanation                     |
| `--mount type=bind,source=/path/to/config,target=/config` | Database and Komga configurations                                     |
| `--mount type=bind,source=/path/to/books,target=/books`   | Location of books library on disk                                     |
| `-e ENV_VAR=value`            | Any [configuration](/configuration) environment variable |

## User / Group Identifiers

When using volumes (`-v` flags) permissions issues can arise between the host OS and the container, we avoid this issue by allowing you to specify the user ID and group ID.

Ensure any volume directories on the host are owned by the same user you specify and any permissions issues will vanish like magic.

In this instance `UID=1000` and `GID=1000`, to find yours use `id <your_user>` as below:

```
$ id <your_user>
  uid=1000(jdoe) gid=1000(jdgroup) groups=1000(jdgroup)
```

## Increase memory limit

By default the `java` process will be limited in the maximum amount of memory (RAM) it can use, usually 1gb. If you encounter some `OutOfMemoryException` in the logs you probably need to increase the maximum memory Komga can use.

To do so, you can use the `JAVA_TOOL_OPTIONS=-Xmx<limit>` environment variable, where `<limit>` can be any amount like `2048m`, `4g` etc. For example to run Komga with a maximum of 4gb of memory:

```shell script
JAVA_TOOL_OPTIONS=-Xmx4g
```

## Support info

- Shell access whilst the container is running: `docker exec -it komga /bin/bash`
- To monitor the logs of the container in realtime: `docker logs -f komga`

## Updating

Below are the instructions for updating containers:

### Via Docker Run/Create

- Update the image: `docker pull gotson/komga`
- Stop the running container: `docker stop komga`
- Delete the container: `docker rm komga`
- Recreate a new container with the same docker create parameters as instructed above (if mapped correctly to a host folder, your `/config` folder and settings will be preserved)
- Start the new container: `docker start komga`
- You can also remove the old dangling images: `docker image prune`

### Via Docker Compose

- Update all images: `docker-compose pull`
  - or update a single image: `docker-compose pull komga`
- Let compose update all containers as necessary: `docker-compose up -d`
  - or update a single container: `docker-compose up -d komga`
- You can also remove the old dangling images: `docker image prune`

### Automatic updates

You can use tools like [Ouroboros](https://github.com/pyouroboros/ouroboros) or [Watchtower](https://github.com/containrrr/watchtower) to automatically update your containers.