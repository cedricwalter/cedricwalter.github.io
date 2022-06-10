---
id: 4880
title: 'Code generation from XSD with JAXB and Maven'
date: '2009-11-13T18:56:24+01:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=4880'
permalink: /development/code-generation-from-xsd-with-jaxb-and-maven/
header:
  teaser: /assets/images/2011/11/maven-logo-black-on-white-1.png
tags:
    - apache
    - box
    - ci/cd
    - code
    - configuration
    - continuous
    - create
    - created
    - definition
    - dependencies
    - dependency
    - difficulties
    - Download
    - environment
    - example
    - examples
    - execution
    - generated
    - generation
    - maven
---

### What you will learn in this small post

- How to create JAXB proxies at build time using [maven-jaxb2-plugin](https://maven-jaxb2-plugin.dev.java.net) in a continuous build environment (TeamCity / Bamboo)
- How to generate from an XSD file (XML-Schema-Definitions) #Java code.

### Requirements

- We will use JAXB2 (see [JSR 222](http://jcp.org/en/jsr/detail?id=222) and [JAXB 2.x](https://jaxb.dev.java.net)).
- We use #Maven 2.2.1, the latest available version

### Settings things up

The only difficulties is to add to your Maven proxy (Archiva, artifactory) the [Maven repository of Sun](http://download.java.net/maven). The example below use an inline repositories definition in pom.xml. So it work out of the box.

```xml
<repositories>
    <repository>
        <id>maven2-repository.dev.java.net</id>
        <name>Java.net Maven 2 Repository</name>
        <url>http://download.java.net/maven/2</url>
    </repository>
</repositories>
```

and the special Sun Maven plugin repository

```xml
<pluginRepositories>
    <pluginRepository>
        <id>maven2-repository.dev.java.net</id>
        <url>http://download.java.net/maven/2</url>
    </pluginRepository>
</pluginRepositories>
```

Here is how your pom should look like

```xml
<project>
    <modelVersion>
        4.0.0
    </modelVersion>
    <groupId>com.waltercedric.maven.examples</groupId>
    <artifactId>jaxb</artifactId>
    <version>
        0.1.0-SNAPSHOT
    </version>
    <packaging>jar</packaging>
    <name>jaxb</name>
    <build>
        <plugins>
            <plugin>
                <groupId>org.jvnet.jaxb2.maven2</groupId>
                <artifactId>maven-jaxb2-plugin</artifactId>
                <version>0.7.1</version>
                <executions>
                    <execution>
                        <goals>
                            <goal>generate</goal>
                        </goals>
                    </execution>
                </executions>
            </plugin>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-compiler-plugin</artifactId>
                <configuration>
                    <source>1.6</source>
                    <target>1.6</target>
                </configuration>
            </plugin>
        </plugins>
    </build>
    <dependencies>
        <dependency>
            <groupId>com.sun.xml.bind</groupId>
            <artifactId>jaxb-impl</artifactId>
            <version>2.1.12</version>
        </dependency>
        <dependency>
            <groupId>junit</groupId>
            <artifactId>junit</artifactId>
            <version>4.7</version>
            <scope>test</scope>
        </dependency>
    </dependencies>
    <repositories>
        <repository>
            <id>maven2-repository.dev.java.net</id>
            <name>Java.net Maven 2 Repository</name>
            <url>http://download.java.net/maven/2</url>
        </repository>
    </repositories>
    <pluginRepositories>
        <pluginRepository>
            <id>maven2-repository.dev.java.net</id>
            <name>Java.net Maven 2 Repository</name>
            <url>http://download.java.net/maven/2</url>
        </pluginRepository>
    </pluginRepositories>
</project>
```

All you have to do now is to place your XSD shema in `src/main/resources` and run mvn package

The JAXB proxies will be created in <tt>target\\generated-sources\\xjc\\generated</tt> so you can use them in src/main/java and src/test/java