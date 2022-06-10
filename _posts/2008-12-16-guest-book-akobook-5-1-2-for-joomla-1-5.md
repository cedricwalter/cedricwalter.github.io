---
id: 3988
title: 'Guest Book Akobook 5.1.2 for Joomla 1.5'
date: '2008-12-16T20:34:03+01:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=3988'
permalink: /joomla/guest-book-akobook-5-1-2-for-joomla-1-5/
image: /wp-content/uploads/2008/12/akobook_5_1_2.png
---

Modified version of the great Akobook, this version now protect JOOMLA Guest Book entry from   
spammers using recaptcha or securityimages 5 and run natively in #Joomla! 1.5

 ![akobook_5_1_2](/assets/images/2008/12/akobook_5_1_2.png)

**BUG**: When using SecurityImages in AkobookPlus, it shows a label called SECURITYIMAGES\_LABEL. Looks like a missing variable.   
missing keys in all languages except english

**BUG**: admin comment form was not able to add smiley as the form name was misspelled in HTML code

**NEW**: fully XHTML compliance, for both front end and back end panel, validated with CSE HTML validations and W3C online validations service   
[![valid.xhtml](/assets/images/2008/12/valid.xhtml_thumb.png)](/assets/images/2008/12/valid.xhtml_.png) ![akobookIsXHTMLCompliant](/assets/images/2008/12/akobookIsXHTMLCompliant.png)

**NEW**: E\_STRICT for PHP reporting errors, so code fully portable and wont generated silent error in logs.

**NEW**: fully localized including java script popup

**NEW**: start of selenium test suite to ensure quality of future release

**BUG**: unable to edit language files, and misleading error message was displayed

> *Your css file is /components/com\_simpleboard/forum.css   
> You need to chmod this to 766 in order for the config to be updated*

**BUG**: paging through items in admin panel was not working

**BUG**: missing translation entries in foreign languages (but not translated)

*NOTE: Akobook do not delete existing table -&gt; this is a feature that allow you to safely update akobook without having to backup of your table.*

*![akobookPlus](/assets/images/2008/12/akobookPlus.png)* [Download HERE](updater.php?option=com_versions&catid=2)