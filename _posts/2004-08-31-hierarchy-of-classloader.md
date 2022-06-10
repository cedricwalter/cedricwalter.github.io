---
id: 542
title: 'Hierarchy of classloader'
date: '2004-08-31T22:44:50+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=542'
permalink: /java/hierarchy-of-classloader/
tags:
    - classpath
    - directory
    - document
---

Â Read this document about classloader (PDF)

- System classloader is the content of the system variable CLASSPATH= you defined higher level
- Loader of the servlet runner is own classloader of Resin, tomcat or other
- Application classloader (controlled by resin or tomcat) find classes which are in the webapps directory (Application class).
- Your own classloader if you write own lower level

As soon as you request a class in one of these loader, the classloader will take the first found during its walk under this rules:

- if the class is not found at the current level (place where you request it, most of the time in your application), it will try to load it from the upper level, if not found it will continue and finish in the system classloader.
- There is no downward request.