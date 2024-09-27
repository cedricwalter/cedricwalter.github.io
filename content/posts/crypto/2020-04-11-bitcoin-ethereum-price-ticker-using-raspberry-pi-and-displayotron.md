---
title: Bitcoin And Ethereum price Ticker using Raspberry Pi and Display-O-Tron

type: posts
date: 2020-04-11T08:58:08+00:00
url: /bitcoin-ethereum-price-ticker-using-raspberry-pi-and-displayotron/
cover: /2020/04/bitcoin-ethereum-price-ticker-using-raspberry-pi-and-displayotron-scaled.webp
summary: "How to monitor the Bitcoin and Ethereum price on a DisplayOTron LCD and any Raspberry PI!"
tags:
  - bitcoin
  - cryptocurrency
  - ethereum
  - raspberrypi
  - raspbian
categories:
  - Crypto
---
How to monitor the Bitcoin and Ethereum price on a DisplayOTron LCD and any Raspberry PI!

## Shopping list

You need obviously a raspberry pi, ideally with WIFI build in if you don 't like cables

  * PI Zero W
  * Raspberry pi 1, single core, will require an Ethernet cable
  * Raspberry pi 2 , dual core, will require an Ethernet cable
  * Raspberry pi 3 or 4, a bit a shame to use this amount of power for that task, has built in WIFI

A displayOTron (<a rel="noreferrer noopener" href="https://shop.pimoroni.com/products/display-o-tron-hat" target="_blank">Shop</a> &#8211; [Github][1]) Includes a 16&#215;3 character LCD display, 6-zone RGB LED backlight, bar graph, and six capacitive touch buttons all in one slim package.

## Installing the Software

Your SD-card needs to contain the software. You can take the long road by **building the SD-card** image yourself or **use the already prepared SD-Card image:**

**Download SD-Card image &#8211; Version 1.0:** <a href="https://drive.google.com/open?id=1XZLb0e2J3-wHaR2At0dT-rYQ0IfkhdYK" target="_blank" rel="noreferrer noopener">https://drive.google.com/open?id=1XZLb0e2J3-wHaR2At0dT-rYQ0IfkhdYK</a>

SHA-256:** **6380f16ff0546864cc9e53ee948ea63dcf47c6decbea50cf17ece7cd8613f72e

**Write the SD-Card image to your SD Card**

You need to write the downloaded SD card image (the img.gz-file) to your SD card (8 GB minimum) &#8211; you can use the very easy tool Balena Etcher for this: <https://www.balena.io/etcher/> .. it 's available for Win, Mac & Linux.

Insert the SD card and connect the power plug.

  * Make sure to connect the raspberry with a LAN cable to the internet at this point.
  * Make sure that your laptop and the raspberry are on the same local network.
  * Change the WIFI password (mine in the image wont work for your network) sudo raspi-config &#8211; Network options

## Building the SD Card

**Raspbian** is THE official operating system for **all** models of the Raspberry Pi.

Raspbian is a Debian-based (32 bit) computer operating system for Raspberry Pi. There are several versions of Raspbian including Raspbian Buster and Raspbian Stretch. Since 2015 it has been officially provided by the Raspberry Pi Foundation as the primary operating system for the family of Raspberry Pi single-board computers.


Use **Raspberry Pi Imager** for an easy way to install Raspbian and other operating systems to an SD card ready to use with your Raspberry Pi:

  * [Raspberry Pi Imager for Windows][2]
  * [Raspberry Pi Imager for macOS][3]
  * [Raspberry Pi Imager for Ubuntu][4]

Boot the image and connect the pi to WIFI

```bash sudo raspi-config```

  * Under localization options, set the proper keyboard layout
  * Under network, connect to your WIFI
  * Under interfaces, activate SSH

## install drivers

```bash # displayOtron python drivers
curl https://get.pimoroni.com/displayotron | bash
sudo pip install dot3k
pip install coinbase```

## Get a Coinbase API key

**We will use a Public endpoint, if you do more than 3 requests per second, up to 6 requests per second in bursts, you ll need an API Key.** (<a href="https://docs.pro.coinbase.com/#rate-limits" target="_blank" rel="noreferrer noopener">doc</a>)

I recommend you for security reasons to create **ANOTHER** empty Coinbase account.

To create an API key unique to your Coinbase trading account:

  1. Select the **Menu **in the top-right corner of the Coinbase Pro dashboard on the website. Managing API keys is not currently supported on the Coinbase Pro mobile app
  2. Select the **API** link from the menu
  3. Under **Profile Information**, select the **API Settings** tab, then select **+ New API Key**
  4. Select your profile and appropriate permissions, create a passphrase, and then enter in your 2-Factor Authentication code
  5. Finally, select **Create API Key** at the bottom to make a unique key. The new API key and secret will be displayed on the **API Settings** page.

Please note that the API secret will be only be shown once, so remember to record your Secret in a secure location. If you lose your API Secret, we will not be able to retrieve it.

Create a new file bitcoin.py

```bash vi /home/pi/bitcoin.py```

and paste the following code:

```bash #!/usr/bin/env python
api_key = 'REPLACE'
api_secret = 'REPLACE'

from dot3k import backlight
# blue, use (255,0,0) for red,  (0,0,255) for green
backlight.rgb(0, 255, 0)
currency_code = 'USD'  # EUR / any currency code

# don't change below that line
# ----------------------------------------------------------
from coinbase.wallet.client import Client
client = Client(api_key, api_secret)
client.get_exchange_rates()

bitcoinPrice = client.get_spot_price(currency=currency_code)
ethereumPrice = client.get_spot_price(currency_pair= 'ETH-USD')


# clear LCD
import dothat.lcd as lcd
lcd.clear()

# first line
lcd.set_cursor_position(0, 0)
import datetime
datetime.datetime.now()
dateTimeNow = (datetime.datetime.now())
from time import gmtime, strftime
lcd.write('{}'.format(dateTimeNow))

# second line
lcd.set_cursor_position(0, 1)
lcd.write('BTC ${}'.format(bitcoinPrice.amount))

# third line
lcd.set_cursor_position(0, 2)
lcd.write('ETH ${}'.format(ethereumPrice.amount))

# to display IP instead of ETH, uncomment
# Raspbian uses "hostname -I" to display the ip address on login
# from subprocess import check_output
# ipAdress = check_output(['hostname', '-I'])
# lcd.write('{}'.format(ipAdress))

print 'Bitcoin price %s in %s: %s' % (dateTimeNow, currency_code, bitcoinPrice.amount)```

Add a crontab to this file

```bash crontab -e

* * * * * /home/pi/bitcoin.py 2>&1```<figure class="wp-block-image size-large">

![](/2020/04/bitcoin-ethereum-price-ticker-using-raspberry-pi-and-displayotron-1024x768.webp)

 [1]: https://github.com/pimoroni/displayotron
 [2]: https://downloads.raspberrypi.org/imager/imager.exe
 [3]: https://downloads.raspberrypi.org/imager/imager.dmg
 [4]: https://downloads.raspberrypi.org/imager/imager_amd64.deb
