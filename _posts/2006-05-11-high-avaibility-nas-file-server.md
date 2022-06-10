---
id: 2524
title: 'High avaibility NAS File Server'
date: '2006-05-11T18:27:58+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=2524'
permalink: /gadget/high-avaibility-nas-file-server/
tags:
    - Bought
    - box
    - building
    - controller
    - expensive
    - hardware
    - HowTo
    - least
    - linux
    - look
    - months
---

 I will be building in the next few days my own **Network Array Storage (NAS) monster:**

- RAID 6 , instead of RAID5, so 2 disks can fail in the array. A 7 Hot spare is planned
- Hardware RAID because the cheap motherboard (NVIDIA) only support in best case software RAID5
- GIGABIT network…
- Linux powered of course: FreeBSD for security or OpenFiler (RedHat) for it’s ease of use…
- Crypto loop (Linux kernel 2.6 dmcrypt), private keys on USB stick, only 20GB will NOT be encrypted
- FileSystem: XFS or ReiserFS because I will be storing big files

The hardware will look as follow:

- 6 Maxtor 7L300R0 MaXLine III, 7200rpm, 16MB, 300GB, IDE, 24/7 server : 60 Months garanty! 104&#128;/each = **624&#128;**
- AMD Athlon 64 3000+ BOX, Socket 939, Venice, the least expensive Athlon 64 99&#128;
- Asus A8N-VM CSM, mATX, Nvidia 6150/430 Video, socket 939, SATA RAID, because I need PCI-E for the hardware RAID 70&#128;
- Promise SuperTrak EX8350, SATA2, 8 SATA port, Raid6 Controller, because Promise support #Linux 297&#128;
- Thermaltake Armor (bought previously)
- Zalman CNPS9500 LED, Socket 754/939/940/478/LGA775 53&#128;

I will explain later why I did not bought a SOHO NAS, but briefly because:

- For the price of my complete system, I have an empty SOHO NAS box or with 250GB (Raid0)
- I have 8 + 6 = 14 SATA ports!
- SOHO NAS are only RAID5 in best case
- Bad performances of SOHO NAS

More pictures, howto, and benchmarks soon…