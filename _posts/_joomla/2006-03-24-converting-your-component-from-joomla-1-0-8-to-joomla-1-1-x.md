---
id: 2394
title: 'Converting your component from Joomla 1.0.8 to Joomla 1.1.X'
date: '2006-03-24T20:12:25+01:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=2394'

header:
  teaser: /assets/images/2006/03/powered_by_Joomla_1.1.png
tags:
    - development
    - joomla
---

![](/assets/images/2006/03/powered_by_Joomla_1.1.png) I am  currently in the process of moving all my open source project (7!) in CVS Head to the latest #Joomla API 1.1.X. I’ve tried to summarize in the following table some conversion rules

| In #Joomla 1.0.X | has to be converted in #Joomla 1.1.X | Where |  |
|---|---|---|---|
| <span style="COLOR: rgb(51,51,255)">mosMenuBar::startTable(); | <span style="COLOR: rgb(0,102,0)">JMenuBar::startTable(); | PHP code |  |
| <span style="COLOR: rgb(51,51,255)">defined(‘\_VALID\_MOS’) or die(‘Direct Access to this location is not allowed.’); | <span style="COLOR: rgb(0,102,0)">defined( ‘\_JEXEC’ ) or die( ‘Restricted access’ ); | PHP code |  |
| require\_once( <span style="COLOR: rgb(51,51,255)">$mainframe->getPath( ‘toolbar\_html’ ) ); | require\_once(<span style="COLOR: rgb(0,102,0)"> JApplicationHelper::getPath( ‘toolbar\_html’ ) ); | PHP code |  |
| <?xml version="1.0" encoding="iso-8859-1"?>   <<span style="COLOR: rgb(51,51,255)">mosinstall type="component" version="1.0.0">   …. | <?xml version="1.0" encoding="iso-8859-1"?>   <<span style="COLOR: rgb(0,102,0)">install type="component" version="1.0.0">   …. | Installer XML file |  |
| More to come… |  |  |  |
|  |  |  |  |

Bad news

- New code wont work in #Joomla 1.0.X or latest
- New code wont work in Mambo 4.X or latest

Some links which may help also Help You:

- [Welcome to the #Joomla! Development Wiki](http://dev.joomla.org/component/option,com_jd-wiki/Itemid,32/)
- [Third Party Testing,](http://forum.joomla.org/index.php/board,234.0.html) a forum where third party developer can receive help during the migration
- [Make your extentions fit for #Joomla! 1.1](http://dev.joomla.org/index.php?option=com_jd-wiki&Itemid=31&id=tips:make_your_extensions_fit)



