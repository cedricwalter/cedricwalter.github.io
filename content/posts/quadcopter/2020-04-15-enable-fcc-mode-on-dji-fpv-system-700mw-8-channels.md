---
title: "DJI FPV System Hacks (1200mw 700mw 8 Channels)"
type: posts
summary: "DJI FPV System Hacks (1200mw 700mw 8 Channels) and more"
date: 2020-04-15T08:52:40+00:00
url: /enable-fcc-mode-on-dji-fpv-system-700mw-8-channels/
tags:
  - dji
  - fpv
  - quadcopter
categories:
  - Quadcopter
---
## Enable 1200 mw Mode on DJI FPV System

**NOTES**
  * You should follow your local regulations regarding which mode to use.
  * Long term hardware effects are unknown
  * You get more or less 30% more range
  * Your system <a rel="noreferrer noopener" href="/hobbies/enable-fcc-mode-on-dji-fpv-system-700mw-8-channels/" target="_blank">must be already in FCC mode</a>
  * Enable Power Limit as it add some protections against overheating.


  * Create a .txt file, name it `naco_pwr.txt`
  * Type `pwr_2` or **pwr_1**
      * pwr_1 = 1000 mW
      * pwr_2 = 1200 mW & 1000 mW
  * Save and close
  * Copy `naco_pwr.txt` to an SD card
  * Put SD card in DJI goggles
  * Power on Goggles and Air Unit

 Now in the Goggles menu, under Settings -> Device, you should be able to select 1200 mW or 1000 mW

##  Enable FCC Mode on DJI FPV System (700mw 8 Channels)

In CE mode, the maximum output is limited to 25 mW, and there are only 4 channels available, while in FCC mode those numbers are increased to 700 mW and 8 channels.

NOTE that you should follow your local regulations regarding which mode to use.

## How to switch to FCC mode from CE mode

  * Take the micro SD Card out of the Air Unit
  * Create a text file on the root directory, name it `naco.txt`
  * Write `1` in the file, which means FCC mode for USA or any other number according to this list:
      * 1 – FCC mode for US, 8 Channels
      * 2 – FCC mode for Canada 4 Channels
      * 3 – HK CE 4 Channels
      * 4 – CN SRRC 4 Channels
      * 5 – JP Japan 3 Channels
      * 6 – KR Korea 4 Channels
      * 7 – BR Brazil 4 Channels
      * 8 – FR CCA 4 Channels
  * Insert SD card in the Air Unit
  * Power up goggles, and then Air Unit

 in the Player menu you should see now 8 channels.

Attention updating the firmware on your DJI FPV goggles and Air Unit will always reset the power setting back to the default settings according to your region!
