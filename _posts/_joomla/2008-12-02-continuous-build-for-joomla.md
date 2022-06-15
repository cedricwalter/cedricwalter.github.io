---
id: 3953
title: 'Continuous Build for Joomla'
date: '2008-12-02T21:11:18+01:00'
author: 'Cédric Walter'



header:
  teaser: /assets/images/2012/02/joomla_logo_thumb.png
tags:
    - ant
    - apache
    - box
    - ci/cd
    - clone
    - commit
    - configurable
    - configuration
    - continuous
    - current
    - demo
    - deployment
    - developer
    - development
    - end
    - environment
    - joomla
    - linux
---

> *Continuous Integration is a software development practice where members of a team integrate their work frequently, usually each person integrates at least daily – leading to multiple integrations per day. Each integration is verified by an automated build (including test) to detect integration errors as quickly as possible. Many teams find that this approach leads to significantly reduced integration problems and allows a team to develop cohesive software more rapidly. This article is a quick overview of Continuous Integration summarizing the technique and its current usage. [Martin Fowler about continuous integration](http://martinfowler.com/articles/continuousIntegration.html)*

Things get clearer in my mind…I will use a set of Open Sources software to reach this ambitious goal.

### Brainstorming

[Maintain a Single Source Repository.](http://martinfowler.com/articles/continuousIntegration.html#MaintainASingleSourceRepository.)

Either Subversion running locally on windows/Linux, but I will stay with [www.joomlaCode.org](http://www.joomlaCode.org) at the beginning

[Automate the Build](http://martinfowler.com/articles/continuousIntegration.html#AutomateTheBuild)

- I am currently evaluation [Maven for PHP](http://www.php-maven.org/) but already have ANT script to build components and plugin for #Joomla 1.5 (they are not generic enough at the moment)

[Make Your Build Self-Testing](http://martinfowler.com/articles/continuousIntegration.html#MakeYourBuildSelf-testing)

- PHP UNIT tests if available with be run at this stage using PHP command line.
- **Selenium** to automate components testing across many platforms, as it runs in [many browsers](http://selenium.seleniumhq.org/about/platforms.html#browsers) and [operating systems](http://selenium.seleniumhq.org/about/platforms.html#operating-systems), and can be controlled by many [programming languages](http://selenium.seleniumhq.org/about/platforms.html#programming-languages) and [testing frameworks](http://selenium.seleniumhq.org/about/platforms.html#testing-frameworks).
- Some standard utilities to perform standard #Joomla! processes: login, logout for Apache ANT or Selenium
- I will develop either a ANT plugin or a set of Selenium test cases for deploying and removing 
    - component: install, publish, remove
    - plugin: install, publish, remove
- All these utilities will be available under GPL v3 and as such free to reuse, and improve.

[Everyone Commits Every Day](http://martinfowler.com/articles/continuousIntegration.html#EveryoneCommitsEveryDay)

- This is reserved to developer having a [www.joomlaCode.org](http://www.joomlaCode.org) account and part of the development team.

[Every Commit Should Build the Mainline on an Integration Machine](http://martinfowler.com/articles/continuousIntegration.html#EveryCommitShouldBuildTheMainlineOnAnIntegrationMachine)

I will use [TeamCity](http://www.jetbrains.com/teamcity) continuous build server as it is free for personal use (limited to 20 concurrent build), run on Windows and #Linux but require a java VM to run (may not be wanted in a PHP environment). Anyway with ANT, it will be possible to use another build server like Cruise Control or PHP Under Control.

[Keep the Build Fast](http://martinfowler.com/articles/continuousIntegration.html#KeepTheBuildFast)

That is an objective 🙂

[Test in a Clone of the Production Environment](http://martinfowler.com/articles/continuousIntegration.html#TestInACloneOfTheProductionEnvironment)

#### Joomla! Build farm

- I can imagine a set of #Joomla instances, ideally 5 of each version, aka #Joomla! 1.5.3 to #Joomla! 1.5.8 and #Joomla! 1.0.10 to 1.0.15
- Joomla instances will be recreated at build time (files and databases), that mean #Joomla! will get newly installed and removed in case of successful build
- All #Joomla! instances will be running with XAMPP, ideally on port not available to the outside world for security reasons

[Make it Easy for Anyone to Get the Latest Executable](http://martinfowler.com/articles/continuousIntegration.html#MakeItEasyForAnyoneToGetTheLatestExecutable)

Successful build (Artifacts) are only available if build is successful. Team City provide this with less effort (configuration)

[Everyone can see what’s happening](http://martinfowler.com/articles/continuousIntegration.html#EveryoneCanSeeWhatsHappening)

- A guest account will be available or a free public area with limited access to see the result of builds.
- RSS feeds, emails and Instant messaging (Jabber) out of the box for end users or developers!

[Automate Deployment](http://martinfowler.com/articles/continuousIntegration.html#AutomateDeployment)

That will be, auto publish to some demo site in a configurable way. At the moment, at <http://demo.waltercedric.com> and <http://demo2.waltercedric.com> for me 🙂

### Final words

- I will provide a ready to use package for Windows and #Linux and all scripts, so anybody will be able to run it also on your own.
- Critical part will be documented in my WIKI at <http://wiki.waltercedric.com> [direct link HERE](http://wiki.waltercedric.com/index.php?title=ContinuousBuildforJoomla)

It seem that nobody is providing such a package as [I am after only one day at the top of search results in Google “continuous build joomla”](http://www.google.com/search?q=continuous+build+joomla&ie=utf-8&oe=utf-8&aq=t&rls=org.mozilla:en-US:official&client=firefox-a)