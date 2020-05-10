# Jar

:::tip Tip
Since `v0.20.0` it's not required anymore to have an `application.yml` for Komga to run properly.
:::

:::warning Note
You need Java version 8+ (or 1.8+) to run Komga. Check your version with `java -version`.
:::

You can run Komga from the fat `jar` file. You can download them in the [releases](https://github.com/gotson/komga/releases) section.

In order to run Komga, use the following command:

```shell script
java -jar komga-x.y.z.jar
```

Once Komga is started, you can access the [web interface](/installation/webui).

## Increase memory limit

By default the `java` process will be limited in the maximum amount of memory (RAM) it can use, usually 1gb. If you encounter some `OutOfMemoryException` in the logs you probably need to increase the maximum memory Komga can use.

To do so, you can use the `-Xmx<limit>` command line flag, where `<limit>` can be any amount like `2048m`, `4g` etc. For example to run Komga with a maximum of 4gb of memory:

```shell script
java -jar -Xmx4g komga-x.y.z.jar
```

## Updating

To update just stop Komga, then start it with the latest `jar`.