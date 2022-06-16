---

title: 'Anoncement: Security images for Mambo'
date: '2005-08-14T21:56:58+02:00'
author: 'Cédric Walter'



header:
  teaser: /assets/images/2005/08/securityImage_logosmall.png
tags:
    - configurable
    - distribution
    - installation
    - securityimages
---

| ![](/assets/images/2005/08/securityImage_logosmall.png)   security images    for Mambo    can help YOU | Ever been to a site where you had to register and the registration form required that you type in the same phrase that is found in a hard-to-read image? [Mambo](http://www.mamboserver.com/) has since now not have this possibility. That’s why I created an administration component com\_securityimages. The component is not release yet but will be tomorrow!!!  The engine is based on [this great article](http://www.devshed.com/c/a/PHP/Security-Images-in-PHP/)[ ](http://www.devshed.com/c/a/PHP/Security-Images-in-PHP/)at [DevShed,](http://www.devshed.com/) I have only modified it to be more flexible, create an admin panel and extend it for Mambo.  In order to appreciate my work, by clicking read more You will be able to read the manual…   A GNU/GPL release 😉  Update 15.08.2005: I will release the component soon, I have add today:  - Localization: french, english and german! - The core component com\_contact is also now using security images (will be installable only as patch, sorry) - A new tab in the admin panel: file logging to keep track of the bad boys posting crap to Your site… - AkoComment and AkoBook can now live/be used without hashcash and security images if required (switch on/off) in their admin panel - com\_securityimages is currently in test, but no big error has been found, I am only adding functionnalities (bad before delivery ;-( ) - Remarq: I can give You installable component version of all components I’ve changed, but be careful! only use them if You have a fresh install of mambo (or none of the component involved) or You will loose Your comments or Guestbook entries -> It may be safer to carefully overwrite all file with FTP…        |
|---|---|

<font face="Arial Black" size="4">Security images for Mambo

# Installation

*com\_securityimages* is a regular Mambo component, You can install it like any other component using the backend admin panel.

# After installation, verify that

| You can access the admin panel… | ![](/assets/images/2005/08/acesstoPanel.gif) |
|---|---|
| By pointing your browser to  *http://youhost/administrator/components/com\_securityimages/imageGenerator.php*    You see a security image (HIT reload page or refresh to receive a new one) | ![](/assets/images/2005/08/verifyInstall.gif) |

# Prerequisite

NONE, but this component use the GD library (PHP extension), it should be present on your Mambo server.

# Already done

I already modified akocomment and akobook from Arthur Konze to support security images. You can find the component bundled in the ZIP distribution BUT if You decide to use them….

- Akocomment require *com\_hashcash* which required *com\_log4php* -> so first intall *com\_log4php* then *com\_hashcash* then *com\_akocomment* (component and mambot)
- Akobook require *com\_hashcash* which required *com\_log4php* -> so first intall *com\_log4php* then *com\_hashcash* then *com\_akobook*

# Usage (for developer)

Using this framework is very simple.

# In the page your code send to the user…  
 

```
<?php include

($mosConfig_absolute_path.'/administrator/components/com_securityimages/client.inc');

?>

<?php echo insertSecurityImage("security_refid" );

?>

<?php echo getSecurityImageText("security_try" );

?>


```

 The code above insert the image, and the text, You page normally submit information to the server for processing. Most of the time using the tag form action

# In the server code where you process the data…

```
include $mosConfig_absolute_path.'/administrator/components/com_securityimages/server.inc'); $checkSecurity = checkSecurityImage($security_refid, $security_try);


```

if $checkSecurity = true then the user has entered the right text.

# Admin panel Screenshots…

# security images for Mambo is highly configurable

| ![](/assets/images/2005/08/admin1.gif) |
|---|
| ![](/assets/images/2005/08/admin2.gif) |
| ![](/assets/images/2005/08/admin3.gif) |
| ![](/assets/images/2005/08/admin4.gif) |
| ![](/assets/images/2005/08/admin5.gif) |
| ![](/assets/images/2005/08/admin6.gif) |

have fun…