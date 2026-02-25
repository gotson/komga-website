# Server settings & management

The _Server Settings > Server_ screen allows for more configuration of your server.

## Server Settings

This section allows to configure some server-wide options.

<img src="/assets/media/guides/server-settings/server-settings.png" style={{maxHeight: '600px'}} alt="Server Settings"/>

#### Delete empty collections after scan

Indicate whether Komga should delete empty collections after a scan.

#### Delete empty read lists after scan

Indicate whether Komga should delete empty read lists after a scan.

#### Task threads

The number of threads dedicated to the processing of background tasks.

#### Remember Me duration

The duration (in days) of the remember-me cookie that will be saved in the browser, if the Remember Me checkbox is ticked upon login.

#### Regenerate the RememberMe key

The RememberMe feature works with a secret key. If you want to invalidate all the remember-me cookies that have been issued, you can regenerate the key.

#### Server Port {#server-port}

Port to listen to for the API and web interface.

This takes precedence over the `server.port` configuration key.

#### Base URL {#base-url}

Base URL, useful if you need to reverse proxy with a subfolder.

This takes precedence over the `server.servlet.context-path` configuration key.


## Server Management

This sections allows some administrative actions for your server.

<img src="/assets/media/guides/server-settings/server-management.png" style={{maxHeight: '300px'}} alt="Server Management"/>
