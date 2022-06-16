---

title: 'How to stream media to your ps3'
date: '2007-05-27T12:02:04+02:00'
author: 'Cédric Walter'



header:
  teaser: /assets/images/2005/06/sony_playstation_ps3.jpg
---

![sony_playstation_ps3](/assets/images/2005/06/sony_playstation_ps3.jpg "sony_playstation_ps3")

 ![](/assets/images/2007/05/logo_ps3.jpg)With the latest PS3firmware 1.80 released on 24th May, it is now possible to enjoy streaming and turn the PS3 in areal media center hub. I am starting this howto for all people wanting to enjoy their MP3, pictures and video as fast as possible 🙂   
Sony Computer Entertainment Europe (SCEE) announced today availability of the latest version of the PLAYSTATION 3 (PS3) firmware. Version 1.80 features upscaling of PlayStation and PlayStation 2 games, and DVD movies up to full 1080p HD resolution when viewed on a compatible HD TV set.*The capability to upscale DVDs to HD quality is a feature normally only associated with top range DVD players, and its inclusion in the latest firmware upgrade now allows PS3 owners with an existing DVD collection to dramatically enhance the viewing pleasure of their DVD collection when viewed through a compatible HD TV set1. Not only can DVD movies be enhanced to full 1080p HD quality but so too will PlayStation 2 and PlayStation games be upscaled to provide much improved gaming pleasure.  
In a comprehensive update to PS3’s already impressive capabilities, Version 1.80 also allows users to enjoy Remote Play on their PSP across the internet, allowing them to access their PS3 anywhere in the world where a broadband internet connection is available2.  
Version 1.80 also allows users on a home network to seamlessly view and play rich media content such as images, music and video on their PS3, that is stored on their DLNA3 enabled devices such as PCs and laptops elsewhere in the house, reinforcing PS3’s credentials as a home entertainment hub that truly deserves pride of place in the Living Room.  
A host of other enhancements include the ability to print photo images stored on PS3’s hard disk or inserted storage media to a selection of Epson printers.  
PS3 owners will be able to upgrade their PS3 with the latest Version 1.80 firmware from 24th May 2007.*

(From the press release)

### Why choosing a PS3 as a media center HUB?

- It has the <span style="font-weight: bold; color: #ff0000;">best blu-ray player till today,
- It is a game machine as added value
- You can stream data from any UPNP source (Mac, Linux, Windows, embeded network disk)
- I is upscaling DVD, game like no hardware scaler on the market
- You can boot linux
- It require no particular/proprietary peripherals (bluetooth)

[AVS forums review concerning the quality of the blu-ray player](http://www.avsforum.com/avs-vb/showthread.php?p=10618271#post10618271)  
 Excellent/Amazing 1080p upscaling of DVDs

- For those with 720p only sets it now does 720P downscaling for BD along with upscaling for DVD
- 1080p24 support (film is native 24 fps, no more 3:2 pulldown)
- Blacker-than-Black (BTB) and Whiter-than-White (WTW) support with (full range/limited) the BTB has been confirmed by DVE
- HQV DVD test and the PS3 1.80 firmware passes ALL tests!! Cadence, interlacing, artifacting, you name it, it passed!!!

###Why not choosing the Xbox360?

- Crippled with Digital Right management DRM
- Noisy so noisy
- Streaming only from and to Microsoft centric world
- Proprietary peripherals

  UPNP open source streaming protocol ?

 (from [WikiPedia)](http://en.wikipedia.org/wiki/Universal_Plug_and_Play)  
 UPnP technology is a distributed, open networking architecture that employs TCP/IP and other Internet technologies to enable seamless proximity networking, in addition to control and data transfer among networked devices in the home, office, and public spaces. The UPnP architecture allows peer-to-peer networking of PCs, networked appliances, and wireless devices. It is a distributed, open architecture based on TCP/IP, UDP and HTTP.  
 UPnP enables communication between any two devices under the command of any control device on the network (LAN). Among its features are:

- Media and device independence. UPnP technology can run on many media including phone lines, power lines (PLC), Ethernet, IR (IrDA), RF (Wi-Fi, Bluetooth), and FireWire. No device drivers are used; common protocols are used instead.
- User interface (UI) Control. UPnP architecture enables vendor control over device user interface and interaction using the web browser.
- Operating system and programming language independence. Any operating system and any programming language can be used to build UPnP products. UPnP does not specify or constrain the design of an API for applications running on control points; OS vendors may create APIs that suit their customer’s needs. UPnP enables vendor control over device UI and interaction using the browser as well as conventional application programmatic control.
- Internet-based technologies. UPnP technology is built upon IP, TCP, UDP, HTTP, and XML, among others.
- Programmatic control. UPnP architecture also enables conventional application programmatic control.
- Extensibility. Each UPnP product can have device-specific services layered on top of the basic architecture.

 The UPnP architecture supports zero-configuration, “invisible networking” and automatic discovery for many device categories from a range of vendors; any device can dynamically join a network, obtain an IP address, announce its name, convey its capabilities upon request, and learn about the presence and capabilities of other devices. DHCP and DNS servers are optional and are only used if they are available on the network. Devices can leave the network automatically without leaving any unwanted state information behind.  
 from [WikiPedia](http://en.wikipedia.org/wiki/Universal_Plug_and_Play)

 The Sony PS3 is registering as a UPNP client client as soon as it will be connected to the network

- [Intel references](http://www.intel.com/cd/ids/developer/asmo-na/eng/downloads/upnp/index.htm)
- [UPNP forums (826 vendors)](http://www.upnp.org/)

| Attention: |
|---|
| The PS3 is either able to use Wireless or Ethernet but not both technology at the same time. Do not try to connect the PS3 to a router while the Wireless is active in the XMB workbench! |

 

- - - - - -

 &amp;title=Preparing your local network” />Preparing your local network You must check if your router has “UPnP enabled for automatic device configuration”. Connect to the router administrator panel http://192.168.1.1 (only for Netgear, consult the notice for the correct admin adress if you are unsure)

![](/assets/images/2007/05/upnp.enabled.netgear.admin_.gif)

 Here my PS3 is at 192.168.1.6

| <small>Turn UPnP On</small> | <small>Advertisement Period</small> |
|---|---|
| <small>UPnP can be enabled or disabled for automatic device configuration. The default setting for UPnP is disabled. If disabled, the router will not allow any device to automatically control the resources, such as port forwarding (mapping), of the router. </small> | <small>The Advertisement Period is how often the router will advertise (broadcast) its UPnP information. This value can range from 1 to 1440 minutes. The default period is for 30 minutes. Shorter durations will ensure that control points have current device status at the expense of additional network traffic. Longer durations may compromise the freshness of the device status but can significantly reduce network traffic.</small> |
| <small>Advertisement Time To Live</small> | <small>UPnP Portmap Table</small> |
| <small>The time to live for the advertisement is measured in hops (steps) for each UPnP packet sent. A hop is the number of steps allowed to propagate for each UPnP advertisement before it disappears. The number of hops can range from 1 to 255. The default value for the advertisement time to live is 4 hops, which should be fine for most home networks. If you notice that some devices are not being updated or reached correctly, then it may be necessary to increase this value a little.</small> | <small>The UPnP Portmap Table displays the IP address of each UPnP device that is currently accessing the router and which ports (Internal and External) that device has opened. The UPnP Portmap Table also displays what type of port is opened and if that port is still active for each IP address.</small> |

 

- - - - - -

 &amp;title=Installing a UPNP server” />Installing a UPNP server The challenge is now to find a server UPNP implementation for your operating system.  
![](/assets/images/2007/05/linux.jpg)![](/assets/images/2007/05/MacLogo.jpg)![](/assets/images/2007/05/windowsVista.png) 

| [TwonkyVision](http://www.twonkyvision.com/) |  |
|---|---|
| ![](/assets/images/2007/05/twonkyMedia.upnp_.server.jpg) | - Web based, simple GUI, - Powerful and intuitive - Ligthweight (4kb of memory) - [Shipped with some NAS/appliance](http://www.twonkyvision.com/Products/TwonkyMedia/nas.html) - Possibility to convert video file on the fly (transcoding) with VideoLan VLC - Not free 29euro - [Active Forums](http://www.twonkyvision.de/forum/index.php)  Attention:    You MUST install 4.4 beta 2 at least or the PS3 wont find the mediaserver.[ Download HERE](http://www.twonkyvision.com/Download/TwonkyMedia/index-4-4.html) |
| <http://tversity.com> | TVersity with the latest PS3 patch (0.9.10.2), - Free - You can transcode XVID,WMV, OGM, DIVX - You can play itunes music and RealMedia - |

 ![](/assets/images/2007/05/MacLogo.jpg)![](/assets/images/2007/05/windowsVista.png)

| [Philips Media Manager](http://misc.philips.com/streamium/us/streamium_pmm_download.html) |  |
|---|---|
| ![](/assets/images/2007/05/PhilipsMediaManager.jpg) | - Free - 27Mb - Easy assistant to share file - Windows look and feel |

 

 

- - - - - -

 Windows only&amp;title=Windows only” />Windows only ![](/assets/images/2007/05/windowsVista.png)

|Windows Media Player 11 | Not recommended as it install a hell of DRM, links, zune or napster shops. While a normal user wont see it, it is more than innaceptable. You say do not assign Media player to your media, but it do it anyway. Clippled graphical user interface. it do not play all kind of exotic format, but download missing codecs (and even after some file do not work)    Install it only if you want to view video on your PC, but you may be better served with [Videolan (VLC)](http://www.videolan.org/) as it open nearly anything and do to support DRM.  1. Download and install Windows Media Player 11    2. Click on the Library tab     3. On the left you’ll see a tree structure. Right click on Library in the tree structure.     4. Click Media Sharing     5. Enable your options, what folders, devices, etc.     6. When your PS3 turns on and scans, Windows will pop up and ask if it’s ok to allow the device. Allow it.    |
|---|---|
|Windows Media Connect (Now ZUNE connect) | Not recommended as it install a hell of DRM, links, zune or napster shops. While a normal user wont see it, it is more than innaceptable. You say do not assign Media player to your media, but it do it anyway. Clippled graphical user interface. Install it only if you want to view video on your PC, but you may be better served with [Winamp ](http://www.winamp.com/) 1. Click on the Library tab     2. On the left you’ll see a tree structure. Right click on Library in the tree structure.     3. Click Media Sharing     4. Enable your options, what folders, devices, etc.     5. When your PS3 turns on and scans, Windows will pop up and ask if it’s ok to allow the device. Allow it.    |
|Windows Vista | Has a native UPNP server, switch the PS3 on, try to locate the PS3 in the network range and start sharing drive like you are use to. |
| [On2Share Pro ](http://www.on2trade.de/) |  |
| ![](/assets/images/2007/05/on2Share.jpg) | [On2Share Pro ](http://www.on2trade.de/) is an UPnP enabling suite for your favourite Media Player. With On2Share comes the On2Share UPnP AV Media Server, Renderer and control point. With On2Share Pro you can share your Windows Media Player and Winamp playlists or local media folders to UPnP devices in your local network. On2Share also integrates an UPnP control point, so you can access other UPnP Media Servers in your local network. You will find the shared playlists in the Windows Media Player, Windows Media Center or Winamp Media Library. Internet Streaming addresses in your WMP or Winamp Library are shared, too. Version 4.3 supports Windows Media Center and is Windows Vista compatible.  I do not like their GUI colors and capabilities but it work |

   
 

- - - - - -

 &amp;title=Results” />Results ![](/assets/images/2007/05/streaming.to_.ps3_.result.jpg) 2 UPNP server found

![](/assets/images/2007/05/streaming.to_.ps3_.result-1.jpg) mp3 albums fund  
![](/assets/images/2007/05/streaming.to_.ps3_.result-2.jpg) pictures browsing

  
   
  

