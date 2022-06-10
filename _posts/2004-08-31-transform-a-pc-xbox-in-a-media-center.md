---
id: 621
title: 'Transform a PC Xbox in a media center'
date: '2004-08-31T23:37:51+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=621'
permalink: /gadget/transform-a-pc-xbox-in-a-media-center/
header:
  teaser: /assets/images/2004/08/geexbox-logo.gif
tags:
    - configurable
    - development
---

# Purpose**

Bring all kind of multimedia format to your home Cinema or TV by connecting your pc onto it.

# Requirements**

- A modern Media center has to play at least the following format:

> MPEG 1 and 2 movies (MPEG files, VCDs, DVDs …)  
> MPEG 4 movies (DivX, XviD …)  
> RealMedia and Windows Media movies (WMV and WM9).  
> OggMedia streams (open source format)  
> Audio streams like : MP3, Ogg/Vorbis, WAV (AudioCD), AC3 …

- Using a remote controller and easy navigation menu, no keyboard is needed except for internet navigation
- Reading media from CD/DVD or better a local hardisk (inside the pc) and even better from a remote PC that act as a storage server (with a lot of disk)

# Plattform**

If it is a PC, you can use:

- An old pentium class notebook, (can be bought in some shop for 200â?¬)
- A Mini-ITX VIA Epia/Eden (below 200â?¬)
- Build a Shuttle barebones (Mini-ATX).
- Use a very old PC you are no more using. (they are only big and sometimes noisy)

Otherwise a modified XBOX (300â?¬ because of IR kit + modchips) can be an ellegant alternative, not so much noise, small.

# Some links**

I recommend You to try the first 2 of this list, personnaly I will try now the Xbox media center solution.

| [![](/assets/images/2004/08/geexbox-logo.gif)](http://www.geexbox.org/) | - Based on #Linux - Based on mplayer one of the best multimedia player on linux (aside XINE) - Very small (4 Mb as today) and highly configurable ISO (you can create it yourself with a tool) - Require a pentium 400Mhz - IR controller must be [LIRC](images/pc/mediacenter/www.lirc.org) compatible (nearly all TV card like MIRO) - In development but already usable  **If You see no share drive, enter in debug mode by pressing "d" (quickly at startup) then "ebug"** *\# smbtree -N* display all samba drive found on network   if it is blank:   – verify that you ethernet card is recognized (not the case with my pcmcia ethernet on a IBM T23 but internal ethernet was recognized)   **How to mount a share by name**   *\# mkdir /mnt/video*   *\# smbmount //computerName/\_movies /mnt/Video -o username=XXXXX,password=YYYYYY*    if it is working then you must modify the file init and add the above line….use the generator and burn a new CD  **I recommend this mod, if you want to use a old PC** | 0.9.6 |
|---|---|---|
| ![](/assets/images/2004/08/xb04.gif)   <http://www.xboxmediacenter.com/> | "*XboxMediaCenter is a free open source (GPL) multimedia player for the Xbox™ from Microsoft. (XboxMediaCenter is also known as "Xbox Media Center" or simply "XBMC"). Currently the XboxMediaCenter can be used to play and view supported video/audio/picture formats such as MPEG-1/2, DivX, XVID, MP3, JPG and more direct from a CD/DVD in the Xbox™ DVD-ROM or of the Xbox™ hard disk drive, it can also play files from a PC over a LAN / network via an XNS (XStream Server) software or from a windows (SMB) share. It has playlist and slideshow. These features enable the Xbox™ running XboxMediaCenter to fully function as a multi-media jukebox.   Note! XBMC is a hobby project that is only developed by volunteers in their spare-time for free.   (Remember XboxMediaCenter does require a Xbox mod-chip installed in the Xbox™ to work).*" from <http://www.xboxmediacenter.com/>- Only source code is provided, since the SDK of Microsoft is not open source (but open sourrce community is creating one call XDK), You will have to compile it yourself, or better search for it on P2P network (eDonkey, eMule…) - Support already all components, remote controller, and network adapter, video chipset. - You need to modify your XBOX with a chip (void garanty), a bigger harddisk or a remote server accessible with Samba is recommended. - Links for News: [http://www.mediaxbox.com](http://www.mediaxbox.com/) and Hardware mods/upgrades: <http://xbox.upgrade123.com/index.php> - [http://www.xboxmediaplayer.de/info\_project.htm](http://www.xboxmediaplayer.de/info_project.htm) respond to the question: "what are the features?"  **I Have choose this solution, [**look HERE**](images/pc/xbox/mediaplayer/convertXboxMediaCenter.htm) **to see my experience** |  |
|  | Microsoft has planned to sell an addon for the Xbox, which may allow the Xbox to connect to a media center pc (only). I must say quite an expensive setup and with a lot of security, and license lock as usual.. |  |
| ![](/assets/images/2004/08/logo.gif)   <http://movix.sourceforge.net/> | :MoviX is a small #Linux distro that transforms your PC in a powerful multimedia box. After booting your PC with MoviX, a user-friendly console menu will allow you to use MPlayer to play any DVD/VCD, video/audio files (most noticeably DivX, AVI, MPEG, QuickTime, WMV, ASF, MP3, and OGG/VORBIS), TV (provided you have a TV card), and radio stations on the Internet (if you are connected to a LAN). Since the entire operating system is loaded into RAM, you do not even need a hard disk to use MoviX.   . |  |
| <http://freevo.sourceforge.net/> | *"Freevo is an open-source home theatre PC platform based on #Linux and a number of open-source audio/video tools. MPlayer and/or Xine can be used to play audio and video files in most popular formats. Freevo can be used both for a standalone PVR computer with a TV+remote, as well as on a regular desktop computer using the monitor and keyboard.    Freevo is easy to download and install for new users. Most hardware is supported (graphic boards, sound cards and video capture devices).    The Freevo core is under heavy development. It is mostly written in the Python programming language which is very well suited for high-level control applications like Freevo."* |  |