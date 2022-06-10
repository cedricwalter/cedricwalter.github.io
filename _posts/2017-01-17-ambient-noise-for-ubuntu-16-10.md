---
id: 8599
title: 'Ambient Noise for Ubuntu 16.10 yakkety'
date: '2017-01-17T19:33:30+01:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=8599'
permalink: /linux/ambient-noise-for-ubuntu-16-10/
---

Ambient Noise (<http://anoise.tuxfamily.org>) Player for #Ubuntu Plays Relaxing Sounds to Keep You Creative.

In previous #Ubuntu version, just open a shell and run

```
sudo add-apt-repository ppa:costales/anoise sudo apt-get update sudo apt-get install anoise
```

Fixing Ambient Noise for #Ubuntu 16.10 require for now to compile from source the application. Run these commands into a shell, first installing dependencies:

```
sudo apt-get install bzr gir1.2-gstreamer-1.0 python-gst-1.0 gir1.2-gtk-3.0 python-distutils-extra gir1.2-webkit-3.0
```

The sound indicator:

```
bzr branch lp:anoise cd anoise sudo python setup.py install --prefix=/usr 
```

The sounds:

```
bzr branch lp:~costales/anoise/media cd media sudo python setup.py install --prefix=/usr 
```

If you have a player in the sound indicator, it’s done! If not, install the GUI:

```
bzr branch lp:~costales/anoise/anoise-gui cd anoise-gui  sudo python setup.py install --prefix=/usr 
```

you can now run anoise form terminal

```
anoise &
```

or from menu

### Get additional sounds for the app

 River by Lorenzo Carbonel

```
bzr branch  lp:~costales/anoise/community-extension1 cd community-extension1 sudo python setup.py install --prefix=/usr 
```

 Dumptruck Idling, Fishing Boat, Diesel Motor, Forest Rain, Fountain, House Fan, Large Boat &amp; Old Air Conditioner by Gordon

```
bzr branch  lp:~costales/anoise/community-extension2 cd community-extension2 sudo python setup.py install --prefix=/usr 
```

 Brow OSSL, Brow, Pink &amp; White Noises by Stephen Andrews &amp; Public Domain

```
bzr branch  lp:~costales/anoise/community-extension3 cd community-extension3 sudo python setup.py install --prefix=/usr 
```

Get new sounds from [freesound.org](https://freesound.org) and copy them into your ~/Anoise folder