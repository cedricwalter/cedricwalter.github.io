---
id: 4201
title: 'Subversion and the importance of svn:ignore for MAVEN multi modules'
date: '2009-03-20T20:08:55+01:00'
author: 'Cédric Walter'



header:
  teaser: /assets/images/2011/11/maven-logo-black-on-white-1.png
tags:
    - apache
    - bug
    - check
    - classpath
    - client
    - commit
    - compatible
    - considered
    - consuming
    - copy
    - deleted
    - directories
    - directory
    - eclipse
    - git
    - HowTo
    - java
    - maven
    - subversion
    - tutorial
---

[Maven](http://maven.apache.org/) 2 builds can be quite slow, especially if you are not following the best practices of using [Maven](http://maven.apache.org/) in [Eclipse](http://www.eclipse.org/). For example if you are not removing all /*target* directories from version control!

If you let /target directories going into version control, the following happen:

- Each full build of the workspace,
- Each partial build of modules,

Will clean /target directories, and thus force the SVN daemon to mark files as changed… thus consuming an enormous amount of time and resources (disk IO). You may also have *obstructed* files, because some developer may have committed some of these target files, but the build may wipe the /target/.svn metadata

> ***Obstructed* files** In a status operation denotes that the item in the Working Copy being currently processed has a non-expected kind. For example, a file is considered to be **obstructed** if it was deleted (with an **SVN** client non-compatible delete operation) and a directory with the same name as the file had had was added (but again with an **SVN** client non-compatible operation). **Typically what Maven is doing in goals clean and compile**

#### The solution

Typically it is recommended to hide [Eclipse](http://www.eclipse.org/) project artifacts and [Maven](http://maven.apache.org/) build targets from Subversion/CVS. M2Eclipse like to change the .classpath file (sometimes some entries are 3 times available in this file BUG?), this is one more reason not to commit these files.

# If you use CVS**

First Check in your project using the [Eclipse](http://www.eclipse.org/) team support (select from the context menu Team > Share Project), but only check what is needed. You should have a *.cvsignore* file, prior to commit, with the following entries for each module:

*.project  
.classpath  
.settings  
.wtpmodules  
target*

# If you use SVN,** you can set the svn:ignore property on all shared module and project by

- First Check in your project using the [Eclipse](http://www.eclipse.org/) team support (select from the context menu Team > Share Project), but only check what is needed.
- Then select all [Maven](http://maven.apache.org/) projects and [Maven](http://maven.apache.org/) modules,
- Right clicking on them while selected,
- Select **Team** – **Set Property**  
    [![maven.svn-ignore](/assets/images/2009/03/maven.svnignore_thumb.png "maven.svn-ignore")](/assets/images/2009/03/maven.svnignore.png)
- Enter at least the following entries*.project  
    .classpath  
    .settings  
    .wtpmodules  
    target*

You will see that the specified files and directories are now being ignored by Subversion.

# Note**

1. Eclipse will automatically generate a new simple *.project*-file/ .classpath-file when you check out the project from the repository.
2. I would like to see [M2Eclipse](http://m2eclipse.codehaus.org/) being able to automatically remove the target directory from SVN/CVS while sharing…