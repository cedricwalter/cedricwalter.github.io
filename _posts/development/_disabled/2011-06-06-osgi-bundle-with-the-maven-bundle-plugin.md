---

title: 'OSGi-Bundle with the Maven-Bundle-Plugin'
date: '2011-06-06T21:45:17+02:00'
author: 'Cédric Walter'



header:
  teaser: /assets/images/2011/11/maven-logo-black-on-white-1.png
tags:
    - apache
    - architecture
    - configuration
    - console
    - core
    - create
    - dependencies
    - dependency
    - disk
    - documentation
    - Download
    - eclipse
    - example
    - extensions
    - files
    - HowTo
    - java
    - maven
    - tutorial
---

OSGi (Open Service Gateway Initiative) is a #Java framework for developing and deploying modular software programs and libraries.OSGi has two parts. The first part is a specification for modular components called bundles, which are commonly referred to as plug-ins. The specification defines an infrastructure for a bundle’s life cycle and determines how bundles will interact. The second part of OSGi is a #Java Virtual Machine (JVM)-level service registry that bundles can use to publish, discover and [bind](http://whatis.techtarget.com/definition/0,,sid9_gci211662,00.html) to services in a service-oriented architecture (SOA).

In this small post, I will show you how to make your first OSGi bundle using the [Bundle Plugin for #Maven from Apache Felix](http://felix.apache.org/site/apache-felix-maven-bundle-plugin-bnd.html)

Create a new Eclipse project name osgitest with the standard structure and create a new Java file in src/main/java/com.waltercedric.osgi.Activator.java

```java
package com.waltercedric.osgi; 
import org.osgi.framework.BundleActivator;
import org.osgi.framework.BundleContext; 

public class Activator implements BundleActivator { 

public void start( BundleContext context ) throws Exception { System.out.println(
  context.getBundle().getSymbolicName() + " has started" ); 
} 

public void stop( BundleContext context ) throws Exception 
{ 
 System.out.println(context.getBundle().getSymbolicName() + " is stopped" ); } 
}
```

Now add to the pom.xml the configuration example for the maven-bundle-plugin

```xml
<project>
    <modelVersion>4.0.0</modelVersion>
    <groupId>com.waltercedric</groupId>
    <artifactId>osgitest</artifactId>
    <version>0.1.0-SNAPSHOT</version>
    <packaging>bundle</packaging>
    <build>
        <plugins>
            <plugin>
                <groupId>org.apache.felix</groupId>
                <artifactId>maven-bundle-plugin</artifactId>
                <version>2.3.4</version>
                <extensions>true</extensions>
                <configuration>
                    <instructions>
                        <Private-Package>com.waltercedric.*</Private-Package>
                        <Bundle-Activator>com.waltercedric.Activator</Bundle-Activator>
                    </instructions>
                </configuration>
            </plugin>
        </plugins>
    </build>
    <dependencies>
        <dependency>
            <groupId>org.apache.felix</groupId>
            <artifactId>org.osgi.core</artifactId>
            <version>1.4.0</version>
        </dependency>
    </dependencies>
</project>
```

The documentation of the maven plugin of Apache Felix is located at <http://felix.apache.org/site/apache-felix-maven-bundle-plugin-bnd.html>

You need a OSGi runtime, you can use the one shipped by [Eclipse in Equinox](http://download.eclipse.org/equinox/) (search for files [org.eclipse.osgi](http://search.maven.org/remotecontent?filepath=org/sonatype/tycho/org.eclipse.osgi/3.6.2.R36x_v20110210/org.eclipse.osgi-3.6.2.R36x_v20110210.jar)\* on your disk )or download this one from Maven Central: [org.eclipse.osgi-3.6.2.R36x\_v20110210.jar](http://search.maven.org/remotecontent?filepath=org/sonatype/tycho/org.eclipse.osgi/3.6.2.R36x_v20110210/org.eclipse.osgi-3.6.2.R36x_v20110210.jar)

Now run in a command line or better in a [Maven Shell](http://shell.sonatype.org/)

```bash
mvn package  java -jar org.eclipse.osgi_3.6.2.R36x_v20110210.jar -console -clean
```

Now lets install and start our OSGI bundle

```bash
osgi> install file:target\osgitest-0.1.0-SNAPSHOT.jar start Bundle id is 1 com.waltercedric.osgitest: has started osgi> ss    id   State    Bundle     0   ACTIVE   org.eclipse.osgi_3.6.2.R36x_v20110210     1   ACTIVE   com.waltercedric.osgitest_0.1.0.SNAPSHOT osgi> uninstall 1 com.waltercedric.osgitest: is stopped osgi> close
```

# Links

- [WikiPedia OSGi](http://en.wikipedia.org/wiki/OSGi)
- [OSGi Alliance community](http://www.osgi.org)
- [Apache Maven Bundle Plugin](http://felix.apache.org/site/apache-felix-maven-bundle-plugin-bnd.html)