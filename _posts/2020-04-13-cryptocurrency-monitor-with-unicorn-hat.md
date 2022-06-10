---
id: 13010
title: 'Cryptocurrency monitor with Unicorn HAT'
date: '2020-04-13T11:23:14+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/?p=13010'
permalink: /gadget/cryptocurrency-monitor-with-unicorn-hat/
ngg_post_thumbnail:
    - '0'
header:
  teaser: /assets/images/2020/04/Cryptocurrency-monnitor-unicorn-hat.jpg
tags:
    - bitcoin
    - cryptocurrency
    - raspberry
    - raspberrypi
    - raspbian
---

Unicorn pHAT and HAT. 32 or 64 blinding ws2812 pixels for your Raspberry Pi. it is called Unicorn Hat because it does rainbows, really bright rainbows! **ATTENTION**: do not stare directly at the led without a sheet of paper on it. LED are REALLY bright!

![](/assets/images/2020/04/unicorn-hat-raspberry-pi.jpg)## Shopping list

You need obviously a [raspberry pi](https://waltercedric.com/?s=raspberry), ideally with WIFI build in if you don’t like cables

- Raspberry Pi 1 is not supported by Unicorn Hat
- [Raspberry pi](https://waltercedric.com/?s=raspberry) 2 , dual core, will require an Ethernet cable, can still be found on ebay, graiglist. Consume half the power of a PI 3 or 4
- [Raspberry pi](https://waltercedric.com/?s=raspberry) 3 or 4, quad core, a bit a shame to use this amount of power for that task, but has built in WIFI!

and a Unicorn HAT from <https://shop.pimoroni.com/products/unicorn-hat> I’ve got mine used in flea market 🙂

### Unicorn HAT Features

- It works on [Raspberry pi](https://waltercedric.com/?s=raspberry) 4, 3+, 3, 2, A+ and Zero
- 64 RGB LEDs (WS2812B)
- LED data driven via DMA over PWM
- [Unicorn HAT pinout](https://pinout.xyz/pinout/unicorn_hat)
- Compatible with all 40-pin header Raspberry Pi models
- [Python library](https://github.com/pimoroni/unicorn-hat)
- Comes fully assembled
- **Warning**: WS2812 LEDs are bright enough to cause eye pain, do not look at them directly when brightly lit. is recommended to use a [diffuser](https://shop.pimoroni.com/products/pibow-modification-layers).
- **Photo-sensitivity warning**: flashing, strobing, and patterns of lights may cause epileptic seizures. Always take care and immediately stop using if you feel unwell (dizziness, nausea, affected vision, eye twitching, disorientation).
- **Power**: Unicorn HAT requires a >2A microUSB power supply for your Pi.

## BUILDING THE SD CARD

# [Raspbian](https://waltercedric.com/tag/Raspbian/)** is THE official operating system for **all** models of the [Raspberry pi](https://waltercedric.com/?s=raspberry).

> **Raspbian** is a Debian-based (32 bit) computer operating system for Raspberry Pi. There are several versions of Raspbian including Raspbian Buster and Raspbian Stretch. Since 2015 it has been officially provided by the Raspberry Pi Foundation as the primary operating system for the family of Raspberry Pi single-board computers.
> 
> <cite>[Wikipedia](https://en.wikipedia.org/wiki/Raspbian)</cite>

We now use the **Raspberry Pi Imager** for an easy way to install Raspbian and other operating systems to an SD card ready to use with your Raspberry Pi:

- [Raspberry Pi Imager for Windows](https://downloads.raspberrypi.org/imager/imager.exe)
- [Raspberry Pi Imager for macOS](https://downloads.raspberrypi.org/imager/imager.dmg)
- [Raspberry Pi Imager for Ubuntu](https://downloads.raspberrypi.org/imager/imager_amd64.deb)

![](/assets/images/2020/04/rasbian-desktop.png)Choose Raspbian (other), then lite version connect HDMI, Keyboard, mouse (and network cable or you can use WIFI)

Add a new file ‘ssh’ to the first partition, to enable ssh. Boot the PI and connect to the console.

## Installation

## Install Unicorn HAT

```
# Unicorn Hat is easy to set up, from https://github.com/pimoroni/unicorn-hat
curl -sS https://get.pimoroni.com/unicornhat | bash
```

## Install the software

We use the project [Unicorn-scroller](https://github.com/sconemad/unicorn-scroller/) and modify it to support querying the [Coingecko](https://www.coingecko.com) free API

> CoinGecko is a cryptocurrency ranking web site that provides 360 degree overview of the standing of digital currencies. The cryptocurrency ranking is quantitatively and qualitatively evaluated based on public data collected from the internet. Metrics considered include market capitalization, liquidity, developer activity, community, and public interest.
> 
> <cite><https://www.coingecko.com/></cite>

I did open a Pull Request at [https://github.com/sconemad/unicorn-scroller/pull/6 ](https://github.com/sconemad/unicorn-scroller/pull/6) as long as it is not merged into unicorn-scroller, we will use [my fork](https://github.com/cedricwalter/unicorn-scroller)

```
sudo apt-get install git python-pip libfreetype6-dev python-imaging python-feedparser fortune-mod -y
sudo pip install Pillow, pyephem, pycoingecko

# a pull request has been opened https://github.com/sconemad/unicorn-scroller/pull/6
# in between use my fork
git clone https://github.com/cedricwalter/unicorn-scroller.git
cd unicorn-scroller
git checkout cryptocurrencies

# get 8x8 True Type font, from /home/pi/unicorn-scroller
wget -O font.zip https://dl.dafont.com/dl/?f=minecraftia
unzip font.zip

# delete all in  /home/pi/unicorn-scroller/messages/ except bitcoin and ethereum
ln -s bitcoin 01-00
or 
ln -s ethereum 01-00

# run to test
sudo ./unicorn-scroller.py
```

## Run at boot time

To run on system boot, add the following to /etc/rc.local (before the “exit 0” line at the end):

```
(cd /home/pi/unicorn-scroller && python unicorn-scroller.py)&
```

<iframe allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" frameborder="0" height="608" loading="lazy" src="https://www.youtube.com/embed/VShv9o_g8GQ?feature=oembed" title="Cryptocurrency monitor unicorn hat" width="1080"></iframe>