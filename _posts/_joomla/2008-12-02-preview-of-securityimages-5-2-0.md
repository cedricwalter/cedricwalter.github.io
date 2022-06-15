---

title: 'Preview of SecurityImages 5.2.0'
date: '2008-12-02T20:04:12+01:00'
author: 'Cédric Walter'



header:
  teaser: /assets/images/2008/12/font.autodetection_thumb.png
---

An insight at securityimages 5.2.0 still in development, as usual, all comments are welcome either in this post or in my forum

# NEW**: fonts are now auto detected, and a better widget is now available for selecting them, sorry still no font preview in php 😉

[![font.autodetection](/assets/images/2008/12/font.autodetection_thumb.png)](/assets/images/2008/12/font.autodetection.png)

You can install your own true type fonts at /administrator/components/com\_securityimages/fonts   
This replace the combo box which was prone to user entries errors…   
[![not.user.friendly](/assets/images/2008/12/not.user_.friendly_thumb.png)](/assets/images/2008/12/not.user_.friendly.png)

# NEW**: More fine grained control on the type of plugin you would like to use on a per section/category basis.   
A small captcha for the login module, and a bigger one or a totally different rendering algorithm in register for example.

# NEW**: A check to avoid some user choosing plugin/version combinations that do not exist..

[![check.newPanelControl](/assets/images/2008/12/check.newPanelControl_thumb.png)](/assets/images/2008/12/check.newPanelControl.png)

# NEW**: A new API for recaptcha/ existing section that make integration a lot more easier. Old API still available for backward compatibilities.

# NEW**: Sound! developed for securityimages AND also will be also committed to #Joomla Comment trunk.

SecurityImages create audible CAPTCHA codes as WAV files by combining sound files of each letter and number that appears in the character set.

- A feature that has taken 3 years to be integrated…
- It increase the component size by 320kb !
- It can only speak English at the moment…
- It can not speak special character (#%&amp;)

# AJAX**: start of a POC which allow captcha to be checked asynchronously without needing submit of whole page. This is a major complain since the beginning of SecurityImages, as currently users lost their entries in the form in case the captcha challenge get refused. I will try to use JQUERY/XAJAX