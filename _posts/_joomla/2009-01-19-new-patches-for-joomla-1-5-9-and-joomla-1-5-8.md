---
id: 4048
title: 'New patches for Joomla 1.5.9 and Joomla 1.5.8'
date: '2009-01-19T20:56:38+01:00'
author: 'Cédric Walter'



header:
  teaser: /assets/images/2009/01/smallbox_securityimages_thumb.jpg
---

[![smallbox_securityimages](/assets/images/2009/01/smallbox_securityimages_thumb.jpg)](/assets/images/2020/02/smallbox_securityimages.jpg) Some people have reported issue [in the forum](http://forums.waltercedric.com)

I’ve found the error in my code in some views but not all:   
 img src=”<?php echo JURI :: root() ?>**/**index.php?   
as a result, there is in image URL a double / which cause issues on some web host (no image displayed)

I now provide a new patches versions for #Joomla! 1.5.8 and 1.5.9 that can be downloaded:

- Joomla! 1.5 patches 1.5.9 (stable / 2009-01-19) [Download](https://waltercedric.com/new/?p=430)
- Joomla! 1.5 patches 1.5.8 (stable / 2009-01-19) [Download](https://waltercedric.com/new/?p=422)

These patches are ONLY for SecurityImages 5.1.0 or later, note the version of zip

Joomla\_1.5.8-Stable-Full\_PackageForSecurityImages5.1.0\_**v01.01.00**.zip   
Joomla\_1.5.9-Stable-Full\_PackageForSecurityImages5.1.0\_**v01.01.00**.zip

instead of **<font color="#000080">v01.00.00**