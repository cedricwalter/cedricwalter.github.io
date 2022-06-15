---

title: 'Installing a neo geo emulator under linux'
date: '2005-08-03T22:49:58+02:00'
author: 'Cédric Walter'



header:
  teaser: /assets/images/2005/08/Neo-Geo-AES-Console-Set.png
tags:
    - arcade
    - Collectibles
    - emulator
    - games
    - linux
    - neogeo
    - OpenSuse
    - snk
    - 'SNK Neo Geo'
    - Technical
    - vintage
    - vintagegaming
---

[GnGeo](http://m.peponas.free.fr/gngeo/) is a NeoGeo emulator for #Linux (and maybe some other UNIX).  
It use the following cpu core:

- The 68k core from the Generator project by James Ponder.
- Starscream 680×0 emulation library by Neill Corlett.
- Raze Z80 emulator by Richard Mitton.
- Z80 Mame core from the Mame project.
- YM2610 Mame core by Tatsuyuki Satoh.

Finding the rpm for SuSe 9.3 is quite easy if You know <http://rpm.pbone.net> The GnGeo specific page [is here](http://rpm.pbone.net/index.php3/stat/4/idpl/2055456/com/gngeo-0.6.5-2.beta.i586.rpm.html).

You need to unzip the NeoGeo romset in /usr/share/gngeo in order to make it work. You will have to google a little bit, search for “neogeo bios rom” or download them at [Spooman homepage](http://spoonman.roarvgm.com/neogeo/neo-geo_emulation.htm) or use emule (P2P).  
Copy NEO-GEO.ROM, ng-lo.rom, ng-sfix.rom and ng-sm1.rom to /usr/share/gngeo as root.

GnGeo 0.6.5.2 now has an experimental gui. You will find a menu entry in KDE/System/GnGeo.  
Please see the /usr/share/doc/packages/gngeo/sample\_gngeorc for more information on how to use NeoRageX style Hotkeys.