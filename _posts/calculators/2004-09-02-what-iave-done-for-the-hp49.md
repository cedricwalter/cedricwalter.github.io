---

title: 'What I have done for the HP49'
date: '2004-09-02T22:12:37+02:00'
author: 'Cédric Walter'
categories:
- calculators

header:
overlay_image: /assets/images/2004/09/hp49boot.gif
teaser: /assets/images/2004/09/hp49boot.gif
caption: 'What I have done for the HP49'

tags:
- algorithm
- calculator
- convenient
- corner
- create
- created
- credits
- current
- dangerous
- demo
- document
- first
- french
- graphing
- hp
- museum
- rpn
- scientific

---


I am a long user of HP calculator, in fact since 1991, and I have still kept my HP48GX with my license
of MetaKernel 3.0 (paid 120 FF or 18€). I like the RPN way of doing thing, and I was lightning fast doing math thinking in my head
like a RISC processor would do, small steps with limited operations, and a lot of intermediary results. I bought four
calculator in the past 2 months: a HP48Gx , two HP 10 Business and a 20S scientific for a total of 5 euros!!! tripling
my collection
size. My section concerning the HP calculator is outdated but still online.

Don’t forget also to visit hpcalc.org ([http://www.hpcalc.org](http://www.hpcalc.org/)), the premier source of
software for and information about the HP 50, HP 49, HP 48, and HP 28 RPN programmable graphic calculators and the HP
38G, HP 39, and HP 40 programmable graphic calculators.

Under the pseudo : Elta, (the last magician lord a famous SNK Neo Geo game)

I have done a nice picture on 20th March 1998. Take any HP49 in the world, and try a soft reset (ON-C), and you can see
my picture!!!!!. My signature is on the left corner, you can press ON quickly to freeze the pictures.
The MetaKernel is a masterpiece of software written entirely in
ASM. I use to buy a license (version 2.20) when it was still on HP48Gx before it was merged inside the HP49
kernel.

![](/assets/images/2004/09/hp49boot.gif)

[* Some very USEFUL document to program in LM](http://www.waltercedric.com/HP48/asm/) (
all credits to COCOHP). A NICE flags demo! ! ! ! ! They are here because i’ve never find them in Internet (personnal
correspondance in 1995).

*[ An article](http://www.waltercedric.com/HP48/amoi/gris.html) (in french sorry) to
explain how to display grey grobs.

* In 1992, It was the time to program a graphical
  clock [clock.dir](http://www.waltercedric.com/HP48/amoi/clock.dir)

* Easyregu is probably the biggest tools i’ve ever writting for hp48. It use very
  nice graphical menu to draw schematic process plot. It compact plot and has all grobs manipulation (rotate, fill,
  move…) and much more…. It is only big…. [easyregu.dir](http://www.waltercedric.com/HP48/amoi/easyregu.dir) (you must
  save it under easyregu in var dir)

* Like A Casio is a small utility I do this for a girl I use to love a lot in the
  past : Angelique Moussaoui (we were in prepa ATS) Its purpose is to recall the last expression in stack. It display
  equation like in the casio format ‘expression’ and the evaluated value in 1 level. You can recall at any time the past
  equation. Use Beta-Enter . Include SRC [likeacasio.zip](http://www.waltercedric.com/HP48/amoi/likeacasio.zip)

* Display a memgauge in the upper stack (written in
  sysrpl) [memgauge.dir](http://www.waltercedric.com/HP48/amoi/memgauge.dir)

* Do you want to send data with mipot module ? a friend of mine build a small
  interface (the only drawback is the current consumption) wich take place in slot card. Here is the program to chat
  between each other or to receive graphic… etc [mod\_mipot.zip](http://www.waltercedric.com/HP48/amoi/mod_mipot.zip) (1995)

* Broida, Ziegler-Nichols are methods to determine very quickly PID
  parameters. [regulation.zip](http://www.waltercedric.com/HP48/amoi/regulation.zip)

* Rlocus : do you want to plot Evans map (complex plot) to determine if a given
  system is stable in closed loop ?. This program is not written by me (Jason Frandsen first created it), just enhance :
  I rewrite all procedures to make them faster( no global stuff and improve algorithm), build an interface to make them
  more convenient, display K in pict and create a resume automatically, wich help you to hand draw the map, plus some other
  thing (sysrpl) [rlocus\_12.zip](http://www.waltercedric.com/HP48/amoi/rlocus_12.zip)

* How compute aX^2+bX+C=0 ? It is a well know problem and very simple. But now, how
  to compute it using the smallest program size ? this one is 73 octets
  long… [small\_trinome.zip](http://www.waltercedric.com/HP48/amoi/small_trinome.zip)

* very fast, small and dangerous (It only duplicate into memory) sysrpl+src.