---
id: 2819
title: 'Address space layout randomization in Vista'
date: '2007-01-04T19:38:57+01:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=2819'
permalink: /security/address-space-layout-randomization-in-vista/
tags:
    - java
    - security
---

Windows Vista includes a new defense against buffer overrun exploits called address space layout randomization. ASLR. is just a way to hide insecure code, and make harder automated attacks on millions of machine except if….but I will come on that later

| <span style="font-weight: bold; font-style: italic;">Address space layout randomization<span style="font-style: italic;"> (ASLR) is a computer security technique which involves arranging the positions of key data areas, usually including the base of the executable and position of libraries, heap, and stack, randomly in a process’ address space.\[WIKIPEDIA\] |
|---|

 <span style="font-weight: bold; font-style: italic;"><span style="font-style: italic;">

In Vista, a DLL or EXE could be loaded into any of 256 locations, which means an attacker has a 1/256 chance of getting the address right. In short, this reduce the number of successful exploits. Vitsa address-space layouts are randomized only at boot time. Ae You safer with Vista? YES! and NO!

On a 32 bits machine, this protection is not working, simply because some smart people, have already worked on a way to circumvent ASLR, so a Linux PC will be more or less 216 seconds longer safe!  
Google when typing ASLR give a second link (sic) this handy white paper: <span style="font-weight: bold;">On the Effectiveness of AddressSpace Randomization  <span style="font-weight: bold;">  


| <span style="font-style: italic;">we demonstrate a derandomization attack that will convert any standard buffer-overow exploit into an exploit that works against systems protected by address-space randomization. The resulting exploit is as effective as the <span style="font-style: italic;">original exploit, although it takes a little longer to compromise a target machine: on average 216 seconds to compromise Apache running on a Linux PaX ASLR system.   [http://www.stanford.edu/~blp/papers/asrandom.pdf](http://www.stanford.edu/%7Eblp/papers/asrandom.pdf)<span style="font-style: italic;"> |
|---|

 <span style="font-weight: bold; font-style: italic;"><span style="font-style: italic;"><span style="font-style: italic;">  
Why it take so much time? because they have decide to translate the buffer overflow issue in the translated address space.. and brute forcing till success. In Apache, the famous opensource webserver, that mean 2^16 = 65; 536 probes at worst and 32,768 probes on the average….Vista has only 256 slots for a dll or exe…so how much time would it take? For all reader which like to play with pointer, the white paper is worth reading…

 Vista has also long pointer obfuscation, long living address being encrypted and decrypted at runtime when needed…this long pointer values will have particularities like a high entropy values so easily reperable in memory even if they move then periodically or randomly from place to place (Like PGP caching keys in memory).

 Implementation which randomizes the base address of the stack, heap, and code segments and adds random padding to stack frame and malloc() function calls. Since for sure the obfuscation algorithm is secret, it will break quite fast, as <span style="font-weight: bold;">security by obscurity has always be known to failed.

 What would I like to say? first that this technology is nothing special, it is one technique among others, and will be broken quite fast depending on how informations the Operating system leak or how it was implemented Moreover, it is existing since a long time.

- In OpenBSD since year (BSD 4.0),
- In Linux since [Kernel 2.6.12](http://lwn.net/Articles/121845/) (<font size="-1">17 Jun 2005) or as an addon [http://pax.grsecurity.net](http://pax.grsecurity.net/)
- Third party company are selling addons for windows here are some: **[BufferShield](http://www.sys-manage.com/english/products/products_BufferShield.html) (since 1998 for** XP, 2000, 2003, NT4**),**  [WehnTrust](http://www.wehnus.com/products.pl) (XP, 2000, 2003), StackGuard (compiler Canary and ASLR)

 Canaries are not implemented in Vista but are also worth mentionning:   
 <span style="font-weight: bold;">  


| StackGuard is a modified compiler which places <span style="font-weight: bold;">canaries (the term canary can be used interchangeable with our use of the term cookie) around the return pointer in function. A buffer overflow will modify the canary on its way to overwriting the adjacent return pointer. If the function epilog detects a dirty canary, it rightly infers that an exploit has occurred, it logs the exploit and it aborts the program. |
|---|

 Nothing will replace a well written code, that mean architecturally reviewed, with an open code, open to see, open to critics. Open Source IS the future.