---
id: 7267
title: 'Running Joomla! on Synology NAS'
date: '2011-11-11T17:00:57+01:00'
author: 'Cédric Walter'



header:
  teaser: /assets/images/2011/11/synology_nas.jpg
---

![synology_nas](/assets/images/2011/11/synology_nas.jpg "synology_nas")

From small-and-medium business to individual users, [Synology products offer a full range of choices](http://www.synology.com/products/index.php?lang=us) to fulfill different needs, while sharing some similar characteristics- eco-friendly, quiet, and versatile.

## Pre requisites

Download the [Synology package #Joomla-1.7.2.spk](http://www.waltercedric.com/downloads/synology)

In the Control Panel of your [Synology DSM NAS](http://www.synology.com), go to “Web Services” and activate

- Enable Web Station
- Enable MySQL

[![joomla_on_synology_nas_001](/assets/images/2011/11/joomla_on_synology_nas_001_thumb.png "joomla_on_synology_nas_001")](/assets/images/2011/11/joomla_on_synology_nas_001.png)

## Installation

Now go to “Package Center”

[![joomla_on_synology_nas_002](/assets/images/2011/11/joomla_on_synology_nas_002_thumb.png "joomla_on_synology_nas_002")](http://www.waltercedric.com/images/ea1815e2bf67_13CCD/joomla_on_synology_nas_002.png)

Click on “Install / Update” then select the file Joomla-1.7.2.spk that you have downloaded from

[![joomla_on_synology_nas_003](/assets/images/2011/11/joomla_on_synology_nas_003_thumb.png "joomla_on_synology_nas_003")](http://www.waltercedric.com/images/ea1815e2bf67_13CCD/joomla_on_synology_nas_003.png)

The installer will ask you for your MSQL Password, so the installer can create an empty database joomlablog, the default user being root and the password is empty! so just click next

After some seconds you should see Joomla! installed

[![joomla_on_synology_nas_004](/assets/images/2011/11/joomla_on_synology_nas_004_thumb.png "joomla_on_synology_nas_004")](http://www.waltercedric.com/images/ea1815e2bf67_13CCD/joomla_on_synology_nas_004.png)

I strongly recommend you to install [phpMyAdmin](http://www.phpmyadmin.net) and create a dedicated Joomla user with less permissions before running the Joomla installer!

So install the package [phpMyAdmin](http://www.phpmyadmin.net), select the database newly created by the installer “joomlablog” and under privileges,

[![joomla_on_synology_nas_005](/assets/images/2011/11/joomla_on_synology_nas_005_thumb.png "joomla_on_synology_nas_005")](http://www.waltercedric.com/images/ea1815e2bf67_13CCD/joomla_on_synology_nas_005.png)

Create a new user with a complicated password, for example GDnxWF9Vm4A9QW8Z[![joomla_on_synology_nas_006](/assets/images/2011/11/joomla_on_synology_nas_006_thumb.png "joomla_on_synology_nas_006")](http://www.waltercedric.com/images/ea1815e2bf67_13CCD/joomla_on_synology_nas_006.png)

Point your browser to http://{youservernasname}/joomla/ and finish the installation of Joomla following the web installer, you can use the user and password previously created.