---
id: 4917
title: 'installing Google Chromium OS to USB'
date: '2009-12-24T19:15:11+01:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=4917'
permalink: /internet/installing-google-chromium-os-to-usb/
image: /wp-content/uploads/2009/12/chromium.os_.logo_3.jpg
tags:
    - google
    - time
---

![chromium.os.logo](/assets/images/2009/12/chromium.os_.logo_3.jpg "chromium.os.logo")

[Chromium OS](http://www.chromium.org/chromium-os) is an open-source project that aims to build an operating system that provides a fast, simple, and more secure computing experience for people who spend most of their time on the web. In this small post I provide you the URL to a binary build, and a small how to install it on a USB stick.

- - - - - -

After 2 seconds boot time, and the login screen, you should see the following:

[![chromiumos](/assets/images/2009/12/chromiumos_thumb.jpg "chromiumos")](/assets/images/2009/12/chromiumos_2.jpg)

## Download

<http://chromeos.hexxeh.net/index.php>

## Instructions

### Linux Instructions

Extract ChromeOS-Cherry.img and run the following command in the same directory as the file, where X is the device name of your USB drive.   
\# sudo dd if=ChromeOS-Cherry.img of=/dev/X bs=4M   
Once the command finishes, you can then boot from the USB drive

### Windows Instructions

Download Image Writer for Windows (<http://bit.ly/7gRu0n>) and extract the program. Launch the program, and select the image (ChromeOS-Cherry.img) and your USB drive letter from the drop down box. Click “Write”. The install image will then be copied to the drive. Once it’s done, close the program and you can then boot from the USB drive.

### Mac

Firstly, unmount the drive you want to install Chromium OS to. Place the downloaded file onto your desktop. Open System Profiler, click USB on the list at the side and then select the entry that represents your USB disk. Now look for the BSD Name column (<http://bit.ly/5mG4WK>), ie disk1

open up Terminal and type the following commands.   
\# cd Desktop   
\# tar -zxvf ChromeOS-Cherry.tar.gz   
Replace X with the name of the disk you found earlier, ie disk1.   
\# sudo dd if=ChromeOS-Cherry.img of=/dev/X bs=4m   
This command will ask you to enter your password (the same one you enter when installing software for example), type it in and press enter.