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

Defaults to:
- `%LOCALAPPDATA%/Komga` on the _Windows app_. That folder is virtualized by Windows. 
- `~/Library/Application Support/Komga` on the macOS app. 
- `~/.komga` otherwise.

`~` is your home directory on Unix, and your User profile on Windows.

_When overriding this configuration, you need to use `${user.home}` instead of `~` (this is a specific Spring Boot variable)._

#### SERVER_PORT / server.port: `<port>`

Port to listen to for the API and web interface.

Can also be configured from the [Server Settings](../guides/server-settings.md#server-port).

Defaults to `25600`.

#### SERVER_SERVLET_CONTEXT_PATH / server.servlet.context-path: `<baseUrl>`

Base URL, useful if you need to reverse proxy with a subfolder.

Can also be configured from the [Server Settings](../guides/server-settings.md#base-url).

Defaults to `/`.

#### SERVER_SERVLET_SESSION_TIMEOUT / server.servlet.session.timeout: `<duration>`

The duration after which an inactive session will expire. You can specify the timeunit, for example `14d` for 14 days, or `24h` for 24 hours. If no unit is set, seconds will be used.

Defaults to 30 minutes.

#### ~~KOMGA_LIBRARIES_SCAN_CRON / komga.libraries-scan-cron: `<cron>`~~

This has been moved to [Library options: scan interval](/guides/libraries.md#scan-interval).

#### ~~KOMGA_LIBRARIES_SCAN_STARTUP / komga.libraries-scan-startup: `<true/false>`~~

This has been moved to [Library options: scan on startup](/guides/libraries.md#scan-on-startup).

#### ~~KOMGA_LIBRARIES_SCAN_DIRECTORY_EXCLUSIONS / komga.libraries-scan-directory-exclusions: `<exclusions>`~~

This has been moved to [Library options: directory exclusions](/guides/libraries.md#directory-exclusions).

#### ~~KOMGA_REMEMBERME_KEY / komga.remember-me.key: `<key>`~~

This has been moved to Server Settings.

#### ~~KOMGA_REMEMBERME_VALIDITY / komga.remember-me.validity: `<duration>`~~

This has been moved to Server Settings.

#### ~~KOMGA_SESSIONTIMEOUT / komga.session-timeout: `<duration>`~~

This has been replaced by `server.servlet.session.timeout`.

#### KOMGA_DATABASE_FILE / komga.database.file: `<file path>`

File path for the SQLite database.

If you want to change the directory, it is advised to change `komga.config-dir` instead.

Defaults to:
- `/config/database.sqlite` for _Docker_.
- `\${komga.config-dir}/database.sqlite` otherwise.

#### KOMGA_CORS_ALLOWED_ORIGINS / komga.cors.allowed-origins: `<origins>`

A list of origins to allow for CORS.

Defaults to empty list.

#### ~~KOMGA_DELETE_EMPTY_COLLECTIONS / komga.delete-empty-collections: `<true/false>`~~

This has been moved to Server Settings.

#### ~~KOMGA_DELETE_EMPTY_READ_LISTS / komga.delete-empty-read-lists: `<true/false>`~~

This has been moved to Server Settings.

#### KOMGA_OAUTH2_ACCOUNT_CREATION / komga.oauth2-account-creation: `<true/false>`

A boolean indicating whether Komga should create new users when a login via OAuth2/OIDC succeeds, but there is no existing user with that email.

Such users will be created with a random password, which the user can subsequently change from the _Account Settings_ page later on, for example to be able to connect using OPDS or Tachiyomi.

:::warning
It is recommended to enable this only with OAuth2 providers you control
:::

Defaults to `false`.

#### KOMGA_OIDC_EMAIL_VERIFICATION / komga.oidc-email-verification: `<true/false>`

A boolean indicating whether Komga should check whether the `email_verified` claim is present and true in the OpenID Connect request.

:::warning
It is recommended to disable this only with OIDC providers that do not verify emails (like Azure AD)
:::

Defaults to `true`.

#### LOGGING_FILE_NAME / logging.file.name: `<logfile name>`

Name of the log file.

If you want to change the directory, it is advised to change `komga.config-dir` instead.

Defaults to:
- `~/Library/Logs/Komga/komga.log` for the _macOS app_.
- `/config/logs/komga.log` for _Docker_.
- `\${komga.config-dir}/komga.log` otherwise.

`~` is your home directory on Unix, and your User profile on Windows.

_When overriding this configuration, you need to use `${user.home}` instead of `~` (this is a specific Spring Boot variable)._

#### ~~KOMGA_TASKCONSUMERS / komga.task-consumers: `<int>`~~

This has been removed.

#### ~~KOMGA_TASKCONSUMERSMAX / komga.task-consumers-max: `<int>`~~

This has been removed.

## Sample Configuration File

Here is a sample `application.yml` file in case you need to customize it. Keep only the lines you need.

```yaml
# Only keep lines that are relevant to you!
# Lines starting with # are comments
# Make sure indentation is correct (2 spaces at every indentation level), yaml is very sensitive!
komga:
  database:
    file: ${user.home}/.komga/database.sqlite
  cors.allowed-origins:
    - http://localhost:8081
    - http://localhost:8082
  delete-empty-collections: true
  delete-empty-read-lists: true
server:
  port: 25600
  servlet:
    session.timeout: 7d # session timeout, here 7 days
    context-path: /komga
```

## Database performance

:::warning
Use at your own risk!

:::

Some specific configuration keys are available to tweak the database performance.

```yaml
komga:
  database:
    # sets the retry timeout when SQLITE_BUSY error happens
    busy-timeout: 30s
    
    # changes the journal mode
    # accepted values are: DELETE, TRUNCATE, PERSIST, MEMORY, WAL, OFF
    # most likely to be set to wal if needed, check https://sqlite.org/wal.html for more details
    journal-mode: wal
    
    # pool size will determine the number of connections in the pool
    # this takes precedence over max-pool-size if set
    # defaults to undefined
    pool-size: 1
    
    # max-pool-size will determine the maximum number of connections in the pool
    # when set, the number of connections is set to the number of available processors capped at max-pool-size
    # defaults to 1
    max-pool-size: 8
    
    # pragmas accepts a list of key/value pairs where:
    # - key is the pragma name (see https://www.sqlite.org/pragma.html)
    # - value is the pragma value
    pragmas:
      # here are some example pragmas
      page_size: 1024
      synchronous: OFF
```
