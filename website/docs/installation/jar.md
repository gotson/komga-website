# Run with the Jar file

:::tip
You need Java version 17+ to run Komga. Check your version with `java -version`.
:::

You can run Komga from the fat `jar` file. You can download them in the [releases](https://github.com/gotson/komga/releases) section.

In order to run Komga, use the following command (replace `x.y.z` with the actual version number):

```shell script
java -jar komga-x.y.z.jar
```

Once Komga is started, you can access the [web interface](/guides/webui.md).

:::tip
On Windows, use `javaw` instead of `java` to launch Komga _without_ a command prompt window appearing.
:::

## Increase memory limit {#increase-memory-limit}

By default the `java` process will be limited in the maximum amount of memory (RAM) it can use, usually 1gb. If you encounter some `OutOfMemoryException` in the logs you probably need to increase the maximum memory Komga can use.

To do so, you can use the `-Xmx<limit>` command line flag, where `<limit>` can be any amount like `2048m`, `4g` etc. For example to run Komga with a maximum of 4gb of memory:

```shell script
java -jar -Xmx4g komga-x.y.z.jar
```

## Updating

To update just stop Komga, then start it with the latest `jar`.