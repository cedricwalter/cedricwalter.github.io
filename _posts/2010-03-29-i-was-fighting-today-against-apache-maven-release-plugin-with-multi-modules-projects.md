---
id: 5125
title: 'I was fighting today against Apache Maven release plugin with multi modules projects'
date: '2010-03-29T19:55:13+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=5125'
permalink: /development/i-was-fighting-today-against-apache-maven-release-plugin-with-multi-modules-projects/
image: /wp-content/uploads/2011/11/maven-logo-black-on-white-1.png
tags:
    - about
    - apache
    - break
    - check
    - client
    - co
    - code
    - commit
    - configuration
    - correctly
    - deploy
    - details
    - directory
    - documentation
    - dont
    - environment
    - java
    - maven
---

I was fighting today against the [maven-release-plugin](http://maven.apache.org/plugins/maven-release-plugin/) of #maven, solving complicated errors in a row. As I am convince I made all possible errors, I think it is worse to compile my findings here to help others 🙂

#### [Maven Release Plugin](http://maven.apache.org/plugins/maven-release-plugin/)

This plugin is used to release a project with #Maven, saving a lot of repetitive, manual work. Releasing a project is made in two steps: prepare and perform.

My approach to speed up things is always to define a small project (in a sandbox SVN root) that is compiling and running in 10 seconds to make some test before trying to make it run on our bigger Innoveo Skye(tm) product (35 modules)

I always have 2 projects prepared:

- One TestSimpleProject: one #Maven project with no code
- One TestComplexProject: one #maven project and 2 #Maven sub modules

For the reader that can not wait here is the running command line from TeamCity to be put in **Build Runner Goals**

release:clean release:prepare release:perform -Dusername=xxxxxxx -Dpassword=yyyyyy

### Latest SVN client is recommended

You need the latest [SVN](http://subversion.tigris.org/) command line client on all [TeamCity](http://www.jetbrains.com/teamcity/) agent, or at least not any [SVN](http://subversion.tigris.org/) command line client > 1.5.x which don’t work (but 1.5.0 would have). We were using 1.5.1 of course on all our server (Murphy’s laws)

Use at least a [Subversion SVN](http://subversion.tigris.org/) client (1.6.6 as for today).

If you dont have any SVN command line installed in your [TeamCity](http://www.jetbrains.com/teamcity/) agents, you’’ll end with this easy to understand error

```
INFO] Unable to check for local modifications 
[11:34:40]: Provider message: 
[11:34:40]: The svn command failed. 
[11:34:40]: Command output: 
[11:34:40]: /bin/sh: svn: command not found 
[11:34:40]: [INFO] Trace 
[11:34:40]: org.apache.maven.BuildFailureException: Unable to check for local modifications 
[11:34:40]: Provider message: 
[11:34:40]: The svn command failed. 
[11:34:40]: Command output: 
[11:34:40]: /bin/sh: svn: command not found 
[11:34:40]: at org.apache.maven.lifecycle.DefaultLifecycleExecutor.executeGoals(DefaultLifecycleExecutor.java:715) 
[11:34:40]: at org.apache.maven.lifecycle.DefaultLifecycleExecutor.executeStandaloneGoal(DefaultLifecycleExecutor.java:569) 
[11:34:40]: at org.apache.maven.lifecycle.DefaultLifecycleExecutor.executeGoal(DefaultLifecycleExecutor.java:539)
```

> The [maven release plu](maven-release-plugin)gin require SVN client to be installed.

### Update maven-release-plugin to the latest

You need to update [maven-release-plugin](http://maven.apache.org/plugins/maven-release-plugin/) away from 2.0.beta9 to 2.0 to solve the issue with multi module release. Luckily for me the 2.0 is available since 10 February 2010 Older version were working for simple Maven project (a project with no Maven module) but not with Multi Modules Projects!

With 2.0-beta9 I was getting this error in Multi Modules Projects!

```
[18:41:46]: [ERROR] BUILD FAILURE 
[18:41:46]: [INFO] ------------------------------------------------------------------------ 
[18:41:46]: [INFO] Unable to tag SCM 
[18:41:46]: Provider message: 
[18:41:46]: The svn tag command failed. 
[18:41:46]: Command output: 
[18:41:46]: svn: Commit failed (details follow): 
[18:41:46]: svn: File '/svn/xxxxx/skye/tags/skye-2.1.0.M8/skye-admin/pom.xml' already exists 
[18:41:46]: [INFO] Trace 
[18:41:46]: org.apache.maven.BuildFailureException: Unable to tag SCM 
[18:41:46]: Provider message: 
[18:41:46]: The svn tag command failed. 
[18:41:46]: Command output: 
[18:41:46]: svn: Commit failed (details follow): 
[18:41:46]: svn: File '/svn/xxxxx/skye/tags/skye-2.1.0.M8/skye-admin/pom.xml' already exists
```

### Invalid certificate handling

Sometimes an issue if you craft some certificate yourself, You need to import certificate in each [TeamCity](http://www.jetbrains.com/teamcity/) build agent by running

> \# svn co <https://svn.xxxxxx.com/svn/yyyyyy/skye>

at least once and accepting permanently the certificate (break the command afterward) Do this **with the same** UNIX user under which the agent run or you’ll always get this error:

```
[11:52:11]: [ERROR] BUILD FAILURE 
[11:52:11]: [INFO] ------------------------------------------------------------------------ 
[11:52:11]: [INFO] Unable to checkout from SCM 
[11:52:11]: Provider message: 
[11:52:11]: The svn command failed. 
[11:52:11]: Command output: 
[11:52:11]: svn: OPTIONS of 'https://xxxxx.: Server certificate verification failed: certificate issued 
                  for a different hostname, issuer is not trusted (xxxxxxxxx) 
[11:52:11]: [INFO] Trace 
[11:52:11]: org.apache.maven.BuildFailureException: Unable to checkout from SCM 
[11:52:11]: Provider message: 
[11:52:11]: The svn command failed. 
[11:52:11]: Command output:
```

### Maven 2.2.1 wrongly calculate SCM commit URL

You can not use in <scm> tag this kind of URL’s https://user:passwd@svn.xxxxxxx.com like in the example below:

> <scm>   
> <connection>scm:svn:https://username:password@svn.xxxxx.com/svn/yyyyy/skye/trunk/**skye**</connection>   
> <developerConnection>scm:svn:https://username:password@svn.xxxx.com/svn/yyyyy/skye/trunk/**skye**</developerConnection>   
> <url>scm:svn:https://username:password@svn.xxxx.com/svn/yyyyy/skye/trunk/**skye**</url>   
> </scm>

Even if the documentation state otherwise, as the [maven-release-plugin](http://maven.apache.org/plugins/maven-release-plugin/) go “crazy” by concatenating wrongly the tagging URL.

```
[17:32:47]: [INFO] Working directory: /home/agent/buildagent/work/3d299c4b925af39b/TestRelease 
[17:32:47]: [INFO] ------------------------------------------------------------------------ 
[17:32:47]: [ERROR] BUILD FAILURE 
[17:32:47]: [INFO] ------------------------------------------------------------------------ 
[17:32:47]: [INFO] Unable to tag SCM 
[17:32:47]: Provider message: 
[17:32:47]: The svn tag command failed. 
[17:32:47]: Command output: 
[17:32:47]: svn: Source and dest appear not to be in the same repository 
                     (src: 'https://svn.xxxxxx.com/svn/xxxxxxx/Sandbox/trunk'; 
                     dst: 'https://xxxxxxx:yyyyyyy@svn.xxxxxx.com/svn/xxxxxx/Sandbox/tags/TestRelease-0.0.11') 
[17:32:47]: [INFO] ------------------------------------------------------------------------
```

I found a workaround by adding environment variables in the TeamCity build in the list of Maven Goals:

–Dusername=xxxx –Dpassword=yyyy

### Beware of invalid [SCM](http://maven.apache.org/pom.html#SCM) URL

> [SCM](http://maven.apache.org/pom.html#SCM) (Software Configuration Management, also called Source Code/Control Management or, succinctly, version control) is an integral part of any healthy project. If your Maven project uses an SCM system (it does, doesn’t it?) then here is where you would place that information into the POM.

A lot of example are floating around in internet about <scm> values that look like this:

```
<scm> 
 <connection>scm:svn:https://svn.xxxxx.com/svn/yyyyy/skye/trunk</connection> 
 <developerConnection>scm:svn:https://svn.xxxxx.com/svn/yyyyy/skye/trunk/</developerConnection> 
 <url>scm:svn:https://svn.xxxx.com/svn/yyyyy/skye/trunk/skye</url> 
</scm>
```

With the above, you’ll end up tagging your whole trunk under a new tags in [https://svn.xxxxx.com/svn/yyyyy/skye/tags/skye-2.1.0](https://svn.xxxxx.com/svn/yyyyy/skye/tags/skye-2.1.0)

No one is saying that you’ should better have this, end up your scm connection with the project you would like to tag

```
<scm> 
 <connection>scm:svn:https://svn.xxxxx.com/svn/yyyyy/skye/trunk/skye</connection> 
 <developerConnection>scm:svn:https://svn.xxxx.com/svn/yyyyy/skye/trunk/skye</developerConnection> 
 <url>scm:svn:https://svn.xxxx.com/svn/yyyyy/skye/trunk/skye</url> 
</scm>
```

### Failure to deploy newly artifact

This one is also irritating, because running a build in TeamCity with the goal : deploy run perfectly, the same build in prepare:release perform:release failed miserably at the end with

```
INFO] [ERROR] BUILD ERROR 
[19:26:08]: [INFO] [INFO] ------------------------------------------------------------------------ 
[19:26:08]: [INFO] [INFO] Error deploying artifact: Failed to transfer file: http://artifactory.xxxxxx.com:/libs-releases-local/… 
                                       . Return code is: 401[19:26:08]: [ERROR] BUILD ERROR 
[19:26:08]: [INFO] ------------------------------------------------------------------------ 
[19:26:08]: [INFO] Maven execution failed, exit code: '1' 
[19:26:08]: [INFO] ------------------------------------------------------------------------ 
[19:26:08]: [INFO] Trace 
[19:26:08]: org.apache.maven.lifecycle.LifecycleExecutionException: Maven execution failed, exit code: '1' 
[19:26:08]: at org.apache.maven.lifecycle.DefaultLifecycleExecutor.executeGoals(DefaultLifecycleExecutor.java:719) 
[19:26:08]: at org.apache.maven.lifecycle.DefaultLifecycleExecutor.executeStandaloneGoal(DefaultLifecycleExecutor.java:569)
```

I was not able to find a workaround to this one, the build is running without the maven-release-plugin and deploy correctly to [artifactory](http://www.jfrog.org/)! But I managed to get around it by using in place of the stable Maven 2.2.1 the latest version 3.0.alpha7!!!!

I hope this post will help some of you.