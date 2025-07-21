# Command Line Interface

Komga offers a few commands available from the command line.

## How to use?

You just need to append the command to the command line. Note that Komga will still start and run as usual.

### With the `jar` file

Example:

```shell
java -jar komga-x.y.z.jar --list-users
```

### With docker run

Example:
```shell
docker run ghcr.io/gotson/komga:latest --list-users
```

### With docker compose

You can override the `command`:

```yaml
services:
  komga:
    image: gotson/komga:latest
    command: --newpassword=toto --reset=admin@example.org
```

## Available commands
### List users

Command: `--list-users`

This will output all the users configured in the database. The output will be shown in the console or the logs.

Example:

`2023-08-02T13:41:45.215+08:00  INFO 1979 --- [           main] o.g.k.i.apprunner.ListUsersRunner        : Here is a list of all users: [admin@example.org, jacky@example.org]`

### Reset password for a user

Command: `--reset=user@domain.com --newpassword=YourNewPassword`

This will reset the password for the specified user.

Example:

`2023-08-02T13:50:42.998+08:00  INFO 2806 --- [           main] o.g.k.i.apprunner.PasswordResetRunner    : Reset password for user: admin@example.org`