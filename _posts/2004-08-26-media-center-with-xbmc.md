---
id: 180
title: 'Media Center with XBMC'
date: '2004-08-26T22:36:30+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=180'
permalink: /games/media-center-with-xbmc/
header:
  teaser: /assets/images/2004/08/title.jpg
---

<div style="TEXT-ALIGN: center"><font color="#40ab3d" face="Arial Black" size="3">HowTo transform your xBox   
into a Media Center <font color="#40ab3d" face="Arial Black" size="3">with XBMC![](/assets/images/2004/08/title.jpg)

*XboxMediaCenter is a free open source (GPL) multimedia player for the Xboxâ&#132;¢ from Microsoft. Currently XboxMediaCenter can be used to play/view most popular video/audio/picture formats such as MPEG-1/2/4, DivX, XviD, MP3, AAC, JPG, GIF plus many more less known formats directly from a CD/DVD in Xbox DVD-ROM drive or of the Xbox harddrive, XBMC can also play files from a PC over a local network and even stream media streams directly from the internet. XBMC has playlist and slideshow functions, a weather forecast and many audio visualizations. All these features enable the Xboxâ&#132;¢ running XboxMediaCenter to fully function as a multimedia jukebox. XBMC is easy to use, it’s convenient, flexible and offers great price/performance ratio. (This, The XboxMediaCenter Project is also known as "Xbox Media Center" or simply "XBMC"). Note! XBMC is a hobby project that is only developed by volunteers in their spare-time for free. (Remember that XboxMediaCenter does require a modded Xbox to run on or it will not function)*. from [www.xboxmediacenter.com](http://www.xboxmediacenter.com)



<font color="#40ab3d" face="Arial Black" size="4">![xboxIcon](/assets/images/2004/08/x.gif) <font color="#40ab3d" face="Arial Black" size="3">Legal Issues

It is strictly forbidden to modify your xBox, sell or install mods chip in france. Even opening the XBOX is forbidden.   
# Remember pirating is a crime, support the developers and film companies.**

<font color="#40ab3d" face="Arial Black" size="4">![xboxIcon](/assets/images/2004/08/x.gif) <font color="#40ab3d" face="Arial Black" size="3">What does XBMC do?

[<font color="#ff0000" size="2">**http://www.xboxmediacenter.com/info\_project.htm**](http://www.xboxmediacenter.com/info_project.htm)<font color="#ff0000" size="2"> 

<font color="#40ab3d" face="Arial Black" size="4">![xboxIcon](/assets/images/2004/08/x.gif) <font color="#40ab3d" face="Arial Black" size="3">Process

# What you will have to do: (****green mandatory,** **blue optional****)**

1. # **Buy a Xbox**#  
2. # **open the Xbox (void garanty)**#  
3. # **Install a modchip**#  
4. # **flash a BIOS on modchip**#  
5. # **Install a new dasboard with FTP support**#  
6. # **backup original data found on C: with FTP to your PC**#  
7. <font color="#009900" size="3">**install and configure Xbox media center (XBMC) with FTP**#  
8. <font color="#0000ff" size="3">**Adapt scripts (XML files) for your network or shares drives**#  
9. <font color="#0000ff" size="3">**Install a streaming server on some PC or use Samba to access remote data (video, pictures and music)**#  
10. <font color="#0000ff" size="3">**Add a 3rd party 5:1 cable with digital output, RGB …**#  
11. <font color="#0000ff" size="3">**Install a bigger harddisk if you want to host more video, music on the Xbox**#  
12. <font color="#0000ff" size="3">**Install a harddrive led**#  
13. <font color="#0000ff" size="3">**Configure internet**<font color="#0000ff" size="3"> 

<font color="#0000ff" size="3">  


- <font color="#0000ff" size="3">**Install Linux** …. 



- - - - - -



<font color="#40ab3d" face="Arial Black" size="4">![xboxIcon](/assets/images/2004/08/x.gif) <font color="#40ab3d" face="Arial Black" size="3">1. Buy a Xbox, required

<font color="#40ab3d" face="Arial Black" size="3">![](/assets/images/2004/08/tn_pack.jpg)  
<font color="#333333" face="Arial" size="2">With chance, you can still find this pack from   
christmas 2004. Cost me 199euro

<font color="#40ab3d" face="Arial Black" size="3">

<font color="#40ab3d" face="Arial Black" size="3">

| ![](/assets/images/2004/08/tn_contentpack.jpg) |  |
|---|---|
| No Games, but a video DVD is in the pack. |  |
| ![](/assets/images/2004/08/tn_remote.jpg) |  |
| Remote Controller pack, a lot more user   friendly than the pad for this application.. |  |

<font color="#40ab3d" face="Arial Black" size="3">![](/assets/images/2004/08/tn_overall.jpg)  
A xBox

<font color="#40ab3d" face="Arial Black" size="3">

<font color="#40ab3d" face="Arial Black" size="3">Optionnal

| ![xbox wireless option](/assets/images/2004/08/xboxwireless.jpeg) |
|---|
| Network cable, if you want to use your PC as a storage server. M$… sell also a wireless card.   I was trying this streaming solution 10 minutes, then a strong headache forced me to stop it. |

- - - - - -



<font color="#40ab3d" face="Arial Black" size="4">![xboxIcon](/assets/images/2004/08/x.gif) <font color="#40ab3d" face="Arial Black" size="3">2. Open the Xbox (void the garanty)<font color="#40ab3d" face="Arial Black" size="4">  


| ![](/assets/images/2004/08/tn_wrench.jpg) |
|---|
| **1.70â&#130;¬** This is the cheaper version I’ve found. This is a   Torx screwdriver |

<font color="#40ab3d" face="Arial Black" size="2">time: 5 minutes

| ![](/assets/images/2004/08/tn_overall.jpg) | [![](/assets/images/2004/08/tn_locate_screws.jpg)](/im/locate_screws.jpg) |
|---|---|
| Overall view, return the xBox | Locate the screws, 4 are under the    gromets, 2 are under stickers.    Use the allen #20 |
| ![](/assets/images/2004/08/tn_remove_screws.jpg) | ![](/assets/images/2004/08/tn_removeuppercase.jpg) |
| All screws have the same length. 2 additionnal    screws are under the sticker | Remove the harddisk, only 1 screw.   Use the allen #10   Remove  |
| ![](/assets/images/2004/08/tn_removedvd.jpg) | [![](/assets/images/2004/08/tn_ready.jpg)](/im/ready.jpg) |
| Remove the DVD rom, only 2 screws   Use the allen #10 | Ready to install the mods chip. |
|  |  |
|  |  |

- - - - - -



<font color="#40ab3d" face="Arial Black" size="4">![xboxIcon](/assets/images/2004/08/x.gif)<font color="#40ab3d" face="Arial Black" size="3"> 3. Install a mods chip

# All mods-chips are more or less equal!** I mean that some special restriction, like DVD region, macrovision, disk eject, run signed code (from M$ or 3rd party game company) or unsigned code (Linux, softwares and emulators) etc… **are not controlled by the mod-chip itself** but only by the *BIOS* (Basic Input Output System, this small program is responsibe for initializing devices, starting a kernel, and low level operations)…So what?   
# Differences are:**

- Ease of installation (soldering may be required or not), 1st generation of chips (2000) use to have more than 50 cables, 2rd generation less than 15 cables and 3rd most of the time no soldering.
- Onboard memory size (up to 2Mb for the latest generation) and number of BIOS you can store (up to 6 with different memory mapping : 6 bios of 256kb or 2 bios of 512kb and 4 of 256kb ….)
- The way you can flash a new BIOS (printer LPT port or USB or through the dashboard with a CD).
- Possibility of extension: like adding a LCD panel (Xenium).

Price range is from $20 (soldering required and only one bios like the Aladin) to $60 (2Mb, USB, 6 bios, LCD) for the most expensive.

| ![](/assets/images/2004/08/xbit.jpg) | I choose the [Xbit](http://www.dms3.com/) because: - Xbit is Solderless (for all XBOX versions from 1.0 to 1.5): All You have to do is to position the chip correctly, and use 1 screw…In fact the double row of pogo pins (pins wih springs) are postionning the chip nearly alone.  - Xbit accept BIOS up to 2Mb, you can have many bios in the onboard memory (6 memory mapping) and chose the one you prefer with dip-switches (6 configurations)  - Has a USB interface while other has LPT or none (Some of them even sold the LPT bios loader separatly)  Xecuter 3.0 was my first choice but it was not available at that time |
|---|---|

All manufacturer have great **HowTo** sections, for Xbit just follow instructions here:  
<http://www.dms3.com/xmanuals.htm>   
[http://www.dms3.com/xbit\_pogopin\_install.htm](http://www.dms3.com/xbit_pogopin_install.htm)

- - - - - -



<font color="#40ab3d" face="Arial Black" size="4">![xboxIcon](/assets/images/2004/08/x.gif) <font color="#40ab3d" face="Arial Black" size="3">4. Flash a Bios on the modchip

# Which BIOS?** Nearly all mod-chip are shipped without a BIOS installed, in best case you get a cromwell BIOS (open source BIOS develop to boot linux), this is because of legal issues: a lot of BIOS are based on M$… hacked version.

[http://www.xbox-scene.com/bios\_retail.html](http://www.xbox-scene.com/bios_retail.html) Here you can find a comparaison table of all functionnalities with a glossary of technicals terms

[Executer](http://www.executer.com/) is a famous modchips builder and they provide their own BIOS free of charge, You can install it on all mods chips since they provide both binary image of 256kb and 512kb.

- - - - - -



<font color="#40ab3d" face="Arial Black" size="4">![xboxIcon](/assets/images/2004/08/x.gif) 5. Installing a new dashboard

The M$… dashboard do not have: *FTP* (File Transfert Protocol) support, game backup, file explorer, linux loader, skins support etc… and can only run signed code.   
This is why You must install a new one:

- [EvolutionX](http://www.evolutionx.info/) or
- [Avalaunch](http://www.teamavalaunch.tk/) or
- neXgen (Team XOS WIP) or
- MediaXMenu or
- [UnleashX](http://www.unleashx.com/) or
- tHc Hacked M$ Xbox Dashboard .

I have only tried EvolutionX and I am happy with it

For installing [EvolutionX](http://www.evolutionx.info/), all you have to do is to locate on internet the file: SlaYer’s EvoX Auto-Installer v2.5FINAL.iso (215Mb) and burn it on a DVD-RW or CD-RW.

Boot your XBOX with this CD inside, and follow the onscreen menu. In 2 minutes, You can have [EvolutionX](http://www.evolutionx.info/), [Linux](http://xbox-linux.sourceforge.net/), XBMP installed. You can even prepare a new and bigger harddisk with no efforts.  
Reboot

| # **You have now:** |
|---|
| \| C: \| As before, partition where the XBOX operating system is \| \| # D: \| DVD drive \| \| # E: \| Game save, original dashboard music and all third party applications: dvd reader, ftp, many players, some emulators (5Gb) \| \| # F: \| If you have a disk bigger than 4Gb you will have some space to store Linux for example \| \| # G: \| <font color="#000000" size="2">Available if you have a disk bigger than 120Gb \| \| # X: \| Internal cache (768Mb) \| \| # Y: \| Internal cache (768Mb) \| \| # Z: \| <font color="#000000" size="2">Internal cache (768Mb) \|   |
|---|

If You want that Avalaunch display your BIOS version in the first page,   
You need to open the file c:evox.ini . For the Executer 4981 BIOS add these 2 lines:  
Rom = "x2 4981.06",0xca25c9b3721da8c96c4770515dbcda07  
Rom = "x2 4981.67",0xb6eb9fb7b79795c962b7f998ee4a8694<font color="#40ab3d" face="Arial Black" size="4">  


- - - - - -



<font color="#40ab3d" face="Arial Black" size="4">![xboxIcon](/assets/images/2004/08/x.gif) <font color="#40ab3d" face="Arial Black" size="3">6. Backup original data found on c: with FTP to your PC

# Connect your Xbox to the network!** Using the remote controller or gamepad, you can go in evox "<font color="#000000" face="Courier New">system preferences", this is the place where you can set the FTP server adress, password, DNS, gateway.

- Use a fix IP, it should be something like 192.168.0.XXX with XXX from 2 to 255, use for example 192.168.0.10
- Do not set the 2 DNS (Domain Name Server which is normally your router 192.168.0.1) if you do not want to let your XBox have an access to internet.
- You can not change te FTP login name ("<font color="#000000" face="Courier New">xbox"), only the default password ("<font color="#000000" face="Courier New">xbox") this is because the login "<font color="#000000" face="Courier New">xbox" is encrypted in MD5, a page on [www.xboxmediacenter.com](http://www.xboxmediacenter.com/) (FAQ) section let you change it in file fileserver.xml

Save all changes (<font color="#000000" face="Courier New">save changes is located at the end of the menu), and **reboot your Xbox**

# Attention:** I use to have some instabilities with 2 different crossed Ethernet cable, in fact the FTP was instable and unusable (disconnect and time out problems), I am using a router-switch in the middle now and everything is working perfectly. This is probably due to a mass problem. 

Use your favorite FTP client (LeechFTP, CuteFTP, ….) to connect to the XBOX, it is good idea to backup all files found under C: (default dashboard and RSA key pair for your machine)

If you want to play with <font color="#000000" face="Courier New">EvolutionX: add or translate for example some new entries in the main menu, edit the file <font color="#000000" face="Courier New" size="2">c:evox.i<font color="#000000" face="Courier New" size="3">ni

- - - - - -



<font color="#40ab3d" face="Arial Black" size="4">![xboxIcon](/assets/images/2004/08/x.gif) <font color="#40ab3d" face="Arial Black" size="3">7. Install and configure Xbox media center (XBMC) with FTP 

<font color="#40ab3d" face="Arial Black" size="2">XBMP is now discontinued, a XBMB team decide to rewrite it and create XMBC

[<font color="#40ab3d" face="Arial Black">XBMC review at Tomshardware](http://www6.tomshardware.com/consumer/20040511/xbox-multimedia-07.html)

"*Xbox Media Center (XBMC) for Microsoft’s Xbox game console turns the Xbox into a very capable   
multimedia jukebox, enabling it to play AVI (divx/xvid), MPEG, MP3, JPG and many other audio/video/picture file   
formats from CD/DVD, HD, a LAN or the internet*."

For legal reasons, you can only download XBMC source code, but not the binary since the SDK of Microsoft do   
not allow You to distribute binary. The open-source community is currently creating an open source SDK: the XDK.

# How to find binaries:**

- Try to find it on P2P network : eMule, eDonkey or
- [www.geux.net](http://www.geux.net/) ![](/mambots/editors/images/frFlag.jpg) make a light distribution (without codecs, scripts and skins) or
- If you want to have always the latest build (risky it may not be a stable version since it reflect the current state of development) : <http://www.azard.firstream.net/> or
- Compile it yourself with XBOX SDK and Visual C++ if you own a M$ license 😉

# How to install it:**

- XBMC is ONLY a directory, copy it to e:/apps/XBMC for example and add an entry in <font color="#000000" face="Courier New" size="3">c:/evox.ini  
    | section "Root"   {   ..   Item "Multimedia Station","e:/Apps/XBMCdefault.xbe"   …   } |
    |---|
- Reboot and you’re done.
- If you have problem with XBMC, please first read the Frequently asked questions first: [http://www.xboxmediacenter.com/info\_faq.htm](http://www.xboxmediacenter.com/info_faq.htm)

<font color="#40ab3d" size="3">**Links:**

- [<font color="#40ab3d">http://www.xboxmediacenter.com/info\_screens.htm](http://www.xboxmediacenter.com/info_screens.htm)<font color="#40ab3d" size="3"> screenshots
- [www.xboxmediacenter.com](/www.xboxmediacenter.com) Official Homepage
- <http://sourceforge.net/projects/xbmc/> Official Homepage for development on sourceforge
- [http://www.allxboxskins.com](http://www.allxboxskins.com/) This is THE place where to get skins. Upwards of 50-60GB+ of transfer everyday. a 3GB+ skins inventory

- - - - - -



<font color="#40ab3d" face="Arial Black" size="4">![xboxIcon](/assets/images/2004/08/x.gif) <font color="#0000ff" face="Arial Black" size="3">8. Adapt scripts (XML files) for your network or shares drives

XMBC configuration is done through a XML file (a plain text file heavily structured with some special tags),   
this file is in e:/apps/XBMCXboxMediaCenter.xml

The purpose of this file is to tell the player where to find digital content, because your multimedia files   
can be stored on the XBOX or on the network:

| **Xbox** | **Network** |
|:-:|:-:|
| \| **HardDisk** \| C: or E: or F: \| \| **Digital Storage** \| D: (DVD)   D: (ISO mode)   D: (UDF mode) \|   | \| **streaming protocols** \| \|---\|---\| \| **XNS** \| The first streaming protocol. \| \| **XBMS** \| *"A new network protocol for media streaming named XB Media Streaming Protocol (XBMSP) developed by PuhPuh in discussion with RUNTiME &amp; Pope-X.   XBMSP is a more simplistic &amp; faster protocol than the XNS protocol currently used by XboxMediaPlayer. Though XBMSP has not replaced XNS it can be used by future XStream Servers to share media files to XboxMediaPlayer. PuhPuh has also developed XSteam test server called "ccXStream" that uses the XBMSP protocol." from* [*www.xbox-scene.com*](http://www.xbox-scene.com/)  \| \| **SAMBA** \| An open source implementation of the SMB file sharing protocol that provides file and print services. Samba allows a non-Windows server to communicate with the same networking protocol as the Windows products.    Samba was originally developed for UNIX but can now run on Linux, FreeBSD and other UNIX variants. It is freely available under the GNU General Public License. <span style="FONT-WEIGHT: bold; COLOR: rgb(255,0,0)">XBMC has an integrated SAMBA client and support natively Samba drive    \|   |
|---|

This file contains a documentation and is quite easy to modify.

# Attention** when you copy digital content to the Xbox harddrive with FTP, the filesystem (FAT-X) has a lot   
of limitations! no name up to 43 characters, no special character < > = ? : ; " \* + , / | and avoid accents too…

- - - - - -



<font color="#40ab3d" face="Arial Black" size="4">![xboxIcon](/assets/images/2004/08/x.gif)<font color="#40ab3d" face="Arial Black" size="3">9. Install a streaming server on some PC or use Samba to access remote data 

A list of all available tools can be found on <http://www.xbox-scene.com/tools/tools.php?page=streaming>

Personnaly I have only use Relax pre 0.76, I ran into problem with NFS protocol and was not convince   
by its efficiency (speed of access and streaming). I decide to try Samba (smb://) and it works perfectly since!

1. open e:/appsXBMCXboxMediaCenter.xml
2. At the end of the file, locate the bookmark section.   
    
3. **Example of bookmark**  
    smb://xbox:k7sEP1zY@192.168.0.4/EOLE/  
    **where**
    - xbox is the windows/linux/macintosh user name (this user must exist)
    
    
    - k7sEP1zY is the password, do not use ‘;’ as this has a signification in the smb:// url (use to specify a network domain)
    
    
    - 192.168.0.4 is the fix IP of the server (nearly all router can assign a fix IP adress to a Ethernet card) Here this adress is one of my PC
    
    
    - EOLE: is the name of one of my share drive, Share drive name are not mandatory!

- - - - - -



<font color="#40ab3d" face="Arial Black" size="4">![xboxIcon](/assets/images/2004/08/x.gif) <font color="#40ab3d" face="Arial Black" size="3">10. Add a 3rd party 5:1 cable with digital output, RGB<font color="#008040" face="Arial Black" size="2">**…**

| **XBOX HIFI STATION RGB / SVHS / Optical / Coax / Component** |
|:-:|
| ![](/assets/images/2004/08/xbox_hifi_station1.jpg)   ![](/assets/images/2004/08/xbox_hifi_station2.jpg)   ![](/assets/images/2004/08/xbox_hifi_station.jpg) |
| - RGB SCART output - Gold contacts - Optical output / coax output for 5.1 Dolby Digital - S-Video/SVHS output - COMPOSITE output - Audio-output - COMPONENT Y/Pr/Pb for videoprojector       **less than 20euro** [HERE](http://cgi2.ebay.de/aw-cgi/eBayISAPI.dll?ViewFeedback&userid=spieledepot&item=8102606759&frompage=0&fromasq=1) **!!!**   <font color="#ff0000" size="3">**I bought this one** |
| **Xbox RGB-Pro-Advanced cable** ![](/assets/images/2004/08/xbox-rgb_svhs_2.jpg) |
| - RGB-SCART-cable - Gold contacts - Optical audio output DolbyDigital 5.1/AC2 Receiver - Audio/Video Chinch ouput - SVHS output       **less than 18euro** [HERE](http://cgi2.ebay.de/aw-cgi/eBayISAPI.dll?ViewFeedback&userid=psx01&item=8103062321&frompage=0&fromasq=1) **!!!**  |

- - - - - -



<font color="#40ab3d" face="Arial Black" size="4">![xboxIcon](/assets/images/2004/08/x.gif) <font color="#0000ff" face="Arial Black" size="3">11. Install a bigger harddrive

1. Boot Xbox with the original hard disk,
2. With FTP save everything from C: and E:: on your local PC, If you want to reuse this old disk (8Gb of free space), do not forget with <font color="#000000" face="Courier New">SlaYer’s EvoX Auto-Installer v2.5FINAL.iso to unlock the harddisk before removing it from the XBOX otherwise it is unusable.
3. Install the new hard disk in the case,
4. Using the CD which contains with the CD containing <font color="#000000" face="Courier New">SlaYer’s EvoX Auto-Installer v2.5FINAL.iso ,boot the Xbox and choose "Initialize new disk",
5. Restart the Xbox without any CD after completion,
6. Using FTP, copy everything back to C: and E:

- - - - - -



<font color="#40ab3d" face="Arial Black" size="4">![xboxIcon](/assets/images/2004/08/x.gif) <font color="#ff0000" face="Arial Black" size="3">12. Install a harddrive LED

[see Add a led to your Xbox to see hard disk activity ](/mambots/editors/pc/xbox/harddisk_led/harddisk.led.xbox.htm)

- - - - - -



<font color="#40ab3d" face="Arial Black" size="4">![xboxIcon](/assets/images/2004/08/x.gif) <font color="#ff0000" face="Arial Black" size="3">13. Configure Internet

All You have to do is to specify the gateway and DNS in the dashboard. If XBMC configuration file (e:/appsXBMCXboxMediaCenter.xml) do not contains any gateway or DNS it will use the dashboard settings.

1. Set the Internet settings in the dashboard. OR
2. Set the Internet settings in XBMC

# 1: Set the Internet settings in the dashboard.   
![](/assets/images/2004/08/xbox-set-internet-in-EvolutionX.jpg)  
Where

- <span style="FONT-WEIGHT: bold; COLOR: rgb(255,0,0)">A is a FIX IP adress assign by the router to the XBOX
- <span style="FONT-WEIGHT: bold; COLOR: rgb(255,0,0)">B is a constant. aka always the same value: 255.255.255.0
- <span style="FONT-WEIGHT: bold; COLOR: rgb(255,0,0)">C is the IP adress of my router gateway, it should be as default 192.168.1.0 for NetGear and 192.168.1.1 for US robotics. Default Gateway and DNS MUST have the same adress. The DNS function is explained here \[Wikipedia\]

# 2: Set the Internet settings in XBMC.   
go into the settings panels of XBMC under internet protocol

Choose <font size="2" style="FONT-WEIGHT: bold; COLOR: rgb(0,0,255)">A if you already set the DNS, gateway, IP in the dashboard (point 1 above)  
![](/assets/images/2004/08/xbox-set-internet-in-XBMC.jpg)

#   
Choose # <font size="2" style="FONT-WEIGHT: bold; COLOR: rgb(0,0,255)">B #  if you prefer to set the DNS, gateway, IP in XBMC (same values as in point 1 above)

![](/assets/images/2004/08/xbox-set-internet-in-XBMC-manual.jpg)

# Choose # <font size="2" style="FONT-WEIGHT: bold; COLOR: rgb(0,0,255)">C#  if you prefer to let the system find DNS, gateway, IP, Your gateway must have DHCP enable!  
![](/assets/images/2004/08/xbox-set-internet-in-XBMC-dhcp.jpg)  


If everything is working, You should:

- See some news (RSS) in the frontpage of XBMC,
- Be able to query the meteo status.

| I recommend you to set the IPadress here (for example 192.168.0.10) or use you router so your XBOX has always the same adress. |
|---|

- - - - - -



<font color="#40ab3d" face="Arial Black" size="4">![xboxIcon](/assets/images/2004/08/x.gif) Install Linux

<span style="FONT-WEIGHT: bold; COLOR: rgb(255,0,0)">Installing Linux is not needed to run XBMC, It is just a possibility among other the xbox has.

1\. So you want a cheap linux box, a small webserver to host your internet page, creating a cluster, etc … You may want to install Linux on Your Xbox  
2\. You just want to play multimedia content and only have the standard harddisk (8Gb), You will only have enough storage on harddisk to install XBMC  
3\. You are already addict to Linux and have a bigger harddisk (like 80Gb or 160Gb) – You can install both! XBMC and Linux!

Here are some very good tutorials:  
<http://www.xbox-linux.sf.net/>   
<http://www.xbox-linux.org/> Linux Debian on Xbox

- - - - - -

<font color="#40ab3d" face="Arial Black" size="4">![xboxIcon](/assets/images/2004/08/x.gif) 15. Frequently asked questions ![](/assets/images/2004/08/smallnew.gif)

# I’ve load a bad/corrupt skins and can not change it in the graphical user interface of XBMC!** Search in <font face="Courier New" size="2">E:/TDATA/ in all directories for a file <font face="Courier New" size="2">settings.xml (on mine Xbox it was in <font face="Courier New" size="2">E:/TDATA/0face008) and edit this file

<font face="Courier New" size="2"><general></general>  
<skin></skin><font color="#ff0000" face="Courier New" size="2">MayhemWidescreen<font face="Courier New" size="2">  
<timeserver></timeserver>true  
<ftpserver></ftpserver>true

change the skins name to the previous which was working, and then restart XBMC

- - - - - -



<font color="#40ab3d" face="Arial Black" size="4">![xboxIcon](/assets/images/2004/08/x.gif) Not required but…

You may want to :

- Change the Fan because it is too noisy in a home cinema setup…
- Connect USB devices: keyboard and mouse, in order to use linux. Some interface are now available ($15) or you can build it yourself (soldering required)
- Replace the genuine DVD rom, in order to have a better compatibility with CD-CDRW (the genuine drive Samsung read correctly only closed sessions discs, other do not read CDR)

- - - - - -



<font color="#40ab3d" face="Arial Black" size="4">![xboxIcon](/assets/images/2004/08/x.gif) Helping the community  
# There is surely something for you!**

- Help at the code level,
- Create more skins, logos
- Write documentations, tutorials.
- Translations of interface, manuals…,
- Help newbies in forums,
- **And pay some games instead of copying them!**

- - - - - -



<font color="#40ab3d" face="Arial Black" size="4">![xboxIcon](/assets/images/2004/08/x.gif) Thanks

My thanks goes first to M$… for having created such a device, and think that nobody will ever crack its protections schemes. Then to the community which always do a great job and is creating a lot of good releases in all domains.

- - - - - -



<font color="#40ab3d" face="Arial Black" size="4">![xboxIcon](/assets/images/2004/08/x.gif) Xbox Linux clusters  
  
A lot of people want to create farms of Xbox to resolve some complex challenges (like Seti at Home, RSA key crack)

- [http://www.xbox-linux.org/ ](http://xbox-linux.sourceforge.net/)THE home for linux on XBOX
- [http://www.cs.uh.edu/~bguillot/xbox/home.html ](http://www.cs.uh.edu/~bguillot/xbox/home.html)Unmodified Xbox Cluster 4 nodes
- [http://home.llamma.com/xbox/beowulf.htm ](http://home.llamma.com/xbox/beowulf.htm)plan is to have a 14 nodes cluster, but no advance in the project since a while
- [Xbox clusters up at Linux Expo](http://news.zdnet.co.uk/hardware/emergingtech/0,39020357,39117043,00.htm)
- [Domino 6 for Linux on M$ Xbox](http://www.nashcom.de/nshweb/pages/xbox.htm)

- - - - - -

<font color="#40ab3d" face="Arial Black" size="4">![xboxIcon](/assets/images/2004/08/x.gif) Emulation

<http://xboxemul.gueux.net/>   
<http://www.lantus-x.com/xSnes9x/> SNES  
<http://mameox.sourceforge.net/>

- - - - - -

<font color="#40ab3d" face="Arial Black" size="4">![xboxIcon](/assets/images/2004/08/x.gif) Links

<http://www.xbox.com/> Official XBOX site  
<http://www.xbox-scene.com/> The REFERENCE site, if you visit only one, this MUST be the one!  
[www.teamxecuter.com](http://www.teamxecuter.com/) the best, oldest, constantly improved mod chip available.  
<http://www.techtv.com/screensavers/modtips/story/0,24330,3420568,00.html> XBMP Review at techTV, some video can be download.  
<http://sourceforge.net/projects/xbplayer> Host the source code of the project.

<http://mediaportal.sourceforge.net/> open-sourced Windows(Win32) port of Xbox Media Center, named Media Portal.

<http://www.xboxhacker.net/> All about mods chips in general  
<http://www.avalaunch.de/> Avalauch community  
<http://www.teamavalaunch.tk/> Team Avalaunch (dashboard)  
<http://www.xboxopensource.com/>

<http://sourceforge.net/projects/openxdk/> OpenXDK is an Open Source, Free, Legal Xbox Development Kit. OpenXDK is being developed to facilitate hobbyist and "homebrew" coding for the Microsoft XBox.