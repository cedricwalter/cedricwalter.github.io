---
id: 6772
title: 'Apache Maven Cargo deploy with Tomcat 7'
date: '2011-05-27T20:33:42+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=6772'
permalink: /development/apache-maven-cargo-deploy-with-tomcat-7-2/
image: /wp-content/uploads/2011/11/maven-logo-black-on-white-1.png
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

|  | **Tomcat 7** | **Tomcat 6** |
|---|---|---|
| containerId | &lt;containerId&gt;tomcat7x&lt;/containerId&gt; | &lt;containerId&gt;tomcat6x&lt;/containerId&gt; |
| Url of Tomcat manager | &lt;cargo.remote.uri&gt; | &lt;cargo.tomcat.manager.url&gt; |
| example | http://host..com/manager/text/ | http://host..com/manager/ |
| tomcat-users.xml | &lt;tomcat-users&gt;    &lt;role rolename=”manager-gui”/&gt;    &lt;role rolename=”manager-script”/&gt;    &lt;role rolename=”manager-jmx”/&gt;    &lt;role rolename=”manager-status”/&gt;    &lt;user username=”admin” password=”admin” roles=”manager-gui,manager-script”/&gt;    &lt;/tomcat-users&gt; | &lt;tomcat-users&gt;     &lt;role rolename=”manager”/&gt;     &lt;user username=”admin” password=”admin” roles=”manager”/&gt;    &lt;/tomcat-users&gt; |

And finally a snippet of an Apache #Maven pom.xml ready to use in a profile, so you can reuse this profile like a method call

```
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

```
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

```
mvn integration-test –PdeployTomcat,serverA –Ddeployable.artifactid=demo -Ddeploy.groupid=com.mycompany –Ddeployable.context=showcase
```