# Run with Podman

## Registries

Container images are published on:
- [DockerHub](https://hub.docker.com/r/gotson/komga)
- [ghcr.io](https://github.com/gotson/komga/pkgs/container/komga)

## Version tags

This image provides various versions that are available via tags.


|     **Tag**      | **Description**                                              |
|:----------------:|--------------------------------------------------------------|
|     `latest`     | latest commit                                                |
|    `MAJOR.x`     | latest `MAJOR` version, for example `0.x`                    |
|     `x.y.z`      | version `x.y.z`                                              |

## Usage

Here are some example snippets to help you get started creating a container.

### podman quadlet

Create the following podman quadlet files
####
```
[Unit]
```

## Parameters

Container images are configured using parameters passed at runtime (such as those above).
These parameters are separated by a colon and indicate `external:internal` respectively.
For example, `-p 8080:80` would expose port `80` from inside the container to be accessible from the host's IP on port `8080` outside the container.

|                         Parameter                         | Function                                                                                                                                         |
|:---------------------------------------------------------:|--------------------------------------------------------------------------------------------------------------------------------------------------|
|                  `-p 25600:25600`                         | The port for the Komga APIs and web interface                                                                                                    |
| `--mount type=bind,source=/path/to/config,target=/config` | Database and Komga configurations                                                                                                                |
|   `--mount type=bind,source=/path/to/data,target=/data`   | Location of your data directory on disk. Choose a folder that contains both your books and your preferred import location for hardlinks to work. |
|                    `-e ENV_VAR=value`                     | Any [configuration](/installation/configuration.md) environment variable                                                                         |

## Increase memory limit

By default the `java` process will be limited in the maximum amount of memory (RAM) it can use, usually 1gb. If you encounter some `OutOfMemoryException` in the logs you probably need to increase the maximum memory Komga can use.

To do so, you can use the `JAVA_TOOL_OPTIONS=-Xmx<limit>` environment variable, where `<limit>` can be any amount like `2048m`, `4g` etc. For example to run Komga with a maximum of 4gb of memory:

```shell script
JAVA_TOOL_OPTIONS=-Xmx4g
```

## Support info

- Shell access whilst the container is running: `podman exec -it komga /bin/bash`
- To monitor the logs of the container in realtime: `podman logs -f komga`

## Updating

Below are the instructions for updating containers:

### Via podman auto-update
- Add `AutoUpdate=registry` under the `[Container]` section of the quadlet file if using them.
- Use the `latest` tag for the image.

### Automatic Updates
Podman provides a systemd service and timer for `podman auto-update`. Simply enable the systemd timer with `systemctl enable podman-auto-update.timer`. By default the timer will auto-update the containers daily at midnight, you can customize this by running `systemctl edit podman-auto-update.timer` and adding an override for the OnCalendar value. See https://www.freedesktop.org/software/systemd/man/latest/systemd.time.html# for the format of OnCalendar value.  
