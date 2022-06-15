---

title: 'Hewlett Packard MetaKernel unofficial site'
date: '2004-09-02T22:17:53+02:00'
author: 'Cédric Walter'



header:
  teaser: /assets/images/2004/09/hewlett_packard_collection_00.jpg
tags:
    - calculator
    - hewlettpackard
    - hp48
    - hp49
    - hp50g
    - metakernel
---

This is **not the Official MetaKernel Home Page**.

A huge portion of that page was first published in raw HTML in 1998! (without CSS)

# May 14, 1996, MetaKernel ?

> Hello World !
> 
> As you know, since 4 months, a new program is available for your HP48 His name is MetaKernel …
> 
> This program can speed up your hp48gx up to 100 times…
> 
> It’s a kernel (as the name says) which replace the standard environment of your HP … We can compare this program like windows vs DOS
> 
> All the basic functions were rewritten .
> 
> The command line editor, is faster than StringWriter, you can use the menu of the hp48, and many text attributes (bold, italic, underline, inverse) and include many fonts at the same times (up to 244).. Of course, the MetaKernel allows text manipulations like copy,paste,delete and text manipulations…and Find/Replace commands You can edit more than one text at the same time, and run rpl-script program while you edit your text …
> 
> The Equation-Writer was also rewritten, very easy to use and very fast You have also a new Matrix-Writer, and a new Graphic Editor which allows you to use up to 4 grey-scale graphics … You can draw line, circle, ellips, box, splin line. Edit with a ZoomEntry etc… All the drawing functions work in real-time like the best PC programs..
> 
> A Filer program is also included in the MetaKernel, to manage you card or your programs, very fast, now, you can use your 512kb RAM Card without memory, (For example with PCT, to see a 50ko text file in the port 3, you need more than 50kb of free memory)
> 
> You have a new development tools , with a powerful system-rpl functions..
> 
> You have a new symbolic assembly programs …
> 
> Now, with this program, all the available memory can be used (even the port 2-3-4-5) instead of the 128kb based-ram memory…Another example :
> 
> By the past, to edit a 20kb rpl-program, you need 3 times the memory to edit the files, and after pressing the Edit key, you wait 3 minutes, now, you wait at worst 10 seconds !!! (all the ->STR functions were rewritten) …
> 
> The memory manager was also rewritten , to edit a text file , you just need twice the text size of the memory ! Forget the Insufficient-Memory message, if your program is just on the stack , it”s always possible to edit it ! .
> 
> Now, you can run all the programs at the same time (pause the Equation Writer and draw a Graphic, then make an addition, then back to the Graphic Editor , then back to the Equation-Writer)
> 
> Five peoples work on this program during 2 years :
> 
> Cyrille de Brebisson (Arkanoid,Xenon, Kweek, Doom …)  
> Etienne de Foras (The First lm tetris on HP48sx,Dev utilities …)  
> Gerald Squelart (HyperText, and the dos emulator of HP48 …)  
> Christian Bourgeois (LibMaker 5.0, kernel for HP48sx, TextEdit …)  
> Jean-Yves Avenard (StringWriter, FontWriter, HPAsm, TERMHP …)
> 
> To use this program, you just need a 128kb RAM Card.. Yes, it’s quite enough, but remember that MetaKernel replace all of your old program utilities …  
> A ROM card will be available in few months
> 
> If you need more informations or if you have questions wrote to :  
> [aven…@epita.fr](https://groups.google.com/) . or [HPm…@micronet.fr](https://groups.google.com/)
> 
> To order it : wrote to :  
> META-KERNEL  
> 18 rue Sebastien Mercier  
> 75015 Paris  
> (France)
> 
> with 50 USD or 200FF (cash, or Check) and join these information :  
> -Name  
> -Address  
> -the version of your HP48 (press VERSION on your HP48)  
> -the speed of your HP48 (Press ON-D then A many times)
> 
> Please, if you want, give also your remarks, and how you know the MetaKernel (by voices, internet etc…)
> 
> You will receive a disk with many utilities and programs, and of course the MetaKernel with a paper notice (130 pages)….
> 
> Have a nice day …
> 
> Ps : we don’t wrote the MetaKernel for money, only for HP48 users wich wants to use their HP48 the best is possible… And sending a paper notice is quite expensive…  
> All the MetaKernel’s writer are member of The MDG (Maubert Development Group). The MDG is an official HP developers.
> 
> Announcement from <https://groups.google.com/g/comp.sys.hp48/c/TAOpeHvwFbc?pli=1>

I bought their license and still have the CARD and printed manual 🙂

# MetaKernel in action

see review <https://www.hpcalc.org/hp48/apps/mk/mk.php>

# ACO Team

ACO stands for Australian Calculator Operation, and is the great HP design team that was formed in November 1997 and [disbanded](http://www.hpcalc.org/goodbyeaco.php) in November 2001. Their greatest endeavor was the HP-49.

# Later

MetaKernel was privately sold by Jean-Yves Avenard. The ACO team (including Jean-Yves Avenard, Cyrille and other HP-48 developers) based the OS and CAS of the HP49G on MetaKernel, ALG48 and Erable. The version of MetaKernel used was the never-released MK 3.0 that Jean-Yves Avenard originally planned for the 48GX. Afterwards Jean-Yves Avenard made the earlier MK 2.30 (the last one sold for the 48GX) available for free download.  
HP later adapted the 49G OS and CAS for the 49g+ and then the 50g.  
They apparently control the rights to the code from the 49G onward, but not the earlier versions of that code for the 48GX, because those earlier versions remain freely available for download from [hpcalc.org](http://hpcalc.org/). Jean-Yves Avenard in the HP 48 times. Then HP hired him and he joined ACO.

# Programming

Please be patient I must updated all descriptions and credit to the authors. We need your help : Please help us and develop program for MDG Kernel.  
If You want to get in touch with the author : [Gérald squelart](mailto:squelart@aemiaif.lip6.fr) or [Jean Yves Avenard](mailto:avenar_j@epita.fr) or [from archive.org](https://web-beta.archive.org/web/20010301172356/http://www.epita.fr:8000/~avenar_j/hp/calc.html)

[**EditK** ](MetaKernel/progs/EDITK)(386oct)by ELTA (me : walter cedric)  
a replacement for the EDITB command.  
Now : Lib are visible, Asm can be edit and compiled automatically w/n error, rpl object are dissasemble and created easily (nothing on stack).

[**Table.48g** (29Ko) ](/assets/images/2004/09/tablegx.zip)all credit to B. De Singlyconvert by ELTA (me : walter cedric)  
This is a replacement for the internal table of MDGKer. It use very simple and comprehensive mnemonics. Useful to dissasemble Rom entry Point.

[**Table.48g** (49Ko)](/assets/images/2004/09/table48g.zip) The original one, included with the package.

[**Table Creator** (109Ko)](MetaKernel/progs/tableCreator.zip)New Version **You must recompile the old table in order to use them with MDGker 2.30**  
Program to convert the startext file under Windows 95 into Ascii format and back In MDGker format.included with the package.

# Utilities

- [**TermHp** by Jean Yves Avenard. (1.2Ko)](http://www.epita.fr:8000/%7Eavenar_j/hp/product/termhp.html) TermHP is a terminal emulator for your HP48GX. TermHP is very small (1.2kb), and may be the only terminal for your HP48, which won’t lose  
    any characters. Full-Duplex, you can type and receive characters at the same time.
- [**Tools** (1Ko)](/assets/images/2004/09/tools2conv.zip) 4 tools to switch between the different format: Grob<->font,external <->liste.included with the package.
- [**Mkutils** (7 Ko)](MetaKernel/progs/mkutil.lib) Man utils : flags, bzk, grob->font and much more.
- [**Gker** (2Ko)](MetaKernel/progs/GKER.LIB) Improve stack viewing with grey grob. included with the package.
- [**Kerutils** (3Ko)](MetaKernel/progs/mkf20.lib) Many good utils written in asm.
- [**MkFlags32** (3Ko)](MetaKernel/progs/mkflg32.lib) by Stephen JANNIN Manage hp48 flags and MDGker easily.HomePage: [http://wwwperso.hol.fr/~janninst/](http://wwwperso.hol.fr/%7Ejanninst/)

# Graphics and fonts

- [**15 differents fonts** (15.3Ko).](MetaKernel/progs/FontOr.zip) included with the package.
- [**3 Micro font** (1.96Ko).](/assets/images/2004/09/microfont.zip)included with the package.
- [**customs** (5.41Ko)](/assets/images/2004/09/customs_ex.zip) Customize your kernel with some of these examples. included with the package.

# A picture for history

[**Startup** : ](MetaKernel/progs/STARTUP.var)by ELTA (me : Cédric Walter)  
I did this picture on 20th march 1998 while being at the engineer school. Dot by Dot in the standard graphic editor and published it under GNU/GPL. I don’t know but it somehow reached the authors of the MetaKernel and was included in the ROM.

You can now take **any** HP49G/HP49Gx/HP50G in the world, and do a soft reset (ON-C), and you can see …. my picture!!!!!. My signature is on the left corner, you can press ON quickly to freeze the picture.

![](/assets/images/2004/09/hp49boot.gif)

# Articles (related from [Comp.sys.hp48](https://groups.google.com/g/comp.sys.hp48))

- [Article from J. Y. Avenard : Contains description of each component of MDGker. Very Interesting.](MetaKernel/articles/metakernel.txt)
- [Article from J. Y. Avenard : It explain us the advantage of Masd notation.](MetaKernel/articles/adv_asm.txt)
- [Article from Hp Mad : How to read Var in ML with MK and advantages of Masd.](MetaKernel/articles/MasmFormat.txt)

# Bugs or problems

[My screen remained blank while edition after pressing on in user mode.](MetaKernel/bugs/blankscreen.txt)

# Official MetaKernel page

Click Here to go : <http://www-miaif.lip6.fr/gerald/mk.html>

# Getting more software

As usual, visit <https://www.hpcalc.org/hp48/apps/mk/>