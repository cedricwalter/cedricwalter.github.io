---
id: 4303
title: 'TeamCity 4.5 up and running'
date: '2009-04-27T19:41:16+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=4303'

---

![teamcity512](/assets/images/2009/04/teamcity512.png "teamcity512")

> Today [JetBrains](http://www.jetbrains.com/) announces the public availability of [TeamCity 4.5](http://www.jetbrains.com/teamcity), it’s award-winning distributed build management and continuous integration tool.   
> With TeamCity, you can set up a build server for your projects within minutes and enjoy out of the box continuous unit testing, code quality analysis, and early reporting on build problems – even without leaving your favorite IDE.   
> [TeamCity](http://www.jetbrains.com/teamcity) offers a gentle learning curve, so you can quickly improve your release management practices by gradually adopting its advanced features and capabilities.

I did upgrade my version of TeamCity at [teamcity.waltercedric.com](http://teamcity.waltercedric.com) to the latest version, aka 4.5

## What’s new?

This release brings many usability improvements, updated IDE plugin with some new VCSs supported, plus exciting enterprise-level features, not found in previous versions:

- **User Groups** are now supported when defining user roles and notifications
- **Extended LDAP support** with automatic user profile synchronization
- Multiple UI improvements, including **tests grouping** and **project-wide test details, problematic tests, and change log**
- You can now **assign responsibility** for broken builds
- In addition to traditional test results handling, TeamCity is now able to **parse raw XML reports** from ANT’s JUnit tasks, NUnit, Surefire, PMD, and FindBugs
- **Mono framework** is now automatically detected and can be used as a .NET platform for continuous builds
- Improved IDE integrations:
- *Eclipse*: **CVS** is now supported for Remote Run and Pre-tested Commit; added support for Perforce plugin version 2008.2
- *Visual Studio*: Remote Run and Pre-tested Commit now work with **Perforce**

To see What’s New in TeamCity 4.5, [just visit this page](http://www.jetbrains.com/teamcity/features/newfeatures.html)

## Upgrade from TeamCity 4.0.2 to TeamCity 4.5

The upgrade went flawlessly

# /home/teamcity/Teamcity/bin/runAll.sh stop kill

Quick backup of file system

# cp –pir /home/teamcity/ /home/teamcity.4.0.2

Quick backup of database

\# mysqldump –u*User* -p*Password* *Schema* > /home/teamcity.4.0.2/teamcity.sql

Get the latest version

# wget [http://download.jetbrains.com/teamcity/TeamCity-4.5.tar.gz](http://download.jetbrains.com/teamcity/TeamCity-4.5.tar.gz)

Delete the old installation (was getting some spring error by just overwriting the previous install)

# rm –rf /home/teamcity/Teamcity

unpack

# tar xvf TeamCity-4.5.tar.gz .

I did copy some needed stuff from previous installations like server.xml (conf/server.xml) and MYSQL driver (WEB-INF/lib),

Restart and voila TeamCity 4.5 is up and running!