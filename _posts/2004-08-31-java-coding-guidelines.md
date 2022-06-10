---
id: 537
title: 'Java Coding guidelines'
date: '2004-08-31T22:39:25+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=537'
permalink: /development/java-coding-guidelines/
tags:
    - java
---

Â

**![](java/im/T7.gif)Java Coding guidelines![](java/im/logo_right.gif)**

I won't give you here all explanations on how to improve your code, only some references to external ressources, a lot of people have done a good job (hard work, respect!). **Feel the need to improve your code**, and you will follow more or less the same road

Kent Beck often makes a statement about himself, "*I'm not a great programmer; I'm just a good programmer with great habits*."

"*keep it small to keep it beautiful*" me speaking about refactoring 😉

"*Tests don't prove the absence of bugs*"

*"Good judgment comes from experience. Unfortunately, the experience usually comes from bad judgment*"

*Occam's razor (14th century philosopher monk): No complexity beyond what is necessary.*

![](java/guidelines/dilbert.jpg)

**Things you may do to improve your code**

- Respect the #Java guidelines, a lot of white papers can be found on internet.
- Never return a collection (Vector or Hashtable or) in java, prefer to return a class which hide the real collection, better return an interface, this will allow to refactor the code if performances issues are found. Difficulty is of course to define a good contract between your code and client which will use it (good interface). Never use a Vector and let the client cast or extract Object type, let the compiler protect yourself against runtime error!!!!
- If you need to have diffferent implementation of a class, but do not want to have one of them in memory (for example because of costly licences), you need a dynamical factory (Abstract polymorphical factory) Here is a templates of this ZIP file
- Use idea of design from open source project! a lot of great and skilled people are working for the fundation Apache for example.
- Use Object development (of course) but do not rely on interface shipped with 3rd party objects you are buying/integrating, always create a wrapper around them or better define your own interface, use a strategy pattern….
- A good code is a small code! **responsabilities must be properly localized** (do not be lazy, create more objects!) and not spread around or worse localized in one object (spaghetti code). Naming convention is very important! you can distinguish an orange from an apple? right so do not forget that the easiest refactoring methods are: rename methods, rename variables, rename objects, rename packages, move code to…
- Use a logging framework or better use nothing else than [log4j](http://www.waltercedric.com/java/guidelines/www.jakarta.com/log4j) or any implementation based on it. It is a great advantage to know how many bugs or errors has occured in production and when. Moreover changing debug level without rebooting server, or changing output destination are neat features [FAQ](http://jakarta.apache.org/log4j/docs/FAQ.html).
- Feel the need to avoid comments! they are not really synchronized (some people prefer to say NEVER synchronized) with the source code. If you still need comments, ask yourself if you can not use these comments to rename or reorganize the code they belongs. You may only explain: designs patterns used, bugs corrected (prefer to write a Junit testcase), algorithms or *hacks* (hacks are temporary solutions that do not create any major problems).
- Do a daily integration, this is quite simple with eclipse and if you use [ANT](http://jakarta.apache.org/ant/), read more at <http://www.martinfowler.com/articles/continuousIntegration.html>
- Use XML! yes it is memory consuming, slow to read (not always) but it has a so much advantages that they can not be listed here (or not now),
- Prefer lossely coupled system or process, for example try to create a meta descriptions data storage if you have a lot of layers in your system or use webservices

**Optimizations**:

Of course some habits of coding are really bad, but nearly all compilers are catching them, and can do some agressive optimizations… you will never thinks of, moreover some JVM can optimized the bytecode on the fly (HOTSPOT) or do second pass during compile time. Do you really think that you will speed up your program when you take care of writing rules or try to use a non readable algorithm which contains a lot of tricks? if you do so, you will not see the evil loop where your system will hang for seconds….Keep always in minds:

- Do not try to start any optimizations too early, code must be readable and high level.
- Use a profiler, if you are not satisfied with performances! and locate precisely the place where you loose time or eat memory. Memory leaks can be found with profilers too (yes memroy leaks are existing in java 🙂 ). This can be done by a core taskforce team, generally in one/two week(s).
- Remember that when you will ship your code to customers, new cpu or machines will be available, chance is that a better cpu will cost less than hours of optimizations.
- Techniques to improves performances are well documented, and quite easy. I use generally: pooling, load balancing, caching, precomputing values (you remember people using sinus table accurate at 10-3 for demo on amiga or HP48?), some patterns are helpful too, lazy evaluations, lazy initialization, delayed constructions! and so on…It is like a new world!
- If you use a storage system, like a database, you can use an external ressource to improve IO, turn on the SQL query analyzer in SQL or Oracle to see what is going on. Any DBA (Database Administrator) can determine really fast where problems are: no index, bad design, foreign keys not well choosen, too much or bad join of tables, tables are too big, temporary table not empty after use, not enough virtual memory tuning, no cache tuning, bad JDBC-ODBC driver….
- JVM parameters tuning: after using the profiler, you can determine the optimal size of heap and stack, turn hotspot on or cut it off because sometimes it has some bad effects.
- User determine if a system is slow, or after loading the applications you can decide to improve your code if needed (memory used, cpu used, io used …). Remember end users are humans (not always 😉 for me), you can disturb them or make the wait look shorter if you use a hourglass or vertical slider, system must be responsive to user interactions! display something but do not hangs during seconds. A small javascript code can give you 40% more "hanging" time with great users acceptance

**Things you may read to improve your code**

- Read news about java technologies: [www.javaworld.com](http://www.javaworld.com/), project hosted at [www.soundforge.net](http://www.soudforge.net/) and so on. You must keep yourself inform about the latest state of the art.
- Register at <http://developer.java.sun.com/developer/> a lot of great forums, and a knowledge database can be freely browsed.
- **Refactoring:** a change made to the internal structure of software to make it easier to understand and cheaper to modify without changing its observable behavior. (from Martin Fawler's book: Refactoring)  
    [www.refactoring.com](http://www.refactoring.com/) and techniques associated.   
    My own definition would be: **never be satisfied** with your code! when it works and has been tested, write JUnit testcases and take 10 min to refactore your code each day. The book above has a good introduction about why it is important and how you can explain it to your manager. read one refactoring technique per day, it will also help you to improve your code.
- **AntiPattern**: "An AntiPattern is a literary form that describes a commonly occurring solution to a problem that generates decidedly negative consequences.
- AntiPatterns are a method for efficiently mapping a general situation to a specific class of solutions.
- AntiPatterns provide real-world experience in recognizing recurring problems in the software industry and provide a detailed remedy for the mostÂ common predicaments.
- AntiPatterns provide a common vocabulary for identifying problems and discussing solutions.
- AntiPatterns support the holistic resolution of conflicts, utilizing organizational resources atÂ several levels, where possible.
- AntiPatterns provide stress release in the form of shared misery for the most common pitfallsÂ in the software industry" from
**Reference book is AntiPatterns Refactoring Software, Architectures, and Projects in Crisis William J. BrownÂ – Raphael C. MalveauÂ -Â Hays W. McCormick III – Thomas J. Mowbray -Â John Wiley &amp; Sons, Inc.**


- [www.extremeprogramming.com](http://www.extremeprogramming.com/) follow this rules to respect deadlines and work in an ambitious project.
- [www.objectsbydesign.com](http://www.obejctsbydesign.com/) use patterns in your projects! and use comments saying which one you are using and why.It help a lot to understand the code.
- [www.bruceeckel.com](http://www.bruceeckel.com/) and his famous free book "Thinking in #Java" is a must for all developer (entry level but sometimes it is good not to forget basics of languages or OO)
- Checked exceptions are not supported in #Java but can be implemented, read here: <http://www.mindview.net/Etc/Discussions/CheckedExceptions>
- Read cocomo in order to know what can make sense, statistics released by an university in USA that show influence of parameters during a project: what does a guru bring to a project?…what are the cost of a reatime application? how do I determine how long it will take?