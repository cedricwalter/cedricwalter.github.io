---
id: 2533
title: 'My NAS array, testing performances and reliability'
date: '2006-05-21T11:49:27+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=2533'
permalink: /gadget/my-nas-array-testing-performances-and-reliability/
tags:
    - 'PC and Hardware'
    - Storage
---

I am still waiting on the 4 last hard disks, they should arrive next week. While mounting everything together in the case, I was thinking on the range of tests I may do with this NAS before putting it online in production.

What kind of operating system will I use? 

| <small>OS</small> | <small>Software   RAID 5/6</small> | <small>Hardware   RAID 5/6</small> | <small>Remarks</small> |
|---|---|---|---|
| <small>Windows XP</small> | <small>Need Windows Server BUT[ there is a workaround](http://www.winfuture-forum.de/index.php?showtopic=32849)</small> | <small>through the Promise EX350 driver</small> | <small>I do not want a fully fledged OS for a file server, but want to look at performances</small> |
| <small>Linux OpenFiler</small> | <small>standard using "mdam"</small> | <small>through the Promise EX350 #Linux driver</small> | elegant, free and OS footprint can be reduce at it’s minimum |
| <small>OpenSolaris</small> | <small>using ZFS Raid-Z</small> | <small>no driver support</small> | <small>ZFS is a great file system, and RAID-Z solve some problem of software RAID5 and Hardware RAID5 at the same time!</small> |
| <small>others?   feel free to submit an alternative</small> | <small>[Contact me](/contact_us/) or use   Comments</small> |  |  |

click read more…

    
And this is how my Network Array Storage looks like:

| NAS server |
|---|
| <small>Processor(s)</small> | <small>AMD Athlon 64 3000+ BOX, Socket 939, Venice</small> |
| <small>Platform</small> | <small>Asus A8N-VM CSM, mATX, Nvidia 6150/430 Video, socket 939, SATA RAID   </small><small>BIOS xxxxx</small> |
| <small>RAM</small> | <small>Corsair CM72DD512AR-400 (DDR2-400 ECC, reg.)    2x 512 MB, CL3-3-3-10 Timings</small> |
| <small>System Hard Drive</small> | <small>Raid 6:   2 Maxtor 7L300R0 MaXLine III, 7200rpm, 16MB, 300GB, IDE, 24/7 server.   4 Western Digital Caviar RE, 7200rpm, 8MB, 320GB, SATA, 24/7</small><small style="FONT-WEIGHT: bold">USB attached:</small>   <small>1 Maxtor onetouch USB2/Firewire 300GB   1 Maxtor onetouch2 </small><small>USB2/Firewire </small><small>300GB</small> |
| <small>Mass Storage Controller(s)</small> | <small>Promise SuperTrak EX8350, SATA2, 8 SATA port, Raid6 Controller</small> |
| <small>Networking</small> | <small>   </small> |
| <small>Graphics Card</small> | <small>On-Board Graphics    NVIDIA GeForce 6150</small> |

  
What kind of performances test I will do? 

| Sofware |
|---|
| <small>Performance-test</small> | <small>c’t h2benchw 3.6   [IoZone](http://www.iozone.org/)</small> |
| <small>I/O Performance</small> | <small>IOMeter   Fileserver-Benchmark    Webserver-Benchmark    Database-Benchmark    Workstation-Benchmark</small> |

Future client using the NAS fileserver

| Clients |
|---|
| <small>Ladtop</small>   <small>Windows XP professional   HP nx7000</small> | <small>100Mb NIC   Pentium-M 1.6GHz    1500MB Ram    60GB Harddisk   15,4""WXGA </small> |
| <small>Home desktop,</small>   <small>Linux SuSe 10.1</small> | <small>1000 Mb NIC   AMD Athlon XP 3400+   1500 Mb RAM   Asus A78Nx Nforce2 mainboard</small> |

Of course I will stress the box 1 week before putting any vital/useless data on it!