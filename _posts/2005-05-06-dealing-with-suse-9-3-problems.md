---
id: 1709
title: 'Dealing with Suse 9.3 problems'
date: '2005-05-06T21:07:11+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=1709'
permalink: /linux/dealing-with-suse-9-3-problems/
tags:
- OpenSuse
---

I’ve installed SuSE 9.3 on a Notebook HP Nx7000 and a AMD desktop without any major difficulties except the fact that
for some legal reasons, Novel has removed the ability of SuSe to play out the box any Divx, Xvid, mp3. In fact If You
have a acess to internet, the online update tool may resolve some of these issues (You will have to download what Novel
call “Multimedia pack” ). After using 2 years long SuSE 9.0, 9.1, 9.2 and now 9.3 I found pathetic that I still need to
remove this crappy noatun, kaffeine and xine because they simply do not work as good as Mplayer or even better
Videolan (VLC). Note that both Videolan, or VLC **can not** be install through YaST, and I think that it is really a big
mistake.  
So let repair this by:

- **Installing APT-GET packaging system** (a lot simpler than YaST as It deal with package conflicts!!!)
  , [First read this page](http://linux01.gwdg.de/apt4rpm/home.html), then If You are interested read on 🙂
- **Decode encrypted DVD under Suse 9.3**
- **Install Videolan (VLC), the best multiplattform video player**

Before deciding to buy it, download
it ([FTP source are here](http://www.novell.com/products/linuxprofessional/downloads/)), or starting Your favorite
Bittorent client, You can

- Have a look
  at [Oâ&#128;&#153;Reillyâ&#128;&#153;s OSDir screenshots Suse 9.3](http://shots.osdir.com/slideshows/slideshow.php?release=322&slide=8&title=suse+linux+9.3+screenshots) (
  94 sreenshots)
- Read **some reviews**:
    - Mad Penguin, [one of the most complete review](http://madpenguin.org/cms/?m=show&id=3851)
    - Linux magazine has a online
      PDF: [Suse 9.3 Professional – the latest Suse comes with new software, lots of improved Yast modules, and some other significant change \[PDF, 287 kB\]](https://www.linux-magazine.com/issue/55/Suse_Linux_93_Review.pdf)
    - [QuebecOS](http://www.quebecos.com/modules/sections/index.php?op=viewarticle&artid=11&page=4) (French)
      â&#128;¢ [Tux Journal](http://www.tuxjournal.net/susePRO.html) (Italian)
      â&#128;¢ [eWEEK](http://www.eweek.com/article2/0,1759,1790700,00.asp)
      â&#128;¢ [Pro-Linux](http://www.pro-linux.de/berichte/suse93.html) (German)
      â&#128;¢ [The Inquirer](http://www.theinquirer.net/?article=22756)
      â&#128;¢ [Cool Solutions](http://www.novell.com/coolsolutions/feature/14691.html)
      â&#128;¢ [USA LUG](http://usalug.org/phpBB2/viewtopic.php?t=6399)
      â&#128;¢ [linux-noob](http://www.linux-noob.com/review/index.html)
      â&#128;¢ [Geektime #Linux](http://www.geektimelinux.com/index.php?q=node/view/189)
      â&#128;¢ [James’ Blog](http://rubberturnip.org.uk/cgi-bin/blog/2005/03/26#1111847282suse_9_3_professional)
      â&#128;¢ [Cool Solutions](http://www.novell.com/coolsolutions/feature/11878.html)

<span style="font-size: large;"> **Installing APT-GET packaging system** (a lot simpler than YaST as It deal with package conflicts!!!), [First read this page](http://linux01.gwdg.de/apt4rpm/home.html), then If You are interested read on 🙂

1. create a directory ex: /home/elta68/install/aptget
2. Download all Apt-get rpm for
   Suse [ftp://ftp.gwdg.de/pub/linux/suse/apt/SuSE/9.3-i386/RPMS.suser-rbos](ftp://ftp.gwdg.de/pub/linux/suse/apt/SuSE/9.3-i386/RPMS.suser-rbos)
   , but 2 library are missing in this directory, so grab them
   here: [perl-XML-LibXML.rpm](http://mirrors.mathematik.uni-bielefeld.de/pub/linux/suse/apt/SuSE/9.3-i386/RPMS.base/perl-XML-LibXML-1.58-3.i586.rpm)
   and [perl-XML-LibXML-common.rpm](http://mirrors.mathematik.uni-bielefeld.de/pub/linux/suse/apt/SuSE/9.3-i386/RPMS.base/perl-XML-LibXML-Common-0.13-4.i586.rpm)
3. As root, (the best way is to open a terminal, type ‘*su*‘), go to that directory *cd /home/elta68/install/aptget* and
   type *rpm -ivh \*.rpm* or use YaST to install all rpm (13) one after the other…
4. Create a link (named Synaptic for example) on the desktop (right click, create New link to application), in the tab *
   application*, under Command, type *sux -c /usr/sbin/synaptic* or open a terminal and type: *sux -c
   /usr/sbin/synaptic*
5. Instead of using YaST, You can now use Synaptic (a graphical frontend for apt-get) to install, keep up to date or
   remove package s or If You prefer command line, type *apt-get install packagename* example: *apt-get install MPlayer*

# <span style="font-size: large;">Decode encrypted DVD under Suse 9.3**

1. You need to install libdvdcss for reading encrypted DVD, I found on that page, a nice HowTo with a lot of
   screenshots [http://www.saunalahti.fi/~pirisisi/tips/Linux/dvdplay/](http://www.saunalahti.fi/~pirisisi/tips/Linux/dvdplay/)

# <span style="font-size: large;">Install VLC**

- VideoLAN is a highly portable multimedia player for various audio and video formats (MPEG-1, MPEG-2, MPEG-4, DivX,
  mp3, ogg, …) as well as DVDs, VCDs, and various streaming protocols. It can also be used as a server to stream in
  unicast or multicast in IPv4 or IPv6 on a high-bandwidth network.
- Install using YaST the following libraries:

1. first libdvdcss (see **Decode encrypted DVD under Suse 9.3**),
2. then using YaST: search for libxosd,
3. then using YaST: search for db1
4. You Can install VLC by using:
    1. **Apt-get:** start synaptic (*sux -c /usr/sbin/synaptic*) then search for VLC (CTRL-F type VLC enter), right
       click on the package, and click on button apply
    2. **Downloading manually** all required rpm at [Packman](http://packman.links2linux.de/?action=377) in a directory,
       the use Yast to install each RPM (clik on each one in konqueror) or using the terminal: *rpm -i \*.rpm*

<span style="font-size: large;"> **Install Mplayer**  
# the** open source player for all video format 

- If You prefer Mplayer, as always, go to [PackMan website](http://packman.links2linux.de/) and install all RPM found in
  that [page](http://packman.links2linux.de/?action=128)

# <span style="font-size: large;">Access to my external USB disk are slow …**

This is because of the way SuSe mount dynamically Reiserf. Your disk is continually trying to synchronize with the
journal. You can recover the performance loss by mounting the disk manually instead of letting Dbus do it for You. It is
just anoying…

<span style="font-size: large;">**Beagles**  
a desktop search tool…

Simply refuse to work out the box. It is even not installed as default when You install Your system!!! Adding it with
Yast do not mean that it will work either… I have install another (not open source) alternative :  
x-friend’s  (0.2.1 beta) search functionality includes full text search (using apache Lucene) and meta data search.
Search results will be displayed within seconds and can be categorized by file type, date, size etc. Additionally,
x-friend searches the internet, product catalogues, internet news (RSS-feeds), emails and other search services