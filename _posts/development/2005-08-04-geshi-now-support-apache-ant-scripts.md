---
id: 1977
title: 'Geshi now support Apache Ant scripts!'
date: '2005-08-04T18:27:11+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=1977'

tags:
    - configuration
    - correctly
    - installation
    - mambo
---

I’ve created (based on ant.dtd) the php configuration file for GeSHi. It was done quite fast asuming that You’re using the right tool: It was done in 10 minute by taking java.php as example and using the UNIX command grep ([www.cygwin.com](http://www.cygwin.com/)), and Jedit ([www.jedit.org](http://www.jedit.org/)) for its SORT text plugin and power of regular expression

# Now GeSHi is able to highlight automatically your precious Apache ANT scripts (more than 300 keywords)**

Note: Jedit is recognizing 134 different languages, if YOu have some spare time… Beside the Ant scripts on my page (Java section) are now correctly displayed 😉

# Installation: **just drop the file *apacheAnt.php* (see my download section) in your geshi directory beside the others configuration file. In Mambo it should be in *\\mambots\\content\\geshi\\geshi*

<font color="#b1b100">**usage:  
 **

| Type in html text view |
|---|
| <font color="#b1b100"><pre lang="apacheant">    <target name="deploy apache" depends="cst eclipse">   <antcall target="deploy tasks">   <param name="source" value="${cvs}/${Tomcat}/${application}"/>   <param name="dest.dir" value="${deploy.tomcat.htdocs.dir}"/>   <param name="pattern.set" value="tomcat.htdocs.files"/>   <param name="exists" value="deploy.tomcat.htdocs.dir"/>   <param name="action" value="copy"/>   <param name="clear" value="true"/>   </antcall></pre> |
| Result |
| ``` <target depends="cst eclipse" name="deploy apache"></target> <antcall target="deploy tasks"></antcall> <param name="source" value="${cvs}/${Tomcat}/${application}"></param> <param name="dest.dir" value="${deploy.tomcat.htdocs.dir}"></param> <param name="pattern.set" value="tomcat.htdocs.files"></param> <param name="exists" value="deploy.tomcat.htdocs.dir"></param> <param name="action" value="copy"></param> <param name="clear" value="true"></param>  ``` |

<font color="#b1b100">