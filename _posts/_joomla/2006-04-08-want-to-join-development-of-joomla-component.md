---
id: 2436
title: 'Want to join development of Joomla component'
date: '2006-04-08T09:14:49+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=2436'

header:
  teaser: /assets/images/2006/04/section-Joomla.logo_.png
tags:
    - joomla
---

   
![](/assets/images/2006/04/section-Joomla.logo_.png)**mail from a new OpenComment Developer James Friesen:** *I found the CVS code. I realized that you have that in there as a branch of com\_akocomment. I was mislead because the project still has the old name. I found the opencomment code but I need to know what versions are which. I see that you are already working on a version for #Joomla 1.5.x but I are you also planning to finish the version for 1.0.x? I don’t think I’ll be upgrading to 1.5 for a while so I’m interested in making the 1.0.x version work. I connected to the CVS repository. I see that each regular #Joomla folder as a akocomment and opencomment version underneath it. What’s unclear to me is how to manage the different versions (for 1.0.x and 1.5.x) and how to run the latest version of OpenComment on my test server. If you can offer some tips that would be helpful.*

In fact I have still not found a correct solution to the problem of PHP versionning under PHPEclipse

- I don’t want to version joomla together with a database for each component i develop…otherwise I will have to version 5Mb (joomla) + database (or delta) + my component.
- PHPEclipse (or eclipse) only make CVS version at the project level…it refuse to check in a directory (a component or module for example) in a project

I really need to ask some people on #Joomla Forge, and find a solution to that issue.

Code version #Joomla 1.0.x or #Joomla 1.5.x?

OpenComment has been develop under #Joomla 1.0.8, it was working but was not fully tested…This code has been tagged and closed in a CVS version: v01\_00\_00  
The CVS HEAD contains the code for the 1.5.x version of #Joomla. If You want to continue version 1.0 You’ll need to open a CVS BRANCH of the version v01\_00\_00

How to join the development?

1. You need to install [Eclipse 3.1.1](http://www.eclipse.org/) and the plugin PHPEclipse (PHP eclipse do not run under 3.2Mx)
2. You need to install the latest JDK to run #Eclipse,
3. You need to try to install the PHP debugger.
4. You need to install MySQL4
5. You need to install a #Joomla 1.0.8 version or #Joomla 1.5.X version
6. You need to be accredited y me to have a commiter access to CVS

As You see a lot of things to do before ever being able to write code. In order to help You, I have decide to open:

# A new project at #Joomla Forge (It must be accepted first by the forge)**   
I found another project which aimed at the same result:

<div class="HeaderText"><small>**PHP Development Studio** </small><small>[Joomla/Mambo PHP Development Studio is a pre-packaged #Eclipse version aimed at the PHP /MySQL developer.](http://forge.joomla.org/sf/projects/php_development_studio) Includes tools like: PHPEclipse, Clay database modeller, SQL Explorer, QuickRex, Subversion client and FTP&amp;WebDAV client. Serveral licenses apply. </small>[](http://www.joomlatwork.com/)

 I will in the next hour provide a full runnable PHPeclipse+Joomla+ Mysql+ PHP+ everything….environment. So You only have to:

- Download and Install that big zip file.
- Connect to CVS
- I will deliver for each component in development (ex opencomment) a SQL script to initialize database. (And this because I develop the installer at the end of development.)