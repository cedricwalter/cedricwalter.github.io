---

title: 'Joomla tags from Phil Taylor meet Adobe Flash'
date: '2009-03-21T23:00:01+01:00'
author: 'Cédric Walter'



---

[![joomla_cms](/assets/images/2006/01/joomla_cms_thumb.png "joomla_cms")](/assets/images/2009/03/joomla_cms.png)

[![joomlatags.with.adobe.flash](/assets/images/2009/03/joomlatags.with_.adobe_.flash_.png "joomlatags.with.adobe.flash")](http://tags.waltercedric.com/)

I did code a small PHP script that should be use in a Cron and that use the component #Joomla tags of Phil Taylor to output a Flash Tag Cloud !

### How it works

A small php scripts joomlatags.php run regularly and output a XML file (tags.xml) that will be displayed by tagcloud.swf. This script is currently hardcoded to work with [Joomla Tags from Phil Taylor](http://www.joomla-tags.com/) but can be changed according to your needs.

### Tag cloud generator

Put the file joomlatags.php OUTSIDE of the root of your site. It must NOT be accessible to by the web server, as it contains the Mysql password in plain text!

Open the file joomlatags.php and change the settings at the beginning of the file, the most important settings are well documented.

Decide how often you would like to update the cloud, and define a Unix Crontab, for example If I would like to refresh my tag cloud at one o’clock in the night, I may define 1 0 \* \* \* \* php /pathto/joomlatags.php

### Tag cloud viewer

Copy all others files to the root or directory accessible by apache.

- index.php
- swfobject.js
- tagcloud\_serif.swf
- tagcloud.swf
- tags.xml

Run at least once the Tag Cloud Generator joomlatags.php

Point your browser to the location where you place index.php

<http://tags.waltercedric.com/>

### Limitations

I have more than 1000 tags defined, so in order to keep MY cloud readable, the script joomlatags.php either

- Allow you to remove tags that are not enough represented   
    //tags below this threshold wont be displayed in cloud   
    $mintagCount = 2;
- Or limit the number of entries with SQL   
    limit 0, 100;

Don’t output too much tags or it may be slow on some machine.

Output is different in some browser: try Firefox, Internet Explorer, Chrome and Opera. Only Firefox render differently the cloud than all others browser.

### Based on

Based on Roy Tanck’s (<http://www.roytanck.com/>) WordPress 3D flash tag cloud plug-in, swfobject.js by Geoff Stearns (<http://blog.deconcept.com/swfobject/>) for the embedding of the tag cloud.

### Links

- <http://www.joomla-tags.com/>
- If you did defined enough Meta Tags in all your Joomla! articles, you should definitely have a look at [Joomulus module](http://extensions.joomla.org/extensions/search-&-indexing/tags-&-clouds/6493/details) for Joomla!