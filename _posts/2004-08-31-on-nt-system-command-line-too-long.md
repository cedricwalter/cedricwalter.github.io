---
id: 539
title: 'on NT system: command line too long'
date: '2004-08-31T22:42:31+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=539'
permalink: /java/on-nt-system-command-line-too-long/
tags:
    - characters
    - deployment
    - distributed
---

**![](/assets/images/2004/08/Gyro.gif) #Java problem NÂ°1

On windows NT machine, command line length is limited to 1024 characters!, clearly not enough for a distributed classpath with a lot of frameworks or 3rd party tools.

**Solutions**

- Reduce number of jar files, instead of having 10 jar files, you can try to build only one, use automatic build process, with jakarta ANT during the build and for your deployment. This is often not a good/verybad solution.
- Put the half classpath size in java ext classpath (if you use resin or tomcat)

| example |
|---|

- Use [cygwin](http://www.waltercedric.com/java/guidelines/www.cygwin.org) to start the java process, for example you can use a bash terminal. But do not use *cygrunsrv* as it was not designed for installing java process as NT service: it wil create a ghost program when you kill the service.
- Last chance, put the classpath in a .txt file and create a classloader which will read it and set the classpath (adaptative classloader). You must create your own classloader!