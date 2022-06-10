---
id: 3522
title: 'Maven reusing test classes across multi modules projects'
date: '2008-07-18T22:14:44+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=3522'
permalink: /development/maven-reusing-test-classes-across-multi-modules-projects/
image: /wp-content/uploads/2008/07/mavenlogo2_thumb.gif
tags:
    - apache
    - java
    - maven
---

Maven clearly differentiate “productive code” in each module src/main/\* from unit test code in src/test/\*.   
In a typical multi-module projects like the one below:

```
componentA
|
|-moduleA
|         /src/main/java
|         /src/main/resources
|         /src/test/java
|         /src/test/resources
|-moduleB
|         /src/main/java 
|         /src/main/resources
|         /src/test/java
|         /src/test/resources
```

Note1: #Eclipse do not support multi module project as only one level of code sharing is allowed. So we have   
3 eclipse projects/maven projects with a pom.xml:

- componentA with a packaging pom, and 2 module aggregated
- moduleA, parent is ../componentA/pom.xml
- moduleB parent is ../componentA/pom.xml

Note2: eclipse has only one Class Loader, meaning that code in /src/main/java and /src/test/java is also exported   
as dependencies between modules, while in #Maven, code is not shared!

So as default by adding a dependencies in moduleB/pom.xml to moduleA, you’ll only inherit moduleA src/main/java   
and src/main/resources

```
<dependency>
    <groupId>com.waltercedric.maven</groupId>
    <groupId>modulesA</groupId>
</dependency>
```

But what if you have some test API classes in modulesA? trying to add also moduleA in scope test wont help you any further:

```
<dependencies>
    <dependency>
        <groupId>com.waltercedric.maven</groupId>
        <artifactId>modulesA</artifactId>
    </dependency>
    <dependency> <!-- do not work! -->
        <groupId>com.waltercedric.maven</groupId>
        <artifactId>modulesA</artifactId>
        <scope>test</scope>
    </dependency>
</dependencies>
```

This is exactly where artifact classifier may help you, but lets first look at the artifact naming convention.

### artifact name = {name/artifactId}-{version}-{classifier}.{extension}

Maven is also introducing some conventions:

-> name is most of the time the artifactId   
-> version being the version number of the artifact, simply don’t use something containing SNAPSHOTS   
 in it as it is considered being non stable by some plugin (maven-release-plugin for example)   
-> classifier is either

- empty like for ex: jaxb-1.2.jar and then it will contains the binary package of the library jaxb
- source like for ex: jaxb-1.2-source.jar
- javadoc like for ex: jaxb-1.2-javadoc.jar
- but it can be anything! as it just classify an artifact, but don’t use it in place where an artifact could   
    have been use, a classifier proxy/stub is not recommended: make a module of it instead. You must see   
    classifier more as a way to categorize artifact in a module.

You’ll find a lot of artifact across Internet not following these guidelines, this is not an issue as Maven repositories are   
able to search for pom.properties or project.xml or pom.xml in jar if they exist and use the right <span style="font-family: Courier;"><groupId> and   
<artifactId>

Back to code reuse of test classes across modules, the trick is to tell maven to make a jar of every module test code so   
you can depend on it in others modules.

a normal build of componentA, would create:

```
# /componentA/mvn clean install
/.m2/repository/com/waltercedric/maven/moduleA/0.0.1.SNAPSHOTS/moduleA-0.0.1.SNAPSHOTS.jar 
/.m2/repository/com/waltercedric/maven/moduleB/0.0.1.SNAPSHOTS/moduleB-0.0.1.SNAPSHOTS.jar
```

where by just adding to componentA/pom.xml the following inside the <build></build>:

```
<!--  this create jar file of code from src/test/java so modules with tests can share code -->
<plugin>
    <groupId>org.apache.maven.plugins</groupId>
    <artifactId>maven-jar-plugin</artifactId>
    <executions>
        <execution>
            <goals>
                <goal>test-jar</goal>
            </goals>
        </execution>
    </executions>
</plugin>
```

running a

```
# /componentA/mvn clean install
/.m2/repository/com/waltercedric/maven/moduleA/0.0.1.SNAPSHOTS/moduleA-0.0.1.SNAPSHOTS.jar 
/.m2/repository/com/waltercedric/maven/moduleA/0.0.1.SNAPSHOTS/moduleA-0.0.1.SNAPSHOTS-tests.jar 
/.m2/repository/com/waltercedric/maven/moduleB/0.0.1.SNAPSHOTS/moduleB-0.0.1.SNAPSHOTS.jar 
/.m2/repository/com/waltercedric/maven/moduleB/0.0.1.SNAPSHOTS/moduleB-0.0.1.SNAPSHOTS-tests.jar
```

Maven now create new artifacts moduleA-0.0.1.SNAPSHOTS-tests.jar!

So you can now add a dependencies in moduleB/pom.xml to moduleA in scope test with a tests classifier

```
<dependencies>
    <dependency> <!-- reuse src/main/java code from moduleA, normal dependencies -->
        <groupId>com.waltercedric.maven</groupId>
        <artifactId>modulesA</artifactId>
    </dependency>
    <dependency> <!-- reuse src/test/java code from moduleA! -->
        <groupId>com.waltercedric.maven</groupId>
        <artifactId>modulesA</artifactId>
        <scope>test</scope>
        <classifier>tests</classifier>
    </dependency>
</dependencies>
```

<style type="text/css">   .csharpcode, .csharpcode pre { 	font-size: small; 	color: black; 	font-family: consolas, "Courier New", courier, monospace; 	background-color: #ffffff; 	/*white-space: pre;*/ } .csharpcode pre { margin: 0em; } .csharpcode .rem { color: #008000; } .csharpcode .kwrd { color: #0000ff; } .csharpcode .str { color: #006080; } .csharpcode .op { color: #0000c0; } .csharpcode .preproc { color: #cc6633; } .csharpcode .asp { background-color: #ffff00; } .csharpcode .html { color: #800000; } .csharpcode .attr { color: #ff0000; } .csharpcode .alt  { 	background-color: #f4f4f4; 	width: 100%; 	margin: 0em; } .csharpcode .lnum { color: #606060; }</style>

You can now share test code across module.