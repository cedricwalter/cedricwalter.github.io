---

title: 'Good security but human errors may break it'
date: '2006-01-06T09:49:55+01:00'
author: 'Cédric Walter'



---

From <http://www.bunniestudios.com/wordpress/?p=74> the man wo break the first XBOX.

*At any rate, some very interesting things are afoot. Much of it stems from the discovery of an all-media bootable kiosk demo disk. Many hackers will instantly recognize the value of this, but itâ&#128;&#153;s still interesting to reflect on the significance of this find. Like the original Xbox, the Xbox360 uses a media flag on its executables.*

*The media flag tells the OS what type of media it should be on; typically, games are released with the flag set to Microsoftâ&#128;&#153;s proprietary secure Xbox DVD format (which is in itself not that secureâ&#128;¦). Significantly, only the executable is signed for a game; the data sections typically are not signed (presumably for performance reasons). Thus, one has the ability to fuzz the executable by corrupting the data sections, potentially invoking a buffer overrun or some other unintentional behaviorâ&#128;&#147;if one could effectively modify the data sections. Remember that this is normally not possible, since modifying the data segment requires making a copy to a writeable media, and this contradicts the signed media flag.*

*Thus, the run-anywhere demo disk now enables software hackers to create and test the interaction of signed executables with modified game data using no tool other than a DVD-RW drive (and an Xbox360 console, still considerably rare and difficult to obtain in the US). Some of the more interesting modifiable data regions include Shockwave Flash movies, and the pixel shaders executed by the GPU (more info can be found on the xboxhacker.net website). Of particular interest is the MEMEXPORT shader command in the 360, which could enable people to dump physical memory to the screen (where it can be digitized or extracted with a sniffer upstream of the ANA chip), or to some other peripheral function. Presuming plaintext kernel code can be extracted this way, it bootstraps further efforts in vulnerability analysis of the code running in the Xboxâ&#128;¦and so forth. Of course, its quite possible that this hole is plugged, since Microsoftâ&#128;&#153;s NGSCB spec calls for the Northbridge to limit DMA access from the graphics card to main memory. Furthermore, buffer overrun exploits have questionable applicability since each process runs as its own virtual machine and rumors has it that the no-execute bit is used on heap space. Still, Iâ&#128;&#153;m very surprised that such a media was even released into the wild by Microsoftâ&#128;¦their own worst enemy is their own haste to get to the market and carelessness; security is for naught without consideration of human factors. Very exciting! Perhaps the Xbox360 will be opened without the need for significant hardware hacking.*