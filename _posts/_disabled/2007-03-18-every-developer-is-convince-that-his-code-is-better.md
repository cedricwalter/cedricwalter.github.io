---
id: 2911
title: 'EVERY developer is convince that his code is better'
date: '2007-03-18T19:23:04+01:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=2911'

tags:
    - Coding
    - java
---

- "I format my code like that", yes but every developer format his code differently …

- "Why having java collection if you can not use the directly", this speak of course against encapsulation and clear APIs…

- "I put accessors at the end" "i want to see relevant code at the beginning of classes and in the same order as execution" simply b… and not object oriented at all, they do not think about object message but files

- "I never use the keywords this, it is not needed"

At the end, You can discuss for hours, just for …. nothing, people don’t like to change, just auto format code, sort methods and most of them are lost/complains/recommit their code on yours…   
In order to force them or remove difference between coding practice, why not bringing [Checkstyle](http://checkstyle.sourceforge.net/) in your organization?

 [Checkstyle](http://checkstyle.sourceforge.net/) is a development tool to help programmers write #Java code that adheres to a coding standard. It automates the process of checking #Java code to spare humans of this boring (but important) task. This makes it ideal for projects that want to enforce a coding standard.   
[Checkstyle](http://checkstyle.sourceforge.net/) is highly configurable and can be made to support almost any coding standard. An example configuration file is supplied supporting the [Sun Code Conventions](http://java.sun.com/docs/codeconv/). As well, other sample configuration files are supplied for other well known conventions. ¨

The best #Eclipse plugin is available at <http://eclipse-cs.sourceforge.net/>

The only practicable way of is either to

- Bring all developer in a room, and let them vote all together which features is a warning, an error, or if it should not be removed from the common set of rules, but the discussion will be quite loud. You will hear a lot of "I do not need it, I know how to develop…"
- Force them to use the common SUN/Other standard without discussion. This may work in a bug company/team.

Eclipse has acleanup functionality (Windows – preferences – java – code styles – cleanup), which can be triggered at each save of a file (only in 3.3). I am personally using it since 2 months and refuse to live without. My settings are quite ambitious but reflect my intentions to keep my code as neutral as possible, it remove unneeded stuffs, format and add parenthesis where it is needed automatically.

– Add ‘this’ qualifier to unqualified field accesses  
– Add ‘this’ qualifier to unqualified method accesses  
– Qualify accesses to static fields with declaring class  
– Qualify accesses to static methods with declaring class  
– Change non static accesses to static members using declaring type  
– Change indirect accesses to static members to direct accesses (accesses through subtypes)  
– Convert control statement bodies to block  
– Add paranoiac parentheses  
– Remove unused imports  
– Remove unused local variables  
– Add missing ‘@Override’ annotations  
– Add missing ‘@Deprecated’ annotations  
– Remove unnecessary casts  
– Remove unnecessary ‘$NON-NLS$’ tags  
– Sort all members  
– Organize imports  
– Format source code

About sorting method

[A quite interesting discussion at Javaworld can be read here.](http://www.eclipsezone.com/eclipse/forums/t88299.html) A lot of users have post responses, and of course still do not get the point that theobject code is not linear, so manual human sorting based on this flawed assumption is only a failure. It is more than a failure also because every developer will sort code differently…so the more neutral behavior is Eclipse alphabetical sorting.  
Eclipse or any IDE have 3 magic keys: (<span style="font-family: Courier New,Courier,monospace;">F3) for opening declaration of the element, (<span style="font-family: Courier New,Courier,monospace;">F4) Open Type hierarchy and a back button (<span style="font-family: Courier New,Courier,monospace;">ALT – LEFT). You don’t/can’t have to read the code like a book, just to jump from one method to the other with F3 – back, use call hierarchy (<span style="font-family: Courier New,Courier,monospace;">CTRL -ALT – H). If you want to understand the execution flow, it is better to look at the sequence diagram ….  
 Moreover, I do not often stay in an object very long, because I always try to spread responsibilities across objects.