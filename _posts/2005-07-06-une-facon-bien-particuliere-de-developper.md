---
id: 1815
title: 'Une facon bien particulière de developper?'
date: '2005-07-06T09:23:47+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=1815'
permalink: /java/une-facon-bien-particuliere-de-developper/
---

Beaucoup de personne me connaissant et qui m’écrivent me demande comment je developpe mes programmes java car je trouve toujours le moyen d’en faire des frameworks…ce qui est par définition plus dur.

# Eh bien j’applique plusieurs petite règles simples…**

1. Un bon tool: je ne travaille qu’avec eclipse ([www.eclipse.org](http://www.eclipse.org/)) car c’est un IDE de qualité et malgré la quantité de perspectives (j’en ai 16), views (j’en ai 64) et plugins (>20), je m’y sens à l’aise. Je privilégie la vue hiérarchique “java browsing view” avec une vue supplementaire “hiérarchie” (F4) car cela facilite la navigation et le découpage sémantique losque je dévelope (**projets**<-> **packages**<->**objets**<->**hiérarchie**<->**méthodes**<->**code**)
2. Un **environnement de travail propice**: Je travaille avec 2 écrans (un 21” et un 15’4 LCD) car rien n’est plus ennuyeux de perdre son temps à bouger/réduire/changer de tâches sans cesse. Cela me permet aussi de travailler en parallèle. C’est déroutant au début mais rien n’est plus malléable que le cerveau humain et vous vous surprendrez au bout de quelques semaines en passant d’un écran à l’autre sans cesse. C’est simple si demain je trouve une méthode fiables et peu couteuse en temps CPU (pas avec une carte video USB svp) pour avoir un troisième écran, je saute sur l’occasion immédiatement.

Ces 2 règles ne participent qu’a hauteur de 15% à un travail de qualité…mais elle réduisent le stress au poste de travail. Le reste est plus standard…

Quelques techniques de développement modernes, ont bouleversés ma vie (relativement courte) de developpeur:

1. Les “**design patterns**” pour appliquer des élements d’architectures éprouvés à des classes de problèmes.   
    Il faut bien sur les comprendre (quand les appliquer et leurs bénéfices/inconvénients) sans pour autant savoir les implémenter. J’en place un maximum sans effort grà Â¢ce à un générateur de pattern (plugin eclipse).  
    Je me débrouille pour avoir des hièrarchies la ou c’est évident (mais en général, elles apparaissent toute seule cf. **Refactoring**), j’ai rarement des super classes non abstraites et sans interface, je crée toujours des interfaces pour augmenter le niveau d’abstraction dans mon code à chaque niveau (layer) et laisser à l’utilisateur le droit d’insérer son code dans le mien.  
    Rappeler vous: sans interfaces, vous n’avez pas de polymorphisme en java et un typage trop fort (pourquoi encore passer des types concrets à vos objets alors que l’on peut jouer à des niveaux plus abstraits avec les interfaces?)  
    Les design patterns apportent, à mon code, la flexibilité (pattern de créations), le dynamisme (pattern de comportements) ou améliore le design (pattern de structures)  
    Je n’hésite pas non plus à créer des objets en quantités et à leur donner les droits et fonctions minimums qui leurs incombent, car peu m’inporte les pertes de performances: je privilégie le design quitte à devoir profiler plus tard.
2. Les “**antipatterns**” ([www.antipatterns.com/](http://www.antipatterns.com/)) leur contraire, en général lorsque je récupère du code dans un mauvais état. Cela m’aide à trouver quelle “design patterns” peut arranger la situation (en vue de la correction d’un bug, pour améliorer la maintenance etc…)
3. Je programme de plus en plus “par intentions” (lien-> [informit](http://www.informit.com/articles/article.asp?p=357688&rl=1)), une idée centrale de l’extreme programming (XP voir  [www.extremeprogramming.org](http://www.extremeprogramming.org/) ). Comment le client voudrait avoir à utiliser mon code, en fait à quoi doit ressembler idéalement le code (le nom des types, des méthodes, des mediateurs). Je les écrits (comme un squelette) et bien sur ils n’existent pas encore, (donc compile error). Je force donc eclipse à les créer (Quick fix ou CTRL-1) et remplis les blancs, à savoir l’implémentation, ce qui est forcément une tache moins intéressante.
4. l’UML (**Unified Modelling Language**) oui de plus en plus, mais uniquement pour observer l’évolution des dépendances entre les objects (les motifs et les relations) sur mon 2ème écran. Et toujours en reverse engineering: je modifie le code java et observe d’un oeil le diagramme UML. En fait cela rejoint la programmation par intention dans un sens sauf que normalement on part de l’UML par intention pour créer le squellete du code java et non l’inverse. Le sens que j’utilise permet cependant de compléter mon javadoc ou ma documentation efficacement.
5. Les “**metrics**” ([plugin eclipse metrics](http://metrics.sourceforge.net/)) ne me servent que rarement mais surtout pour auditter du code ne m’appartenant pas. J’utilise neanmoins le [plugin Code analysys plugin ](http://sourceforge.net/projects/cap4e/)(**CAP**) ou celui de IBM alphawork: [Structural Analysis for Java](http://www.alphaworks.ibm.com/tech/sa4j) (**SA4j**) néanmoins de temps en temps…

# Mais la véritable APOCALYPSE est survenue chez moi il y a trois ans:**

1. Avec le “**Refactoring**” ‘ [www.refactoring.com](http://www.refactoring.com/) ) il m’est impossible de tout prévoir et c’est la que trés rapidement, le refactoring tool de eclipse m’aide car j’itère des changes atomiques (dans le sens: élémentaire et rapide) très rapidement à travers tout mon code et cela en permanence. Des méthodes bougent ou disparaissent, je renomme en permanence tout: variables, objects, packages (pour éviter des commentaires à travers mon code). j’introduit aussi des design patterns.  
    Je les utilisent tellement que j’ai définit des racourcis clavier dans le workspace de eclipse.  
    Le code devient de plus en plus petit (donc moins de bugs/lignes) et fait de plus en plus de chose (par design). Il se bonnifie avec un risque minimum d’instabilité car
2. J’utilise des “**test unitaires**” (Junit [www.junit.org](http://www.junit.org/)) qui m’assure aprés chaque gros refactoring que je n’ai pas perdu de fonctionnalitées, cela me sert aussi à tester mes interfaces: comment mon code va ètre utilisé?, est ce que les signatures sont bien choisies? y a t’il assez de constructors et d’accessors, et sont t’il pertinents? La plupart du temps cela me force repasser par une étape de refactoring dans mon code.

Est ce la bonne facon de developper? cela dépend des situations, du domaine ou vous travaillez et de vous bien sur.

Est t’on forcément plus lent? oui et non, cette méthode est déroutante de prime abord mais elle respecte la théorie de l’évolution biologique, génération après génération (refactoring – design – refactoring – unit test) le code devient meilleur.

# Attention**: on est pas forcément plus lent, mais cette méthode n’est pas très adaptée au problèmes pointues: on peut se prendre des murs sans cesse (et donc réimplémenter-refactorer) si on ne réflechit pas assez au préalable.

D’un autre coté, ce qui est certain, c’est que écrire des frameworks est forcément plus long et plus dur que, en caricaturant, faire un main() de 150 lignes (mon dieu, cela se voit encore trop souvent). L’interèt de l’existence d’un framework est dans la réutilisation par d’autres personnes de votre code, et le fait que vous avez deja réalisés pour eux les taches les plus difficiles, mais tout en leur laissant la liberté de spécialiser votre code au besoin.

Dans les composants java du coté serveur que je réalise pour l’ecommerce d’assurance vie, cela a toujours fonctionné. En tout cas pour moi….