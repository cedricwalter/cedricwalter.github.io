---
id: 5099
title: 'Apache Maven BEA Weblogic 10.3 remote deployment'
date: '2010-03-28T19:14:26+02:00'
author: 'Cédric Walter'



header:
  teaser: /assets/images/2011/11/maven-logo-black-on-white-1.png
tags:
    - apache
    - checked
    - ci/cd
    - client
    - configuration
    - console
    - continuous
    - core
    - create
    - creating
    - debug
    - default
    - dependencies
    - dependency
    - deploy
    - deployment
    - directories
    - directory
    - HowTo
    - java
    - maven
---

In this small post I will show you how to deploy automatically some artifacts of your build into Weblogic 10.3 by using the [weblogic-maven-plugin](http://mojo.codehaus.org/weblogic-maven-plugin/)

This plugin will support various tasks within the Weblogic 8.1 and 9.x environment. Such tasks as deploy, undeploy,clientgen,servicegen, and appc are supported as well as many others. The plugin uses exposed API’s that are subject to change but have been tested in 8.1 SP 4-6 and 9.0 – 9.2 MP3. There are two versions of the plugin to support the two environments based on differences in the JDK. The 9.x version is currently being refactored to support the standard JSR supported deployment interface

### Weblogic Admin Console

In the protocols section of your Admin server settings page verify that **Enable Tunneling** is checked (Environment – Server – Protocols).

### Preparing Maven dependencies

In a Weblogic 10.3 JDK 1.6 environment the [weblogic-maven-plugin](http://mojo.codehaus.org/weblogic-maven-plugin/) requires 17 dependencies!

- bea\\modules\\com.bea.core.descriptor.wl\_1.1.0.0.jar
- bea\\modules\\com.bea.core.descriptor\_1.4.0.0.jar
- bea\\modules\\com.bea.core.management.core\_2.3.0.0.jar
- bea\\modules\\com.bea.core.management.jmx\_1.1.0.0.jar
- bea\\modules\\com.bea.core.weblogic.lifecycle\_1.1.0.0.jar
- bea\\modules\\com.bea.core.weblogic.security.digest\_1.0.0.0.jar
- bea\\modules\\com.bea.core.weblogic.security.identity\_1.1.0.0.jar
- bea\\modules\\com.bea.core.weblogic.security.wls\_2.0.1.0.jar
- bea\\modules\\com.bea.core.weblogic.security\_2.0.1.0.jar
- bea\\modules\\com.bea.core.weblogic.socket.api\_1.0.0.0.jar
- bea\\modules\\com.bea.core.weblogic.workmanager\_1.4.0.0.jar
- bea\\modules\\javax.enterprise.deploy\_1.2.jar
- bea\\wlserver\_10.3\\server\\lib\\wljmsclient.jar
- bea\\wlserver\_10.3\\server\\lib\\wls-api.jar
- bea\\wlserver\_10.3\\server\\lib\\wlsafclient.jar
- bea\\wlserver\_10.3\\server\\lib\\weblogic.jar
- bea\\wlserver\_10.3\\server\\lib\\webserviceclient.jar

but this can be reduced to just two by creating an uber jar wlfullclient.jar.

Use the following steps to create a `wlfullclient.jar` file for a JDK 1.6 client application:

1. # wp1077767"></a>Change directories to the `server/lib` directory. # wp1077745"></a>```
    cd ```
    WL_HOME
    ```/server/lib
    ```
2. # wp1077747"></a>Use the following command to create `wlfullclient.jar` in the `server/lib` directory: # wp1077749"></a>```
    java -jar wljarbuilder.jar
    ```

You can now deploy this huge jar file `wlfullclient.jar` (59 MB) to either your [Artifactory](http://www.jfrog.org/)/[Nexus](http://nexus.sonatype.org/)/[Archiva](http://archiva.apache.org/) repository.

```
<dependency> 
    <groupId>weblogic</groupId> 
    <artifactId>wlfullclient</artifactId> 
    <version>${weblogic.version}</version> 
</dependency>
```

We need another jar file, this one can be find in bea/modules directory. Install also com.bea.core.descriptor.wl\_1.1.0.0.jar into your local maven repository

```
<dependency> 
    <groupId>weblogic</groupId> 
    <artifactId>com.bea.core.descriptor.wl</artifactId> 
    <version>1.1.0.0</version> 
    <scope>provided</scope> 
</dependency>
```

We are nearly ready, just add your deployment in a profile that is not active by default. This will allow you to deploy only in some special build with –P{profileName} in your continuous server ([Hudson](http://hudson-ci.org/)/[Teamcity](http://www.jetbrains.com/teamcity/)/[Bamboo](http://www.atlassian.com/software/bamboo/))

```
<profiles>
  <profile> 
        <id>deploy_weblogic_dev</id> 
        <activation> 
            <activeByDefault>false</activeByDefault> 
        </activation> 
        <properties> </properties> 
        <build> 
            <plugins> </plugins> 
        </build> 
    </profile> 
</profiles>
```

Here is the whole plugin configuration that you have to put between as usual

```
<plugin> 
    <groupId>org.codehaus.mojo</groupId> 
    <artifactId>weblogic-maven-plugin</artifactId> 
    <version>2.9.1</version> 
    <executions> 
        <execution> 
            <phase>deploy</phase> 
            <goals> 
                <goal>deploy</goal> 
                <goal>start</goal> 
            </goals> 
        </execution> 
    </executions> 
    <configuration> 
        <name>${webappname}</name> 
        <adminServerHostName>${wls.adminServerHostName}</adminServerHostName> 
        <adminServerPort>${wls.adminServerPort}</adminServerPort> 
        <adminServerProtocol>t3</adminServerProtocol> 
        <userId>${wls.userId}</userId> 
        <password>${wls.password}</password> 
        <upload>true</upload> 
        <remote>true</remote> 
        <verbose>false</verbose> 
        <debug>false</debug> 
        <targetNames>${wls.targetname}</targetNames> 
        <noExit>true</noExit> 
    </configuration> 
    <dependencies> 
        <dependency> 
            <groupId>weblogic</groupId> 
            <artifactId>wlfullclient</artifactId> 
            <version>${weblogic.version}</version> 
        </dependency> 
        <dependency> 
            <groupId>weblogic</groupId> 
            <artifactId>com.bea.core.descriptor.wl</artifactId> 
            <version>1.1.0.0</version> 
            <scope>provided</scope> 
        </dependency> 
    </dependencies> 
</plugin>
```

## Remarqs

- It is important that is set to true or maven will exit improperly!
- Define your password as usual in settings.xml
- Variables ${xxxx} are self explanatory, use correct values in section of your profile

Good luck! Feel free to ask below if you have any questions.

## References

http://download.oracle.com/docs/cd/E12840_01/wls/docs103/client/jarbuilder.html 