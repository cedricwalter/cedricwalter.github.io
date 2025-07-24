---
title: Avoid infamous change – restart – wait – check development lifecycle!
summary: "Stop waiting for build & deploy make code changes. Write code and refresh your browser!"
type: posts
date: 2015-01-14T13:36:39+00:00
url: /avoid-infamous-change-restart-wait-check-development-lifecycle/
cover: https://www.waltercedric.com/2015/01/devlopment.webp
tags:
  - java
categories:
  - Developer
---
Stop waiting for build & deploy make code changes. Write code and refresh your browser!

Use http://ssw.jku.at/dcevm"  and add java fields, methods, classes and use them without restarting your application server, it 's a modification of the HotSpot VM that allows unlimited class redefinition at run-time. You can add/remove fields and methods and change the super types of a class at run-time. The features of http://ssw.jku.at/dcevm are likely to be integrated in a future update of #Java 8 as part of http://openjdk.java.net/jeps/159

View code changes instantly and increases team velocity!


|                                   |          DCEVM          |          JVM Hot Swap          |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Changes to method bodies               |  yes                                                                                                                       | yes                                                                                                                                                                                          |
| Adding/removing Methods                | yes                                             |  no                                                                                                                                                                                     |
| Adding/removing constructors           | yes                                             |  no                                                                                                                               |
| Adding/removing fields                 | yes                                             |  no                                                                                                                               |
| Adding/removing classes                | yes                                             |  no                                                                                                                               |
| Adding/removing annotations            | yes                                             |  no                                                                                                                               |
| Changing static field value            | yes                                             |  no                                                                                                                               |
| Adding/removing enum values            | yes                                             |  no                                                                                                                               |
| Modifying interfaces                   | yes                                             |  no                                                                                                                               |
| Replacing superclass                   | yes                                             |  no                                                                                                                               |
| Adding/removing implemented interfaces |  no                                                                  |  no                                                                                                                               |
| Initializes new instance fields        |  yes                                                                                                                       |  no                                                                                                                               |

You 'll need to patch your own version of java (latest as of today is 1.7.71)

This project is similar to [JRebel][1]. Main differences are:

  * HotswapAgent (DCEVM) supports Java8!
  * HotswapAgent does not need any additional configuration for basic project setup.
  * JRebel is currently more mature and contains more plugins.
  * JRebel is neither open source nor free.
  * JRebel modifies bytecode of all classes on reload. You need special IDE plugin to fix debugging.
  * HotswapAgent extraClasspath is similar to JRebel configuration
  * HotswapAgent adds watchResources configuration

## Patching Java to use DCEVM

Download from <https://github.com/dcevm/dcevm/releases> the right patch for java 1.7.71 it is <https://github.com/dcevm/dcevm/releases/download/light-jdk7u71%2B2/installer-light-jdk7u71.2.jar>

Run it as administrator, it will find your installed Java JDK or you can use "Add installation directory"


Click on both Replace by DCEVM and Install DCEVM as altjvm

Now add to all  your launchers the following -XXaltjvm=dcevm

# Reloading Spring Bean

Each application framework (Spring, Hibernate, Logback, ) needs special reloading mechanism to keep up-to-date after class redefinition (e.g. Hibernate configuration reload after new entity class is introduced). Hotswap agent works as a plugin system and ships preconfigured with all major framework plugins. It is easy to write your custom plugin even as part of your application.

Download agent.jar from <https://github.com/HotswapProjects/HotswapAgent/releases>

Save anywhere on disk, e.g. in C:\java\hotswap-agent.jar for example

add to all  your launchers the following -javaagent:C:\java\hotswap-agent.jar

Spring plugin uses agent services to:

  * Modify root Spring classes to get Spring contexts and registered scan path
  * Watch for any resource change on a scan path
  * Watch for a hotswap of a class file within a scan path package
  * Reload bean definition after a change
  *  and many other

# References

  * <https://github.com/dcevm/dcevm/releases>
  * <https://github.com/HotswapProjects/HotswapAgent>

 [1]: http://zeroturnaround.com/software/jrebel/
