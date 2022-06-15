---

title: 'SecurityImages 4.3.3 for Joomla! 1.0'
date: '2008-05-02T19:45:41+02:00'
author: 'Cédric Walter'



---

# Maintenance release**

# BUG**: reported by **[webharvest](http://forums.waltercedric.com/index.php?action=profile;u=575)**, dependent on the switch off for logged in user. The problem is only the image and enter box disappear the following text is still present:   
Enter what you see: \*. Code is now inherited from version SecurityImages 5.0.0

# BUG**: Solved thanks to user **[itacloro](http://forums.waltercedric.com/index.php?action=profile;u=704),** [No Images load with SecurityImages 4.3.2 on joomla 1.0.15 on PHP 4.4.7 ](http://forums.waltercedric.com/index.php?topic=534.msg1953#msg1953)

# BUG**: remove trailing space when a user enter several font names separated by a comma in hncaptcha plugin

# BUG**: In com\_securityimages 4.3.2 (with #Joomla 1.0.13) I get the following error message when sending an e-mail via our contacts page, when the option to send an e-mail to the administrator after a certain number of spam attempts is set, even though I have set a valid e-mail address for the administrator:   
Warning: Missing argument 1 for sendMailLogsToAdmin(), called in /var/www/administrator/components/com\_securityimages/logger.php on line 80 and defined in /var/www/administrator/components/com\_securityimages/logger.php on line 88

# BUG**: the image doesn’t refresh at all with the button in IE6 and IE7. The only way is to refresh the entire page. The button just works with FireFox. This is due to a cache issue or browser. workaround done add a timestamp in image URL to force browser to emit request!

 Available in my Download section!