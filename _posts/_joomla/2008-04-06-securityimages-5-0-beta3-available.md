---

title: 'SecurityImages 5.0 BETA3 available'
date: '2008-04-06T21:46:12+02:00'
author: 'Cédric Walter'



header:
  teaser: /assets/images/2008/04/com_securityimages_thumb.png
---

| [![com_securityimages](/assets/images/2008/04/com_securityimages_thumb.png)](/assets/images/2008/04/com_securityimages.png) | Security images are dynamically generated images containing hard to read text, it is using a combination of font colors, font size, fuzzy background, font angle in order to disallow computer to automate reading (and so limit spamming).    The user (a human) has to reproduce all character correctly before being allowed to post.  This BETA3 solve many issues..hope you will all like it. click read more for more details of what the BETA3 solve. |
|---|---|

## Component

BUG: In Edit General Settings – General, the very first option does not have any label.

[![missingLabel.5.0.0beta2](/assets/images/2008/04/missingLabel.5.0.0beta2_thumb.png)](/assets/images/2008/04/missingLabel.5.0.0beta2.png)

BUG: The contact page (in the case of false entry) was showing errors

Warning: import() \[function.import\]: Unable to access /../../../../../../components/com\_contact/class/logUtils.php in /../../../../../../libraries/loader.php on line 80

# NEW: More check in Check System page at administrator   
/index.php?option=com\_securityimages&amp;task=checkSystem

- Verifying that you have installed the system plugin to create CAPTCHA
- Checking that you have publish the system plugin
- If you did install Joomla! patches, check that you did activate Joomla patches in control panel and hit save
- If you did install Joomla! patches, check for proper operation of patches

# [![securityimages 5.0.beta3.checksystem](/assets/images/2008/04/securityimages5.0.beta3_.checksystem_thumb.png)](/assets/images/2008/04/securityimages5.0.beta3_.checksystem.png)

# NEW: you can now give the size of the captcha for the core plugin. This feature was present in SecurityImages 4.0.X but was lost in translation to SecurityImages 5.0.X   
/index.php?option=com\_securityimages&amp;task=displayCaptchaByPlugin&amp;plugin=core&amp;version=1.1&amp;size=S

| S = small = 150 x 30 pixels | B = big = 200 x 35 pixels |
|---|---|
| [![securityimages 5.0.beta3.small](/assets/images/2008/04/securityimages5.0.beta3_.small_thumb.png)](/assets/images/2008/04/securityimages5.0.beta3_.small_.png) | [![securityimages 5.0.beta3.big](/assets/images/2008/04/securityimages5.0.beta3_.big_thumb.png)](/assets/images/2008/04/securityimages5.0.beta3_.big_.png) |

Note: You can drop any of your own picture in media\\com\_securityimages\\backgrounds and in the administrator panel of core plugin define it as default.

BUG: the reload button was not working properly, in fact only once, this is due to the cache of Joomla! 1.5, solved by adding a timestamp to images URL.

## System plugin

# NEW: you can limit the number of reload a user is allowed to do. This greatly reduce brute force attacks, default reload is 10, settings can be changed in system plugin parameter.

Work for all plugin. Text can be changed in Language

| reload hit < 10 (default) | reload hit > 10 (default) |
|---|---|
| [![reloadOK](/assets/images/2008/04/reloadOK_thumb.png)](/assets/images/2008/04/reloadOK.png) | [![reloadLimitExcedeed](/assets/images/2008/04/reloadLimitExcedeed_thumb.png)](/assets/images/2008/04/reloadLimitExcedeed.png) |

## Joomla! Patches

re download the correct version if needed and reapply FTP patches. Both patches for Joomla! 1.5.1 and 1.5.2 are available

BUG: The placeholders: SECURITYIMAGES REJECT USER ENTRY and SECURITYIMAGES LABEL were missing in en-GB.com\_contact.ini, so no localized text was displayed when entering a wrong captcha in contact page.

BUG: move front end images to the front end part of the component so people using .htaccess to protect administrator area don’t get any authentication dialog to enter a username and a password. so all views now use /components/com\_securityimages/buttons/reload.gif instead of /administrator/components/com\_securityimages/buttons/reload.gif