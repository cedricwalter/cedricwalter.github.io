---
id: 3694
title: 'VirtueMart 1.1.2 and SecurityImages 5'
date: '2008-08-17T18:36:46+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=3694'

header:
  teaser: /assets/images/2008/08/header_logo_thumb.png
---

##### [![header_logo](/assets/images/2008/08/header_logo_thumb.png)](/assets/images/2008/08/header_logo.png) [![love](/assets/images/2008/08/love_thumb.png)](/assets/images/2008/08/love.png) [![com_securityimages](/assets/images/2008/08/com_securityimages_thumb.jpg)](/assets/images/2008/08/com_securityimages.jpg)

##### Someone has reported in my forum that the latest VirtueMart is not working with SecurityImages 5.x ([see thread here](http://forums.waltercedric.com/index.php?topic=631.0))

##### VirtueMart is an Open Source E-Commerce solution (a Component or Plug-in) for the #Joomla! and   
 Mambo Content Management Systems. It can be run as a Shopping Cart, or in Catalog mode.

I’ve patched the code for VirtueMart 1.1.2 to support both SecurityImages (4.x and 5.X)

| **compatibility** | **Joomla! 1.0.X** | **Joomla! 1.5.X** |
|---|---|---|
| SecurityImages 4.X | x | NO |
| SecurityImages 5.X | NO | x |
| VirtueMart | x | x |

So the equation: VirtueMart 1.2 + SecurityImages 5.x/4.x is working $.

@Soeren, if you read this, please include it in your next version 🙂 I have your mail somewhere, will contact you shortly..

@Users: Apply this patch on a running VirtueMart install with FTP

[![virtuemart1.2.patch.securityimages](/assets/images/2008/08/virtuemart1.2.patch_.securityimages_thumb.png)](/assets/images/2008/08/virtuemart1.2.patch_.securityimages.png) Download [VirtueMart1.1.2.and.SecurityImages5.patch.zip](https://waltercedric.com/new/?p=2473)

# Only 3 files altered:**

- *admin.user\_field\_form.php*
- *ps\_shopper.php*
- *ps\_shopper.php*