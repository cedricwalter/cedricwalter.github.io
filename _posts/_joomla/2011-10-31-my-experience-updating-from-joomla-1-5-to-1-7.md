---
id: 7242
title: 'My experience updating from Joomla! 1.5 to 1.7'
date: '2011-10-31T20:02:36+01:00'
author: 'Cédric Walter'



header:
  teaser: /assets/images/2011/10/joomla_cms_thumb.png
tags:
    - experience
    - extensions
    - HowTo
    - joomla
---

![](/assets/images/2011/10/joomla_cms_thumb.png)

Here is a small how to, everything went fine: more than 1750 post were migrated without any majors issues. SInce I am using [Rockettheme](http://www.rockettheme.com/joomla?xyz=2643) templates and extensions here is how I went though the update process.

Of course I can not stress enough the added value of backups: both databases and file system (using [AkeebaBackup](https://www.akeebabackup.com/software/akeeba-backup.html) for example). Do a backup first and verify it before continuing!

Prepare a directory with all templates and extensions for #Joomla! 1.7 that you were used to use in #Joomla! 1.5. You may not find always equivalency but learning how to use new extensions may also be fun. Some [extensions gems are waiting to be discovered at JED](http://extensions.joomla.org/) ![Winking smile](/assets/images/2011/01/wlEmoticon-winkingsmile.png)

You will need a migration extension from #Joomla Extension Directory (JED)

Install [jUpgrade](http://extensions.joomla.org/extensions/migration-a-conversion/joomla-migration/11658) 1.2.1 like any other extension.

> jUpgrade is a simple #Joomla 1.5 component that will download a version of #Joomla 1.7, decompress it and install it. After that, it should migrate all of the data from old #Joomla 1.5 to the new #Joomla 1.7 installation.

Search the plugin called Mootols update and switch it on.

If you are using one of these plugins, un-publish then to make [jUpgrade](http://extensions.joomla.org/extensions/migration-a-conversion/joomla-migration/11658) work correctly

10. ShadowBox
11. [Rockettheme Rokbox](http://www.rockettheme.com/extensions-joomla/rokbox?xyz=2643)
The upgrade should work fine, and you should be able to browse the new instance and see the migrated content. But here are some remarks:

### Modules

14. 3rd party Modules extensions are not migrated (they may need code change and that out of scope of [jUpgrade](http://extensions.joomla.org/extensions/migration-a-conversion/joomla-migration/11658)), but custom HTML modules are,
15. HTML Modules are all published as default but are not assigned to any pages, so you’ll have to edit each modules and assign them either to some page, all or none,
16. AdSense custom html modules that contains only #JavaScript were not migrated properly by [jUpgrade](http://extensions.joomla.org/extensions/migration-a-conversion/joomla-migration/11658): the content of the module in the new migrated site were empty. You’ll have to copy manually the code in each module.  
    ### Articles
    
    Articles were displayed in what seems to be random….the natural order of displaying newest post first was lost somehow. To restore it, go to the “Main Menu”, click on “Home” and set
    
    
    - Article Order = Most recent first
    - Date for Ordering = Published
    
    
    ### How to deal with components not existing in #Joomla! 1.7?
    
    While not ideal, I did keep a [stripped version of #Joomla! 1.5 for my download section](http://www.waltercedric.com/downloads.html), carefully removing everything and just keeping [RokDownloads](http://www.rockettheme.com/extensions-joomla/rokdownloads?xyz=2643). For some rare case, this technique is acceptable. In this scenario you may want to use:
    
    
    - iFrame integration with a iFrame module
    - .htaccess redirects to keep stable links to the outside (JED and external forums)
    
    ```
    Redirect permanent /downloads.html http://www.waltercedric.com/old/downloads.html
    ```
    
    I may extend this post in the the next few days if I discover something else about #Joomla! 1.7. So far I am impressed by the quality and speed of this new version. The update went fine even after more than 7 years of content to migrate!