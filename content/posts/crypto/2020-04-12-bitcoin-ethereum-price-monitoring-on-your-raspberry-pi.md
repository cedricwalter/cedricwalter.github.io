---
title: "Bitcoin, Ethereum price Monitoring on your raspberry Pi"
type: posts
date: 2020-04-12T09:58:56+00:00
url: /bitcoin-ethereum-price-monitoring-on-your-raspberry-pi/
cover: https://www.waltercedric.com/2020/04/bitcoin-monitor.webp
summary: "Bitcoin, Ethereum price Monitoring on your raspberry Pi"
tags:
  - bitcoin
  - raspberrypi
  - raspbian
categories:
  - Crypto
---
All credit goes to [Author][1]

My setup use

  * Nginx instead of Apache
  * An easier setup, with less steps
  * You can display Bitcoin, Ethereum or any other cryptocurrencies https://github.com/cedricwalter/raspicryptoticker/issues"
  * I also provide a ready to use image

## Shopping list

You need obviously a raspberry pi, ideally with WIFI build in if you don 't like cables

  * Raspberry pi 1, single core, will require an Ethernet cable
  * Raspberry pi 2 , dual core, will require an Ethernet cable
  * Raspberry pi 3 or 4, a bit a shame to use this amount of power for that task, but has built in WIFI

A  [3.5" LCD screen from Amazon](https://amzn.to/2xmJHb9)

*   [![](https://www.waltercedric.com/2020/04/Raspberry-Pi-LCD-Display-Module-3.5inch-320X480-TFT-2-768x1024.webp)](/2020/04/Raspberry-Pi-LCD-Display-Module-3.5inch-320X480-TFT-2-scaled.webp)

    Raspberry Pi LCD Display Module 3.5inch 320X480 TFT

*   [![](https://www.waltercedric.com/2020/04/Raspberry-Pi-LCD-Display-Module-3.5inch-320X480-TFT-1-768x1024.webp)](/2020/04/Raspberry-Pi-LCD-Display-Module-3.5inch-320X480-TFT-1-scaled.webp)

    Raspberry Pi LCD Display Module 3.5inch 320X480 TFT

## Installing the Software

Your SD-card needs to contain the software. You can take the long road by **building the SD-card** image yourself or **use the already prepared SD-Card image:**

**Download SD-Card image &#8211; Version 1.0:** **SOON**

SHA-256: **xxxxxxxxxxx**

**Write the SD-Card image to your SD Card**

You need to write the downloaded SD card image (the img.gz-file) to your SD card (16 GB minimum) &#8211; you can use the very easy tool Balena Etcher for this: <https://www.balena.io/etcher/> .. it 's available for Win, Mac & Linux.

Insert the SD card and connect the power plug.

  * Make sure to connect the raspberry with a LAN cable to the internet at this point.
  * Make sure that your laptop and the raspberry are on the same local network.

## BUILDING THE SD CARD

**[Raspbian][2]** is THE official operating system for **all** models of the Raspberry Pi.

> **Raspbian** is a Debian-based (32 bit) computer operating system for Raspberry Pi. There are several versions of Raspbian including Raspbian Buster and Raspbian Stretch. Since 2015 it has been officially provided by the Raspberry Pi Foundation as the primary operating system for the family of Raspberry Pi single-board computers.
>
> [Wikipedia](https://en.wikipedia.org/wiki/Raspbian)

We now use the **Raspberry Pi Imager** for an easy way to install Raspbian and other operating systems to an SD card ready to use with your Raspberry Pi:

  * [Raspberry Pi Imager for Windows][3]
  * [Raspberry Pi Imager for macOS][4]
  * [Raspberry Pi Imager for Ubuntu][5]

![](https://www.waltercedric.com/2020/04/rasbian-desktop.webp)

Choose Raspbian Desktop (recommended), connect HDMI, Keyboard, mouse (and network cable or you can use WIFI)

Add a new file &#8216;ssh ' to the first partition, to enable ssh

## Installation

### Set up nginx web server on the Raspberry Pi

```bash
sudo apt-get update
# we need PHP, a browser, and we will deactivate the screensaver
sudo apt-get install nginx php7.3-fpm php7.3-curl  chromium-browser xscreensaver -y

# start nginx
sudo systemctl restart php7.3-fpm

# we create one site, listening to localhost on port 80
sudo vi /etc/nginx/sites-available/default

server {
    listen 80 default_server;
    listen [::]:80 default_server;

    root /var/www/html;

    index index.php index.html index.htm index.nginx-debian.html;

    server_name [your public IP];

    location / {
        try_files $uri $uri/ =404;
    }

    location ~ \.php$ {
        include snippets/fastcgi-php.conf;
        fastcgi_pass unix:/var/run/php/php7.3-fpm.sock;
    }

    location ~ /\.ht {
        deny all;
    }
}

sudo nginx -t
sudo systemctl reload nginx```

## Disable screensaver

Go to **Preferences **> **Screensaver **and disable the screensaver.

## Choose your cryptocurrency

```bash cd  /var/www/html

# to display Bitcoin price
sudo wget https://github.com/cedricwalter/raspicryptoticker/files/4466181/bitcoin.zip
sudo unzip bitcoin.zip

# to display Ethereum Price
sudo wget https://github.com/cedricwalter/raspicryptoticker/files/4466186/ethereum.zip
sudo unzip ethereum.zip
```



## Install LCD drivers

My screen is the http://www.lcdwiki.com/3.5inch_RPi_Display

```bash # install LCD driver
sudo apt update
sudo apt upgrade
sudo apt install git
rm -r LCD-show
git clone https://github.com/goodtft/LCD-show.git
sudo chmod -R 755 LCD-show
cd LCD-show/
sudo apt-mark hold raspberrypi-bootloader
sudo ./LCD35-show  # PI will reboot now automatically```

-deactivate
This tells xscreensaver to pretend that there has just been user activity. This means that if the screensaver is active (the screen is blanked), then this command will cause the screen to un-blank as if there had been keyboard or mouse activity. If the screen is locked, then the password dialog will pop up first, as usual. If the screen is not blanked, then this simulated user activity will re-start the countdown (so, issuing the -deactivate command periodically is one way to prevent the screen from blanking.)

 [1]: https://github.com/Head/raspberry-pi-chart
 [2]: /tag/Raspbian/
 [3]: https://downloads.raspberrypi.org/imager/imager.exe
 [4]: https://downloads.raspberrypi.org/imager/imager.dmg
 [5]: https://downloads.raspberrypi.org/imager/imager_amd64.deb
