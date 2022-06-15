---

title: 'Comment régler un hélicoptère RC: Raptor 30 ou caliber 30'
date: '2004-09-01T23:26:37+02:00'
author: 'Cédric Walter'

header:
teaser: /assets/images/2004/09/raptor.jpg
tags:
- 'RC helicopter'
- Techniques
---

# Notice Légal :

L’auteur ne pourra en aucun cas Ãªtre tenu responsable de tout accidents ou dommages matériels pouvant survenir de
l’utilisation de ces informations. Utiliser les Ã vos propres risques et périls.

# ATTENTION

Les hélicopteres radiocommandés ne sont pas des jouets, Ce sont des machines de précision qui ont le potentiel de causer
des blessures graves et mÃªme de provoquer la MORT. Ne jamais l’oublier !!!! Les pales du rotor tournent souvent Ã plus
de 450 km/h et cree une pression similaire a une balle de 45mm, de plus un hélico de 5 kilos a plus de 70 km/h contient
une energie cinétique considérable qui se libére violement a l’impact. Toujours se tenir a distance respectable et
éloigner le public.

Introduction Ce setup se veut rudimentaire et empirique, n’ayant pas de connaissances libraire sur le sujet, je vous
livre ici le fruit de mes observations sur le terrain au sein de mon club. Neanmoins, j’ai deja personnellement régler
pas mal d’helicos (mode de vol normal, stationnaire et translation lente) avec succès. Je completerai ce setup pour le
rendre exhaustif au fur et à mesure que mes connaissent s’étofferont.

# Prérequis

- Mode européen pour la télécommande (gazs a droite)
- Télécommande Futaba FF8 ou FF9
- Servo d’anticouple monté sur la poutre.
- Récepteur FUTABA.

# 1. Position des servo et assignation au récepteur Futaba

## 1.0 Définitions du type de commande du plateau

- Le H1, c’est quand le plateau cyclique est commandé par : un servo pour le rouli, un servo pour le tangage, et un
  servo pour le pas collectif. (Raptor 30)
- Le H2, c’est quand le plateau cyclique est commandé par: 2 servos pour le rouli (un en push et un en pull), un servo
  pour le tangage, et ces trois servos montent et descendent en màªme temps pour le collectif.
- Le H3 ou CCPM 120Â°, c’est quand les trois servos sont disposés à 120 Â° sur le plateau cyclique. Un mixage de
  l’émetteur permet de faire du tangage et du rouli. Le collectif est réalisé par les 3 servos qui montent et qui
  descendent en màªme temps. (Caliber 30, Vigor CS)
- Le H4 ou CCPM 90Â°, c’est quand les 4 servos sont disposés à 90Â° l’un par rapport à l’autre. Pour le tangage il y en
  a 2 qui font push pull , et pour le rouli, les 2 autres font push pull. Le collectif est assuré par les 4 servos qui
  montent et qui descendent en màªme temps. (rare)

## 1.1 Remarques

- Monter les servos dans leurs emplacements sans jamais trop serrer les caoutchoucs car sinon ils n’amortiront pas les
  vibrations.
- Privilégier un servo puissant (au moins 5kg voire plus) pour le collectif (Voie 6) si vous souhaiter chahuter votre
  hélico.
- Privilégier un servo rapide pour la commande d’anticouple (au moins < 0.11s) si vous souhaiter monter un bon gyroscope
  heading lock (csm 540, gy501 par ex). Mais associer le tout avec une commande d’anticouple en carbone, seul rigide et
  garante de n’avoir aucun jeu. Si vous avez un de ces 3 composants qui manquent, rien ne sers d’acheter seulement un
  bon servo, ou seulement un gyro. Vous etes Debutant ? ne le faites pas car c’est un investissement lourd et vous avez,
  c’est triste a dire mais plus de 70% de malchance d’abandonner ce hobby (pour raison d’argent ou de decouragement)
  avant 6 mois.
- Pour un hélico CCPM 120Â°, n’utiliser que 3 servos identiques, de màªme marque et référence. On peut s’accomoder de
  trois servo de moyenne gamme étant donné que le pas ou pitch est le résultat conjugués du mouvement des 3 servos (
  puissant)

## 1.2 Assignations des voies sur le recepteur futaba

- 1 Cyclique latérale ou aileron (permet d’aller à gauche ou à droite)
- 2 Cyclique longitudinale ou elevator (permet d’avancer ou de reculer)
- 3 Gazs ou throttle (accélerer ou décellerer)
- 4 Rud in du gyroscope (commande le servo d’anticouple)
- 5 Gain du gyroscope (ajuste le gain à distance)
- 6 Pas ou collectif (permet de monter et de descendre, joue sur l’angle des pales principales)

## 1.3 Chapes et tiges

- Toujours respecter les longueur recommandées par le constructeur. Elles sont forcément dans le manuel. Ces valeurs
  sont dites idéales car elles permettent d’avoir un maximum d’amplitude sur toutes les commandes.
- Utiliser des bras de servo qui permettent une fixation de la chape à 10 mm du centre du servo si rien n’est dit dans
  le manuel.
- Utiliser des chapes de meilleurs qualités que celles de Thunder Tiger et de la tige filetée de 3mm (surtout pour le
  pas collectif qui pourraient flamber sous l’effort lors des maneuvres 3D, pas en classe 30, mais en classe 60 oui)
- Connecter toutes les tiges comme recommandés sur les boules (bras de servo) mais ne connecter pas encore aux axes des
  servos. (pas encore)

# 2. Premier réglages sur la télécommande

- Allumer la técommande puis l’hélico. Tous les servos se positionnent au neutre. Vérifier que toute les fonctions ATV
  sont symétrique et égale a 100% des 2 cotés et que le dans le menu SUBTRIM tout soit a 0% (décalage du neutre = nul) (
  ces fonctions sont dans le menu basic)
- Vous pouver maintenant connecter tous les servo à leurs tiges.

## 2.1 Neutre des servos:

- Débrouillez-vous pour toujours respecter ce que le manuel du constructeur !
- Mais si rien n’est spécifier, essayer de toujours suivre les 2 règles suivantes :   
  – Bras perpendiculaire au boitier du servo, pour avoir un déplacement (rotation est un mot plus juste) égale de part
  et d’autre du neutre du servo. c’est ainsi que le servo atteint le maximum de ses performances.  
  – Bras de servo parallèle entre eux ou avec la tige de renvoi du mixeur mécanique qui lui est connecté
- En fait un hélicoptère bien reglé se voit comme ceci :  
  – au neutre tous les mixeurs, bras de servo sont d’équerre (perpendiculaire au bati, au boitier de servo ou à autre
  chose…)  
  – le plateau cyclique est au milieu de sa course (on recherche une commande symétrique, du type -10Â° +10Â°)

# 2.2 Comment respecter ces règles ? (perpendiculaires, parallèle)

- Trouver le neutre mécanique ! servo et télécommande sous tension, essayer de choisir un cran avec le bras de servo
  pour approcher le mieux possible le résultat escompté.
- Ajuster le neutre électronique avec la fonction subtrim, mais attention, cette fonction à un effet pervers: elle
  limite d’autant de pourcent la course totale d’un coté !   
  – ex : subtrim de 5%, vous devrez pour avoir 100% des deux cotés du débattement : 95% a gauche et 105% a droite (menu
  ATV ou End Point)  
  – ex : subtrim de -5%, vous devrez pour avoir 100% des deux cotés du débattement : 105% a gauche et 95% a droite (menu
  ATV ou End Point)

# 3. Sens des servos

C’est le plus simple a faire, toujours dans le menu basic, aller dans la fonction REVERS (ou menu reverse). Si le sens
actuel n’est pas le bon, appuyer sur + ou – pour le changer….Attention on regarde l’hélicoptére de dos, ce qui permet a
votre cerveau de se reposer et évite de devoir inverser mentalement les commandes.

# Règle

Le plateau cyclique doit s’incliner dans la màªme direction que le mouvement de translation de la machine souhaitée.

# 3.1 Droite, gauche, en avant en arrière

> - Stick gauche en avant, le plateau cyclique s’incline vers l’avant….stick gauche en arriere, le plateau cyclique
    s’incline vers l’arriere… (Cyclique longitudinale : voie 2).
> - Stick droit a droite, le plateau cyclique s’incline vers la droite….stick droit a gauche, le plateau cyclique
    s’incline vers la gauche….(Cyclique latérale : voie 1)

# 3.2 Servo des gazs

- Stick droit en bas, le papillon du carburateur doit se fermer. (la tige va vers l’arrière).
- Stick droit en haut, le papillon du carburateur doit s’ouvrir. (la tige va vers l’avant).

# 3.3 Servo d’anticouple

- Prérequis Le rotor vu de dessus de dos tourne dans le sens horaire, l’anticouple vu de son coté en sens antihoraire.
  Si tel n’est pas le cas c’est que le 1/4 de tour de courroie que vous avez fait en montant le tube de queue etait dans
  le mauvais sens ! redémonter et recommencer…
- Sens de la commande (pour rotor horaire, anti couple anti horaire et anticouple a droite) Stick gauche a gauche, le
  slider rentre vers le boitier d’anticouple, si ce n’est pas le cas alors inverser la voie RUDDER sur la télécommande.
- Sens d’action ou de correction du gyroscope (pour rotor horaire, anti couple anti horaire et anticouple a droite)
  Hélico vue de dos, poussez brutalement la queue vers la gauche, le slider doit s’éloigner du boitier, Si tel n’est pas
  le cas alors le gyro doit àªtre inversé. (le mode pas le boitier !)
- Ceci marche pour tous les hélico à rotation horaire, et anticouple à droite. Penser à vérifier le sens de correction
  et le bon fonctionnement de l’anticouple avant chaque vol.

# 3.4 Collectif (stick droit)

- Stick droit en bas, le plateau cyclique descend tout en restant horizontal durant son déplacement.
- Stick droit en haut, le plateau cyclique monte tout en restant horizontal durant son déplacement.

# 4. Débattement des servos

- Ceux ci se réglent en dernier lieu avec la commande ATV de votre télécommande (d’abord la distance entre les 2 chapes
  doit àªtre conforme)
- Dépasser 100% si vous voulez plus de débattement (limite a 140%) ou diminuer pour réduire (limite a 30%).
- Si vous respecter les longueurs préconises par le constructeur, vous ne devrier pas avoir de débattement a 30% ou à
  140%. En moyenne qq % au dessus ou en dessous de 100% quand màªme.

# Cyclique latérale voie 1 (inclinaison du plateau cyclique a droite ou a gauche)

- De tel facon que le plateau ne touche pas l’arbre du rotor pour les pilotes 3D,
- Limiter le débattement pour un débutant, la barre de bell doit s’incliner sur les cotes de qq cm, cela suffit (1.5 à 2
  cm)

# Cyclique longitudinale, voie 2, (inclinaison du plateau cyclique en avant ou en arriere)

Limiter le débattement pour un débutant, la barre de bell doit s’incliner vers l’avant ou l’arriere d’environ 30
degrées. Trop votre hélico ferait une pirouette sur place et vous tordrer la barres de bell….trop peu il sera mou et
lent a répondre.

# Gazs, voie 3

- Stick droit en bas, le papillon du carburateur doit se fermer complètement si le trim des gazs est au minimum.
- Stick droit en haut, le papillon du carburateur doit s’ouvrir complètement.

![](/assets/images/2004/09/servoGazs.jpg)  
Toujours se débrouiller pour que A=A’, :  
– Dévisser la tàªte de servo et servo au neutre débrouiller vous pour que le boisseau soit entrouvert à 50%,  
– A ce moment précis, les bras de servos doivent àªtre parallèle entre eux, voir schéma  
– Si ce n’est pas le cas dévisser du coté du carburateur.

# La symétrie de déplacement des 2 cotés est ici la clé du succés.

# Rud in du gyroscope, voie 4, debasement du servo d’anticouple.

Si vous avez un autre gyro que le CSM 540, vous allez jouer du tournevis et devrer regarder la doc de votre gyroscope
sinon :

- Eteigner l’helico, puis rallumer le, vous avez 10s durant l’autosetup pour basculer plusieurs fois l’interrupteur de
  passage du mode heading lock au mode normal (inter F du channel 5 sur la FF8)
- Le servo d’anticouple s’agite pour confirmer que vous etes dans le mode de reglages.
- La led orange s’allume si le sens d’action du gyro est reverse, s’eteint sinon. (Basculer le stick gauche a droite ou
  a gauche pour changer l’etat). Valider en basculant l’inter (aller retour). Le gyro confirme en en commandant au servo
  d’anticouple de faire un aller retour. Tener l’helico par l’arriere et pousser violement le poutre de l’helico vers la
  gauche, le levier plastique doit s’éloigner du boitier d’anticouple pour corriger la perturbation. Inverser dans le
  gyro si ce n’est pas le cas. (mon gyro est en mode reverse, car le servo est sur la poutre avec une commande en
  carbone plus rigide). Vérifier que : stick gauche a gauche, le slider rentre vers le boitier d’anticouple, si ce n’est
  pas le cas alors inverser la voie RUDDER sur la telecommande.
- La led verte s’allume si vous avez un super servo (vous savez le servo futaba numerique a 900 FF ou le JR a 1500 FF),
  s’eteint sinon. (Basculer le stick gauche a droite ou a gauche pour changer l’état). Valider en basculant l’inter (
  aller retour). Le gyro confirme en en commandant au servo d’anti couple de faire deux aller retour.
- Voici le mode débattement du servo pour un cote, approcher vous du boitier d’anticouple et pousser le stick gauche de
  telle facon a avoir d’un cote le débattement maximum que la mécanique permet. Valider en basculant l’inter (aller
  retour). Le gyro confirme en en commandant au servo d’anticouple de faire un aller retour.
- Voici le mode debattement du servo pour l’autre cote, pousser le stick gauche de telle facon a avoir de l’autre cote
  le debattement maximum. Valider en basculant l’inter (aller retour).
- Le gyro confirme en en commandant au servo d’anticouple de faire deux aller retour.

# C’est FINI !!!!!!!! Merci CSM.

# Gain du gyroscope, voie 5, (si vous avez cette fonction sur votre gyro)

CSM recommande dans la documentation 60% des 2 cotés. Aller dans le menu ATV (ou END-Point sur la FF9) et spécifier 60%

# Pas ou collectif, voie 6

- Utiliser une jauge, mieux emprunter la (c’est cher et pas utile sauf si vous dépasser le cap de l’année d’helico), au
  pire utiliser les indications assez imprécises graves sur le chassis de votre hélico (cela reste suffisant pour du
  stationnaire, translation).
- Je vous recommande +9Â° -9Â° en butee du stick droit et environ 6Â° en vol stationnaire, c’est a dire stick droit
  légerement au dessus du centre.(Normalement un “bon” pilote veut 0Â° au centre et a des commandes symétriques)
- Certains vous dirons d’éviter de trop grande valeurs négatives car un débutant a comme reflexe, lorsqu’il est affolé
  de pousser le stick en bas et donc d’accélerer la chute de l’helico. C’est vrai mais vous devez absolument àªtre
  patient et gagner en hauteur cm après cm votre stationnaire de dos (avec un patin d’écolage bien sur).
- Toujours jouer avec l’ATV de la voie 6 pour augmenter ou réduire le pas limite. Si vous n’arrivez pas à vos objectifs,
  vérifier la longueur de vos chapes….
- Pour info en 3D on cherche a avoir du +12Â° -12Â° voire plus des fois mais pas avec un moteur genre TT36 car il faut
  de la ressource pour tenir 12Â° au rotor !!! Si vous cherchez à “visser” l’helico dans l’air, opter pour un classe 90
  sous 30% de nitro.
- Le plateau doit monter en restant horizontale tout le long de sa course, si tel n’est pas le cas alors vérifier la
  longeur des tiges le reliant. Si vous àªtes en CCPM (mélangeur électronique), ne mélanger pas les marques ou
  caractéristiques des 3 servos (3 servos fonctionne simultanément pour le pas dans ce mode).

# 5. Courbe de pas et de gazs

# Objectif de la méthode de réglage: AVOIR UNE VITESSE ROTOR LA + CONSTANTE POSSIBLE

# 5.1 Pourquoi?

Eh bien parce que la relation qui lie la position du stick, à la vitesse du moteur (qui dépend de la charge ou pas en
degrée, du mélange (ratio air-essence), des conditions atmospheriques : température, humidité qui influe sur le ratio
air/essence, et et etc) n’est malheureusement pas linéaire…..On cherche bien sur à avoir une vitesse au rotor constante.
Seul un régulateur de vitesse tel le governor de Futaba (GV1) peut aider mais ce n’est pas un équipement standard sur
l’helico et il faut compter 200 € en plus. De plus on le monte sur un moteur deja réglé car si il lache..ou que le
régulateur régule un moteur su des courbe de gazs mauvaises, il calera ou s’apauvrira en vol (pas bon : serrage et
surchauffe).

# 5.2 Comment?

- Avec un tachymètre OPTIQUE (une disque perforé a travers laquelle on regarde le rotor en vol et que l’on synchronize
  avec la période de rotation de celui-ci: effet stroboscopique). Prix 200 € mais il faut avoir un collègue pour les
  mesures. Cela reste cher car on ne s’en sert que très peu souvent.
- OU A l’oreille (très dur si on est débutant) encore une fois c’est empirique et cela ne me plait pas beaucoup non
  plus. Commencer par une courbe lineaire, puis si le moteur perd des tours a un position de stick donne, il faut aller
  dans la courbe de gazs et translater la courbe de 5% ou monter localement quelques points. (5 point sur la FF8, 15 sur
  la Zap). Tout se fait a l’oreille et il vaut mieux demander de l’aide aun pilote experimenter.

Je recommande d’utiliser un tachymètre optique ou de se le faire préter. Voire d’en fabriquer un..

# 5.3 Calcul de la vitesse idéale du rotor

- Regarder ce que préconise le fabriquant pour la vitesse rotor ou demander sur les forums ce que les pilotes
  expérimentés ont trouvé comme vitesse idéale (fonction du moteur, des pales, du type de vol (hover, translation, 3D,
  FAI)). Noter cette vitesse en tr/min c’est notre objectif.
- Pour la retrouver, Si le moteur est idéalement utilisés, par exemple pour un OS32 : il tournera idéalement à 18000
  tr/min (1,2HP) il suffit de diviser par le ratio de réduction du train du rotor principale = par ex 9.6 => 18000 / 9,6
  = 1875 => 1875 tr/min devrait àªtre idéal pour le moteur et à fortiori pour le rotor si le fabricant recommande ce
  moteur et le taux de réduction de 9.6.

# 5.4 Conséquences si non respect

Survitesse du rotor, efficacité réduite, au pire, vous tombez sur une des fréquence propre du rotor qui amplifie les
vibrations, destruction des blades (>2200 tr/min), fatigues excessives etc….

# 5.5 remarques

- Suivant les conditions de vol (vents) ou de mode (stationnaire, acrobaties, translation) il n’est pas rare d’avoir 3
  ou 4 courbes differentes de gazs ou de pas actionnables grace aux nombreux interrupteur de la telecommande.
- Mes hélico sont tous symétrique au niveau de la commande de pas, c’est a dire que pour décoller, je dois dépasser de
  quelques cran la position centrale pour avoir 4-5Â° de pas positifs.

# 6. Courbes en mode normal

| Position du stick en mode hover | Mesure de la vitesse par rapport Vitesse idéale | Corrections courbes en ce point |
|---|---|---|
| En dessous | ![](/assets/images/2004/09/superieur.jpg)supérieur | ![](/assets/images/2004/09/gazsbas.jpg) |
|  | ![](/assets/images/2004/09/inferieur.jpg)inférieur | ![](/assets/images/2004/09/pasbas.jpg) |
|  | ![](/assets/images/2004/09/Ok.jpg)proche idéal | ![](/assets/images/2004/09/gazsbas.jpg) ![](/assets/images/2004/09/pasbas.jpg) |
| Stick milieu | ![](/assets/images/2004/09/superieur.jpg)supérieur | ![](/assets/images/2004/09/pashaut.jpg) ![](/assets/images/2004/09/gazsbas.jpg) |
|  | ![](/assets/images/2004/09/inferieur.jpg)inférieur | ![](/assets/images/2004/09/pasbas.jpg) ![](/assets/images/2004/09/gazsHaut.jpg) |
|  | ![](/assets/images/2004/09/Ok.jpg)proche idéal | Stop, objectif atteint,l’hélico décolle avec la bonne vitesse rotor. |
| Au dessus | ![](/assets/images/2004/09/superieur.jpg)supérieur | ![](/assets/images/2004/09/pashaut.jpg) |
|  | ![](/assets/images/2004/09/inferieur.jpg)inférieur | ![](/assets/images/2004/09/gazsHaut.jpg) |
|  | ![](/assets/images/2004/09/Ok.jpg)proche idéal | ![](/assets/images/2004/09/gazsHaut.jpg) ![](/assets/images/2004/09/pashaut.jpg) |

# Remarque : Il faut itérer dans le tableau et ne faire que de petit changement à chaque fois, jusqu’a atteindre le résultat escompté

# 7. Taux de monté

Ce réglage correspond au stick à 3/4 de sa course. Le but est d’avoir une vitesse ascendante “intéressante” (comprenez
en adéquation avec votre maitrise de pilotage) tout en conservant une vitesse proche de la vitesse lors du décollage. Ce
taux de monté est affaire de gouts et c’est a vous de choisir.

| Taux de monté, stick au 3/4 | Mesure de la vitesse par rapport Vitesse idéale | Corrections courbes en ce point |
|---|---|---|
| Trop lent | ![](/assets/images/2004/09/inferieur.jpg)chute | Â ![](/assets/images/2004/09/gazsHaut.jpg) |
|  | ![](/assets/images/2004/09/Ok.jpg)proche idéal | ![](/assets/images/2004/09/pashaut.jpg) ![](/assets/images/2004/09/gazsHaut.jpg) |
|  | ![](/assets/images/2004/09/superieur.jpg)augmente | ![](/assets/images/2004/09/pashaut.jpg) |
| Idéal | ![](/assets/images/2004/09/inferieur.jpg)chute | ![](/assets/images/2004/09/pasbas.jpg) ![](/assets/images/2004/09/gazsHaut.jpg) |
|  | ![](/assets/images/2004/09/Ok.jpg)proche idéal | Stop, objectif atteint,l’hélico a un taux de monté idéal avec la bonne vitesse rotor. |
|  | ![](/assets/images/2004/09/superieur.jpg)augmente | Â ![](/assets/images/2004/09/pashaut.jpg) ![](/assets/images/2004/09/gazsbas.jpg) |
| Trop Rapide | ![](/assets/images/2004/09/inferieur.jpg) chute | ![](/assets/images/2004/09/pasbas.jpg) |
|  | ![](/assets/images/2004/09/Ok.jpg)proche idéal | Â ![](/assets/images/2004/09/pasbas.jpg) ![](/assets/images/2004/09/gazsbas.jpg) |
|  | ![](/assets/images/2004/09/superieur.jpg) augmente | ![](/assets/images/2004/09/gazsbas.jpg) |

# A fond, a Fond !

Ceci dépend de la puissance de votre moteur, de votre pot (réseau ou pas), du taux de nitro que vous utilisez (boost).
Si la vitesse rotor s’écroule, vous devrez réduire la pas max, si la vitesse augmente, augmenter le pas en ce point.

# 7. Taux de descente

C’est la vitesse que vous souhaiter pour le stick de gazs a 1/4 de sa course tout en ayant une vitesse rotor constante.
En général :  
– Le rotor rentre en survitesse (pas négatif) car l’air relatif qui le traverse augmente sa vitesse.  
– Si la vitesse chute par contre beaucoup trop, vous risquez de devoir remonter violement les gazs pour arréter la chute
si il n’est pas déja trop tard.

| Taux de descente, stick au 1/4 | Mesure de la vitesse par rapport Vitesse idéale | Corrections courbes en ce point |
|---|---|---|
| Trop rapide | rester dans l’idéal en jouant sur les gazs | Â ![](/assets/images/2004/09/pashaut.jpg) + ![](/assets/images/2004/09/gazsHaut.jpg) ou ![](/assets/images/2004/09/gazsbas.jpg) |
| Trop lente | rester dans l’idéal en jouant sur les gazs | ![](/assets/images/2004/09/pasbas.jpg) + ![](/assets/images/2004/09/gazsHaut.jpg) ou ![](/assets/images/2004/09/gazsbas.jpg) |

# Vous avez fini ? bravo !

# Le futur pour éviter tout cela ? un moteur avec une électrovanne, une sonde lambda, tachymètre et un calculateur qui asservit la vitesse de sortie de l’arbre. Cela existe mais cela marche pas trop bien encore et cela coûte très cher… plus de 1200 €

# 9. Iddle up

# Courbe de gazs en V ?

C’est tres simple le moteur tourne quasiment tout le temps a fond en iddleup 2 (car on lui met +-9Â° de charge en 3D)
mais lorsque le pas est proche de -3Â° 0Â° 3Â° le rotor risque de rentrer en survitesse alors on reduit donc les gazs ->
courbe de gazs en V

# 10. Finir le montage

Une fois réglé, vous devez router les cables soigneusement et ne pas hésiter a les fixer. Cela participe grandement a la
sécurité du modèle, en vrac :

- Aucun cable ne doit pouvoir rentrer dans une partie en rotation,
- Utiliser de la durite pour entourer les cables si vous traverser ou dépasser de la canopie,
- Mousse pour la batterie, cela va éviter aux soudures sèches de lacher. Ne pas oublier apres un crash de les démonter
  et de les vérifier.
- Fixer solidement le quartz dans sont logement, l’y coller si besoin est avec du scotch.
- Fixer solidement au double face adapté le gyro.
- Utiliser des rylsans ou serres-cables.
- Vérifier la durite de pressurisation, si elle lache en vol le moteur a de grande chance de caler…
- Aucun point dur dans le rotor, tjrs rechercher la cause et corriger mécaniquement ou électroniquement.
- Aucun point dur dans le rotor d’anticouple, tjrs rechercher la cause et corriger mécaniquement ou électroniquement.

Â

Â

| Basic Menu |  |  |  |  |  |  |  |  |
|---|---|---|---|---|---|---|---|---|
|  | TH–CRV | Courbe des gazs |  |  |  |  |  |  |
|  |  | NORM | 1 | 2 | 3 | 4 | 5 |  |
|  |  |  | 47% | 65% | 75% | 85% | 100% |  |
|  | PI–CRV | Courbe de pas rotor |  |  |  |  |  |  |
|  |  | NORM |  |  |  |  |  |  |
|  |  |  | 0% | 25% | 50% | 75% | 100% |  |
|  | REVOLU |  |  |  |  |  |  |  |
|  |  | NORM |  |  |  |  |  |  |
|  |  |  | -20% | -10% | 0% | +10% | +20% |  |
|  | ATV | Limitation de la course des servos |  |  |  |  |  |  |
|  |  | ATV-AI (aileron) | Voie1 | 140% |  | 140% |  |  |
|  |  | ATV-EL | Voie2 | 100% |  | 100% |  |  |
|  |  | ATV-TH (Gazs) | Voie3 | 133% |  | 106% |  |  |
|  |  | ATV-RU | Voie4 | 100% |  | 100% |  |  |
|  |  | ATV-GY | Voie5 | 60% |  | 60% |  |  |
|  |  | ATV-PI | Voie6 | 45% |  | 100% |  |  |
|  |  | ATV-7 | Voie7 | 100% |  | 100% |  |  |
|  |  | ATV-8 | Voie8 | 100% |  | 100% |  |  |
|  |  | D/R AI | CH1 | CH2 | CH4 |  |  |  |
|  |  |  | UP100 | UP100 | UP100 |  |  |  |
|  |  |  | DOWN100 | DOWN100 | DOWN100 |  |  |  |
|  |  | D/R EL | CH2 |  | UP100% | DOWN100% |  |  |
|  |  | D/R-RU |  |  | UP100% | DOWN100% |  |  |
|  |  | EXP-AI | CH1 |  |  |  |  |  |
|  |  |  |  |  | UP0% | DOWN0% |  |
|  |  | EXP-EL | CH2 |  |  | DOWN0% |
|  |  | EXP-RU | CH4 |  | UP0% | DOWN0% |  |  |
|  |  | F/S |  |  |  |  |  |  |
|  |  |  | AIL, ELE, THR   RUD, GYR, PIT |  | NORM |  |  |  |
|  | REVERS | Sens d’action des servos |  |  |  |  |  |  |
|  |  | AIL | CH1 | REV |  |  |  |  |
|  |  | ELE | CH2 | REV |  |  |  |  |  |
|  |  | THR | CH3 | REV |  |  |  |  |
|  |  | RUD | CH4 | REV |  |  |  |  |
|  |  | GYR | CH5 | NORM |  |  |  |  |
|  |  | PIT | CH6 | NORM |  |  |  |  |
|  |  | CH7 | CH7 | NORM |  |  |  |  |
|  |  | CH8 | CH8 | NORM |  |  |  |  |
|  | PARA |  |  |  |  |  |  |  |
|  |  | ATL | ON |  |  |  |  |  |
|  |  | EG/S | INH |  |  |  |  |  |
|  |  | HELI | SWH1 |  |  |  |  |  |
|  |  | MOD | PCM | a changer selon   le type de votre   récepteur |  |  |  |  |
|  |  | INVERT MODE | INH |  |  |  |  |  |
|  | TRIM-AI |  |  |  |  |  |  |  |
|  |  | STEP4 |  |  |  |  |  |  |
|  | TRIM-EL |  |  |  |  |  |  |  |
|  |  | STEP4 |  |  |  |  |  |  |
|  | TRIM-TH |  |  |  |  |  |  |  |
|  |  | STEP4 |  |  |  |  |  |  |
|  | TRIM-RU |  |  |  |  |  |  |  |
|  |  | STEP4 |  |  |  |  |  |  |
|  | TRIM |  |  |  |  |  |  |  |
|  |  | DISP NEGA |  |  |  |  |  |  |
|  | SUBTRIM |  |  |  |  |  |  |  |
|  |  |  | AIL | 0 |  |  |  |  |
|  |  |  | ELE | 0 |  |  |  |  |
|  |  |  | THR | 0 |  |  |  |  |
|  |  |  | RUD | 0 |  |  |  |  |
|  |  |  | GYR | 0 |  |  |  |  |
|  |  |  | PIT | 0 |  |  |  |  |
|  |  |  | CH7 | 0 |  |  |  |  |
|  |  |  | CH8 | 0 |  |  |  |  |
|  |  | TRAINR |  |  |  |  |  |  |
|  |  |  | INH |  |  |  |  |  |
|  |  |  | AIL | FUNC |  |  |  |  |
|  |  |  | ELE | FUNC |  |  |  |  |
|  |  |  | THR | FUNC |  |  |  |  |
|  |  |  | RUD | FUNC |  |  |  |  |
|  |  |  | GYR | OFF |  |  |  |  |
|  |  |  | PIT | OFF |  |  |  |  |
|  |  |  | CH7 | OFF |  |  |  |  |
|  |  |  | CH8 | OFF |  |  |  |  |
|  |  | TH-CUT | CH3 |  |  |  |  |  |
|  |  |  |  | 0% | 5% |  |  |  |
|  |  |  |  |  |  |  |  |

