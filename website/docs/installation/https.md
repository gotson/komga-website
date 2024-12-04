# Expose your server

## HTTPS

If you want to open your Komga server outside your local network, it is strongly advised to secure it with `https` (especially due to the use of http basic authentication).

Spring Boot supports `https` out of the box, but you will have to configure it, and `https` is most useful only with valid certificates (not self-signed), which most people don't readily have available.

I recommend using [Caddy](https://caddyserver.com/) as a reverse proxy, as it supports the automatic generation of [Let's Encrypt](https://letsencrypt.org/) certificates.

## Reverse proxy

Here are some sample configuration on how to configure reverse proxy for Komga.

### Caddy

Without a base URL configured in Komga, using a subdomain:

```
komga.yourdomain.com {
  reverse_proxy http://your-komga-server:25600
}
```

With a base URL configured in Komga:

```
yourdomain.com {
  reverse_proxy /komga/* http://your-komga-server:25600
}
```
