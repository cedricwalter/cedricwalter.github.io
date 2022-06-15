---

title: 'Alternate method to install Joomla/Drupal on Synology NAS'
date: '2011-11-11T17:10:04+01:00'
author: 'Cédric Walter'



header:
  teaser: /assets/images/2011/11/synology_nas4.jpg
---

![synology_nas4](/assets/images/2011/11/synology_nas4.jpg "synology_nas4")

If you want more control, want to install [Joomla](http://www.joomla.org/) yourself or want to install any other CMS, you may also want to try this method. It require some basic knowledge about SSH / file transfer through.

## Main differences compare [to the other method](http://www.waltercedric.com/index.php/joomla-mainmenu-247/1980-running-joomla-on-synology-nas)

- You won’t have any icons into the packages manager,
- You wont be able to stop this services,
- More prone to errors

# How to Install

In the Control Panel of your [Synology DSM NAS](http://www.synology.com/), go to “Web Services” and activate

- Enable Web Station
- Enable MySQL

Use a Terminal to connect to your NAS, preferably as admin, using [Winscp](http://winscp.net) under windows for example.

Move to the directory

```
/volume1/web
```

Upload all your [Joomla](http://www.joomla.org/) files into a new directory, for example in

```
/volume1/web/joomla
```

Point your browser to http://{youservernasname}/joomla/ and finish the installation of #Joomla.