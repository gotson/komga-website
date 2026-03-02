# Securing Komga with fail2ban

Komga authentication can be secured with a classic fail2ban jail. This jail will match each failed login attempt, resulting in IP blocking.

## Log configuration

To be able to identify failed login attempts, Komga needs to log them in the `komga.log` logfile.

**1. Enable DEBUG log level**  
Follow [this guide](/docs/faq/#how-to-enable-debug-or-trace-logs) to activate the DEBUG log level.

**2. Locate the log file path**  
You can find [here](/docs/faq/#where-can-i-find-the-log-files) the default path for your OS or configure the path yourself with this sample `application.yml`:
```yaml
logging:
  file:
    name: /var/log/komga.log
  level:
    org.gotson.komga: DEBUG
```
> [!TIP]
> If you made changes in the conf, restart Komga.  

## Jail configuration in fail2ban

**1. Filter creation**  
First, create a filter file to match failed login attempts using regex.

Create a `/etc/fail2ban/filter.d/komga.conf` file with the following configuration: 
```
[Definition]

failregex = ^.* ip=<HOST>,.*Bad credentials.*$
ignoreregex =
```

**2. Jail creation**  
Next, create a jail that uses the filter created above.

In your fail2ban conf file (probably `/etc/fail2ban/fail2ban.local`), add the following configuration:
```
[komga]
enabled = true
port = https
filter = komga
logpath = /var/log/komga.log
```
Note that `logpath` must match the log file path we set up at the start of this guide.

Finally, reload fail2ban to apply the changes.
