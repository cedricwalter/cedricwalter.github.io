---
id: 3426
title: 'A strategy for Integrations versions with maven&#8230;'
date: '2008-04-25T16:11:44+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=3426'
permalink: /development/a-strategy-for-integrations-versions-with-maven/
image: /wp-content/uploads/2011/11/maven-logo-black-on-white-1.png
tags:
    - apache
    - break
    - bug
    - built
    - check
    - ci/cd
    - code
    - continuous
    - create
    - current
    - customer
    - days
    - deliver
    - demo
    - dependency
    - document
    - documentation
    - don
    - java
    - maven
---

We are currently asking ourselves at [INNOVEO](http://www.innoveo.com/), if we need to keep a version of integration versions.  
Integration versions main objective is to be integrated with other modules to make and test an  
application or a framework. This question is quickly becoming essential when working with several  
modules, where you will have to to rely on intermediate, non finalized versions of modules.

Since we are also following the continuous integration paradigm for all our modules, Thanks to  
[Apache MAVEN](http://maven.apache.org/), these integration versions are produced by a continuous integration server  
([Team City from JetBrain](http://www.jetbrains.com/teamcity/)), very frequently.

So, how can you deal with these, possibly numerous, integration versions? The response is coming  
[from this extract from IVY documentation](http://ant.apache.org/ivy/history/2.0.0-alpha2/bestpractices.html)

> There are basically two ways to deal with them,
> 
> ***Use a naming convention**  
> The idea is pretty simple, each time you publish a new integration of your module you give the same  
> name to the version (in #maven world this is for example 1.0-SNAPSHOT). The dependency manager  
> should then be aware that this version is special because it changes over time, so that it does not  
> trust its local cache if it already has the version, but check the date of the version on the repository  
> and see if it has changed.*
> 
>  ***Create automatically a new version for each**  
> in this case you use either a build number or a timestamp to publish each new integration version  
> with a new version name. Then you can use one of the numerous ways in Ivy to express a version  
> constraint. Usually selecting the very latest one (using ‘latest.integration’ as version constraint) is  
> enough.*
> 
> *But usually **we recommend to use the second one**, because using a new version each time you publish* a new version better fits the version identity paradigm, and can make all your builds reproducible,  
> even integration one. And this is interesting because it enables, with some work in your build system,  
> to introduce a mechanism to promote an integration build to a more stable status, like a milestone  
> or a release.

The example given is very interesting…

> *Imagine you have a customer which comes on a Monday morning and asks your latest version of your  
> software, for testing or demonstration purpose. Obviously he needs it for the afternoon 🙂 Now if  
> you have a continuous integration process and a good tracking of your changes and your artifacts, it  
> may occur that you are actually able to fulfill his request without needing the use of a dolorean to  
> give you some more time 🙂 But it may occur also that your latest version stable enough to be used  
> for the purpose of the customer was actually built a few days ago, because the very latest just break  
> a feature or introduce a new one you don’t want to deliver. In this case, you can deliver this ‘stable’  
> integration build if you want, but be sure that a few days, or weeks, or even months later, the  
> customer will ask for a bug fix on this demo only version. Why? Because it’s a customer, and we  
> all know how they are 🙂*

> *So, with a build promotion feature of any build in your repository, the solution would be pretty easy:  
> when the customer ask for the version, you not only deliver the integration build, but you also  
> promote it to a milestone status, for example. this promotion indicates that you should keep track of  
> this version in a long period, to be able to come back to it and create a branch if needed.*

**Note** this is the strategy at #Eclipse.org, where a **nightly build** (N20080420) can be promoted to an **Maintenance**  
release if quality is good enough. Below I’ve put an extract of a presentation document from © 2006 by Alex Blewitt;  
made available under the EPL v1.0 | 2006-03-20 | <http://www.rcpapps.org/>

We are now using the same naming convention at [INNOVEO](http://www.innoveo.com/) for our product

> [Eclipse](http://www.eclipse.org/) builds are of different type:
> 
> | **(N) Nightly** | - Built every night (whether successful or not) - Used to run quality metrics and whether tests have passed |
> |---|---|
> | **(I) Integration** | - Used to ensure that code works together - Used to run quality metrics |
> | **(M) Maintenance** | - Released at the end of each build cycle |
> | **(R) Release** | - Released at the end of each release cycle |
> 
> Each product is given a build id,
> 
> - Build Type (N, I, M or R)
> - Build ID (M20060118)
> - Build Label (M20060118-1600)
> - Timestamp of build (16:00 on the 18th Jan, 2006)
> - Each release corresponds to a specific build label
> - May also be known as other aliases in CVS
> - R3\_1\_2, vI20060118-1000, R3\_1\_Maintenance
> 
> To keep the #Eclipse ecosystem in step, everything is tagged
> 
> - Part of the build process tags the current code with vI20060320
> - A build is only promoted from N-&gt;I if there are no build failures
> - A build is promoted from I-&gt;M if there are no failures and all the  
>     functionality works to a satisfactory level
> - A build is promoted from M-&gt;R at the end of a release cycle and  
>     the quality is suitably high

*On the other hand, the main drawback of this solution is that it can produce a lot of intermediate  
versions, and you will have to run some cleaning scripts in your repository…*

I will present You later how you can achieve this goal with MAVEN and [Team City ](http://www.jetbrains.com/teamcity/)