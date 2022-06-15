---
id: 3360
title: 'Continuous build of Apache projects'
date: '2008-04-06T17:37:16+02:00'
author: 'Cédric Walter'



header:
  teaser: /assets/images/2008/04/4399f6228b40448db40fc3833fdbbb52.jpg
tags:
    - apache
    - building
    - ci/cd
    - continuous
    - current
    - eclipse
    - example
    - excellent
    - foundation
    - good
    - idea
    - java
    - job
    - maven
    - task
    - teamcity
---

Apache foundation is using [Hudson](https://hudson.dev.java.net/) for continuous build ([and also JBOSS](http://jboss-qa.blogspot.com/2007/10/taking-continuous-integration-to.html))

Hudson monitors executions of repeated jobs, such as building a software project or jobs run by cron.  
Among those things, current Hudson focuses on the following two jobs:

1. **Building/testing software projects continuously**, just like CruiseControl or DamageControl.  
    In a nutshell, Hudson provides an easy-to-use so-called continuous integration system,  
    making it easier for developers to integrate changes to the project, and making it easier  
    for users to obtain a fresh build. The automated, continuous build increases the productivity.
2. **Monitoring executions of externally-run jobs**, such as cron jobs and procmail jobs, even those  
    that are run on a remote machine. For example, with cron, all you receive is regular e-mails that  
    capture the output, and it is up to you to look at them diligently and notice when it broke.  
    Hudson keeps those outputs and makes it easy for you to notice when something is wrong.

This is a public build and test server for various [Apache Projects](http://projects.apache.org/).

<div class="wlWriterSmartContent" id="scid:32a77b7a-5ea4-47be-84fc-ff7471384e10:5e73ebf7-07aa-482a-9437-810abfb21d4a" style="margin: 0px; padding: 0px; display: inline">[![](/assets/images/2008/04/4399f6228b40448db40fc3833fdbbb52.jpg)](http://hudson.zones.apache.org/hudson/)<div class="wlWriterSmartContent" id="scid:32a77b7a-5ea4-47be-84fc-ff7471384e10:c27b0f06-cc64-49e6-8c38-31953d0c5576" style="margin: 0px; padding: 0px; display: inline">[  ](http://hudson.zones.apache.org/hudson/)[An #Eclipse plugin is also available](http://braindump.dk/tech/2007/05/03/eclipse-plugin-for-hudson/) the [online WIKI is HERE](http://hudson.gotdns.com/wiki/display/HUDSON/Home)

If you are shopping for a build server, and you are not on a budget, I can recommend you the  
excellent [Team City from JetBrains](http://www.jetbrains.com/teamcity/). #Maven integration is also good, but wont probably never reach the level  
of Hudson as it is made by Apache and tailored for their frameworks needs.