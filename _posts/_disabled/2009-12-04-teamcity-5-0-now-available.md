---
id: 4889
title: 'TeamCity 5.0 now available'
date: '2009-12-04T13:43:41+01:00'
author: 'Cédric Walter'



header:
  teaser: /assets/images/2010/05/teamcity512_thumb.png
tags:
    - about
    - amazon
    - backup
    - box
    - bug
    - building
    - comments
    - community
    - computing
    - configuration
    - continuous
    - coverage
    - git
    - idea
    - java
    - job
    - task
    - teamcity
---

> ### Amazon EC2 and Virtual Agents
> 
> Take avdantage of cloud computing with TeamCity by putting Build Agents on Amazon EC2. After your Build Agents’ AMIs (Amazon Machine Images) are registered, the TeamCity server will account for those virtual machines in its build scheduling and will automatically do a suspend/resume job on them, based on the load and build queue status.
> 
> ### Better Support for #Maven
> 
> Version 5.0 has many #Maven support improvements under the hood. These include the creation of #Maven-based build configurations (only the URL to the POM file is needed), the visualization of various project data gathered from POM, and a new type of dependency trigger – #Maven artifact trigger. This type of trigger starts a build each time the specified #Maven artifact changes.
> 
> ### Build Configuration Templates
> 
> Templates can save a lot of manual work when you need to define a number of duplicate or very similar build configurations. Now you can create a template with the common (shared) settings, and then inherit any number of build configs from this template. You can also extract a template from any of your existing build configurations.
> 
> ### Issue Tracker Integration
> 
> How often do you see comments like this: “TW-3431 fixed”? How about a little more detail on the issue at hand? The issue tracker integration provides an in-place bug title, direct navigation to the issue, and other productivity goodies. It is currently available for Jira, Bugzilla and JetBrains [YouTrack](http://www.jetbrains.com/youtrack/) out of the box, but can easily be extended to other systems via plugins
> 
> ### Command Line Tool for Personal Builds
> 
> Previously, if you weren’t using #Eclipse, IntelliJ IDEA or Visual Studio, you were out of luck for missing one of the most important TeamCity features – Remote Run and Pre-Tested Commits. But things have changed. As the name suggests, now you can initiate the building of your local changes remotely on the server – from the local command line. No IDEs required.
> 
> ### Many Other Improvements
> 
> Including:
> 
> - Per-test responsibilities
> - Build artifacts promotion
> - Dedicated change details/status page
> - Incremental update of the build log
> - Project archiving
> - Backup &amp; Restore for easier TeamCity maintenance. Backup can be started from the UI or from the command line; Restore and Migration can be started from the command line only. Command line backup does not require stopping TeamCity if an external database is used.
> - Audit of user actions
> - Coverage support for .NET &amp; #Java. Based on IntelliJ IDEA coverage engine for #Java and on NCover  
>     (ver 1, ver 3) or PartCover for .NET.
> - Git &amp; Mercurial support now bundled with TeamCity
> - Remote Run for Git from IntelliJ IDEA &amp; #Eclipse
> - Support for Cucumber, Shoulda, Test-Spec in Rake runner
> - TeamCity IntelliJ IDEA plugin now works with IntelliJ IDEA Community Edition and RubyMine.[Download TeamCity 5.0](http://www.jetbrains.com/teamcity/download/index.html) (free 60-day trial). See also [complete release notes](http://www.jetbrains.net/confluence/display/TCD5/What%27s+New+in+TeamCity+5.0)