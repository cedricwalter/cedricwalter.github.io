---

title: 'HOW to make your own patches for securityimages'
date: '2009-08-05T19:29:51+02:00'
author: 'Cédric Walter'



header:
  teaser: /assets/images/2009/08/patches.for_.securityimages.howto_.png
---

# Just in case I take too much time to deliver a ready to use download, duration 5 minutes, but you need to understand basic php coding

1. Create a temporary directory c:\\patch
2. Copy an existing patch distribution, under a new name   
    For example, lets download #Joomla\_1.5.13-Stable-Full\_PackageForSecurityImages5.1.x\_v01.01.00.zip into c:\\patch\\ and copy it to c:\\patch\\Joomla\_1.5.14-Stable-Full\_PackageForSecurityImages5.1.x\_v01.01.00.zip
3. Download the latest full zip package of #Joomla that target the patch (here 1.5.14), so I download [Joomla\_1.5.14-Stable-Full\_Package.zip ](http://mirror.waltercedric.com/Joomla_1.5.14-Stable-Full_Package.zip)and save it in the same directory c:\\patch\\   
    ![patches.for.securityimages.howto](/assets/images/2009/08/patches.for_.securityimages.howto_.png "patches.for.securityimages.howto")
4. Now download a free trial copy of Beyond compare from [www.scootersoftware.com](http://www.scootersoftware.com) and install this great application
5. Select the 2 zip files, and right click “compare”   
    [![patches.for.securityimages.howto.1](/assets/images/2009/08/patches.for_.securityimages.howto_.1_thumb.png "patches.for.securityimages.howto.1")](/assets/images/2009/08/patches.for_.securityimages.howto_.1.png)
6. Now it is like a game, on the left side, you have you patch that need to be updated with the latest #Joomla! core changes, just edit every file present on the left and update line that are new or changed till you are finished. Luckily there is only 14 files to merge   
    [![patches.for.securityimages.howto.2](/assets/images/2009/08/patches.for_.securityimages.howto_.2_thumb.png "patches.for.securityimages.howto.2")](/assets/images/2009/08/patches.for_.securityimages.howto_.2.png)
7. Test the result in a #Joomla test instance.

I do this for you at each release of #Joomla!