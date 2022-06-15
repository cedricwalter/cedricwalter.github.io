---

title: 'Comment installer un tool d&#8217;accés à  distance sur votre PC&#8230;'
date: '2005-04-08T22:58:04+02:00'
author: 'Cédric Walter'



header:
  teaser: /assets/images/2005/04/tightvnc_logo.jpg
---

# Comment installer un tool d’accés à distance sur votre PC…  
Version 1.0, copyright Walter Cedric, [Licence FDL](http://www.gnu.org/copyleft/fdl.html) (GNU Free Documentation License)

# Pourquoi?**

- Si vous avez un copain (Rémy informaticien) qui peut vous aider mais qui habite trop loin pour venir vous aider sur votre ordinateur a un moment donne,
- Pour administrer des machines sans écran,
- Pour acceder a un bureau Macinstosh sous windows ou sous linux ou inversement.

Il existe de nombreux logiciels qui permettent de prendre controle d’un pc a distance (a travers un reseau locale ou internet), voici comment installer [Tight-VNC](http://www.tightvnc.com/) un logiciel Open source et multi plattform (des clients pour le monde windows-linux-java existent)

| [![](/assets/images/2005/04/tightvnc_logo.jpg)](http://www.tightvnc.com/) | VNC (pour Virtual Network Computing) est un logiciel distribué gratuitement par les laboratoires de recherche d’AT&amp;T. Il s’agit d’une application client / serveur permettant, à partir de sa machine ("client" ) de prendre aisément le contrôle total d’un ordinateur quel que soit son emplacement ("serveur" ) via un réseau local ou encore Internet (TCP / IP). Tight VNC est une version "légère" de VNC qui nécessite moins de ressources système et qui s’accomode de moins d’un réseau moins performant si besoin est…. |
|---|---|

Ce logiciel se compose de deux parties:

| **client** | La partie cliente permet de se connecter à un ordianteur qui a la partie serveur |
|---|---|
| **serveur** | Il existe des serveurs pour toutes les architectures, Unix, Mac, windows, autres |

Ex: Rémy informaticien eut aider son ami novice, Régis qui à des problèmes sur sa machine windows. Rémy va installer la partie cliente (chapitre 2) et Régis la partie serveur sur son PC. (chapitre 1)

**1. Installer la partie la partie serveur**

| [http://www.tightvnc.com/download.html](http://www.tightvnc.com/download.html)par exemple: (le numéro de version importe peu)  Windows tightvnc-1.2.9-setup.exe | Télecharger Tight VNC serveur |
|---|---|
| ![](/assets/images/2005/04/tightvnc_install.jpg) | Double clicker sur l’icone pour lancer l’installation |
| ![](/assets/images/2005/04/tightvnc_installstarting.jpg) | Une fenêtre apparait, appuyer simplement sur suivant (bouton Next > ) |
| ![](/assets/images/2005/04/tightvnc_licence.jpg) | Lire la licence et l’accepter en cliquant sur suivant (bouton Next > ) |
| ![](/assets/images/2005/04/tightvnc_installlocation.jpg) | Choisir le répertoire de destination du logiciel que vous êtes en train d’installer.   Le répertoire par défaut convient très bien. Veuiller simplement cliquer sur suivant (bouton Next > ) |
| ![](/assets/images/2005/04/tightvnc_choosingComponents.jpg) | Vous pouvez sélectionner tous les composants (si vous voulez accéder à des machines distantes) ou juste la partie    serveur (comme sur l’image à gauche ) si vous voulez être aider. |
| ![](/assets/images/2005/04/tightvnc_next.jpg) | Valider ssimplement sur ce masque en cliquant sur suivant (bouton Next > ) |
| ![](/assets/images/2005/04/tightvnc_register.jpg) | Les deux doivent être selectionner avant de cliquer sur suivant (bouton Next > ) |
| ![](/assets/images/2005/04/tightvnc_completinginstall.jpg) | Confirmer tous les choix précédents et laisser l’installation se terminer… |
| ![](/assets/images/2005/04/tightvnc_afterinstall.jpg) | attendez jusque cette fenêtre apparaisse… |
| ![](/assets/images/2005/04/tightvnc_choosingpassword.jpg) | **Point 1A**Il s’agit maintenant de définir un password que seule **vous** et **votre collègue** connaitra. Une phrase est une bonne idée de départ.   Pensez à mélanger des chiffres et des caractères. Il faut entrer ce password deux fois aux 2 elipses comme sur l’image de gauche.  Une fois choisi il faut noter ce password et le donner à votre ami de confiance qui va vous aider. |
| ![](/assets/images/2005/04/tightvnc_finish.jpg) | Ssimplement cliquer sur FIN (Finish) |
| ![](/assets/images/2005/04/tightvnc_systemTray.jpg) | Si tous s’est bien passé, vous devriez avoir un icone V comme sur la photo de gauche dans le coin inférieur droit de votre bureau windows. |
|  |  |

Avant d’appeler votre ami Rémy l’informaticien au téléphone….

| Pour accéder à votre PC, il y besoin de deux informations encore…. |  |
|---|---|
|  | 1. Le password que vous avez choisi, sans cela impossible de se connecter sur votre machine. Il s’agit du mot de passe choisi au point **Point 1A** |
|  | 2. Votre adresse internet ou IP, un nombre sur 32bits qui vous identifie vous et votre machine de maniere unique sur un réseau. Cee nombre est assemble par paquet de 4 nombre a 3 chiffre: WWW.XXX.YYY.ZZZ **Pour votre culture….**  - La technologie ADSL change votre adresse IP tous les 24heures en moyenne, **mais** elle peut changer aléatoirement au bon vouloir de votre fournisseur d’accès internet. - La technologie Cable peut vous attribuer une adresse IP qui peut ne pas changer pendant plusieurs semaines, **mais** elle peut changer alaéatoirement au bon vouloir de votre fournisseur d’accès internet. - La technologie modem téléphonique attribue une adresse IP **différente à chaque fois** que vous vous connecter.  En conséquence…vous dever chaque fois que vous désirez utiliser un accès distant connaitre l’adresse IP de la machine cible. Vous devez donc donner votre adresse IP à votre ami Rémy. |
| ![](/assets/images/2005/04/tightvnc_execute.jpg) | **Connaitre son adresse IP (vous devez être connecter à internet)**Allez dans le menu windows démarrer (1 ou Start)  puis exécuter (2 ou Run) |
| ![](/assets/images/2005/04/tightvnc_cmd.jpg) | Taper *cmd* puis cliquer sur OK |
| ![](/assets/images/2005/04/tightvnc_ipconfig.jpg) | Une fenêtre noir apparait, taper *ipconfig* puis la touche ***ENTER*** du clavier |
| ![](/assets/images/2005/04/tightvnc_yourIP.jpg) | Localiser votre adresse IP, ici cela serait 192.168.1.100 **Pour votre culture….**  **L’adresse ci dessus 192.168.1.100 ne peut pas marcher, car elle est caratéristique d’une adresse internet attribué par un routeur ou HUB, qui va créer une adresse (ou attribuer) à chaque périphérique de votre réseau local.** |
|  | Pour des raisons de sécurité et après que vous ayez été aidé, veuiller soit: - Changer le password sans le communiquer à des tierces personnes, - Soit désinstaller le logiciel TightVNC (sécurité absolue mais contraignante) |

**2. Installer la partie la partie cliente**

Il s’agit d’un programme comme un autre…

| [http://www.tightvnc.com/download.html](http://www.tightvnc.com/download.html)par exemple: (lenuméero de version importe peu)  tightvnc-1.2.9\_x86\_viewer.zip | Télecharger Tight VNC client |
|---|---|
|  | Installer |
| ![](/assets/images/2005/04/tightvnc_clientIp.jpg) | lancer le programme et rentrer l’adresse IP de votre ami Régis |
|  | Si le client trouve le serveur, Une fenêtre va vous demander le password. |