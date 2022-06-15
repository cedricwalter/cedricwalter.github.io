---
id: 4059
title: 'Status of the ContinuousBuild4Joomla framework'
date: '2009-01-25T19:38:21+01:00'
author: 'Cédric Walter'



header:
  teaser: /assets/images/2010/07/Joomla_Logo_3_914e43333ea82039f7b3e55ec287a04d.png
tags:
    - agile
    - ant
    - architecture
    - checked
    - ci/cd
    - code
    - continuous
    - directories
    - directory
    - document
    - environment
    - framework
    - joomla
    - linux
    - php
---

I put some effort the last few days in this new framework.

# Done:**

- I did document some part of it at <http://wiki.waltercedric.com/index.php?title=ContinuousBuildforJoomla>
- TeamCity is installed/configured/documented (windows only)
- XAMPP is installed/configured/documented (windows only)
- I also at the same time configured a Puppy #Linux VMWare image that will permit to anybody to have a running environment in no time.
- I am able to unpack all #Joomla! versions that are committed in any repository (CVS, SVN, Clearcase)
- They can be unpacked anywhere on file system (config in setEnv.xml), ideally they are unpacked in the root htdocs of XAMPP
- Code is committed at #Joomla forge in SVN <http://joomlacode.org/gf/project/continbuild4j/>

### Issues

Selenium test suite do not accept a baseurl (or only a part of it) so I have a full path like /Joomla1.5.7/installation/index.php in a selenium test case instead of /installation/index.php in test case and baseurl= [http://localhost/Joomla1.5.7)](http://localhost/Joomla1.5.7)

## Architecture

### **3rd Party**

- I use antelope for some advance ANT operations: substring, indexof, loop
- I use selenium java server on port 4444 (default)

### Cluster

All cluster operations are in **cluster.xml** these basic functions are

- cluster.init
- cluster.remove remove all instances of #Joomla! in checkout directory
- joomla.unpack.all unpack all #Joomla! versions that are checked in another SVN root
- joomla.install.all run the same selenium test case joomla.install.html on all #Joomla! instance
- joomla.remove.all.installation remove all #Joomla! installation directories
- joomla.check.all check all #Joomla! installations for correctness

- cluster.start
- cluster.remove
- cluster.stop

### Joomla!

All #Joomla specific operations are in **joomla.library.xml**

- Unpack a #Joomla! version
- Remove the installation directory form a version
- Apply a selenium test suite install.joomla.html that can use the regular #Joomla! installer
- Is also able to do all of the above on all #Joomla! versions found (regular expression) in checkout directory

### Selenium

- All selenium operations are in **selenium.xml**
- All test suite and test cases are in /selenium/joomla/

### PHPUnit

All PHPUnit operation are in **phpunit.xml**

### Settings

Settings are in **setEnv.xml**, in future I will lazy load a file if it exist as environment variable

If you know ANT, the code is quite readable…