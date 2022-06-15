---

title: 'Maven Tips and Tricks: Optimizing with the Maven Dependency Plugin'
date: '2009-10-28T17:44:30+01:00'
author: 'Cédric Walter'



header:
  teaser: /assets/images/2011/11/maven-logo-black-on-white-1.png
tags:
    - apache
    - dependencies
    - dependency
    - errors
    - HowTo
    - includes
    - maven
    - may
    - number
    - plugin
    - production
    - project
    - projects
    - properly
    - read
    - references
---

On larger projects, additional dependencies often tend to creep into a POM as the number of dependencies grow. As dependencies change, you are often left with dependencies that are not being used, and just as often, you may forget to declare explicit dependencies for libraries you require. Because #Maven 2.x includes transitive dependencies in the compile scope, your project may compile properly but fail to run in production. Consider a case where a project uses classes from a widely used project such as Jakarta Commons BeanUtils. Instead of declaring an explicit dependency on BeanUtils, your project simply relies on a project like Hibernate that references BeanUtils as a transitive dependency. Your project may compile successfully and run just fine, but if you upgrade to a new version of Hibernate that doesn’t depend on BeanUtils, you’ll start to get compile and runtime errors, and it won’t be immediately obvious why your project stopped compiling.

[Read mote at Sonatype Blog](http://www.sonatype.com/people/2009/10/maven-tips-and-tricks-optimizing-with-the-maven-dependency-plugin/)