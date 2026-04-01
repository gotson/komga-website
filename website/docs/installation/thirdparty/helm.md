# Run on Kubernetes with Helm

:::warning
This method is not officially supported.
:::

A community-maintained Helm chart for Komga is available from [HelmForge](https://github.com/helmforgedev/charts/tree/main/charts/komga).

The chart is maintained outside of the Komga project. Issues and feature requests for the chart should be reported to the [HelmForge charts repository](https://github.com/helmforgedev/charts).

## Install

### From the Helm repository

```bash
helm repo add helmforge https://repo.helmforge.dev
helm repo update
helm install komga helmforge/komga
```

### Via OCI

```bash
helm install komga oci://ghcr.io/helmforgedev/helm/komga
```

## Features

- Persistent storage for Komga configuration and library data
- Ingress, probes, security contexts, and service configuration
- Komga-specific values for server and logging configuration
- Optional S3-compatible backup support

## Links

- [HelmForge Komga chart source](https://github.com/helmforgedev/charts/tree/main/charts/komga)
- [HelmForge Komga chart on ArtifactHub](https://artifacthub.io/packages/helm/helmforge/komga)
