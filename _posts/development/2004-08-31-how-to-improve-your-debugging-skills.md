---
id: 545
title: 'How to improve your debugging skills'
date: '2004-08-31T22:47:37+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=545'

---

![](java/guidelines/debug_im/dilbert2073207040504.gif)

# Introduction

I am presenting here some tips which may help You to correct bugs in programs or applications faster, If you have
comments or want to submit new ideas, [feel free to do it here](comment.html)   
Being good in the process of solving bugs is more or less a habit:

- You must discover the right informations (most if the time coming from logs file),
- Know a little bit the system and how components are interacting each other (software architecture),
- Use some rules and decide what to do (actions).

This document is all about theses points…and is targeted for java web applications.**

# Process

1. **Discovering a bug**. Depending on the type of person who report bugs: **You, end users, a pool of professional
   tester, your developer collegues**. You will have a different amount of informations and instructions to reproduce
   it. For a user, assertions like: "The system is not working, the system is slow" is common but it does not contains
   any real informations, except the fact that something is not working. Most of the time, a persons is responsibble to
   collect all user's complains, be careful since this person may filter the only useful informations as well. In this
   phase, you need to collect as many informations as possible.
2. **Use a bug tracking tool**, to keep a track of the bug, to have the name of persons and a description how to
   reproduce it (a web frontend tool like *Mantis* or *Bugzilla* is a good start). As a rule: *Explain a bug, is the
   first step for avoiding it!* Be descriptive when you assign a ticket in a tracking tool. If you still think You do
   not need such a tool, the quality of your application, cost controlling and distribution of tasks among developers
   before shipment will be disastrous,.
3. **Define priorities** based on bug severity and assign to a developer (I will suppose it's You :-)). All bug tracking
   let You define your own subset of priorities.
4. **Define Categories**: is it a graphical user interface (GUI), backend, input control problem? All bug tracking let
   You define your own subset of categories. | **Example of Error Severity Definitions taken from Mantis**  \| **
   Severity level** \| **Definition** \| **Description** \| **Consequences** \| \|---\|---\|---\|---\| \| **1** \| **
   Critical Error** \| Productive operation is not possible. *Example:*    – Crash, \| The system cannot be launched. \|
   \| **1** \| **Functional Error** \| Prevents the usage of the system .   *Examples:*    – A needed function is
   interrupted, – Loss of data, corruption of data – Usage of the system is hampered in a way that wrong results are
   created for critical data. – Performance or acceptance.o users \| The system cannot be launched. \| \| **2** \| **
   Median Error** \| The productive usage of the system is possible with some interference (a "workaround" can be
   established) *Example:*   – Deactivate some functions which are not working properly – A Hack in done in code which
   prevent the bug. \| A "workaround" will be implemented for a short time until the problem is properly fixed. \| \| **
   3** \| **Minor Error** \| T he system can be used and errors are imperceptible. \| The bug has to be enter in the bug
   tracking tool.Priority has to be assigned \| \| **4** \| **Change Request** \| Nice to have, improvments *Example:*
   – GUI is not perfect, colors has to be changed, font size, layout – Error in Titles, subtitles and blocs of text \|
   The bug has to be enter in the bug tracking tool.Priority has to be assigned. Usually these bugs are solved if the
   efforts is small or if developer has some spare time. \| |
   |---|


5. **Try to reproduce** this bug in your development environment, whih is in best case not so much different from
   production environment. Of course You do not have the same processor or memory or disk **but** **the same software
   components** (database, jvm, classpath, structure of data))
6. **Correct the bug** by changing code/avoiding exception case, rewriting algorithm, changing architecture, finding a
   workaround (hack), adapt functionnalities if it is possible.
7. **In an ideal world:**
    1. Write JUNIT testcase(s) to avoid further existence of the same issue. This will greatly improve quality of code!
    2. Document the bugs, correction, and in worst case: a workaround in a central place: a FAQ (*Frequently Asked
       Questions*) for developer

# Bug life cycle**

from Mantis

![](java/guidelines/debug_im/bug_lifecycle.jpg)

# Loging, logs files**

- Logs file are the oldest way to degug or monitor an application and it's probably the slowest way to debug or locate
  bugs. Most of the time, you need to reproduce the error in the system, and that can take a lot of time especially if
  the application has a very complicated workflow. A *workflow*: dialog and navigation through the application, ex:
  select a customer, view all account, do a transfer between 2 account This can be the execution of a use-case or a
  chain of use-cases.
- It is a common Fact: Without informations, nobody can debug a process and this even with a lot of chance.
- Worst case: developper use System.err and System.out for everything, they write "bullshit" in log output ("This is
  value of i= 2"). Developer do not use the same convention: "Exception : oups" or "@EXCEPTION: ioexception". You must
  force them to use a logging framework and teach them what to write and level of severity.
- Best case: Your applications is already using a logging framework like Log4j. | **Log4j let You reduce the amount of
  logs to a special part of your application or keep track of unusual case in a elegant mannner.** - The amount of
  logs (Level), - The location (file or TCP server, mail or…), - The domains in the system (packages, or components, or
  arbitrary part), - The layout is standard because the developer can not influence the apparence, you can add relevant
  information like thread name, time, date All these things can be changed without restarting your application and are
  controlled by a configuration file (.xml or .properties)! |


- Why logs are sometimes better? because during debugging You may change variables values in realtime to let the bug
  happen. This is why debugging session are called **transient**: the know how You bring during these sessions (where
  you set breakpoints, the iterations You do in code, how you manipulate variables/instances on the fly) is simply lost
  or not share with your collegue. In this case logging output is better because it may stay even after correcting the
  bug. This can be useful to avoid further existence of the same bug.
- Some mistakes:
    - Do not log too much mainly because of performance issues or try to use a preprocessor which remove logging
      statements before deploying to production…
    - Do not write stupid data during logging, e.g. "this is the value of i" or "iteration i", in this case use the
      debuger. for the same reasons avoid writing a 100Kb [XML](java/guidelines/www.xml.org), it is useless, write the
      XML in a file…
    - Do not rely on logging to rescue You from bad code: instead of losing correcting a bad code, why not
      try [refactor](java/guidelines/www.refactoring.com) it!

- Log amount can be enormous, especially when you track a bug at the same time with 4000 users working in production on
  many server (webserver, application server, servlet runner, database cluster)…. this is why You "must":
    - Use Unix or install [cygwin](http://www.cygwin.org/) (if your running under windows) only for having some command
      like grep, sed, tail, awk, ssh
    - Learn regular expression, to filter the logs file with command like grep, sed, awk
    - Watch logs files in realtime (when users or you are testing your application). Prefer the unix tail command
      because it is very efficient. You can even combine the tail with a grep command to filter logs output.tail -f
      Tomcat.out | grep 'error'
    - If You really can not work with a command line, use [Jedit](http://www.jedit.org/) which also support regular
      expression and will probaly have a tail pulgin.

# Silent exceptions**

The worst case in production is what I call "*silent exception*", these affects some users but not all. They are silent
because the users can still use the application but can have some really bad effects afterwards. Example: During a save,
your program encounter a problem, but do not rollback the transaction (due to a bad design or implementation) and save
an imcomplete state on disk or in the database. In fact, You must really not let them occur, do something before users
even remark the problem (It took always 2-3 days before a pool of end-users got crazy about a problem in general, this
time is comming from communication channel).

# How to avoid silent exceptions:**

- Define job (can be unix crontab) that parse log files daily or weekly with regular expression, and send a report. With
  log4j you can for example decide to send an email if a certain error level is thrown (level FATAL fro example)
- Explain to developer (with a training) differences between logging level, what is fatal, error, warning, what
  meaningful info they must add in their logging statements. Review their code by checking usage of logging levels, or
  reading logs when Your application is in DEBUG mode.
- If you need more error level (better granularity, most of the times it is not a good idea), You may want to define
  your own level. (and that's easy with log4j)

# Debugger and remote debugging**

The #Java Virtual Machine has an interface which allow to remotely debug an application

# Running your application remotely**

The code is running in the developer environment but not in production…one more time there is a difference somewhere,
finding it may not be easy…

- If you are running your application on remote server, are You sure that you deploy the latest code version? this is
  very easy to test:
    - You can for example run a Unix scripts which compare class CRC or
    - Use [beyond compare](java/guidelines/www.scootersoftware.com), a graphical tools to compare directories and
      contents even through FTP.
    - If You know the class name and package where the exception occurred (look at the stacktrace in log files), use a
      decompiler like JAD to verify if the latest code is there (follow the rule 1 : "never trust anyone" even You
      sometimes 😉 )
- Suspect the classloader:
    - You may have different version of the same class in the classpath = bad deployment
    - The classloader do not respect the servlet guidelines (the servlet runner Resin has some problems for example)
    - Order of jar in classpath, You can have dfferent parser version in different jar files for example.  
      In all cases above try:
        - to start the JVM in verbose mode, to see which classes is load a which moment.
        - Use the utility JWhich, inform You where the class was loaded (jar or directory)

# Process throw an Exception of Type X**

- If the process throw an exception and You know the exceptions class created. Use your IDE! all of them have the
  ability to trigger a breakpoint on that type. The debugger will then stop where the exception is thrown.

# Mistakes**

- Do not made a *runtime patch* (= identifying condition of exception and testing it through IF statements to avoid it),
  but instead try to find the real reason (design, init phase…) and operate before it occurs, maybe you will need to
  change your algorithm.
- Do not correct bug or listen to people which assign too many critical errors, if You can proove that it only affect
  0.1% of users in production. Definition of bugs priority is essential as ressources are always limited.

# Automate gathering of informations**

If the system crash, or run in troubles, try to create a journal written on the disk, it can contains

| **Example of
journal**                                                                                                                                                                                                                                                                                      |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| – Date: 13.02.2004 – Application name:   – Cause: application.io.database.CanNotOpenDB – Stacktrace: – memory state – user name to contact, useful in order to reproduce the bug – Meaningful state of the application like \* http user session \* main data structure: previous action done, |

# Advantages:**

- You can look periodically to see if some error appear often enough to be corrected
- You have some information on the state of the application, if youre design is good enough You can even imagine
  using/loading this state to put the application in the same status.

# Hotline or developer asking for support**

Capitalize problems and resolutions in a central place!

- Use FAQ (Frequently Asked Questions) Maybe the error has been already described and a solution found. You may create a
  lot of FAQs, for developer, manager, hotline. You can not save informations in 1 FAQs for all audience as you may need
  to adapt responses to the audience.
- Use the Bugs Tracking tool and search if this bug has exist in the past.   
  *Example*: A new bug has been discover, search in the database, if it has already exist, (bug status *closed)* then it
  has to be reopened otherwise you can create a new one.
- Do not listen to a developer on telephone when He ask for support, or need help and never trust totally what he says (
  depend on the person of course)! Always ask for the logs files, because most of the time, they tell the truth and
  based on my experience, nobody really read them!

# No code is perfect, accept it**

- Code is living! and like any living creature it is evolving (both in the good and bad way) Development time will or
  may improve some parts,
- Never trust a process ! Before judging that is your process who made the fault, please verify the previous process. (
  It let you think that you are one of the best programmer 3 minutes more 😉 Sometimes it can be a consecutive error, so
  only look at the first exception on top of the list.
- Bug in Apache frameworks or open source projects, of course their code is perfectible, people from Apache try to
  deliver highly reusable code, but they can not guaranty you that in some particular case it will always work. Remember
  that some database, OS are existing since 20 years and are constantly improved. So if you find a bug and find an
  elegant way to handle it, you can send them the corrected code with a short explanation. Do not forget that they do
  not have your particular application environment, and that they may need to reproduce all conditions before providing
  a correction to the community (and that's very time consuming).

# Links, references**

# Log4j**

# Junit** "Developers write code. Unfortunately, developers also write defects, most of which are injected during the

initial coding phase. The cheapest place to fix these defects is, likewise, during the initial phases of development. If
you wait until function or system testing to catch and fix defects, your software development costs will be much higher.
In this article , authors Scott Will, Ted Rivera, and Adam Tate discuss some basic "defensive" coding and unit testing
practices to make it easier for developers to find defects — and, more importantly, help to prevent them in the first
place."  
<http://www-106.ibm.com/developerworks/java/library/j-arrive/?ca=dgr-jw17j-arrive>

# Cygwin**