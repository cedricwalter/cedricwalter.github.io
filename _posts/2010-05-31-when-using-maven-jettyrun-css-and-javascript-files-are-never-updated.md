---
id: 5212
title: 'When using Maven jetty:run, CSS and JavaScript files are never updated'
date: '2010-05-31T18:08:30+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=5212'
permalink: /development/when-using-maven-jettyrun-css-and-javascript-files-are-never-updated/
header:
  teaser: /assets/images/2011/11/maven-logo-black-on-white-1.png
tags:
    - capable
    - configuration
    - container
    - convenient
    - copy
    - css
    - default
    - disk
    - documentation
    - eclipse
    - effectively
    - explained
    - files
    - fix
    - getting
    - html
    - image
    - java
    - maven
---

I was getting mad because jetty was refusing to redeploy my static files (xhtml, css) in #Eclipse until I find the reason

> The [Jetty Web Server](http://eclipse.org/jetty) provides a HTTP server and Servlet container capable of serving static and dynamic contend either from a standalone or embedded instantiations.

Jetty buffers static content for webapps such as html files, css files, images etc and uses memory mapped files to do this if the NIO connectors are being used. The problem is that on Windows, memory mapping a file causes the file to be locked, so that the file cannot be updated or replaced. This means that effectively you have to stop Jetty in order to update a file.

To fix this, add a line with to your #maven-jetty-plugin configuration:

```
org.mortbay.jetty  maven-jetty-plugin  6.1.5       ...    src/main/resources/webdefault.xml     
```

The default webdefault.xml file is found in the <tt>lib/jetty.jar</tt> at <tt>org/mortbay/jetty/webapp/webdefault.xml</tt>. Extract it to a convenient disk location and edit it to change useFileMappedBuffer to false:

```
      useFileMappedBuffer       false     
```

Copy the changed file into src/main/resources/ of your project.

The problem is explained more in [Jetty’s documentation](http://docs.codehaus.org/display/JETTY/Files+locked+on+Windows).