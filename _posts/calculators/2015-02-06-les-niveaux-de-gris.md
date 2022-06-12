---
id: 8251
title: 'Les niveaux de gris sur HP48'
date: '2015-02-06T09:40:17+01:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=8251'

tags:
    - calculator
    - graphing
    - hp
    - museum
    - rpn
    - scientific
---

par Cédric Walter 1996

Cet article permet de comprendre comment afficher des niveaux de gris sur HP48, un programme ASM y fait suite.

## Technique des niveaux de gris

Pour afficher des niveaux de gris, il suffit de changer rapidement d’image et de jouer sur la persistance rétinienne de l’oeil. Pour changer rapidement d’écran, on modifie l’adresse en 120h (écran affiché en cours). Pour modifier les images à la bonne vitesse, il faut lire le compteur de ligne en 128h, 6 bits sur lesquels sont codés le numéro de la ligne en cours de rafraîchissement et qui décroît de la séparation des menus jusqu’à 0 (Technique de synchronisation verticale).

## Le codage des images

Il faut coder les images pour éviter d’avoir une image par nuance, ce qui serait vite intolérable sur une HP48 à la mémoire plus que limité. Une méthode consiste a attribuer un numéro à chaque nuance et à le coder en binaire.

Pour avoir 16 niveaux de gris 4 Images suffisent : (1) si le pixel est allumé et (0) si il est éteint.

|  |  |  |  |  |
|---|---|---|---|---|
| Grob n° | 4 | 3 | 2 | 1 |
| noir | 1 | 1 | 1 | 1 |
| 15 | 1 | 1 | 1 | 0 |
| 14 | 1 | 1 | 0 | 1 |
| 13 | 1 | 1 | 0 | 0 |
| 12 | 1 | 0 | 1 | 1 |
| 11 | 1 | 0 | 1 | 0 |
| 10 | 1 | 0 | 0 | 1 |
| 9 | 1 | 0 | 0 | 0 |
| 8 | 0 | 1 | 1 | 1 |
| 7 | 0 | 1 | 1 | 0 |
| 6 | 0 | 1 | 0 | 1 |
| 5 | 0 | 1 | 0 | 0 |
| 4 | 0 | 0 | 1 | 1 |
| 3 | 0 | 0 | 1 | 0 |
| 2 | 0 | 0 | 0 | 1 |
| blanc | 0 | 0 | 0 | 0 |

8 Niveaux de Gris.

|  |  |  |  |
|---|---|---|---|
| grob n° | 3 | 2 | 1 |
| noir | 1 | 1 | 1 |
| 7 | 1 | 1 | 0 |
| 6 | 1 | 0 | 1 |
| 5 | 1 | 0 | 0 |
| 4 | 0 | 1 | 1 |
| 3 | 0 | 1 | 0 |
| 2 | 0 | 0 | 1 |
| blanc | 0 | 0 | 0 |

4 Niveaux de Gris.

|  |  |  |
|---|---|---|
| grob n° | 2 | 1 |
| noir | 1 | 1 |
| 3 | 1 | 0 |
| 2 | 0 | 1 |
| blanc | 0 | 0 |

Pour donner une impression de niveaux de gris, il faut que le grob 4 soit afficher 2 fois plus longtemps que le grob 3 qui lui même est afficher 2 fois plus longtemps que le grob 2 qui lui l’est deux fois plus que le grob 1.

En résumé : grob 1 : 1 fois sur 15, grob 2 : 2 fois sur 15, grob 3 : 4 fois sur 15, grob 4 : 8 fois sur 15.

Pour limiter le clignotement on peut faire boucler la suite d’images : 4/3/2/4/3/4/1/4/3/4/2/4/3/4

## Un exemple de programme…

Ci-joint …un programme qui prend un grob 131\*256 en argument ( les grob 4 , 3 , 2 , 1 sont dans le fichier dans cet ordre) et qui l’affiche en 16 niveaux de gris, puis en 8 niveaux et enfin en 4 niveaux apprès chaque appui sur une touche.

```
% Sauvegarde des registres !PC !0-15 GOSBVL 0679B INTOFF %ST=0 15 % Charge ds R1 l'adresse du grob (on saute le prologue) A=DAT1 A LC 00014 A=A+C A R1=A % Charge ds R0 l'adresse de la zone de travail  LC 02201 GOSBVL 05B7D AD0EX ?ABIT=0 0 %une particularité du gestionnaire d'écran qui n'accepte que les adresses paires.  GOYES PAIR A=A+1 A *PAIR R0=A % On recopie l'écran dans la zone de travail A=R1 A D0=A A=R0 A D1=A LC 02200 GOSBVL 0670C % Mise zéro de la hauteur des menus, on écrit 3F en 128h D0= 00128 LA 3F DAT0=A B %A contient l'adresse de la bitmap en cours d'affichage LA 8068D pour G(x) ou LA 7050E pour S(x)  LA 8068D D1=A A=DAT1 A R3=A A % Boucle principale % Adresses des différents grobs dans le grob 131*256  % GROB 4 : R0 % GROB 3 : R0 + 880h % GROB 2 : R0 + 1100h % GROB 1 : R0 + 1980h D1= 00120  *AFFICHE_16_NIVO GOSUB AFFICHE_GRB4 GOSUB AFFICHE_GRB3 GOSUB AFFICHE_GRB4 GOSUB AFFICHE_GRB2 GOSUB AFFICHE_GRB4 GOSUB AFFICHE_GRB3 GOSUB AFFICHE_GRB4 GOSUB AFFICHE_GRB1 GOSUB AFFICHE_GRB4 GOSUB AFFICHE_GRB3 GOSUB AFFICHE_GRB4 GOSUB AFFICHE_GRB2 GOSUB AFFICHE_GRB4 GOSUB AFFICHE_GRB3 GOSUB AFFICHE_GRB4 LC 001FF %Masque universel pour les touches OUT=C C=IN LA 0001F A=A&C A ?A=0 A %si pas de touche, on continue GOYES AFFICHE_16_NIVO  *AFFICHE_8_NIVO GOSUB AFFICHE_GRB3 GOSUB AFFICHE_GRB2 GOSUB AFFICHE_GRB3 GOSUB AFFICHE_GRB1 GOSUB AFFICHE_GRB3 GOSUB AFFICHE_GRB2 GOSUB AFFICHE_GRB3 LC 001FF OUT=C GOSBVL 01160 LA 0001F A=A&C A ?A=0 A GOYES AFFICHE_8_NIVO  *AFFICHE_4_NIVO GOSUB AFFICHE_GRB2 GOSUB AFFICHE_GRB1 GOSUB AFFICHE_GRB2 LC 001FF OUT=C GOSBVL 01160 LA 0001F A=A&C A ?A=0 A GOYES AFFICHE_4_NIVO  % Remise en ordre du contexte pour une sortie propre D0= 00128 LA 37 %réapparition des menus DAT0=A B D1= 00120 A=R3 A DAT1=A A %ST=1 15 INTON GOSBVL 067D2 A=DAT0 A D0=D0+ 5 PC=(A)  *AFFICHE_GRB4 C=R0 GOTO AFFICHE  *AFFICHE_GRB3 C=R0 LA 00880 C=C+A A GOTO AFFICHE  *AFFICHE_GRB2 C=R0 LA 01100 C=C+A A GOTO AFFICHE  *AFFICHE_GRB1 C=R0 LA 01980 C=C+A A GOTO AFFICHE  *AFFICHE %Une boucle d'attente, sinon c'est trop rapide LA 000FF *WASTETIME A=A-1 A GONC WASTETIME  *VSYNC %Attente du passage par zéro du compteur en 128h A=DAT0 B ?A#0 B GOYES VSYNC DAT1=C A RTN @ 
```