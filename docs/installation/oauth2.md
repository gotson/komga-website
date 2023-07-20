# Social login

Komga supports social login via **OAuth2** and **OpenID Connect**. In order for this to work, Komga needs to retrieve the user's email address via your provider, and will match it with the email of the Komga users.

In order to setup social login, you will need to create an application in the developer portal of the social login provider of your choice (Google, Facebook, Github…), and retrieve a _Client ID_ and _Client Secret_. You will also need to configure a _Redirect URI_ in the application you created.

You can enable automatic account creation upon successful social login, see [here](/installation/configuration.md#komga-oauth2-account-creation-komga-oauth2-account-creation-true-false) for more details.

## Guide for common providers

You can easily configure Google, Github, and Facebook without any complex configuration.

### Google

Follow the instructions on the [OpenID Connect page](https://developers.google.com/identity/protocols/OpenIDConnect), starting in the section, "Setting up OAuth 2.0".

When asked for a "Redirect URI", use `{baseUrl}/login/oauth2/code/google`, where `baseUrl` is your server's address.

After completing the "Obtain OAuth 2.0 credentials" instructions, you should have a new OAuth Client with credentials consisting of a Client ID and a Client Secret.

Modify your `application.yml` as below and replace the values in the `client-id` and `client-secret` property with the OAuth 2.0 credentials you created earlier.

Sample configuration:
```yaml
spring:
  security:
    oauth2:
      client:
        registration:
          google:
            client-id: 1044613984fsf335-mnsdvkjy3yf98294unfmnvd8.apps.googleusercontent.com
            client-secret: jwhfkjhwefkn44t8vcxml3m
```

### Facebook

Follow the [instructions](https://developers.facebook.com/docs/development/register) to create an App, and add the Facebook Login product.

In the `Valid OAuth Redirect URIs`, use `{baseUrl}/login/oauth2/code/facebook`, where `baseUrl` is your server's address.

Modify your `application.yml` as below and replace the values in the `client-id` and `client-secret` property with the App ID and App Secret.

Sample configuration:
```yaml
spring:
  security:
    oauth2:
      client:
        registration:
          facebook:
            client-id: 227581266063919
            client-secret: 47f03915334f49cdueru810069321964929
```

### Github

Register a [new application](https://github.com/settings/applications/new).

For the "Authorization callback URL", use `{baseUrl}/login/oauth2/code/github`, where `baseUrl` is your server's address.

Generate a new Client Secret, you should now have a Client ID and Client Secret.

Modify your `application.yml` as below and replace the values in the `client-id` and `client-secret` property with the OAuth 2.0 credentials you created earlier.

Sample configuration:
```yaml
spring:
  security:
    oauth2:
      client:
        registration:
          github:
            client-id: 62736jnfksui37384hnmsdnf
            client-secret: jhjgfy67363uhif762328938844940e3e8c8629c18f9
            scope: user:email
```

## Advanced configuration

You can configure any OAuth2 provider, but you will need to provide a more extensive configuration. The below example shows how to configure a Keycloak instance, but any provider could be configured in a similar fashion.

Modify your `application.yml` as below and replace the values in the `client-id` and `client-secret` property with your credentials You will also need to update the various URIs in the `provider` section.

You need to make sure that the users have an email setup, and that it has been marked as verified.

When configuring the client in your provider, you may need to input a redirect URI. Use the following: `{baseUrl}/login/oauth2/code/{registrationId}`, where `baseUrl` is your server's address, and `registrationId` is the name of the configuration key (`keycloak` in the below example).

There are 2 options to configure a provider, either set `issuer-uri` or all of the following: `authorization-uri`, `token-uri`,
`jwk-set-uri`, `user-info-uri`. If your authentication server provides `issuer-uri`, this option is preferred.

The `registration` section contains a `provider` option, this must be the same name as specified in the
`provider` configuration. (In the example below, we've configured `provider` with name `keycloak`, so in the
`registration` section we set `provider: keycloak`). The name of the provider can be whatever you want, no need
to use the service's name if you don't want to.

Sample configuration:
```yaml
spring:
  security:
    oauth2:
      client:
        registration:
          keycloak:
            provider: keycloak # this must match the provider below
            client-id: your-client-id
            client-secret: c830e452-a2a9-40a0-93c1-eb84ea688245
            client-name: Keycloak
            scope: openid,email
            authorization-grant-type: authorization_code
            # the placeholders in {} will be replaced automatically, you don't need to change this line
            redirect-uri: "{baseUrl}/{action}/oauth2/code/{registrationId}"
        provider:
          keycloak: # this must match the provider above
            user-name-attribute: sub
            # either set the issuer-uri, in which case the app will lookup the configuration for you automatically
            issuer-uri: http://localhost:8085/auth/realms/komgatest
            # or set all of the following
            authorization-uri: http://localhost:8085/auth/realms/komgatest/protocol/openid-connect/auth
            token-uri: http://localhost:8085/auth/realms/komgatest/protocol/openid-connect/token
            jwk-set-uri: http://localhost:8085/auth/realms/komgatest/protocol/openid-connect/certs
            user-info-uri: http://localhost:8085/auth/realms/komgatest/protocol/openid-connect/userinfo
```