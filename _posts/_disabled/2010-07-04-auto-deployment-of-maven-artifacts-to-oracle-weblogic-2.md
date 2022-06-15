---

title: 'Auto deployment of Maven artifacts to Oracle Weblogic'
date: '2010-07-04T15:43:28+02:00'
author: 'Cédric Walter'



header:
  teaser: /assets/images/2011/11/maven-logo-black-on-white-1.png
tags:
    - ant
    - apache
    - ci/cd
    - classpath
    - client
    - configuration
    - container
    - copy
    - core
    - create
    - debug
    - dependencies
    - dependency
    - deploy
    - deployment
    - development
    - directories
    - directory
    - HowTo
    - maven
---

I found this time a new way to deploy #Maven artefacts using the Oracle Weblogic Ant API!

If you remember [my previous post](https://waltercedric.com/new/?p=5099), there is many ways to deploy your war/ear to [Oracle Weblogic](http://www.oracle.com/appserver/weblogic/weblogic-suite.html)

1. Using [Oracle Weblogic](http://www.oracle.com/appserver/weblogic/weblogic-suite.html) development mode, a mode in which a simple copy of your files in a specific autodeploy directory trigger the update/install of these
2. Using [Maven Cargo](http://cargo.codehaus.org/Maven2+plugin), this work **only if your Oracle Weblogic container is local** ([see here](http://cargo.codehaus.org/WebLogic+10.3.x)) on the same machine, where Apache #Maven is running
3. Using a [very old #Maven plugin](http://mojo.codehaus.org/weblogic-maven-plugin/) (2008), local and remote container are supported, but our builds were sometimes hanging during pre integration phase for no apparent reasons.

And now using the official ANT API of Oracle, by far the MOST stable of all!

Use the following steps to create a `wlfullclient.jar` file for a JDK 1.6 client application:

Change directories to the `server/lib` directory.

```
cd WL_HOME/server/lib
```

Use the following command to create `wlfullclient.jar` in the `server/lib` directory:# wp1077749"></a>

```
java -jar wljarbuilder.jar
```

You can now deploy this huge jar file `wlfullclient.jar` (59 MB) to your [Artifactory](http://www.jfrog.org/)/[Nexus](http://nexus.sonatype.org/)/[Archiva](http://archiva.apache.org/) repository

We need another jar file, this one can be found in **bea/modules** directory. Install also **com.bea.core.descriptor.wl\_1.1.0.0.jar** into your local maven repository

```
<dependency>
    <groupid>weblogic</groupid>
    <artifactid>com.bea.core.descriptor.wl</artifactid>
    <version>1.1.0.0</version>
</dependency>
```

We need another jar file, this one can also be found in **bea/modules** directory. Install also **webservices.jar** into your local maven repository

```
<dependency>
    <groupid>weblogic</groupid>
    <artifactid>com.bea.core.descriptor.wl</artifactid>
    <version>1.1.0.0</version>
</dependency>
```

Now put these line in your pom.xml and run a build in phase package

```
<plugin>
    <groupid>org.apache.maven.plugins</groupid>
    <artifactid>maven-antrun-plugin</artifactid>
    <version>1.3</version>
    <configuration>
        <tasks>
            <taskdef name="wldeploy" classname="weblogic.ant.taskdefs.management.WLDeploy"
                     classpathref="maven.plugin.classpath">
                <wldeploy debug="true" name="web" password="weblogic" verbose="true" upload="true"
                          source="target/artifact.war" user="weblogic" adminurl="t3://weblogichost:7001"
                          targets="myManagedServerName"></wldeploy>
            </taskdef>
        </tasks>
    </configuration>
    <dependencies>
        <dependency>
            <groupid>com.sun</groupid>
            <artifactid>tools</artifactid>
            <version>${java.version}</version>
            <scope>system</scope>
            <systempath>${java.home}/../lib/tools.jar</systempath>
        </dependency>
        <dependency>
            <groupid>weblogic</groupid>
            <artifactid>webservices</artifactid>
            <version>10.3</version>
        </dependency>
        <dependency>
            <groupid>weblogic</groupid>
            <artifactid>wlfullclient</artifactid>
            <version>10.3</version>
        </dependency>
        <dependency>
            <groupid>weblogic</groupid>
            <artifactid>com.bea.core.descriptor.wl</artifactid>
            <version>1.1.0.0</version>
        </dependency>
    </dependencies>
</plugin>
```

run with

```
mvn clean package antrun:run
```