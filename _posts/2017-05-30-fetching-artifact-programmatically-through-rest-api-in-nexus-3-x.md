---
id: 8628
title: 'Fetching artifact programmatically through REST/API in Nexus 3.x'
date: '2017-05-30T10:35:23+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=8628'
permalink: /development/fetching-artifact-programmatically-through-rest-api-in-nexus-3-x/
header:
  teaser: /assets/images/2011/11/maven-logo-black-on-white-1.png
tags:
    - apache
    - atlassian
    - ci/cd
    - copy
    - creating
    - dependency
    - development
    - essentially
    - HowTo
    - jar
    - link
    - main
    - make
    - maven
    - nexus
    - one
    - over
    - plugin
    - possible
---

There is so many case where it is desirable to pull down artifact from Sonatype #Nexus using REST API, unfortunately #Nexus 3.x Rest API are still under development…

Some use cases in Nexus 2.x:

- You have a script that uses #REST call to pull down the LATEST maven artifacts every night from Nexus and deploys them.
- You make extensive use of the #REST API in all your puppet modules
- You use the #Atlassian #Puppet module for Nexus for creating repository, groups, assigning repository to groups, updating the main config settings, things like proxy, email, realms, and so on. The Puppet module is simply a wrapper over the Nexus REST API and allows to essentially import those abstractions into #Puppet Config Management

Here is one possible workaround that does not use any REST API 
```bash
mvn org.apache.maven.plugins:maven-dependency-plugin:3.0.1:copy 
    -Dartifact=log4j:log4j:1.2.17:jar 
    -DoutputDirectory=./ 
```   
which is equivalent to <script src="https://gist.github.com/cedricwalter/e7739aab3d370ef83f1a13b8322e50be.js"></script> [Gist Link](https://gist.github.com/cedricwalter/e7739aab3d370ef83f1a13b8322e50be)