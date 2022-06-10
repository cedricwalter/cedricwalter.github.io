---
id: 3795
title: 'Akobook Plus 5.1.0 release!!!!'
date: '2008-09-17T17:35:20+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=3795'
permalink: /joomla/akobook-plus-5-1-0-release/
---

**[![compat_15_native](/assets/images/2008/09/compat_15_native_thumb.png)](/assets/images/2008/09/compat_15_native.png) [![ext_com](/assets/images/2008/09/ext_com_thumb.png)](/assets/images/2008/09/ext_com.png)**

**Up and running on my DEMO2 server** (refresh every 30 minutes!)   
[![demo2.waltercedric.com](/assets/images/2008/08/demo2.waltercedric.com_.jpg)](http://demo2.waltercedric.com/) or [direct link](http://demo2.waltercedric.com/index.php?option=com_akobook&Itemid=53)

**Download link:**   
[http://www.waltercedric.com/downloads-for-joomla/doc\_details/79-comakobookplus-510.html](http://www.waltercedric.com/downloads-for-joomla/doc_details/79-comakobookplus-510.html)

Also running on my Homepage…

[![guestbookOnMySite](/assets/images/2008/09/guestbookOnMySite_thumb.png)](/assets/images/2008/09/guestbookOnMySite.png)

<font color="#c0c0c0">I am currently developing this release due to many requests in the forum. 

<font color="#c0c0c0">UPDATE1: wont be release today (tonight for me, it is already 23:30PM GMT+1), still testing, you [<font color="#c0c0c0">can apply as a beta tester by contacting me HERE](http://www.waltercedric.com/-contact-me.html)<font color="#c0c0c0">   
Small change request can always be integrated, please use my forum and create a new thread in the right section

**What’s new?**



**NEW**: protection against Cross Site Request Forgery ([CSRF](http://en.wikipedia.org/wiki/Cross-site_request_forgery_WikiPedia)) attack, thanks to [Joomla! framework, see here](http://docs.joomla.org/How_to_add_CSRF_anti-spoofing_to_forms) **NEW**: use recaptcha to protect guest book against spammer.   
**[![akobookPlus5WithRecaptcha](/assets/images/2008/09/akobookPlus5WithRecaptcha_thumb.png)](/assets/images/2008/09/akobookPlus5WithRecaptcha.png)** 

**NEW**: you may prefer security images instead of recaptcha, the guest book now support securityimages5.x.x!

[![akobookPlus5WithSecurityImages5](/assets/images/2008/09/akobookPlus5WithSecurityImages5_thumb.png)](/assets/images/2008/09/akobookPlus5WithSecurityImages5.png)

**BUG:** [Akobook Fix for Number of Guest Entries and Pages](http://forums.waltercedric.com/index.php?topic=549.msg2025#msg2025) thanks to user **[mygeek911](http://forums.waltercedric.com/index.php?action=profile;u=724)**

**BUG:** on some host blank page during install or in some menu has been resolved, it was old code having php code embedded starting with <? … ?> (PHP4 support both) instead of <?php … ?> (PHP5 only support this)

**BUG****:** layout bug in all front end page solved, not all view were using 100% of the view 

**[![akobookPlus5Layout](/assets/images/2008/09/akobookPlus5Layout_thumb.png)](/assets/images/2008/09/akobookPlus5Layout.png)** 

**NEW**

 : the installer do not remove or recreate the tables in database if already present. The installer will detect it and propose you to remove or install new table.

**NEW**: **[Admin Comments all lowercase…](http://forums.waltercedric.com/index.php?topic=551.0)** now you can change this behavior in admin panel   
[![akobookPlus5LowerCaseAdminResponse](/assets/images/2008/09/akobookPlus5LowerCaseAdminResponse_thumb.png)](/assets/images/2008/09/akobookPlus5LowerCaseAdminResponse.png)

**NEW**: a new menu entry that can check if you are running the latest version of this software   
[![akobookPlus5CheckForLatest](/assets/images/2008/09/akobookPlus5CheckForLatest_thumb.png)](/assets/images/2008/09/akobookPlus5CheckForLatest.png) [![akobookPlus5CheckForLatesthtml](/assets/images/2008/09/akobookPlus5CheckForLatesthtml_thumb.png)](/assets/images/2008/09/akobookPlus5CheckForLatesthtml.png)

**NEW**: refactoring but can be considered daily part of the work -> this code is not MVC at all, and has to be turn into a real #Joomla! 1.5 extension. I consider anti spamming and security more important in the TODO list at the moment than making the code MVC.

Hurry up any post in this forum <http://forums.waltercedric.com/index.php?board=46.0> may enter into that release as well 🙂