---
title: Me and the Hewlett Packard calculators
type: posts
date: 2023-12-24T08:10:55+00:00
cover: /hewlett-packard/hp50gGraphingCalculator.webp
tags:
  - calculator
  - hewlettpackard
  - metakernel
categories:
  - Hewlett Packard
summary: "Hewlett-Packard, a pioneering force in the world of technology, has left an indelible mark on the field of calculators with its innovative and reliable range of HP calculators. Since the introduction of its first handheld calculator in 1972, HP has consistently upheld a commitment to precision, functionality, and user-friendly design."
---

Hewlett-Packard, a pioneering force in the world of technology, has left an indelible mark on the field of calculators with its innovative and reliable range of HP calculators. Since the introduction of its first handheld calculator in 1972, HP has consistently upheld a commitment to precision, functionality, and user-friendly design.

HP calculators are renowned for their durability and advanced features, making them indispensable tools for professionals, scientists, engineers, students, and enthusiasts alike. The hallmark of HP calculators lies not only in their robust hardware but also in the powerful software and intuitive interfaces that facilitate complex calculations with ease.

From the iconic HP 35, the world's first scientific pocket calculator, to the modern graphing calculators like the HP Prime, the evolution of HP calculators reflects a dedication to pushing the boundaries of technology. These calculators have become synonymous with reliability in fields such as engineering, finance, mathematics, and science, providing users with the precision and efficiency needed to tackle complex computations.

## My Hewlett Packard calculator museum

A bit more than 135 HP calculators, not all are in gallery :innocent:

{{< foldergallery src="hewlett-packard/museum" >}}

## Long time ago at secondary school

I am a long user of HP calculator, in fact since 1991, and I have still kept my HP48GX with my license
of MetaKernel 3.0 (paid 120 FF or 18€). I like the RPN way of doing thing, and I was lightning fast doing math thinking in my head
like a RISC processor would do, small steps with limited operations, and a lot of intermediary results. I bought four
calculator in the past 2 months: a HP48Gx , two HP 10 Business and a 20S scientific for a total of 5 euros!!! tripling
my collection
size. My section concerning the HP calculator is outdated but still online.

Don’t forget also to visit hpcalc.org ([http://www.hpcalc.org](http://www.hpcalc.org/)), the premier source of
software for and information about the HP 50, HP 49, HP 48, and HP 28 RPN programmable graphic calculators and the HP
38G, HP 39, and HP 40 programmable graphic calculators.

## A picture for posterity

I have done a nice picture on 20th March 1998 while being at the engineer school. Take any HP49/HP50/... in the world, and try a soft reset (ON-C), and you can see my picture!!!!!. My signature is on the left corner, you can press ON quickly to freeze the pictures. Dot by Dot in the standard graphic editor and published it under GNU/GPL. I don 't know but it somehow reached the authors of the MetaKernel and was included in the ROM.
The MetaKernel is a masterpiece of software written entirely in ASM. I use to buy a license (version 2.20) when it was still on HP48Gx before it was merged inside the HP49kernel.
You can now take **any** HP49G/HP49Gx/HP50G/... in the world, and do a soft reset (ON-C), and you can see my picture!!!!!. My signature is on the left corner, you can press ON quickly to freeze the picture.

![](/hewlett-packard/metakernel.webp)

## Some HP programs I did

Under the pseudo : Elta, (the last magician lord a famous SNK Neo Geo game)

[\* Some very USEFUL document to program in LM](http://www.waltercedric.com/HP48/asm/) (
all credits to COCOHP). A NICE flags demo! ! ! ! ! They are here because i’ve never find them in Internet (personnal
correspondance in 1995).

\*[ An article](/hewlett-packard/files/gris.html) (in french sorry) to
explain how to display grey grobs.

- In 1992, It was the time to program a graphical
  clock [clock.dir](/hewlett-packard/files/clock.dir)

- Easyregu is probably the biggest tools i’ve ever writting for hp48. It use very
  nice graphical menu to draw schematic process plot. It compact plot and has all grobs manipulation (rotate, fill,
  move…) and much more…. It is only big…. [easyregu.dir](/hewlett-packard/files/easyregu.dir) (you must
  save it under easyregu in var dir)

- Like A Casio is a small utility I do this for a girl I use to love a lot in the past. Its purpose is to recall the last expression in stack. It display equation like in the casio format ‘expression’ and the evaluated value in 1 level. You can recall at any time the past equation. Use Beta-Enter . Include SRC [likeacasio.zip](/hewlett-packard/files/likeacasio.zip)

- Display a memgauge in the upper stack (written in sysrpl) [memgauge.dir](/hewlett-packard/files/memgauge.dir)

- Do you want to send data with mipot module ? a friend of mine build a small interface (the only drawback is the current consumption) wich take place in slot card. Here is the program to chat between each other or to receive graphic… etc [mod_mipot.zip](/hewlett-packard/files/mod_mipot.zip) (1995)

- Broida, Ziegler-Nichols are methods to determine very quickly PID parameters. [regulation.zip](/hewlett-packard/files/regulation.zip)

- Rlocus : do you want to plot Evans map (complex plot) to determine if a given
  system is stable in closed loop ?. This program is not written by me (Jason Frandsen first created it), just enhance :
  I rewrite all procedures to make them faster( no global stuff and improve algorithm), build an interface to make them
  more convenient, display K in pict and create a resume automatically, wich help you to hand draw the map, plus some other
  thing (sysrpl) [rlocus_12.zip](/hewlett-packard/files/rlocus_12.zip)

- How compute aX^2+bX+C=0 ? It is a well know problem and very simple. But now, how to compute it using the smallest program size ? this one is 73 octets long… [small_trinome.zip](/hewlett-packard/files/small_trinome.zip)

- very fast, small and dangerous (It only duplicate into memory) sysrpl+src.

## Les niveaux de gris sur HP48

par Cédric Walter 1996

Cet article permet de comprendre comment afficher des niveaux de gris sur HP48, un programme ASM y fait suite.

### Technique des niveaux de gris

Pour afficher des niveaux de gris, il suffit de changer rapidement d’image et de jouer sur la persistance rétinienne de
l’oeil. Pour changer rapidement d’écran, on modifie l’adresse en 120h (écran affiché en cours). Pour modifier les images
à la bonne vitesse, il faut lire le compteur de ligne en 128h, 6 bits sur lesquels sont codés le numéro de la ligne en
cours de rafraîchissement et qui décroît de la séparation des menus jusqu’à 0 (Technique de synchronisation verticale).

### Le codage des images

Il faut coder les images pour éviter d’avoir une image par nuance, ce qui serait vite intolérable sur une HP48 à la
mémoire plus que limité. Une méthode consiste à attribuer un numéro à chaque nuance et à le coder en binaire.

Pour avoir 16 niveaux de gris 4 Images suffisent : (1) si le pixel est allumé et (0) s'il est éteint.

|         |     |     |     |     |
| ------- | --- | --- | --- | --- |
| Grob n° | 4   | 3   | 2   | 1   |
| noir    | 1   | 1   | 1   | 1   |
| 15      | 1   | 1   | 1   | 0   |
| 14      | 1   | 1   | 0   | 1   |
| 13      | 1   | 1   | 0   | 0   |
| 12      | 1   | 0   | 1   | 1   |
| 11      | 1   | 0   | 1   | 0   |
| 10      | 1   | 0   | 0   | 1   |
| 9       | 1   | 0   | 0   | 0   |
| 8       | 0   | 1   | 1   | 1   |
| 7       | 0   | 1   | 1   | 0   |
| 6       | 0   | 1   | 0   | 1   |
| 5       | 0   | 1   | 0   | 0   |
| 4       | 0   | 0   | 1   | 1   |
| 3       | 0   | 0   | 1   | 0   |
| 2       | 0   | 0   | 0   | 1   |
| blanc   | 0   | 0   | 0   | 0   |

8 Niveaux de Gris.

|         |     |     |     |
| ------- | --- | --- | --- |
| grob n° | 3   | 2   | 1   |
| noir    | 1   | 1   | 1   |
| 7       | 1   | 1   | 0   |
| 6       | 1   | 0   | 1   |
| 5       | 1   | 0   | 0   |
| 4       | 0   | 1   | 1   |
| 3       | 0   | 1   | 0   |
| 2       | 0   | 0   | 1   |
| blanc   | 0   | 0   | 0   |

4 Niveaux de Gris.

|         |     |     |
| ------- | --- | --- |
| grob n° | 2   | 1   |
| noir    | 1   | 1   |
| 3       | 1   | 0   |
| 2       | 0   | 1   |
| blanc   | 0   | 0   |

Pour donner une impression de niveaux de gris, il faut que le grob 4 soit afficher 2 fois plus longtemps que le grob 3
qui lui-même est affiché 2 fois plus longtemps que le grob 2 qui lui l’est deux fois plus que le grob 1.

En résumé : grob 1 : 1 fois sur 15, grob 2 : 2 fois sur 15, grob 3 : 4 fois sur 15, grob 4 : 8 fois sur 15.

Pour limiter le clignotement, on peut faire boucler la suite d’images : 4/3/2/4/3/4/1/4/3/4/2/4/3/4

### Un exemple de programme…

Ci-joint… Un programme qui prend un grob 131\*256 en argument ( les grob 4, 3, 2, 1 sont dans le fichier dans cet
ordre) et qui l’affiche en 16 niveaux de gris, puis en 8 niveaux et enfin en 4 niveaux après chaque appui sur une
touche.

```asm
% Sauvegarde des registres !PC !0-15 GOSBVL 0679B INTOFF %ST=0 15 % Charge ds R1 l'adresse du grob (on saute le prologue) A=DAT1 A LC 00014 A=A+C A R1=A % Charge ds R0 l'adresse de la zone de travail  LC 02201 GOSBVL 05B7D AD0EX ?ABIT=0 0 %une particularité du gestionnaire d'écran qui n'accepte que les adresses paires.  GOYES PAIR A=A+1 A *PAIR R0=A % On recopie l'écran dans la zone de travail A=R1 A D0=A A=R0 A D1=A LC 02200 GOSBVL 0670C % Mise zéro de la hauteur des menus, on écrit 3F en 128h D0= 00128 LA 3F DAT0=A B %A contient l'adresse de la bitmap en cours d'affichage LA 8068D pour G(x) ou LA 7050E pour S(x)  LA 8068D D1=A A=DAT1 A R3=A A % Boucle principale % Adresses des différents grobs dans le grob 131*256  % GROB 4 : R0 % GROB 3 : R0 + 880h % GROB 2 : R0 + 1100h % GROB 1 : R0 + 1980h D1= 00120  *AFFICHE_16_NIVO GOSUB AFFICHE_GRB4 GOSUB AFFICHE_GRB3 GOSUB AFFICHE_GRB4 GOSUB AFFICHE_GRB2 GOSUB AFFICHE_GRB4 GOSUB AFFICHE_GRB3 GOSUB AFFICHE_GRB4 GOSUB AFFICHE_GRB1 GOSUB AFFICHE_GRB4 GOSUB AFFICHE_GRB3 GOSUB AFFICHE_GRB4 GOSUB AFFICHE_GRB2 GOSUB AFFICHE_GRB4 GOSUB AFFICHE_GRB3 GOSUB AFFICHE_GRB4 LC 001FF %Masque universel pour les touches OUT=C C=IN LA 0001F A=A&C A ?A=0 A %si pas de touche, on continue GOYES AFFICHE_16_NIVO  *AFFICHE_8_NIVO GOSUB AFFICHE_GRB3 GOSUB AFFICHE_GRB2 GOSUB AFFICHE_GRB3 GOSUB AFFICHE_GRB1 GOSUB AFFICHE_GRB3 GOSUB AFFICHE_GRB2 GOSUB AFFICHE_GRB3 LC 001FF OUT=C GOSBVL 01160 LA 0001F A=A&C A ?A=0 A GOYES AFFICHE_8_NIVO  *AFFICHE_4_NIVO GOSUB AFFICHE_GRB2 GOSUB AFFICHE_GRB1 GOSUB AFFICHE_GRB2 LC 001FF OUT=C GOSBVL 01160 LA 0001F A=A&C A ?A=0 A GOYES AFFICHE_4_NIVO  % Remise en ordre du contexte pour une sortie propre D0= 00128 LA 37 %réapparition des menus DAT0=A B D1= 00120 A=R3 A DAT1=A A %ST=1 15 INTON GOSBVL 067D2 A=DAT0 A D0=D0+ 5 PC=(A)  *AFFICHE_GRB4 C=R0 GOTO AFFICHE  *AFFICHE_GRB3 C=R0 LA 00880 C=C+A A GOTO AFFICHE  *AFFICHE_GRB2 C=R0 LA 01100 C=C+A A GOTO AFFICHE  *AFFICHE_GRB1 C=R0 LA 01980 C=C+A A GOTO AFFICHE  *AFFICHE %Une boucle d'attente, sinon c'est trop rapide LA 000FF *WASTETIME A=A-1 A GONC WASTETIME  *VSYNC %Attente du passage par zéro du compteur en 128h A=DAT0 B ?A#0 B GOYES VSYNC DAT1=C A RTN @
```
