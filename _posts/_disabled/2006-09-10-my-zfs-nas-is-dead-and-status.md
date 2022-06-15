---

title: 'My ZFS NAS is dead and status'
date: '2006-09-10T13:09:03+02:00'
author: 'Cédric Walter'



header:
  teaser: /assets/images/2006/09/front_view_nas-home.jpg
tags:
    - 'PC and Hardware'
    - Storage
---

| ![](/assets/images/2006/09/front_view_nas-home.jpg) | I’ve made many errors when building my NAS server, and    this force me to forget using SUN Zeta File System, at least    for this year…In fact I have decide to build a NAS before     even knowing the existence of ZFS, and bought following    hardware components: - 1 Promise Supertrak EX8350 with 8 SATA2 3GB port (RAID6) - The cheapest integrated mainboard available: NFORCE4 IGP - AMD64 3000+ |
|---|---|

  I took me half a day to update both mainboard (in order to use the Promise EX8350 PCI e4X in the PCI e 16X port) and controller bios (support of RAID6)! The crazy process of updating BIOS and firmware with a floppy disk has still not disappear. The second issue was also to create a floppy disk on a system without any OS.

 The solution come of course from [Knoppix](http://www.knoppix.org/). I was able to find old DOS floppy disk images at [www.bootdisk.com](http://www.bootdisk.com/): all DOS and Windows version are available there. I quickly boot my disk less machine [Knoppix](http://www.knoppix.org/) and format a new floppy:

```
# fdformat /dev/fd0



and extract the boot image by typing:


```

```
# dd if=bootdisk.img of=/dev/fd0 bs=1440k
```

 This has permit me to flash the mainboard with the latest ASS bios available (1001) and the Promise controller.

 Ive contact Promise support 2 times (Europe AND USA), the response is below:

| <label style="font-weight: bold; font-size: 9pt; color: black; font-family: Arial,Arial,Courier New,Times New Roman;">Case Id:</label> | <label style="font-weight: normal; font-size: 9pt; color: black; font-family: Arial,Arial,Courier New;">24848</label> |
|--:|---|
| <label style="font-weight: bold; font-size: 9pt; color: black; font-family: Arial,Arial,Courier New,Times New Roman;">Brief Description:</label> | <label style="font-weight: normal; font-size: 9pt; color: black; font-family: Arial,Arial,Courier New;">Hello,I Wan…</label> |
| <label style="font-weight: bold; font-size: 9pt; color: black; font-family: Arial,Arial,Courier New,Times New Roman;">Status:</label> | <label style="font-weight: normal; font-size: 9pt; color: black; font-family: Arial,Arial,Courier New;">Closed</label> |
| <label style="font-weight: bold; font-size: 9pt; color: black; font-family: Arial,Arial,Courier New,Times New Roman;">Case Problem:</label> | <label style="font-weight: normal; font-size: 9pt; color: black; font-family: Arial,Arial,Courier New;">Hello, I Want to set a OpenSolaris / Solaris NAS, but I do not find any drivers in the download section. Question1: any plan to support solaris (listed in download search but deliver no results) Question2: if yes, any roadmap? or something in queue of development? thanks Cédric</label> |
| <label style="font-weight: bold; font-size: 9pt; color: black; font-family: Arial,Arial,Courier New,Times New Roman;">Case Solution:</label> | <label style="font-weight: normal; font-size: 9pt; color: black; font-family: Arial,Arial,Courier New;">there are no plans to support solaris.</label> |

 So if You ever want to build a NAS powered by a Solaris flavor, first consult the [Hardware Compatibility List (HCL)](http://www.sun.com/bigadmin/hcl/), and avoid [Promise Technology](http://www.promise.com/). I’ve found that all others main manufacturer like [Adaptec](http://www.adaptec.com/) and [ARECA](http://www.areca.com.tw/) provide Solaris drivers ([HERE](ftp://60.248.88.208/RaidCards/AP_Drivers/Solaris/)) even if it they are quite old (middle of 2005).

 Ive also tried some Solaris flavor which I can definitely recommend You, if You decide to play with ZFS:

- [Belenix](http://www.genunix.org/distributions/belenix_site/belenix_home.html): a KDE powered OpenSolaris, available aslive CD. \[[DistroWatch](http://distrowatch.com/belenix)\]
- [Nexenta](http://www.gnusolaris.org/) a Gnome powered OpenSolaris, which can be use in [VMWARE player](http://www.vmware.com/products/player/) using this [VMWARE image](http://www.vmware.com/vmtn/appliances/directory/499). \[[DistroWatch](http://distrowatch.com/nexenta)\]

 Both version both seem not to use OpenSolaris Nevada build 44, so I was not able to play with RAIDZ2 (simulate a RAID6 array)

<div style="text-align: left; margin-left: 80px;">A replicated RAID-Z configuration can now have either single- or  
  double-parity, which means that one or two device failures can be sustained  
 respectively, without any data loss. You can specify the raidz2 keyword for a double-parity RAID-Z  
 configuration. Or, you can specify the raidz or raidz1 keyword for a single-parity RAID-Z  
 configuration.  I’ve also tried Solaris Express 10 (Live CD) which is available also for free (non commercial use), but I was really not convince by the desktop, and hardware was not better recognized.  
 What can also stop You from using ZFS is the [encryption subproject](http://www.opensolaris.org/os/project/zfs-crypto/) which has not deliver yet, and the fact that the only supported pool share is NFS (Windows support it with "[Windows Services for UNIX version](http://go.microsoft.com/?linkid=2356484)" 300Mb), Samba export still being in development.

 ![](/assets/images/2006/09/side_view_nas-home.jpg)

 This give me 2 options: use either aWindows orLinux operating system.Windows has a major advantage by having all drivers support ([Cool and Quiet](http://www.amd.com/us-en/Processors/ProductInformation/0,,30_118_9485_9487%5E10272,00.html), Nforce4 chipset, Promise driver and management console), but all insecurities and the fully fledged desktop is NOT needed on a true file server. Linux on the other side has also all drivers available (except Promise WebPam management console), and is a lot more modulable: I can remove all functionalities not needed: no FTP, no desktop, no HTTP daemon, … Samba, ssh2 and ReiserFS is all I need!

 I may choose for the job:

- [OpenSuse](http://en.opensuse.org/) 10.1 since I am using SuSE since 3 years or
- [Free BSD](http://www.freebsd.org/), a leader in stability and securities in the Linux world.

 Right now, I’ve put 5 disks of 320 GB in a RAID5 logical array, the initialization of 1.2TBtook 18 hours!   
 ![Promise Ex8350 initializing the NAS](/assets/images/2006/09/promise_initializing_raid_array.jpg)

 This box has 14 Sata Port and I’ve add old disk full of data 300GB and 160GB.and 8 USB port (+ 2 Maxtor 300GB USB disk).

| ![wattage controler checking power comsumption of NAS](/assets/images/2006/09/wattage_controler.jpg) | The power consumption is quite high not only because of all hard disks (15 Watts \* 7 = 105), but also because of the AMD64 (95 Watts at 1800MHz and 63 Watts at 800MHz when Cool’nQuiet is active). The promise Intel IIOP cpu is also sucking energy. Without it into he box, total power consumption was below 100 Watts, with 150 Watts!  In order to better tune the box for power consumption (down clocking, reduce main voltage of CPU core), I’ve bought a cheap Wattage controller (7 euro), left is the NAS running during init of the array without [Cool and Quiet](http://www.amd.com/us-en/Processors/ProductInformation/0,,30_118_9485_9487%5E10272,00.html) |
|---|---|