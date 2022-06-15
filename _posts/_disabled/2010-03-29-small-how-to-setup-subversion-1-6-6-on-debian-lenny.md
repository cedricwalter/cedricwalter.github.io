---

title: 'Small How to setup Subversion 1.6.6 on Debian Lenny'
date: '2010-03-29T17:44:48+02:00'
author: 'Cédric Walter'



header:
  teaser: /assets/images/2010/03/debian_logo_3.png
tags:
    - small
    - stable
    - subversion
---

![debian_logo](/assets/images/2010/03/debian_logo_3.png "debian_logo") ![subversion_logo](/assets/images/2010/03/subversion_logo_3.png "subversion_logo")

> **[Subversion](http://subversion.tigris.org/)** (**SVN**) is an open source version control system. It allows users to keep track of changes made over time to any type of electronic data. Typical uses are versioning source code, web pages or design documents.

Installing the latest [Subversion](http://subversion.tigris.org/) (svn) version 1.6.6 is a bit more difficult than just running apt-get install subversion, as the latest stable version in [Debian](http://www.debian.org/) Lenny is considered to be SVN 1.5.1 not Subversion 1.6.6

Edit the file */etc/apt/sources.list* and Add the line below to

# deb http://www.backports.org/debian lenny-backports main contrib non-free 

Add the public key from lenny-backports by running the following command

# wget -O – http://backports.org/debian/archive.key | apt-key add – 

Now update the latest package definitions

*\# apt-get update*

*\# apt-get -t lenny-backports install subversion*

Check that you now have the correct version by running

# svn –version  
svn, version 1.6.6 (r40053)  
 compiled Nov 23 2009, 16:16:41 

Copyright (C) 2000-2009 CollabNet.  
Subversion is open source software, see [http://subversion.tigris.org/](http://subversion.tigris.org/)  
This product includes software developed by CollabNet ([http://www.Collab.Net/)](http://www.Collab.Net/)). 

The following repository access (RA) modules are available: 

* ra\_neon : Module for accessing a repository via WebDAV protocol using Neon.  
 – handles ‘http’ scheme  
 – handles ‘https’ scheme  
\* ra\_svn : Module for accessing a repository using the svn network protocol.  
 – with Cyrus SASL authentication  
 – handles ‘svn’ scheme  
\* ra\_local : Module for accessing a repository on local disk.  
 – handles ‘file’ scheme  
\* ra\_serf : Module for accessing a repository via WebDAV protocol using serf.  
 – handles ‘http’ scheme  
 – handles ‘https’ scheme

I recommend you to always use the latest version (but hey backup/dump your repository before), you’ll see later that with Apache #Maven, it is also resolving some issues.