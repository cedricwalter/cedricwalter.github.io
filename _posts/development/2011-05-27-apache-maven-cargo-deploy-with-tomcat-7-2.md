---
id: 6772
title: 'Apache Maven Cargo deploy with Tomcat 7'
date: '2011-05-27T20:33:42+02:00'
author: 'Cédric Walter'



header:
  teaser: /assets/images/2011/11/maven-logo-black-on-white-1.png
tags:
    - about
    - apache
    - ci/cd
    - configuration
    - container
    - demo
    - deploy
    - deployed
    - example
    - execution
    - explained
    - host
    - HowTo
    - integration
    - machine
    - main
    - maven
    - plugin
    - tutorial
---

Following the post about [Deploy to Tomcat 6 using #Maven](https://waltercedric.com/new/?p=4300), here is a ready to use example with the main differences explained in the table below

|                       | **Tomcat 7**                                                                                                                                                                                                                                                    | **Tomcat 6**                                                                                                                   |
|-----------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------|
| containerId           | <containerId>tomcat7x</containerId>                                                                                                                                                                                                                             | <containerId>tomcat6x</containerId>                                                                                            |
| Url of Tomcat manager | <cargo.remote.uri>                                                                                                                                                                                                                                              | <cargo.tomcat.manager.url>                                                                                                     |
| example               | http://host..com/manager/text/                                                                                                                                                                                                                                  | http://host..com/manager/                                                                                                      |
| tomcat-users.xml      | <tomcat-users>    <role rolename=”manager-gui”/>    <role rolename=”manager-script”/>    <role rolename=”manager-jmx”/>    <role rolename=”manager-status”/>    <user username=”admin” password=”admin” roles=”manager-gui,manager-script”/>    </tomcat-users> | <tomcat-users>     <role rolename=”manager”/>     <user username=”admin” password=”admin” roles=”manager”/>    </tomcat-users> |

And finally a snippet of an Apache #Maven pom.xml ready to use in a profile, so you can reuse this profile like a method call

```xml
<profile>
    <id>deployTomcat</id>
    <activation>
        <activeByDefault>false</activeByDefault>
    </activation>
    <build>
        <plugins>
            <plugin>
                <groupId>org.codehaus.cargo</groupId>
                <artifactId>cargo-maven2-plugin</artifactId>
                <version>1.1.0</version>
                <configuration>
                    <wait>true</wait>
                    <container>
                        <containerId>tomcat7x</containerId>
                        <type>remote</type>
                    </container>
                    <configuration>
                        <type>runtime</type>
                        <properties>
                            <cargo.remote.uri>${tomcat.url}</cargo.remote.uri>
                            <cargo.remote.username>${tomcat.user}</cargo.remote.username>
                            <cargo.remote.password>${tomcat.pwd}</cargo.remote.password>
                        </properties>
                    </configuration>
                    <deployer>
                        <type>remote</type>
                        <deployables>
                            <deployable>
                                <groupId>${deploy.groupid}</groupId>
                                <artifactId>${deploy.artifactid}</artifactId>
                                <type>war</type>
                                <properties>
                                    <context>${deploy.context}</context>
                                </properties>
                            </deployable>
                        </deployables>
                    </deployer>
                </configuration>
                <executions>
                    <execution>
                        <id>verify-deploy</id>
                        <phase>pre-integration-test</phase>
                        <goals>
                            <goal>deployer-undeploy</goal>
                            <goal>deployer-deploy</goal>
                        </goals>
                    </execution>
                </executions>
            </plugin>
        </plugins>
    </build>
</profile>
```

 Place as many profiles as you have machine to deploy in settings.xml and declare some variables as properties, as shown below:

```xml
<profile>
    <id>serverA</id>
    <activation>
        <activeByDefault>false</activeByDefault>
    </activation>
    <properties>
        <tomcat.url>http://host.com/manager/text</tomcat.url>
        <tomcat.user>admin</tomcat.user>
        <tomcat.pwd>admin
        </tomcat.pwd> 
        <!-- these properties must be defined as system property or -D --> 
        <!-- - deployable.artifactid: artifactId of web application to be deployed --> 
        <!-- - deployable.context: web context name -->
    </properties>
</profile>
```

So you can run, and target multiple host by just exchanging the name of the profile serverA to something else.

```bash
mvn integration-test –PdeployTomcat,serverA –Ddeployable.artifactid=demo -Ddeploy.groupid=com.mycompany –Ddeployable.context=showcase
```