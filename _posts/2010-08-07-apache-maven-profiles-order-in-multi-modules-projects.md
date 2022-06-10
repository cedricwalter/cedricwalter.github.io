---
id: 5685
title: 'Apache Maven profiles order in multi modules projects'
date: '2010-08-07T17:27:10+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=5685'
permalink: /development/apache-maven-profiles-order-in-multi-modules-projects/
image: /wp-content/uploads/2011/11/maven-logo-black-on-white-1.png
tags:
    - apache
    - box
    - building
    - chances
    - ci/cd
    - clear
    - code
    - concepts
    - continuous
    - copy
    - create
    - created
    - database
    - HowTo
    - java
    - maven
    - tutorial
---

In which order are [Apache #Maven](http://maven.apache.org/) profiles executed? are [Apache #Maven](http://maven.apache.org/) profiles ordered? how can you insured that [Apache #Maven](http://maven.apache.org/) profiles are activated in the right order?

You normally don’t end up with these questions, issues may only appear if

- Some profiles are dependent each other,
- Some profiles can not run in any order,

The use case behind this article is very simple, as I have a a continuous build were:

- 5 web applications have to be deployed into a remote tomcat in phase **pre-integration-test**,
- 2 databases are created for test cases in phase **generate-test-resources**
- 1 more database is created and needed for runtime, done in phase **pre-integration-test**
- One of these web applications is able to inject data into database using web services, a profile do this in a profile in phase **pre-integration-test**
- Selenium test cases are run in phase **integration-test**

All these steps are done using several [Apache #Maven](http://maven.apache.org/) pom profiles.

As it is a bit complicated to explain, lets first refresh some [Apache #Maven](http://maven.apache.org/) concepts

### Apache Maven Goals

First you’ll have to keep in the mind [Apache Maven](http://maven.apache.org/) lifecycle of modules, 21 goals out of the box:

- **Validate**: validate the project is correct and all necessary information is available
- **generate**–**sources**: generate any source code for inclusion in compilation
- **process**–**sources**: process the source code, for example to filter any values
- **generate**–**resources**: generate resources for inclusion in the package
- **process**–**resources**: copy and process the resources into the destination directory, ready for packaging
- **compile**: compile the source code of the project
- **process**–**classes**: post-process the generated files from compilation, for example to do byte code enhancement on Java classes
- **generate**–**test-sources**: generate any test source code for inclusion in compilation
- **process-test-sources**: process the test source code, for example to filter any values
- **generate-test-resources** : create resources for testing
- **process-test-resources**: copy and process the resources into the test destination directory
- **test-compile**: compile the test source code into the test destination directory
- **test**: run tests using a suitable unit testing framework. These tests should not require the code be packaged or deployed
- **prepare-package**: perform any operations necessary to prepare a package before the actual packaging. This often results in an unpacked, processed version of the package   
    **package** take the compiled code and package it in its distributable format, such as a JAR   
    **pre-integration-test**: perform actions required before integration tests are executed. This may involve things such as setting up the required environment
- **integration-test**: process and deploy the package if necessary into an environment where integration tests can be run (selenium test cases for example)   
    **post-integration-test:** perform actions required after integration tests have been executed. This may including cleaning up the environment
- **verify** run any checks to verify the package is valid and meets quality criteria
- **install** install the package into the local repository, for use as a dependency in other projects locally
- **deploy** code is deployed in artifactory or copied with ftp/scp for distribution

if you run the goal compile

> mvn compile

on a simple multi module project, EVERY modules, one after the others, will go through these phases   
**validate** –> **generate**–**sources –> **process**–**sources** –> **generate**–**resources** –> **process**–**resources –> **compile******

### Apache Maven reactor

The reactor is the part of [Apache Maven](http://maven.apache.org/) that allows to execute a goal on a set of modules. As mentioned in the [Apache Maven](http://maven.apache.org/) 1.x [documentation on multi-modules builds](http://maven.apache.org/maven-1.x/using/multiproject.html), while modules are discreet unit of work, they can be gathered together using the reactor to build them simultaneously and:

> The reactor determines the correct build order from the dependencies stated by each project in their respective project descriptors, and will then execute a stated set of goals. It can be used for both building projects and other goals, such as site generation.

The reactor is what makes multi-modules build possible: it computes the oriented graph of dependencies between modules, derive the build order from this graph and then execute goals on the modules. In other words, a “*multi-modules build*” is a “*reactor build*” and a “*reactor build*” is a “*multi-modules build*“.

- A [reactor plugin](http://maven.apache.org/plugins/maven-reactor-plugin/) has been created to make it possible to interact more closely with the Maven reactor.
- [Reactor: My New Favourite Maven Plugin](http://brettporter.wordpress.com/2008/09/19/reactor-my-new-favourite-maven-plugin/).
- [Maven Tips and Tricks: Advanced Reactor Options](http://www.sonatype.com/people/2009/10/maven-tips-and-tricks-advanced-reactor-options/).

### A simple multi modules project

For the sake of the exmaple, it has modules and profiles dependencies, in myProject/pom.xml

```
remoting
web
monitoring
common
services
```

or if you prefer the directory layout

```
myProject
    |_ pom.xml
    |_common
    |_src
    |_pom.xml
    |_ web
    |_src
    |_pom.xml
    |_ remoting
    |_src
    |_pom.xml
    |_ services
    |_src
    |_pom.xml
    |_ web
    |_src
    |_pom.xml
```

Lets assume also I would like to apply a list of profiles named

- deployWeb, deploy the war module using cargo to a running tomcat instance
- createDatabase, create a mysql database from scratch
- runSelenium, run selenium test in phase integration test against web, assume database is created first
- deployMonitoring, deploy the war module using cargo to a running tomcat instance, query the web at startup to get some infos.

Maven calculate the module order in reactor based on dependencies, as seen in logs file after running

> mvn compile

```
[INFO] Reactor build order:  Unnamed 
- com.waltercedric:myproject:pom:0.0.1-SNAPSHOT Unnamed 
- com.waltercedric:common:jar:0.0.1-SNAPSHOT Unnamed 
- com.waltercedric:services:jar:0.0.1-SNAPSHOT Unnamed 
- com.waltercedric:remoting:ear:0.0.1-SNAPSHOT Unnamed 
- com.waltercedric:web:war:0.0.1-SNAPSHOT Unnamed 
- com.waltercedric:monitoring:war:0.0.1-SNAPSHOT 
```

## Example

It start to be complicated when you provide a list of profile using [Apache Maven](http://maven.apache.org/) command line like this

```
mvn post-integration-test –PdeployWeb,createDatabase,runSelenium,deployMonitoring
```

**Chances are high** that you will get profile executed in wrong order, too early or too late..

## Rule #1 profiles are activated (if found) following reactor modules order

The first rule is that profiles are activated in module reactor order first, if myProject is first it will go through all 18 phases of [Apache Maven](http://maven.apache.org/) (from **validate** to **post-integration-test in my example**). Keep in mind also that the list of profiles will be applied to EVERY modules in EVERY phase starting at the top most module in reactor.

- On modules myproject: 
    - [Apache Maven](http://maven.apache.org/) will activate profiles PdeployWeb,createDatabase,runSelenium,deployMonitoring if one or more in the list are present in myproject/pom.xml
- On modules *common*, 
    - [Apache Maven](http://maven.apache.org/) will activate profiles PdeployWeb,createDatabase,runSelenium,deployMonitoring if one or more in the list are present in common/pom.xml
- and so on….

## Rule #2 Reactor modules order “may” be changed

And now the tricky part, you can normally NOT change the module order in reactor, that’s ok but….

The order you define in myProject/pom.xml for (=module aggregation) is still kept if the maven dependencies resolver don’t see any problems

Not clear enough? look at the 2 examples below:

| **myProject/pom.xml** | **mvn post-integration-test    Reactor build order (seen in logs)** | **Remarks** |
|---|---|---|
| remoting    **web    monitoring**    common    services | 1. myProject 2. common 3. services 4. remoting 5. **web** 6. **monitoring** | Maven adapt the order based on oriented graph of dependencies between modules. |
| remoting    **monitoring    web**    common    services | 1. myProject 2. common 3. services 4. remoting 5. **monitoring** 6. **web** | Swapping module having no direct connections each others and having no conflicting dependencies to other may result in a different order in reactor!!!! and also different profile execution order. |

Since [Apache Maven](http://maven.apache.org/) has detected that the module monitoring and web have no connections, it accept the “human/natural” order found in myproject/pom.xml.

You may have to use this technique to distribute your profiles in pom.xml while still keeping the profile order execution under control.

## Rule #3 Maven profile order is not taken from command line

The order of profile in the [Apache Maven](http://maven.apache.org/) command line –P list is not taken into account, running the expected profiles order

```
mvn post-integration-test –PdeployWeb,createDatabase,runSelenium,deployMonitoring
```

is equivalent to

```
mvn post-integration-test –PcreateDatabase,deployMonitoring, deployWeb,runSelenium
```

It is a good things, as it simply make no sense across all modules and all Maven phase all combined together.

## Rule #4 You can force profiles to run in an order if you SORT them accordingly into ONE pom.xml

[Apache Maven](http://maven.apache.org/) recommend to place profiles into the module where they are acting.

If I want to insure that profiles deployWeb, createDatabase are run before the profiles runSelenium you have to keep that order in the pom.xml even if these profiles are acting in different Maven phase

- createDatabase may run in phase **generate-test-resources**
- deployWeb run in phase **pre-integration-test**
- runSelenium run in phase **integration-test**

Considering the module ordering in reactor, a good pom.xml candidate could be web/pom.xml like this

```
   createDatabase 
      deployWeb 
      runSelenium 
```

## References

http://maven.apache.org/pom.html#Profiles 