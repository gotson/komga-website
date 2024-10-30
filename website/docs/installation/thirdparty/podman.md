# Run with Podman

:::warning
This method is not officially supported.
:::

## Usage

Here are some example snippets to help you get started creating a container.

Refer to [Run with Docker](../docker.md#registries) for information about images and version tags.

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
:::info
These quadlet files were tested with podman version 4.5.3
:::
- Create the following quadlet file `~/.config/containers/systemd/komga.container`:

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
    # %h is for user home directory.
    # see https://man.archlinux.org/man/systemd.unit.5.en#SPECIFIERS for more info about this.
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

- Run `systemctl --user daemon-reload` to generate the systemd service from the quadlet file.
- Run `systemctl --user start komga.service` to start the container.
- Make sure to create the folders under the Volumes section of the quadlet file before starting the container.

### podman quadlet files for using komf

:::info
These quadlet files were tested with podman version 4.5.3
:::

- Create the following quadlet files in `~/.config/containers/systemd/komga`

  - `komga.pod`

    ```
    [Pod]
    # Komga
    PublishPort=25600:25600
    # Komf
    PublishPort=8085:8085
    
    [Install]
    # Start the pod on boot
    WantedBy=multi-user.target default.target
    ```

  - `komga.container`

    ```
    [Unit]
    Description=Media server for comics/mangas/BDs/magazines/eBooks with API, OPDS and Kobo Sync support
    
    [Container]
    ## General
    AutoUpdate=registry
    Image=docker.io/gotson/komga:latest
    Pod=komga.pod
    
    ## Volumes
    # %h is for user home directory.
    # see https://man.archlinux.org/man/systemd.unit.5.en#SPECIFIERS for more info about this.
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

  - `komf.container`

    Create a podman secret called `komga_password` for the komga admin password. Check [the official Podman documentation](https://docs.podman.io/en/latest/markdown/podman-secret-create.1.html) for more details on how to create a podman secret.

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
    # %h is for user home directory.
    # see https://man.archlinux.org/man/systemd.unit.5.en#SPECIFIERS for more info about this.
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

- Run `systemctl --user daemon-reload` to generate the systemd services from the quadlet files.
- Run `systemctl --user start komga-pod.service` to start the pod.
- Make sure to create the folders under the Volumes section of the quadlet files before starting the pod.

## Parameters

Refer to [Run with Docker](../docker.md#parameters) for information about parameters and lemory limit.

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

- Follow the instructions on the previous section to configure `podman auto-update`
- Enable the systemd timer: `systemctl --user enable podman-auto-update.timer`
- By default the timer will update the containers daily at midnight. You can customize the timer by running `systemctl --user edit podman-auto-update.timer`
- Check [this page](https://man.archlinux.org/man/core/systemd/systemd.timer.5.en) for more info about systemd timers.

Example systemd timer override for weekly updates:
```
[Timer]
OnCalendar=weekly
```
