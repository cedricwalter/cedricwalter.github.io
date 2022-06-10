---
id: 4616
title: 'Maven JAXWS proxies stubs generation and deployment to artifactory'
date: '2009-09-10T23:49:39+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=4616'
permalink: /development/maven-jaxws-proxies-stubs-generation-and-deployment-to-artifactory/
tags:
    - apache
    - ci/cd
    - HowTo
    - maven
---

What you will learn in this #Maven How To

- How to generate JAXWS proxies stub against a local WSDL, remote WSDL
- How to compile your #maven project or module against a specific version of #Java (here 1.6) using [Maven Compiler Plugin](http://maven.apache.org/plugins/maven-compiler-plugin/)
- How to attach source code of your project with the binary artifact using #Maven Sources Plugin
- How to deploy artifact binary and artifact source artifact using [Maven Deploy Plugin](//maven.apache.org/plugins/maven-deploy-plugin/index.html) to a remote enterprise Artifactory #Maven repository.

Now if you run “mvn deploy” on the pom.xml, the following will be executed:

- JAXWS will create proxy stubs in src/main/java
- Maven will compile all proxy stubs in /target/classes
- Maven will create in phase “install” two jar artifact jaxws-0.0.1-SNAPSHOT-sources.jar and jaxws-0.0.1-SNAPSHOT.jar in /target/
- Maven will deploy these jars to artifactory so they can be used by all your developers.

# How to generate JAXWS proxies stub against a local WSDL, remote WSDL

Add this to your pom.xml

```

```

```
<dependencies>
    <dependency>
        <groupId>com.sun.xml.ws</groupId>
        <artifactId>jaxws-rt</artifactId>
        <version>2.1.3</version>
    </dependency>
</dependencies>
```

Add this to your settings.xml or pom.xml or better artifactory list of repositories

```
<pluginRepositories>
    <pluginRepository>
        <id>java.net2</id>
        <url>http://download.java.net/maven/2/</url>
    </pluginRepository>
</pluginRepositories>
```

And configure the Maven JAXWS plugin, you can either use remote WSDL or local WSDL saved on disk

```
<plugin>
    <groupId>org.codehaus.mojo</groupId>
    <artifactId>jaxws-maven-plugin</artifactId>
    <executions>
        <execution>
            <goals>
                <goal>wsimport</goal>
            </goals>
        </execution>
    </executions>
    <configuration>
        <verbose>true</verbose>
        <!--<bindingFiles>-->
        <!-- <bindingFile>${basedir}/src/main/resources/binding.xml</bindingFile>-->
        <!--</bindingFiles>-->
        <sourceDestDir>${basedir}/src/main/java</sourceDestDir>         
        <!--             
        <wsdlDirectory>c:</wsdlDirectory> 
        <wsdlFiles>             
            <wsdlFile>stockquote.wsdl</wsdlFile> 
        </wsdlFiles>         
        -->
        <wsdlUrls>
            <wsdlUrl>http://www.webservicex.net/stockquote.asmx?WSDL</wsdlUrl>
        </wsdlUrls>
    </configuration>
</plugin>
```

If you now run mvn jaxws:wsimport or mvn install, the maven plugin will get the WSDL and create proxies stubs in src/main/java

# How to compile your maven project or module against a specific version of Java

Just put inside the <plugins> section of <build>, use at least java 1.5. Obviously I choose 1.6 in the example below

```
<plugin>
    <inherited>true</inherited>
    <groupId>org.apache.maven.plugins</groupId>
    <artifactId>maven-compiler-plugin</artifactId>
    <version>2.0.2</version>
    <configuration>
        <meminitial>128m</meminitial>
        <source>1.6</source>
        <target>1.6</target>        
        <!--       
        <executable>${JAVA_HOME}/bin/javac</executable> 
        <fork>true</fork>             
        <verbose>true</verbose> 
        <showDeprecation>true</showDeprecation>
        <showWarnings>true</showWarnings>
                 -->
    </configuration>
</plugin>
```

# How to attach source code of your project with the binary artifact using Maven Sources Plugin

This small plugin will create a new jar file in /target with a classifier “sources” for you. Note that with <finalName/> you can deviate from standard naming scheme, which is of course not recommended.

“A Maven 2 plugin that creates a project-version-sources.jar right along side the project-version.jar in the target directory. We are using the verify phase here because it is the phase that comes before the install phase, thus making sure that the sources jar has been created before the install takes place.”

```
<plugin>
    <groupId>org.apache.maven.plugins</groupId>
    <artifactId>maven-source-plugin</artifactId>
    <version>2.1</version>
    <configuration>         <!--<finalName></finalName>         -->     </configuration>
    <executions>
        <execution>
            <id>attach-sources</id>
            <phase>verify</phase>
            <goals>
                <goal>jar-no-fork</goal>
            </goals>
        </execution>
    </executions>
</plugin>
```

# How to deploy artifact binary and artifact source artifact using [Maven Deploy Plugin](//maven.apache.org/plugins/maven-deploy-plugin/index.html) to a remote Artifactory

Add to your pom.xml the following

```
<distributionManagement>
    <repository>
        <id>internal.repo</id>
        <name>MyCo Internal Repository</name>
        <url>http://maven.waltercedric.com:8080/artifactory/libs-releases</url>
    </repository>
    <snapshotRepository>
        <id>internal.repo.snapshot</id>
        <name>MyCo Internal Repository</name>
        <url>http://maven.waltercedric.com:8080/artifactory/libs-snapshots</url>
    </snapshotRepository>
</distributionManagement>
```

And to your settings.xml your administrator credentials (note don’t try admin/password against my artifactory repository, I use way more complex passwords). Note that the maven deploy plugin is able to detect if your artifact contains the word SNAPSHOT, if yes it will use the <<span class="html">snapshotRepository></<span class="html">snapshotRepository> and internal.repo.snapshot credentials

```
<servers>
    <server>
        <id>internal.repo</id>
        <username>admin</username>
        <password>password</password>
    </server>
    <server>
        <id>internal.repo.snapshot</id>
        <username>admin</username>
        <password>password</password>
    </server>
</servers>
```

Now if you run “mvn deploy” on the pom.xml, the following will be executed:

- JAXWS will create proxy stubs in src/main/java
- Maven will compile all proxy stubs in /target/classes
- Maven will create in phase “install” two jar artifact jaxws-0.0.1-SNAPSHOT-sources.jar and jaxws-0.0.1-SNAPSHOT.jar
- Maven will deploy these jars to artifactory

# Download

I did [create a new Download section Maven](https://waltercedric.com/new/?p=1380) for all future resources download. You’ll find there ready to use Maven/Eclipse projects.

# References

- JAXWS maven plugin [http://java.sun.com/mailers/techtips/enterprise/2008/TechTips\_Jan08.html](http://java.sun.com/mailers/techtips/enterprise/2008/TechTips_Jan08.html)
- Mavn Compiler Plugin <http://maven.apache.org/plugins/maven-compiler-plugin/>
- Maven Deploy Plugin <http://maven.apache.org/plugins/maven-deploy-plugin/index.html>