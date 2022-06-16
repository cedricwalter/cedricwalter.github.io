---

title: 'Tux Droid Plugin for Atlassian Bamboo continuous integration server'
date: '2009-03-19T18:27:17+01:00'
author: 'Cédric Walter'



tags:
    - atlassian
    - ci/cd
    - code
    - commercial
    - confluence
    - continuous
    - cpu
    - development
    - distributed
    - events
    - failures
    - Features
    - feedback
    - gadget
    - linux
    - plugin
---

![tux-droid-linux-companion](/assets/images/2009/03/tuxdroidlinuxcompanion_thumb.jpg "tux-droid-linux-companion")

# [Tux Droid](http://www.kysoh.com/) is a #Linux wireless Tux mascot (210mm x 180mm x 140mm – with lowered wings) with a programmable interface, allowing it to announce events by its gestures and by ALSA driven sound. The events are detected by specific gadgets, which are handled by the Tux Gadget Manager. The Tux Droid supports #Linux kernel 2.4 or later and needs a 800 MHz CPU and 128 MB RAM. It communicates by infrared to the USB port (1.1 or 2.0) and for media detection it needs an internet connection. The mascot is driven by Atmel AVR RISC microcontrollers. From [http://en.wikipedia.org/wiki/Tux\_Droid](http://en.wikipedia.org/wiki/Tux_Droid)

*[Bamboo](http://www.atlassian.com/software/bamboo/)* is a continuous integration server from Atlassian Software Systems, the makers of JIRA, Confluence and Crowd. Bamboo is free for philanthropic and open-source projects. Academic and commercial organizations are charged based on type of license. Some other features of Bamboo are its unlimited build plans and unlimited projects that provide instant feedback and a platform to collaborate with other team members for build projects, and its ability to run distributed builds. It integrates with existing development tools, and it can be integrated with popular source code systems.

# With this plugin

You can notify your Tux Droid with your TeamCity build results!

After login you can find the new notificator Tux Droid in your notification settings. You need your Tux Droid server IP and port to connect your Tux to Bamboo. After you have saved the parameters you can configure your individual notification settings for just all projects/specific projects/build failures/…

Each registered User can customize Tux Droid messages or choose different [Attitunes](http://www.kysoh.com/tux-droid/who-is-tux-droid/attitunes).

Some useful resource how to develop a Bamboo plugin with #Maven 2

- <http://confluence.atlassian.com/display/DEVNET/How+to+Build+an+Atlassian+Plugin>
- <http://confluence.atlassian.com/display/DEVNET/Releasing+your+plugin>
- <http://confluence.atlassian.com/display/BAMEXT/Home>

Plugin will appear soon at

<http://tuxdroid-bamboo.waltercedric.com/>

Note you may be interested by the TeamCity continuous integration server version at <http://tuxdroid.waltercedric.com/>