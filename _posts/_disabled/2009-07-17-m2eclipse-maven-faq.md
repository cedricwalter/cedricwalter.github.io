---

title: 'M2Eclipse Maven FAQ'
date: '2009-07-17T22:49:48+02:00'
author: 'Cédric Walter'



tags:
    - apache
    - ci/cd
    - eclipse
    - HowTo
    - java
    - maven
---

These things have disturbed us (The developer Team at [Innoveo.com](http://www.innoveo.com)) a lot in the past months. We did solve them recently, and I would like to publish them now here to help more people

### Someone create a new #maven module, after updating from SVN the module is not visible as a separate project.

# Scenario:**

1. User A checks out a #maven project from SVN using “Checkout as #Maven Project”. All modules are now listed as separate projects in #Eclipse
2. User B creates a new module in the project, and checks it into SVN
3. User A updates project
4. New module does not show up as a separate project.

# Solution**:

1. Work around found by selecting the parent project
2. Do Import -> #Maven.
3. Select then the same name template and most modules should be grayed out because of name conflicts. But you should see the missing module in the list
4. Tick the one (new) module and import it.

### In SVN perspective, when I choose “Checkout as #Maven Project” on #maven projectA, I get an exception saying that #maven.123457896 can not be renamed

# Scenario:**

This error occur sometime, especially if you ever kill eclipse during a previous #maven checkout (as sometimes it seems to hang forever). In fact the error message can be misleading,as M2Eclipse can not renamed #maven.1234567896 to projectA as it may partially exist on disk.

# Solution:**

1. Stop eclipse
2. Go to the workspace location {workpsace\_loc}
3. Delete the directory #maven.1234567896 or any directory starting with #maven.xxxxxxxx
4. Delete also the temporary created #Maven project {workpsace\_loc}\\projectA directory you were trying to checkout if it exist.
5. Restart eclipse, and in SVN perspective, on #maven project A, retry and select “Checkout as #maven project”

### .classpath or .project are not committed in SVN, how to add them?

# Scenario**:

You may have add a svn:ignore on some directories, or some someone may have committed a recursive svn:ignore properties on some module in the hierarchy. While we should never commit any .classpath to SVN, there is some rare case where it is still needed. For example if you ever add special runtime server libraries that may not be coming from #Maven Dependencies.

# Solution:**

Even if there is a svn:ignore on a #maven module, or if a module has applied svn:ignore properties to all its child, you can always put a file under version control by doing the following

1. Go in SVN perspective
2. Drill down to the #Maven module location or directory in which you would like to add a file
3. Right click **New**… then choose **File**,
4. A pop up will open letting you choose a file on disk
5. Don’t forget to Enter a commit comment

### Maven Surefire runs multiple times our test case when using goal site

This is neither a bug or an issue of #Maven, it look like even to be a feature!

Some reporting plugin are modifying (instrumentation) the java byte code of test cases like with [Cobertura](http://maven-plugins.sourceforge.net/maven-cobertura-plugin/) (goal: cobertura:cobertura).

> The [Cobertura](http://maven-plugins.sourceforge.net/maven-cobertura-plugin/) tool is a free and easy to use source code test coverage analyses. It helps you to discover where your source-code lacks in test coverage.

In some rare case scenario (multi threaded test cases for example), it may be worth to run the code twice as instrumentation may modify behaviors and outcome of tests. So to resume, #maven Surefire run them once, then [Cobertura](http://maven-plugins.sourceforge.net/maven-cobertura-plugin/) one more time but instrumented. One solution among other to escape this is to use #Maven profiles, and to rely on another build that do not use reporting to run tests without instrumentation.

More to come ..