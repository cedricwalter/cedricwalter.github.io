---

title: 'Seagate Momentus XT solid state hybrid drive 500GB review'
date: '2010-08-28T12:30:30+02:00'
author: 'Cédric Walter'



header:
  teaser: /assets/images/2010/08/seagate.momentus.xt_.500gb.jpg
tags:
    - model
---

![seagate.momentus.xt.500gb](/assets/images/2010/08/seagate.momentus.xt_.500gb.jpg "seagate.momentus.xt.500gb")

The Seagate® Momentus® XT drive enables laptop PC users to enjoy solid state-like performance without sacrificing storage capacity and affordability. The Momentus XT solid state hybrid drive utilizes Adaptive Memory™ technology to dynamically optimize performance by aligning to user needs. This perfect balance of SSD and HDD delivers low heat, noise and vibration, and is available in capacities up to 500GB.

Here is the drive I am testing, information you can easily found with drivedetect.exe ([http://support.seagate.com/kbimg/utils/drivedetect.exe](http://support.seagate.com/kbimg/utils/drivedetect.exe "http://support.seagate.com/kbimg/utils/drivedetect.exe"))

Model: ST95005620AS, Serial: 5YX03VW9, Firmware: SD23

this is by the way the latest firmware as for today 28.10.2010

Due to the nature of the SSD that is monitoring your usage, you wont get the maximum of performances at first run. Here is 3 run using CrystalDiskMark 3.0 x64 (C) 2007-2010 hiyohiyo (Crystal Dew World : <http://crystalmark.info/>)

[![seagate.momentus.xt.500gb.crystaldiskmark01](/assets/images/2010/08/seagate.momentus.xt_.500gb.crystaldiskmark01_thumb.png "seagate.momentus.xt.500gb.crystaldiskmark01")](/assets/images/2010/08/seagate.momentus.xt_.500gb.crystaldiskmark01.png) [![seagate.momentus.xt.500gb.crystaldiskmark02](/assets/images/2010/08/seagate.momentus.xt_.500gb.crystaldiskmark02_thumb.png "seagate.momentus.xt.500gb.crystaldiskmark02")](/assets/images/2010/08/seagate.momentus.xt_.500gb.crystaldiskmark02.png)[![seagate.momentus.xt.500gb.crystaldiskmark03](/assets/images/2010/08/seagate.momentus.xt_.500gb.crystaldiskmark03_thumb.png "seagate.momentus.xt.500gb.crystaldiskmark03")](/assets/images/2010/08/seagate.momentus.xt_.500gb.crystaldiskmark03.png)

In order to try to try to reveal the real performance of the disk without the SSD, I di made a run with bigger chunk of data 4GB, the size of the internal cache, good but not stellar.

[![seagate.momentus.xt.500gb.crystaldiskmark04](/assets/images/2010/08/seagate.momentus.xt_.500gb.crystaldiskmark04_thumb.png "seagate.momentus.xt.500gb.crystaldiskmark04")](/assets/images/2010/08/seagate.momentus.xt_.500gb.crystaldiskmark04.png)

As a reference here is my old drive, a Western Digital blue WD3200BJKT from August 2008. Again not a lot of differences[.![western.digital.WD3200BJKT.crystaldiskmark](/assets/images/2010/08/western.digital.WD3200BJKT.crystaldiskmark_thumb.png "western.digital.WD3200BJKT.crystaldiskmark")](/assets/images/2010/08/western.digital.WD3200BJKT.crystaldiskmark.png) ![western.digital.WD3200BJKT](/assets/images/2010/08/western.digital.WD3200BJKT.png "western.digital.WD3200BJKT")

And the Intel SSD flagship SSDSA2M160G2GC (160GB) . This Intel X25-M SSD 160GB was paid 400€, so 3.5 times more expensive (400€/114€) for 2.3 (240.1/104) more performances:

[![intel.ssd.160gb.sa2m160G2GC](/assets/images/2010/08/intel.ssd_.160gb.sa2m160G2GC_thumb.png "intel.ssd.160gb.sa2m160G2GC")](/assets/images/2010/08/intel.ssd_.160gb.sa2m160G2GC.png)![intel.x25m.G2.ssd.160gb](/assets/images/2010/08/intel.x25m.G2.ssd_.160gb.png "intel.x25m.G2.ssd.160gb")

## Conclusions

|  | Seagate Momentus XT | Intel X25-M SSD 160GB |
|---|---|---|
| Sequential Read    Sequential Write    Random Read 512KB    Random Write 512KB    Random Read 4KB (QD=1)    Random Write 4KB (QD=1)    Random Read 4KB (QD=32)    Random Write 4KB (QD=32)  Test : 1000 MB | 104.513 MB/s    79.800 MB/s    37.805 MB/s    48.630 MB/s    0.466 MB/s \[ 113.7 IOPS\]    0.928 MB/s \[ 226.5 IOPS\]    1.052 MB/s \[ 256.8 IOPS\]    0.833 MB/s \[ 203.5 IOPS\]  \[C: 39.5% (48.5/123.0 GB)\] (x5)    Date : 2010/08/28 14:17:07 | 240.086 MB/s    107.052 MB/s    163.351 MB/s    76.210 MB/s    22.328 MB/s \[ 5451.2 IOPS\]    45.021 MB/s \[ 10991.4 IOPS\]    23.918 MB/s \[ 5839.3 IOPS\]    50.876 MB/s \[ 12420.9 IOPS\]  \[C: 69.7% (103.9/149.0 GB)\] (x5)    Date : 2010/08/28 14:03:54 |
| OS : Windows 7 | Ultimate Edition \[6.1 Build 7600\] (x64) | \[6.1 Build 7600\] (x64) |

\* MB/s = 1,000,000 byte/s \[SATA/300 = 300,000,000 byte/s\]

All in all still a very good 7200rpm at a good prize (114€) for a cost effective solution (speed and storage). But don’t expect SSD like performances! Until SSD drives comes down in price, it’s an excellent alternative for someone who needs the storage space or just a new drive 🙂   
I am seeing faster boot, faster common app loading, and an overall boost in performance, but is it not because I was upgrading from an old slower drive?

Note: I did clone my old Western Digital blue WD3200BJKT to the new Seagate XT using Acronis True Image 2010 Home.