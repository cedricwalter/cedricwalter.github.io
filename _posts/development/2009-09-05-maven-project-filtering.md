---

title: 'Maven project filtering'
date: '2009-09-05T13:43:23+02:00'
author: 'Cédric Walter'



tags:
    - apache
    - HowTo
    - maven
---

Depending on your project requirements/number of customers, you may have to support different target environment. This article will help you to make your #Maven build a bit more portable in that sense. [Maven](http://maven.apache.org/) can help you avoiding having stage dependent data across all your [Maven](http://maven.apache.org/) projects/ modules very easily thanks to **[resources filtering](http://maven.apache.org/plugins/maven-resources-plugin/examples/filter.html)**.

Let’s imagine you want to build your software against many different runtime stack:

- One is against your developer environment: eclipse, Tomcat, Mysql
- One is running in a server with Tomcat, Mysql.
- One is running in JBOSS

And that your software is somehow configurable, can be through properties files, xml files, environment variables. Some of your configurations files are containing data that are depending on runtime (paths, password, login, connection settings to database, profiling/tuning settings)

### Some 

#### Rules 1 you can’t filter pom.xml use profile keys

if you have stage specific values pair key (login/password/paths) in pom.xml, you have to

- use key/value pair properties in pom.xml (between <properties></properties>) or
- use key/value pair properties that you override in pom.xml/settings.xml profiles or
- use environment variables (not very efficient by the way and messy if you have too many)

#### Rules 2 you can filter resources

If you have stage specific values pair key (login/password/paths) in resources located at

- src/main/ressources
- src/test/resources
- src/main/webapps
- Anywhere else depending on your module [archetype](http://maven.apache.org/plugins/maven-archetype-plugin/) (an archetype is an helper to create a standardized [Maven](http://maven.apache.org/) module)

Then [Maven](http://maven.apache.org/) filtering is the solution for your issues.

#### Rules 3 profiles at rescue for new runtime

Profiles can be defined in settings.xml or pom.xml. [Maven](http://maven.apache.org/) has a very good documentation online HERE. Never forget that many profiles can be active at a time, either because you want it (start build with –P profilename1, profilename2) or based on external conditions (can be OS, path, existence/absence of files, etc..)

#### Rules 4 Learn the hard way

ATTENTION: resources in module with packaging pom are not filtered nor copied to target directories. Don’t use src/main/resources in modules with packaging pom as it wont be copied and filtered to /target

### Tell Maven what to filter

In order to use filters you must specify a resource directory and set filtering to true. The remaining elements are not required. Activate filtering for all files found in /src/main/resources. All files which contains the denotation ${some.property.name} will be replaced by the building property value defined in <properties></properties>

Warning: Do not filter files with binary content like images, PDF, ZIP, GIF, JPG: This will most likely result in corrupt output. If you have both text files and binary files as resources, you need to declare two mutually exclusive resource sets.

Notes

- Resources filtering definition has to be place between <build> and </build> , If you have a [Maven](http://maven.apache.org/) project and a parent pom, it may belong to that particular pom.xml in order to avoid redundant definitions in all child pom.
- if you want to filter all \*.xxx files at any level in directory hierarchy you need both \*.xxx (current level) and \*\*/\*.xxx (any level deeper)
- The first resource set defines the files to be filtered and the other resource set defines the files to copy unaltered as illustrated below:

```
<resources>
    <resource>
        <directory>src/main/resources</directory>
        <filtering>true</filtering>
        <includes>
            <include>*.properties</include>
            <include>*.xml</include>
            <include>**/*.xml</include>
            <include>**/*.properties</include>
        </includes>
    </resource>
    <resource>
        <directory>src/main/resources</directory>
        <filtering>false</filtering>
        <excludes>
            <exclude>*.properties</exclude>
            <exclude>*.xml</exclude>
            <exclude>**/*.xml</exclude>
            <exclude>**/*.properties</exclude>
        </excludes>
    </resource>
    <resource>
        <directory>src/main/webapp/WEB-INF</directory>
        <filtering>true</filtering>
        <includes>
            <include>*.properties</include>
            <include>*.xml</include>
            <include>**/*.xml</include>
            <include>**/*.properties</include>
        </includes>
    </resource>
    <resource>
        <directory>src/main/webapp/WEB-INF</directory>
        <filtering>false</filtering>
        <excludes>
            <exclude>*.properties</exclude>
            <exclude>*.xml</exclude>
            <exclude>**/*.xml</exclude>
            <exclude>**/*.properties</exclude>
        </excludes>
    </resource>
</resources>
<testResources>
<testResource>
    <directory>src/test/resources</directory>
    <filtering>true</filtering>
    <includes>
        <include>*.properties</include>
        <include>*.xml</include>
        <include>**/*.xml</include>
        <include>**/*.properties</include>
    </includes>
</testResource>
<testResource>
    <directory>src/test/resources</directory>
    <filtering>false</filtering>
    <excludes>
        <exclude>*.properties</exclude>
        <exclude>*.xml</exclude>
        <exclude>**/*.xml</exclude>
        <exclude>**/*.properties</exclude>
    </excludes>
</testResource>
</testResources>
```

With the above configuration, we tell [Maven](http://maven.apache.org/) that any files .xml, .properties files has to be processed and filtered.

### Give filter definitions to Maven

[Maven](http://maven.apache.org/) let you define N filters per modules as default: you can have different filters for every pom.xml. This may create some management issues. You can still decide to use one file (per runtime stack, or per profile) but you’ll have to use an absolute path to it.

You can add a filters in your parent pom.xml by adding, I name these filter static, as they exist or not. You can also define dynamic filer in profile: the profile is active, the filter is added.

```
<filters> 
  <filter>${filter1}</filter> 
  <filter>${filter2}</filter> 
  <filter>${filter3}</filter> 
 </filters>
```

<filter> should be a file, usually a properties file that contains key/values pair that will be replaced at runtime.

Note here that in order to be able to build against different target runtime, I do use a profile key/value pair properties

### Using Maven profiles to target multiple runtime environment

Definition and motivation of using profiles

> *Maven 2.0 goes to great lengths to ensure that builds are portable. Among other things, this means allowing build configuration inside the POM, avoiding **all** file system references (in inheritance, dependencies, and other places), and leaning much more heavily on the local repository to store the metadata needed to make this possible.*
> 
> *However, sometimes portability is not entirely possible. Under certain conditions, plugin may need to be configured with local file system paths. Under other circumstances, a slightly different dependency set will be required, and the project’s artifact name may need to be adjusted slightly. And at still other times, you may even need to include a whole plugin in the build lifecycle depending on the detected build environment.*
> 
> *To address these circumstances, Maven 2.0 introduces the concept of a build profile. Profiles are specified using a subset of the elements available in the POM itself (plus one extra section), and are triggered in any of a variety of ways. They modify the POM at build time, and are meant to be used in complementary sets to give equivalent-but-different parameters for a set of target environments (providing, for example, the path of the app server root in the development, testing, and production environments). As such, profiles can easily lead to differing build results from different members of your team. However, used properly, profiles can be used while still preserving project portability. This will also minimize the use of <tt>-f</tt> option of maven which allows user to create another POM with different parameters or configuration to build which makes it more maintainable since it is running with one POM only.* \[from <http://maven.apache.org/

In eclipse, you may want also to run your application against a simplified stack, for example by using Tomcat/Mysql. I propose you a strategy that should be able to target many runtime.

First I replace all specific values through my application with keys ${aaaa.bbb.ccc} you determine the value of aaaa and bbb an ccc if you want to categorize them, but nothing stop you to just use ${aaa}

examples:

- ${database.mysql.url}
- ${log4j.default.level} but it can be also only
- ${log4jdefaultlevel}

I create

- a file in my [Maven](http://maven.apache.org/) project at /etc/filter/eclipse.properties, I populate this file with keys/values that I use across all my configurations files in my application.
- another file at /etc/filter/common.properties, I populate this file with keys/values that are independent of the runtime: can be logging information, timeout, etc..
- another file at /etc/filter/jboss.properties, it contains all specific keys/values pair for that stage.

You will have to put keys and their values to have the following valid configurations

- common.properties + jboss.properties –> replace all keys and make your application work in Jboss
- common.properties + eclipse.properties –> replace all keys and make your application work in eclipse

I now define in settings.xml the following profiles

- id “Common” that will be always active, it make sense to have a common filter for all runtime or stack as long as you only put common key/values pair. The key ${filter1} has the value /etc/filter/common.properties
- id “Eclipse” that will be active only If I detect an eclipse environment, the key ${filter2} has the value /etc/filter/eclipse.properties
- id “Jboss” that will be not active as default, it will contains a properties key ${filter2} has the value /etc/filter/jboss.properties

Lets look at the profile “common” in your globals settings.xml (you can also add it to your pom.xml)

```
<profile>
    <id>common</id>
    <activation>
        <activeByDefault>true</activeByDefault>
    </activation>
    <properties>
        <filter1>${basedir}/etc/filter/common.properties</filter1>
    </properties>
</profile>
```

It define the filter1 and is always active

The “eclipse” profile, only active when eclipse.exe is detected activate another filter

```
<profile>
    <id>eclipse</id>
    <activation>
        <file>
            <exists>c:\eclipse\eclipse.exe</exists>
        </file>
    </activation>
    <properties>
        <filter2>${basedir}/etc/filter/eclipse.properties</filter2>
    </properties>
</profile>
```

Note that the above filters are using ${basedir} reserved property, this is replaced by maven by the current artificatid (or module), so with the example above, you will have to create an etc/filter in all your modules (if you have a multi module setup). If you want to avoid this, you will have to use an absolute path instead of ${basedir}

The Jboss profile use the same principle as the “eclipse” profile, detect a file or a hostname (jbossbuildagent)

### Make this run in Teamcity/Hudson/Bamboo

If you activate your profile based on activation settings, you will have nothing to do. If some of your profiles are not activated as default, don’t forget to add a –P profilename1, profilename2, .. in your maven goals list.

## References

- <http://maven.apache.org/>
- [http://maven.apache.org/
- <http://maven.apache.org/