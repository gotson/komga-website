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

### podman
Create the container:
```
podman create \
  --name=komga \
  -p 25600:25600 \
  --mount type=bind,source=/path/to/config,target=/config \
  --mount type=bind,source=/path/to/data,target=/data \
  docker.io/gotson/komga:latest
```
Start the container:
```
podman start komga
```
### podman quadlet file

> These quadlet files were tested with podman version 4.5.3

Create the following quadlet file at `~/.config/containers/systemd`

#### komga.container
```
[Unit]
Description=Media server for comics/mangas/BDs/magazines/eBooks with API, OPDS and Kobo Sync support

[Container]
## General
AutoUpdate=registry
Image=docker.io/gotson/komga:latest

## Network
PublishPort=25600:25600

## Volumes
# %h is for user home directory
Volume=%h/path/to/config:/config
Volume=%h/path/to/data:/data

## Environment Variables
Environment=<ENV_VAR>=<extra configuration>

[Service]
# Add 143 exit code to prevent the systemd service entering a failed state when stopping it
SuccessExitStatus=0 143
# Extend Timeout to allow time to pull the image
TimeoutStartSec=900

[Install]
# Start komga on boot
WantedBy=multi-user.target default.target
```
Start the container: `systemctl --user start komga.service`

### podman quadlet files for using komf

> These quadlet files were tested with podman version 4.5.3

Create the following quadlet files at `~/.config/containers/systemd/komga`

#### komga.pod

```
[Pod]
# Komga
PublishPort=25600
# Komf
PublishPort=8085:8085

[Install]
# Start the pod on boot
WantedBy=multi-user.target default.target
```

#### komga.container

```
[Unit]
Description=Media server for comics/mangas/BDs/magazines/eBooks with API, OPDS and Kobo Sync support

[Container]
## General
AutoUpdate=registry
Image=docker.io/gotson/komga:latest
Pod=komga.pod

## Volumes
# %h is for user home directory
Volume=%h/path/to/config:/config
Volume=%h/path/to/data:/data

## Environment Variables
Environment=<ENV_VAR>=<extra configuration>

[Service]
# Add 143 exit code to prevent the systemd service entering a failed state when stopping it
SuccessExitStatus=0 143
# Extend Timeout to allow time to pull the image
TimeoutStartSec=900
```

#### komf.container

Create a podman secret called `komga_password` for the komga admin password. See [this page](https://docs.podman.io/en/latest/markdown/podman-secret-create.1.html) for info on how to create a podman secret.

```
[Unit]
Description=Komga and Kavita metadata fetcher
After=komga.service

[Container]
## General
AutoUpdate=registry
Image=docker.io/sndxr/komf:latest
Pod=komga.pod

## Volumes
# %h is for user home directory
Volume=%h/path/to/config:/config

## Environment Variables
Environment="KOMF_KOMGA_BASE_URI=http://localhost:25600"
Environment="KOMF_KOMGA_USER=admin@example.com"
Environment="JAVA_TOOL_OPTIONS=-XX:+UnlockExperimentalVMOptions -XX:+UseShenandoahGC -XX:ShenandoahGCHeuristics=compact -XX:ShenandoahGuaranteedGCInterval=3600000 -XX:TrimNativeHeapInterval=3600000"
Secret=komga_password,type=env,target=KOMF_KOMGA_PASSWORD

[Service]
# Add 143 exit code to prevent the systemd service entering a failed state when stopping it
SuccessExitStatus=0 143
# Extend Timeout to allow time to pull the image
TimeoutStartSec=900
```
Start the pod: `systemctl --user start komga-pod.service`

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

- Add `AutoUpdate=registry` under the `[Container]` section of the quadlet file.
- Use any tag for the image that isn't version specific like the `latest` tag.
- Check if a new image is available: `podman auto-update --dry-run`
- Update containers: `podman auto-update`

### Automatic updates

- Follow the above instructions to configure `podman auto-update`
- Enable the systemd timer: `systemctl enable podman-auto-update.timer`
- By default the timer will update the containers daily at midnight. You can customize the timer by running `systemctl edit podman-auto-update.timer`
- See [this page](https://man.archlinux.org/man/core/systemd/systemd.timer.5.en) for more info about systemd timers.

Example systemd timer override for weekly updates:
```
[Timer]
OnCalendar=weekly
```
