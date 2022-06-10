---
id: 2479
title: 'NAS Raid ready for the masses?'
date: '2006-04-24T22:36:28+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=2479'
permalink: /gadget/nas-raid-ready-for-the-masses/
image: /wp-content/uploads/2006/04/NAS-Infrant-ReadyNAS-NV.jpg
tags:
    - 'PC and Hardware'
    - Storage
---

 I’ve start looking at RAID 5 NAS array (a way to ensure redundancy of data and allow a set of files to be accessible across a network of machine) system 2 months ago, reading a lot of articles at the best hardware reviewers:

- TomsHardware which [has a dedicated NAS section](http://www.tomsnetworking.com/nas/index.html), ([German site review](http://www.tomshardware.de/network/20051230/index.html))
- [Anandtech](http://www.anandtech.com/) which has made review of the major NAS on the market: Buffalo, Infrant (X6 and NV)

A lot of new products have appeared in the last months, sign of a consumer demand. I have a lot of possibilities, each with their strengths and weakness:

| ![](/assets/images/2006/04/NAS-Infrant-ReadyNAS-NV.jpg) | ![](/assets/images/2006/04/intel-ss4000e.jpg) | ![](/assets/images/2006/04/thecus-4100.jpg) |  |
|---|---|---|---|
| Infrant Ready NAS NV | Intel SS4000E | Thecus 4100 |  |

1. Build my own small system, ($300 without disks), an ASUS Nforce mainboard (Gigabit, PCI-E, Video), an Athlon X64 3200MHz, but the CPU alone consume 90Watts (less in economic mode) and it is difficult to find a power supply under 200Watts. I already have a box (A mini ThermalTake tower for sure too big in the living room)
2. Buy a [Infrant](http://www.infrant.com/) [ReadyNAS NV](http://www.infrant.com/) ($900 without disks), because it has a great community ([Forums](http://www.infrant.com/forum)), is small, look nice, consume only 50Watts. But I am concerned by performances problems (not consistent, good in read). Attention it is by far the faster SOHO NAS on the market as it outperform Buffalo Terrastation, Synologic base NAS by figures. \[[AnandTech](http://www.anandtech.com/printarticle.aspx?i=2723)\]
3. Buy a [Intel SS4000E](http://www.intel.com/design/servers/storage/ss4000-E/index.htm) ($850 without disks), mainly because its small, run dedicated XOR engine at 400MHz vs only 200MHz for Infrant NV, but it also consume a lot more: 200Watts, and it hasn’t been reviewed till now. Intel technical sheet also state that the CPU can reach 600MHz.
4. Buy a dedicated RAID 5 hardware card, there is a lot available, but their prices are ridiculous for a personal use, more than 400 euro and for a little more it is today possible to build a top system based on a NFORCE4, Athlon XP64, Memory. #Linux driver support is not bad (Promise, Escalade) but their drivers are not open source. This option fell down, as I do not have a PCI-Express port on my A7N8X NFORCE2, and may want to get rid of that big tower soon.

I also want to have a LINUX powered NAS, because I feel more confident with #Linux file system, where filename case is relevant, kernel can get stripped down to what it really need, and do not require a costly license (Windows XP or Embeded 2003 are out). I found a lot of open source and free RAID operating system: [OpenFiler](http://www.openfiler.com/), [FreeNAS](http://www.freenas.org/), [NasLite](http://freshmeat.net/projects/naslite) for naming a few.

I came also across some very good resources, one for example listing the [SATA chipsets which are recognized under #Linux](/www.linuxmafia.com/faq/Hardware/sata.html) which is a must read before buying any mainboard or controller. And then get shocked by this performance RAID roundup: [Hardware Vs Software RAID](http://spamaps.org/raidtests.php), where the #Linux kernel is a clearly winner.

Basically, the number of choice are now limited:

- Wait for the Intel SS4000E review, or hope for a faster ReadyNas from [Infrant](http://www.infrant.com/).
- Keep my biggest tower (huge Thermaltake Armor) and run on a new mainboard (Time to get rid of my 2001 mainboard NFORCE2? ) a software RAID array.

I expect to build a #Linux NAS Raid 5 array made of 4 Maxtor 7L300S0 MaxLine III, 7200rpm, 16MB, 300GB, SATA, 24/7, 1M MTBF(5 years garanty) as I already have 2 of them and found them reliable, for a total of 3/4 \* 1200GB = 900GB of raw data, and hook to it 2 external USB disks (OneTouch 250GB and OneTouch2 250GB).

Links and resources

- [NFORCE4 chipset Serial ATA and RAID performance compared,](http://techreport.com/reviews/2005q4/chipset-raid/index.x?pg=1)
- [The Software-RAID HOWTO](http://www.tldp.org/HOWTO/html_single/Software-RAID-HOWTO/#ss2.1)
- [mdadm](http://freshmeat.net/projects/mdadm/) is a tool for creating, maintaining, and monitoring #Linux "md" device arrays, also known as Software RAID.
- Remark: even if the NVRAID function is running into the [NFORCE chipset, it is a FAKE raid, purely software, and not as efficient as #Linux 2.6 raid](http://spamaps.org/raidtests.php)
- [Promise Hardware Controller](http://www.wwpi.com/index.php?option=com_content&task=view&id=532&Itemid=39)
- RAID 5 and beyond: [RAID 6 controller roundup](http://www.tomshardware.com/2006/01/02/safer_6_for_raid_controllers/page12.html)