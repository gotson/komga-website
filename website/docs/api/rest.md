# REST API

Komga offers a REST API, which you can browse using Swagger. It's available at `/swagger-ui.html`.

The OpenAPI specification is also available [here](https://github.com/gotson/komga/blob/master/komga/docs/openapi.json).

## Authenticating

Most endpoints require authentication. Authentication is done using **Basic Authentication** and can be set on any endpoint.

## Sessions

Upon successful authentication, a session is created, and can be reused.

- By default, a `SESSION` cookie is set via `Set-Cookie` response header. This works well for browsers and clients that can handle cookies.
- If you specify a header `X-Auth-Token` during authentication, the session ID will be returned via this same header. You can then pass that header again for subsequent requests to reuse the session.

If you need to set the session cookie later on, you can call `/api/v1/login/set-cookie` with `X-Auth-Token`. The response will contain the `Set-Cookie` header.

## Remember Me

During authentication, if a request parameter `remember-me` is passed and set to `true`, the server will also return a `remember-me` cookie. This cookie will be used to login automatically even if the session has expired.

## Logout

You can explicitely logout an existing session by calling `/api/logout`. This would return a `204`.