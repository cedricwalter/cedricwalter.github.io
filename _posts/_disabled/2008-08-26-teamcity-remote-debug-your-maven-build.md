---
id: 3724
title: 'TeamCity remote debug your Maven build'
date: '2008-08-26T20:17:40+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=3724'

header:
  teaser: /assets/images/2011/11/maven-logo-black-on-white-1.png
tags:
    - apache
    - configuration
    - create
    - debug
    - don
    - eclipse
    - HowTo
    - java
    - maven
    - may
    - one
    - plugin
    - project
    - projects
---

### How to remote debug test cases

Change the Team city project configuration by adding a -Dmaven.surefire.debug to #Maven runner in Additional “Maven command line parameters”

[![maven.remote.debug.testcases](/assets/images/2008/08/maven.remote.debug_.testcases_thumb.png)](/assets/images/2008/08/maven.remote.debug_.testcases.png)

Now when test cases will be executed by #maven surefire plugin, the build will wait for a remote debugging application to pick it up on port 5005 and this for EVERY MODULES  
meaning: If you have 5 #Maven modules (= java projects) with test cases #maven surefire will request 5 times you to connect with remote debugging to your build server.

Create a Remote #Java Application launcher you’ll also share in one eclipse project:

[![maven.remote.debug.launcher](/assets/images/2008/08/maven.remote.debug_.launcher_thumb.png)](/assets/images/2008/08/maven.remote.debug_.launcher.png)

Don’t forget to remove the -D variable or your daily build may wait for a remote debug connection! or create a special build configuration of your project targeted for debugging purpose.

### Remote debugging #Maven plugin

put into “JVM command line parameters:” these settings:

-Xdebug -Xnoagent -Djava.compiler=NONE -Xrunjdwp:transport=dt\_socket,server=y,suspend=n,address=5006

[![debug.maven.in.teamcity](/assets/images/2008/08/debug.maven_.in_.teamcity_thumb.png)](/assets/images/2008/08/debug.maven_.in_.teamcity.png)

Create a Remote #Java Application launcher you’ll also share in one eclipse project that will connect to the port 5006.