---

title: 'Reflexions techniques sur la coupe E=M6 1999'
date: '2004-09-05T18:16:17+02:00'
author: 'Cédric Walter'
categories:
- france

header:
  teaser: '/assets/images/2020/04/robot-essaim-ensisa-coupe-robotique-1.jpg'
tags:
    - Robotic

---

Je ne saurais être tenu responsable pour les erreurs d’attribution de technologies des différentes équipes citées
ci-dessous. Écrivez moi pour corriger toutes bévues. Les remarques n’engagent que moi.

Ceci se veut être un document de synthèse sur toutes les technologies rencontrées lors de la coupe E=M6 et devrait
pouvoir améliorer les performances de nos futurs robots. Il est le résultat de toutes mes nuits d’errances sur le campus
improvisé de E=M6, lorsque la nuit, le manque de sommeil et les hectolitres de Coca-Cola aidant les langues se déliaient
plus facilement. Merci Ã tous ceux qui même Ã 3 heures du matin et après 30 heures de veille m’ont répondu. Bonne
Lecture.

# En grande majorité, on peut noter la grande complexité des robots participants Ã la coupe.

Les systèmes électroniques sont complexes et étagées, le cablage en majorité touffue (je dirai prototypesque), ce qui
provoque des problèmes d’isolations et de destruction inopinée.

On peut dire que la majorité des pannes, même pour notre robot, provient du manque de rigueur dans le calcul des
composants (fichu régulateur de tension) et du cablage réalisé Ã "la va vite" qui marche un premier temps mais qui se
révèle désastreux Ã l’usage. Nous avons aussi mal construit le système de puissance avec des pistes trop petites, et
nous n’avons pas non plus inséré des fusibles. Après ce mea culpa aussi grand qu’une poutrelle, passons aux brindilles
dans les yeux des autres équipes

# En ce qui concerne le développement et le contrÃ´le :

- Peu en fait utilisent des micro-controleurs hormis pour leur PMI pour des raisons évidentes de place. Notons que
  Supelec Rennes incorporait une solution originale Ã base de carte 68HCll maitres-esclaves (5 au total mais cela ne
  marchait pas), et que ville d’Avray, vu la vitesse d’exécution et la relative constance dans le déplacement doit
  utiliser un automate industriel très rapide.

- Sur cible 68hcl 1, j’ai remarqué Control Boy, une solution commerciale qui se révèle très facile Ã l’usage (copier
  coller de blocs) et des compilateurs dédiés sous DOS.

- Beaucoup de langages procédurales (ou utilisés comme tel) Pascal, C etc

- Beaucoup trop de robot nécessitait un poste portable pour démarrer (soit une liaison série, soit une connectique
  complète de PC), ce qui prouve que notre mode de gestion dans un fichier de démarrage est préférable, moins souple
  mais moins stressante et plus sur.

- Des chips programmés en VHDL purement combinatoire pour les PMI (bonjours les équations ! ).

- Une équipe utilisait une GAME BOY comme contrÃ´leur avec une carte d’E/S, astucieux mais plus un symbole que un
  exemple Ã suivre (l’écran incorporé était utile et la programmation se faisait en C sur PC avec un cross assembler).

- L’ENAC utilisait pour configurer ses PMI un soft développé par un Thésard pendant un an, il représentait la piste et
  les courbes du parcours tracé Ã la souris, aidait la configuration d’un exécutable. Impressionnant!

- Beaucoup d’équipes ont aussi équipé leur robot de dissipateurs thermiques munis de ventilateurs, et utilisent pour le
  robot principal des solutions Ã base de carte mère PC (rack industriel ou carte Arcom).

# En ce qui concerne les stratégies :

- Au chapitre des bonnes idées, beaucoup de bar graphe lumineux qui après examen minutieux et maintes questions se
  révèle être un moyen astucieux de posséder plusieurs stratégies différentes avec une seule action télécommandée. Il
  suffit d’appuyer sur le bouton poussoir lorsque la bonne stratégie associée Ã la LED est allumée.

- La télécommande est indispensable et clairement plusieurs matchs ont étés gagnés de justesse grace Ã ce périphérique.
  En effet beaucoup de robots ont des comportements bizarres non programmés et l’intervention humaine Ã permit dans bien
  des cas Ã sauver la partie (destruction de son propre chateau). Composés de simple émetteur IR ou de télécommande du
  commerce Ã 49 FF bricolé (voiture FM nda) que je ne recommande pas car a base de quartz normalisé 27,5 MfIz. La
  télécommande peut aussi bloquer l’autre robot, ce qui peut s’avérer efficace si le robot en face Ã une intelligence
  inversement proportionnelle Ã celle de l’opérateur, c’est Ã dire idiot.

- J’ai compté environ 20 équipes qui possédaient des télécommandes.

- Les PMI qui longent les rives sont très astucieuses et souvent très rapides mais le contre est trop prévisible et ne
  doit donc pas être la seule stratégie ou mode de déplacement d’une PMI.

# En ce qui concerne les capteurs

- Aucune utilisation des ultrasons qui au dire des équipes sont désastreux lors des matchs, nous avons du aussi les
  désactiver pour plus de sÃ»reté et pour avoir un comportement moins aléatoire de notre PMI.

- Très peu aussi ont utilisé les infrarouges, car d’expérience le résultat est catastrophique et pour une raison très
  simple : il existe trop de perturbations lumineuses (lumières rasantes, torches IR des caméras, réflexions), La seule
  raison pour laquelle notre robot fonctionnait plutÃ´t bien (honnis en 1/4 de finale), c’est que nous avions eu l’idée
  d’isoler les capteurs pourtant bien en dessous du robot par de la gaine d’isolation de porte. Idem pour les capteurs
  de la PMI qui se sont vu adjoindre une jupe en tissus, car ils ne discriminaient plus le fossé, ni les lignes
  blanches. La solution existe et est très employée, beaucoup d’équipes l’utilisent :

- Il s’agit de saturer la piste en lumières, typiquement par une LED rouge et de relever le niveau de tension ou seuil
  qui en résulte par une photo diode. J’ai vu de tel robot équipé de 5 Leds qui fonctionnaient très bien et qui
  possédaient même de tels circuits en CMS et une vitesse d’exécution proche de Ville d’Avray. Au dire des équipes, la
  seule difficulté est de régler finement les points de convergences des diodes de mesure sur la piste.

- On peut aussi insérer un filtre rouge pour diminuer l’influence de la lumière blanche et mieux discriminer le vert.

- Notre robot n’intégrait que deux capteurs pour le suivi de ligne, alors que d’autres avec 5 capteurs élaboraient des
  tables de vérité, qui autorisaient un déplacement rapide et moins "crabesque".

- Les capteurs incrémentaux relatifs faisait la loi et certaines équipes annonÃ§aient plus de 10000 pas par tours
  interpolés (ENS Cachan) !, d’autre suite Ã des problèmes techniques ont bricolé en hate des codeurs composés d’un
  disque en plastique munis de boulons qui frappaient un capteur mécanique de fin de course (ESIAE) ! pour un résultat
  plutÃ´t honorable (précision <3mm). Ces capteurs étaient en appuis sous le robot sur la piste ou plus généralement sur
  les axes des moteurs.

- Une équipe a incorporé un gyroscope piézo-électrique ? (30OFF dans radiospares mais on murmure que 150OFF permet
  d’avoir un super capteur avec conditionnement) mais un manque de rigueur ? ou une mauvaise implémentation sur le robot
  ? provoquait une dérive inexpliquée de +- 10% (résultat plus qu’honorable car on m’a dit que l’on peut avoir 70’/s
  d’erreur sans filtre de kalmann).

- L’ENAC avec son système de tir avec visé Laser n’a cessé de m’intriguer. La présence du point rouge sur une tour se
  terminait systématiquement avec la destruction de celle-ci. Info ou Intox ? Une grande couronne de photo transistor et
  d’émetteur IR (LED sombre) régulièrement espacé sur le robot complétait le système. La même équipe détectait la
  présence d’une balle dans leur système de tir par la rupture d’un faisceau laser. Supelec Rennes avait aussi essayé de
  détecter la réflexion sur deux tubes en inox (balise), mais sans succès, alors que dire de l’ENAC sur des bouts de
  bois ? Après coup, je dirai, vu la profusion de leds IR que ce robot ENAC essayait de cartographier le terrain ennemi
  et que le laser n’était que la représentation physique de la future cible et aidait Ã la mise au point. L’apparente
  puissance de calcul de ce robot et l’entrain Ã coder des élèves (logiciel de simulation de trajectoire) va dans ce
  sens.

# Les Balises :

- Dans la mesure du possible les balises sur le robot adverses sont très utiles, tout du moins dans un jeu de tir. Ville
  dAvray, Isep suivait les déplacements du robot adverse et empêchait ainsi tout tir direct.

- Principalement constitué de balises lumineuses très puissantes ou des infrarouges avec détection du maximum voire pour
  Torsac, un micro electret (plus un gadget). Les rocher Suchard de Eifel (Paris) ont fait aussi beaucoup d’effet. Il
  est très décevant que si peu d’équipes utilisent des balises fixes (10) même si les résultats sont honorables sans.

- Tout au plus, certaines équipes utilisent une balise derrière le chateau sans doute pour ne pas faire de bêtises lors
  des tirs… et savoir ou tirer.

# La Propulsion:

- La principale faiblesse de notre robot et de beaucoup d’équipes réside dans le choix des moteurs. Radiospares Ã 400 FF
  pour les uns, 1500 francs pour les autres, beaucoup mais alors beaucoup plus pour pour Ville Avray (on murmurait 30
  000 FF pour la propulsion + commande) !.

- Les moteurs pas Ã pas sont très peu employés car trop lent sans circuit spécialisé et trop soumis aux perturbations (
  dixit les équipes), seules les PMI en possédaient car la vitesse n’est pas trop importante, on recherche plutÃ´t la
  précision.

- Notre robot était clairement trop lent mais compensait son handicap par une grande précision dans le tir associé Ã une
  puissance accrue. Je persiste Ã dire que des moteurs sont un investissement et qu’il faut surtout capitaliser notre
  choix en achetant des moteurs de positionnement industriel.

# La commande des moteurs :

- Beaucoup utilisaient des circuits PID numériques électronique (Hewlett Packard hctIlOO, ou LM629) couplé avec des
  capteurs incrémentaux (Supelec Rennes, Orsay), des PWM ou des moteurs pas Ã pas. Je pense que notre commande en tout
  ou rien avec des relais, même si elle marche craint !

- Les plus modestes utilisaient des moteurs pas Ã pas de récupération.

# Les roues :

- Roues sur mesure en alu rouge (ENS Cachan), roue de Skate Board ou de modélisme haut de gamme.

- Beaucoup cherchait Ã minimiser les glissements synonymes de perte de pas sur les capteurs. J’ai remarqué que beaucoup
  utilisaient des roues en aluminium munies d’un caoutchouc rond en leur centre et avait dès lors des problèmes de
  poussières sur les roues des PMI qui glissaient.

# Les systèmes de tirs :

- Les systèmes mécaniques rivalisaient de complexité et d’astuces, pour proÂ«eter une balle de tennis, j’ai noté
- Le bumper électromagnétique bobiné artisanalement et calibré pour que sous 25.7V et 40A (en transitoire), le tir
  arrive sur les tours (Orsay Paris 11), selon l’auteur du système, le tir reste reproductible indéfiniment tant que
  l’on respecte les conditions initiales.

- Un système rotatif composé de cartouches qui contenaient des ressorts comprimés.

- Un système composé de 4 fÃ»ts qui contiennent des élastiques, complété avec 1 ascenseur et 1 rouleau d’aspiration.

- Le robot qui aspire sur l’avant mais tire sur le coté tout en avanÃ§ant.

- Un système ingénieux de cames qui compriment un gros ressort (Roboticam) mais la présence de plusieurs chaÃ®nes de
  vélo et d’une grande quantité de pignon, ne permet qu’au école de mécanique de le mettre en oeuvre. Cela reste un chef
  d’oeuvre de fabrication.

- Beaucoup essayait de copier le système de tir des cours de tennis : deux roues en rotation et la balle prise au
  milieu. Le résultat reste correct sans plus.

- Les vérins pneumatiques ou des robots qui intégraient des sous-ensembles pneumatiques (au moins 8 sur 78).

- Les catapultes qui n’avaient aucun succès.

- Enfin, notre système, qui n’ayons pas peur de le dire Ã été salué unanimement par toutes les équipes en présence et
  les juges pour sa simplicité, sa robustesse et sa précision.

# Conclusions :

Une constatation s’impose, certes décevante, beaucoup de robots ne marchaient qu’avec un parcours cablé ! et étaient
complètement idiot. Beaucoup d’ambitions ont été ravalées et les prouesses techniques ont fait place pendant les nuits Ã
des solutions de fortune qui MARCHENT. Il faut néanmoins persévérer !

Autre regret et de taille,beaucoup d’équipe marche sur un budget reduit, qui n’a AUCUNE commune mesure avec les grandes
écoles… dommage! car cette compétition n’a alors plus de sens! pourquoi ne pas imposer chaque annee les
microcontroleurs, le nombre de capteurs etc???

Peu d’équipe capitalisent d’une année sur l’autre aussi….

Ce qui nous a permit de gagner et qui je pense est le secret de toute réussite (hormis les prouesses techniques de
l’intouchable Ville dAvray, mais avec quelle budget, combien de profs) est de modifier la stratégie en fonction du robot
que l’on rencontre au vu de ses capacités. Il faut donc posséder un robot très souple (donc techniquement au point, on
revient toujours au même problème) et une bonne équipe d’espionnage (caméra pendant les homologations et les matchs).
Enfin, il ne faudra surtout pas dévoiler toutes ses cartes lors des homologations, et même surcharger le robot de faux
capteurs (laser par ex). Ces méthodes risquent néanmoins de nuire Ã l’esprit de E=M6, mais augmentent les chances de
réussite.

Walter Cédric.