---
id: 2698
title: 'register globals emulation off in Joomla!'
date: '2006-09-04T20:47:47+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=2698'
permalink: /joomla/register-globals-emulation-off-in-joomla/
---

[![joomla_cms](/assets/images/2006/01/joomla_cms_thumb.png "joomla_cms")](/assets/images/2006/09/joomla_cms.png)

Following [security guidelines of the joomla mailing list](http://forum.joomla.org/index.php/topic,81058.0.html):

- Edit globals.php to turn #Joomla! register\_globals emulation off. Although #Joomla! emulation is safer than the PHP register\_globals directive, it’s best not to allow register\_globals at all. Beginning with PHP 6, this will not even be an option, and it’s about time. Here’s the correct setting for turning #Joomla!’s register\_globals emulation off:  
    <div class="quoteheader">Quote<div class="quote">define( ‘RG_EMULATION’, 0 ); Note that some extensions will not work correctly with register\_globals emulation off:   
    <http://forum.joomla.org/index.php/topic,86525.0.html>

A lot of people have turn RG\_EMULATION off and it has cause a lot of problems in some #Joomla components including mine.My site is also not working properly…I should have found it alone, 3 days without emails and comments is not usual ;-). Anyway the forums is working 🙂

So here are my #Joomla components:

| NEW | AkoBookPlus 2.0.4 | credits to Beat    Q&amp;T Workgroup Sr. Member | Download [HERE](downloads/task,cat_view/gid,298/) | Download at #Joomla Forge |
|---|---|---|---|---|
| NEW | AkoCommentPlus 1.1.7 | credits to Beat    Q&amp;T Workgroup Sr. Member | Download [HERE](downloads/task,cat_view/gid,298/) | Download at #Joomla Forge |
| NEW | SecurityImages 3.0.8 | The release 4.0.0    with a lot of changes    will follow this week | Download [HERE](downloads/task,cat_view/gid,291/) | Download at #Joomla Forge |
| NEW | JoomlaCloud 1.0.3 | <span style="font-weight: bold; color: #006600;">coming soonThe release 1.1.0    with a lot of changes    will follow this week | Download [HERE](downloads/task,cat_view/gid,296/) | Download at #Joomla Forge |
|NEW | OpenComment beta1 | <span style="font-weight: bold; color: #006600;">coming soon | Download [HERE](downloads/task,cat_view/gid,295/) | Download at #Joomla Forge |
|NEW | com\_log4php | <span style="font-weight: bold; color: #006600;">coming soon | Download [HERE](downloads/task,cat_view/gid,293/) | Download at #Joomla Forge |
|NEW | com\_hashcasch 1.2.4 | <span style="font-weight: bold; color: #006600;">coming soon | Download [HERE](downloads/task,cat_view/gid,292/) | Download at #Joomla Forge |

Please report me any non working versions…so I can make changes if necessary