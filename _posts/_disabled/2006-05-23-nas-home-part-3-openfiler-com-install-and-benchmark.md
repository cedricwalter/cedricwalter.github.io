---
id: 2616
title: 'NAS @ HOME part 3 openfiler.com install and benchmark'
date: '2006-05-23T23:19:58+02:00'
author: 'Cédric Walter'



header:
  teaser: /assets/images/2006/05/raid.gif
tags:
    - 'PC and Hardware'
    - Storage
---

![RAID @ home raid5](/assets/images/2006/05/raid.gif)<span style="color: rgb(153, 153, 255);"><big style="font-family: Times New Roman,Times,serif;"><span style="color: rgb(153, 153, 255);">Presentation  
 </big> **Openfiler** is a powerful, intuitive browser-based network storage software distribution. Openfiler delivers file-based Network Attached Storage and block-based Storage Area Networking in a single framework.

Openfiler sits atop of CentOS #Linux (which is derived from sources freely provided to the public by a prominent North American Enterprise #Linux vendor). It is distributed as a stand-alone #Linux distribution. The entire software stack interfaces with third-party software that is all open source.

<big style="font-family: Times New Roman,Times,serif;"><span style="color: rgb(153, 153, 255);"></big> Status: stable, in development  
\# Developers: \_\_  
 

| homepage | [www.openfiler.com](http://www.freenas.org/) |
|---|---|
| version | 1.1.1 stable (2005)    2.0beta (2006) |
| Based on | [CentOS Linux](http://www.centos.org/) |
| Support | - NFS, - SMB/CIFS, - HTTP/WebDAV - FTP - [more](http://www.openfiler.com/about/) |
| Network directories support | - NIS, LDAP (with support for SMB/CIFS encrypted passwords) - Active Directory - Hesiod - Kerberos 5. - [more](http://www.openfiler.com/about/) |
| Software Raid | 0,1,5,6 |
| Hardware Raid | yes if supported by [CentOS](http://www.centos.org/) |
| Interface | Web interface, PHP scripts |
| Size | 4GB |
| Can be installed | On hard disk only because of its size |
| File system | UFS, FAT32, EXT2/EXT3, NTFS (limited read-only) |
| HardDrive | ATA/SATA, SCSI, USB and Firewire |
| Network | All supported by [CentOS](http://www.centos.org/) (including wireless card!) |

   
<span style="font-family: Times New Roman,Times,serif;"><big style="font-family: Times New Roman,Times,serif;"><span style="color: rgb(153, 153, 255);"></big><span style="color: rgb(153, 153, 255);"><big style="font-family: Times New Roman,Times,serif;"><span style="color: rgb(153, 153, 255);"></big><span style="color: rgb(153, 153, 255);">![RAID @ home raid5](/assets/images/2006/05/raid.gif)<span style="color: rgb(153, 153, 255);"><big style="font-family: Times New Roman,Times,serif;"><span style="color: rgb(153, 153, 255);">Installation</big>

 Is straightforward, You only have to follow the flow on screen. But here is a small HowTo:

![RAID @ home raid5](/assets/images/2006/05/raid.gif)<span style="color: rgb(153, 153, 255);"><big style="font-family: Times New Roman,Times,serif;"><span style="color: rgb(153, 153, 255);">HowTo: software RAID 5 install</big>

 What I want: software RAID 5, 4 disk of 320GB (real 305GB), using NVIDIA SATA chipset (not a dedicated RAID5 board).

 <small>Note: these pictures are not screenshots but picture taken with a sony camera…</small>

| <http://www.openfiler.com/download> | [![](/assets/images/2006/05/tn_NAS-at-home-openfiler-install01.jpg)](/assets/images/2006/05/NAS-at-home-openfiler-install01.jpg) |
|---|---|
| Download iso image from sourceforge and burn it to a CD | Insert CD, and boot the PC |
| [![](/assets/images/2006/05/tn_NAS-at-home-openfiler-install02.jpg)](/assets/images/2006/05/NAS-at-home-openfiler-install02.jpg) | [![](/assets/images/2006/05/tn_NAS-at-home-openfiler-install03.jpg)](/assets/images/2006/05/NAS-at-home-openfiler-install03.jpg) |
| The first step is to TEST the quality of the medium. | Openfiler did not recognize the NVIDIA controller. |
| [![](/assets/images/2006/05/tn_NAS-at-home-openfiler-install04.jpg)](/assets/images/2006/05/NAS-at-home-openfiler-install04.jpg) | [![](/assets/images/2006/05/tn_NAS-at-home-openfiler-install05.jpg)](/assets/images/2006/05/NAS-at-home-openfiler-install05.jpg) |
| choose "Add device" | NVIDIA drivers (both Ethernet and drive controller) are at the end of the list. |
| [![](/assets/images/2006/05/tn_NAS-at-home-openfiler-install06.jpg)](/assets/images/2006/05/NAS-at-home-openfiler-install06.jpg) | [![](/assets/images/2006/05/tn_NAS-at-home-openfiler-install07.jpg)](/assets/images/2006/05/NAS-at-home-openfiler-install07.jpg) |
| I’ve add both drivers manually. Then "Done" | The welcome page. click "Next" |
| [![](/assets/images/2006/05/tn_NAS-at-home-openfiler-install08.jpg)](/assets/images/2006/05/NAS-at-home-openfiler-install08.jpg) | [![](/assets/images/2006/05/tn_NAS-at-home-openfiler-install09.jpg)](/assets/images/2006/05/NAS-at-home-openfiler-install09.jpg) |
| Choose Keyboard language. | I am not a novice, so let’s look at the advanced configuration. |
| [![](/assets/images/2006/05/tn_NAS-at-home-openfiler-install10.jpg)](/assets/images/2006/05/NAS-at-home-openfiler-install10.jpg) | [![](/assets/images/2006/05/tn_NAS-at-home-openfiler-install11.jpg)](/assets/images/2006/05/NAS-at-home-openfiler-install11.jpg) |
| The 4 disks are recognized. First I add some space for the Operating System. | If You do not want to have a fifth disk just for the operating system, You’ll have to reserve a small amount of the global space for the Openfiler system. Note: this space will be located on the first disk and wont be in the raid array…so no redundancy.     Anyway it is uncommon to install the RAID engine on the RAID array itself.    Lets have 2GB for System. |
| [![](/assets/images/2006/05/tn_NAS-at-home-openfiler-install12.jpg)](/assets/images/2006/05/NAS-at-home-openfiler-install12.jpg) | [![](/assets/images/2006/05/tn_NAS-at-home-openfiler-install13.jpg)](/assets/images/2006/05/NAS-at-home-openfiler-install13.jpg) |
| And 1 GB for SWAP | Then I click on th button RAID, since I have no RAID predefined only the first choice is available: "Create a RAID partition" |
| [![](/assets/images/2006/05/tn_NAS-at-home-openfiler-install14.jpg)](/assets/images/2006/05/NAS-at-home-openfiler-install14.jpg) | [![](/assets/images/2006/05/tn_NAS-at-home-openfiler-install15.jpg)](/assets/images/2006/05/NAS-at-home-openfiler-install15.jpg) |
| I will have to create a RAID partition for each of the 4 drives, I reserved 300GB for disk SDB | 300GB for disk SDC, for Disk SDA |
| [![](/assets/images/2006/05/tn_NAS-at-home-openfiler-install16.jpg)](/assets/images/2006/05/NAS-at-home-openfiler-install16.jpg) | [![](/assets/images/2006/05/tn_NAS-at-home-openfiler-install17.jpg)](/assets/images/2006/05/NAS-at-home-openfiler-install17.jpg) |
| and for disk SDD…till all 4 disks contains a RAID partition. | I click on the RAID button for the 5th times: and choose"create a RAID device" |
| [![](/assets/images/2006/05/tn_NAS-at-home-openfiler-install18.jpg)](/assets/images/2006/05/NAS-at-home-openfiler-install18.jpg) | [![](/assets/images/2006/05/tn_NAS-at-home-openfiler-install19.jpg)](/assets/images/2006/05/NAS-at-home-openfiler-install19.jpg) |
| My disk array will be named /RAID (mount point), Raid level 5 | Result, a /RAID (device /dev/md0) with an EXT3 file system. |
| [![](/assets/images/2006/05/tn_NAS-at-home-openfiler-install20.jpg)](/assets/images/2006/05/NAS-at-home-openfiler-install20.jpg) | [![](/assets/images/2006/05/tn_NAS-at-home-openfiler-install21.jpg)](/assets/images/2006/05/NAS-at-home-openfiler-install21.jpg) |
| Nothing particular, default values are good | Language support: English |
| [![](/assets/images/2006/05/tn_NAS-at-home-openfiler-install22.jpg)](/assets/images/2006/05/NAS-at-home-openfiler-install22.jpg) | [![](/assets/images/2006/05/tn_NAS-at-home-openfiler-install23.jpg)](/assets/images/2006/05/NAS-at-home-openfiler-install23.jpg) |
| Choose TimeZone | Enter a good Root password. Mine s too small but it is only a prototype for determining performances and reliability of the setup. |
| [![](/assets/images/2006/05/tn_NAS-at-home-openfiler-install24.jpg)](/assets/images/2006/05/NAS-at-home-openfiler-install24.jpg) | [![](/assets/images/2006/05/tn_NAS-at-home-openfiler-install25.jpg)](/assets/images/2006/05/NAS-at-home-openfiler-install25.jpg) |
| Confirm all values entered by clicking Next | wait till the raid array initialization |
| [![](/assets/images/2006/05/tn_NAS-at-home-openfiler-install26.jpg)](/assets/images/2006/05/NAS-at-home-openfiler-install26.jpg) |  |
| CD get ejected, and reboot. | Point your browser to https://box\_ip:446/    And administer remotely the box |

 If all my explanations are not clear enough, or You want more details, visit the [official installation page](http://www.openfiler.com/docs/install/)

![RAID @ home raid5](/assets/images/2006/05/raid.gif)<span style="color: rgb(153, 153, 255);"><big style="font-family: Times New Roman,Times,serif;"><span style="color: rgb(153, 153, 255);">HowTo: hardware RAID 5 install</big>

 in progress…

![RAID @ home raid5](/assets/images/2006/05/raid.gif)<span style="color: rgb(153, 153, 255);"><big style="font-family: Times New Roman,Times,serif;"><span style="color: rgb(153, 153, 255);">Administration</big>

 Check [Openfiler Administration 
 ](http://www.openfiler.com/docs/manual/) point your browser to https://box\_ip:446/

![RAID @ home raid5](/assets/images/2006/05/raid.gif)<span style="color: rgb(153, 153, 255);"><big style="font-family: Times New Roman,Times,serif;"><span style="color: rgb(153, 153, 255);">Problems encountered</big>

|OpenFiler 1.1 | 2.0beta1 | 2.0beta2 |
|---|---|---|
| - The SATA controller was not recognized, this force me to use the 2.0Beta. | - Unable to read or mount manually 2 different USB keys (FAT32), also unable to read CDROM (closed ISO and CDRW)  - The network card (NFORCE 4 ) was not recognized by Openfiler 2.0Beta, I fail to copy the NVIDIA driver on the box because of point 2. | - Is working perfectly, did not ask for any supplemental drivers |

  
<span style="color: rgb(255, 0, 0);">![RAID @ home raid5](/assets/images/2006/05/raid.gif) <span style="color: rgb(153, 153, 255);"><big style="font-family: Times New Roman,Times,serif;"><span style="color: rgb(153, 153, 255);">Web Interface GUI</big>  
 <small>  
 [<big>Screenshots</big>](http://www.openfiler.com/screenshots/)  
   
 </small>![RAID @ home raid5](/assets/images/2006/05/raid.gif) <span style="color: rgb(153, 153, 255);"> <big style="color: rgb(153, 153, 255);"><span style="font-weight: bold; font-family: Times New Roman,Times,serif;">Performances Tests</big>  
 <small>  
 </small>in progress

![RAID @ home raid5](/assets/images/2006/05/raid.gif)<span style="color: rgb(153, 153, 255);"><big style="font-family: Times New Roman,Times,serif;"><span style="color: rgb(153, 153, 255);">Conclusions</big>

| <small>Why choosing it</small> | <small>Why avoiding it</small> |
|---|---|
| <small>Enterprise NAS features out of the box</small> | <small>You do not need enterprise NAS features</small> |
| <small>Very nice WEB GUI</small> | <small>4GB is too much and need an additional small disk only for starting the OS</small> |
| <small>A lot of [functionalities](http://www.openfiler.com/about/)    </small> | <small>Limited choice of file system:     </small>- <small>no Reiserfs, the swiss knife of all filesystem.</small> - <small>no JFS, XFS more adapted for big files</small> |
| <small>A big communities of users and developers, good online documentation.    </small> | <small>No AMD64 version, but it’s really not an issue.</small> |
| <small>Very easy to have a software RAID5 arrays setup working.</small> |  |
| <small>Stable, Linux 2.6.9 kernel base.</small> |  |
| <small>GPL but an Enterprise version (with support) is also available.</small> |  |

 <small>  
 </small>