---
id: 7954
title: 'Raspberry Pi model B'
date: '2013-02-19T20:39:23+01:00'
author: 'Cédric Walter'



header:
  teaser: /assets/images/2013/02/20130219_211947_thumb.jpg
tags:
    - break
    - browser
    - buying
    - cables
    - capable
    - clone
    - code
    - companies
    - computer
    - computers
    - computing
    - HowTo
    - linux
    - raspberry
    - raspbian
    - tutorial
---

[![20130219_211947](/assets/images/2013/02/20130219_211947_thumb.jpg "20130219_211947")](/assets/images/2013/02/20130219_211947.jpg)

Some notes about my experience using the [Raspberry Pi model B](http://www.raspberrypi.org/faqs)…and you get it running [Linux Debian](http://www.debian.org/) on it!

> The #Raspberry Pi is a credit-card sized computer that plugs into your TV and a keyboard. It’s a capable little PC which can be used for many of the things that your desktop PC does, like spreadsheets, word-processing and games. It also plays high-definition video. We want to see it being used by kids all over the world to learn programming.
> 
> \[…\]
> 
> We don’t think that the #Raspberry Pi is a fix to all of the world’s computing issues; we do believe that we can be a catalyst. We want to see cheap, accessible, programmable computers everywhere; we actively encourage other companies to clone what we’re doing. We want to break the paradigm where without spending hundreds of pounds on a PC, families can’t use the internet. We want owning a truly personal computer to be normal for children. We think that 2012 is going to be a very exciting year. \[[About Raspberry PI](http://www.raspberrypi.org/about)\]

# Buying the #Raspberry Pi

$35 in USA or for 59 CHF bei [www.digitec.ch](http://www.digitec.ch) consider adding the case for 18 CHF as it is really well engineered and make the whole a lot safer to manipulate.

[![20130219_155216](http://www.waltercedric.com/images/Raspbery-Pi_AC3F/20130219_155216_thumb.jpg "20130219_155216")](http://www.waltercedric.com/images/Raspbery-Pi_AC3F/20130219_155216.jpg)[![20130219_155246](http://www.waltercedric.com/images/Raspbery-Pi_AC3F/20130219_155246_thumb.jpg "20130219_155246")](http://www.waltercedric.com/images/Raspbery-Pi_AC3F/20130219_155246.jpg)

# Get some more hardware

Buy and SD card or get one from one of your shelves, here is the list of #Raspberry Pi verified peripherals

- [http://elinux.org/RPi\_VerifiedPeripherals](http://elinux.org/RPi_VerifiedPeripherals "http://elinux.org/RPi_VerifiedPeripherals")
- [http://elinux.org/RPi\_SD\_cards](http://elinux.org/RPi_SD_cards "http://elinux.org/RPi_SD_cards")

An HDMI cable,

A power supply, either using an iPhone / iPad / Any cellphone power supply with micro USB will work if it can at least give 500mA to 1A juice.

A USB keyboard.

# Installing Raspbian wheezy

The [Raspberry Pi Foundation](http://www.raspberrypi.org/) has produced and released their own recommended image of Raspbian. Because this image and subsequent updates will be used by 100,000’s of Raspberry Pi users, it should be considered the best supported. If you’re just starting out, this is the image they recommend you to use. It’s a reference root file system from Alex and Dom, based on the [Raspbian](http://www.raspbian.org/) optimised version of Debian, and containing LXDE, Midori, development tools and example source code for multimedia functions.

1. Download it at [http://www.raspberrypi.org/downloads](http://www.raspberrypi.org/downloads "http://www.raspberrypi.org/downloads")
2. Unzip it and write it to a suitable SD card using the UNIX tool [dd](http://en.wikipedia.org/wiki/Dd_(Unix)). Windows users should use [Win32DiskImager](https://launchpad.net/win32-image-writer/+download).
3. Boot on Pi
4. Expand image to fill card using the option on screen when you first boot. If you don’t do this on first boot, then you need to use sudo raspi-config ([Documentation](http://elinux.org/RPi_raspi-config))
5. Log in and change the password by typing passwd

# Introducing turbo mode

Up to 50% more performance for free, see [http://www.raspberrypi.org/archives/2008](http://www.raspberrypi.org/archives/2008 "http://www.raspberrypi.org/archives/2008")

# Media Center only usage?

The graphics card of the #Raspberry Pi is capable of BluRay quality playback, using H.264 at 40MBits/s. It has a fast 3D core accessed using the supplied OpenGL ES2.0 and OpenVG libraries. But If you want to use it as a media center using [XBMC](http://www.xbmc.org "XBMC"), it is recommended to activate the MPG2 hardware decoder, for 3,60€ buy the required licenses at [http://www.raspberrypi.com/license-keys/](http://www.raspberrypi.com/license-keys/ "http://www.raspberrypi.com/license-keys/"). SOund over HDMI is also supported.

Other media center ready to use images are

- **[OpenELEC](http://wiki.xbmc.org/index.php?title=OpenELEC)** – \[ [Installing](http://wiki.openelec.tv/index.php?title=Installing_OpenELEC_on_Raspberry_Pi) \] – \[ [FAQ](http://wiki.openelec.tv/index.php?title=Raspberry_Pi_FAQ) \] – \[ [Help forum](http://openelec.tv/forum/124-raspberry-pi) \]
- **[Raspbmc](http://wiki.xbmc.org/index.php?title=Raspbmc)** – \[ Installing: [Windows](http://www.raspbmc.com/wiki/user/windows-installation/), [Mac OS X, Linux](http://www.raspbmc.com/wiki/user/os-x-linux-installation/) \] – \[ [FAQ](http://www.raspbmc.com/wiki/user/frequently-asked-questions/) \] – \[ [User 
- **[XBian](http://wiki.xbmc.org/index.php?title=XBian)** – \[ [Installing](http://xbian.org/download/) \] – \[ [FAQ](http://xbian.org/faqs/) \] – \[ [Starters 

# Installing Oracle’s Java on #Raspberry Pi

Not an easy task if you don’t want to use the openJDK…

- [http://www.oracle.com/technetwork/articles/java/raspberrypi-1704896.html](http://www.oracle.com/technetwork/articles/java/raspberrypi-1704896.html "http://www.oracle.com/technetwork/articles/java/raspberrypi-1704896.html")
- [http://www.pylo.si/news/installing-oracles-java-raspberry-pi](http://www.pylo.si/news/installing-oracles-java-raspberry-pi "http://www.pylo.si/news/installing-oracles-java-raspberry-pi")
- Benchmark: [http://raspberrypi.org/phpBB3/viewtopic.php?f=81&amp;t=25418](http://raspberrypi.org/phpBB3/viewtopic.php?f=81&t=25418 "http://raspberrypi.org/phpBB3/viewtopic.php?f=81&t=25418")
- Use Debian wheezy (soft-float) with JDK7 for Oracle JVM
- Use Raspbian wheezy (hard-float) with JDK8 for Oracle JVM

# Searching for more Hacks!

Search in Google for

- [site:hackaday.com raspberry](https://www.google.com/search?%7Bgoogle:rlz%7D%7Bgoogle:acceptedsuggestion%7D%7Bgoogle:originalqueryforsuggestion%7Dsourceid=chrome&ie=%7Binputencoding%7D&q=site%3Ahackaday.com+raspberry) will return 21’000 articles!
- [site:lifehacker.com raspberry](https://www.google.com/search?%7Bgoogle:rlz%7D%7Bgoogle:acceptedsuggestion%7D%7Bgoogle:originalqueryforsuggestion%7Dsourceid=chrome&ie=%7Binputencoding%7D&q=site%3Ahackaday.com+raspberry#hl=en&safe=off&sclient=psy-ab&q=site:lifehacker.com+raspberry&oq=site:lifehacker.com+raspberry&gs_l=serp.12...12948.12948.0.13778.1.1.0.0.0.0.53.53.1.1.0.les%3B..0.0...1c.1.4.psy-ab.UpNS6tD0ytg&pbx=1&bav=on.2,or.r_gc.r_pw.r_cp.r_qf.&bvm=bv.42661473,d.Yms&fp=e157be786d772e65&biw=1920&bih=1115) will return 17’600 articles!

# Extension

Want to connect a lot more peripherals? buy a raspberry gertboard! Here are some [images of the small Raspberry Pi attached to a Gertboard](https://www.google.com/search?um=1&hl=en&safe=off&authuser=0&q=raspberry+gertboard&bav=on.2,or.r_gc.r_pw.r_cp.r_qf.&biw=1920&bih=1115&ie=UTF-8&tbm=isch&source=og&sa=N&tab=wi&ei=4dsjUZb_FIPDtQaB-4DIAg).

Gertboard is the ideal add-on for [Raspberry Pi](http://www.element14.com/community/groups/raspberry-pi?ICID=gertboard-techdoc). Designed by [Gert van Loo](http://www.element14.com/community/videos/7300/l/interview-with-gert-van-loo-creator-of-the-gertboard-for-raspberry-pi), it is a flexible experimenter board that plugs directly into your Raspberry Pi, and out into the physical world, allowing you to detect and respond to external physical events. Detect and output analogue voltages. Drive powerful motors. Detect switch presses. Illuminate LEDs and drive relays. Jumper cables allow you to hook up different parts of the circuit in many different ways, allowing total flexibility. All controlled by your own Raspberry Pi.

# Webiopi

[WebIOPi](http://code.google.com/p/webiopi/wiki/README) is a REST framework and a webapp which allows you to control your Raspberry Pi’s GPIO. Just install it on your Pi, and use any browser from your network. It’s useful to start enjoying GPIOs and also to debug some circuits without writing any line of code. It also allows to control your Pi’s GPIOs over Internet, so it’s a good starting point for home remote control.

A small project started:

Controlling danfoss home heating system over the web using a Raspberry Pi and [Webiopi](http://code.google.com/p/webiopi/wiki/README).   
<http://www.youtube.com/watch?v=Guhf7eohl98>  
[http://bbs.scoobynet.com/diy-39/945665-heating-controller-for-two-boilers-three-zones.html](http://bbs.scoobynet.com/diy-39/945665-heating-controller-for-two-boilers-three-zones.html "http://bbs.scoobynet.com/diy-39/945665-heating-controller-for-two-boilers-three-zones.html")