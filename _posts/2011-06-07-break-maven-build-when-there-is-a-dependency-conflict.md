---
id: 6833
title: 'Break Maven build when there is a dependency conflict'
date: '2011-06-07T19:10:44+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=6833'
permalink: /development/break-maven-build-when-there-is-a-dependency-conflict/
image: /wp-content/uploads/2011/11/maven-logo-black-on-white-1.png
tags:
    - apache
    - break
    - built
    - category
    - Coding
    - configuration
    - controlling
    - created
    - dependencies
    - dependency
    - depending
    - early
    - ensure
    - execution
    - interesting
    - maven
    - team
---

# Scenarios**

- You want to control #Maven during dependency resolution and break the build if some conditions are not met,
- You want to detect dependencies conflict early during the build,
- You want to avoid anybody in your team to use the dependency x in the version y

This is where the [Maven Enforcer Plugin](http://maven.apache.org/enforcer/index.html) will assist you:

> The Enforcer plugin provides goals to control certain environmental constraints such as #Maven version, JDK version and OS family along with many more standard rules and user created rules.

Add in your pom.xml the following to configure the plugin

```
<plugin>
    <groupId>org.apache.maven.plugins</groupId>
    <artifactId>maven-enforcer-plugin</artifactId>
    <version>1.0</version>
    <executions>
        <execution>
            <id>enforce</id>
            <configuration>
                <rules>
                    <DependencyConvergence/>
                </rules>
            </configuration>
            <goals>
                <goal>enforce</goal>
            </goals>
        </execution>
    </executions>
</plugin>
```

[There is a lot of standard rules that are already built in this plugin](http://maven.apache.org/enforcer/enforcer-rules/index.html), the one that is interesting us for controlling dependencies is the [dependencyConvergence](http://maven.apache.org/enforcer/enforcer-rules/dependencyConvergence.html) – ensure all dependencies converge to the same version.

> This rule requires that dependency version numbers converge. If a project has two dependencies, A and B, both depending on the same artifact, C, this rule will fail the build if A depends on a different version of C then the version of C depended on by B.

If during the resolution of artifact different version are found the build will fail with some nice logging infromation

```
Dependency convergence error for org.slf4j:slf4j-api1.6.1 paths to dependency are:  [ERROR] Dependency convergence error for org.slf4j:slf4j-api:1.6.1 paths to dependency are: 
+-org.myorg:my-project:1.0.0-SNAPSHOT   
+-org.slf4j:slf4j-jdk14:1.6.1     
+-org.slf4j:slf4j-api:1.6.1 
and 
+-org.myorg:my-project:1.0.0-SNAPSHOT  
+-org.slf4j:slf4j-nop:1.6.0     
+-org.slf4j:slf4j-api:1.6.0
```

You can use the standard dependencies management to enforce the version of **org.slf4j** you are coding/expecting.

In the same category, you can enforce dependencies in another way: force some dependencies to be never use thanks to the rule: [bannedDependencies](http://maven.apache.org/enforcer/enforcer-rules/bannedDependencies.html) – enforces that excluded dependencies aren’t included. And if you’re are still not satisfied, you can [even write your own rules](http://maven.apache.org/enforcer/enforcer-api/writing-a-custom-rule.html)!