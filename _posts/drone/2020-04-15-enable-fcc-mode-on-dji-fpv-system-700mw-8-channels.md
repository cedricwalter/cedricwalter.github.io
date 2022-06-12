---
id: 13216
title: 'Enable FCC Mode on DJI FPV System (700mw 8 Channels)'
date: '2020-04-15T10:52:40+02:00'
author: 'Cédric Walter'
guid: 'https://waltercedric.com/?p=13216'
ngg_post_thumbnail:
- '0'
header:
  teaser: /assets/images/2020/03/DJI-Digital-HD-FPV-Goggles.png
tags:
- dji
- fpv
- quadcopter

---

In CE mode, the maximum output is limited to 25 mW, and there are only 4 channels available, while in FCC mode those
numbers are increased to 700 mW and 8 channels.

# NOTE

that you should follow your local regulations regarding which mode to use.

## How to switch to FCC mode from CE mode

- Take the micro SD Card out of the Air Unit
- Create a text file on the root directory, name it `naco.txt`
- Write `1` in the file, which means FCC mode for USA or any other number according to this list:
    - 1 – FCC mode for US, 8 Channels
    - 2 – FCC mode for Canada 4 Channels
    - 3 – HK CE 4 Channels
    - 4 – CN SRRC 4 Channels
    - 5 – JP Japan 3 Channels
    - 6 – KR Korea 4 Channels
    - 7 – BR Brazil 4 Channels
    - 8 – FR CCA 4 Channels
- Insert SD card in the Air Unit
- Power up goggles, and then Air Unit

in the Player menu you should see now 8 channels.

# Attention
updating the firmware on your DJI FPV goggles and Air Unit will always reset the power setting back to the default
settings according to your region!