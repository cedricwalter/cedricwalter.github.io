---
id: 7804
title: 'Tomcat 7 and Apache Maven'
date: '2012-10-17T20:29:56+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=7804'
permalink: /development/tomcat-7-and-apache-maven/
header:
  teaser: /assets/images/2011/11/maven-logo-black-on-white-1.png
tags:
    - ant
    - apache
    - conf
    - configuration
    - container
    - create
    - custom
    - default
    - deploy
    - examples
    - execution
    - existing
    - framework
    - HowTo
    - java
    - maven
    - tutorial
---

Here is 3 different way to control the lifetime **a local Tomcat 7** container using [Apache #Maven](http://maven.apache.org). A typical scenario would be to start a servlet container prior to running integration tests (Selenium, SAHI or using any other framework you can think of )

With the following examples, you will be able to start an instance of Tomcat 7 running your web application in the pre-integration-test phase and stop the instance in the post-integration-test phase. You can also [decide to use an embedded container like Jetty](http://www.sonatype.com/books/mcookbook/reference/ch08s03.html) instead.

# Using Maven Cargo Plugin

[Cargo](http://cargo.codehaus.org/Home) is a thin wrapper that allows you to manipulate Java EE containers in a standard way. [Cargo](http://cargo.codehaus.org/Home) provides the following Tools and APIs:

- A Java API to start/stop/configure Java Containers and deploy modules into them.
- A Java API to parse/create/merge Java EE Modules
- Ant tasks.
- Maven 2/Maven 3 plugin. Here is the config I am using to start an existing Tomcat 7 container:

```
<plugin>
    <groupId>org.codehaus.cargo</groupId>
    <artifactId>cargo-maven2-plugin</artifactId>
    <configuration>
        <wait>true</wait>
        <container>
            <containerId>tomcat7x</containerId>
            <type>installed</type>
            <home>${CATALINA_HOME}</home>
        </container>
        <configuration>
            <type>existing</type>
            <home>${CATALINA_HOME}</home>
            <properties>
                <cargo.tomcat.manager.url>http://localhost:8080/manager/text</cargo.tomcat.manager.url>
                <cargo.remote.username>admin</cargo.remote.username>
                <cargo.remote.password>admin</cargo.remote.password>
            </properties>
        </configuration>
    </configuration>
    <executions>
        <execution>
            <id>start-container</id>
            <phase>pre-integration-test</phase>
            <goals>
                <goal>start</goal>
            </goals>
        </execution>
    </executions>
</plugin>
```

# Using Maven Ant Plugin

[Maven Ant plugin](http://maven.apache.org/plugins/maven-antrun-plugin/) provides the ability to run Ant tasks from within Maven. You can even embed your Ant scripts in the POM! It is *not* the intention of this plugin to provide a means of polluting the POM, so it’s encouraged to move all your Ant tasks to a build.xml file and just call it from the POM using Ant’s <ant/> task. One of the main purposes of this plugin is to facilitate the migration from Ant based projects to Maven. Some projects may not currently be able to migrate because they depend on custom build functionality that Maven doesn’t provide by default.

Thank to Ant exec task you are able to start any process like ${CATALINA\_HOME}\\bin\\startup.bat

```
<plugin>
    <artifactId>maven-antrun-plugin</artifactId>
    <version>1.7</version>
    <executions>
        <execution>
            <phase>pre-integration-test</phase>
            <configuration>
                <target>
                    <echo message="Starting tomcat"/>
                    <exec executable="cmd">
                        <arg value="/c"/>
                        <arg value="${CATALINA_HOME}\bin\startup.bat"/>
                    </exec>
                    <echo message="Tomcat started"/>
                </target>
            </configuration>
            <goals>
                <goal>run</goal>
            </goals>
        </execution>
    </executions>
</plugin>
```

```
Using Maven Exec Plugin A drop in for the Exec Ant Task is to use the <a href="http://mojo.codehaus.org/exec-maven-plugin/" rel="noreferrer noopener" target="_blank">Maven Exec plugin</a>, this Maven plugin provides 2 goals to help execute system and Java programs. 
```

```
<plugin>
    <groupId>org.codehaus.mojo</groupId>
    <artifactId>exec-maven-plugin</artifactId>
    <version>1.2.1</version>
    <executions>
        <execution>
            <id>stop-tomcat</id>
            <phase>post-integration-test</phase>
            <goals>
                <goal>exec</goal>
            </goals>
            <configuration>
                <executable>${CATALINA_HOME}\bin\shutdown.bat</executable>
            </configuration>
        </execution>
        <execution>
            <id>start-tomcat</id>
            <phase>pre-integration-test</phase>
            <goals>
                <goal>exec</goal>
            </goals>
            <configuration>
                <executable>${CATALINA_HOME}\bin\startup.bat</executable>
            </configuration>
        </execution>
    </executions>
</plugin> 
```

The profile used to connect to maven must be configured with proper roles in the/conf/tomcat-users.xml file where Tomcat is installed:

```
<tomcat-users>
    <user name="admin" password="admin" roles="admin-gui,manager-gui,manager-script"/>
</tomcat-users>
```