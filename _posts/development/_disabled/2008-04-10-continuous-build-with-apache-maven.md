---

title: 'Continuous build with Apache Maven'
date: '2008-04-10T14:51:53+02:00'
author: 'Cédric Walter'



header:
  teaser: /assets/images/2011/11/maven-logo-black-on-white-1.png
tags:
    - ant
    - apache
    - architecture
    - built
    - ci/cd
    - code
    - configuration
    - continuous
    - core
    - created
    - dependencies
    - distribution
    - Download
    - downloaded
    - end
    - feature
    - files
    - foundation
    - functionality
    - maven
---

| *[Maven](http://maven.apache.org/) is a software tool for #Java project management and build automation created by Jason van Zyl in 2002. It is similar in functionality to the Apache Ant tool (and to a lesser extent, PHP’s PEAR and Perl’s CPAN), but has a simpler build configuration model, based on an XML format. #Maven is hosted by the Apache Software Foundation, where it was formerly part of the Jakarta Project.* |
|---|

*[Maven](http://maven.apache.org/) uses a construct known as a Project Object Model (POM) to describe the software project  
being built, its dependencies on other external modules and components, and the build order.  
It comes with pre-defined targets for performing certain well defined tasks such as compilation  
of code and its packaging.*

*A key feature of #Maven is that it is network-ready. The core engine can dynamically download  
plug-ins from a repository, the same repository that provides access to many versions of different  
Open Source #Java projects, from Apache and other organizations and developers. This repository  
and its reorganized successor, the #Maven 2 repository, strives to be the de facto distribution  
mechanism for #Java applications, but its adoption has been slow. *[Maven](http://maven.apache.org/)* provides built in support  
not just for retrieving files from this repository, but to upload artifacts at the end of the build.  
A local cache of downloaded artifacts acts as the primary means of synchronizing the output of  
projects on a local system.*

# [Maven](http://maven.apache.org/)* is based on a plugin-based architecture that allows it to make use of any application  
controllable through standard input. Theoretically, this would allow anyone to write plugins to  
interface with build tools (compilers, unit test tools, etc.) for any other language.* [from WikiPedia](http://en.wikipedia.org/wiki/Apache_Maven)