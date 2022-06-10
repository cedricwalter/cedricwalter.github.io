---
id: 3519
title: 'Maven dependencies under control: excluding unwanted transitive dependencies'
date: '2008-07-17T12:08:52+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=3519'
permalink: /development/maven-dependencies-under-control-excluding-unwanted-transitive-dependencies/
image: /wp-content/uploads/2011/11/maven-logo-black-on-white-1.png
tags:
    - ant
    - apache
    - background
    - building
    - default
    - definition
    - dependencies
    - dependency
    - ensure
    - example
    - files
    - first
    - fix
    - having
    - HowTo
    - java
    - maven
    - tutorial
---

What can you do to avoid that when you use one #Maven dependency, to also inherit some other undesirable older   
dependency (which is to say from an older transitive dependency).

The fix to this is to add an exclusion to the dependency in question.   
For example, if we start with a dependency upon version 1.2 of the jxpath library:

```
<dependency>
    <groupId>common-jxpath</groupId>
    <artifactId>common-jxpath</artifactId>
    <version>1.2</version>
    <scope>compile</scope> <!-- default scope for sake of example-->
</dependency>
```

This dependency to jxpath 1.2 will bring in an old version of log4j 3.8. In order to ensure that I am using the latest   
versions of log4j (4.4),

I need to put in an exclusion for these transitive dependencies of common-jxpath, which I do as follows:

```
<dependency>
    <groupId>common-jxpath</groupId>
    <artifactId>common-jxpath</artifactId>
    <version>1.2</version>
    <scope>compile</scope>
    <exclusions>
        <exclusion>
            <artifactId>junit</artifactId>
            <groupId>junit</groupId>
        </exclusion>       
        <!-- I can put many of these here -->
    </exclusions>
</dependency>
```

Having excluded them, they will be any longer in the build.

Now, there is still too many thing that can occur in the background

- Another 3rd party artifact may include log4j by using a transitive dependencies, and then you will have to rely/trust transitive   
    dependency mediation
- You can explicitly include the versions that you want in all pom.xml or better in your parent pom.xml

Transitive dependency mediation

> *Dependency mediation* – this determines what version of a dependency will be used when multiple versions of an artifact are   
> encountered. Currently, Maven 2.0 only supports using the “nearest definition” which means that it will use the version of   
> the closest dependency to your project in the tree of dependencies. You can always guarantee a version by declaring it   
> explicitly in your project’s POM. Note that if two dependency versions are at the same depth in the dependency tree, until   
> Maven 2.0.4 it was not defined which one would win, but since Maven 2.0.5 it’s the order in the declaration that counts: the   
> first declaration wins.   
> “nearest definition” means that the version used will be the closest one to your project in the tree of dependencies, eg. if   
> dependencies for A, B, and C are defined as A -> B -> C -> D 2.0 and A -> E -> D 1.0, then D 1.0 will be used when building A   
> because the path from A to D through E is shorter. You could explicitly add a dependency to D 2.0 in A to force the use of D 2.0

## find out what the transitive dependencies are?

You can’t control what you do not know!

One that can be use during build stage or explicitly use on command line, is the maven plugin **maven-dependency-plugin**

```
<build>
    <plugins>
        <plugin>
            <groupId>org.apache.maven.plugins</groupId>
            <artifactId>maven-dependency-plugin</artifactId>
        </plugin>
    </plugins>
</build>
```

and then use the goal dependency:tree, so a typical build strategy could look like

```
mvn clean install dependency:tree 
```

or

```
mvn clean install dependency:list   (easier to tokenize in excel sheet)
```
So it look like

```
[INFO] [dependency:tree] 
[INFO] com.test:test:jar:0.0.1-SNAPSHOT 
[INFO] \- commons-jxpath:commons-jxpath:jar:1.2:compile 
[INFO]    +- xerces:xerces:jar:1.2.3:compile 
[INFO]    +- javax.servlet:servlet-api:jar:2.2:compile 
[INFO]    +- junit:junit:jar:3.8:compile 
[INFO]    +- ant:ant-optional:jar:1.5.1:compile 
[INFO]    +- xml-apis:xml-apis:jar:1.0.b2:compile 
[INFO]    +- jdom:jdom:jar:b9:compile 
[INFO]    +- commons-beanutils:commons-beanutils:jar:1.4:compile 
[INFO]    +- commons-logging:commons-logging:jar:1.0:compile 
[INFO]    \- commons-collections:commons-collections:jar:2.0:compile 
[INFO] [dependency:list] 
[INFO] 
[INFO] The following files have been resolved: 
[INFO]    ant:ant-optional:jar:1.5.1:compile 
[INFO]    commons-beanutils:commons-beanutils:jar:1.4:compile 
[INFO]    commons-collections:commons-collections:jar:2.0:compile 
[INFO]    commons-jxpath:commons-jxpath:jar:1.2:compile 
[INFO]    commons-logging:commons-logging:jar:1.0:compile 
[INFO]    javax.servlet:servlet-api:jar:2.2:compile 
[INFO]    jdom:jdom:jar:b9:compile 
[INFO]    junit:junit:jar:3.8:compile 
[INFO]    xerces:xerces:jar:1.2.3:compile 
[INFO]    xml-apis:xml-apis:jar:1.0.b2:compile
```

# With exclusions**

```
[dependency:tree] 
[INFO] com.test:test:jar:0.0.1-SNAPSHOT 
[INFO] \- commons-jxpath:commons-jxpath:jar:1.2:compile 
[INFO]    +- xerces:xerces:jar:1.2.3:compile 
[INFO]    +- javax.servlet:servlet-api:jar:2.2:compile 
[INFO]    +- ant:ant-optional:jar:1.5.1:compile 
[INFO]    +- xml-apis:xml-apis:jar:1.0.b2:compile 
[INFO]    +- jdom:jdom:jar:b9:compile 
[INFO]    +- commons-beanutils:commons-beanutils:jar:1.4:compile 
[INFO]    +- commons-logging:commons-logging:jar:1.0:compile 
[INFO]    \- commons-collections:commons-collections:jar:2.0:compile 
[INFO] [dependency:list] 
[INFO] 
[INFO] The following files have been resolved: 
[INFO]    ant:ant-optional:jar:1.5.1:compile 
[INFO]    commons-beanutils:commons-beanutils:jar:1.4:compile 
[INFO]    commons-collections:commons-collections:jar:2.0:compile 
[INFO]    commons-jxpath:commons-jxpath:jar:1.2:compile 
[INFO]    commons-logging:commons-logging:jar:1.0:compile 
[INFO]    javax.servlet:servlet-api:jar:2.2:compile 
[INFO]    jdom:jdom:jar:b9:compile 
[INFO]    xerces:xerces:jar:1.2.3:compile 
[INFO]    xml-apis:xml-apis:jar:1.0.b2:compile
```

[Maven Dependency Plugin](http://maven.apache.org/plugins/maven-dependency-plugin/)