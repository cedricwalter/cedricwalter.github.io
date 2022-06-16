---

title: 'JoomlaPatches for Joomla 1.0.13 for securityimages 4.x only'
date: '2007-07-24T13:45:08+02:00'
author: 'Cédric Walter'



tags:
    - joomla
    - securityimages
---

![](/assets/images/2006/05/Joomla.logo_.png) The 21 July 2007 also marks an incremental bug fixing and security update for #Joomla! 1.0 series software.” \[..\]

[Joomla 1.0.13 is out!](http://joomlacode.org/gf/project/joomla/frs/)

These are original #Joomla 1.0.13 files modified to support com\_securityimages 4.x ONLY:

- Use securityimages in contact section
- Use securityimages in login module
- Use securityimages in registration component
- Use securityimages in administrator login page

 First upgrade Your site to #Joomla 1.0.13, thn apply this patch with FTP/SCP by overwriting one more time files

–> [Download HERE](https://waltercedric.com/new/?p=1152)

```
<strong>



--------------- 1.0.13 Stable Released -- [21-July-2007 16:00 UTC] -----------------</strong>

18-Jul-2007 Rob Schley

# Fixed admin session problems with immediate logout after login.

# Fixed a few misc. bugs.



11-Jul-2007 Sam Moffatt

^ Removed assumption that a group exists for a user (may not actually be true)





04-Jul-2007 Rob Schley

# Fixed a bug in the administrator login system that prevented users from logging in





02-Jul-2007 Rob Schley

* SECURITY A6 [LOW Level]: Fixed [#5630] HRS attack on variable "url"

* SECURITY A1 [LOW Level]: Fixed [#5654] Multiple fields subjected to cross-site scripting vulnerabilities

* SECURITY A7 [LOW Level]: Fixed possible session fixation vulnerability in administrator application





29-Jun-2007 Louis Landry

^ Hardened password storage mechanism to use a random salt

! Remember Me cookies will be invalid and require a re-login





20-May-2007 Rob Schley

# Fixed key reference lookups to match whole results only

# Fixed two help screen naming issues.

^ Changed RG_EMULATION warning message to refer to Global Configuration Setting





17-May-2007 Rob Schley

^ Moved register globals emulation controls into Global Configuration





15-May-2007 Rob Schley

# Fixed [topic,170296] : Typos in Search Mambot configurations





14-May-2007 Rob Schley

# Fixed [topic,153233] : "Mail to Friend" parameter checks not checking content item setings

# Fixed [topic,126371] : IE7 left align problem

# Fixed [topic,167745] : Added JavaScript alert for empty category title





28-Apr-2007 Rob Schley

^ Changed cookie naming conventions to not break when using HTTPS

# Fixed [topic,156116] : Optimzed queries for menu creation to improve performance.

* SECURITY A4 [ LOW Level ]: XSS issue in com_search and com_content

* SECURITY A4 [ LOW Level ]: XSS vulnerability in mod_login





16-Apr-2007 Enno Klasing

# Re-enabled Itemid behaviour of 1.0.11 (optional, default is behaviour of 1.0.12)


```