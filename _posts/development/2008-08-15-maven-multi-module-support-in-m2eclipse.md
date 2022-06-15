---
id: 3685
title: 'Maven multi module support in M2Eclipse'
date: '2008-08-15T18:39:08+02:00'
author: 'Cédric Walter'



header:
  teaser: /assets/images/2011/11/maven-logo-black-on-white-1.png
tags:
    - apache
    - break
    - click
    - code
    - core
    - create
    - created
    - creating
    - definition
    - deploy
    - details
    - directory
    - displaying
    - eclipse
    - example
    - first
    - idea
    - java
    - maven
---

Maven projects are created using the New “Maven projects” from M2Eclipse, see here for more details   
<http://docs.codehaus.org/display/M2ECLIPSE/Creating+Maven+projects>

Maven Modules are different beast, as they are suppose to have a parent in their hierarchy, if you use #Maven   
you are already understanding what the differences are.

You can get in troubles if you try to make a lot of #maven projects in eclipse, although it may seems natural to do so. A lot   
of people have gone that path, and this may work if you use the relativePath trick

- parent (contains the super pom)
- common-api, reference the parent using the <relativePath>../parent/pom.xml</relativePath>
- common-core reference the parent using the <relativePath>../parent/pom.xml</relativePath>
- common-spring reference the parent using the <relativePath>../parent/pom.xml</relativePath>
- services-api …you get the idea
- services-core
- services-spring

Here is an example for common-spring:

```
<project>
    <modelVersion>4.0.0</modelVersion>
    <groupId>com.waltercedric</groupId>
    <artifactId>common-spring</artifactId>
    <version>0.0.1-SNAPSHOT</version>
    <parent>
        <groupId>com.waltercedric</groupId>
        <artifactId>parent</artifactId>
        <version>0.0.1-SNAPSHOT</version>
        <relativePath>../parent/pom.xml</relativePath>
    </parent>
</project>
```

[![maven.all.projects.](/assets/images/2008/08/maven.all_.projects._thumb.png)](/assets/images/2008/08/maven.all_.projects.png) **Do not make everything a Maven project!**

With such a mapping **you’ll get in troubles**! not all plug ins seems to support this kind of trick (relativePath)   
In the maven reactor (maven-deploy, maven-release for example). It is a lot wiser to represent   
your product or project also in eclipse in a tree manner. This will break the complexity, introduce   
more flexibility, so why not just using maven modules??   
Maven2 recommend to represent modules in a tree manner

```
|--- parent                                (packaging : pom)
|        | common                       (packaging : pom)
|                   |common-api       (packaging : any)
|                   |common-core     (packaging : any)
|                   |common-spring   (packaging : any)
|        | services                        (packaging : pom)
|                   |services-api        (packaging : any)
|                   |services-core      (packaging : any)
|                   |services-spring    (packaging : any)
```

To achieve that Goal, M2Eclipse use a trick and put all modules (common-xxx and services-xxx) in the   
same maven project (parent) while displaying a workspace that look like “project flat”…

First create your product or project using a Maven Project

[![one.maven.project](/assets/images/2008/08/one.maven_.project_thumb.png)](/assets/images/2008/08/one.maven_.project.png)focus on that project, and right click New… Others … Maven Module

[![maven.module.helper](/assets/images/2008/08/maven.module.helper_thumb.png)](/assets/images/2008/08/maven.module.helper.png)[![new.maven.module](/assets/images/2008/08/new.maven_.module_thumb.png)](/assets/images/2008/08/new.maven_.module.png)[![finish.module.creation](/assets/images/2008/08/finish.module.creation_thumb.png)](/assets/images/2008/08/finish.module.creation.png)click Next, in the next page, choose a POM packaging, as this module will contains module   
definition (aggregation of sub modules common-api, common-core, …)

The results is what maven expect: a parent directory with a set of modules and pom’s

[![result.maven.modules](/assets/images/2008/08/result.maven_.modules_thumb.png)](/assets/images/2008/08/result.maven_.modules.png)The workspace fake the view and show maven modules as what I call “ghost projects”

Any changes in these “ghost projects” open in fact the Maven project (remember in fact   
the code is there), so any change in common-api force you to sync and version the Maven project.

on the file system, it is even more visible, there is only one maven project (parent) and all its modules   
are interlinked into it!

[![maven.interlinked.modules](/assets/images/2008/08/maven.interlinked.modules_thumb.png)](/assets/images/2008/08/maven.interlinked.modules.png)```
|--- myProduct                                      (packaging : pom)
|        | component-common                 (packaging : pom)
|                   |module-common-api       (packaging : any)
|                   |module-common-core     (packaging : any)
|                   |module-common-spring   (packaging : any)
|        | component-services                  (packaging : pom)
|                   |module-services-api        (packaging : any)
|                   |module-services-core      (packaging : any)
|                   |module-services-spring    (packaging : any)
```

you can create an unlimited number of modules interlinked in the maven project…   
Some open source framework, prefers to name their first module level component-xxx, then all other modules-xxx