---
id: 3380
title: 'maven2 Unit Test code reuse and dependencies'
date: '2008-04-10T14:52:20+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=3380'

header:
  teaser: /assets/images/2011/11/maven-logo-black-on-white-1.png
tags:
    - apache
    - code
    - crash
    - create
    - dependencies
    - dependency
    - execution
    - games
    - HowTo
    - jar
    - java
    - junit
    - main
    - make
    - maven
---

In a multi modules project where you have write API or common code for unit tests in one project and want to reuse these in the tests for another project. #Maven will crash during the compile phase if you do not make the following.

# Maven rules of the game:**

- The main code in src/main/java is visible across modules if you did specify project   
    dependencies in pom.xml.
- Test code reside in src/test/java and is not shared across modules, moreover
- Test code can use any code from src/main/java but not the other way around, which   
    make sense as we want to clearly separate test code (junit testcases) from code shipped.

The solution is to create additional test jar for each module, this is done by putting in the   
parent pom (lets call it parent-pom.xml)

inside the <build></build> tags the following:

```
<plugin>
    <groupId>org.apache.maven.plugins</groupId>
    <artifactId>maven-jar-plugin</artifactId>
    <executions>
        <execution>
            <goals>
                <goal>test-jar</goal>
            </goals>
        </execution>
    </executions>
</plugin>
```

This will create for each modules an additional jar named {artifactId}-{version}-tests.jar   
during the goal test-jar

Now for every modules where you want to reuse test classes, all you have to do in to put in every   
modules pom.xml a dependency to that test jar by adding the tests classifier

```
<dependency>
    <groupId>yourGroup</groupId>
    <artifactId>yourReusableModuleArtifact</artifactId>
    <version>0.1-SNAPSHOT</version>
    <classifier>tests</classifier>
    <scope>test</scope>
</dependency>
```

This has work for me with #Maven 2.0.8