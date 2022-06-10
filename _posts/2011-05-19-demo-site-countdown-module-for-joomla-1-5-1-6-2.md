---
id: 6755
title: 'Demo site countdown module for Joomla! 1.5/1.6'
date: '2011-05-19T21:03:59+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=6755'
permalink: /joomla/demo-site-countdown-module-for-joomla-1-5-1-6-2/
tags:
    - demo
    - extensions
    - joomla
    - running
    - see
    - site
    - visit
---

[![joomla_cms](/assets/images/2006/01/joomla_cms_thumb.png "joomla_cms")](/assets/images/2011/05/joomla_cms.png)

   
A very simple plugin that is using a nice flash applet to display a retro clock countdown, you can see it in action at

- [Visit the #Joomla! 1.5 demo site](http://demo-joomla-1.5.waltercedric.com/) to see my extensions live running
- [Visit the #Joomla! 1.6 demo site](http://demo-joomla-1.6.waltercedric.com/) to see my extensions live running

![demositecountdown_for_joomla](/assets/images/2011/05/demositecountdown_for_joomla_thumb.png "demositecountdown_for_joomla")

How it is working

- It use the creation time of the file modules/mod\_demositecountdown/index.html as reference when the demo site was renewed,
- the file settings.xml contains the next time when the site will be renewed,

To make the magic work, it also use “[Demo site for #Joomla!](http://wiki.waltercedric.com/index.php?title=Demo_site_for_Joomla)” the easy to use and configure framework to automatically renew demo [Joomla!](http://www.joomla.org/) site.

For people that would like to reuse this technique, here is the bash function I’ve created to update the file settings.xml and index.html

```
# This create a new file that can be checked  for creation time in a dedicated #Joomla! module function updateJoomlaModule() { base="${packagedestination}/modules/mod_demositecountdown" file="${base}/settings.placeholder.xml"; targetfile="${base}/settings.xml"; if [ -f "$file" ] then   nextRun=`date --date "now +${nextrun}"`   targetYear=`date --date "now +${nextrun}" +%Y`   targetMonth=`date --date "now +${nextrun}" +%m`   targetDay=`date --date "now +${nextrun}" +%e`   targetHour=`date --date "now +${nextrun}" +%k`   targetMinute=`date --date "now +${nextrun}" +%M`    echo "Next update $nextRun Updating file at $file"   sed -i "s/_targetYear/${targetYear}/g" $file   sed -i "s/_targetMonth/${targetMonth}/g" $file   sed -i "s/_targetDay/${targetDay}/g" $file   sed -i "s/_targetHour/${targetHour}/g" $file   sed -i "s/_targetMinute/${targetMinute}/g" $file   echo "Move ${file} to ${targetfile}"   cp ${file} ${targetfile}         echo "" > ${base}/index.html else  echo "Joomla module mod_demositecountdown not detected”;  echo "install from";  echo "http://joomlacode.org/svn/demosite/trunk/RenewJoomlaDemo"; fi }
```

The latest version of can be downloaded at <http://joomlacode.org/svn/demosite/trunk/RenewJoomlaDemo/> (login: anonymous pwd: anonymous)

The 2 modules for [Joomla!](http://www.joomla.org/) 1.5 and 1.6 you an download [HERE](http://joomlacode.org/svn/demosite/trunk/RenewJoomlaDemo/mod_demositecountdown/)

A [Joomla!](http://www.joomla.org/) 1.0 version will follow soon.