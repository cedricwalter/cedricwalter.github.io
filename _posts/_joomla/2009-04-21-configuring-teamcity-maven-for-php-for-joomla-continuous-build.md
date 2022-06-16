---

title: 'Configuring TeamCity, Maven for PHP for Joomla continuous build'
date: '2009-04-21T21:31:34+02:00'
author: 'Cédric Walter'



tags:
    - apache
    - ci/cd
    - eclipse
    - HowTo
    - idea
    - java
    - maven
    - php
---

Maven for PHP uses the power of #Maven for building, reporting on and creating documentations of PHP projects. It adapts the #Maven build lifecycle to the PHP world while fully supporting PHP 4 and PHP 5. PHP for #Maven uses [PHPUnit ](http://www.phpunit.de/)for unit testing and [doxygen ](http://www.stack.nl/%7Edimitri/doxygen/)for creating the api documentation.   
Use a PHP library project to create a library that can be used by other PHP libraries or PHP web projects. Use a PHP web project to create a standalone web project.

So I quickly describe what I did install on my root server (OpenSuse 11.X)

- [Maven 2](http://maven.apache.org)
- [php](http://www.php.net) not an issue on a linux box, zypper in php5 or apt-get to install php
- [doxygen](http://www.php.net)
- [phpdocumentor](http://www.phpdoc.org/)

My Objectives: being able to build all my #Joomla! component using [best agile development practices](http://en.wikipedia.org/wiki/Agile_software_development)

> “Specific tools and techniques such as [continuous integration](http://en.wikipedia.org/wiki/Continuous_integration), automated or [xUnit test](http://en.wikipedia.org/wiki/XUnit), [pair programming](http://en.wikipedia.org/wiki/Pair_programming), [test driven development](http://en.wikipedia.org/wiki/Test_driven_development), [design patterns](http://en.wikipedia.org/wiki/Design_pattern_%28computer_science%29), [domain-driven design](http://en.wikipedia.org/wiki/Domain-driven_design), [code refactoring](http://en.wikipedia.org/wiki/Refactoring) and other techniques are often used to improve quality and enhance project agility.”

## Maven

While not needed as [TeamCity](http://www.jetbrains.com/teamcity/) has an integrated Maven engine, I would like to use an external MAVEN version, in order to have the latest version and living dangerously on the edge!

So I download

```
# wget http://apache.mirror.testserver.li/maven/binaries/apache-maven-2.1.0-bin.tar.gz
```

And unpack

```
# tar xvf apache-maven-2.1.0-bin.tar.gz
```

Since I would like to avoid having a version number in my configuration build path, I create a symlink

```
# ln -s apache-maven-2.1.0 maven
```

I just now tell [TeamCity](http://www.jetbrains.com/teamcity/) to use my own Maven version, by specifying the Maven Home Path

## phpDocumentor

> [phpDocumentor](http://www.phpdoc.org/) is an open source documentation generator written in PHP. It automatically parses PHP source code and produces readable API and source code documentation in a variety of formats. [phpDocumentor](http://www.phpdoc.org/) generates documentation based on PHPDoc-formatted comments and the structure of the source code itself. It supports documentation of both object-oriented and procedural code. [phpDocumentor](http://www.phpdoc.org/) can create documentation in HTML, PDF, CHM or Docbook formats.

Can be installed using PEAR, simply run

```
# pear upgrade PhpDocumentor 
downloading PhpDocumentor-1.4.2.tgz ... 
Starting to download PhpDocumentor-1.4.2.tgz (2,421,028 bytes) 
..............................................................................done: 2,421,028 bytes 
upgrade ok: channel://pear.php.net/PhpDocumentor-1.4.2
```

## PHPUnit

> [PHPUnit](http://www.phpunit.de/) is a unit testing framework for the PHP programming language. Created by Sebastian Bergmann, [PHPUnit](http://www.phpunit.de/) is one of the xUnit family of frameworks that originated with Kent Beck’s SUnit.

Can be installed using PEAR, simply run

```
# pear upgrade PHPunit
```

## DOxygen

> Doxygen is a documentation generator for C++, C, Java, Objective-C, Python, IDL (Corba and Microsoft flavors), Fortran, VHDL, PHP, C#, and to some extent D. It runs on most Unix-like systems, including Mac OS X, as well as on Windows. The first version of Doxygen borrowed some code of an old version of DOC++; later, the Doxygen code was rewritten by Dimitri van Heesch. from <cite>[www.doxygen.org](http://www.doxygen.org)</cite>
> 
> <cite>[www.doxygen.org](http://www.doxygen.org)</cite>

```
# zypper se doxy 
Lese installierte Pakete...
S | Name       | Zusammenfassung                                    | Typ  
--+------------+----------------------------------------------------+------ 
  | doxygen    | Automated C, C++, and Java Documentation Generator | Paket 
  | doxywizard | Graphical User Interface for Doxygen               | Paket 

# zypper in doxygen
Herunterladen von Paket doxygen-1.5.5-17.1.x86_64 (1/1), 2,3 M (6,2 M installiert) 
Lade herunter: doxygen-1.5.5-17.1.x86_64.rpm [fertig]  
Installiere: doxygen-1.5.5-17.1 [fertig]
```

## Artifactory

Prepare [Artifactory](http://www.jfrog.org/index.php) by adding new Maven for PHP repositories

At <http://maven.waltercedric.com/artifactory/webapp/repositoryconfig.html>

As Admin user (you cant go to that links without being an admin!), add 2 new repositories

- 
- 

### In Maven settings.xml

In order to use [Artifactory](http://www.jfrog.org/index.php) at his best (proxy and caching of remote repositories), I have a Maven settings.xml that contains ONLY

```
# vi /home/teamcity/.m2/settings.xml
```

content

```
<settings>
    <activeProfiles>
        <activeProfile>cedric-profile</activeProfile>
    </activeProfiles>

    <profiles>
        <profile>
            <id>cedric-profile</id>
            <activation>
                <activeByDefault>true</activeByDefault>
            </activation>
            <repositories>
                <repository>
                    <id>central</id>
                    <url>http://maven.waltercedric.com/artifactory/repo/</url>
                    <snapshots>
                        <enabled>false</enabled>
                    </snapshots>
                </repository>
                <repository>
                    <id>snapshots</id>
                    <url>http://maven.waltercedric.com/artifactory/repo/</url>
                    <releases>
                        <enabled>false</enabled>
                    </releases>
                </repository>
            </repositories>
            <pluginRepositories>
                <pluginRepository>
                    <id>central</id>
                    <url>http://maven.waltercedric.com/artifactory/plugins-releases/</url>
                    <snapshots>
                        <enabled>false</enabled>
                    </snapshots>
                </pluginRepository>
                <pluginRepository>
                    <id>snapshots</id>
                    <url>http://maven.waltercedric.com/artifactory/plugins-snapshots/</url>
                    <releases>
                        <enabled>false</enabled>
                    </releases>
                </pluginRepository>
            </pluginRepositories>
        </profile>
    </profiles>
</settings>
```

Attention: [Artifactory](http://www.jfrog.org/index.php) WIKI tell to use <http://maven.waltercedric.com/artifactory/plugins-releases> and not [http://maven.waltercedric.com/artifactory/plugins-releases](http://maven.waltercedric.com/artifactory/plugins-releases/)[/](http://maven.waltercedric.com/artifactory/plugins-releases/) on my HOST with mod\_proxy it made an error 404 If I do not add a slash at the end. Try with your host before, you will gain a lot of time by checking if the URL is valid!

Note that [http://url:port/artifactory/repo/](http://urlport) is a virtual repositories that proxy all external repositories

## Eclipse

Use [SolarJoomla](component/tag/solarjoomla.html) (hopefully to be distributed this week) to have a running Eclipse, PDT, Maven 4 PHP environment, Mylyn, TeamCity in no time

## Lets build!

First I create a new Maven Project with Archetype “Maven for PHP” “PHP5 libraries”

In TeamCity I did create a new project “[Joomla 15 components plugins and modules](http://teamcity.waltercedric.com/project.html?projectId=project3)” and a new Build “[MyGuestbook](http://teamcity.waltercedric.com/viewType.html?buildTypeId=bt3&tab=buildTypeStatusDiv)”.

The first build failed with

*\[INFO\]*  *PHP Warning: require\_once(PHPUnit/TextUI/TestRunner.php): failed to open stream: Operation not permitted*

*This is because of my PHP security restrictions, I only allow file to be opened from /home/teamcity/*

*So I just add*

```
/home/teamcity/TeamCity/buildAgent/ to my open_basedir in my php.ini

; open_basedir, if set, limits all file operations to the defined directory 
; and below.  This directive makes most sense if used in a per-directory 
; or per-virtualhost web server configuration file. This directive is 
; *NOT* affected by whether Safe Mode is turned On or Off. 
open_basedir = /srv/www/vhosts:/tmp:/home/teamcity/TeamCity/buildAgent/
```

## To be continued

So long an empty PHP project is building successfully, tomorrow I will try to make a REAL [Joomla!](http://www.joomla.org) component build there!

As soon as It works, and all my Joomla! components are running in TeamCity, I will try to achieve the same goal in Bamboo, why? because it is simply . . .fun!

## Links

- <http://teamcity.waltercedric.com/overview.html>
- <http://maven.waltercedric.com>
- <http://bamboo.waltercedric.com>