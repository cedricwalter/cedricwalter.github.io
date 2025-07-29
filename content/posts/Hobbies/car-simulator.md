---
title: "Simulation Racing Simulator"
summary: "a work in progress"
type: posts
date: 2025-07-29T09:11:52+01:00
tags:
  - simrig
  - car-racing
  - computer-simulator
categories:
  - Hobbies
---
{{< notice warning>}}
Work in progress, will document here my tips and tricks for car racing. 
Computer simulation is cheap or can be expensive, but it could be a tool. 
{{< /notice >}}

{{< notice tips>}}
You dont need anything to enjoy car racing, you can play on a XBOX. 
These tips apply if you want to seriously make it close to the reality and want to use it as a tool, you need a personal computer, running Windows 11.
{{< /notice >}}

# "Invictus" car racing simulator

## Hardware
I went the MOZA route as it is a bit cheaper and as good as Fanatec. You can mix both brand as well.

* 140.- Moza SPG Sequential Shifter
* 473.- Moza CRP Premium Load-Cell Pedalset
* 106.- Moza HBP Handbrake
* 565.- Moza R12 Direct Drive Wheelbase (12 Nm)
* 285.- Moza KS Gt

## Software 
* SimHub - https://www.simhubdash.com - Free or a few euros
* Content manager - https://assettocorsa.club/content-manager.html - Free

## DIY racing panels
You can use cheap Raspberry Pi Touch Display in ALL your favorite car racing simulator!

You will need:
- Raspberry Pi Touch Display or non touch (cheaper) with HDMI input
- Raspberry pi 3,4 or 5 the cheapest with WIFI you can find
- Software SimHub free or license (it is cheap)
- Software Raspberry pi imager 

How to
1. Connect Raspberry Pi to LCD with HDMI
2. Use rapsberry pi imager to install FullpageOS (Other specific purpose OS - Digital signage and kiosks - FullpageOS) on a new SDcard
3. Boot the pi and wait till the welcome page of FullPageOS is displayed
4. Start SimHub and create a panel for each LCD screen, open in web browser to get the URL in the form of 
http://192.168.1.9xx:8888/remotecontrolleddash.html?targetDeviceId=016d77c7-cb40-4efe-9295-76efc58f0773
Every panel should have its own SimHub device.
This is the URL you need to paste in the FullPageOS file
3. Insert the SDcard in your PC and replace content of files fullpageos.txt and fullpagedashboard.txt with that URL
5. Put back in PI and boot!
you can now drive the panel display using SimHub!