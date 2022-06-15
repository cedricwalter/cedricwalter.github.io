---

title: 'Embedded MongoDB provide a platform neutral way for running mongodb in Java unittests.'
date: '2021-01-28T21:25:58+01:00'
author: 'Cédric Walter'




    
header:
    teaser: /assets/images/2020/10/mongodb.png
tags:
    - HowTo
    - java
    - jdk11
    - junit
    - maven
---

# Java library
Thanks to this java library you can easily run integration test against a real mongo database. It is best to always mock your dependencies in true unit tests, but sometimes you need to test against the real thing.

- It will
    - download mongodb (and cache it)
    - extract it (and cache it)
    - java uses its process api to start and monitor the mongo process
    - you run your tests
    - java kills the mongo process

# Unit testing
How to use it in your unit tests

Add the dependencies to your project

```xml
<dependency>
    <groupId>de.flapdoodle.embed</groupId>
    <artifactId>de.flapdoodle.embed.mongo</artifactId>
    <version>2.2.0</version>
    <scope>test</scope>
</dependency>
```

# Java 
One way to ease the integration is to define your own annotation in MongoDbTest.java

```java
import org.junit.jupiter.api.extension.ExtendWith;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;
@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
@ExtendWith({
        MongoDbCallback.class
})
public @interface MongoDbTest {
}
```

And the following MongoDbCallback.java

```java
public class MongoDbCallback implements BeforeAllCallback {
    private static MongodExecutable mongo;
    @Override public void beforeAll(ExtensionContext context) throws Exception {
        if (MONGO != null) {
            System.out.println("MongoDB already up and running");
        } else {
            var version = Version.Main.V4_0;
            var port = 27000;
            var config = new MongodConfigBuilder()
                    .version(version)
                    .net(new Net(port, Network.localhostIsIPv6()))
                    .build();
            mongo = MongodStarter.getDefaultInstance().prepare(config);
            mongo.start();
            System.out.println("Mongo started {} on port {}", version, port);
        }
    }
}
```

You can now annotate your integration test with @MongoDbTest and use the mongoClient connected to localhost:27000

### Other ways to use Embedded MongoDB

- in a Maven build using [maven-mongodb-plugin](https://github.com/Syncleus/maven-mongodb-plugin) or [embedmongo-maven-plugin](https://github.com/joelittlejohn/embedmongo-maven-plugin)
- in a Clojure/Leiningen project using [lein-embongo](https://github.com/joelittlejohn/lein-embongo)
- in a Gradle build using [gradle-mongo-plugin](https://github.com/sourcemuse/GradleMongoPlugin)
- in a Scala/specs2 specification using [specs2-embedmongo](https://github.com/athieriot/specs2-embedmongo)
- in Scala tests using [scalatest-embedmongo](https://github.com/SimplyScala/scalatest-embedmongo)