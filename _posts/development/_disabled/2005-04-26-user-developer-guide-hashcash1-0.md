---
title: 'User/Developer'
date: '2005-04-26T21:39:59+02:00'
author: 'Cédric Walter'
header:
teaser: /assets/images/2005/04/hashcashlogo.png
---

Forcing the spammer to pay the price (computing power) before submitting rubish to Your homepage (in comments or
guestbook section for example). The user will have to create a new cryptographic value of a hidden field (Javascript
code provided) and that may take 1 to 2 seconds, but may be more with RSA 1024…. This also do not allow robot to easily
sumbit code without parsing Your HTML page before… User developer
A version 1.0 will be release soon….GNU/GPL

# Developer Documentation

@component: com\_hashcash  
@copyright (C) 2005 Walter Cedric for Mambo Integration  
@license http://www.gnu.org/copyleft/gpl.html GNU/GPL

# Free Software

# 3rd partly Javascript

- RSA: [http://www.ohdave.com/rsa/](http://www.ohdave.com/rsa/)
- SHA1/MD5/MD4: [http://pajhome.org.uk/crypt/md5/index.html](http://pajhome.org.uk/crypt/md5/index.html)

# 3rd partly PHP

- MD5/RSA/SHA1 part of PHP language.

# Based on:

- Plugin Name: WordPress Hashcash Manual Version
- Plugin URI: [http://dev.wp-plugins.org/wiki/wp-hashcash](http://dev.wp-plugins.org/wiki/wp-hashcash)
- Description: This is a manual version of wp-hashcash.
- Author: Matt Mullenweg, Elliott Back
- Author URI:   
  [http://photomatt.net/](http://photomatt.net/),   
  [http://elliottback.com](http://elliottback.com/)  
  Version: 1.6
- Hat tips:   
  C.S. – [http://www.cimmanon.org/](http://www.cimmanon.org/)  
  Gene Shepherd – [http://www.imporium.org/](http://www.imporium.org/)  
  John F. – [www.stonegauge.com](www.stonegauge.com)  
  Magenson – [http://blog.magenson.de/](http://blog.magenson.de/)  
  Matt Mullenweg – [http://photomatt.net/](http://photomatt.net/)  
  Matt Warden – [http://www.mattwarden.com/](http://www.mattwarden.com/)  
  Paul Andrew Johnston – [http://pajhome.org.uk/crypt/md5/](http://pajhome.org.uk/crypt/md5/)

Kudo to all developer above! Thanks to GPL I do not have to reinvent the wheel…

# Links:

- [http://dev.wp-plugins.org/browser/wp-hashcash/trunk/](http://dev.wp-plugins.org/browser/wp-hashcash/trunk/)
- [http://www.cypherspace.org/adam/hashcash/](http://www.cypherspace.org/adam/hashcash/)
- [http://www.lapo.it/hashcash.html](http://www.lapo.it/hashcash.html)
- [http://www-128.ibm.com/developerworks/linux/library/l-hashcash.html](http://www-128.ibm.com/developerworks/linux/library/l-hashcash.html)
- [www.hashcash.org](http://www.hashcash.org/)

## Requirements

- Component: com\_hashcash – cryptographic facility for Mambo
- Component already using com\_hashcash: com\_akobook 3.42 and hashcash1.0 and com\_akocomment 2.0 and hashcash
  1.0
- Required prior to installation: com\_log4php

## Principe:

Forcing the spammer to pay the price (computing power) before submitting rubish to Your homepage. The user will have to
create a new cryptographic value of a hidden field (Javascript code provided) and that may take 1 to 2 seconds, but may
be more with RSA 1024….  
This also do not allow robot to easily sumbit code without parsing Your HTML page before…

## How It works in details

This code add a supplementary hidden field in all html form submitted to the user.

– The hidden field name has a random name (Hname), each time different at each load of the page  
– The hidden field value is a cryptographic hashcode (MD5, MD4 or RSA) value. (Hvalue),

Hvalue = Crypt(UserSessionID + mosConfig\_absolute\_path + UserBrowserAgent +
TodayDate(F j, Y, g a))

Crypt is the cryptographic PHP function: MD5, MD4 or RSA

If the user want to submit a comment, the browser with the help of a small javascript will have to  
– locate the hidden field name (Hname) with javascript: (function replace())  
– rehash with MD5 the hidden field value (Hvalue) (it is time consuming)  
and send everything back to server.

If the spammer do not follow the challenge, the comment wont be accepted….  
You Can switch ON/OFF this feature in Admin control panel under the tab posting of component akocomment and akobook

## Configuring HashCash

# open file /com\_hashcash/settings.php with Your favorite text editor:

| <font face="Trebuchet MS">key in file | <font face="Trebuchet MS">values | <font face="Trebuchet MS">
notes |  |
|---|---|---|---|
| $hashcash\_use = ‘md5’ | ‘md4′,’md5’ or ‘sha1’ | md4, md5 or sha1 |  |
| $hashcash\_debug | true/false | Will write all informations in page by from submit |  |
| $hashcash\_log\_active | true/false | Spams submission will be written to logs |  |
| $hashcash\_log\_all | true/false | Log accepted and refused post -> be careful with size of logs! |  |
| $hashcash\_log\_file | $GLOBALS\[‘mosConfig\_absolute\_path’\] . "/components/com\_hashcash/hashcash.log" | Location of the logs file |  |
| $hashcash\_Notify\_Admin | true/false | Notify an administrator by email? |  |
| $hashcash\_log\_size | integer | each 64kb a mail will be sent to admin with the content of logs |  |
| $hashcash\_AdminEmail | valid email | admin email |  |

# Note: An Administrator frontend will be shipped with release 1.0

![](/assets/images/2005/04/hashcashpanel.jpg)

# Protecting Your Mambo Forms against Spammers and Robots

| php code send to the client (in the code where You create the form) |
|---|
| \# include and instance of Object, in the portion of code where Hashcash is needed, note that I have here a strong reference to the algorithm…(Here MD5)   \# This will be soon a factory   include($mosConfig\_absolute\_path.’/components/com\_hashcash/plugins/md5/php/CodeInliner.php’); $MD5CodeInliner =&amp; new MD5CodeInliner(true); … \#Insert this JS (
js1), the browser will use this js during submit to localize the random hidden field name, and encrypt its value   echo $MD5CodeInliner->insertHashCashJavascript(false); … \#Insert this code in your submit or validation JS method, this will call 
js1   echo $MD5CodeInliner->insertSubmitJavascript(); … \#add the hascash input field in Your form   echo $MD5CodeInliner->insertHiddenField($contentid); |

### Verifying on the server in Your code that the user submission can be accepted

| in the code where You validate and do somethig interesting with the submission |
|---|
| include($mosConfig\_absolute\_path.’/components/com\_hashcash/HashcashChecker.php’); $HashcashChecker =&amp; new HashcashChecker(); $submission = $HashcashChecker->check($submission, $contentid); $commentIsAccepted = strlen($submission) != 0; if ($commentIsAccepted)   { … } else |

## Changelog:

# Real object model, abstract class and factory still missing…