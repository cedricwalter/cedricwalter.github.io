---

title: 'choix de l&#8217;électronique'
date: '2004-09-01T23:39:52+02:00'
author: 'Cédric Walter'



tags:

- 'Astuces (fr)'
- 'RC helicopter'

---

## How to control/input stick

![Controlling a RC Helicopter](/assets/images/2004/09/Inputresult.gif)

## H1, H2, H3, H4?
Le H1, c’est quand le plateau cyclique est commandé par : un servo pour le rouli, un servo pour le tangage, et un servo
pour le pas collectif.

Le H2, c’est quand le plateau cyclique est commandé par: 2 servos pour le rouli ( un en push et un en pull), un servo
pour le tangage, et ces trois servos montent et descendent en même temps pour le collectif.

Le H3, c’est quand les trois servos disposés à 120 ° sur le plateau cyclique. Un mixage de l’émetteur permet de faire du
tangage et du rouli. Le collectif est fait par ces 3 servos qui montent et qui descendent en même temps.

Le H4 , c’est quand les 4 servos sont disposés Ã 90Â° l’un par rapport à l’autre. Pour le tangage il y en a 2 qui font
push pull , et pour le rouli, les 2 autres font push pull. Le collectif est assuré par les 4 servos qui montent et qui
descendent en même temps.

## Batteries

- Jamais de controller de batteries a une seule led ! parce ce que le temps que le systeme change de couleur et ton
  hélicoptère est au sol, toujours un controller a bargraph.
- On ne vole pas sans moniteur de batterie, de plus il faut leur accorder une confiance toute relative et ne mesurer
  l’état du pack que sour une charge (faire des cercles avec les deux sticks et ne tenir compte que de la LED la plus
  basse)
- Seul les accus Sanyo avec un R dans leurs libellés supportent la charge rapide. ex : 1700 SCR, ampérage maxi pour une
  charge rapide 4\*capacité ex : 1700mAh -> 6.8A max
- Les batteries se stockent déchargés et au frigo pour ralentir la réaction chimique ! (ben oui)
- Acheter dès le départ une double alimentation. cela évitera une chute de la machine pour un probleme de batterie.

## Gyroscopes

- Acheter un gyro piezoelectrique heading hold (à maintien de cap), exit les vieillots gyroscopes mécaniques ou a vis de
  réglage, essayer un CSM c’est l’adopter ! Si on vous dit qu’un gyro heading hold n’est pas recommandé pour un debutant
  car vous ne saurez pas utiliser l’anticouple, rétorquez que il y a quelque annees le même débat avait eu lieu entre
  les gyro à capteur mécaniques et les piezo. Si il persiste alors fuyer ce triste sire !
- Toujours utiliser les gommes amortisseuses pour fixer les servos, sinon leur durée de vie est ridicule.

## La partie réception

- Ne pas laisser la prise de charge pendre en dehors de la bulle ou à l’intérieur, une goutte d’huile ou d’essence
  dessus et c’est le crash assurée (court-circuit) !!!
- Si vous passez en 6 volts comme moi n’oublier pas d’agrandir la plateforme avec un morceau de contreplaqué vissé dans
  le bati, et de mettre une bonne mousse entre. Ceci evitera aux éventuelles soudures sèche des accus de lacher.
- Le 6Volts ? voila mon histoire : je suis passe en 6 volts sur mon moskito xxl, il volait tres bien mais au 3eme vols,
  plus d’anticouple ! j’ai fait une dizaine de tour en l’air et j’ai pu me poser par miracle sans casse. Courte
  recherche, le JR8700 G ne supporte pas le 6v ! (meme si il a volé 2 x 15min en 6V) donc prudence. Augmenter la tension
  c’est un peu booster les servos, pratique courante chez FUTABA….mais à pratiquer avec précaution.
- Rajouter un élastique autour des prises sur le récepteur. cela peut éviter un crash.
- Scotcher le quartz dans son logement interne, cela n’est pas rare d’entendre des personnes qui l’ont perdu en plein
  vol et boum crash !
- La mousse de gyro ou de batterie peut etre remplacée par de la gaine d’isolation de tuyau et du scotch double face.
  Faut juste trouver la bonne mousse qui donne un taux d’amortissement proche de la mousse original.
- Eviter les frottements métal-métal, (anormaux dans la mécanique) c’est catastrophique pour la réception !
- PCM ou FM ? un grand débat, personnellement je préfère le PCM, Ron Lund a un très bon article sur le sujet et les
  setting du Fail safe (ce qui va donner les ordres aux servo pendant la durée de l’interference) à choisir. En resumé :
  maintien des commandes dans leur dernières position, et throttle en iddle (ralenti).
- Ne jamais brancher 2 prises (rallonge servo, prises) sans les sécuriser en les scotchant ou mieux en les emprisonnant
  dans de la gaine thermo-réctractable.

## Equilibrage des pales rotor

- Si vous avez des pales bois, il faut toujours vérifier leur bon équilibrage
- Si vous avez des pales fibres ou carbones de marques (SAB, NHP, MS), elles devraient être correctement équilibré dès
  leur sortie du carton, néanmoins vérifier quand même.

### Matériels

- une lame de rasoir ou un réglet métallique d’écolier.
- Une balance de pales de type Schluter ou autre… (essayer de l’emprunter ou passez chez un pote, car cela coute très
  cher 100€

### Méthodes:

1. recherchez la pale la plus légère:

- Prenez une pale et déplacer la masselottes pour équilibrer la balance, le fléau doit être horizontale.
- Demonter et placer l’autre pale, regarder sans déplacer la masselottes. Si cela penche du coté de la pale, alors
  celle-ci est plus lourde que l’autre, sinon c’est l’inverse. Appelons la pale A

2. rechercher le centre de gravité de la pale la plus légère (pale A):

- Placer la pale A sur le réglet métallique et la déplacer de droite a gauche jusqu’a ce qu’elle soit en équilibre.
  Marquer au stylo ce point sur la pale. C’est le centre de gravité de la pale. (G)

3. Equilibrage

- Monter à nouveau la pale la plus légère (pale A) sur la balance. Nous n’avons toujours pas touché à la masselote, il
  suffit de rajouter du scotch au point G jusqu’a avoir une pale horizontal sur la balance.

C’est fini.

## Les pales

- Penser à équilibrer vos pales (sauf si NHP, razorblade ou fibre de bonne qualité) ! si par intermittence vous avez du
  tracking, alors une des tiges de controle du pas dans la tête rotor est tordue.
- Vous avez tout d’un coup du tracking entre 2 journée, essayer d’inverser les pales. Si cela résoud le problème, alors
  une de vos pales est vrillé. Ceci est d’autant plus vrai si vous avez des pales bois (impossible avec des fibres ou
  carbones).
- Les pales noirs carbones vous tentent ? oui, mais pas pour des débutants, ou pilotes intermédiaires. En vol on ne VOIT
  PLUS du tout le disque du rotor. Opter pour des pales blanches ou mieux encore avec un gel coat violet. (le plus
  visible)
- Raccourcir les vis qui fixent les haubans au bati, elles ont une fâcheuse tendances a perforer le réservoir du raptor
  30.
- Ne jamais serrer comme un malade vos pales, elles doivent être laches mais pas trop : la force centrifuges les
  alignera toute seule. un bon controle est d’incliner l’hélico, pales parallèle au sol, et donner une impulsion sèche.
  Si elle tombe, reserrez. ATTENTION, trop lache en cas de choc elle peuvent heurter la poutre de queue.

## Maintenance

- Graisse au silicone pour graisser les caoutchoucs amortisseur de têtes rotor, pas autre chose les autres huiles ou
  graisse a base de pétrole détruisent le caoutchouc.
- Graisse au téflon pour les roulements, on ne graisse que les roulements en boitier, les courrones externes jamais car
  la poussière s’accrocherait et ferait abrasif.
- La roue libre doit être bien nettoyée à intervalle régulier (tout les 50 vols sur le caliber 30, moins sur d’autre
  machine) sinon elle risque de se bloquer

## Moteur
- Opter pour un prolongateur de bougie, cela facilite le démarrage. Oublier les accus séparés et opter pour un panel qui
  en plus vous renseignera sur l’état de la bougie.
- Le moteur TT36 ne tourne bien que riche, très riche !!!! si ils marche erratiquement, virer le et acheter un os32 ou
  os46
- Changer tous les mois ou les deux mois la durite interne au réservoir, ceci est surtout valable si vous volez avec
  beaucoup de nitro (15%)
- Je vole avec une os8/enya3 car c’est la bougie recommandée pour les TT36, et OS32 Quel que soit le temps. En résumé plus
  le moteur à une forte cylindrée, plus la bougie sera froide. Faible cylindrée la bougie sera d’autant plus chaude que
  le moteur tourne sous un fort taux de nitro.
- Si vous déplacer l’helico, penser à boucher la sortie du pot avec un boulquies, cela évite a l’huile de goutter sur le
  parcours.
- Une durite/raccord de pot en silicone brule à la longue, acheter en une en téflon, plus cher, mais elle ne bougera
  plus.
- Penser à avoir un filtre a carburant sur l’hélico ainsi que sur la pompe à essence.

# Raptor 30
## Wah Wah

is the term used to describe the sound that comes from the autorotation hub engageing and disengagine from turning the
mainshaft due to a poor running motor in the mid-range. It is usually induced during descents. Just say Wah Wah Wah Wah
Wah in about a seconds time. That is what it sounds like. Many people including myself believe the best solution is to
put a load on the autorotation unit by using a slipper. Or, you can chase the needles around richening the motor up.

## Raptor 30 Woof
is the condition where the main-blades go violently out of track occasionally striking the boom in flight(“Poof”). Most
often this is caused by using blades with an unstable chordwise CG AND slop in the rotor head. With the V1’s slop it was
never a good idea to run unstable blades unless you work the slop out of the blade grips, cyclic control, and lower the
headspeed.

Technically it is “aeroelastic instability” which allows the blade to “couple” or resonate in pitch in a multiple of the
rotation rate. The Raptor trailing edge control arm can make it much more sensitive because of the “Delta” result.
“flipping” the head goes a long way in “fixing” it

## Super Servos

The term super servo is used to describe servos capable of running at high data frame rates (6ms per frame or less).
Examples of this type of servo are the JR2700G and Futaba-S9250. The use of super servos is highly recommended as they
allow the gyro to fully exploit its fast response.   
WARNING: Use of the super servo facility with servos not designed to accept the high frame rate will result in
damage to the servo.   
Below is a non exhaustive list of super servos:  
JR – (2700G, 4000, 2000, 7000, 7100, 8700G, 8417(Digital), 8231(Digital), 8411(Digital).  
Futaba – (9250, 9450(Digital)).

## Vibrations

Origine des vibrations sur un hélico rc :  
– basse fréquence : rotor principal (tracking, balourd)  
– moyenne fréquence : rotor d’anti-couple (transmission, balourd)  
– haute fréquence : moteur (balourd embrayage, indice thermique de la bougie)

## Voler en hiver

- À première vue voler en hiver ne pose pas de problème, mais…
- Dès que doigts sont gelés, ils perdent leur sensibilité, et vous perder en précision de vol
- Les accus NiCad tiennent bien moins longtemps car la temperature est basse (dans le négatif), au max 2 vols, il faut
  donc les recharger avant chaque vol pour etre sur.
- Le moteur ne démarre pas si vous n’installer pas un dispositif de chauffage ! c’est souvent un transistor polariser
  pour chauffer qui est fixé sur le bati du moteur.
- Tous ces problèmes sont relatés dans [ce fichier pdf en anglais](/assets/images/2004/09/ea_1296.pdf), très
  intéressant.
- Mon point de vue ? je ne vole pas en dessous de 10°C

## Choix du matériel de terrain

- Ultime conseil : si vous pensez que vous allez rester dans ce passe-temps, alors n’économiser pas ! exit le tuning mais
  acheter une bonne télécommande, si vous êtes dans un club, emprunter les démarreurs et chauffe bougie dans un premier
  temps…
- Ne pas acheter ce type de démarreur (embout hexagonal à emmancher dans un démarreur
  avion): ![](/assets/images/2004/08/hexstarter.JPG)   
  mais celui la :![](/assets/images/2004/08/metalHex2.JPG) impossible de s’en passer apres l’avoir essayé….plus de
  glissade ou d’ejection de l’embout, une rotation sans vibrations, une roue libre … etc même si l’embout coute à lui
  seul 50 €
- Ne pas acheter ce type de chauffe bougie : ![](/assets/images/2004/09/chauffebougie.JPG) mais celui
  la : ![](/assets/images/2004/09/powerpanel.jpg)car on peut verifier l’état de la bougie (vu mètre), cela permet
  d’avoir une seule batterie 12v comme source de courant. De plus le power panel limite la tension et augmente le
  courant si la bougie est mouillée automatiquement.
- Fabriquer ou acheter vous une mousse pour maintenir les pales durant le transport, si vous n’en avez pas, vous risquez
  de tordre la barre de BELL ou une tige de commande (cela coute de l’argent pour rien et vous empêchera de voler
  plusieurs jours en attendant les pieces détachés).
- L’achat d’un bon chargeur car cela influe sur la sécurité de vos modêles, combien de personne ont deja été convaincus
  qu'une nuit de charge suffirait, alors que les accus en secret n’acceptaient plus la charge !!!! Donc en conclusion :
  un chargeur delta peak, avec charge rapide, et affichage en fin de charge (si en 1H, les accus acceptent 100mAh au
  lieu de 1700mAh, il faudra les cycler (Ni-Cad) sinon les jeter sans pitié (Poubelle si les accus n’accepte plus que
  moins de 80% de la charge nominale)), enfin rien ne vous empêche de tout charger avec à la maison avec votre beau
  chargeur high-end (perceuse sans fil, jouets des enfants etc…)
- Ayez de bonnes lunettes de soleil qui : couvre bien sur les côtés, ne changent ou ne faussent pas les couleurs (cela
  évite les pertes d’orientations). Portez en, en hiver aussi (sans teinte) cela vous évitera d’avoir les yeux qui
  coule.
- Ayez une casquette avec visière pour les jours de gros soleil et chaleur,
- En hiver acheter des gants en soie et transformer les en mitaines (couper les extrémités des doigts)

## Choix d'une machine
- Débutants : NE JAMAIS ACHETER D’OCCASION ! sauf si vous connaissez la machine par ex votre beau frère a craqué et vous
  ne l’avez jamais vu voler avec…. sinon vous allez vous faire avoir. Seul un pilotes expérimenté saura jauger une
  machine et dire ce qu’il faut changer dessus. Acheter un pot échappement, pales, outillages, des pieces emballes ou
  qui ne sont pas soumise à des effort (patins, derive, tube etc..) oui mais surtout pas un moteur (qui sait ce qu’il a
  enduré ??) ou de l’electronique (aucune garantie et c’est dangeureux).
- Preferer un hélico avec transmission d’anticouple à courroie plutôt qu’une transmission rigide, en cas de crash la
  transmission rigide ne survit jamais et cela fera une pièce (chère) de plus a changer….(cher surtout en taille 60) .
  Ne pas croire que pour la 3D il faut une transmission rigide, c’est faux.
- Beaucoup de pilotes confirmé le disent, on s’amuse plus avec un raptor 30 que avec une machine high end car on pense
  toujours au crash. Beaucoup devant la somme nécessaire pour réparer un Xcell ou Nova (machine de rêve) abandonnent et
  achète un ARF (almost ready to fly) tout plastique. Il faut toujours de demander si cela vaut le coup, combien de
  temps on vole vraiment (honnêtement) et si on a rien d’autre dans la vie, essayer de penser dans ces moments à votre
  chère moitié, qui voudrait aussi des fleurs, sortir le week-end au lieu de réceptionner vos colis de pièces détachées
  😉
- Si vous étes débutant, acheter toujours une machine sur les conseils de votre parrain ou personne avec qui vous avez
  des affinités au sein du club et qui vous aidera, vous verrez rare sont les pilotes hélico qui refusent d’aider un
  débutant. Attention a ne pas vous faire refilez une machine d’occasion (beaucoup tenteront), préferez une machine
  neuve que vous saurez fiable avec un moteur neuf.
- On n'achète pas un hélicoptère sur un coup de coeur, surtout pas un fuselage maquette, un hélicoptère, c’est long à
  maitriser (des années tous les week end), dangereux et très cher a l’entretien. Ben oui c’est vrai !
- Fuselage maquette : je ne vais pas me faire d’amis sur ce coup la mais un débutant ne DOIT JAMAIS acheter un fuselage
  maquette d’occasion ! si les pilotes les vendent “a des gogos” (desolé mais aprés avoir lu la fin de la phrase vous
  n’en serez plus un potentiel) c’est que c’est exorbitant (au crash), invendable a un prix décent (pas plus du 1/3 du
  prix neuf !), difficilement réparable, d’entretien difficile, alors débutant fuyez même si c’est beau à regarder !!!
  ou alors à acheter au poids pour mettre sur le dessus de la cheminée (vraiment pas cher alors).
- Essayer de vous renseigner sur la machine et demander a des habitués du même club ce qu’il en pensent.
- Demander des photos de près et ne vous satisfaisiez pas de photos de loin, demander en beaucoup !
- Vous dire que beaucoup de machines reste longtemps a l’arrèt et que vous devrez sans doute changer le moteur !
- Prendre en compte tout ce qui va avec : servos, récepteurs, gyro, pales, pot, upgrades etc…
- Un hélico fortement upgradé n’est pas une affaire ! on dit souvent que le nombre d’upgrades est inversement
  proportionnel à la dexterité du pilote….de plus au premier crash, tout va tordre et se voiler (métal). Si vous voulez
  des photos de bel helico tout métal, me demander ou voir la gamme d’hélico DNHP (genre Ergo tout métal) faites en un
  poster mais pas plus.
- Actuellement (25.11.2002) pour un débutant : égalité avec un léger avantage pour le caliber
  30 ([review](images/Helico/caliber/review/review.htm))
  et ([comparaison Raptor 30 et caliber 30](images/Helico/config/raptor30vsCaliber30.htm)) Raptor 30 v2.0 ou caliber 30,
  autre chose n’est pas à recommandé (century par ex ou JR venture) car ils sont trop peu courant.

## Comment prendre soins de vos accus
et de votre hélico électrique en général

### Choix de l’helico

Un hélico taille 30 fonctionne en 24 ou 30 accus, ce qui fait deja un investissement (110€ les 12 accus). Preferer un helico 10 ou 12 éléments,,,,

### Choix des accus

- Des packs “inlines” ou “racing” uniquement (résistances totale moindre).
- Pas de pack zappés (moyen d’augmenter artificiellement la capacité et de diminuer la résistance interne en   
  envoyant 1000 A ou plus en impulsionnel ds chaque accus). Les fabriquants ne garantissent pas la fiabilité !
- Pas de nimh sur un helico 24 elts, pas d’applicaion ou plus de 20A sont demandés (peut Ãªtre dans le futur)
- Préférer des NiCad plus rustique mais plus tolérant face aux erreurs et brutalité que vous leur ferez subir. Si possible des RC2000 ou RC2400
- Accus **SANYO** :

- type “R” Accus pour charge rapide, adapté aux fort    courants de decharge et de charge.AR,SCR, RC.
- type “E” Capacité supérieure, meilleur rapport capacité    poids. AE, SCE
- type “U” Rapport capacité poids encore supérieure au type “E”    AE, SCE
- Standard Les moins chères. AA, A, SC

### Montage

- Sur un helico, ne pas utiliser le BEC, utiliser une alimÃªntation séparés, moins de pertubations et plus de sécurité.
- Des fils de batteries les plus court tu auras…moins d’interférences a subir.
- Les fils du contrÃ´leur au moteur aussi court que possible, mais attention certain brusless (kontronic) ont emaillé leur fils…a poncer avant de souder. C’est la source no1 d’interferences hautes fréquences.
- Des prises PK dorée a l’or d’au moins 4mm de diamètre et de qualité (Ã changer des que l’on voit le métal ou si   
  elles sont oxydées/rouillés)
- Récepteur FM (PPM) pour voir si le montage est sain et sans perturbations (interférences) mais après préférer un récepteur PCM.

### Maintenance

- utiliser un bon chargeur ! la securité du modèle en depend !
- Stocker les batteries déchargé et non chargé et dans un endroit frais (frigo mais pas congélateur) pour réduire   
  la réaction chimique interne.
- En cas de crash, les démonter et verifier les connexions.
- Les cycler toutes les 5 decharges.
- Ne pas les jeter par terre ou les stocker au soleil dans la voiture ou les tenir par les fils….

### Charge

- Les peaker (chargeur delta peak, ils le sont tous actuellement) juste avant de voler pour rattraper la chute de tension (7,5% en 6 heures)
- Varier les courants de charges pour prolonger leur durée de vie :  
  – charge rapide sous courant fort (4 a 5C) : pour avoir une décharge rapide des élements sous un courant plus fort, en fait   
  de la pÃªche mais moins longtemps.  
  – charge lente (C/10) pour une décharge plus lente, courant et tension debité sera moindre mais temps de vol allongé.
- ne pas équilibrer les pack (décharger une a une les batteries ds un resistance ou par court circuit)! sinon l’helico peut chuter   
  d’un coup par un manque subit de puissance
- ne pas les charger chauds, les placer sur une brique froide de camping et/ou sous un flux d’air

### Décharge

- Ne pas les laisser se décharger completement, dès le 1er signe de faiblesse, se poser…
- Fabriquer un canal de refroidissement forcé (ventilateur de pc suffisament puissant), voir mes photo

### Tips

- Méfier vous comme du diable de l’hélico, une fois la partie puissance branché, le moteur peut démarrer n’importe quand !

### Li-Ion

n'acheter jamais des li-ion d’occasion, (j’ai fait l’erreur) leur durée de vie ou nombre de cycle est très bas (300 fois). Symptomes, la charge se passe normalement (duréee normale de charge) mais la décharge est de l’ordre de 5 min (ex sur mon sony dscf 505)

## Why using nitro ?

Article from Ian Mc Donald

HIGH PERFORMANCE HELICOPTER FUELS Nitromethane: can truly be deemed "Liquid Horsepower" for model helicopters. For
additional power and generally smoother running, our flying machines can't really afford to live without it! If the
engine performance of your R/C helicopter is proving to be a bit of a problem for a whole tank of fuel, and you suffer
from overheating as the tank empties during hover, or the idle is difficult to get "just right", it may be that a dose
of good old fashioned "nitro" is what the engine doctor would order. Nitromethane is a liquid that has been around for a
long time and is used to contribute towards smoother running and increasing power in varying amounts of many model
fuels. In addition to altering the power output of an engine, it also contributes towards cooler, cleaner running,
smoother idling, and easier starting. Of course, the positive affects of nitro must be weighed against the cost of the
magic liquid, which can add from $2 to $4 per gallon per 5% of nitro. Other than the plain fact that nitro is probably
the easiest way to increase the power output, or smoothen the run of a model aircraft engine, the whys and wherefore's
of nitro are not well understood by most modelers (or anyone for that matter, based on the trouble I had finding
information on the subject) so what follows will attempt to shed light on the mystery and help heli flyers decide
whether they need use it, and if so, how much. Nitro is manufactured in production volumes by mixing nitric acid and
natural gas (or other hydrocarbon base) under high temperature and pressure. It can be made in the laboratory by some
complicated mixing and distilling of acetic acid, sodium carbonate, and sodium nitrate which is rather hazardous. The
element that is most important is the oxygen which "disassociates" from the liquid at high temperatures.

While Methanol has almost the same amount of oxygen (50%) by weight, it is the overall "mix" that contributes to the
unique nature of nitro, allowing a much higher fuel flow and the typically inert nitrogen which can serve to "soften"
the shock of the combustion process and inhibit pre-ignition (this is not to say using nitro prevents pre-ignition). All
fuels, whether gasoline, methanol or nitro (which incidentally can be burnt at 100% mix like most fuels) have a "
stoichiometric" (I brought this word in in a wheelbarrow!) or chemically correct air to fuel ratio, at which they
theoretically (as calculated by chemists on paper) burn the most efficiently in air. With gasoline it is 14.9:1 (air to
fuel) with best power at 12.7 and best fuel consumption at 15-16:1. Gas puts out 2.78 kilo Joules of energy per kg.
Stoichiometric methanol burns best at 6.5:1 or twice the liquid (by volume) for the same amount of air as gas and
produces 2.67 kJ per kg, slightly less than petrol, but typically produces 10% more power due to the temperature drop of
the mixture as it vaporizes, which produces a more dense mixture (higher density = more power). Methanol burns twice as
much liquid as gasoline because it carries its own oxygen supply along with it (50% by weight). Methanol can also run
40% rich and still make good power because of this. This excess fuel contributes to cooler operating temperatures. Nitro
burns at a big 1.7:1, or 37% liquid, 63% air, or nearly three times as much liquid as methanol. Energy at stoichiometric
= 4.05 kJ per kilogram or 1.5 times that of methanol. This is where the effects of nitro become important. Getting fuel
into an engine is never a problem. The problem with producing power from a given engine is getting the air in! Hence,
the use of superchargers, turbochargers, special manifolding, porting and valving arrangements on modern car engines.
With model engines in general, we don't have the luxury of supercharges, etc. (the 0S 120 Supercharged four stroke being
the exception). So Nitromethane actually provides "chemical" supercharging, introducing up to 3.8 times more liquid
overall or 5.5 times more oxygen per liter at 100% "stoichiometric" mix, meaning more fuel (methanol) can be burnt,
because of all the extra oxygen (the oxidizing agent). For example, a methanol only mix provides 400 grams / liter of
oxygen (gasoline has zero oxygen). At 20% nitro, there is 3.14 kJ/kg of energy and 436 g/l of oxygen, and because at 20%
nitro the correct mixture or air / fuel ratio is about 4.2:1, a 35% increase in fuel flow will occur, which means around
47% more oxygen ends up in the engine when tuned correctly. I know this sounds complicated, but I did check my math
repeatedly, and it all makes sense if you remember that we are talking about quantities here in two different
situations: specific quantities per liter and quantities per liter at the "stoichiometric" mixture fuel flow! This
increase in oxygen availability and fuel flow amounts to richer running. For example, the main needle has to be opened
further to flow the correct amount of liquid to match the incoming air (which is pretty constant at any given throttle
opening / rpm level). This also means that the tank may last up to 35% less than with straight methanol fuel. If you get
20 minutes with "straight" fuel, 20% nitro could only last 15 or so minutes. (In practice this is not a linear
relationship. With more nitro, typically a smaller throttle opening is needed for the same amount of power, i.e. at
hover. So it's generally more than 15 minutes mentioned here but less than the original 20 minutes.) With all this extra
oxygen and fuel going into the engine, more power is available, as mentioned before, up to 50% at 80% nitro has been
measured. So for every 5% nitro, a power increase of about 3-4% might occur if everything is adjusted correctly. Of
course 3% is not much, but at 30% nitro which is common in the USA and Japan in choppers 15% to 20% power increases are
easily within reach. More power equals a higher combustion pressure which equals more heat! Cooling: Of course with 42%
more liquid going through the engine at 30% nitro much more heat can be soaked up – liquid absorbs heat much better than
air. There is also 42% more oil going into the engine, almost flushing the internals continuously, which also helps take
out more heat. So we have internal liquid cooling! All this extra liquid keeps the metal surface temperatures down and
eliminates the burning of oil to carbon. So there are usually little or no carbon deposits in nitro fueled engines above
10% nitro. The cooling effect of nitro is further born out by the increased usage of high nitro fuels in fuselaged
models which are almost totally enclosed for drag minimization. The nitro is used just as much for cooling as it is for
good power! Nitro won't necessarily work the same wonders in engines from different manufacturers.

Typically the Japanese have been heavy nitro "users" and produce engines which work well on high nitro and have
relatively low compression ratios. In contrast, the European manufacturers, with nitro being more expensive and hard to
get in Europe (not that it is all that cheap in Japan), appear to have engineered their engines with higher compression
ratios for little or no nitro usage. It is not unusual to have to "decompress" European engines for satisfactory high
nitro operation. Nitro may not tune the same on different engine types, even from the same manufacturer, because the
combustion process in a glow engine is triggered by a catalytic reaction of the compressed mixture with the platinum
compound of the glow plug. Many different factors affect the "timing" of the ignition of the fuel / air mix (i.e. fuel
quality and mixture setting, ambient air temperature, engine temperature, fuel temperature actual compression ratio,
inlet &amp; exhaust timing, muffler/type, etc.). This is in contrast to a gasoline spark engine where the ignition
timing is influenced predominantly by the spark timing, which can always be optimized for best engine running at any
rpm. Further, the tuning with nitro can also be affected by the ability of the carburetor to deliver the fuel in
sufficient quantity/accuracy thru various speed ranges. On some engines, the engine may not run well in hover above, say
12% nitro, but merely changing to a different carb, with better mid range flow adjustability may fix the problem. Also,
too high a compression ratio with too much nitro may have combustion on the edge of pre-ignition , and cause unreliable
running and may be difficult to tune. Decreasing nitro content or decreasing compression ratios may very well cure the
problem, as trying glow plugs with different heat ranges. Hooked on Nitro: Many people will have heard that some engines
are "hooked" on nitro, i.e. on nitro they run great, straight fuel they run like a dog, or have less power. While not
necessarily "hooked" on nitro, they are used to running at a particular temperature, and all the clearances (especially
piston to bore clearance in an ABC engine) in the engine are run in at that temperature. Changing the nitro content
changes the operating temperature and you have a different engine on your hands. While researching this article it
became evident that information on nitro is very scarce. So if anyone out there has more information or would like to
comment on or "discuss" any part of this article, please let me know c/o Rotory or at my CompuServe address:
100240,2265. IAN McDONALD