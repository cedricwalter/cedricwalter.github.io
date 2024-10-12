---
title: "SAB RAW 420 Hub setup, flight log :rocket:"
summary: ""
type: posts
date: 2024-03-25T10:30:17+01:00
cover: https://www.waltercedric.com/rchelicopter/sab-raw-420/sab-raw-420.webp
summary: "The new RAW 420."
tags:
  - rc-helicopter
  - rc-helicopters
  - flybarless-systems
  - fbl-controllers
  - helicopter-gyro
  - rc-helicopter-setup
  - flight-controller
  - rc-helicopter-electronics
  - helicopter-tuning
  - rc-helicopter-technology
  - flybarless-advantages
  - self-leveling-helicopter
  - rc-helicopter-tips
  - hobbyist-blog
  - remote-control-flying
  - helicopter-community
  - rc-helicopter-enthusiasts
  - sab-raw-420
  - sab
categories:
  - RC helicopter
mermaid: true
---
SAB (Scorpion Antennas and Batteries) primarily focused on manufacturing and designing high-quality radio-controlled (RC) helicopters.

{{< notice warning>}}
{{< warning >}}
{{< /notice >}}

{{< notice tip>}}
{{< heli-tips >}}
{{< /notice >}}

Here 's a brief overview of some SAB RC helicopter models:
* **Goblin Series**
  * The Goblin series is one of SAB 's flagship lines of helicopters.
  * Goblins are known for their high performance, precision engineering, and innovative design.
  * Different Goblin models cater to various skill levels and preferences, from beginners to advanced pilots.
* **RAW**
  * RAW is another series of helicopters from SAB.
  * These helicopters are designed for extreme 3D flying, agility, and aerobatics.
  * RAW helicopters typically feature a robust construction to withstand aggressive maneuvers and provide a thrilling flying experience.

## Costs
### Sab raw yellow paid 415.- CHF instead of > 1600.-
* SAB Raw 420: 620.-
* 3 x THETA THS921 HV Digital Servo: 195.-
The application range of the servo is versatile from helicopter swashplate servo 250 size to 380 size, in function models, as a throttle servo, rudder servo in shipbuilding, large aircraft and in a variety of different RC cars.
**Specifications:**
  * Motor 	 Coreless
  * Operating Voltage 6V bis 8,4V
 **at max. 1,7A current consumption**
  * Speed at 6V	 0,110 (sec/60°)
  * Speed at 7,4V	 0,090 (sec/60°)
  * Speed at 8,4V	 0,080 (sec/60°)
  * Torque at 6V 5,8 (kg/cm)
  * Torque at 7,4V	 6,8 (kg/cm)
  * Torque at 8,4V	 7,5 (kg/cm)
  * Weight 	 21g
  * Dimensions (mm)	 23x12x27,4mm
  * Neutral pulse (factory-made)	 1520µs
  * Working Frequency	 50-400Hz
  * Output toothing	 25T Ø 4,9mm  (Nexspor usw.)


* Theta Sabre-T1 NFC HV Mini Tail Brushless Servo: 110.- https://www.theta-usa.com/products/theta-sabre-t1-nfc-hv-mini-brushless-tail-servo
* Regler ESC Hobbywing Platinum 80A: 120.-
* Motorschutz: 32.-
* Akku 4x Maniax 80C 2400mAh inkl. Akkuschiene: 344.-
* Ladekabel 4x: 70.-
* MS Rapid carbon fiber 420mm: 70.-
* Carbon Fiber MS Rapid

Adding flybarless controller Rotorflight Flydragon F722 ELRS  70.-

### Sab raw orange 580.- CHF instead of > 1400.-
* SAB Raw 420: 620.-
* TS Servos GDW DS 290 MG:  100.-
* THETA THM982 HV Mini Brushless Tail Servo  85.-
* Regler ESC YGE 95LVT 199.-
* Akku 2x ( 1x SLS XCube 2700mAh 40c, 1xManiaX 2600mAh 55c) inkl. Akkuschiene: 200.-
* MS Rapid carbon fiber 420mm: 70.-
* Additional tail boom: 20.-
* Additional canopy: 69.-

Adding flybarless controller Rotorflight Flydragon F722 ELRS  70.-

{{< notice info>}}YGE have good ESC BUT
* their software to manage settings is Windows only and outdated
* no iOS or android app
* no WIFI, Bluetooth wireless connection
* Their firmware is signed to stop piracy: you must send an email with your serial to get a signed firmware!
For all these reasons I DO NOT recommend YGE ESC.

Hobbywing are <50% cheaper and have iOS/Android App{{< /notice >}}

## 3D printing
* [SAB Goblin RAW 420 3d print at MakerWorld (Bambu lab - Free)](https://makerworld.com/en/models/search?keyword=sab+420&categories=304)
* [SAB Goblin RAW 420 3d print at Thingiverse (All - Free)](https://www.thingiverse.com/search?q=sab+420)
* [SAB Goblin RAW 420 3d print at Printables (Prusa - Free)](https://www.printables.com/search/models?q=sab%20420)
* [SAB Goblin RAW 420 3d print at Cults3D (All - Free & $$$)](https://cults3d.com/en/search?q=sab+420)
* [SAB Goblin RAW 420 3d print at Yeggi (All - Free & $$$)](https://www.yeggi.com/q/sab+420/)


## Radiomaster TX16 ELRS RotorFlight electric and nitro R/C Helicopters model templates

https://github.com/bob01/etx-templates

COPY Heli.yml TO THE TEMPLATES -> PERSONAL FOLDER ON YOUR SD CARD. Press and hold the MDL button, click New Model, click PERSONAL, click Heli, and the model file is created.



```bash
SE: Unlock the switch
Up: Unlock the gyroscope
Middle, bottom: Locking gyroscope

SF: Throttle lock
Up: Unlock the throttle
Bottom: Lock the throttle

SA: Airplane mode
Above: 3D mode
Medium: Stabilized mode 1
Bottom: Stabilized mode 2

SB: Black box data logging
On: Close
Middle, Bottom: Open

SD: Rescue
On: Turn off the rescue
Middle, Bottom: Rescue

SG: Motor speed, modify the throttle curve according to your own needs
Upper: Normal 50%
Medium: Idle1 72%
Down: Idle2 80%

SH: Timer
Up: None
Bottom: Clear

Channel Distribution:
CH1: Ailerons
CH2: Lifting
CH3: pitch
CH4: Heading
CH5 (AUX 1): Unlocked
CH6: Throttle
CH7 (AUX 2): Airplane mode
CH8 (AUX 3): Rescue
CH9 (AUX 4): Black box
```

# Rotorflight 2 YGE regler 95LVT
You will need v1.03547 or higher. You will need to use the YGE PC tool to select telemetry type as ‘OpenYGE’.  Also make sure your ESC sensor protocol is set to ‘OpenYGE’ on the Motors page of the RF configurator.
