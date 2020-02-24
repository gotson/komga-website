### User accounts

At startup, if no user account exists in database, Komga will generate an initial administrator account with a random password, and will output the login and password in the logs:

```
2019-10-15 17:15:31.483  INFO 18808 --- [  restartedMain] o.g.k.i.scheduler.InitialUserController  : Initial user created. Login: admin@example.org, Password: 2Qf8l85xOB8o
```

::: warning Warning
It is strongly advised to create your own account, and delete the generated account.
:::