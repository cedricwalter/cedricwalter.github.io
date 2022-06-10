---
id: 4252
title: 'Migrating from Ant to Maven: A JBoss Perspective'
date: '2009-04-11T14:35:03+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=4252'
permalink: /development/migrating-from-ant-to-maven-a-jboss-perspective/
tags:
    - ant
    - apache
    - maven
---

The JBoss division of Red Hat develops several large open source #Java applications. These include the JBoss application server, Hibernate, Seam, and several others. These applications primarily used Ant for builds, tests, releases and other parts of the project life cycle. As the size of these projects increased, several problems were experienced with the build system. The builds became difficult to maintain for current developers and difficult to understand and use for new developers. Managing the various project dependencies also became more difficult as dependency versions were changed, source code was moved, etc. There was also a lack of consistency from one project to the next. Since there were only minimal standards in place, the build scripts of the projects would be very different from each other. These and other issues led to the decision to migrate from Ant to #Maven. [Read More HERE](http://jazoon.com/jazoon08/en/conference/presentationdetails.html?type=sid&detail=4840)