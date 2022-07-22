---

title: 'People get smarter and things get faster! 2'
date: '2005-03-08T21:26:11+01:00'
author: 'Cédric Walter'

header:
teaser: /assets/images/2005/03/penquinWithIPodSmall.gif
tags:

- Electronics
- 'RC Electronics'

---

# Reverse engineering of the IPOD firmware by using a modem noise attack!

I got an iPod for Christmas. The [ipodlinux project](http://www.ipodlinux.org/) was one of the main reasons for
my choice, and so I started exploring the iPod as far as I was able to. I patched the bootloader and got some basic code
to run but there was no way to access any hardware other than the two CPUs yet. To get the LCD, Click-wheel and the
hard-disk working we needed to reverse engineer the bootloader in the flash rom. But to do that we first had to find a way
to get that code. Seems quite impossible without any knowledge about the IO-Hardware but I found a
solution… They have in fact use the internal tweeter of the IPOD to dump the result of code execution of the firmware
into sound. These people have written a digital sound compression algorithm, an encoder and a decoder!!! Now 64kb of
internal code can be examined!! why? just for booting Linux!!! penguin
power!!! 

[read more here…](http://www.ipodlinux.org/stories/piezo/)  [![](/assets/images/2005/03/penquinWithIPodSmall.gif)](http://ipodlinux.sourceforge.net/index.shtml)
