---

title: 'New securityimages 4.1.0'
date: '2006-12-04T21:26:52+01:00'
author: 'Cédric Walter'



header:
  teaser: /assets/images/2006/12/securityimage.in_.joomla.login_.gif
tags:
    - joomla
    - securityimages
---

Why updating?

- If You want to use more than one Captcha in a page.
- If You want Captcha in the administrator page.
- If Your old version 3.0.8 or 4.0.1 do not work as expected
- If you use any version < 3.0.4 which has a serious vulnerability injection.

<span style="color: rgb(51, 102, 255); font-weight: bold;">NEW:Captcha can now be used in the administrator login page  
<span style="color: rgb(51, 102, 255); font-weight: bold;">NEW:more settings for switching On/Off securityimages into #Joomla! core  
<span style="color: rgb(255, 0, 0);">BUG: I was starting another php session with session\_start()

click read more for screenshots and details…  
  <span style="color: rgb(51, 102, 255); font-weight: bold;">NEWCaptcha can now be used in the administrator login page  
<span style="color: rgb(51, 102, 255); font-weight: bold;">![](/assets/images/2006/12/securityimage.in_.joomla.login_.gif)

<div style="margin-left: 40px;">![](/assets/images/2006/12/securityimage.in_.joomla.login_.gif)

|Note:  |
|---|
| - I’ve changed the file /administrator/templates/joomla\_admin/login.php (insertion of captcha line 57 ) , meaning if You use another administrator template than joomla\_admin, You’ll have to make the same changes in Your templates - I’ve changed the file /administrator/templates/index.php (checking the captcha challenge), this file is administrator templates independent - This mod do not increase the security of the administrator login page, it is more smart to read:       Todo list for securing your site: [http://www.waltercedric.com/content/view/806/102/ ](../content/view/806/102/)and also       Protecting You Mambo admin panel using htaccess: [http://www.waltercedric.com/content/view/706/102/](../content/view/706/102/) |

  
  
 <span style="color: rgb(51, 102, 255); font-weight: bold;">NEW:more settings for switching On/Off securityimages into Joomla! core  
 This let You deactivate securityimages in core part of [Joomla!](http://www.joomla.org/) more easily.  
![](/assets/images/2006/12/securityimages4.1.0.more_.settings.gif)

<div style="margin-left: 40px;">![](/assets/images/2006/12/securityimages4.1.0.more_.settings.gif)|Note:  |
|---|
| - Switching these flag to true is not ENOUGH, You need to also install a set of files (an exact copy of [Joomla!](http://www.joomla.org/) file let’s say in a version 1.0.11) that I have modified to support securityimages. Right now [Joomla!](http://www.joomla.org/) do not allow me to do it differently. |

  
<span style="color: rgb(255, 0, 0);">BUG: I was starting another php session with session\_start(), this has cause a lot of trouble in the admin login page, and has revealed that I must better use:

<div style="margin-left: 40px;">session\_name( md5( $mosConfig\_live\_site ) );  
session\_start();  
This has the potential of solving issue in Virtuemart (I have not tested it, but problem look similar)  
   


| About Joomla core patches I provide to the community |
|---|
| I do not like hacking [Joomla!](http://www.joomla.org/) core file, either [Joomla!](http://www.joomla.org/) Team provide a way to extends their core code on the fly (plugins) or I may run in trouble mainly because I have to provide and maintain a patch version of some core files, it is also risky to do that (code is untrusted source even if I am a honest person)… In order to not overwrite any existing changes You’ve made in the past, all users of [Joomla!](http://www.joomla.org/) should really try to use Beyond Compare, from [www.scootersoftware.com](http://www.scootersoftware.com/). It allow to select 2 directories/zip/files, and by right clicking in windows explorer like interface compare file and merge them in a 2 way editor (you can copy from left and to the right side of panel part of the code).With this tool, You can even make a compare with a local directory and a remote one (FTP) this let you apply release (official joomla patch 1.0.11 for example) very easily.  [Joomla!](http://www.joomla.org/) core patches are all located in administrator\\components\\com\_securityimages\\patches\\\*.php so the influence on core is minimal. Read them if you want to know how to use securityimages in Your own code. About release management of my patches:  - Securityimages 4.0.1 has a new API and work only with >= JoomlaPatches1.0.11-v1.0.2 - Securityimages 3.0.8 has the old API and work only with <=JoomlaPatches1.0.11-v1.0.1 - Securityimages 4.1.0 has a new API and work only with >= JoomlaPatches1.0.11-for securityimages 4.1.0 only  My mistake is that I did not document that at all, this is why so much users run in troubles in the past few weeks…. |

   
 