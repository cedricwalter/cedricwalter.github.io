---
id: 4291
title: 'My 2 first Joomla! component in continuous build'
date: '2009-04-22T19:29:25+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=4291'

header:
  teaser: /assets/images/2009/04/teamcity.joomla.png
---

[![teamcity.joomla](/assets/images/2009/04/teamcity.joomla.png "teamcity.joomla")](http://teamcity.waltercedric.com/overview.html)

## Status/Done

- Build with [Maven For PHP](http://www.php-maven.org/) in TeamCity
- SVN repository at [http://joomlacode.org/svn/com\_securityi1/trunk/](http://joomlacode.org/svn/com_securityi1/trunk/) and [http://joomlacode.org/svn/com\_akobookplus/trunk/](http://joomlacode.org/svn/com_akobookplus/trunk/)
- Totally independent of continuous build server (Thanks to MAVEN), so Hudson, Bamboo and Cruise Control are SUPPORTED.

- Joomla is also a simple dependency in scope compile (productive code and tests need it) ```
    <?xml version="1.0" encoding="UTF-8"?> <project>   <modelVersion>4.0.0</modelVersion>   <groupId>org.joomla</groupId>   <artifactId>joomla</artifactId>   <version>1.5.10</version>   <description></description> </project>
    ```
    
    Deployed and viewable at <http://maven.waltercedric.com/artifactory/webapp/browserepo.html>   
    [![joomla.in.artifactory](/assets/images/2009/04/joomla.in_.artifactory_thumb.png "joomla.in.artifactory")](http://www.waltercedric.com/images/stories/My2firstJoomlacomponentincontinuousbuild_10ECB/joomla.in.artifactory.png)
    
    So binding your code to a new version or old version is as simple as changing in your component pom.xml
    
    <dependency>   
     <groupId>org.joomla</groupId>   
     <artifactId>joomla</artifactId>   
     <version>1.5.10</version>   
    </dependency>

- Test case are automatically started (PHP Unit) by maven surefire.
- [SolarJoomla](http://www.waltercedric.com/component/tag/solarjoomla.html) has Mylyn (Bugzilla supported and is the reference implementation for Mylyn) running and configured to connect to my JIRA repositories <http://jira.waltercedric.com>
- [SolarJoomla](http://www.waltercedric.com/component/tag/solarjoomla.html) has TeamCity plugin running and configured to connect to my TeamCity <http://teamcity.waltercedric.com>, so authorized developer can do **private build**

> [Delayed Commit](http://www.jetbrains.com/teamcity/features/newfeatures.html#Improved_Quality_Maintenance) (also known as **private build**). It allows you to run the full build with tests on the server as if you checked in all your changes, but **without actually checking in your changes until the build is successful,** so you will know if you’re about to break the build before you actually break it.

- **Ask Joomla! core team if they would not be interested by this engineering for Joomla! itself!**Done at <http://forum.joomla.org/viewtopic.php?p=1671501#p1671501> and [by contacting developer group Coordinators](http://developer.joomla.org/development-working-group.html)
    
    > *I did develop Continuous build for Joomla…*
    > 
    > *I did develop a continuous build solutions for Joomla! component, while not finished (70% achieved) I would say, it may also be interesting for Joomla! itself.*
    > 
    > *If you are interested, and since I am still documenting part of it, I would appreciate your inputs and feedback.*
    > 
    > *Head over to* [*http://www.waltercedric.com/joomla-mainmenu-247/370-continuous-build/1553-my-2-first-joomla-component-in-continuous-build.html*](http://www.waltercedric.com/joomla-mainmenu-247/370-continuous-build/1553-my-2-first-joomla-component-in-continuous-build.html)   
    > *or to the tag <http://www.waltercedric.com/component/tag/continuousbuild.html>*

## Open

- Deploy generated artifacts to a Joomla running stage (runtime farms of Joomla!) in order to run **integration tests** with Selenium
- Add selenium test cases for testing the GUI, also running “**integration tests**”
- Packaging is jar, better would be zip or tar.gz
- Use Phing ([http://docs.joomla.org/Setting\_up\_your\_workstation\_for\_extension\_development](http://docs.joomla.org/Setting_up_your_workstation_for_extension_development)) for developer environment, and maybe also deploy to farms
- Deliver [SolarJoomla](http://www.waltercedric.com/component/tag/solarjoomla.html) as soon as PHPDocumentator, PHPUnit, DOxygen are running in XAMPP
- Publish generated site artifacts’ to new sub domains
- Add reporting plugin.
- **DOCUMENT everything in my** [**WIKI**](http://wiki.waltercedric.com) **at the same time**

## Future

Must work also in Atlassian Bamboo, Apache Hudson … I need your help for that, that wont be a huge task.