# Create user accounts

## Automatic mode (default)

::: tip Tip
If you can't easily have access to the logs then you can use the **Claim server mode** instead.
:::

At startup, if no user account exists in database, Komga will generate an initial administrator account with a random password, and will output the login and password in the logs:

```
2019-10-15 17:15:31.483  INFO 18808 --- [  restartedMain] o.g.k.i.scheduler.InitialUserController  : Initial user created. Login: admin@example.org, Password: 2Qf8l85xOB8o
```

::: warning Warning
It is strongly advised to create your own account, and delete the generated account.
:::

## Claim server mode <Badge text="0.18.0+" />

### Configure

This mode needs to be enable via a `claim` [application profile](/configuration/#spring-profiles-active-spring-profiles-active-prod):

Either in your `application.yml`:
```yaml
spring.profiles.active: claim
```

Or via environment variables:
```
SPRING_PROFILES_ACTIVE=claim
```

Or via command line argument:
```shell script
java -jar komga.jar --spring.profiles.active=claim
```

### Create the initial user

1. Once the application is running, open `http://<your-server>:<port>/swagger-ui.html` and click on **claim-controller**:

![claim-1](/assets/media/claim-1.png)

2. Then click on the **Try Out** button:

![claim-2](/assets/media/claim-2.png)

3. Input your desired **email** and **password** in the corresponding fields, and click on the **Execute** button:

![claim-3](/assets/media/claim-3.png)

4. If everything goes well, you should see a **200** response code, and a JSON object describing the created user (omitting the password):

![claim-4](/assets/media/claim-4.png)

5. You can now navigate to `http://<your-server>:<port>` and use the email/password you provided to login. Enjoy Komga!