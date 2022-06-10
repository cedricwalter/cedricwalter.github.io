---
id: 2323
title: 'The danger of destop search engine&#8230;'
date: '2006-02-24T15:33:29+01:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=2323'
permalink: /internet/the-danger-of-destop-search-engine/
image: /wp-content/uploads/2005/05/googledesktopsearchlogo.gif
tags:
    - convenient
    - encryption
    - google
---

# **

| ![](/assets/images/2005/05/googledesktopsearchlogo.gif) |  |
|---|---|

# Shocked !**

I today discover how some people work with their passwords…not everyone is able or want to track what happen behind the scene or how things can be broken in the computer world…but let me explain why I was shocked….

# The case**

A group of people is responsible for infrastructure and use a lot of different passwords for all machines, stages, ssh, ftp. They decide to store them all in a convenient word documents, and to encrypt this file with PGP (Pretty Good Privacy), they are using either MSN desktop search or Google Desktop search…I look at one of them…  
He decrypt the PGP encrypted file (the word document), and save it on the desktop, open, work, then close it…

# SHOCK!**  
This is the worst security misunderstanding example and should probably be use in school, what is even worse it that it take me 10 minutes of explanations to say that he has no security at all… since it was such a surprise for him.

If you think that it is a good way to work or would have done the same, prepared You to a big disappointment, I will make a lot of screen shots to show You how worse it is.

# Note this is not Google Desktop Search nor MSN Desktop Search fault, and I still use their tool, it is user missunderstanding of sense of security.**  


# Why was I shocked?**

1. First using Word document, while it is convenient as it allow to do tables, paragraph, change colors, it is in any way:

- Not portable: to open this file, you will need to have Microsoft Office on all machines. if You need to open it on a server where Microsoft Word is not installed…only VI or text pad, You will get in trouble…
- A closed source format, you need to use a 120Mb application to open a file which may be 6kb big (as TEXT file), not to speak about legacy problems: will You be able to open it in 2 years or what happen if Microsoft Office screw it?
- A security nightmare: Microsoft Wordalways create a lot of buffers everywhere on disk (understand copy your file in c:\\windows\\temp for example or in your Document and Settings directory) which lead rapidly to a security problem

2. User has converted a file from an encrypted format (a PGP file) to the disk! when MSN Desktop Search is still monitoring user interaction!  
This is probably the biggest problem, as soon as the user create, modify or delete a file, the Desktop Search will see it and process the content of file (process is call indexation) and take some snapshots of its content! Deleting the file from disk wont delete snapshots in index either!

3. Users may forget to delete or encrypt all instances of file, moreover user will have hard time to really screw files from disk as there is no wiping solution integrated into Windows…  
  
Let me show You how to loose passwords…

I have on disk a PGP file, and I am proud I have chosen a well know encryption tool with a 8192 military encryption key…  
![steal password with Desktop Search](/assets/images/2006/02/passwordStealingDesktopSearch-01.gif)

I decide to decrypt it and save result on disk (big mistake)  
![password stealing with Desktop Search](/assets/images/2006/02/passwordStealingDesktopSearch-02.gif)

In between and without any warning the Desktop Search tool has index its content and take a snapshot of it….  
I Open the file  
![password](/assets/images/2006/02/passwordStealingDesktopSearch-03.gif)

I decide to delete it, empty the trash, then decide to query my favorite Desktop Search tool, I foud the file

![](/assets/images/2006/02/fileIsStillThere.gif)  
   
and worse content is readable from the search cache:  
![](/assets/images/2006/02/readableFromCache.gif)  
even if the file do not exist anymore on disk….

<font size="5"><big><big>And Now How to solve these issues </big></big>  
  
with ![](/assets/images/2005/05/googledesktopsearchlogo.gif)

1. Review Your Desktop Search configuration

Do not allow Your Desktop Search tool to fully scan your hard disk! exclude disk partition and directory that should be excluded. At least file that will be copied wont be cached in index.  
![](/assets/images/2006/02/passwordStealingDesktopSearch-04.gif)  
<small>As in Google preferences page, I use the drive M (virtual) only for mounting my encrypted vault…</small>

Do not allow Desktop Search tool to index HTTPS pages! Do You really want to have snapshot of your eBanking session saved in an unsafe ways on disk? Be careful when checking one of those options:  
![](/assets/images/2006/02/passwordStealingDesktopSearch-06.gif)  
<small>As in Google preferences page</small>

Review Your index content! Type periodically some words and review the results, ex search for password, picture of familly, the word sex if you are often on some pages ;-), bank account credential etc…There is room for a small tool launched at regular interval or a word blacklist option in Google.

Encrypt Your Index file, Google is able to do it, not MSN Search. While it will make Your search query slower, I dont think it is even noticeable.  
![](/assets/images/2006/02/passwordStealingDesktopSearch-05.gif)  
<small>As in Google preferences page</small>

Do not use PGP to encrypt unique file but use PGP disk to create a VAULT: PGP disk is not free, but You may want to try TrueCrypt here. The idea is to create a virtual disk partition where all file can be saved without the need to copy them in an unsafe area. This kind of technology also allow You to set unmount options (unmount after XX minutes of inactivities, unmount virtual disk after loggoff )