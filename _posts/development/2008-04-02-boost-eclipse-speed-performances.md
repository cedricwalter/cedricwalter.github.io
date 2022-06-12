---
id: 3322
title: 'Boost Eclipse speed performances'
date: '2008-04-02T22:49:19+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=3322'

header:
  teaser: /assets/images/2008/04/eclipse_home_header_thumb.jpg
---

[![eclipse_home_header](/assets/images/2008/04/eclipse_home_header_thumb.jpg)](/assets/images/2008/04/eclipse_home_header.jpg)

[Eclipse](http://www.eclipse.org/) is an open source community whose projects are focused on building an open development platform   
comprised of extensible frameworks, tools and runtimes for building, deploying and managing software across   
 the lifecycle.

I am using these settings for more than a year now, and the speed gain you can expect is in the range   
of 40%. [Eclipse](http://www.eclipse.org/) is more responsive, start up time is nearly divided by 2! These gains are reproducible   
on different machines in the office.

# Conditions**

- You must have a dual processor or quad core, (better if you use VMarg1)
- You must start #Eclipse with #Java 1.6, note that you can still compile your project with #Java 1.5   
    (see windows – preferences – java – Installed JRE’s)

The tricks is to use the optimization done in JDK 1.6 (VMarg2) and the new agresivity of the Just In Time   
compiler (JIT) for VMarg3

Add theses VM arguments to eclipse.ini (file is located in your [Eclipse](http://www.eclipse.org/) directory)   
[![eclipse.ini](/assets/images/2008/04/eclipse.ini_thumb.gif)](/assets/images/2008/04/eclipse.ini_.gif)

-XX:-UseParallelGC -XX:+AggressiveOpts -XX:-UseConcMarkSweepGC

Some details about what these parameters are doing:

| VMarg1 | -XX:-UseParallelGC | Use parallel garbage collection for scavenges. (Introduced in 1.4.1) this will create more threads running in parallel, so the second processor will be put in use |
|---|---|---|
| VMarg2 | -XX:-UseConcMarkSweepGC | Use concurrent mark-sweep collection for the old generation. (Introduced in 1.4.1)  The #Eclipse GUI will feel more responsive as memory will be reclaimed without blocking VM executions. |
| VMarg3 | -XX:+AggressiveOpts | Turn on point performance compiler optimizations that are expected to be default in upcoming releases. (Introduced in 5.0 update 6.) |

More about [tuning Garbage collector HERE](http://www.petefreitag.com/articles/gctuning/) and [at the #Java HotSpot VM Options page](http://java.sun.com/javase/technologies/hotspot/vmoptions.jsp)