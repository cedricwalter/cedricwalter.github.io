---

title: 'Comment lutter contre le spam?'
date: '2004-08-31T23:13:08+02:00'
author: 'Cédric Walter'



tags:

- communications
- Spam
- spammer

---

# Definition**: On défnit le *

spam* comme étant l’envoi non solicité de mails à des centaines, des milliers ou des millions d’utilisateurs au hasard.
Ces messages propose des biens matériels, des services financiers, des fichiers importants et même de la pornographie.
Les technologies internet étant en perpétuelle évolution, le spam évolue en même temps. On a même vu des *
spammeurs* attaquer des forums de discussions en y postant des messages sans rapport avec les sujets.

Cette page va être constamment mise à jour, je ne donne pas de documentions sur le fonctionnement des logiciels
présentés, simplement des pistes de départ pour lutter contre le spam, en général le fabricant ou la société possède
déja un tutorial sur son programme.

## Filtrage du contenu HTML en temps réel

Webwasher est gratuit pour un usage personnelle [www.webwasher.com](http://www.webwasher.com/) il permet de filtrer les
webbugs, interdit les referers, FILTRE les bannières de publicité par taille (beaucoup ont une taille standard) et au
choix interdit ou filtre les GIF animés (n’affiche que la première image). L’effet bonus est que le surf est plus rapide
sans publicité.

## Firewall: filtrer l’accés aux ports du pc

### Toujours installer un firewall,** il s’agit d’un logiciel qui filtre les ports de communications de votres pc et permet de définir des règles d’autorisation, vour verrez alors:

- Quelquefois votre pc envoyer des donnees vers des sites étranges alors que vous ne browser pas de page, il s’agit de
  scripts qui renvoie des *cookies* (petit fichiers texte qui contiennent des informations sur vos habitudes, ou qui
  sont nécessaires au bon fonctionnement des sites de ventes) de tracing.
- Des programmes de votre disque qui envoient des données alors que vous leur interdisez! Media Player 9, winamp3, XML
  Spy,…. etc c’est honteux
- Des personnes qui envoient des requtes sur la pile tcip ou sur le system (port 445 par exemple) il s’agit de worms,
  chevaux de troie, virus divers. En fait les virus se propagent de machine infectées à machine infectées sans la
  moindre actions de l’utilisateur. La plupart de ces vers, s’installent et ouvrent des accés a votre machine à
  distance. Les plus évolués exploitent des failles ou coupe tout simplemeent le firewall!

### Firewall gratuit:

Kerio personal [www.kerio.com](http://www.kerio.com/)

## Autres browser

Preferer le browser [Opera](http://www.opera.com/) qui est moins répandue que Internet explorer *IE*)car:

- Il permet d’interdire les *referer*, technology qui permet de vous suivre (de quelle site A venez vous, si vous
  arrivez sur un site B), (menu file – preferences – privacy)
- Moins répandue donc il y a moins de scripts/virus qui risque de marcher, la plupart étant optimisé/ne fonctionnant que
  sous Internet explorer (*IE*),
- Il permet de mieux filtrer les cookies.
- Il permet d’uinterdire gif animés, pubs, et scripts sournoix.

## Eradiquer les scripts présent sur votre PC

Installer et lancer à intervalle régulier [adWare de lavasoft](http://www.lavasoftusa.com/), ou son
concurent [Spybot](http://security.kolla.de/) (totallement gratuit). il s’agit de tools qui scanne la mémoire, la base
de registre et le disque dur a la recherche de:

- *Datamining*,
- *Adware*  
  Adware may just be the newest and perhaps most misunderstood form of targeted advertising and there are legitimate
  companies that ensure personal information is not tracked.. ‘just your browsing habits’. However the very nature of
  Spyware &amp; Adware enables the compilation of really any data tracking companies see a need or have the desire to
  collect on you. There is no way of controlling what leaves your computer. Many companies have good “advertising only”
  intentions but doesnt any company have potential bad apples that could gather just a little bit more info than they
  are supposed to. For example when you order something online or login to a personal account, your username and
  passwords are sometimes displayed in the URL field at the top of your screen. If these query strings were captured
  there is no telling just how much damage could be done to your identity &amp; your finances!   
  Adware like Spyware, comes with great risk to your privacy. Tracking software is installed on your PC which
  continuously gathers data about yourself and others who use your computer. A livelink from your PC to the Spyware Co.
  is virtually peeking in on your every move whether you like it or not.
- *Publicité*,
- *Parasites*,
- *Scumware*,   
  Spyware consists of deeply embedded components of freeware, shareware and file sharing software. Free and near free
  sites are enabled to secure a revenue source by requiring users to agree to the monitoring of their keystrokes and
  online activity by the spyware developing company. Such Advertising supported software gives the shareware providers a
  revenue stream at the expense of your personal privacy. Your browsing habits, frequented sites, favorite downloads and
  the like are carefully recorded and provided to companies that in turn bombard you with targeted popups and banner ads
  that will ‘conveniently’ be in your area of interest.
- *Spybots*  
  Spybot worms are virtual pests more commonly known as spyware that sneak into your computer via exposed ports and
  disguised downloads and compromise your personal Security. These spybots spread via IRC and other programs and
  typically attempt to modify the config files of mIRC client software. As new users join the same specific channel
  shared by an infected PC, the malicious worm will prompt for download. This prompt can be disguised very well as a
  legitimate requirement like a client   
  software upgrade, but Beware Scan all downloads first.
- *Keyloggers*, petits programmes qui enregistrent vos passwords lorque vous les saississer!
- *Virus chevaux de Troie (Trojans)*, certains essaient même d’ouvrir votre firewall.  
  A Trojan horse is a computer program which contains malicious programming code.This code is contained inside
  apparently harmless software or data and can unexpectedly seize control and often impose irrepairable damage. IE. such
  as damaging FAT files on your hard disk. A Trojan horse can be programmed to self replicate and may widely
  redistribute its harmful payload as part of a computer virus.
- *Dialers*, leurs but: vous connecter par modem sur un service payant à plusieurs euro la minutes, pas dangeureux si
  vous n’avez pas de modem téléphonique (56K).
- *Malware*,  
  Malware is a shortened version of ‘malicious software code’. Malicious software can include anything from trojans,
  hijackers, spyware and adware to computer worms and viruses. Any piece of content and code that acts in a way contrary
  to expectations could be deemed as malware. Therefore by this definition irritating popups and unsolicited email (
  spam) can be forms of malware.
- *Browser hijackers, and tracking components*

il nettoie votre pc de toutes ces cochonneries, pensez a updater regulierement sa base de connaissance, il est gratuit
mais il faut l’acheter si vous voulez le laissez tourner en tache de fond (protection maximale). La derniere version
registrer contient une partie résidente qui interdit les banners, bloque les referer et interdit les changements dans la
base de registre de windows.

## Règles d’or: ne jamais…

- NE JAMAIS ouvrir un email, suspect mais le détruire! souvent le mail contient des balises ou confirme à son expéditeur
  que la personne a lu son message et donc que l’email est valide. Prévenir vos connaissances qu’il ne doivent pas
  utiliser des titres de mail peu équivoque sous risque de se faire détruire par vous. Genre salut, hi hello. De meme,
  ne vous faites pas avoir par des titres de messages qui ne vous disent rien (du genre Re: xxxxxxx si vous avez rien
  envoyes a cette personne)
- NE JAMAIS mettre sur votre site votre email, si vous voulez vous faire contacter, preferer créer une image jpg qui
  contient vos coordonnees: la reconnaissance de caractère est consommatrice de calcul et hors de portée d’un robot qui
  scannerai le web a la recherche d’email (quoique).
- NE JAMAIS répondre et demander à se faire enlever d’une liste de diffusion, cela ne marche pas et vous allez
  apparaitre sur une autre liste car votre email à été validé.
- NE JAMAIS transmettre un numéro secret, au pire cachez le dans une image en alternant les fontes, couleurs et taille
  de caractères. Vous pouvez aussi incliner ou barrer les caractères pour rendre l’OCR inopérant.
- TOUJOURS mentir! si jamais on vous demande un email valide afin de compléter une registration ou finir un download,
  penser a donner ou a creer une boite au lettre “poubelle” qui ne servira qu’a cet usage.
- Si vous avez des doutes sur certains mails, bloqué dans votre firewall tout le trafic le temps de lire vos mails (au
  moins aucune info ne pourra sortir de maniere automatique sur le reseau)

## Luttes communautaires p2p

Si vous avez la chance d’avoir un provider qui utilise la technologie POP3 (par exemple si vous utilisez Outlook) alors
vous pourrez utliser un plugin outlook, il existe un réseau peer to peer de lutte contre le spam (à installer comme un
plugin), il s’agit d’un réseau communautaire de lutte ou chacun marque les emails suspect et aide les autres à ne plus
les recevoir.

- [**http://www.cs.berkeley.edu/~zf/spamwatch/**](http://www.cs.berkeley.edu/~zf/spamwatch/) *“SpamWatch is a
  collaborative spam filtering system built on top of Tapestry, a peer-to-peer location/routing infrastructure.
  SpamWatch has the following features:   
  Collaborative – Every user in a SpamWatch community contributes to the community by tagging certain emails as spam,
  and benefits from the contribution of all others.  
  Peer-to-peer – Peer nodes (often local mail servers) join the large peer-to-peer network and provide service to local
  users. Tapestry ensures quick and accurate location of records and supports dynamic joining/leaving of peers.  
  Content similarity based – The identification of spam emails are based on the content of emails, not on subject,
  sender or IP address. Moreover, moderate altercation of the content is tolerated. Common techniques used by spammers
  such as changing the salutation or spacing between words will not prevent the spams from being caught.”*
- [**http://www.outlook-spam-filter.com/**](http://www.outlook-spam-filter.com/) *Outlook Spam Filter 2.0 is an
  easy-to-use Microsoft OutlookÂ® add-on designed to provide an advanced protection against spammers and unsolicited
  emails. The program uses Bayesian filtering technology that identifies about 97% of incoming spam messages. Outlook
  Spam Filter seamlessly integrates into the Microsoft OutlookÂ® workspace, scanning and quarantining away junk emails.
  Caught spam is placed in a special ‘Spam’ folder under your inbox if you ever want to review it later.*
- Taper *p2p spam outlook* dans google pour trouver d’autre technologies intéressantes

## Veille

- Méfier vous de messenger et de hotmail, Microsoft est connu pour pousser le marketting au maximum, raison de plus pour
  installer un firewall et filtrer.
- Si vous remplissez un formulaire web pour pouvoir télécharger un logiciels ou recevoir un login, creer un compte bidon
  qui fera office de poubelle. Ces sociétés veulent un fichier clients et le monnayent souvent à d’autres société.

## Autres

Si vous avez de la bande passante (adsl ou cable 512kbits) et si vous étes parano, interdisez le cache! ou videz le
après chaque session de surf (y comprit le contenu offline). TweakUI permet de faire cela. En effet nombre de cookie
sont sauvés dans le cache, il signale dans quelle site vous etes passés, sur quelle site de vente vous êtes allés
etc….Vous serez obligés de vous relogguer à chaque fois sur [ebay](http://www.ebay.fr/) par ex. ou vos forums, mais
c’est le prix de la tranquilité.

## Spam humanistes ou bienfaiteur

Rien n’est pire que cela, ce sont vos propres amis qui vous innonde de mails à la con, il s’agit
de [hoax](http://www.hoax.net/), par ex: “*mon enfant est malades, si chacun me renvoie 1$ alors….*” ou “*une
télécommande pour éteindre les radards routiers*” ou “*nokia vous offre un portable si vous envoyer 50 fois ce messages*
” et autres débilités. La avant de faire n’importe quoi, allez sur un des sites qui référence les hoax et regarder avant
de polluer la boite d’email de vos camarades. Attention les hoax subissent des mutations! les idiots qui les crées font
varier quelques paragraphes dès qu’il savent qu’ils sont repérés.

portail Hoax: <http://hoaxbusters.ciac.org/>

## Browser internet anonymement

2 alternatives:

- Chainer les proxy publics dans internet explorer: pour peu que vous utilisiez des proxy dans des pays différents, il y
  a très peu de chance qu’une société, ou un gouvernement arrive a récupérer les logs de tous les serveurs avant que
  ceux ci ne se fassent purger par leurs prestataires. Les proxy publics se trouvent
  avec [www.google.com](http://www.google.com/) en tapant “proxy public”. Pour les chainer, il suffit de les séparer par
  des “;” dans le panneau de configurations de IE.
- Acheter ce service à des sociétés tierces (www.anonymizer.com par exemple) même principe que le proxy.
- Utiliser [JAP](http://anon.inf.tu-dresden.de/index_en.html), (projet open source) JAP rend possible le surf sur
  internet de manière anonyme et empêche la tracabilité.
- Utiliser [FreeNET](http://www.freenet.org/)

## P2P kazaa, emule, edonkey

En P2P vous n’etes jamais anonyme, Car pour fonctionner, ces logiciels ouvrent des connections point à point entre les
clients (pas besoin de serveurs hormis pour indexer les clients et gérer la gestion des crédits, les recherches de
fichiers). En fait installer un firewall et tenez vous au courant de ce qui circule sur ces réseaux (Méfier vous des
vers (worms) sur le port 445 de emule, n’autoriser que les quelques ports nécessaire à son fonctionnement). Ne vous en
faites pas la communauté open source cherche deja un moyen de se passer de ces adresses IP (par exemple en utilisant le
broadcasting ou le cryptage par couches/mixages des paquets comme dans JAP) et donc de disparaitre du radar des majors
ou des personnes malveillantes. Ne partager jamais votre liste de fichiers, inutile de dire à un etranger que vous avez
20000 mp3 ou autres a partager.

## Désactiver

- Désactiver ActiveX en priorité dans les pages, c’est la pire des technologies internet et elle permet d’avoir un
  controle quasi-totale sur votre systeme.
- Internet explorer *IE* est une calamités technologique ambulantes, essayer tant que possible de vous en passser,
  essayer Firefox ou mozilla
- Vérifier toujours 2 fois avant d’accepter ou de truster une compagnie avant d’installer un de leur plugin.

## Pouriel

Beaucoup de process de registration, ou de download demande maintenant une adresse email pour fonctionner (bonne idee
pour se constituer un fichiuer rapidement), l’idée est de creer une boite a letter poubelle ou mieux temporaire qui ne
servira qu’a cela.  
ex: <spammerfuck@hotmail.com> ou [OnlyForReg@hotmail.com](mailto:OnlyForreg@hotmail.com)  
[www.abuse.org](http://www.abuse.org/) vous permet de creer un email bidon de duree de vie limité (de 1h a 24h) et qui
redirige les mails vers votre adresse reelle.

## Liens internet

## Trop tard

Vous etes reperés, votre boite au lettres contient plus de mails de spam que de mails intéressant, seule solution: La
fuite! détruisez et ne vous connectez plus sur ce compte. Astuces pour signalez a tous vos contacts que vous n’etes plus
la, remplissez votre boite a lettre a la limite admissible, ou si cela est possible: utiliser la fonction auto reply qui
contiendra votre nouvelle adresse sous forme d’images si possible scrambler comme cet exemple:

![](/assets/images/2004/08/atMSN.gif)