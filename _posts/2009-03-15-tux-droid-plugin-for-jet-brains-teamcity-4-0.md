---
id: 4193
title: 'Tux Droid Plugin for Jet Brains TeamCity 4.0'
date: '2009-03-15T12:26:37+01:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=4193'
permalink: /java/tux-droid-plugin-for-jet-brains-teamcity-4-0/
tags:
    - ci/cd
    - code
    - continuous
    - cpu
    - create
    - documentation
    - eclipse
    - events
    - failures
    - Fun
    - gadget
    - him
    - home
    - linux
    - plugin
    - teamcity
---

![tux-droid-linux-companion](/assets/images/2009/03/tuxdroidlinuxcompanion_thumb.jpg "tux-droid-linux-companion")**[Tux Droid](http://www.kysoh.com/)** is a #Linux wireless Tux mascot (210mm x 180mm x 140mm – with lowered wings) with a programmable interface, allowing it to announce events by its gestures and by ALSA driven sound. The events are detected by specific gadgets, which are handled by the Tux Gadget Manager. The Tux Droid supports #Linux kernel 2.4 or later and needs a 800 MHz CPU and 128 MB RAM. It communicates by infrared to the USB port (1.1 or 2.0) and for media detection it needs an internet connection. The mascot is driven by Atmel AVR RISC microcontrollers. From [http://en.wikipedia.org/wiki/Tux\_Droid](http://en.wikipedia.org/wiki/Tux_Droid)

[TeamCity](http://www.jetbrains.com/teamcity/) is a #Java-based build management and continuous integration server from JetBrains, creators of IntelliJ IDEA and ReSharper.

#### Tux Droid Plugin

With this plugin you can notify your Tux Droid with your TeamCity build results.

After login you can find the new notificator Tux Droid in your notification settings. You need your Tux Droid server IP and port to connect your Tux to TeamCity. After you have saved the parameters you can configure your individual notification settings for just all projects/specific projects/build failures/…

Each registered User can customize Tux Droid messages or choose different [Attitunes](http://www.kysoh.com/tux-droid/who-is-tux-droid/attitunes).

> [Attitunes](http://www.kysoh.com/tux-droid/who-is-tux-droid/attitunes) *are robot animations you can create combining movement, sound, Text-To-Speech and fun. From functional to fun-ctional. Make Tux Droid sing ‘Dancing in the rain’ or make him cry when you didn’t receive any new E-mail.*

# Some quick info**

- Code is GPL v3.0
- It is version 0.0.1,
- It is build with Maven 2.0, eclipse project to be available soon.

For now just visit the official home of the Tux Droid plugin for TeamCity

### <http://tuxdroid.waltercedric.com>

Documentation is in my Wiki:

[http://wiki.waltercedric.com](http://wiki.waltercedric.com/index.php?title=Tux_Droid_Plugin_For_TeamCity_Continuous_BuildServer)

Moreover, I’ve decided to install and maintain:

15. My own maven repository <http://maven.waltercedric.com>
16. My own build server <http://continuousbuildserver.waltercedric.com/>