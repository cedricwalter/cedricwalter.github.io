---
id: 2074
title: 'true innovative way to install software under Linux'
date: '2005-10-27T22:48:27+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=2074'
permalink: /open-source/true-innovative-way-to-install-software-under-linux/
tags:
    - distribution
    - distributions
    - independent
---

 [KLIK](http://klik.atekon.de/) is something so simple that I do not understand why nobody has think about it before….

You have on disk a file .cmg which contain the application and all shared object (it is call .dll under windows or .so under linux or config files) in a compressed virtual file system and IS runnable like a normal application!

What are the advantages ([from Here](http://klik.atekon.de/docs/?page=Philosophical%20articles))?

- I want to have multiple versions of the same application on the same machine. Every version of a software usually has its own strengths and bugs, and I want to use them in parallel.
- I work with multiple OSes. When I have installed an application, I want to use it on Knoppix, Kanotix, Linspire, Mepis, #Ubuntu… whatever. From the same location, without having to install it in every OS again and again.
- If a friend wants an application, I just want to send him one file that just plain works and that doesn’t need him to fiddle around with things.
- I want control over what goes where. I never liked folders like "My Documents" that try to dictate where you place your stuff. After all, the computer should do what I want and not the other way around. For example, my computer has multiple hard disks and if one of them gets full I just place my applications on the other one.
- I want to be able to carry around my applications with me, e.g. on a USB stick or CD-ROM. I want a base system that shows no "traces" of my usage. Normally, operating systems tend to become "messy" and slower over time because failed (un)installations leave back "mess" on the system. This is why I want applications to be strictly separated from the OS.
- There are package repositories for individual distributions, but usually they never have the latest bleeding-edge software that I want. Therefore I want applications to be independent from particular package management systems. They should simply run on any system.
- I don’t want to compile stuff. Compiling is for developers, but I am a user. Imagine an application that takes 10 minutes to compile. If only 100,000 users compile it, that makes one million minutes, or almost two years. Wasted time and energy!   
    
- I add to the list: you can always delete a software packages without any problems for other software, remove the cmg from disk and you’re done!

I agree that some problems are coming from linux itself: 120 linux versions, not all applications are compiled for Your distribution…. #Linux system are heavily using frameworks (more than 4000 packages or libray) and very dependant on code version of others frameworks.

Personaly I see only one drawback with [KLIK:](http://klik.atekon.de/) size consumed on disk, but since I have 1.2TB and since it reduce dependency hell among shared objects, I’ve tried it, 2 hours after I have still a big smile on my face 🙂

[KLIK](http://klik.atekon.de/) is still experimental but has work flawlessy under OpenSUSE 10.0