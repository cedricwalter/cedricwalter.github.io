---

title: 'java.lang.ClassNotFound and ClassNotDefFoundError are different but ..'
date: '2004-08-31T22:44:12+02:00'
author: 'Cédric Walter'



tags:
- classpath
- definition
- directory
- java
---

Â **java.lang.ClassNotFound and ClassNotDefFoundError are different but what if my classes are in classpath?**

Â Remember:

- ClassNotDefFoundError is thrown if a class definition of the hierarchy is not located by the classloader
- ClassNotFound if the file or class can not be found in classpath. Remember only some servletrunner can open jar files,
  so having jar files in a directory without having them explicitely in classpath do not help much. You must have the
  name of jar file in CPath.