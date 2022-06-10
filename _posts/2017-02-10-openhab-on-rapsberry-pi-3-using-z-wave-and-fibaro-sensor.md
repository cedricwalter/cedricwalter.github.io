---
id: 8602
title: 'OpenHAB on rapsberry PI 3 using Z-Wave and Fibaro Sensor'
date: '2017-02-10T09:11:52+01:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=8602'
permalink: /linux/openhab-on-rapsberry-pi-3-using-z-wave-and-fibaro-sensor/
header:
  teaser: /assets/images/2017/02/OpenHAB-fibaro-z-wave-raspeberry.jpg
tags:
    - raspberrypi
    - raspbian
---

# Hardware 

- Rapsberry PI 3 with #Linux openHABianPi 4.4.0-1-rpi2 #1 SMP Debian 4.4.6-1+rpi14 (2016-05-05) armv7l GNU/Linux
- OpenHAB 2.0.0-1 (Release Build) on /dev/ttyACM0
- Latest Aeotec Gen5 USB Aeotec’s Z-Stick packs all the tools you need to create and manage a Z-Wave network all within one USB stick. Use the Z-Stick to create your Z-Wave network, use it to add up to 232 Z-Wave devices, and then use it to control them.
- Fibaro FGMS001-001 ZW5 Motion Sensor firmware v3.2
- Vision plus zwave plus siren

Attention: Order a lamp or something not harmful (like a siren that run for 30s) to test your automation rules

### AEOTEC BY AEON LABS Z-STICK Z-WAVE PLUS GEN5

Aeon Labs Z-Stick Gen5 is a self-powered Z-Wave USB adapter. You will be able to add and remove Z-Wave devices within your network directly with the Z-Stick. It makes the inclusion and exclusion process faster and easier. You may also use the Z-Stick as a secondary controller to your hub, provided that the master firmware supports this type of device and works with Z-Wave Plus and Gen5 technology.

### FIBARO Z‑WAVE PLUS MOTION SENSOR FGMS‑001 ZW5

Has a lot of advantages:

- Detects motion, temperature, light and vibration
- Extremely small for discreet and flexible installation
- Instant LUX reports – great for Z-Wave light automation
- Test network range anytime from the device itself
- Pet-immune motion sensor with adjustable sensitivity and trigger interval
- Unique LED indicator for motion and temperature events
- Created and manufactured in Europe
- Built-in tamper protection and advanced signal encryption for more security

### VISION Z-WAVE PLUS ALARM 

The Vision Z-Wave Plus Siren is the optimal mix of audio and visual safety features. With a robust 105dB alarm and bright LED strobe light, this siren is a smart addition to every home security system, and especially those with loved ones who are visually or audibly impaired.

Once connected to your Z-Wave gateway controller, easily monitor and control the siren from your mobile device whether you’re near or far. Receive instant text and/or email alerts in the case of emergencies and unexpected events. For advanced home security, create events that connect the siren with other Z-Wave devices — trigger the siren when your back door is opened unexpectedly or when water or gas is detected in the basement.

With an improved 500 series chip for faster wireless communication and long-lasting battery, rest assured that the Vision Siren will be there when you need it most.

- Loud 105dB audio alarm
- LED strobe lighting for added visual protection
- Choose between visual and audio alarm or use both
- Receive instant text/email alerts and notifications
- Schedule custom scenes and events
- Upgraded 500 series chip for faster connectivity
- Long-lasting, efficient battery consumption
- AES communication encryption
- Tamper protection
- Compact size
- 1-year warranty
- Power: 4 AA batteries (included)
- Wireless Range: Up to 100 feet (30m) line of sight
- Installation and Use: Indoor only
- Operating Temperature: 5ºF – 140ºF (-15ºC – 60ºC)
- Dimensions: 6.3 x 3 x 1.6 in (116 x 77 x 40mm)
- Weight: 8oz

# Installation 

### On the Raspberry Pi

The Raspberry Pi and other small single-board computers are quite famous platforms for openHAB. However, setting up a fully working #Linux system with all recommended packages and openHAB recommendations is a boring task taking quite some time and Linux newcomers shouldn’t worry about these technical details. openHABian aims to provide a self-configuring system specific to the needs of every openHAB user.  
Ready to install images are available for the Raspberry Pi, images for other hardware will follow. openHABian can also be used on existing Debian based #Linux systems. Follow the links below to learn more:

- Documentation <http://docs.openhab.org/installation/openhabian.html>
- Development: [http://github.com/openhab/openhabian](https://github.com/ThomDietrich/openhabian)
- Download: <https://github.com/openhab/openhabian/releases>

Using [Win32 Disk Imager](https://sourceforge.net/projects/win32diskimager/) to write it to a big SDCard 64Gb.

Note: a smaller SDCard will work but to reduce Wear-Leveling it is better to have lot of space to write into to reduce strain on cluster

# Connect Z-Wave Device

Insert the Z-Stick to your PC/ Mac/ Gateway. You will need home automation software to control and configure your Z-Wave network. You may also need to install drivers before the Z-Stick goes into the Serial-API Mode. The computer will have to be on and awake at all times to keep the network active.

Take the Z-Stick out of the USB port to perform inclusion and exclusion processes (it will not send the commands while plugged in). Keep the Z-Stick plugged in if you’d like to add/remove items from your interface through software settings.

To reset your Z-Stick to factory settings, press and hold the rest button for around 20 seconds. You can complete the process with the Z-Stick plugged to the USB port.

### Installation of Fibaro sensor

1. Open the device’s cover.
2. Remove the plastic “I’m ready” strip to activate the included battery.
3. Bring the sensor within direct range of your Z-Wave gateway controller.
4. With the AeoTec Z-Stick Gen5 not connected to pi, press once till a blue light is blinking (learning mode). Place it near every device, press 3 times for Fibaro sensor till it is recognized (both the sensor and USB key will blink to acknowledge),
5. Once successfully connected, close the plastic cover and ensure it is locked securely.

Now you’re ready to mount the sensor. Choose a location that you would like to monitor. The sensor performs best when installed in the corner of a room or directly across from a door at least 8 feet above ground. It is also recommended to avoid sources of heat, direct light, and drafts.

To test range, press and hold the B-button until LED indicator blinks purple. Press and release the button again and wait for LED indicator displays one of the 4 colors to indicate if the sensor is withing your network’s range.

![](/assets/images/2017/02/fibaro-fgms_001-z_wave-plus-range.jpg)<span style="color: #404040; font-family: 'Open Sans'; font-size: 14px;">

In case it is not working read the manual: Aeotec [Z-Stick Gen 5 user manual.](https://aeotec.freshdesk.com/support/solutions/articles/6000056439-z-stick-gen-5-user-manual- "Z-Stick Gen 5 user manual.")

### Installation of the VISION Z-WAVE PLUS ALARM

# First, remove the bracket** from the siren by pressing the locking tab and gently sliding the siren up. Insert the batteries watching for correct orientation. Next, choose a central location for the siren. Use the included screws or adhesive tape to affix the bracket to a flat surface.

# Slide the front cover onto the siren** — the LED should turn on and start flashing to indicate the siren is ready to be included to a new network.

Before including the device, please refer to your Z-Wave controller’s inclusion instructions as they may differ for each controller.

To include the siren into your Z-Wave network:

1\. Put your Z-Wave controller into inclusion/pairing mode.   
2\. Bring the siren within 3 feet of your controller.   
3\. Open the bracket on the siren. Press the program switch for 1 second, then release.   
4\. Once included, the LED light should turn on. (If inclusion failed, the LED light will flash and you’ll have to try again.)

To remove the siren from your Z-Wave network, follow the same steps above but with your controller in exclusion/unpairing mode. Once excluded, the LED light will start flashing.

### Exiting recognition mode

When all your device are recognized exit the recognition mode by pressing again on the USB dongle to exit the mode

Connect dongle now to Pi, insert SDcard and boot. It will take like 30 min to download everything from internet.

# OpenHAB Configuration

Connect using your browser to the interface <http://openhabianpi:8080/start/index> or <http://ip-of-pi:8080/paper-u> i

Go to add-ons and install as much as you may need, required for now are

- Binding – zwave
- Interface – HABmin (we will be using it later for Rules)

At this point you should get in Inbox the dongle recognized, add it, the port will be asked, use /dev/ttyACM0

Some seconds later all your device will appear in inbox, if not, use ssh connect to pi (login: pi/raspberry) and issue an

```
sudo init 6 or sudo service openhab restart
```

You will see lots of erratic behavior that only can be solved with a restart…

You should have all your Z-Wave sensor under “Things” added, set their name to something clearer like motion-sensor1

> Bindings connect your smart home’s devices and technologies to openHAB.

Click on each of them, you will see their channels or capabilities, for each of them create “Items”

> OpenHAB has a strict separation between the physical world and the application, which is built around the notion of “items” (also called the virtual layer).
> 
> Items represent functionality that is used by the application (mainly user interfaces or automation logic). Items have a state and are used through events. They can be read from, or written to, in order to interact with them.
> 
> Items can be bound to bindings i.e. for reading the status of e.g. a bulb or for setting it.

As soon as you create one items, you can see the state of that sensor in

http://openhabianpi:8080/<span style="font-size: 12.16px;">paperui/index.html#/control or http://ip-of-pi:8080/paperui/index.html#/control

If only -NaN or NaN is displayed, you have to either wait or wake up the sensor by pressing once on it button near the dongle (less < 1 meter)

## Strange behaviors

- Removing a “Things” do not remove its “Items” -> you need to manualy remove them
- sometimes you can remove a Things or Items, an error 404 is displayed in the right bottom corner, do a restart and these Things or Items wont be there

 TO BE continued work in progress – not a final version