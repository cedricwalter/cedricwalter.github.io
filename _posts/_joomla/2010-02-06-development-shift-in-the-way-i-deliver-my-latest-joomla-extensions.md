---
id: 5033
title: 'Development shift in the way I deliver my latest Joomla! extensions'
date: '2010-02-06T10:49:39+01:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=5033'

header:
  teaser: /assets/images/2010/02/agile.development_thumb.jpg
tags:
    - deliver
    - development
    - html
    - joomla
    - way
---

[![agile.development](/assets/images/2010/02/agile.development_thumb.jpg "agile.development")](/assets/images/2010/02/agile.development_2.jpg)

Starting from now on, I will deliver all my latest (unstable) extensions versions through my continuous build server. All request or bugs discovery that are requested in my [forums](http://forums.waltercedric.com) and solved will lead to a new build that you will be able to download a lot faster than before.

Thanks to #Maven for PHP, I can now commit, 60 seconds later, unit test run and the result is a direct download for my extensions snapshots.

Here is an example with the module mod\_related\_thumb\_items

Head to [http://teamcity.waltercedric.com/teamcity/guestLogin.html?guest=1](http://teamcity.waltercedric.com/teamcity/guestLogin.html?guest=1 "http://teamcity.waltercedric.com/teamcity/guestLogin.html?guest=1")

Locate the module or component you are interested in:

[![HowTODownloadLatest](/assets/images/2010/02/HowTODownloadLatest_thumb.png "HowTODownloadLatest")](/assets/images/2010/02/HowTODownloadLatest_2.png)

Click on the latest build, must be ![](http://teamcity.waltercedric.com/teamcity/img/buildStates/success_small.gif) Success

[![HowTODownloadLatest.01](/assets/images/2010/02/HowTODownloadLatest.01_thumb.png "HowTODownloadLatest.01")](/assets/images/2010/02/HowTODownloadLatest.01_2.png)

If this build is a direct answer to a support request in my [forums](http://forums.waltercedric.com), or solve an issue, You should be able to see in changes the commit description, and even which file have been changed after and before the commit.

[http://teamcity.waltercedric.com/teamcity/viewLog.html?buildId=217&amp;buildTypeId=bt3&amp;tab=buildChangesDiv](http://teamcity.waltercedric.com/teamcity/viewLog.html?buildId=217&buildTypeId=bt3&tab=buildChangesDiv "http://teamcity.waltercedric.com/teamcity/viewLog.html?buildId=217&buildTypeId=bt3&tab=buildChangesDiv")

[![HowTODownloadLatest.05](/assets/images/2010/02/HowTODownloadLatest.05_thumb.png "HowTODownloadLatest.05")](/assets/images/2010/02/HowTODownloadLatest.05_2.png)

But Hey! you want to download this latest build now, go to artifact

 [![HowTODownloadLatest.02](/assets/images/2010/02/HowTODownloadLatest.02_thumb.png "HowTODownloadLatest.02")](/assets/images/2010/02/HowTODownloadLatest.02_2.png)

### Staying on the edge by using RSS

You can monitor any build by using the RSS icon in your browser toolbar, or example with this module, it would be

[http://teamcity.waltercedric.com/guestAuth/feed.html?buildTypeId=bt20&amp;itemsType=builds&amp;userKey=guest](http://teamcity.waltercedric.com/guestAuth/feed.html?buildTypeId=bt20&itemsType=builds&userKey=guest "http://teamcity.waltercedric.com/guestAuth/feed.html?buildTypeId=bt20&itemsType=builds&userKey=guest")

This way of downloading the latest extensions do not replace the page <http://www.waltercedric.com/joomla-releases-mainmenu-269.html> where there is there only stable versions.

The next step is to make the #maven phase “site” work (I have issue with [phpdocumentor](http://www.phpdoc.org/) not found), this will create automatically a internet site in one of my sub-domains ad hide this complexity.