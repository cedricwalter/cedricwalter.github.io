---
id: 3279
title: 'SecurityImages 5.0.0Beta2'
date: '2008-03-22T17:55:01+01:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=3279'
permalink: /joomla/securityimages-5-0-0beta2/
---

# From a design point of view,** SecurityImages do not come anymore with patches in his code, every 3rd party developer will have to develop and learn how to use SecurityImages 5.0. But coupling is greatly reduce because it use #Joomla! events triggering system.   
Joomla! patches are different, I have to maintain them because the core is not meant to be extended in every forms right now.

# <font color="#ff0000" size="+0">ISSUE**: Check for latest version causes a 500 internal server error. Wont be solved, in SecurityImages at least. A component is simply missing on my homepage: the [version manager](http://extensions.joomla.org/component/option,com_mtree/task,viewlink/link_id,1399/Itemid,35/) of soeren ([Virtuemart](http://virtuemart.net/)) is not running with #Joomla! 1.5 and is therefore not installed on [www.waltercedric.com](https://waltercedric.com/new/?p=45)   
I will have to wait for Soeren new version or translate his component to #Joomla! 1.5 myself   
# <font color="#ff0000" size="+0">ISSUE**: reload button is not working, also not always ;-), I am investigating this issue!

# NEW**: Core don’t use the database anymore to store captcha but session.   
# NEW**: simplified API for checking captcha   
# NEW**: add reload button in Check Your System menu   
# BUG**: solving logging inclusion (logUtils.php). It was incorrect as soon as you use SecurityImages embedded in another component or module.   
# NEW**: development of #Joomla! 1.5 patches and tests with Beta2, see next post

Beta2 in my download section…