---
id: 1523
title: 'Why it is not possible to develop any software &#8230;'
date: '2005-01-25T20:11:40+01:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=1523'
permalink: /java/why-it-is-not-possible-to-develop-any-software/
---

# **Bug** **Tracking** **Tool** <span style="font-weight: bold;"><span style="color: rgb(255, 0, 0);">Work in progress  
 

 <span style="font-weight: bold;">or Why it is not possible to manage any software development<span style="font-weight: bold;"> without a bug tracking tool  
 <span style="font-weight: bold;"><span style="color: rgb(255, 0, 0);">  
 A bug tracking system is basically a database linked to a frontend:

- The frontend can be a FAT client, understand a windows or application running on your pc and that need to be install by each developer/client, or may be
- Adhering to a light client server model: HTML frontend which submit queries to a server.

# Provide

 <span style="font-weight: bold;">

## <span style="font-weight: bold;">Tracability

 When was the bug open, and closed, what is its status now. Who has reported it (login is required and all system support profile (user, tester, manager, developer, administrator) and/or isolation of project). Did It already existed in a previous version (regression in code), etc…

## <span style="font-weight: bold;">Responsability

# <span style="font-weight: bold;">

 Easily dispatch responsability or find quickly who was reponsible for solving it, how much time was needed to close this bug, some system may send email automatically to developer to inform them… etc…<span style="font-weight: bold;">

## <span style="font-weight: bold;">Effort

 How difficult will it be to solve this issues, (can be a bugnote add by other developer). Most of the time, technical leader decide of the value of this field together with developers.

## <span style="font-weight: bold;">Priorities 

 How many bugs are still open at a date “t”, how do I determine the order in which I will solve them…etc<span style="font-weight: bold;">  
 

## <span style="font-weight: bold;">Standardisation of records

 <span style="font-weight: bold;">By forcing tester/customer to enter some mandatory fields in a graphical forms. It may avoid You to hear some ridiculous statement like: “the application is not printing, working”. It force the user talking a language You have decide together, having agreed on a “bug category” list is a very good and common example.

## Customization

 All modern bug tracking tool let You define and customize some part of the system according to your need.<span style="font-weight: bold;">

## <span style="font-weight: bold;">Addition of information

 <span style="font-weight: bold;">A screenshot is better than thousand word, a file create by the application, a memory dump, <span style="font-weight: bold;">anything that will help developer to reproduce the bug.

## <span style="font-weight: bold;">Statistics/Reporting

 A lot of very powerful queries can be executed. It is always interesting to know, how many improvement were done in the next/past releases, or if a team has use more power to develop new functionnalities (also <span style="font-weight: bold;">changes request which interest the customer the most) or loose time tracking some low level bug priority.  
 In case of reporting, Bugzilla support the following:

- Tabular reports – tables of bug counts in 1, 2 or 3 dimensions, as HTML or CSV.

- Graphical reports – line graphs, bar and pie charts.

 <span style="font-weight: bold;">Al of the above will have a positive result on:

- communication among the team of developers and customers,
- It will improve the product quality by several magnitude,
- Developer will be more productive as the will know what to concentrate on or what is worth to do.

 <span style="font-weight: bold;">AND Your customers will be happier!!

# Golden rules

1. A bug that can be reproduce can be analysed/corrected.
2. Correcting a bug is not always trivial, a correction may introduce new bugs.
3. The intrinseque quality of a software is always improved with a tracking tool over time

# <span style="font-weight: bold;">Some open source software:

 <span style="font-weight: bold;"> 

| <span style="font-weight: bold;">![](images/stories//java/buggie.png) | <span style="font-weight: bold;">Bugzilla (<http://www.bugzilla.org/><span style="font-weight: bold;">) is the more famous, use in a lot of open source application (Mozilla, Apache, and even eclipse) version 2.19.2 (MySQL+PHP, Solaris, #Linux, Win32, MacOS X, BSD) [370 companies](http://www.bugzilla.org/installation-list/) are currently using it. (Nasa, IBM, Mozilla and others)- [Wikipedia](http://en.wikipedia.org/wiki/Bugzilla) has a very brief article on it, [Features are listed here](http://www.bugzilla.org/features/) |
|---|---|
|  | <span style="font-weight: bold;">Mantis. (<http://mantisbt.sourceforge.net/>) A very simple bug tracking tool with limited search functionnality compared to bugzilla, a strong community but not so much stable release as expected. |
|  | <span style="font-weight: bold;">Buggit (<http://www.matpie.drw.net/PBSystems/products/buggit/Buggit.html>) no new release since 2000 and bounded to MS access, aka running only unde windows. Listed Here because I use to play with it in 2001. |
|  |  |
|  |  |

 [ ](http://www.bugzilla.org/features/)