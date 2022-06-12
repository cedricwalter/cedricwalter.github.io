---
id: 7707
title: 'How iOS 5.1 Jailbreak with GreenPois0n Absinthe v2.0 is working'
date: '2012-06-02T15:06:51+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=7707'

header:
  teaser: /assets/images/2012/06/iOSJailbreakWithAbsinthe_thumb.png
---

![iOSJailbreakWithAbsinthe](/assets/images/2012/06/iOSJailbreakWithAbsinthe_thumb.png "iOSJailbreakWithAbsinthe")

*This is at the limit of being art! you need to be a good developer to understand this ![Smile](/assets/images/2011/02/wlEmoticon-smile.png)*

> [GreenPois0n Absinthe](http://greenpois0n.com/ "GreenPois0n Absinthe") was built upon @pod2g’s Corona untether jailbreak to create the first public jailbreak for the iPhone 4S and iPad 2 on for the 5.0.1 firmware. In this paper, we present a chain of multiple exploits to accomplish sandbox breakout, kernel unsigned code injection and execution that result in a fully-featured and untethered jailbreak.
> 
> Corona is an acronym (sic) for "racoon", which is the primary victim for this attack. A format string vulnerability was located in racoon’s error handling routines, allowing the researchers to write arbitrary data to racoon’s stack, one byte at a time, if they can control racoon’s configuration file. Using this technique researchers were able to build a ROP payload on racoon’s stack to mount a rogue HFS volume that injects code at the kernel level and patch its code-signing routines.
> 
> The original Corona untether exploit made use of the LimeRa1n bootrom exploit as an injection vector, to allow developers to disable ASLR and sandboxing, and call racoon with a custom configuration script. This however left it unusable for newer A5 devices like the iPad2 and iPhone 4S, which weren’t exploitable to LimeRa1n, so another injection vector was needed.
> 
> [via](http://www.iclarified.com/entry/index.php?enid=22187) *iClarified)*

This hack be applied to nearly all iPads, the iPhone 3G, 4 and 4S, third and fourth generation iPod touch media players, and the second-generation Apple TV. Support for the new 8GB iPad 2, which features a custom-designed A5 chip, will be available soon!