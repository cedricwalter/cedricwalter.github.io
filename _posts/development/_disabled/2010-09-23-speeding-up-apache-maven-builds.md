---

title: 'Speeding up Apache Maven Builds'
date: '2010-09-23T19:59:46+02:00'
author: 'Cédric Walter'



header:
  teaser: /assets/images/2011/11/maven-logo-black-on-white-1.png
tags:
    - apache
    - building
    - carefully
    - check
    - ci/cd
    - code
    - configurable
    - configuration
    - core
    - cpu
    - create
    - created
    - custom
    - faster
    - HowTo
    - java
    - maven
    - tutorial
---

The obvious things to do first in no particular order

- Use a better build server, CPU power is cheap today,
- Throw more memory, as #Maven run in a JVM the more you have the better it may behave, you may want also to increased the perm gen space,
- Use the latest version of JVM!
- Switch as many plugins as possible as long as there are not needed in the main build loop: Use profile to modularize your build and trigger some additional build/reporting plugins when needed. You want your build to be fast to provide fast feedback to your developers.
- Optimize your test cases, some may take longer than other, use @BeforeClass or Lazy initialization to cache some heavy to create objects,
- Tune the garbage collector according to your build behavior, number of CPU core: use parallel garbage collector for example,
- Carefully review your dependencies as the less Apache #Maven has to load while building the faster it will get. 
    - Are they all needed?
    - No duplicates dependencies?
    - Do you miss some <exclusions>? are all these transitive dependencies to your 3rd party needed?
    - No dependencies cycles? check the order in reactor. A developer should understand, and not be surprised by the order of the modules calculated by #Maven (as long as you have layers in your software, you expect some modules to be build before some others) .
- Review ALL logs files 
    - The one created by #Maven to avoid any warnings and
    - All your application logs (do you log too much data during the build?)

## Speed up [Apache Maven](http://maven.apache.org/) builds by building modules in parallel in reactor

The first beta of Maven 3 saw the introduction of a parallel build feature which leverages a configurable number of cores on a multi-core machine and is especially suited for large multi-module projects.

This feature require Apache Maven 3, even if it is not final, I highly recommend you to try to use it. We have it since the version 3.0 Alpha 2 in use without any apparent drawbacks (we have some old custom Maven plugin that still require 2.2 through but luckily there are not in the main build loop)

Full documentation can be found on the Maven wiki: [Parallel builds in Maven 3](https://cwiki.apache.org/MAVEN/parallel-builds-in-maven-3.html)

Try to build your software using 4 threads, we saw an increase of 1.5 minutes on a 7 minutes build.

```bash
mvn -T 4 clean install
```

## Speed up [Apache Maven](http://maven.apache.org/) builds by running test cases concurrently in reactor

# Caveats

Some test cases may not like to run in parallel, (remember concurrency is not an easy subject in software development) Potential problems are:

- Resources that are shared 
    - Files,
    - Database access,
    - Mutable instance variables.
- You have a lot of integration tests that may conflicts
- You check in teardown() some post conditions that may conflict if run in parallel.

Surefire permit to run tests in parallel either at

- Method level
- Class level
- both

In JUnit 4.7 the values are classes/methods/both to run in separate threads, as controlled by threadCount.

This is particularly useful for slow tests that can have high concurrency, or to quickly and roughly assess the independence and thread safety of your tests and code.

```

```

```<plugin>
    <groupId>org.apache.maven.plugins</groupId>
    <artifactId>maven-surefire-plugin</artifactId>
    <version>2.5</version>
    <configuration>
        <parallel>methods</parallel>
    </configuration>
</plugin>
```

``Read more at ``[JUnit site](http://www.junit.org/node/589)``, ``[maven-surefire-plugin site](http://maven.apache.org/plugins/maven-surefire-plugin/examples/junit.html)`` and ``[surefire mojo parameters](http://maven.apache.org/plugins/maven-surefire-plugin/test-mojo.html)