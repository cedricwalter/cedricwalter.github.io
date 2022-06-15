---

title: 'Apache Maven manifest and enabling agile testing'
date: '2010-09-22T18:44:58+02:00'
author: 'Cédric Walter'



header:
  teaser: /assets/images/2011/11/maven-logo-black-on-white-1.png
tags:
    - agile
    - apache
    - bug
    - bugs
    - built
    - ci/cd
    - code
    - configuration
    - core
    - create
    - created
    - custom
    - customer
    - deliver
    - deployed
    - distributed
    - HowTo
    - jar
    - java
    - maven
---

In this small post i will present you how to

1. Track and identify across your [Apache #Maven](http://maven.apache.org/) multi project builds all components, their versions, and class path if needed
2. Get valuable information from your testing team, and add it to the GUI of your web applications

To solve the problem number 1, we will use Manifest files

> On the #Java platform, a **`manifest file`** is a specific file contained within a JAR archive. It is used to define extension and package related data. It is a metadata file that contains name-value pairs organized in different sections. If a JAR file is intended to be used as an executable file, the manifest file specifies the main class of the application. The manifest file is named `MANIFEST.MF`. \[[Wikipedia](http://en.wikipedia.org/wiki/Manifest_(computing))\]

If you do nothing special in #Maven., you will see across your jar files the following in all META-INF/MANIFEST.MF

```
Manifest-Version: 1.0 Archiver-Version: Plexus Archiver Created-By: Apache #Maven
```

The solution I propose here will write all these META-INF/MANIFEST.MF the following content:

```
Manifest-Version: 1.0 Archiver-Version: Plexus Archiver Created-By: Apache #Maven 
Built-By: agent1
 Build-Jdk: 1.6.0_20 Specification-Title: Unnamed - com.waltercedric:web:war:1.0.0-SNAPSHOT Specification-Version: 1.0.0-SNAPSHOT Specification-Vendor: waltercedric Implementation-Title: Unnamed - com.waltercedric:web:war:1.0.0-SNAPSHOT 
```

# Implementation-Version: 1.0.0-SNAPSHOT**

```
 Implementation-Vendor-
buildDate: 2010.09.22-14:12 svnrevision: 18625
```

```
Class-Path: spring-ws-core-1.5.6.jar spring-aop-2.5.6.jar spring-  web-2.5.6.jar spring-webmvc-2.5.6.jar spring-context-support-2.5.6.jar
.. .. ..
```

Thanks to the usage of Manifest, You will

- Never come across any jar file with a version that is not identified,
- Never ask anymore when it was build (**buildDate**) and where (**Built-By** helpful if you have distributed build server agent) with what (**svnrevision**)
- Never try to guess what was in the class path.

Lets add a bit of “magic” in one of our pom.xml, I assume that you have crafted a pom hierarchy using pom inheritance, isn’t’ it? so this code may have it’s place in your organization wide super pom.

The first plugin “[buildnumber-maven-plugin](http://mojo.codehaus.org/buildnumber-maven-plugin/)” is unfortunately required, as it is the only way to get the revision number of the each Maven module. This is a small plugin that will get for each module the SVN revision and publish it under a variable ${buildNumber}

```
<plugin>
    <groupid>org.codehaus.mojo</groupid>
    <artifactid>buildnumber-maven-plugin</artifactid>
    <version>1.0-beta-3</version>
    <executions>
        <execution>
            <phase>package</phase>
            <goals>
                <goal>create</goal>
            </goals>
        </execution>
    </executions>
    <configuration>
        <docheck>true</docheck>
        <doupdate>true</doupdate>
    </configuration>
</plugin>
```

Configure the “[maven-jar-plugin](http://maven.apache.org/plugins/maven-jar-plugin/)” to create manifest entries. Note the 2 custom entries svnrevision, that use the system variable published by the maven plugin “[buildnumber-maven-plugin](http://mojo.codehaus.org/buildnumber-maven-plugin/)” and builddate. These 2 variable will also be read later in java.

```
<plugin>
    <groupid>org.apache.maven.plugins</groupid>
    <artifactid>maven-jar-plugin</artifactid>
    <version>2.2</version>
    <executions>
        <execution>
            <goals>
                <goal>jar</goal>
                <goal>test-jar</goal>
            </goals>
            <phase>package</phase>
        </execution>
    </executions>
    <configuration>
        <archive>
            <manifest>
                <addclasspath>true</addclasspath>
                <adddefaultimplementationentries>true</adddefaultimplementationentries>
                <adddefaultspecificationentries>true</adddefaultspecificationentries>
            </manifest>
            <manifestentries>
                <svnrevision>${buildNumber}</svnrevision>
                <builddate>${maven.build.timestamp}</builddate>
            </manifestentries>
        </archive>
    </configuration>
</plugin>
```

and don’t forget to also update your “[maven-war-plugin](http://maven.apache.org/plugins/maven-war-plugin/)” archiver

```
<plugin>
    <groupid>org.apache.maven.plugins</groupid>
    <artifactid>maven-war-plugin</artifactid>
    <version>2.1</version>
    <configuration>
        <archive>
            <manifest>
                <addclasspath>true</addclasspath>
                <adddefaultimplementationentries>true</adddefaultimplementationentries>
                <adddefaultspecificationentries>true</adddefaultspecificationentries>
            </manifest>
            <manifestentries>
                <svnrevision>${buildNumber}</svnrevision>
                <builddate>${maven.build.timestamp}</builddate>
            </manifestentries>
        </archive>
    </configuration>
</plugin>
```

The next time you run a “mvn package” on your project, or multi module project, all jar and war will get their MANIFEST.MF filled up by Apache Maven.

To solve problem number 2,

![](/assets/images/2010/09/section-java-testing.gif)When you are using **guerilla testing techniques** (describe rapid iterations of user testing with few users) You expect the testing team:

- to deliver some quality bugs reports.
- to receive as much information as possible to be able to crush bugs efficiently.

IN order to reach that objective, I propose you to display in the bottom part of your web application some interesting data that will hopefully be part of any decent screenshot attached to bug entries.

| 1.0.0-SNAPSHOT | 2010.09.22 15:43:23 | 16789 | 2010.09.22 17:12:53 |
|---|---|---|---|
| The sprint version or Maven version | timestamp when Maven did build that version | SVN revision number of the web artifact | timestamp when the page has leaved the server. |

While this seems a lot of data (you can use a smaller font as long as you can read it in screenshots), you will see that they are quite useful…

- The first one let you visually notice in which sprint the error has been reported, detect that it was not deployed, or tested on the wrong server… Selenium automatic screenshot reporting will also help you locate the version where the issue occur a lot faster.
- The second one, the build timestamp let the testing team see when the application has been build, developer see that it has been successfully deployed,
- The SVN revision number if the key to quickly set up an eclipse workspace with that faulty code
- The last one, let developer find in the logs files the issue a lot more faster

To do this, all you have to do is to read the META-INF/MANIFEST.MF of your web project and write in your JSP/JSF application. Here is a Bean that is doing that

```
public class Version {    
private static final String IMPLEMENTATION_BUILD = "Implementation-Build";   
private static final String IMPLEMENTATION_VERSION = "Implementation-Version";   
private static final String BUILDDATE = "buildDate";   
private static final String SVNREVISION = "svnrevision";    
private static final String META_INF_MANIFEST_MF = "META-INF/MANIFEST.MF";    

public String getVersion() {      Manifest mf = new Manifest();     try {       //Icefaces
       String appServerHome = 
           CoreUtils.getRealPath(FacesContext.getCurrentInstance(), "/"); 
      //Spring 
      //String appServerHome = 
      //
FacesContextUtils.getWebApplicationContext(FacesContext.getCurrentInstance())
       File manifestFile = new File(appServerHome, META_INF_MANIFEST_MF);       mf.read(new FileInputStream(manifestFile));        Attributes mainAttributes = mf.getMainAttributes();        String version = 
           String.valueOf(mainAttributes.getValue(Attributes.Name.IMPLEMENTATION_VERSION));       String buildDate = String.valueOf(mainAttributes.getValue(BUILDDATE));       String svnrevision = String.valueOf(mainAttributes.getValue(SVNREVISION));        return "" + version + " " + buildDate + " " + svnrevision + " " 
                 + (new Date()).toString();     } catch (Exception e) {     }     return "";   } }
```

Put something like this in all your XHTML views

```
<span class=”developerFooter”>#{Version.version}
```

And voila!

I recommend you also to switch this display off when you ship your software to your customers