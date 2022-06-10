---
id: 3195
title: 'Securityimages 4.3.0 for Joomla 1.0.15 and up'
date: '2008-02-26T19:35:29+01:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=3195'
permalink: /joomla/securityimages-4-3-0-for-joomla-1-0-15-and-up/
image: /wp-content/uploads/2008/02/securityimages.4.2.3.checkSystem.gif
---

# With the list of new functionalities below…**

<span style="font-weight: bold; color: #009900">NEW: No more data save in SESSION storage, I have to go that path since

- #Joomla! 1.5 use a more complex session scheme than #Joomla! 1.0.X and create issue with my component and/or I create #Joomla! session issues 🙂
- All files <span style="font-style: italic">imageGenerator.php can be called in an URL and has no access to #Joomla framework (having all drawback of an Ajax entry point without using Ajax)

A new database table <span style="font-weight: bold; font-style: italic">\_\_SecurityImagesSession now store Securityimages private and public key and simulate a session storage. The cleanup is done by date and number of access. This will solve hopefully all issues with administrator panel login issues and allow me, as soon as I have back ported these changes in #Joomla! 1.5 branch, to deliver Securityimages 5.0 for #Joomla! 1.5

<span style="font-weight: bold; color: #009900">NEW: A new menu entry (sorry but I wont rewrite the administrator panel with Ajax/changing layout for #Joomla! 1.0.x version): Check Your System, currently

- Report if you are able to create images at all (GD library detected), output jpeg, png or gif
- Output an image for each plugin

![securityimages.4.2.3.checkSystem.gif](/assets/images/2008/02/securityimages.4.2.3.checkSystem.gif)<span style="font-weight: bold; color: #009900">

NEW: Component tested with the strongest PHP error reporting E\_ALL (see php.ini), All errors and warnings (doesn’t include E\_STRICT) are now corrected in my code before being shipped.

In order to increase quality, your feedback is valuable to me, in the meantime I will try to improve quality by using PHPUnit from <http://www.phpunit.de/> and a WEB test case tool