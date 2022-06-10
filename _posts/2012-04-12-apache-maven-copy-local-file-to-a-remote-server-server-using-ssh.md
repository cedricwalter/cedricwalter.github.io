---
id: 7598
title: 'Apache Maven copy local file to a remote server server using SSH'
date: '2012-04-12T20:20:26+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=7598'
permalink: /development/apache-maven-copy-local-file-to-a-remote-server-server-using-ssh/
image: /wp-content/uploads/2011/11/maven-logo-black-on-white-1.png
tags:
    - ant
    - apache
    - ci/cd
    - code
    - configuration
    - copy
    - dependencies
    - dependency
    - deploy
    - described
    - describes
    - documentation
    - example
    - execution
    - files
    - home
    - HowTo
    - maven
---

I will show you in an Apache #Maven configuration file how to copy files to server each time the package phase is executed.

### Solution with Ant SCP task

This snippet of code is a ready to use code that make use of [Apache Ant task scp](http://ant.apache.org/manual/Tasks/scp.html "Apache Ant task scp manual"), Just put this snippet of code in your #Maven module where the assembly is executed or anywhere else to push all tar.gz files to a server just run a #maven mvn package, you can add as many ant task and push to many server the same file during the reactor build.

```
<plugin>
    <groupId>org.apache.maven.plugins</groupId>
    <artifactId>maven-antrun-plugin</artifactId>
    <version>1.7</version>
    <executions>
        <execution>
            <id>server-copy</id>
            <goals>
                <goal>run</goal>
            </goals>
            <phase>package</phase>
            <configuration>
                <target>
                    <echo message="Push to server/home/"/>
                    <scp trust="yes" todir="user:password@server:/home/">
                        <fileset dir="${basedir}/target">
                            <include name="**/*.tar.gz"/>
                        </fileset>
                    </scp>
                </target>
            </configuration>
        </execution>
    </executions>
    <dependencies>
        <dependency>
            <groupId>org.apache.ant</groupId>
            <artifactId>ant-jsch</artifactId>
            <version>1.8.2</version>
        </dependency>
    </dependencies>
</plugin>
```

### Solution with #maven-deploy-plugin

The #maven-deploy-plugin allows you to configure the deploy phase to deploy to a server using [scp](http://en.wikipedia.org/wiki/Secure_copy "secure copy scp"). There is a page in the [documentation](http://maven.apache.org/plugins/maven-deploy-plugin/examples/deploy-ssh-external.html) that describes how it can be done.

### Deploy #maven artifact using [Maven Wagon SCP](http://maven.apache.org/wagon/wagon-providers/wagon-ssh/ "Maven Wagon SSH manual")

Another alternative would be to use [Maven Wagon SCP](http://maven.apache.org/wagon/wagon-providers/wagon-ssh/ "Maven Wagon SSH manual") like [described in this post](http://blog.darrenscott.com/2010/08/05/uploading-files-using-scp-and-the-maven-wagon-plugin/ "Deploy #maven artifact using #maven wagon scp") for example