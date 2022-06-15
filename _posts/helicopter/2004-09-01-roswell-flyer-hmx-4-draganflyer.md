---

title: 'Roswell Flyer, HMX-4, Draganflyer'
date: '2004-09-01T22:39:42+02:00'
author: 'Cédric Walter'



header:
  teaser: /assets/images/2004/09/roswellflyer.jpg"
tags:
    - interesting
    - spectrolutions
---

The Roswell Flyer or Draganflyer or HMX-4 flyer were designed by Mike Dammar
at [www.spectrolutions.com](http://www.spectrolutions.com/) (a very cool man) They all shared a same design, just strong
enough to fly indoor. It is the greatest machine i’ve ever flown, and all friends or people in the street agreed. The
price is very high (as expensive as a picollo) but the price range is the same with all rc helicopter : all price can be
easily divided by 2! I regret that only a few people can buy this wonderful machine but if you can afford one, do not
hesitate : buy one, it is very stable in the air (3 gyro) but still required some helicopter knowledge.

# Principe de fonctionnement

![](/assets/images/2004/09/board.jpg)

- Les hélices sont à pas fixes comme sur un avion, plus elles tournent vite et plus la portance crée est importante.
- le Draganflyer possède 4 moteurs indépendants -> il y a 4 controleurs de vitesse qui fonctionnent sur le principe de
  variation de la valeur de tension continue (PWM: pulse wide modulation). L’interface de puissance est réalisé au moyen
  des 4 transistors indépendants.
- le Draganflyer possède 3 asservisements : lacets, roulis et tangage -> il y a 3 gyroscopes piézo-électriques de marque
  TOKIN (ce sont les 3 polygones argentés sur la photo)
- Le tout est controlé par un processeur (PIC: programmable interrupt controler) qui contient le code de décodage des
  signaux, les asservissements. Le programme est protégé en lecture.
- 4 voies suffisent pour controler le modèle.
- Le mode de pilotage est celui d’un hélico radiocommandé (donc très difficile) avec en plus des problèmes de pertes
  d’orientation du à la symétrie de l’appareil.

# Contre Réaction

Le controle s’effectue en faisant varier les vitesses de rotation et donc en utilisant les couples de contre-réactions
des hélices:

> définition: Lorque qu’un moteur tourne dans le sens horaire, une contre-réaction se crée qui s’oppose au mouvement,
> elle essaye de faire tourner le bati en sens anti-horaire. L’effet est réversible et valable pour tout système en
> rotation ou en mouvement.

# Astuces mise en oeuvre

- Sur le modèle: 2 hélices diamétralement opposées tournent dans le meme sens de rotation, Il y a deux hélices tournant
  en sens horaire (gauche et droite) et 2 en sens anti-horaire (hélices avant et arrière).
- A l’équilibre, les couples de contre-réaction s’annulent et le modèle reste en stationnaire à plat sous le controle du
  processeur. L’utilisateur, le vent étant vu comme des perturbations pour le système.

# Commandes élementaires

![](/assets/images/2004/09/teleco.gif)

- Pour avancer, il suffit de ralentir le moteur avant et d’accélérer le moteur arrière, le modèle s’inclinent alors vers
  l’avant. (stick gauche E)
- Pour reculer, il suffit d’accélérer le moteur avant et de ralentir le moteur arrière. (stick gauche F)
- Pour incliner à gauche, on agit de même : moteur droit accélère fortement, le moteur gauche ralentit fortement (stick
  droit C)
- Pour incliner à droite, on agit de même : moteur gauche accélère fortement, le moteur droit ralentit fortement (stick
  droit D)
- Pour jouer sur l’axe de lacet, il suffit de freiner légèrement 2 moteurs simultanément opposés 2 a 2, les couples de
  contre-réaction seront plus élevés en valeur absolue que les 2 autres moteurs et le modèle tournera sur lui meme a
  plat. Axe de lacet gauche G, axe de lacet droit H
- Pour monter (stick droit A) ou descendre (stick droit B), on accélère ou ralentit les 4 moteurs en même temps.

La difficulté est de jouer sur toute les commandes en même temps et de changer l’orientation dans sa tête pour éviter de
donner un mauvais ordre au mauvais moment (comme sur un hélico 😉 )

# Historique

Cette superbe machine a porté les noms suivants: Roswell Flyer – HMX 4 – Draganflyer et a été concue par Mike Dammar
de [www.spectrolutions.com](http://www.spectrolutions.com/) elle coûte environ 800$ avec une télécommande 4 voies et
accus, ce qui reste dans la moyenne d’un hélicoptère électrique. La NASA s’est porté acquéreur de quelques pièces et
Georgia Tech a étudié la possibilité d’envoyer un prototype sur la planète MARS (Project GTMARS 1June 2000). Un modèle
plus grand existe: le Draganflyer XP mais son prix est astronomique ($5000) bien que livré avec une télécommande et
valise valant à eux seul plus de 2000â&#130;¬, une caméra sans-fil est livré d’origine.

![](/assets/images/2004/09/DraganflyerXp.jpg)
![](/assets/images/2004/09/photo-dfxp-DFXP3.jpg)
![](/assets/images/2004/09/photo-dfxp-DFXPCamera.jpg)
![](/assets/images/2004/09/photo-draganflyer3-098.jpg)

# Clone

| ![](/assets/images/2004/09/roswellflyer.jpg)                                                                                                                                          | This is the Roswell Flyer or HMX-4 flyer.    The old manufacturer of the Roswell Flyer    ([www.afot.com](http://www.waltercedric.com/Helico/roswell/www.afot.com)) disapear, but you can still    aquire the HMX-4 at [www.spectrolutions.com](http://www.spectrolutions.com/).    Model is discontinued and can not be bought.                                                                                                                                                                                                                                                                 |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ![](/assets/images/2004/09/Draganflyer.jpg)                                                                                                                                           | This is the Draganflyer, can be bought   at [www.draganfly.com](http://www.draganfly.com/) It has a much    better frame in carbon.                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ![](/assets/images/2004/09/DraganflyerXp.jpg)                                                                                                                                         | This is the Draganflyer XP, the big brother of the    Roswell Flyer. Draganfly corp ([www.draganfly.com](http://www.draganfly.com/))    sell them.                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ![](/assets/images/2004/09/FrenchUFOglowpowered.jpg)                                                                                                                                  | Glow version, build by a Swiss guy. A pics of this device    flying was published in RCM magazine.    No other info avalaible.    Contact me [HERE](http://www.waltercedric.com/comment.html) if you have informations.                                                                                                                                                                                                                                                                                                                                                                          |
| ![](/assets/images/2004/09/vierrotor1.jpg)    ![](/assets/images/2004/09/Bild10.jpg)                                                                                                  | Daniel Prelinger version With no CPU at all only mixing devices and 3 gyro    [Page is HERE](http://www.waltercedric.com/Helico/roswell/home.munich.netsurf.de/Daniel.Prelinger/Modelle/hubschrauber1.htm)    [His plan is here](http://www.waltercedric.com/Helico/roswell/others/Ufo%20Schaltplan.xls) (not tested and author do not respond)                                                                                                                                                                                                                                                      |
| [http://www.inetport.com/~davisele/roswell.html](http://www.inetport.com/%7Edavisele/roswell.html)                                                                                    | Richards Friedrich had a lot of knowledge using    the basic stamp, great chance of success.    Project Stopped.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ![](/assets/images/2004/09/gizmocopter.jpg)                                                                                                                                           | [www.gizmocopter.org](http://www.gizmocopter.org/) based on a linux system and pc104 card    (expensive setup). Do not know if it fly. This project is trying to    build a remote flying plattform and therefore use expensive    devices to achieve their target.                                                                                                                                                                                                                                                                                                                                      |
| ![](/assets/images/2004/09/vectron.jpg)                                                                                                                                               | Vectron blackhawk, thethered version not so interesting except    it’s low price. ($90) Movered it’s principle do not allow the TX to    loose direct view on ship (infrared beam which act as a fixed    reference for the control)                                                                                                                                                                                                                                                                                                                                                             |
| ![](/assets/images/2004/09/cl327p1.jpg)                                                                                                                                               | CL327 Origin : Canada    Remote controlled    Contra Rotor    Rotor diameter : 4 meter    Height : 1.84 m    Empty weight : 150 kg (no fuel, no load)    Gross take off mass : 350 kg    Payload carrying capacity : 105 kg    Speed : 157 km/h    Ceiling : 5.5 km    Climb rate : 7.6 m/sec    Range : 200 km    Mission : surveillance, border patrol…                                                                                                                                                                                                                                            |
| ![](/assets/images/2004/09/keyence.jpg)    ![](/assets/images/2004/09/keyenceSmall.jpg)                                                                                               | ENGAGER GS III E-770    500mm X 400mm, Height 120mm,    Rotor size: 330mm,    Weight: 300g,     Ni-Cd-Akku 7,2V, 500mAh, 120g  GYRO SAUCER II E-570 250mm, width 250mm, Height 75mm,    Rotor size: 133mm,    Weight: 85g,    Ni-Cd-Akku 7,2V, 120mAh                                                                                                                                                                                                                                                                                                                                            |
| ![](/assets/images/2004/09/KlausMichaelDothDanielGurdan.jpg)](http://www.jugend-forscht.de/html/wet/i_lis.php?id=1389&stichwort=&plz=&bundesland=Bayern&jahr=2003&fachgebiet=Technik) | [http://www.jugend-forscht.de/html/wet/i\_lis.php](http://www.jugend-forscht.de/html/wet/i_lis.php?id=1389&stichwort=&plz=&bundesland=Bayern&jahr=2003&fachgebiet=Technik)   [?id=1389&amp;stichwort=&amp;plz=&amp;bundesland=Bayern&amp;](http://www.jugend-forscht.de/html/wet/i_lis.php?id=1389&stichwort=&plz=&bundesland=Bayern&jahr=2003&fachgebiet=Technik)   [jahr=2003&amp;fachgebiet=Technik](http://www.jugend-forscht.de/html/wet/i_lis.php?id=1389&stichwort=&plz=&bundesland=Bayern&jahr=2003&fachgebiet=Technik)     Fuzzy controler and fast processor.    Controlled with a hand glove. |

# Reviews
Great machine, except flight duration (3-4 or 5 minutes!). I hope that new generation of li-ion will help.

# Where to buy it?

Mike Dammar [www.spectrolutions.com](http://www.spectrolutions.com/) ou son
distributeur [www.draganfly.com](http://www.draganfly.com/) (Canada) ou Mike
Johnson [http://www1.minn.net/~mjohnson/](http://www1.minn.net/%7Emjohnson/) (USA)

# Upgrade carbon frame from  Draganfly corp.

Can be bought at [www.draganfly.com](http://www.draganfly.com/) for 80â&#130;¬ + shipping costs.

# Overall view

![](/assets/images/2004/09/OverallView.jpg)
The original frame is weak in many places and was designed more for indoor
flying. A lot of people work on the Roswell Flyer, and they all designed their own frame using carbon pipes. I decided to
buy the carbon upgrade frame. As usual, all models: Roswell Flyer (sold out), HMX4 (copy of previous), Dragnaflyer are
sharing the same design and are fully compatible. They were all created by the clever Mike Dammar
from [www.spectrolutions.com](http://www.spectrolutions.com/)

# Assembling

[![](/assets/images/2004/09/tn_contentKit.JPG)](http://www.waltercedric.com/Helico/roswell/upgrade/contentKit.JPG) |
Content of the upgrade Kit.

The manual given explain everything and is completed. All screws, heat rubber for isolation, and a small hex key is
given. Nice job. The overall frame is light and the wires are hidden in each carbon tube. A spare carbon tube is also in
the kit.

![](/assets/images/2004/09/canopyCentralFrame.jpg)    
Aerodynamic canopy, very light, the circuit board is maintian by
the four pylons.
![](/assets/images/2004/09/motor_mount.JPG)   
Maybe the motor mount has a little too much flexion. Let see if it
survives in a small crash. Note that the pinion is now after the motor mount and no more inside the imaginary inner
circle. It will also be in contact with the ground in case of crash.

# final through
The kit is not overprice and the frame seems to be reliable and light. A must for all old roswell flyer!

![](/assets/images/2004/09/finished.jpg)

# TIPS
- If you think you can not save the machine (crash) stop immediately the power, it will many times save your blades

# Roswell Flyer Manual

The following instructions are meant to
Packing List:    Qty Description 1 Black Composite Frame top 1 Black Composite Round Frame Bottom 4 Black Composite
Frame arms 4 Black Composite Motor Mount Braces 4 Plywood motor mounts 4 Aluminum rotor shafts 4 Black Main Gears 4
Aluminum main rotor shafts 4 1/8 inch main rotor retaining clips 8 1/8 id 1/4 OD flanged main rotor bearings 8 3mm X 5mm
metal motor mount screws 8 #4-40 X 1/2 nylon rotor mounting screws 8 #4-40 nylon hex nuts 8 1/4 inch threaded nylon
rotor spacers 4 Electric motors with pinion gear installed 4 ft Red and Black motor wire 4 Motor noise filter capacitors
2 Clockwise turning main rotors 2 Counter clockwise turning main rotors 1 Main control circuit board 1 Wire antenna 1
Charge Adapter cable 1 8 Cell 600 Mha battery pack 1 square of double sided tape 1 set of Velcro tape 1 Clear plastic
packing tray ( has dome and motor covers molded into it)   Note: Some additional screws and retainers may be included as
extras, just in case …. Additional items required: 4 Channel radio Transmitter and receiver 5 Minute Epoxy wire cutters
and strippers needle nose pliers Small soldering pencil and solder 100 grit sandpaper 400 grit sandpaper A special note,
TAKE YOUR TIME, dont hurry, we know you want to get in the air quickly but take your time, and make sure that you check
things twice before gluing once. Accuracy is important, so TAKE YOUR TIME.

1. For all four main gears, press two flange bearings into the 1/4 inch hole in the center of the gear, one on top, and
   one on the bottom. The easiest way to do this is to lay a bearing on the table, flange side down, then hold the ,ear
   over the bearing, line up the hole with the bearing, and press the gear into the bearing using the palm of your hand.
   Il may be necessary to deburr the inside edge of the hole in the gear with a small knife. One of these will be used
   in the following steps to check the alignment of the rotor shaft. For P-11 four arms, check-fit motor mount brace on
   end of arrn. If necessary, trim top edge of key on end of arm so that top of brace is flush with top edge of arm.
   Epoxy in place and let cure. When the Epoxy has cured, double check that the top of the motor mount brace is flush
   with top edge of arm, if not Band flush. 3\. For all four arms, check fit rotor shaft in hole on arm. Apply Epoxy
   adhesive to rotor shaft about 1 /4 inch below the shoulder clown to about 1/4 inch from bottom of shaft. Push rotor
   shaft up into hole in end of arm from the bottom. This prevents Epoxy buildup around the top edge. Check to make sure
   all rotors are square to the top edge of the arm, and that they are all the same. Use one of the gears from step 1 to
   check the alignment of the shaft by slidi-ng the gear onto the shaft and making sure that the bottom of the gear is
   parallel with the top edge of the frame. Be very careful not to get any epoxy on the gear or in the bearings. Let
   Epoxy cure. For ail four arms, check-St plywood motor mounts on rotor shafts. If any are too tight to easily push
   clown, enlarge hole in plywood with drill. Apply epoxy to top edge of arm and motor mount brace, making sure epoxy
   touches the edges of the laminate for strength. Push plywood motor mounts down onto rotor shaft and make sure they
   are square to rotor shaft. Allow epoxy to cure.    ![](/assets/images/2004/09/start.1.jpg)

2. Each motor must have a length of Black and Red wire. Make four sets of 12.5 inch lengths of red and black wire.
   Holding one red and one black wire at the saure time, push the pair through the foam of the frame, between the
   laminates, and into the first small lightening hole at the top of the arm. Using needle nose pliers, grab the pair of
   wires and continue to thread them through the foam into the center of each subsequent lightening hole. If you do not
   wish to put the wire through the frame you can simply tape it to the bottom of the frame as shown in the photo. When
   the outboard hole is reached, pull an extra three inches of wire through. 6\. Important! The top of the frame (
   smaller disk with little arms) has a top and a bottom. Mounting it incorectly will make it impossible to mount the
   controller board. I: you hold the top such that the 1/2 inch wide notch is to the right, and towards you, then the
   rectangular hole will be directly beyond the notch. Check-fit all four arms into the frame top and bottom. When
   satisfied of fit, epoxy in place. Make sure to apply epoxy to all matting surfaces. The frame should hold itself
   together if set on a flat surface, however if it tends to pull apart, use some tape to hold in together until the
   epoxy cures.    ![](/assets/images/2004/09/start.2.jpg)
3. Strip 3/16 inch insulation from both ends of thje 4 red and black wires that you created, LATER you will solder these
   to the motors and circuit board. 8\. You are now going to cut pieces (as shown in the photo to the right) of double
   sided foam tape to the approximate size as shown. Remove ONE side of the paper from the tape and place them on the
   top piece of the frame. ( shown to the right) You most likely know that you do not want to touch the tape with your
   fingers as they will lessen the stickiness of the tape. Take your time. 9\. Locate the Printed Circuit Board (PCB)
   over the top of the center of the frame such that the battery connector is oriented over the clearance.notch in the
   frame ring. Insert the 4 servo connectors through the rectangular hole. 10\. Note that the PCB has 8 holes around
   it's perimeter, 4 labeled black, and 4 labeled red. Feed the red and black wires \[rom each arm up through the
   lightening holes just or, Either side of their respective arms so that the wire colors will match up with the
   indicated labels on the circuit board.. 11\. Insert all 8 wires up through the PCB and solder them on the top side.
   Trim any excess wire with wire cutters. CAUTION, be careful with the soldering iron the frame of the Roswell Flyer is
   very easy to (lamage with the soldering iron, again Take your lime.    ![](/assets/images/2004/09/start.3.jpg)
4. Remove paper covering from double sided tape already installed on top of frame and secure the PCB onto the tape.
   Make sure to pull the wires down through the holes so that they do not get pinched under the PCB. 13\. For each arm,
   pull the Black out of the wires, but do not make them tight. Set this assembly aside for now. 14\. For all four main
   gears, install two 1/2 inch nylon screws through the two opposing small holes in the web of the gear such that the
   threaded end is on the same side of the gear as the gear hub. Thread a 1/4 inch nylon spacer onto each screw and
   tighten snugly. Do not over-tighten. Finger tight is good, dont use pliers or other devices that might damage the
   plastic sleeves or bolts.    ![](/assets/images/2004/09/start.4.jpg)
   Important! Failure to bevel the edges of the blades will result in the aircraft having significantly reduced flying
   tune, and reduced performance. Do not skip these steps, even if you think you can Jet away with
   it.    ![](/assets/images/2004/09/start.5.jpg)
5. For all four rotors, using 100 gril sandpaper or file, bevel the top of the leading edge of each blade. The bevel
   should be about 1/8 inch wide and the leading edge should taper to about I/10 the thickness of the blade. 16\. For
   all four rotors, smooth out the marks from the 100 grit paper and round of the bevel a bit. Also sand the perimeter
   of the Made to remove any burrs and slight round the edges of the trailing edge. Make sure you prep and Band these
   edges of the rotor blades, failure to do so WILL affect the performance of the Flyer.
6. Install all four main gears onto the rotor shafts with the nylon screws pointing up, this should also make all the
   gear hubs face up. 18\. Make sure each 0gear spins very easily. If you give the gear a spin, it should continue to
   spin for at least 10 seconds thereafter. If one of them does not, check to make sure that the bearings are fully
   seated in the gear hubs, and that no    ![](/assets/images/2004/09/start.6.jpg)
7. Install a I/8 inch retaining clip on the top of each rotor shaft. This is most easily done by laying the ring on the
   end of the shaft with half of the ring hanging a bit down the shaft. Using your linger, press down on the end of the
   shaft, and work the test of the ring onto the shaft, then usina needle nose pliers, carefully push the retaining
   ring down the rotor shaft until it seats in the groove. Caution, these little clips are an alien life form all unto
   Themselves, they fly off into the carpet, under doors and generally just get lost if you dont take your lime. WE
   have included sonie extras, you won't need them ho wever if you work slowly and get the hang of f it. The first one
   you do is a bit tricky but once you get the hang of it, the rest will be easy to do. 20. Install all four motors on
   the bottom side of the plywood motor mounts using two 3 mm X5 mm machine screws. The gears on the motor ends fit up
   through the elongated center hole in the mount, and engage with the main gear. Make sure that there is a small
   amount of slop in the gear mesh, about the thickness of a sheet of paper. Tighten the mounting screws being careful
   not to crush the plywood.    ![](/assets/images/2004/09/start.7.jpg)
8. Now let's attach the wires to the motor. On each motor there is a red dot, indicating where the red wire should be
   soldered, the black wire goes to the other motor lug. Also for each motor, install a noise filter capacitor across
   the two terminals of each motor. Install the green capacitor across the motor leads, it has been omitted here for
   clarity. It is also a good idea to slip a bit of heat shrink tubing or tape onto the capacitor leads so that if they
   gent bent they will not short the motor.
9. Charge the supplied battery with a correct charger, be sure not to over-charge. Charging batteries is almost an
   artform, we suggest that you review your charger specs and read again the best way to charge Ni-Cad batteries. We
   have used various charges and this battery pack will charge with a normal charger in about 25 minutes. Let the
   battery charge until you can hold it in your hand and feel that the battery is slightly warm, or use a charger that
   measures the peak of the battery. This is, of course, the best way and the most expensive.
10. Connect a four channel RC receiver to the PCB usine the four provided connectors. Use the following color codes to
    make sure the correct plugs are installed. Yellow/Red/Black Throttle (Futaba Channel 6)  Blue wire Elevator (
    Futaba Channel 2)     Green wire Aileron (Futaba Channel 1)     Yellow wire Rudder (Futaba Channel
    4) ![](/assets/images/2004/09/start.8.jpg)
       23a Attach receiver to underside of PCB usine two layers of double sided foam tape. You can follow the procedures in
       the step 23 b if you want to use built in stubby antenna or do the following:    Ri-in antenna wire around frame
       through Lightening, holes, or use a commercially available short antenna that is glued to the frame. We recommend
       that the antenna point up and to the rear for orientation reasons  NOTE: usine built in antenna:    Warning! The
       following steps require you to cut the an- tenna wire on your receiver. This will most likely void the warranty on
       the receiver, so make sure that you want to do this. 23b Solder the 7 inch long piece of music wire into the hole on
       the PCB near the round black cylinder. At about 1/2 inch above the PCB, bend the wire over towards the center of
       th\_- PCB. Now where the antenna crosses t the cc-ILcr Une of thÃ© dise, bend it so as to align with the rear arm.
       Cut the receiver antenna wire long enough to reach the hole marked    "Ant" on the PCB, from the bottom, with about
       1/2 inch of – slack. Strip about 1/4 inch of insulation from the end of the wire, and push it up through the frame,
       and into the hole marked "Ant" on the PCB and solder in place.   WARNING!
       Alake sure none of the rotor blades are attached for the following steps. Failure to follow this in- struction could
       result in damage to the aircraft or injury to you!
11. The purpose of these steps is to make sure the transmuter is properly set up. Set the transmitter throttle stick to
    ils mid point and turn on the transmuter. Make sure the power switch on the Circuit board is turned OFF, then
    connect the battery to the Circuit board 25\. Set the Flyer on a flat, open surface, (the floor is good) making sure
    that nothing can catch in the gears. If you have long hair, secure it so that it will not fall into the cgears, and
    do not wear any lose clothing that might gel caught in the gears.  ![](/assets/images/2004/09/start.9.jpg)  26\.
    While holding the aircraft down by the center area (PCB) use your thumb to turn on the power switch( small black
    slide switch). The motors should not corne on, but the LED (little red lioht) should begin ta flash. 1vlove the
    throttle stick on the transmitter up (increase throttle) the LED should blink faster, If it instead blinks slower,
    flip the reveres switch for the throttle channel on the transmitter. Note the LED should blink faster with more
    throttle, and slower with reduced throttle. The motors will NOT turn on at this lime, the Flyer is not yet ARMED.
    27\. On your radio transmitter set the throttle to minimum, and set the throttle trim to minimum.
12. With the aircraft sitting solidly on the flat surface (do not pick it up) carefully push the arming switch (small
    white rectangular button labeled "caution") on the top of the PCB. Be prepared for the motors to come on or give a
    little kick. For the following steps, push the throttle stick until the motors just start to spin (about 1/3
    throttle)  ![](/assets/images/2004/09/start.10.jpg)  29\. The motors should not be turning, or turning very slowly .
    Move the rudder stick (rudder /throttle stick) to full left, both the left and the right motors should turn on, and
    the front and rear motors should slow down or stop turring. If the opposite happens, flip the servo reversing switch
    on the transmitter. The motors should now respond as described. 30\. Move the aileron /elevator stick full forward,
    the rear motor should speed up and the front motor should slow down. If the opposite happens, flip the servo
    reversing switch for the elevator on the transmitter. This should make i; function as described.
13. Move the aileron/ elevator stick full right. The left motor should turn on or go faster, and the right motor should
    slow down or stop. If the opposite happens, flip the servo reversing switch for the aileron channel on the
    transmitter,. This should fix the problem. 32. Now move the throttle stick forward until the motors just start to
    turn. Adjust the elevator trim so that the front and rear motors are spinning at about the same speed, or so they
    corne ,ii at Zhu same time when the throttle stick is pushed forward.
14. In a similar fashion, adjust the aileron trim so that the left and right motors run at about the same speed, start
    at the same time when throttle is applied. 34. Now adjust the rudder trim so that the front/rear and left/right
    motor pairs run at about the same speed, or come on at about the same time when throttle is applied.  Note: This
    may all seem a bit complicated but don't worry, remember we said take your tune, well that is stil! a good idea. Get
    to know your f flyer and how it reacts before you try your first f ight. The Flyer is easy to fly once you under-
    stand what is going on when you push those transmitter sticks. So …yeah , take your time… 35 Disconnect and remove
    the battery pack    ![](/assets/images/2004/09/start.11.jpg)  36\. Position the frame in front of you so that the
    battery con- nector on the PCB is to the rear right of the frame (near you and to the right hand side). This puts
    the front arm furthest from you, pointing away. Install the four rotors using two #4/40 nylon nuts on each screw. Do
    not over-tighten. The front and rear blades should be the ones designed to turn counter clockwise as viewed from the
    top. The left and right blades are to be the clockwise rotating when viewed from on top 37\. We highly recommend
    that you mark the front arm or rotor with a highly visible mark. Either by putting colored tape on the front arm, or
    a colored dot in the center of the front blade, or using a marker, color the front blade. This is necessary in that
    you must always know which way it is pointing in order to properly control the flyer.
    Flying Never fly this aircraft where damage to property or injury to persons may result if loss of control
    occurs. Never leave the Flyer unattended with a battery connected to it. Always disconnect battery when not flying.
    Always turn the Roswell Flyer off FIRST and then turn of the transmitter. Failure to do so could cause the Flyer to
    become airborne and out of control resulting in injury or damage Startup procedure:   1. Turn the black sliding
    switch to the off position 2. Connect the battery to the PCB 3. Turn on the transmitter, and make sure that the
    throttle is fully closed. 4. Turn the switch on the Flyer to the ON position. You should note that the LED will
    staff i blinking. Make sure at this stage that when you advance the throttle stick, that the LED blinks faster. This
    verifies the functionality of tire radio link. Return the throttle to minimum. 5 . While holding the Flyer down on
    the ground at the center, push the arming switch on the Flyer. Be prepared for the motors to turn on at any time! If
    they come on for some reason, and you can not throttle them back, turn off the switch on the PCB and check the radio
    and receiver. 6. Back away from the flyer to a safe distance. ?. Slowly increase the throttle until the Flyer gets
    light, and the adjust the trims on the transmitter, so that i: doesn't icimediately turn or try to fly off in some
    direction:   The Roswell Flyer flies similar to a helicopter, if you are model helicopter pilot, you should be up
    and flying within a few minutes. If you aren't familiar with choppers, dont worry the Roswell Flyer is actually much
    easier than a chopper. The trickiest part is getting used to the rotation. Start by giving it just enough throttle
    to get the aircraft light, and then practice keeping the front arm always pointing forward. Make sure you have a
    good feel for this before you try and get much higher off the ground.
    Forward flight:    While the Roswell Flyer is designed primarily for hovering, forward flight is more than
    possible. One thing to note though, as the speed of the Flyer increases, it will require more and more forward stick
    to keep it going, eventually it will pitch up and stop the forward motion. With this in mind, be aware that as you
    move to forward flight the flight performance will change and require more transmitter input to maintain the forward
    motion.  Wind:    The Roswell Flyer can fly outdoors in a limited amount of wind, however, do to the very lfight
    disk loading of the Flyer, it will become difficult to maintain station in a moderate breeze.   Ceiling:    Y ou
    can fly the Roswell Flyer as high as you like so long as you can still see it well enough to control the flyer.
    However care should be taken not to stay up high too long as you may not have enough battery power to make a
    successful landing. Also a rapid vertical descent should be avoided for similar reasons.   Discharged battery:
    The Roswell Flyer is designed to Nover at about 1/3 to 1/2 throttle with the supplied battery pack in the fully
    charged state. As the battery approaches the end of its charge, you will notice that more throttle input is required
    to hold it in a hover. This is how you tell is the battery is running low, and it is at this point that you should
    be begin planning your landing or at least getting near the spot where you intend to land.   Flight Time:    The
    Roswell Flyer should be able to Nover for about 3 minutes on a fully charged battery pack, alter that time, it will
    descend to a point where it will only fly about a foot off the ground. After about ) 0 to 20 seconds, you -ill
    notice that it takes more than 3/4 throttle to maintain a low Nover. At about this point the Flyer will start to
    become somewhat unstable and it is at this point that it is best to land and recharge the battery. This period of
    instability at the end of the battery charge is normal and is caused be the lower battery voltage in the discharged
    state.
    Optional performance enhancement ideas: The Fine Art of Tweaking:    While thÃ© rotor components of thÃ©
    Roswell Flyer are care- fully machined to perform well without much need for ad- justment, you may be able to make
    your Flyer even smoother by tracking and balancing thÃ© blades. The rotor blades on thÃ© Roswell Flyer are very
    light and spin at a relatively low RPM so balance isn't as critical as it would be on an airplane propeller. None
    thÃ© less, a well bal- anced machine (helicopter or Flyer) is a joy to fly. To balance thÃ© blades on thÃ© Roswell
    Flyer, loosen thÃ© screws that hold one of thÃ© motors and pull it back so that thÃ© gears no longer mesh and thÃ©
    rotor turns freely. Now tilt thÃ© Flyer into a 90 degree bank and notice what thÃ© blade does. If one blade or thÃ©
    rotors always seems to swing down, then that is thÃ© "heavy" blade. You can do one of two things at this point. 1.
    Sand a small amount of material from thÃ© edge heavy blade until it balances. 2. Add a small piece of tape to thÃ©
    light blade until it bal- ances ( wrap tape half on top and half on thÃ© bottom of thÃ© blade so it won't peel off
    Now return thÃ© motor to its' origine' \_ position That is it, just do the same procedure for all four blades.
    Tracking refers to making thÃ© tips of thÃ© rotor blades fly at thÃ© same level. Making thÃ© tip heights equal
    implies that each rotor blade is producing thÃ© exact same amount of lift and thus help reduce shaking of thÃ© rotor
    shaft. On most model helicopters, this is done by adjusting a ball link, but since thÃ© Roswell Flyer is not bound
    by thÃ© limits of human design, a diffÃ©rent method is used. Ã¯ o start with, you need to check thÃ© existing
    tracking situa- don, i1 will Ikciy be just fine. 'fo do this hover thÃ© Flyer high enough and at a safe distance ,so
    that you can CARE- FULLY look across thÃ© plane of thÃ© rotor blades. Look at thÃ© edge of each tip path and see if
    you see one looks like one rotor tip or two. If you only see one rotor tip zinging by, then that blade is tracked
    adequately. Check all for blades this way. For those where you see what looks like two rotor tips, tracking is in
    order. To track thÃ© blades you must first determine which one is flying high. Do this by either marking thÃ© tip of
    one blade with a bright marker or put on a piece of bright colored tape that you can remove after thÃ© process. Now
    bring the Flyer Pa 15 into a hover again and look at thÃ© marked rotor.
    The marked blade will either be high or low, just remember which land, and disconnect the battery. If the marked
    blade was low then you may want to increase its' pitch, if the marked blade was high, then you should reduce its'
    pitch. The pitch can be quickly adjusted by heating the root of the rotor right at the rim of the gear, with a heat
    gun. Heat only until the material just starts to soften. Then twist the blade in the desired direction (don't twist
    very much just a degree or so) then hold the blade still for about a minute while it cools. Check the results by
    hovering again, and adjust as required to get good tracking.
    High speed uncontrolled ground contact    (or a crash to the rest of us) The frame:    The frame of the Roswell
    flyer is made of a wood based laminate, and mends very well with epoxy. If an arm is broken in a hard landing, you
    may glue it back together with epoxy. For extra reinforcement, you should apply a small piece of tight weight
    fiberglass cloth to each side, and epoxy i; in place. Check for crack in the frame alter any hard landing, and do
    not fly the aircraft if any of the components have been weakened by crash damage.   The Rotor blades:    Do NOT
    attempt to repair a broken or damaged rotor blade. Always replace with a new blade. Use of a repaired blade will
    almost certainly.result-in an in-flight blade failure and result in further damage to the aircraft.
    Beginners Read This.If you are new to R/C choppers and planes, in the words of Douglas Adams, DONT PANIC. It is
    out experience that new pilots tend to over control the transmitter sticks, or just the opposite, they do nothing at
    all. Some place between too much and too little is that happy place where the Flyer Oies and you have fun. The best
    place to find the "Flying grove" is to practice in short spurts, Hop the flyer off the ground a few roches, but do
    so with a purpose in mind. Like, keep the nose point in a certain direction or make the flyer moue right and then
    set down. Above all else take your time, think about what you are doing, before you do it. In the GROUND EFFECT the
    flyer gets pushed around by the wind that it produces. This also creates that cushion of air which the flyer can
    float on with less power. However flying a few roches off the ground gets to be real boring. You have to get the
    flyer to an eye level hover. This is where all the fun begins. Until you are comfortable with hovering just above
    the around, in the ground effect, dont give the flyer too much power. No doubt you will give the Flyer a bit too
    much juice and it will rise to a height that will be new to you, this is where the phrase, DONT PANIC cornes into
    play. The Roswell Flyer, DOES fly, so relax, enjoy and mort of all do something, but not TOO much. A little bit goes
    a long way. One final comment, what you put in, by way of control you will most likely have to take out, if you roll
    to the right, make sure you roll a bit back to the left or the Flyer will just keep going in the last direction that
    you gave it. Have fun, after all that is what its all about.
    All parts of the Roswell i Flyer ire available for sale as replacements. Visit out web-site at www.afot.com to order
    these parts. Or see your local dealer for parts if all else faits, call us direct at 1-800-32$-0184. In a pinch
    improvise, with all parts, except the motors, the circuit board and the gears. The test of the Flyer is there for
    you to experiment with. Let your imagination run wild, just be sale and if you fend out other tips and tricks or
    corne up with a cool design, contact us and share the information. We will be glad to post articles on things you
    have done to the Flyer, on out web-site.

# Questions/ Answer on Roswell Flyer, Draganflyer

- Does the Roswell Flyer use stepper motors are simple DC motors ?  
  No it uses cheap mabuchi motor, but each of them is "drinking" 2-3A, multiply by 4 and you understand that with
  900mAh, you can only fly 4 min…
- Do the electronics contain a gyroscope to calculate level flight ?  
  not only one but in fact 3!
- Does it contain a CPU and software to calculate motor speeds ?  
  it contains a micro controller with no reference and a close loop (maybe more than one)
- Do all 4 motors have adjustable speed, and is this done by changing the voltage ?  
  Yes with a PWM (pulse wide modulation), though 4 Transistors.
- Do you know of any websites where people build their own roswell flyer, including description of the electronics ?  
  Yes richards friedrich with a basic stamp, but i ve heard nothing since 3 years, a german guy hardwire one with 3
  mixer and no gyro (i do not know how it fly), a french guy made a glow one and take months to make it fly. mike Dammar
  develop the draganflyer during 5 years. Nasa is building one for MARS, but the price of project is in million dollars.
  We try to build one, controlling motor is not the difficult part since some circuit are also available, reading gyro
  and determining what to do is more difficult (our site is http://www.ifrance.com/Phobos-flyer/). All links are on my
  homepage
- Aren't the batteries very heavy, or are they an expensive kind ?  
  The weight comes from the battery. The problem of this heli is power consumption otherwise it is really great to fly.
  Hope to see the next generation of battery (methanol or something else). That will certainly push sales. Right now
  Nicad or nimh do notimprovemuch flight time. Li-Ion are still too expensive $80 or more.
- What makes the kit so expensive, the chips, the motors?  
  Nothing except the fact that no enough items are made, hand made is the real name of current production. In fact Mike
  says that all heli share the same prize (picollo or hornet). He refuse to develop a glow version because there is no
  market and nobody will pay for it. Moreover he has a recorded video where in less than a frame (1/24s) the heli get
  upside down because a motor died: no pilot on earth can save the situation.. and the heli in such case.
- Can propellors be build by cutting them from plastic.   
  The key of success is the quantities of air you can move to increase accuracy of controlling…you can discuss with the
  builder of the roswell flyer, he is open, his name is mike Dammar his site is
  at [www.spectrolutions.com](http://www.spectrolutions.com/)
- Do you know of webreferences to instructions to make them ?  
  no you must build them. Mario who build Micro heli and sell nice engineered upgrades parts send me a message, here is
  a copy:  
  *De: <MIADsgns@aol.com>  
  Objet: Re: heli blades  
  DateÂ : Donnerstag, 7. Juni 2001 20:35 Hi Cedric,

  The Roswell blades are very easy to make, we are sorry but we don't carry   
  blades for such. If you wan to make yourself a set, form wet sheet 1/16"   
  thick balsa over a 3 inch tube, hold it in place with rubber bands. When   
  dried you will have a balsa tube that you can sand and cover with epoxy and   
  carbon cloth, when finished cut to match Roswell blade pattern, sand the   
  leading trailing edges lightly and drill to match holes on the original   
  blade.

  Hope this helps.

  You may be interested in our current products which include micro RC   
  helicopters, systems and accessories.

  Regards,   
  Mario  
  www.micro-flight.com/newframe1.htm*
- Would it be an idea to put 2 props above eachother to create a simple indoor heli. This would eliminate the need for
  leveling the helicopter  
  Yes but the mechanics is very complex, it is call a contra rotor, but you need 2 swashplate and the controller is
  difficult ti implement (mechanical mixer to modify pitch). Moreover no real application except some russian heli.