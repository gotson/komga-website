# Configuration options

:::tip
Komga has sensible default values for all configuration keys. You only need to configure it if you want to change the default behaviour.

The `application.yml` file does not exist by default, you need to create one if you want to customize the configuration.

:::

Komga relies heavily on [Spring Boot's configuration](https://docs.spring.io/spring-boot/docs/current/reference/html/boot-features-external-config.html), leveraging `profiles` and configuration `properties`.

The easiest way to configure is either via environment variables (a good fit for `docker` and `docker-compose`) or by using an `application.yml` file located in the configuration directory:

- The Docker image will load any `application.yml` file located in the `/config` mounted folder.
- The Jar will load any `application.yml` file located in the `komga.config-dir` directory (defaults to `~/.komga`, [more details](#komga-configdir-komga-config-dir-directory)).

Each configuration key can have a different format depending if it's from the environment variable, or from the `application.yml` file. In the following section I will provide both format in the form `ENVIRONMENT_VARIABLE` / `application-property`.

You can also specify configuration via the command line, when launching the `jar`. Use the `application-property` form, and prefix with `--`. For example:

```shell
java -jar komga.jar --server.servlet.context-path="/komga" --server.port=8443
```

## Optional configuration

You can use some optional configuration keys:

#### KOMGA_CONFIGDIR / komga.config-dir: `<directory>`

The Komga configuration directory. Will be used to store the logs, database, and any other file Komga needs.

Defaults to `~/.komga`. `~` is your home directory on Unix, and your User profile on Windows.

_When overriding this configuration, you need to use `${user.home}` instead of `~` (this is a specific Spring Boot variable)._

#### SERVER_PORT / server.port: `<port>`

Port to listen to for the API and web interface.

Defaults to `8080`.

#### SERVER_SERVLET_CONTEXT_PATH / server.servlet.context-path: `<baseUrl>`

Base URL, useful if you need to reverse proxy with a subfolder.

Defaults to `/`.

#### KOMGA_LIBRARIES_SCAN_CRON / komga.libraries-scan-cron: `<cron>`

A [Spring cron expression](https://docs.spring.io/spring/docs/current/javadoc-api/org/springframework/scheduling/support/CronSequenceGenerator.html) for libraries periodic scans.
For example `0 0 * * * ?` will rescan every hour. `0 */15 * * * ?` will rescan every 15 minutes.

To disable the periodic scan, set the value to `-`.

Defaults to `0 0 */8 * * ?` (every 8 hours).

#### KOMGA_LIBRARIES_SCAN_STARTUP / komga.libraries-scan-startup: `<true/false>`

A boolean indicating if Komga should scan your libraries at startup.

Defaults to `false`.

#### KOMGA_LIBRARIES_SCAN_DIRECTORY_EXCLUSIONS / komga.libraries-scan-directory-exclusions: `<exclusions>`

A list of patterns to exclude directories from the scan. If the full path contains any of the patterns, the directory will be ignored. If using the environment variable you need to use a comma-separated list.

Defaults to `#recycle,@eaDir,@Recycle`.

#### KOMGA_REMEMBERME_KEY / komga.remember-me.key: `<key>`

If set, the remember-me auto-login feature will be activated, and will generate a cookie with encoded login information to perform auto-login. Set `<key>` to any random string.

Not set by default, you need to set it to enable this feature.

#### KOMGA_REMEMBERME_VALIDITY / komga.remember-me.validity: `<duration>`

The validity of the generated remember-me cookie. You can specify the timeunit, for example `14d` for 14 days, or `24h` for 24 hours. If no unit is set, seconds will be used.

Defaults to 2 weeks.

#### KOMGA_SESSIONTIMEOUT / komga.session-timeout: `<duration>`

The duration after which an inactive session will expire. You can specify the timeunit, for example `14d` for 14 days, or `24h` for 24 hours. If no unit is set, seconds will be used.

Defaults to 7 days.

#### KOMGA_DATABASE_FILE / komga.database.file: `<file path>`

File path for the SQLite database.

If you want to change the directory, it is advised to change `komga.config-dir` instead.

Defaults to:
- `\${komga.config-dir}/database.sqlite` for _Jar_.
- `/config/database.sqlite` for _Docker_.

#### KOMGA_NATIVE_WEBP / komga.native-webp: `<true/false>`

Enable or disable the native WebP library. You can use this flag if the native library is not compatible with your system and crashes Komga at startup.

Defaults to: `true`

#### KOMGA_CORS_ALLOWED_ORIGINS / komga.cors.allowed-origins: `<origins>`

A list of origins to allow for CORS.

Defaults to empty list.

#### KOMGA_DELETE_EMPTY_COLLECTIONS / komga.delete-empty-collections: `<true/false>`

A boolean indicating if Komga should delete empty collections after a scan.

Defaults to `true`.

#### KOMGA_DELETE_EMPTY_READ_LISTS / komga.delete-empty-read-lists: `<true/false>`

A boolean indicating if Komga should delete empty read lists after a scan.

Defaults to `true`.

#### KOMGA_FILE_HASHING / komga.file-hashing: `<true/false>` <Badge text="removed since 0.143.0" type="warning" />

This has been moved to [Library options](/guides/libraries.md#compute-hash-for-files).

#### KOMGA_OAUTH2_ACCOUNT_CREATION / komga.oauth2-account-creation: `<true/false>`

A boolean indicating whether Komga should create new users when a login via OAuth2/OIDC succeeds, but there is no existing user with that email.

Such users will be created with a random password, which the user can subsequently change from the _Account Settings_ page later on, for example to be able to connect using OPDS or Tachiyomi.

:::warning
It is recommended to enable this only with OAuth2 providers you control
:::

Defaults to `false`.

#### LOGGING_FILE_NAME / logging.file.name: `<logfile name>`

Name of the log file.

If you want to change the directory, it is advised to change `komga.config-dir` instead.

Defaults to:
- `\${komga.config-dir}/komga.log` for _Jar_.
- `/config/logs/komga.log` for _Docker_.

_When overriding this configuration, you need to use `${user.home}` instead of `~` (this is a specific Spring Boot variable)._

#### KOMGA_TASKCONSUMERS / komga.task-consumers: `<int>`

The initial number of thread that will consume tasks. Must be positive and lower or equal to `komga.task-consumers-max`.

Defaults to `1`.

#### KOMGA_TASKCONSUMERSMAX / komga.task-consumers-max: `<int>`

The maximum number of thread that will consume tasks. Must be positive and greater or equal to `komga.task-consumers`.

Defaults to `1`.

## Sample Configuration File

Here is a sample `application.yml` file in case you need to customize it. Keep only the lines you need.

```yaml
# Only keep lines that are relevant to you!
# Lines starting with # are comments
# Make sure indentation is correct (2 spaces at every indentation level), yaml is very sensitive!
komga:
  libraries-scan-cron: "0 0 */8 * * ?"  # periodic scan every 8 hours
  libraries-scan-cron: "-"              # disable periodic scan
  libraries-scan-startup: false         # scan libraries at startup
  libraries-scan-directory-exclusions:  # patterns to exclude directories from the scan
    - "#recycle" # synology NAS recycle bin
    - "@eaDir"   # synology NAS index/metadata folders
    - "@Recycle" # QNAP NAS recycle bin
  remember-me:
    key: changeMe!    # required to activate the remember-me auto-login via cookies
    validity: 30d     # validity of the cookie in seconds, here 30 days
  session-timeout: 7d # session timeout, here 7 days
  database:
    file: ${user.home}/.komga/database.sqlite
  native-webp: true
  cors.allowed-origins:
    - http://localhost:8081
    - http://localhost:8082
  delete-empty-collections: true
  delete-empty-read-lists: true
server:
  port: 8080
  servlet.context-path: /komga
```

## HTTPS

If you want to open your Komga server outside your local network, it is strongly advised to secure it with `https` (especially due to the use of http basic authentication).

Spring Boot supports `https` out of the box, but you will have to configure it, and `https` is most useful only with valid certificates (not self-signed), which most people don't readily have available.

I recommend using [Caddy](https://caddyserver.com/) as a reverse proxy, as it supports the automatic generation of [Let's Encrypt](https://letsencrypt.org/) certificates.

## Reverse proxy

Here are some sample configuration on how to configure reverse proxy for Komga.

### Caddy (v1)

Without a base URL configured in Komga, using a subdomain:

```
komga.yourdomain.com {
  proxy / http://your-komga-server:8080 {
    transparent
  }
}
```

With a base URL configured in Komga:

```
yourdomain.com {
  proxy /komga http://your-komga-server:8080 {
    transparent
  }
}
```

### Caddy (v2)

Without a base URL configured in Komga, using a subdomain:

```
komga.yourdomain.com {
  reverse_proxy http://your-komga-server:8080
}
```

With a base URL configured in Komga:

```
yourdomain.com {
  reverse_proxy /komga/* http://your-komga-server:8080
}
```
