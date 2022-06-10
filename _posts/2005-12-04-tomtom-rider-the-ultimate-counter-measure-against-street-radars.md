---
id: 2192
title: 'TomTom Rider: the ultimate counter measure against street radars?'
date: '2005-12-04T11:56:44+01:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=2192'
permalink: /gadget/tomtom-rider-the-ultimate-counter-measure-against-street-radars/
image: /wp-content/uploads/2005/07/tomtomrider.jpg
---

| ![](/assets/images/2005/12/TomTomRiderBox.jpg) | **Price:** 799 euro    **Price paid:** 1159 CHF (753 euro) Click read more to see how to use   a TomTom device to be warned   when a street radar is in the area…. |
|---|---|

##  <span style="font-size: large;"><span style="font-family: Arial Black;"><span style="font-family: Arial Black; font-size: large;">![](/assets/images/2005/12/titel.jpg) <span style="font-family: Arial Black; font-size: large;">Legislation

<span style="font-family: Arial Black; font-size: medium;">What You risk: 

<span style="font-size: medium;">in Switzerland…if You get catch by a street radar

|  | **Inner City** | **Outside City** | **On Highway** |
|---|---|---|---|
| <span style="color: #000000; font-size: small;">**> 1 – 5 km/h** | <span style="color: #000000; font-size: small;">**40** | <span style="color: #000000; font-size: small;">**40**  | <span style="color: #000000; font-size: small;">**20** |
| <span style="color: #000000; font-size: small;">**> 6 – 10 km/h** | <span style="color: #000000; font-size: small;">**120** | <span style="color: #000000; font-size: small;">**100** | <span style="color: #000000; font-size: small;">**60** |
| <span style="color: #000000; font-size: small;">**> 11 – 15 km/h** | <span style="color: #000000; font-size: small;">**250** | <span style="color: #000000; font-size: small;">**160** | <span style="color: #000000; font-size: small;">**120** |
| <span style="color: #000000; font-size: small;">**> 16 – 20 km/h** | **Tribunal** | <span style="color: #000000; font-size: small;">**240** | <span style="color: #000000; font-size: small;">**180** |
| <span style="color: #000000; font-size: small;">**> 21 – 25 km/h** |  | **Tribunal** | <span style="color: #000000; font-size: small;">**260** |
| <span style="color: #000000; font-size: small;">**> 25 km/h** |  |  | **Tribunal** |

<span style="font-family: Arial Black; font-size: medium;">What the law say:

It is forbidden to use any device that DETECT a street radar **in France**, so a GPS device do not enter in that category.

## <span style="font-family: Arial Black; font-size: large;">![](/assets/images/2005/12/titel.jpg)<span style="font-size: large;"><span style="font-family: Arial Black;"> Content of the package

| ![](/assets/images/2005/12/allBags.jpg) | ![](/assets/images/2005/12/allBagsOpen.jpg) |
|---|---|
| **A lot of bags** | **Opening religiously all bags…** |

The difference in price between a TomTom GO may be explain by the requirement of using a GPS on a motorcycle. But what can explain the difference of price?

**TomTom Rider**

- Has an aluminium case, waterproof, and a lot slicker than a TomTom GO  
    | ![](/assets/images/2005/12/TomTomRiderBehind.jpg) | ![](/assets/images/2005/12/TomTomRiderBelowUp.jpg) |
    |---|---|
    | ![](/assets/images/2005/12/TomTomRiderFace.jpg) | ![](/assets/images/2005/12/TomTomRiderInHand.jpg) |

- Is shipped with many goodies: textile bag for transport, bluetooth handsets receiver, 2 handsets (one for the cars or street, one for the helmet)
- Has many fixation systems made of black aluminium…  
    | ![](/assets/images/2005/12/tomtomRiderFixation1.gif) | ![](/assets/images/2005/12/tomtomRiderFixation2.gif) |
    |---|---|

<span style="font-family: Arial Black; font-size: large;"><span style="font-size: large;"><span style="font-family: Arial Black;">![](/assets/images/2005/12/titel.jpg) **Installation**

The first time You’ll start the TomTom Rider, You will have to answer a lot of questions: settings preferences, testing bluetooth wireless connections with Your cellular or the headset provided.

I was encountering problem when I first try to install the bluetooth handset, I decide to look at the firmware revision, what was installed was the 5.410, a quick jump at TomTom in the section download reveal that a version 5.420 was available since the end of November.

The update take the form of a “big and monolithic exe of 6Mb”, wenn You start it, You only have to follow the instructions, It is recommended to do a backup first of all previous settings (user preferences) and to backup the existing TomTom SD cards, for this there is 2 entry in the main menu. It took approx. 10 minutes to backup 360Mb of maps…so it look like USB1.1 data transfer rate…The connection to my Sony Ericsson K750i has worked like a charm, Contact database and messages has been synchronized without nay effort (Yes You can use your TomTom Rider as a free hand telephone!)

The installation has run flawlessly, there is really no difficulty to act with the device, all menu are clear and readable. Personally I don’t not like the awful icons with their limited color scheme. Why Do I have to support then when so much icons are available under GPL? anyway the menu are crips and clear.

I look carefully at the filesystem backup and found in /TomTom-Cfg a file birthday.txt which maybe may contains when my device has been build: vr 14-10-2005 12:53

<span style="font-family: Arial Black; font-size: large;"><span style="font-size: large;"><span style="font-family: Arial Black;">![](/assets/images/2005/12/titel.jpg) **Installing Radars overlay**

Since TomTom 5.0 no additional 3<sup>rd</sup> party software are needed, POIs (Point of interests) like restaurants, petrol gas stations, golf… are supported by the TomTom kernel natively. POIs are simply a set of GPS coordinate organized in categories along with some metadata like telephone number, internet address, contact name etc…

| ![](/assets/images/2005/12/POImenuInTomTom.jpg) | ![](/assets/images/2005/12/somePOIintomtom.jpg) |
|---|---|
| **Managing POIs** | **POIs can be selectively activated on Maps…** |

POIs are displayed on a MAP using a technique of overlays.

- Radars overlays are files with the extension OV2, along with some BMP representing how the overlay category look like.
- Overlays has to be put in the same directory as the map it refer, for example map overlay has to be put in the /france directory.

For each category of overlay (a category is simply a way to sort all element semantically: fix radar at 100, mobile laser radar are 2 examples of street radar and can e place in 2 categories), You can set when to be warned, (Icon **Warn when near POI**) usually by setting the distance in meter when to trigger a sound.

| ![](/assets/images/2005/12/POIwarningInTomTom-select2.jpg) | ![](/assets/images/2005/12/POIwarningInTomTom-setDistance-3.jpg) |
|---|---|
| **Select a POI category** | **Then when to be warned…** |

The table below present You some values which can be taken as a basis, there are base on the distance you may need at 120km/h to adapt to a new speed….

| **Your speed** | **Recommended Distance** |
|---|---|
| 20-50 km/h  | 200m |
| 60-70 km/h | 250m |
| 80-100 km/h  | 300m |
| 110-130 km/h  | 350m |
| Mobile Radars | 300-500m (laser range at 400m) |
| Street signal | 100m |

Then choose a sound, 15 are available, but You can store Your own (WAV format) and use them as well. In case of POI, a bref warning is recommended

| ![](/assets/images/2005/12/POIwarningInTomTom-setSound-4.jpg) | **then** | ![](/assets/images/2005/12/POIwarningInTomTom-dangerousOption-5.jpg) |
|---|---|---|
| **choose a sound** |  | <span style="font-size: xx-small;">**DO NOT ACTIVATE THIS OPTION!** |

**DO NOT ACTIVATE THE LAST OPTION!**

Why? Because You may be not alerted if the GPS do not think You are on the same road as the radar, since the GPS technology and the radars database has an accuracy of +/- 20meters You may be catch by a radar

<span style="color: #0000ff; font-family: Arial Black; font-size: large;"><span style="font-size: large;"><span style="color: #333333; font-family: Arial Black;"><span style="font-family: Arial Black; font-size: large;">![](/assets/images/2005/12/titel.jpg) **TomTom is using Linux!**

What is really interesting is that Tom Tom use heavily Open Source software and redistribute as state by the GPL the modified source code (More to read at [www.tomtom.com/gpl](http://www.tomtom.com/gpl) )

- Blowfish (The Blowfish Encryption Algorithm) -> Maybe for encrypting the ROM or some sensitive data like MAPs
- ClipUtils (The Cohen-Sutherland line clipping algorithm)
- CoRDiC (Coordinate Rotation Digital Computer)
- MD5 (MD5 message-digest algorithm)
- Ogg-Vorbis (Tremor-variable)-> Even If I have found no ogg vobis compatible file, wav seems to be supported through…

<span style="color: #0000ff; font-family: Arial Black; font-size: large;"><span style="font-size: large;"><span style="color: #333333; font-family: Arial Black;"><span style="font-family: Arial Black; font-size: large;">![](/assets/images/2005/12/titel.jpg) **Where to Find POI Radars database?**

<span style="color: #0000ff; font-family: Arial Black; font-size: small;">**in no particular order…**

<span style="font-family: Arial Black; font-size: large;">radars-fixes.com

**Map: France ![](/assets/images/2005/12/france.gif)  
Download**: A free list can be download at [www.radars-fixes.com](http://www.radars-fixes.com/) in the [download section](http://www.alertegps.com/Download_index.asp?a=ar&s=)  
**Updates**: are available each Monday for free  
**Legend**:

| ![](/assets/images/2005/12/RF.gif) | ![](/assets/images/2005/12/RFP.gif) | ![](/assets/images/2005/12/RFR.gif) | ![](/assets/images/2005/12/RM.gif) |  |  |  |  |  |  |  |  |  |  |  |  |  |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

**Screenshots:**

|  |
|---|

<span style="font-family: Arial Black; font-size: large;">radarfalle.de

**Map: France ![](/assets/images/2005/12/france.gif) Germany ![](/assets/images/2005/12/germany.gif) Switzerland, others… (Europe)  
Download**: A list (<10euro per year) can be dowmload at [www.radarfalle.de](http://www.radarfalle.de/) in the [download section](http://www.alertegps.com/Download_index.asp?a=ar&s=)  
**Updates**: Daily!  
**Quality of data:**

| **Country** | **Radars known** |
|---|---|
| Germany | 2938 |
| Netherland | 1752 |
| Italia | 1351 |
| Belgium | 954 |
| Austria | 600 |
| Switzerland | 479 |
| Spania | 478 |
| France | 467 |
| Sweden | 384 |
| Norwegen | 294 |
| Poland | 289 |
| Finnland | 99 |
| Portugal | 35 |
| Liechtenstein | 4 |
| Australia | 1 |

**Legend**: A lot of icons…

| ![](/assets/images/2005/12/Blitzer20kmh.gif) | ![](/assets/images/2005/12/Blitzer30Ampel.gif) | ![](/assets/images/2005/12/Blitzer30kmh.gif) | ![](/assets/images/2005/12/Blitzer40kmh.gif) | ![](/assets/images/2005/12/Blitzer50Ampel.gif) | ![](/assets/images/2005/12/Blitzer50kmh.gif) | ![](/assets/images/2005/12/Blitzer60Ampel.gif) | ![](/assets/images/2005/12/Blitzer60kmh.gif) | ![](/assets/images/2005/12/Blitzer70Ampel.gif) | ![](/assets/images/2005/12/Blitzer70kmh.gif) | ![](/assets/images/2005/12/Blitzer80Ampel.gif) | ![](/assets/images/2005/12/Blitzer80kmh.gif) | ![](/assets/images/2005/12/Blitzer90Ampel.gif) | ![](/assets/images/2005/12/Blitzer90kmh.gif) | ![](/assets/images/2005/12/Blitzer100kmh.gif) | ![](/assets/images/2005/12/Blitzer110kmh.gif) |  |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

**Screenshots:**  
![](/assets/images/2005/12/TomTomDisplayingStreetRadarInZurich.jpg)  
**Zürich the city where I live: 83 radars!**

<span style="font-family: Arial Black; font-size: large;">gpspassion.com

**Map: France ![](/assets/images/2005/12/france.gif) Download at** [http://www.gpspassion.com/forumsen/topic.asp?TOPIC\_ID=21763](http://www.gpspassion.com/forumsen/topic.asp?TOPIC_ID=21763)  
**Updates** are **Monthly** (“Standard”) or BiMonthly (named “+” If You are a club member) **Quality of data**

| \* Ventilation: **non** – par vitesse   \* Parametrage auto: **non** – Oui   \* Revision: **33** – 33.1   \* Radars Fixes: **580** – 623   \* Radars Mobiles: **1**,**000** – 8,785   \* Radars Feu Rouge: **47** – 55   \* Radars de Distance: **11** – 11 |
|---|

**Legend**:

| ![](/assets/images/2005/12/RadarsFR.gif) | ![](/assets/images/2005/12/RD.gif) | ![](/assets/images/2005/12/RF-030.gif) | ![](/assets/images/2005/12/RF-050.gif) | ![](/assets/images/2005/12/RF-070.gif) | ![](/assets/images/2005/12/RF-080.gif) | ![](/assets/images/2005/12/RF-090.gif) | ![](/assets/images/2005/12/RF-110.gif) | ![](/assets/images/2005/12/RF-130.gif) | ![](/assets/images/2005/12/RM-030.gif) | ![](/assets/images/2005/12/RM-040.gif)![](/assets/images/2005/12/RM-045.gif)![](/assets/images/2005/12/RM-050.gif) | ![](/assets/images/2005/12/RM-060.gif)![](/assets/images/2005/12/RM-070.gif)![](/assets/images/2005/12/RM-080.gif) | ![](/assets/images/2005/12/RM-090.gif) | ![](/assets/images/2005/12/RM-100.gif) | ![](/assets/images/2005/12/RM-110.gif) | ![](/assets/images/2005/12/RM-120.gif) | ![](/assets/images/2005/12/RM-130.gif) |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

**Screenshots:**

<span style="font-family: Arial Black; font-size: large;">**Note about all POI database**

- **It is strictly forbidden to redistribute them or package them in another format.**
- **I can not provide a direct link to the download**
- **There is no guarantee that the data are accurate!**
- **Please drive carefully, this system is only to prevent huge loss of money and reduce risks while driving.**

<span style="font-family: Arial Black; font-size: large;">**![](/assets/images/2005/12/titel.jpg)**<span style="font-size: large;"><span style="font-family: Arial Black;"> **Links**

**![](/assets/images/2005/12/france.gif) GPSpassion**

<span style="font-size: medium;">Presentation : [<span style="color: #0000ff; font-size: xx-small;">http://www.gpspassion.com/forumsen/topic.asp?TOPIC\_ID=9174](http://www.gpspassion.com/forumsen/topic.asp?TOPIC_ID=9174)<span style="font-size: medium;">  
Les Radars – en chiffres: [<span style="color: #0000ff; font-size: xx-small;">http://www.gpspassion.com/forumsen/topic.asp?TOPIC\_ID=9172](http://www.gpspassion.com/forumsen/topic.asp?TOPIC_ID=9172)<span style="font-size: medium;"><span style="font-size: xx-small;">  
Pour signaler un radar – [<span style="color: #0000ff; font-size: xx-small;">http://www.gpspassion.com/forumsen/topic.asp?TOPIC\_ID=5521](http://www.gpspassion.com/forumsen/topic.asp?TOPIC_ID=5521)<span style="font-size: medium;"><span style="font-size: xx-small;">  
Les autres collectes- [<span style="color: #0000ff; font-size: xx-small;">http://www.gpspassion.com/forumsen/topic.asp?TOPIC\_ID=5796](http://www.gpspassion.com/forumsen/topic.asp?TOPIC_ID=5796)<span style="font-family: Tahoma; font-size: xx-small;"> 

[An exhaustive list of French POIs](http://www.gpspassion.com/forumsen/topic.asp?TOPIC_ID=21050) at [www.gpspassion.com](http://www.gpspassion.com/)

 [www.radar.ch](http://www.radar.ch)