---
id: 1968
title: 'the component hashcash for Mambo is available in it&#8217;s version 1.0 !!!'
date: '2005-08-01T13:32:13+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=1968'
permalink: /joomla/the-component-hashcash-for-mambo-is-available-in-its-version-1-0/
image: /wp-content/uploads/2005/08/com_hashcash1.0.png
tags:
    - configuration
    - cryptographic
---

 **What’s new:**

- A lot more Object Oriented, I’ve tried to stabilize the interface, and avoid version breaking -> I reduce the surface of knowledge 3rd party component must have to facilate migration of existing component already using Hashcash.
- An admin panel. ![](/assets/images/2005/08/com_hashcash1.0.png)
- Logs files of activity on Your Site can now be viewed in the admin panel.
- Configuration is done with the help of panels and tabs, no file to edit.
- Use of Log4PHP everywhere to make debugging easier.
- More cryptographic plugins: RSA, MD4

For convenient download, I’ve put all 3 components in a zip file, If You extract it, you will have 3 zip files,

- com\_hashcash.zip
- com\_akobook.zip
- com\_akocomment.zip + its mambot

Download the package in my download section:  
Hashcash 1.0 pack: hashcash+ akocomment + akobook<span>new! 2005-08-01  
install them, in the right order, as specified below (click Read More first).

 **Installation of Hashcash version 1.0** manual revision 1.1

| **1.0 First install** |
|---|
| 1. Install *Log4PHP*, You will find it in my download section, it is a regular component, use the admin panel as usual 2. Install the latest version of *Hashcash for Mambo,* it is a regular component, use the admin panel as usual |
| **OR** |
| **1.0 Update** **of an existing hashcash** |
| 1. Remove the old version of *Hashcash for Mambo,* using the admin panel as usual 2. Install the latest version of *Hashcash for Mambo,* it is a regular component, use the admin panel as usual |

**2.0 Manuals changes**

You have to do these changes manually as the Mambo component installer can not do it for You

1. Open the file index.php of Your Site template. ex: <font face="Courier New" size="2">/templates/rhuk\_solarflare/index.php
2. add after the html <font face="Courier New" size="2"><head> tag this line:  
    <font face="Courier New" size="2"><?php include($mosConfig\_absolute\_path."/components/com\_hashcash/includes/head.inc"); ?>

**3.0 manuals Changes required because of log4php**

This tell log4php where the config file is, and include for the whole site a reference to the LoggerManager.

| edit in Mambo root the file /index.php and add following lines in bold |
|---|
| <font face="Courier New" size="2">include\_once( ‘globals.php’ );   require\_once( ‘configuration.php’ );    **define(‘LOG4PHP\_CONFIGURATION’, $mosConfig\_absolute\_path.’/components/com\_log4php/log4php.properties’);   define(‘LOG4PHP\_DIR’, $mosConfig\_absolute\_path.’/components/com\_log4php/api’);   require\_once(LOG4PHP\_DIR . ‘/LoggerManager.php’);** |

**4.0 AkoComment**: **(optionnal)**

| **First install of akocomment** |
|---|
| 1. You can simply install the component using the admin panel like any other component. |
| **OR** |
| **Update** **of an existing akocomment db   Since we do not wan to loose the Database and all precious comments, we will have to manually deploy the latest code** |
| 1. Using data from inside the zip, overwrite carefully each file on the server using FTP |

If install succeeded You should see in the comment section this new footer  
**Powered by AkoComment 2.0! and Hashcash 1.0**

**5.0 AkoBook** **(optionnal)**

| **First install of akobook** |
|---|
| 1. You can simply install the component using the admin panel like any other component. |
| **OR** |
| **Update** **of an existing akobook   Since we do not wan to loose the Database and all precious guestbook entries, we will have to manually deploy the latest code** |
| 1. Using data from inside the zip, overwrite carefully each file on the server using FTP |

If install succeeded You should see in the Guestbok section this new footer  
**Powered by AkoBook V3.42 + hashcash 1.0**

**Know Bugs:**

– the CryptoStrategy factory sometimes return MD5 instead of the right cryptographic algorithm (waht a mess PHP4). As a result, If you Want to use SHA1, You will have to overwrite these lines in CryptoStrategy::encrypt($string)

<font face="Courier New" size="2">$this->logger->debug("Default encrypt: ".$string." with MD5");   
return md5($string);

It is still here and I do not know why…