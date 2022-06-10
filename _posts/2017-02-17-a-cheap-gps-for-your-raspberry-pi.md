---
id: 8607
title: 'A cheap GPS for your Raspberry PI'
date: '2017-02-17T10:40:30+01:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=8607'
permalink: /linux/a-cheap-gps-for-your-raspberry-pi/
image: /wp-content/uploads/2017/02/raspberry-pi-gps.jpg
tags:
    - raspbian
---

Old i-gotu (i-gotU) gt-200e/gt-120 gps receiver work with the #raspberry pi just fine! breathing a new life in this 5 years old device. You’ll find a lot on #eBay cheap for sale

![](/assets/images/2017/02/raspberry-pi-gps.jpg)

[i-gotU](http://global.mobileaction.com/product/product_i-gotU_USB.jsp) is a GPS Logger and Receiver 2-in-1 device including user-friendly Travel Blog Software. i-gotU records trip routes, Auto-adds photo GPS locations, creates an animated trip journal that brings back live trip memory by plotting the route and playing back the photos / YouTube videos with the exact location on 3D maps, making it more fun and easier to share trip or outdoor sport activities with friends through @trip travel-blog hosting site, Internet Explorer MHTML or Google KMZ file format or popular web album Picasa &amp; Flickr.

| Dimension | 44.5 x 28.5 x 13 mm |
|---|---|
| Weight | 20g |
| GPS | SiRF Star IV Low Power chipset   Hot Start: < 1 sec   Warm Start: < 35sec   Cold Start: < 35sec   WASS &amp; EGNOS support |
| GPS Antenna | Built-in GPS patch antenna |
| Interface | USB 1.1 |
| Water Resistant | Yes |
| Battery | Built-in 230mAh Lithium-ion battery |
| Build-in memory | 16Mb |
| Waypoints | 65,000 |
| LED indicator | Blue &amp; Red |

I used it directly plugged into a RPi usb port 🙂

No special driver software was needed using [Raspbian](https://www.raspbian.org/). It shows up under /dev/ as /dev/ttyUSB0 or ttyUSB1, which you will need to determine before you start up gpsd.

- [gpsd ](http://www.catb.org/gpsd/)is sort of a generic GPS receiver server that then makes the output from one or more GPS devices available in a standard format to both local and remote GPS applications. [Doc Here](http://www.catb.org/gpsd/gpsd.html)
- [foxtrotgps ](https://www.foxtrotgps.org/)is a simple gps/mapping application that makes use of GPSD data.