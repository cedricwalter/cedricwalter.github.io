---
id: 305
title: 'Migration to linux'
date: '2004-08-26T23:11:16+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=305'
permalink: /linux/migration-to-linux/
image: /wp-content/uploads/2020/02/opensuse.png
---

What a windows users do need to install or use in SUSE 9 to complete the same tasks he get use to in Windows?. What were the difficulties encountered and what are the potential weakness of SuSE 9 distribution?

## <font face="Arial Black" size="7">Migration to linux

## **Round 2**

 GNU Free Documentation License Copyright (c) 2003 Cédric Walter

## <font face="Arial Black" size="4">Purpose

# What a windows users do need to install or use in SUSE 9 to complete the same tasks he get use to in Windows?. What were the difficulties encountered and what are the potential weakness of SuSE 9 distribution?.

## <font face="Arial Black" size="4">Background

# I am using Windows since 10 years now, what decide me to switch all my personal PC (2) to #Linux is [# here](images/pc/suse/myExperience.htm#Why%20choosing%20Linux%20now?)# . I decide to try a completely free and open source Operating System to do my everyday private job….or better said some tasks….This small review has been done during evenings while watching TV, chatting on MSN, ![](/assets/images/2004/08/ohno.gif), I have only taking notes on my notebook while playing with SUSE. I hope that the quality will be good enough and that it may convince You to give SUSE or #Linux in general a try.

# **New 21.01.2003**, my anti virus [# AVG](http://www.grisoft.com/)#  (free edition) was running under Windows 2000 SP5, I encounter an electricity problem, Pc reboot, since this event I can not start my system anymore! safe mode, last good configuration, scandisk, nothing work. The anti virus may have let some file open, since I get a blue screen with an error message saying: can not get exclusive access to the disk….an opportunities to kill my multi boot and only use #Linux SuSE, I do not regret the switch since..

# **New 12.04.2004** My corporate ladtop running under M$ XP sp1, was defragmenting my Maxtor 250Gb external harddisk (FAT32) when the system hang. Rebooting windows has destruct the filesystem and leave me with a ‘disk I/O error’ and a blank disk! (Real men dont do backup but they often cry…..I was really pissed of at that time, lossing 180Gb of data is really a bad experience), I’ve tried to recover the data with scandisk, and Norton Disk Doctor 2004 (report error ‘no filesystem’ ) without any success 🙁 Last chance was my second PC running Suse #Linux, **MIRACLE**, I’ve recover most of the data (95%) since #Linux has mount and read all data from the damaged disk. **Conclusions**: defragmenting is dangerous! I consider now windows as a joke and I won’t ever install a non journalised and transactionnal filesystem….Reiserfs 4 will be my next filesystem and I will replace my PC2 (w2k) with #Linux SuSE 9.1 when it will be available.

## <font face="Arial Black" size="4">Test system

# One more time, here is my system, The #Linux experience you will have is very depending on hardware (and also drivers)…..

- Mainboard Nvidia Nforce 2 ASUS A7VN8X deluxe 2 integrated ethernet card 6 USB – 2 Firewire On Board soundcard
- Harddisk IBM 120Go UDMA 133 (primary master)
- Harddisk IBM 80Go UDMA 133 (primary slave)
- CDR/RW 16x IDE noname
- Geforce FX 5600 256Mb MyVivo
- [Athlon XP 1700](https://waltercedric.com/linux/migration-to-linux/images/pc/overclocking/index.htm) overclocked at 3200 [with my watercooling](https://waltercedric.com/linux/migration-to-linux/images/pc/watercooling/resultat.htm)
- 512Mb DDR Dual Channel mode PC3200 (new)
- SUSE #Linux 9.0 and the KDE 3.1.4 desktop
- Netgear DG 834G modem-router-switch-wireless (internal kernel is also running
- a #Linux 2.4.17 on mips processor, as you see #Linux is everywhere
- 

## <font face="Arial Black" size="4">Evening 1

**Note** all these screenshot has been done with <font face="Courier New" size="2">KSnapshot, finding this application was quite easy even if the menu contains a lot of entries, you can locate it under <font face="Courier New" size="2">**Utilities – Desktop – KSnapshot**. I must admit that due to the huge number of shipped applications, SUSE has done a good sorting job in this menu. Of course you must know what you want to start or which task you want to accomplish

![menusSortingPerfect.gif](/assets/images/2004/08/tn_menusSortingPerfect.jpg)Regret I browse thee documentation of <font face="Courier New" size="2">KSnapshot and did not find any shortcuts/hotkey to trigger the screenshot….Naivement, I ‘ve try the magic windows key combination, <font face="Courier New" size="2">ALT-PRTSC or <font face="Courier New" size="2">PRTSC, but it does not work….so I decide then to search on [google](http://www.google.com/)….”<font face="Courier New" size="2">ksnapshot shortcut” give me the answer, <font face="Courier New" size="2">CTRL-SHIFT-S which is documented in a “KDE-cvs-digest” as a “backdoor”. I see here a documentation potential 🙂

## Setting the resolution of screen

YAST require to switch to root mode, I was quite impressed by the list of available monitor driver (I have a Syncmaster Samsung 191N) but sad when I saw, it was not in the list (the 181 is), I decide to browse through the list of available brand searching for a generic driver like in windows advance control panel, Bingo there is a “<font face="Courier New" size="2">**->LCD**” monitor section, restart the desktop engine (X server) by logging out and I am done. It seem that there is till now always a solution, all you have to do is to search a little bit which is also good too because you can only be a better user…

![yastSettingMonitor.gif](/assets/images/2004/08/tn_yastSettingMonitor.jpg)Since I have installed SUSE in a multi boot system, in <font face="Courier New" size="2">Kexplorer (both a browser and a file manager and…see section below) all windows drive are not visible in the /<font face="Courier New" size="2">mount directory like on any linux system but grouped in a /<font face="Courier New" size="2">windows/ This disturb me 10s but I find it.

As default **you can not write on NTFS drive** (Note kernel 2.6 should support full read/write operation on NTFS), so I decide to activate this feature since everywhere on internet, you can read that SUSE 9.0 support it (SUSE bring some new features from kernel 2.6 back to 2.4.21 like 64-bit support, journaling file system, improve security, low latence of scheduling, power management for notebook and improvment in the sound-system architecture. Trying to be a good user, I start the SUSE helpCenter and search for an article which speak of NTFS..

![helCenter.gif](/assets/images/2004/08/tn_helCenter.jpg)I have found only recommendation for resizing or formatting the system during the installation of SUSE. One solution among others is to move all data from NTFS drive (full NTFS read support) to a #Linux space then format back to FAT32….Operation done with <font face="Courier New" size="2">Konqueror, the file manager. I already mention that I prefer to have a clone of Norton Commander.

## **Java support**

<font face="Courier New" size="2">Konqueror the default internet browser fully support #Java, but it was not the case of the third party browser [Opera](http://www.opera.com/) I’ve installed or better said, Opera did not locate correctly the default JRE (Java Runtime Environment), so I need the feel to install the latest #Java VM manually. Checking <font face="Courier New" size="2">Konqueror settings shows that java is installed in <font face="Courier New" size="2">/usr/lib/java2/bin/java

![installingJava.gif](/assets/images/2004/08/tn_installingJava.jpg)Go to [www.java.com](http://www.java.com/) and download the self installer (2 links are provided a .bin and a .rpm and both are self extracting, confusing….), I choose the .bin file and that force me to set attribute of file to executable (right click on file then properties) to uncompress the .bin

In Linux world, a file can only be execute if it has it X flag set to 1 User is the currently logged user Group is a set of user Others are …others!

You get a file with an extension .rpm, many alternatives, choose one of the 3 below you prefer.

1. Open a Terminal, log a root (type <font face="Courier New" size="2">\# su ) then type <font face="Courier New" size="2">\# rpm -iv filename
2. You can use <font face="Courier New" size="2">Konqueror and right click open with…<font face="Courier New" size="2">Kpackage, a small utilities, then enter root password.
3. You can use <font face="Courier New" size="2">Konqueror and click directly on the rmp and YaST wll start up.

Anyway, I choose one and continue my tour….In opera I set in <font face="Courier New" size="2">**preferences – Multimedia- #Java Path** to <font face="Courier New" size="2">/usr/lib/SunJava2-1.4.2/jre/lib/i386#  and then my java appear on my homepage, done

## <font face="Arial Black" size="4">Online Update 

are done through ….YaST of course,(YaST I am know getting used to that name), <font face="Courier New" size="2">**software – online update** to get the latest recommended patches and security fixes from one of the available SUSE server. 15 servers are installed: 13 are located in Europe and 1 in USA. The late# st server is a free choice, you can also define Your own server. I choose 3 differents servers (primary in Germany) and all were working.

![yastOnlineUpdate.gif](/assets/images/2004/08/tn_yastOnlineUpdate.jpg)![onlineUpdateYast.gif](/assets/images/2004/08/tn_onlineUpdateYast.jpg)Another way to be always informed about the status of possible update is to look at the <font face="Courier New" size="2">SuseWatcher icon in the system tray, identic to the windows update icon. The icon color can change if something is available on the server.

![susewatcher.gif](/assets/images/2004/08/tn_susewatcher.jpg)## Internet browsing

I like Opera so much that I have acquire a licence (previously for Windows and now for #Linux), I have also choose [Opera](http://www.opera.com/) under #Linux and I do not regret it, even if it is not open source.

## Instant messaging

Under <font face="Courier New" size="2">**internet – Chat** You can find a lot of tools installed as default like:

- <font face="Courier New" size="2">Gaim,Kopete, gnomeICU which are multi protocol instant messaging, (I decide to choose <font face="Courier New" size="2">Kopete, but I will try all others in the future)
- Or some specifics application related to specific protocol: 
    - <font face="Courier New" size="2">KVIrc, KSirc, XChat IRC (IRC)
    - <font face="Courier New" size="2">KXicq2 (ICQ)
    - others <font face="Courier New" size="2">Kinkatta, Kit, Konversation

With <font face="Courier New" size="2">Kopete, I was able to define ICQ, MSN, Jabber in less than 5 minutes without knowing the GUI at all! really impressive (If you can do it in windows, you can do it in Suse is now my new motto!), I am still trying to customize the GUI (like in my windows IM [www.miranda-im.org](http://www.miranda-im.org/)) because I find that <font face="Courier New" size="2">Kopete take too much desktop space.

![instantMessaging.gif](/assets/images/2004/08/tn_instantMessaging.jpg)A set of interesting plugin is provided as default: encryption, emoticons, history of messages, web presence (upload your IM status to a homepage or a server)…A lot of features, but Webcam and Whiteboard capabilities are still missing. For sure there will be a plugin soon or at least a GNU tool for this somewhere in SUSE

![instantMessagingPlugins.gif](/assets/images/2004/08/tn_instantMessagingPlugins.jpg)For me, Instant Messaging is ok and I can live with <font face="Courier New" size="2">Kopete.

## Mp3 and audio content.

Using <font face="Courier New" size="2">Konqueror, I try to locate my favorites MP3 directory in order to launch some MP3, <font face="Courier New" size="2">XMMS start as default, I’ve heard that this player is quite good, the default skins is based on SUSE colors, mainly green with a chameleon (see pic), This skins is acceptable for a user but not for someone who has already use Winamp’s MMd3 or EMP skin (but this is personal). I take google to see if there is something else to download, official homepage is here .<http://www.xmms.org/skins.php> but skins section is down (after a disk crash but it will reopen). Winamp skins seems to be incompatible with <font face="Courier New Baltic" size="2">XMMS and there is no converter available

## Viewing file using Konqueror

<font face="Courier New" size="2">Konqueror is the default file manager and web browser, It is a central application in all KDE desktop. It has a lot of functionnalities (some people may say too much), and its own control panel.   
 Viewing pictures with it is “slow” (dir has 26 pictures, mean size is 80kb) and it took several seconds (I am not comparing to Windows thumbnails feature, but with ACDsee). Entering twice in the directory do not create additional performance loss, since images are cached (default cache size is set to 1Mb) Windows, ACDsee and others tools use the same tricks.

Hovering over pictures and files create a autozoom…this is a nice features (working with txt file, configuraton, pdf) and is fast, during the build of a directory, the auto zooming display some strange result (especially if you have different file type like pdf, txt, jpg all together in one directory), but it is working and has not crash during the past 10 days (I must be lucky some people will say)

Contextual menu, Hovering over images, Hovering on file, Konqueror settings, hierarchical panel  
due to huge number of options

- I still prefer a Norton Commander (because of the dual panel), so I am hunting on internet and found <font face="Courier New" size="2">XNC 5.0 but no precompiled rpm for SUSE. this oblige me to compile the source code…
- Path to file is difficult to keep in mind (mainly because there is no more drive letter, I only need some practice…), but you can define favorites

**XNC is also downloable for SuSe 9.0 here :** [**xnc-5.0.4-1.i586.suse9.0.rpm**](images/pc/suse/download/xnc-5.0.4-1.i586.suse9.0.rpm)

**Midnight Commander** is a clone of Norton Commander running in a terminal (just type <font face="Courier New" size="2">mc)

![mcommander.png](/assets/images/2004/08/tn_mcommander.jpg)## Krusader

“*[Krusader ](https://krusader.org/)is an advanced twin-panel (commander-style) file-manager for KDE 3.x (similar to Midnight or Total Commander) but with many extras. It provides all the file-management features you could possibly want.*  
*Plus: extensive archive handling, mounted filesystem support, FTP, advanced search module, viewer/editor, directory synchronisation, file content comparisons, powerful batch renaming and much much more.*  
*It supports the following archive formats: tar, zip, bzip2, gzip, rar, ace, arj and rpm and can handle other KIOSlaves such as smb:// or fish://*  
*It is (almost) completely customizable, very user friendly, fast and looks great on your desktop!* “  
I am using it every day, and it is probably the one which has the better GUI

## USB support (Key)

I mount a USB Key brand <font face="Courier New" size="2">Apacer AP-MKSRU10 # (impossible to find a picture on internet, very cheap version 8â?¬) which use [Sony Memory Stick](http://www.memorystick.com/) , after a beep, the drive was recognized and in use. An icons was created on the desktop. The beep is immediate but it take sometimes several seconds till the removable drive is recognized. No problems transfer rates seem to be exactly the same as under Windows 2000.

## <font face="Arial Black" size="4">Evening 2

### Security, password policy, settings and firewall

- Can be done in YaST, all setting are always done with th help of assistants, a meaninful documentation is always displayed on the left. No need to push a button or to hover on some part of the GUI like in Windows control panel.
- NAT (<font face="Courier New" size="2">Network Adress Translation) which consist of hiding the real internet adresses of your machine by hiding it behind the firewall adress is supported and with only a checkbox
- You can block some #Linux services (Webserver, Mail Server) or define your own.
- I am still searching in the YaST GUI for port forwarding capabilities and firewall rules (TCP-UDP and direction). It seems that you must deal with the config file of the firewall directly. (<font face="Courier New" size="2">/etc/sysconfig/SuSEfirewall2)

Even if the first part of the setting is done with an assistant, I think that SuSE need to enhance the configuration of it’s firewall. I do not want to dedicate a machine for running my firewall even if it is does not give the same security. My router is a Netgear 614 without firewall, but my other PC use a Netgear 634g which has one…

## YaST the configuration utility, but what can YaST do for You? 

A lot of things, see below the table. Clicking on a subsection always start an assistant that drive the user and give him succinct but understandable explanations.

### Software

- Change Source of Installation
- Install and Remove Software
- Online Update
- Patch CD Update
- System Update

### Hardware

- CD-ROM drives
- Disk Controller
- Graphics cards and monitor
- Hardware information
- IDE DMA Mode
- Joystick
- Printer
- Scanner
- Select Mouse Model
- Sound
- TV Card

### Network Devices

- DSL
- Fax
- ISDN
- Modem
- Networl card
- Phone Answering machine
- Network Devices
- DHCP server
- DNS server
- DNS and Host Name
- HTTP Server
- Host Names
- Kerberos Client
- LDAP client
- Mail Transfer Agent
- NFS Client and Server
- NIS client
- NTP Client
- Network Services
- Proxy
- Routing
- Samba Client and Server
- TFTP Server

### Security and Users

- Edit and create groups
- Edit and Create Users
- Firewall
- Security Settings

### System

- Boot Loader
- Choose Language
- Create a boot rescue disk
- Editor for /etc/ sysconfig files
- LVM
- Partioner
- Powertweak Config.
- Profile manager
- Restore System
- Runlevel Editor
- Select Keyboard layout
- Select Time Zone
- System Backup

### Misc.

- Load Vendor Driver CD
- Post a support Query
- View Statup log
- View System Log

## Screensavers

Don’t laugh! a good screensaver is part of a personal computer even if it no more needed (TFT screens are good enough to not be damaged by a fix picture)

- Suse has a lot of screensavers, a lot of them seems to be quite old or was in use in low end PC: character base or line base screensaver,
- Those I prefer are all GL (Glide understand openGl accelerated) based: Euphoria, Flux, Lament, Solar Wind
- I like Vector Balls and Particles system since I’ve seen them on Amiga: Flow, Particle Fountain.
- Matrix is provided as default!

What I dislike is that it is not possible to define a list of prefered screensavers.In the End, **ANY** User will be satisfied with the number and diversity of screensavers.

## Emule, a P2P network under #Linux

Who is using emule under windows? ![](/assets/images/2004/08/smileInnocent.gif) hum? not You? so jump to the next section

## Install Lmule

http://switch.dl.sourceforge.net/sourceforge/lmule/  
lmule\_logo\_new\_gray.gif  
Install these 3 rpm in this order  
by typing rpm -ihv –nodeps filename.rpm  
OR clicking on rpm file in Konqueror  
wxGTK-2.4.0-1.SuSE81.i386.rpm  
wxGTK-devel-2.4.0-1.SuSE81.i386.rpm  
lmule-1.2.1-1.SuSE81.i386.rpm  
Changee to /usr/bin and type ./lmule

## Install Emule under the Wine emulator

Does not work with all version of emule, not an option as today  
Install http://sharedaemon.sourceforge.net  
The core engine is not available, expect delivery in Q1 2004  
Use http://xmule.org version 1.7.1  
But it seem discontinued…Interface match the windows version.  
xmule1.gif  
Use http://amule.sourceforge.net It is working!!!!  
amule.gif

1. Locate all rpm in download section. You need 2 gtk rpm and 1 amule.rpm
2. Click on each of them in Konqueror but install first GTK librairies
3. After install of amule.rpm, you can start it under the menu – internet – More Programs – amule  
    You can reuse the uncomplete part and .met files from the emule windows version

## O<span style="font-family: arial black;">VERNET another P2P network under #Linux

- Go to www.overnet.com and download the core (an executable file running in command line mode)
- You need a GUI, this one is available at http://ed2k-gtk-gui.sourceforge.net/download.shtml it is a rpm
- Start the gui by typing /usr/bin/ed2k\_gui in konqueror
- The tool ask you to locate the core, here I save it under /home/elta68/.overnet/core/overnet0.51.2
- Choose a user name, a password and click “spawn core” then “go”, you are now connected, share some files and here we go, download!!!!!!
- overnet gui settings for suse 9overnet running

## <font face="Arial Black" size="4">**Evening 3**

### **Burning CD**

Burning CD tools can be found under Multimedia – CD/DVD Burning. 2 software are installed as default: K3b and cdbakeoven. The about K3b display the release number 0.10! this is disturbing me, is it stable when you ship anything with 0.10?

| [<font face="Verdana, Arial, Helvetica, Sans-Serif" size="1">![burnincd.gif](/assets/images/2004/08/tn_burnincd.jpg)](/assets/images/2004/08/burnincd.gif) | [<font face="Verdana, Arial, Helvetica, Sans-Serif" size="1">![burnincd2.gif](/assets/images/2004/08/tn_burnincd2.jpg)](/assets/images/2004/08/burnincd2.gif) | [<font face="Verdana, Arial, Helvetica, Sans-Serif" size="1">![burnincd3.gif](/assets/images/2004/08/tn_burnincd3.jpg)](/assets/images/2004/08/burnincd3.gif) | [<font face="Verdana, Arial, Helvetica, Sans-Serif" size="1">![burnincd4.gif](/assets/images/2004/08/tn_burnincd4.jpg)](/assets/images/2004/08/burnincd4.gif) |  |
|---|---|---|---|---|
| 1. Starting K3b | 2. use the assistant, here I select    Create a Data CD | 3. Use the file explorer to locate file you want to burn - Windows drive (NTFS – FAT32) are located in <font face="Courier New" size="2">/windows/ - You can give a name to your compilation, right click rename on the root.. - The space left and consume on CD disk is displayed like in any burning software. - The GUI is very similar to EasyCD creator | 4 click burn and choose burning options - Speed (I have a 16X) but only 14X is available - Writing mode: DAO, TAO, RAW - Type of session - Volume CD-Test - and filesystems and misc options.  I do not see any options missing, except an assistant for some protections schemes….(Securoom, Safedisk) |  |
| [<font face="Verdana, Arial, Helvetica, Sans-Serif" size="1">![burnincd5.gif](/assets/images/2004/08/tn_burnincd5.jpg)](/assets/images/2004/08/burnincd5.gif) | [<font face="Verdana, Arial, Helvetica, Sans-Serif" size="1">![burnincd6.gif](/assets/images/2004/08/tn_burnincd6.jpg)](/assets/images/2004/08/burnincd6.gif) |  | [<font face="Verdana, Arial, Helvetica, Sans-Serif" size="1">![burnincd7.gif](/assets/images/2004/08/tn_burnincd7.jpg)](/assets/images/2004/08/burnincd7.gif) |  |
| Burning took 4:30 minutes for 594MB and mean speed was 12X | If you want to create an audio CD - You can not directly use mp3 files but need to convert them back to wav with winamp for example. - You can also right click on a file and play it. | In the menu <font face="Courier New" size="2">**tools**: - CD-RW are supported (with Erase support of course) - Copy CD or Clone CD - Burn image ISO, BIN and CUE: CCD are missing. - Copy DVD, format DVD-RW, Burn ISO image… | **Control panel**- It support plugins, only 3 are installed: mainly Audio Decoder and Audio Encoder and external programs to work properly. Highly extensible design is always good. - The control panel follow the same clarity guidelines as the whole KDE, which are good.. |  |

- Following CD projects are possible: Audio CD, Data CD, Mixed mode CD, Video cd, eMovix CD, Data DVD, eMovix DVD. As you see everything is also present.
- What is unknow is the abilty of K3b to handle protected CD….Of course nobody of us are using <font face="Courier New" size="2">CloneCD, <font face="Courier New" size="2">AlcoholSoft, <font face="Courier New" size="2">NeroBurning to copy protected CD…..so it is not really an issue or?
- Of course I need to burn more than 2 CD to be able to give an opinion on K3b, and I am convince that it is easy to find some better reviews on internet. What I can say is that K3b will cover my personal use
- Creating CD is as simple as with EasyCD Creator or Nero
- For resuming, whaouuuh so much functionnality for a release 0.10 …

## **DVD, multimedia, Divx, Xvid**

DVD For some obscur reasons (juridical) It is not possible to play encrypted DVD on linux, if you search on www.google.com you will find a lot of tutorials and the librairies. Here is an extract of the manual:an  
“For the playback of encrypted DVD movies you need a CSS decoder and the codecs (video format files) for ac3 (Dolby Digital) and mpeg2, which we cannot enclose with SUSE LINUX for legal reasons.”  
Library to access encrypted DVDs also a CSS decoder can be found if You use the search engine at

http://rpm.pbone.net/ OR  
http://rpmseek.com

Divx  
XVID Kaffeine is a GUI for Xine library (the video engine), for the same reasons, divx drivers are not shipped with SuSe (in windows it is the same…)  
Use the site rpm.pbone.net to locate the XVID drivers or use the site of packman ftp://ftp.links2linux.de/ and more precisely ftp://ftp.links2linux.de/pub/packman/suse/9.0/i586/ I choose the XVID 0.9.2

In order to read and write compressed AVI files (indeo and divx), #Linux can reuse the Win32 library of Windows Media Player 9 (wmv9dmod.dll wmvdmod.dll wma9dmod.dll wmadmod.dll wmspdmod.dll), You can find them at http://avifile.sourceforge.net/ in the file “wm9 DMO dlls“, just copy them to /usr/lib/win32/ and Kaffeine will find them (Operation done as root user and do not forget to give read and execute rights on file chmod 655 \*.dll). If you want a more complete package, packman has all dlls required (9.2mo) at http://packman.links2linux.de

I encounter a lot of difficulties, and 70% of my video were not working, I decide to install the latest xine librairies (1.1rc3) and the latest kaffeine (0.4.1) AND NOW EVERYTHING IS WORKING great, I hope that suse will provide it with an update as soon as possible…

CD audio Put the CD in the drive and it begin to play automatically.

## Windows network connectivity

It seems that connecting SuSE to another remote windows desktop is not as easy as in the windows world…I have found the iconse “Local Network” but nothing was found. There is an interesting documentation in the help center “<font face="Courier New" size="2">Linux in the network” speaking about <font face="Courier New" size="2">Samba (a layer on top of TCPIP) which help to connect heterogenous computer (MAC, Windows, #Linux, others which have this layer). Microsoft implements this layer after pressure of IBM….:-) A good documentation but what I want is 3 uses cases::

- **1. How #Linux can access to a Windows machine on the network/shares/printer/internet?**
- **2. How Windows can access to #Linux machine on the network/shares/printer/internet?**

You must use [Samba](http://www.samba.org/) for all above.

**1. How #Linux can access to a Windows machine on the network/shares/printer/internet?**

A lot of FAQ and Howto can be found with google, use the keywords: “linux windows smb howto”

- In Yast go to “Network Services” then “Samba Client” anfd enter the name of your windows workgroup
- Then Open a terminal and test if your client (Linux) can see some windows shares
- **Or** use Konqueror and type in the adress bar: smb://193.168.0.3/share1 You can then add this share as favorite
- smbclient -L ipadress (giving the computer name do not work with me, my pc is named “Raptor”)

If these steps are working, you can add definitively in /etc/samba/smb.conf the remote windows share, either with the YaST gui or with a text editor.

If these steps are working, you can add definitively in /etc/samba/smb.conf the remote windows share, either with the YaST gui or with a text editor.

**2. How Windows can access to #Linux machine on the network/shares/printer/internet?**

In Yast go to “Network Services” then “Samba Server” and enter the name of your windows workgroup

```
[myMP3]
comment = My collection of MP3
browseable = yes
guest ok = yes
printable = no
```

## **Remarks**

- XMMS was not able to open remotely a mp3 using a samba share, copying the same mp3 locally work…strange.

<span style="font-weight: bold;"> Links  
 <http://www.art-events.de/systeme/texte/000621samba.htm> A tutorial in German  
 [http://www.bnro.de/~schmidjo/index.html](http://www.bnro.de/%7Eschmidjo/index.html) **LinNeighborhood is a tool to display the network neighbourhood like in windows explorer.**

## Publishing, deploying web content

[http://www.suse.de/en/private/support/online\_help/howto/webeditor/](http://www.suse.de/en/private/support/online_help/howto/webeditor/) A very good review.

- http://bluefish.openoffice.nl/
- http://quanta.sourceforge.net/
- screem http://www.screem.org/
- Mozilla Composer www.mozilla.org a wysiwyg (What You See Is What You Get) HTML editor

**![](/assets/images/2004/08/susebullet.gif)** **A friendly task manager ![](/assets/images/2004/08/smallnew.gif)**

Since I was a windows user, I’ve been looking for a graphical program to allow process monitoring and manipulation. For chance, there is a default “task manager” coming from the base installation of KDE, it is located in <font face="Courier New" size="2">**System – Monitor – Kde System Guard**

![ksysguard.png](/assets/images/2004/08/tn_ksysguard.jpg)![ksysguard1.png](/assets/images/2004/08/tn_ksysguard1.jpg)- It is a more user friendly way to monitor (and kill!) process or watch memory, cpu than in a terminal.(with command <font face="Courier New" size="2">top or <font face="Courier New" size="2">ps -ef | grep username)
- Only regret it can not reside in the system tray and wait there when yu really need it.
- You must filter in the process table, otherwise you will see a lot of process running in the background (KDE has a lot of process alone).
- Option 1) Ctrl+Alt+Esc gives you a nice mouse cursor to kill whatever you point and click at. try it.
- Option 2) Ctrl+Esc brings you a nice TasK List(Procees Table) to select and kill whatever process you like to.

## **A powerful calculator HP48-HP49**

# I still have 3 HP calculator and was developing on ASM-RPL.SYSRPL (from 1993 to 2000), I use EMU48 [# each day under windows, see Here](hp48/bestCalc.htm)

- # X48 seems to be the answer, even if it is not so polish and rich of functionnalities as EMU48.
- # A rpm can be download from [# http://rpm.pbone.net](http://rpm.pbone.net/)#  and roms from [# www.hpcalc.org/hp48/pc/emulators/](http://www.hpcalc.org/hp48/pc/emulators/)#  (no more legal issues roms can be copied freely)
- # Again, great difficulties to locate a rpm for SuSE on internet, Redhat and Debian are available.
- # No great skins are available, but it do its job
- [# http://www.fen-net.de/~ea1370/pub/Hobbies/comp/HP48/](http://www.fen-net.de/%7Eea1370/pub/Hobbies/comp/HP48/)#    
    
- [# www.hp.com/calculators/ ](http://www.hp.com/calculators/)#   
    
- [# http://www.hpcalc.org/ ](http://www.hpcalc.org/)#  and [# FAQ.](http://www.hpcalc.org/hp48/docs/faq/)
- [# www.hpmuseum.org](http://www.hpmuseum.org/)#    
    
- [# http://www.hpcalc.org/goodbyeaco.php](http://www.hpcalc.org/goodbyeaco.php)#  the end of HP calculator

 [Here is a binary](images/pc/suse/download/x48.tar.gz) **![](/assets/images/2004/08/smallnew.gif)** with roms that work… just unpack and start ./run48g.sh or ./run48s.sh in a terminal

## **My webcam, a Philips PCV680K vesta pro**

Plug and ….. wait, after some minutes (I was playing with the mount command, maybe it can shorten the process if you log as root (<font face="Courier New" size="2">type su) and try to force mount of all devices mount -a)

- In google “linux webcam philips” give me this page: <http://smcc.demon.nl/webcam> It seems that these is now a part of the kernel since 2.4.15
- It place an icon on the desktop “”webcam” clicking on it start <font face="Courier New" size="2">Gnome meeting, you have then 7 steps to complete before using this tool.
- It only allow you to use it between other gnome meetings instance, kopete, the Instant messaging has no webcam plugin, and do not recognize that a webcam was installed.

## **Intall the latest nVidia driver** 

- Open a terminal
- Switch to root su
- Download the latest drivers at (should be #Linux IA32) http://www.nvidia.com/object/linux.html
- Verify that you have install the kernel source with YOU (YaST Online Update), to know which kernel source you need,
- type rpm -qa | grep kernel
- OR
- go in YaSt and search for a package kernel, look at the number, for me it is 2.4.21-166 then download it at ftp://ftp.suse.com/pub/suse/i386/suse/i586/ then download rpm and install
- OR
- In YaST, do a search with “kernel source”, and install the src code.
- You must quit XFREE, so save all work and close all aplications running, then type in the console init 3
- press F2, log as root
- Execute the .run package you have download, move to the directory where you save it and type sh filename.run
- The install ask You to accept the licence, remove the current nvidia modules from memory, and search for the kernel interface, if it is not found it search for the kernel source and compile it
- Restart Sax or restart the PC sax2 -m 0=nvidia

As you see a lot of step, is it not time to do all these steps behind the scene in an installer? Nividia? can you help us?

## Install media player Mplayer

Official Homepage: [www.mplayerhq.hu](http://www.mplayerhq.hu/)   
 On packman homepage ( <ftp://ftp.links2linux.de/pub/packman/suse/9.0/i586/> ), download :

- <font face="Courier New" size="2">Libtheora (required by <font face="Courier New" size="2">Mplayer) which use <font face="Courier New" size="2">libogg
- <font face="Courier New" size="2">Lame (required by <font face="Courier New" size="2">Mplayer)
- <font face="Courier New" size="2">Mplayer itself
- <font face="Courier New" size="2">Mplayer plugin
- <font face="Courier New" size="2">Kplayer is one GUI which use <font face="Courier New" size="2">Mplayer for KDE

so Install first <font face="Courier New" size="2">libogg then <font face="Courier New" size="2">Libtheora, Lame and<font face="Courier New" size="2"> finally <font face="Courier New" size="2">Mplayer and <font face="Courier New" size="2">Mplayer plugin

## **Conclusions**

- Dependancy (loading a packages require to install one or many another packages), conflict with packages is horrible, it is time to find a better format than rpm, (is apt-rpm from RedHat the future??? (<http://apt-rpm.tuxfamily.org/>)) or to restrict visibility of packages to an application instead of the whole system.
- Mplayer seems to have a better support of all windows, and show better performance on my system. Highly recomended.

## Read and write on NTFS !

 <font face="Arial Black" size="2">**<span style="font-weight: normal;">A lot of projects are trying to read Windows NTFS drive with more or less success**

| [http://linux-ntfs.sourceforge.net/ ](http://linux-ntfs.sourceforge.net/) | “The goals of this project are: create a new #Linux kernel driver for the NTFS file system (v1.2 and later 3.0), user space utilities (e.g. format, ntfs check, etc.) and a library to avoid code duplication and provide access to NTFS to other GPLed programs.”    -> it is existing in kernel 2.4.24 but with only read only capabilities, <span style="font-weight: bold;">can cause loss of data!    -> Can not write or modifying existing file (no file under 1Kb and it can not change size of file….) |
|---|---|
| [http://www.jankratochvil.net/project/captive/ ](http://www.jankratochvil.net/project/captive/)    [http://www.jankratochvil.net/project/captive/#download ](http://www.jankratochvil.net/project/captive/#download)     Author Jan Kratochvil <web\_AT\_jankratochvil\_DOT\_N.E.T>     Version 1.5     Licence GPL     Source Yes     Environment Console     Status Stable | “Captive provides full read/write access to NTFS disk drives in the WINE way by using the original Microsoft Windows ntfs.sys driver. It emulates the required subsystems of the Microsoft Windows kernel by reusing one of the original ntoskrnl.exe, ReactOS parts, or this project’s own reimplementations on a case by case basis. Involvement of the original driver files was chosen to achieve the best and unprecedented filesystem compatibility and safety.” <span style="font-weight: bold;"> As root user    1. Download tar gz here [http://www.jankratochvil.net/project/captive/dist/captive-static-1.1.5.tar.gz](http://www.jankratochvil.net/%5B..%5Dcaptive/dist/captive-static-1.1.5.tar.gz)    2. Install, decompress and start ./install    3. Locate ntfs.sys and ntoskrnl.exe in your windows/system32/ directory and copy it to /var/lib/captive/ I recommend You to use WinXp latest drivers    4. start captive-install-acquire it search for the dll, if not found it will download them from microsoft.com    5. for each windows drive (here the example is for my drive C:\\)    type mkdir /mnt/openC    type mount -t captive-ntfs -o force /dev/hda1 /mnt/openC    I add the switch -o force because SuSE has already mount the drive C (read only) in /windows/c    OR    open the file /etc/fstab and modify it:    before     /dev/hda1 /windows/C ntfs ro,users,gid=users,umask=0002,nls=iso8859-1 0 0    after     /dev/hda1 /windows/C ntfs-captive rw,users,gid=users,umask=0002,nls=iso8859-1 0 0    and then type mount -a to see changes   <span style="color: rgb(255, 0, 0); font-weight: bold;"> Attention, You may need to have a Windows licence! |
| Wine    WMware | I do not want to configure wine…    I do not want to install windows anymore… |
| <http://www.ntfs-linux.com/>    Publisher Paragon Software Group     Version 1.0     Filesize 69 K     Licence Shareware     Cost 69.95$ | “<span style="font-style: italic;">Paragon NTFS for #Linux is designed to mount NTFS partitions under #Linux operating systems as normal logical drives with appropriate drive letter. The full version mounts NTFS partitions for read and write operations; the demo version mounts NTFS partitions in read-only mode. the driver supports NTFS 1.2, NTFS 3.0 and NTFS 3.1. Free Read-only version is distributed as a driver module or bootable CD image. Mounted NTFS partitions are accepted as â??nativeâ?? â?? browse, create/delete folder or file, run applications and other usual functions are totally available.” |

 **Another way is to erase all NTFS drive and use reiserfs or extfs3, since Paragon also sell a windows driver to have full access to linux drive. Why should always #Linux make the first step?** ![](/assets/images/2004/08/smileClosed.gif)

## Install KDE 3.2

 **step by step….** <font face="Arial Black" size="2">  
 # **<span style="font-family: times new roman,times,serif; font-weight: normal;">**in YaST, go to “<span style="font-family: courier new,courier,monospace;">Software“, and then “<span style="font-family: courier new,courier,monospace;">change source of installation“  
 <span style="font-family: times new roman,times,serif; font-weight: normal;">Set a new “software media source”, use the button “add” and choose ftp  
   
 <span style="font-family: times new roman,times,serif; font-weight: normal;">server name: <span style="font-family: courier new,courier,monospace;">ftp.suse.com  
 <span style="font-family: times new roman,times,serif; font-weight: normal;">source directory: <span style="font-family: courier new,courier,monospace;">pub/suse/i386/supplementary/KDE/update\_for\_9.0/yast-source/  
   
 <span style="font-family: times new roman,times,serif; font-weight: normal;">wait till the system accept your new source of installation, close this windows, you can now go to “<span style="font-family: courier new,courier,monospace;">install and remove software“, set the select box <span style="font-family: courier new,courier,monospace;">filter to “<span style="font-family: courier new,courier,monospace;">selection“, “KDE Desktop environment” has its own section, install first all KDE base package.  
   
 <span style="font-family: times new roman,times,serif; font-weight: normal;">You will have some conflict, for me KDE pim, and PDA tools, just remove them! you can reinstall them after having installing the base package!

# #  restart your desktop session…known issues for KDE 3.2 are: sound (but it was working for me, alsa was selected as default) and kbear (FTP tool), for Kbear the solution for me was to remove the previous version (<span style="font-family: times new roman,times,serif; font-weight: normal;"><span style="font-family: times new roman,times,serif; font-weight: normal;">kbear 2.1<span style="font-family: times new roman,times,serif; font-weight: normal;">) and install this one:   
 <span style="font-weight: bold;">KBear 3.0alpha1b [# http://kbear.sourceforge.net/index.php?page=download#binaries](http://kbear.sourceforge.net/index.php?page=download#binaries)#    
   
 KDE 3.2 is as fast as my windows desktop, what a blast! I you want to have a good stability, it is preferable to wait the next official SuSE release…

 **Disk Management, rescue disk, partitionning** Soon  
  **Anti virus**  
 [http://linux.bitdefender.com/bd/site/products.php?p\_id=16](http://linux.bitdefender.com/bd/site/products.php?p_id=16) Linux Bitdefender is a freeware

  **Download manager** use kget it can be start in a terminal /opt/kde3/bin/kget  
  **Printing, scanning**  
 [http://www.linuxprinting.org/ ](http://www.linuxprinting.org/)

 **Configuring KDE, themes** Soon  
   
 **<span style="font-family: arial black;">Eclipse, development**  
 Download the file #Eclipse GTK from [www.eclipse.org](http://www.eclipse.org/) decompress and start the executable.  
 Jedit [www.jedit.org](http://www.jedit.org/) is a jar based installer, open a terminal and type java -jar jedit42pre9.jar and you’re done

 **Install kernel 2.6 on suse 9.0** here’s a howto in german: [http://www.thomashertweck.de/kernel26.html  
 ](http://www.thomashertweck.de/kernel26.html)Compile your kernel [http://www.osnews.com/story.php?news\_id=443](http://www.osnews.com/story.php?news_id=443)  
   
 Administering a Homepage** ftp tool:  
 KBear /opt/kde3/bin/kbear

  **Remove un needed software** Soon  
   
 

##  **<span style="font-family: arial black;">Links for download**

- [<font face="Arial Black" size="2">**http://www.suse.de/en/private/download/index.html**](http://www.suse.de/en/private/download/index.html)<font face="Arial Black" size="2"> **AND** [<font face="Arial Black" size="2">**ftp://ftp.suse.com/pub/suse/i386/9.0/suse/i586/**](ftp://ftp.suse.com/pub/suse/i386/9.0/suse/i586/)<font face="Arial Black" size="2"> **The official page of SuSE**
- <font face="Arial Black" size="2"> [<font face="Arial Black" size="2">**http://www.rpmseek.com/index.html**](http://www.rpmseek.com/index.html)<font face="Arial Black" size="2"> **Search for RPM**
- [<font face="Arial Black" size="2">**http://rpm.pbone.net/**](http://rpm.pbone.net/)<font face="Arial Black" size="2"> **Search for RPM**
- <font face="Arial Black" size="2"> [<font face="Arial Black" size="2">**http://packman.links2linux.de/**](http://packman.links2linux.de/)<font face="Arial Black" size="2"> **Packman compile source code and provide RPM ready to download ()**
- <font face="Arial Black" size="2"> [<font face="Arial Black" size="2">**ftp://ftp.suse.com/pub/suse/i386/9.0/suse/i586/** ](ftp://ftp.suse.com/pub/suse/i386/9.0/suse/i586/)<font face="Arial Black" size="2">**FTP**

<font face="Arial Black" size="2"> <font face="Arial Black" size="4">**<span style="font-weight: bold;">To read**  
 [**http://www.linux-mag.com/cgi-bin/printer.pl?issue=2002-10&amp;article=jfs**](http://www.linux-mag.com/cgi-bin/printer.pl?issue=2002-10&article=jfs) **choose your filesystem**



**Securing your Suse** [**http://www.antionline.com/showthread.php?s=&amp;threadid=260361**](http://www.antionline.com/showthread.php?s=&threadid=260361)   
 

## <font face="Arial Black" size="4">Conclusions

### G**ood**

- The desktop is user friendly, at least for me, for example: saving some of these screenshot, under the save as windows, right clicking provide a menu to create, sorting or add directory.
- The responsiveness of GUI is good if you consider that the 3D and all 2D tricks are maybe not supported by the driver. Of course this depend a lot of your graphics cards. Trying to start XP on a integrated graphic VXX chipset with shared memory is the same (was using a IBX notebook 2 years before switching to a Compaq NX7000 with a Radeon 9200…).
- It a quite good to have the possibilities to reuse some win32 librairies (codecs) because they are stable and working. A bravo to the open source community!
- I have done many online security update with YaST, and have not restart the machine, which is very good, on the other side, there is even more update than in Microsoft world…
- Till now I have encounter no real difficulties, I must admit that [www.google.com](http://www.google.com/) is a must, and so fast for locating a solution (on forums, tutorials, howto, personal webpage….) as long as you use the right keywords. If you are already a good user of Windows, you will have no problem to switch to SUSE 9.0 **TRUST me and make a try!**

### Bad

- Having many rpm version for each distribution (even if you are on the same cpu plattform) or sometimes compile from the source code is the worst experience for me in linux. Only solution is to pray that someone or better SuSE provide you all rpm on a internet site (but you will always have to wait).
- Suse do not provide for legal reasons enough packages (better said packages that are a must), but it is not diffcult to locate them on other homepage (libcss for decrypting dvd for example)
- Installing basics fucntionnality ask by 80% of users are still too difficult

Why #Linux is not at the same level as Windows? my point of view is that people on the others side do their best to avoid porting of drivers and application from 3rd party company (and may be using economical threat to achieve this aim).

## <font face="Arial Black" size="4">Links with reference to this article 

http://www.osnews.com/comment.php?news_id=5769 Page created with Mozilla

## **When you finish this article, You may want to read the previous** [**round 1 HERE** ](images/pc/suse/myExperience.htm)

**Thanks for reading… more to come in the future  
 This page is a part of** [**www.waltercedric.com**](http://www.waltercedric.com/) **homepage – Comments welcomed click** [**HERE**](comment.html)