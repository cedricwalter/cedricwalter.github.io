---

title: 'Cryptocurrencies Graph price using  a Raspberry Pi and 3.5” LCD Display'
date: '2020-04-11T20:04:18+02:00'
author: 'Cédric Walter'
categories:
- blockchain



    
header:
  teaser: /assets/images/2020/04/cryptocurrencies-graph-raspberry-pi-lcd.jpg
tags:
    - bitcoin
    - ethereum
    - monitor
    - raspberrypi
---

We will use the project [Bitcoin chart for the terminal](https://github.com/madnight/bitcoin-chart-cli) as command line util. For a list of supported cryptocurrencies see [coins](https://github.com/madnight/bitcoin-chart-cli/blob/HEAD/COINS.md).

## Shopping list

You need obviously a raspberry pi, ideally with WIFI build in if you don’t like cables

- Raspberry pi 1, single core, will require an Ethernet cable
- Raspberry pi 2 , dual core, will require an Ethernet cable
- Raspberry pi 3 or 4, a bit a shame to use this amount of power for that task, but has built in WIFI

A [3.5” LCD screen from Amazon](https://amzn.to/2xmJHb9)

- [![](/assets/images/2020/04/Raspberry-Pi-LCD-Display-Module-3.5inch-320X480-TFT-2.jpg)](/assets/images/2020/04/Raspberry-Pi-LCD-Display-Module-3.5inch-320X480-TFT-2.jpg)<figcaption class="blocks-gallery-item__caption">Raspberry Pi LCD Display Module 3.5inch 320X480 TFT</figcaption>
- [![](/assets/images/2020/04/Raspberry-Pi-LCD-Display-Module-3.5inch-320X480-TFT-1.jpg)](/assets/images/2020/04/Raspberry-Pi-LCD-Display-Module-3.5inch-320X480-TFT-1.jpg)<figcaption class="blocks-gallery-item__caption">Raspberry Pi LCD Display Module 3.5inch 320X480 TFT</figcaption>

## Installing the Software

Your SD-card needs to contain the software. You can take the long road by building the SD-card image yourself or use the already prepared SD-Card image:

# Download SD-Card image – Version 1.0: SOON

SHA-256: xxxxxxxxxxx

# Write the SD-Card image to your SD Card

You need to write the downloaded SD card image (the img.gz-file) to your SD card (16 GB minimum) – you can use the very easy tool Balena Etcher for this: <https://www.balena.io/etcher/> .. it’s available for Win, Mac &amp; Linux.

Insert the SD card and connect the power plug.

- Make sure to connect the raspberry with a LAN cable to the internet at this point.
- Make sure that your laptop and the raspberry are on the same local network.

## BUILDING THE SD CARD

# [Raspbian](https://waltercedric.com/tag/Raspbian/) is THE official operating system for all models of the Raspberry Pi.

> Raspbian is a Debian-based (32 bit) computer operating system for Raspberry Pi. There are several versions of Raspbian including Raspbian Buster and Raspbian Stretch. Since 2015 it has been officially provided by the Raspberry Pi Foundation as the primary operating system for the family of Raspberry Pi single-board computers.
> 
> <cite>[Wikipedia](https://en.wikipedia.org/wiki/Raspbian)</cite>

We now use the Raspberry Pi Imager for an easy way to install Raspbian and other operating systems to an SD card ready to use with your Raspberry Pi:

- [Raspberry Pi Imager for Windows](https://downloads.raspberrypi.org/imager/imager.exe)
- [Raspberry Pi Imager for macOS](https://downloads.raspberrypi.org/imager/imager.dmg)
- [Raspberry Pi Imager for Ubuntu](https://downloads.raspberrypi.org/imager/imager_amd64.deb)

Choose Raspbian other, then lite. When finished boot the image and connect the pi to WIFI

```
sudo raspi-config
```

- Under localization options, set the proper keyboard layout
- Under network, connect to your WIFI
- Under interfaces, activate SSH

```
sudo apt update
sudo apt install npm
sudo npm install bitcoin-chart-cli -g
```

## Install LCD drivers

My screen is the [3.5” version](http://www.lcdwiki.com/3.5inch_RPi_Display)

```
# install LCD driver
sudo apt update
sudo apt upgrade
sudo apt install git 
rm -r LCD-show
git clone https://github.com/goodtft/LCD-show.git
sudo chmod -R 755 LCD-show
cd LCD-show/
sudo apt-mark hold raspberrypi-bootloader
sudo ./LCD35-show  # PI will reboot now automatically
```

## Run the script after autologin

Add to your .bashrc, you can also add -c ETH with [one of the supported coins](https://github.com/madnight/bitcoin-chart-cli/blob/HEAD/COINS.md),

```
vi .bashrc
```

add at the end of file

```
# -d, --days <n>          number of days the chart will go back
# --hours <n>             number of hours the chart will go back
#  --mins <n>              number of minutes the chart will go back
#  -w, --width <n>         max terminal chart width
#  -h, --height <n>        max terminal chart height
#  -c, --coin <string>     specify the coin e.g. ETH
#  -m, --currency <string> specify the trading pair currency (Default: USD)
#  --disable-legend        disable legend text
watch -n60 -t -c bitcoin-chart-cli --mins 1200 -w 50
```

## Set the PI to autologin

```
# set Raspi to boot up automatically with user pi (for the LCD)
# https://www.raspberrypi.org/forums/viewtopic.php?t=21632
sudo raspi-config nonint do_boot_behaviour B2
sudo bash -c "echo '[Service]' >> /etc/systemd/system/getty@tty1.service.d/autologin.conf"
sudo bash -c "echo 'ExecStart=' >> /etc/systemd/system/getty@tty1.service.d/autologin.conf"
sudo bash -c "echo 'ExecStart=-/sbin/agetty --autologin pi --noclear %I 38400 linux' >> /etc/systemd/system/getty@tty1.service.d/autologin.conf"
```

and reboot

```
sudo reboot
```

![](/assets/images/2020/04/cryptocurrencies-graph-raspberry-pi-lcd.jpg)<figcaption>cryptocurrencies-graph-raspberry-pi-lcd</figcaption>## SSH login do not work anymore?

After that you can not log anymore with SSH to the PI user, to be able to login, add a USB keyboard and type

```
sudo raspi-config nonint do_boot_behaviour B1
```

Run again the following to enable auto-login

```
sudo raspi-config nonint do_boot_behaviour B2
```