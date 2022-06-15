---

title: 'Upgrading your Picade 8&#8221; to 10&#8221;'
date: '2020-02-23T20:29:23+01:00'
author: 'Cédric Walter'




    
header:
  teaser: /assets/images/2020/02/RetroPieWebsiteLogo.png
tags:
    - arcade
    - bash
    - break
    - brightness
    - check
    - color
    - computer
    - configuration
    - contact
    - controller
    - copy
    - cost
    - current
    - games
    - linux
    - raspberry
    - raspbian
    - vintage
    - vintagegaming
---

*Picade* is a Raspberry Pi-powered mini arcade that you build yourself, with authentic arcade controls, a high resolution 4:3 display that’s ideal for retro gaming, and a punchy speaker to hear those 8-bit game soundtracks at their best.

The ultimate desktop retro arcade machine! Picade is a Raspberry Pi-powered mini arcade that you build yourself, with authentic arcade controls, a high resolution 4:3 display that’s ideal for retro gaming, and a punchy speaker to hear those 8-bit game soundtracks at their best

Total cost of upgrade: 37$ and a bit of time

## Parts to order:

### The new Screen

10.1 inch 1366\*768 LCD Screen Display TFT Monitor for Raspberry Pi 3 / 2 Model B from [AliExpress](https://www.aliexpress.com/item/32657119718.html?spm=a2g0s.9042311.0.0.1f8b4c4dSm4xry)

This 10.1 inch High-resolution 1366\*768 LCD display module kit is especially designed as a monitor for Raspberry Pi 3 / 2 Model B and Raspberry Pi B+ B A+. For use with a Raspberry Pi we suggest editing config.txt to set the HDMI to the native 1366×768 in case it doesn’t detect the resolution properly. The easiest way to edit the config.txt is to put the Pi TF card into an every day computer and edit config.txt with any text editor and save.

# Features:**- <span data-spm-anchor-id="a2g0o.detail.1000023.i0.cdcf233cx2OfUQ">Screen Dimensions: 229mm x 127mm / 9.0″ x 5.0″
- Panel Type: a-Si TFT-LCD Panel
- Panel Size: 10.1″
- Resolution (RGB): 1366×768, WXGA
- Brightness: 200cd/m2
- Contrast Ratio: 800:1 (Min.)
- Display Colors (16bit): 65K
- Response Time (Tr+Td): 30
- Viewing Angle (CR>10): 85/85/85/85
- Operating voltage: 12V (current requirement 1A-2A)
- Rated power: 6-7W
- Signal input: AV + VGA + HDMI (HDMI 1.2)
- Resolution: 1366\* 768,
- Plug and Play: Support
- OSD language: Simplified Chinese, Traditional Chinese, English, Japanese, Korean, Spanish, French, German, Italian, Portuguese
- <span data-spm-anchor-id="a2g0o.detail.1000023.i1.cdcf233cx2OfUQ">Control: Multifunction OSD operation or potentiometer adjust the brightness and color

# Specifications:**

- Screen size: 10.1 inch
- Touch screen: Not support
- Screen Dimensions: 229mm x 127mm / 9.0″ x 5.0″
- Panel Type: a-Si TFT-LCD Panel
- Panel Size: 10.1″
- Resolution (RGB): 1366×768, WXGA
- Display Mode: HFFS, Normally Black, Transmissive
- Surface: Hard coating
- Brightness: 200cd/m2
- Contrast Ratio: 800:1 (Min.)
- Display Colors (16bit): 65K

# Package Includes:**- 1× HDMI+VGA+2AV LCD Controller Board
- 1× 10.1 inch 1366×768 LCD Screen
- 1× LVDS Cable
- 1× Keyboard with Wire

# A 12V power supply**

Get any 12V / 2A power supply

## 1. Mounting the new screen

Just disassemble the Picade, removing the old screen. You will have to cut the cardboard to the new screen size. It is not difficult, just take your time to cut properly the cardboard.

![](/assets/images/2020/02/picade-8inch-upgrade-to-10inch-2.jpg)<div class="ngg-galleryoverview ngg-slideshow" data-gallery-id="0649d3ed38415ca69cc57f0bafc33d3c" id="ngg-slideshow-0649d3ed38415ca69cc57f0bafc33d3c-5078508230" style="max-width: 750px; max-height: 500px;"><div class="ngg-gallery-slideshow-image" id="ngg-image-0" style="height:500px"> [ ![IMG_5477](https://www.waltercedric.com/wp-content/gallery/picade/IMG_5477.JPG) ](https://www.waltercedric.com/wp-content/gallery/picade/IMG_5477.JPG) <div class="ngg-gallery-slideshow-image" id="ngg-image-1" style="height:500px"> [ ![IMG_5485](https://www.waltercedric.com/wp-content/gallery/picade/IMG_5485.JPG) ](https://www.waltercedric.com/wp-content/gallery/picade/IMG_5485.JPG) <div class="ngg-gallery-slideshow-image" id="ngg-image-2" style="height:500px"> [ ![IMG_5484](https://www.waltercedric.com/wp-content/gallery/picade/IMG_5484.JPG) ](https://www.waltercedric.com/wp-content/gallery/picade/IMG_5484.JPG) <div class="ngg-gallery-slideshow-image" id="ngg-image-3" style="height:500px"> [ ![IMG_5483](https://www.waltercedric.com/wp-content/gallery/picade/IMG_5483.JPG) ](https://www.waltercedric.com/wp-content/gallery/picade/IMG_5483.JPG) <div class="ngg-gallery-slideshow-image" id="ngg-image-4" style="height:500px"> [ ![IMG_5482](https://www.waltercedric.com/wp-content/gallery/picade/IMG_5482.JPG) ](https://www.waltercedric.com/wp-content/gallery/picade/IMG_5482.JPG) <div class="ngg-gallery-slideshow-image" id="ngg-image-5" style="height:500px"> [ ![IMG_5481](https://www.waltercedric.com/wp-content/gallery/picade/IMG_5481.JPG) ](https://www.waltercedric.com/wp-content/gallery/picade/IMG_5481.JPG) <div class="ngg-gallery-slideshow-image" id="ngg-image-6" style="height:500px"> [ ![IMG_5480](https://www.waltercedric.com/wp-content/gallery/picade/IMG_5480.JPG) ](https://www.waltercedric.com/wp-content/gallery/picade/IMG_5480.JPG) <div class="ngg-gallery-slideshow-image" id="ngg-image-7" style="height:500px"> [ ![IMG_5479](https://www.waltercedric.com/wp-content/gallery/picade/IMG_5479.JPG) ](https://www.waltercedric.com/wp-content/gallery/picade/IMG_5479.JPG) <div class="ngg-gallery-slideshow-image" id="ngg-image-8" style="height:500px"> [ ![IMG_5478](https://www.waltercedric.com/wp-content/gallery/picade/IMG_5478.JPG) ](https://www.waltercedric.com/wp-content/gallery/picade/IMG_5478.JPG) <div class="ngg-gallery-slideshow-image" id="ngg-image-9" style="height:500px"> [ ![IMG_5469](https://www.waltercedric.com/wp-content/gallery/picade/IMG_5469.JPG) ](https://www.waltercedric.com/wp-content/gallery/picade/IMG_5469.JPG) <div class="ngg-gallery-slideshow-image" id="ngg-image-10" style="height:500px"> [ ![IMG_5476](https://www.waltercedric.com/wp-content/gallery/picade/IMG_5476.JPG) ](https://www.waltercedric.com/wp-content/gallery/picade/IMG_5476.JPG) <div class="ngg-gallery-slideshow-image" id="ngg-image-11" style="height:500px"> [ ![IMG_5475](https://www.waltercedric.com/wp-content/gallery/picade/IMG_5475.JPG) ](https://www.waltercedric.com/wp-content/gallery/picade/IMG_5475.JPG) <div class="ngg-gallery-slideshow-image" id="ngg-image-12" style="height:500px"> [ ![IMG_5474](https://www.waltercedric.com/wp-content/gallery/picade/IMG_5474.JPG) ](https://www.waltercedric.com/wp-content/gallery/picade/IMG_5474.JPG) <div class="ngg-gallery-slideshow-image" id="ngg-image-13" style="height:500px"> [ ![IMG_5473](https://www.waltercedric.com/wp-content/gallery/picade/IMG_5473.JPG) ](https://www.waltercedric.com/wp-content/gallery/picade/IMG_5473.JPG) <div class="ngg-gallery-slideshow-image" id="ngg-image-14" style="height:500px"> [ ![IMG_5472](https://www.waltercedric.com/wp-content/gallery/picade/IMG_5472.JPG) ](https://www.waltercedric.com/wp-content/gallery/picade/IMG_5472.JPG) <div class="ngg-gallery-slideshow-image" id="ngg-image-15" style="height:500px"> [ ![IMG_5471](https://www.waltercedric.com/wp-content/gallery/picade/IMG_5471.JPG) ](https://www.waltercedric.com/wp-content/gallery/picade/IMG_5471.JPG) <div class="ngg-gallery-slideshow-image" id="ngg-image-16" style="height:500px"> [ ![IMG_5470](https://www.waltercedric.com/wp-content/gallery/picade/IMG_5470.JPG) ](https://www.waltercedric.com/wp-content/gallery/picade/IMG_5470.JPG)   <div class="slideshowlink" style="max-width: 750px;"> [View Thumbnails](https://www.waltercedric.com/games/upgrading-your-picade-8-to-10/nggallery/thumbnails?type=jekyll) ## 2. Preparing Retropie

## Raspberry Pi 3

Just plug and boot Retropie, nothing particular to configure. The Raspberry Pi 3B+/3B do not require any modification to /boot/config.txt

## Raspberry Pi 4

The Raspberry PI 4 is not able to detect the screen properly, so you’ll have to help the operating system a bit. You need to modify /boot/config.txt file and add the following parameters, otherwise, you may only run as 1024×600 model:

```

```

```
framebuffer_width=1360
# Please note that this number is 1360 but not 1366 

framebuffer_height=768 
hdmi_force_hotplug=1 
hdmi_group=2 
hdmi_mode=87 
hdmi_cvt 1360 768 60 3 0 0 0    

#Please note that this number is 1360 but not 1366 
config_hdmi_boost=4 
dtparam=i2c_arm=on 
dtparam=audio=on 

[pi4] 
dtoverlay=vc4-fkms-v3d 
max_framebuffers=2 

[all] 
dtoverlay=vc4-fkms-v3d 
start_x=1 
gpu_mem=128
```

## How to install RecallBox on Picade

[RecallBox](https://www.recalbox.com/) use Arch Linux and the [Picade](https://shop.pimoroni.com/products/picade?variant=29210087489619) driver ONLY support [Raspbian](https://www.raspberrypi.org/downloads/raspbian/), so it is not possible to run [RecallBox](https://www.recalbox.com/) on the [PiCade](https://shop.pimoroni.com/products/picade?variant=29210087489619)

## How to install Retropie software on Picade

Download [Retropie](https://retropie.org.uk/) 4.5.1 and burn it using [Balena Etcher](https://www.balena.io/etcher/) to a 16GB SDCard, insert and Boot the Raspberry PI

Connect a USB keyboard and press F4, to see the linux shell

Go into the config, sudo raspi-config and set at least the following

- Under localization options, the proper keyboard layout (german swiss for me)
- Under Interfacing option, activate SSH (Optional useful to connect to Pi to launch command without physical access with a keyboard )
- Under Advance option, set the Audio to “3.5 headphone jack”
- Under Network set the WIFI SSID and password (Optional you can also use the Ethernet port)

Quit Raspi-config

Install the driver

```
curl https://get.pimoroni.com/picadehat | bash
```

And latest firmware

```
curl https://get.pimoroni.com/picadefw | bash
```

>  ATTENTION
> 
> <cite>do not update raspbian with apt update/upgrade this will break [RETROPIE](https://retropie.org.uk/)</cite>

Reboot one more time with

```
sudo reboot
```

And everything should work!

 Still no sound? [Contact me](https://www.waltercedric.com/contact/) i have a ready 16GB .img file that just work.!

## Running Games in Retropie

DO not use an expensive and big SDCard to store your games, 128Gb or 256GB card are expensive and wont support extensive read and write. It is a lot better, cheaper and faster to use a small SSD of that size connected to the USB port.

Connect an Empty USB disk, not formatted, and wait till [Retropie](https://retropie.org.uk/) write the folder structure on it, stop [Retropie](https://retropie.org.uk/). Now connect the disk to Linux, Windows, MacOS and copy games on that disk in the proper folder. Next time you boot [Retropie](https://retropie.org.uk/) with that disk attached, [Retropie](https://retropie.org.uk/) will list all games.

## Troubleshooting

### I hear no Sound in Retropie

I lost many HOURS, going crazy, and after many attempts (erase sdcard, and redo 5 times) I have collected a fair amount of methodology to narrow down the problem:

#### Hardware

- Check physical wiring connections: nothing must be loose
- Check proper red/black (+/-) connections in case they were backwards
- Power the PI and connect a Phone to the jack to check proper output of music -> this validate the whole hardware connection

#### Software 

- While in [Retropie](https://retropie.org.uk/), press F4, then type “sudo raspi-config”, under “Advanced options”, then “Audio”, set the sound to ” 3.5 headphone jack”
- In emulation station, under sound settings audio device MUST be PCM (default), no need to restart
- In [Retropie](https://retropie.org.uk/), under audio configuration, must be set to “3.5 headphone jack”, you need to restart system.
- Emulation Station volume may be low, use the “volume up” button multiple time (Black button on the left side, back button)

Still no sound? [Contact me](https://www.waltercedric.com/contact/) i have a ready 16GB .img file that just work.!

Mount everything back

![](/assets/images/2020/02/picade-8inch-upgrade-to-10inch-3.jpg)![](/assets/images/2020/02/picade-8inch-upgrade-to-10inch-4.jpg)## References

Here are the keys associated with the buttons (if you haven’t modified a firmware to accommodate custom keycodes):

- button 1 – keycode 29 – L CTRL
- button 2 – keycode 56 – L ALT
- button 3 – keycode 57 – SPACE
- button 4 – keycode 42 – L SHIFT
- button 5 – keycode 44 – Z
- button 6 – keycode 45 – X
- L – keycode 105 – Left
- R – keycode 106 – Right
- D – keycode 108 – Down
- U – keycode 103 – Up
- 1UP – keycode 31 – S
- 1/4 – keycode 46 – C
- ESC – keycode 1 – ESC
- ENT – keycode 28 – ENTER