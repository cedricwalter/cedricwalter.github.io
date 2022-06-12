---
id: 775
title: 'Principe de fonctionnement'
date: '2004-09-01T22:44:37+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=775'

header:
  teaser: /assets/images/2004/09/board.jpg
tags:
    - spectrolutions
---

# Description**

![](/assets/images/2004/09/board.jpg)

- Les hélices sont Ã pas fixes comme sur un avion, plus elles tournent vite et plus la portance crée est importante.
- le Draganflyer possède 4 moteurs indépendants -> il y a 4 contrÃ´leurs de vitesse qui fonctionnent sur le principe de variation de la valeur de tension continue (PWM: pulse wide modulation). L’interface de puissance est réalisé au moyen des 4 transistors indépendants.
- le Draganflyer possède 3 asservisements: lacets, roulis et tangage -> il y a 3 gyroscopes piézo-électrique de marque TOKIN (ce sont les 3 polygones argentés sur la photo)
- Le tout est controlé par un processeur (PIC: programmable interrupt controler) qui contient le code de décodage des signaux, les asservissements. Le programme est protégé en lecture.
- 4 voies suffisent pour contrÃ´ler le modèle.
- Le mode de pilotage est celui d’un hélico radiocommandé (donc très difficile) avec en plus des problèmes de pertes d’orientation du Ã la symétrie de l’appareil.

# Contre Réaction**

Le contrÃ´le s’effectue en faisant varier les vitesses de rotation et donc en utilisant les couples de contre-réactions des hélices:

> **définition:** Lorque qu’un moteur tourne dans le sens horaire, une contre-réaction se crée qui s’oppose au mouvement, elle essaye de faire tourner le bati en sens anti-horaire. L’effet est réversible et valable pour tout système en rotation ou en mouvement.

# Astuces mise en oeuvre**

- Sur le modèle: 2 hélices diamétralement opposés tournent dans le mÃªme sens de rotation, Il y a deux hélices tournant en sens horaire (gauche et droite) et 2 en sens anti-horaire (hélices avant et arrière).
- A l’équilibre, les couples de contre-réaction s’annulent et le modèle reste en stationnaire Ã plat sous le contrÃ´le du processeur. L’utilisateur, le vent étant vu comme des perturbations pour le système.

# Commandes élementaires**

![](/assets/images/2004/09/teleco.gif)

- Pour **avancer**, il suffit de ralentir le moteur avant et d’accélerer le moteur arrière, le modèle s’inclinent alors vers l’avant. (stick gauche E)
- Pour **reculer**, il suffit d’accélerer le moteur avant et de ralentir le moteur arrière. (stick gauche F)
- Pour **incliner à gauche**, on agit de même: moteur droit accélere fortement, le moteur gauche ralentit fortement (stick droit C)
- Pour **incliner à droite**, on agit de même: moteur gauche accélere fortement, le moteur droit ralentit fortement (stick droit D)
- Pour jouer sur **l’axe de lacet**, il suffit de freiner légerement 2 moteurs simultanément opposés 2 a 2, les couples de contre-réaction seront plus élevés en valeur absolue que les 2 autres moteurs et le modèle tournera sur lui meme a plat. Axe de lacet gauche G, axe de lacet droit H
- Pour **monter** (stick droit A) ou **descendre** (stick droit B), on accélère ou ralentit les 4 moteurs en même temps.

La difficulté est de jouer sur toute les commandes en même temps et de changer l’orientation dans sa tête pour éviter de donner un mauvais ordre au mauvais moment (comme sur un hélico 😉 )

# Historique**

Cette superbe machine a porté les noms suivants: **Roswell Flyer – HMX 4 – Draganflyer** et a été concue par Mike Dammar de [www.spectrolutions.com](http://www.spectrolutions.com/) elle coûte environ 800$ avec une télécommande 4 voies et accus, ce qui reste dans la moyenne d’un hélicoptère électrique. La NASA s’est porté acquéreur de quelques pièces et Georgia Tech a étudié la possibilité d’envoyer un prototype sur la planète MARS (Project GTMARS 1June 2000). Un modèle plus grand existe: le Draganflyer XP mais son prix est astronomique ($5000) bien que livré avec une télécommande et valise valant à eux seul plus de 2000â&#130;¬, une caméra sans-fil est livré d’origine.

![](/assets/images/2004/09/DraganflyerXp.jpg)

| ![](/assets/images/2004/09/photo-dfxp-DFXP3.jpg) | ![](/assets/images/2004/09/photo-dfxp-DFXPCamera.jpg) | ![](/assets/images/2004/09/photo-draganflyer3-098.jpg) |
|---|---|---|

# Draganflyer XP**