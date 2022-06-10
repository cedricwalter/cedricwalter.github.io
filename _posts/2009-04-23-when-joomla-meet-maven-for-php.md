---
id: 4296
title: 'When Joomla! meet Maven for PHP'
date: '2009-04-23T21:56:18+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=4296'
permalink: /joomla/when-joomla-meet-maven-for-php/
tags:
    - apache
    - joomla
    - maven
    - php
---

 I will quickly describe in this post how you can code your component/plugins/modules against a specific version of #Joomla! with no effort using #Maven for PHP.

The trick I made is to package the whole #Joomla distribution in a jar file, and add a #Maven dependency to the project. As #Joomla, PHPUnit, or any other 3rd party is not a set of class packaged in a jar, the brilliant idea of #Maven for PHP is to unpack all these dependencies in the target/phpinc directory automatically AND concatenating this directory to the php setting include\_path during compile and test phase. You can do the same using the command line by running:

```
php -d include_path=
```

That’s also why, It is very important **to not put anything** from this directory under version control (add a cvs.ignore or svn properties svn:ignore) as it contains dependencies that have no reason to be put under version control in #Maven paradigm (they have to reside in a #Maven repository)

So I create a new zip file joomla-1.5.10.jar with a directory inside named ‘Joomla’ that contains a standard binary distribution…this jar is published in artifactory with a groupid *org.joomla* (arbitrary chosen by me)

Artifactory will generate a default pom.xml. Normally it should contains more meta data and be created by the Joomla team itself. (if they ever support Maven)

```
<?xml version="1.0" encoding="UTF-8"?>
<project>
    <modelVersion>4.0.0</modelVersion>
    <groupId>org.joomla</groupId>
    <artifactId>joomla</artifactId>
    <version>1.5.10</version>
    <description></description>
</project>
```

The artifact is deployed and viewable at <http://maven.waltercedric.com/artifactory/webapp/browserepo.html>

With the code below I can bind my component to a new version or old version of Joomla just by modifying the component pom.xml. Note the version number 1.5.10 (the latest version of Joomla! to date)

```
<dependency> 
    <groupId>org.joomla</groupId> 
    <artifactId>joomla</artifactId> 
    <version>1.5.10</version>  
</dependency>
```

Test cases classes are directly in the eclipse project under src/test/php (this directory is created by the archetype php5-lib-archetype), In **bold**, this is how you can import the whole Joomla! framework!

```
require_once ('PHPUnit/Framework.php'); 
require_once ('Joomla/index.php');

//I load the PHP class that I would like to test 
require_once ('admin/class/logUtils.php');

class LogUtilsTest extends PHPUnit_Framework_TestCase {

//a poor PHPUNit testcase 
function testisAnEmail() {

        $LogUtils = new LogUtils(); 
        $this->assertEquals(true, $LogUtils->isAnEmail("cedric.walter@waltercedric.com")); 
        $this->assertEquals(false, $LogUtils->isAnEmail("cedric.walterwaltercedric.com")); 
        $this->assertEquals(true, $LogUtils->isAnEmail("cedric@waltercedric.com"));

    } 
}
```