---
title: SAB Raw 700
type: posts
date: 2023-11-23T12:11:49+00:00
summary: "SAB (Scorpion Antennas and Batteries) primarily focused on manufacturing and designing high-quality radio-controlled (RC) helicopters. Here's a brief overview of some SAB RC helicopter models"
cover: https://www.waltercedric.com/2023/11/sab-raw-700-rc-helicopter.webp
tags:
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
  - sab-raw-700
categories:
  - RC helicopter

---
SAB (Scorpion Antennas and Batteries) primarily focused on manufacturing and designing high-quality radio-controlled (RC) helicopters.

{{< notice warning>}}
{{< warning >}}
{{< /notice >}}

{{< notice tip>}}
{{< heli-tips >}}
{{< /notice >}}

Here 's a brief overview of some SAB RC helicopter models:

  1. **Goblin Series
      * The Goblin series is one of SAB 's flagship lines of helicopters.
      * Goblins are known for their high performance, precision engineering, and innovative design.
      * Different Goblin models cater to various skill levels and preferences, from beginners to advanced pilots.
  2. **RAW
      * RAW is another series of helicopters from SAB.
      * These helicopters are designed for extreme 3D flying, agility, and aerobatics.
      * RAW helicopters typically feature a robust construction to withstand aggressive maneuvers and provide a thrilling flying experience.

I decided to buy the SAB Raw 700, as it "should be" cheaper to fix, yeah should be 🫣

The 700 class is not cheap, a 580 class is cheaper but not so much.

## Raw 700 features

  * AIRFRAME weight: 2620gr (with blades, no battery, no electronics)
  * Main blade length: 650mm to 720mm
  * Tail blade length: 105 to 115 mm
  * Main rotor diameter: 1548 mm (with 690 mm blades included)
  * Tail rotor diameter: 284 mm (with 105 mm tail blades included)
  * Cyclic Servos: standard size 40mm
  * Tail Servo: standard size 40mm.
  * Main Rotor ratio: 11.8 to 8.4 (21T included: 10.1:1)
  * Tail Rotor ratio: 5.0-4.8:1 (26T included: 4.9:1)
  * Typical motor: 4525 series
  * Typical speed controller: 12S, 160-200 A
  * Battery size: 12S 4500-5500 mAh.

## Total Cost of Ownership (TCO)

|**What**|**Recommended**|**May be reused**?|**Price**|
|:----|:----|:----|:----|
|**Helicopter KIT**|SAB Raw 700https://goblin-helicopter.com/products/goblin-raw-700-yellow|Part of it 😅|978.-|
|**Receiver**|Beta FPV SuperP 14CH Diversity Receiver 2.4GHz ELRS PWM Receiver[Documentation](https://www.youtube.com/watch?v=4GYilijkYO8) – [Beta FPV page](https://betafpv.com/products/superp-14ch-diversity-receiver) –| |38.-|
|**Regler**|COOL KOSMIK 250 HV-I [https://kontronik.com/en/produkt/cool-kosmik-250-hv-i ](https://kontronik.com/en/produkt/cool-kosmik-250-hv-i)**Alternatives**Regler YGE 205 HVT V2|not common that they burn but…|750.-or570.-|
|**Motor**|Xnova Lightning 4525-530KV Type AorEgodrift Tengu 4525HT-550kV|something else should break before…|399.-|
|**Servo**|KST X20 V2 Combo Brushless Titan**Alternatives**BK-Servo DS-7002HV Ultra Speed. 109.- x 3BK-Servo BLS-8005 HV+ Ultra Speed 158.-|Servo arm break first|594.-|
|**Flight Controller**|Bavarian Demon FBL Axon orVbar Neo VLinkorRotzorflight|is well protected inside canopy|359.-or|
|**Battery**|SLS Quantum 4500mAh 12S1P 44,4V 65C/130C SPLIT|should not go in fire|262.-|
|**Drone Finder**|Fly 2.0|yes|15.-|
|**Buffer**|Allow Helicopter to be driven if BEC failed, a few minutes more to land.Safety cap safe landing UPS (Super capacitance)orOptipower Ultra Guard (2S LiPo)| |100|
|**Safety Switch**|Avoid main blade to spin SPS SafetyPowerSwitch 70V 140/280A. 130.-| |130|
|**Bag**|SAB Goblin 630/700/770 Carry Bag|😅|100.-|
|**Total**| | |**4080.-**|

{{< notice info>}}YGE have good ESC BUT
* their software to manage settings is Windows only and outdated
* no iOS or android app
* no WIFI, Bluetooth wireless connection
* Their firmware is signed to stop piracy: you must send an email with your serial to get a signed firmware!
For all these reasons I DO NOT recommend YGE ESC.

Hobbywing are <50% cheaper and have iOS/Android App{{< /notice >}}

## Crash costs

Each crash is unique, but most of the time you have to replace the same part over and overHere are 4 scenario using

[https://www.modellhubschrauber.ch/Ersatzteile/Elektro-Heli/Goblin-280-770/Goblin-RAW-700.htm?shop=helibaumann&SessionId=&a=catalog&t=221&c=1061&p=1061](https://www.modellhubschrauber.ch/Ersatzteile/Elektro-Heli/Goblin-280-770/Goblin-RAW-700.htm?shop=helibaumann&SessionId=&a=catalog&t=221&c=1061&p=1061) as a reference for price in Switzerland.


|**Light** 🫤|**Middle** 😧|**Important** 😭|**Worst** 💀|
|:----|:----|:----|:----|
|      landing squid 16.- + 25.-|Main rotor blade 93.- to 129.-|Main rotor blade 93.- to 129.-|Fire => 3800.-|
| |Main shaft 19.- up to titanium 39.-|Main shaft 19.-up to titanium 39.-|Lost => 3800.-|
| |landing squid 16.- + 25.-|Tail Boom 27.-|All other case up to 1000.-|
| | |Tail blade 30.-| |
| | |Tail Spindle 11.-| |
| | |Tail Shaft 19.-| |
| | |Tail pitch slider 24.-| |
| | |Canopy 89.- (cosmetic)| |
| | |…| |
|      41.-|153.-|312.-| |

## Receiver

You really only need five channels to fly a helicopter.

For FBL systems 7 or 8 channel might make sense:

  * channel 5: gyro gain / rescue
  * channel 6: pitch
  * channel 7: FBL bank switching (stability, rescue, etc.)
  * real time / live PID tuning on further channels

## Setting up an ESC for a helicopter

The exact steps and features can vary between different ESC models and helicopters, so always refer to the user manual provided by Hobbywing for your specific ESC. Additionally, take safety precautions, and perform these steps in a controlled environment away from people and obstacles.  Here's a general guide for setting up an ESC for a helicopter:

### Read the User Manual
Always start by carefully reading the user manual provided by Hobbywing for your specific ESC model. The manual will contain specific instructions, safety guidelines, and information about the features of your ESC.

### Connect the ESC to the Receiver
Connect the ESC to the receiver using the appropriate cables. Ensure that the polarity is correct. The ESC typically connects to the throttle channel on the receiver.

### Set Throttle Range
Most ESCs have a throttle range calibration procedure. Follow these general steps:
* Turn on your transmitter and set the throttle stick to the highest position.
* Connect the ESC to the battery or power source. You might hear a series of beeps indicating power-up.
* Wait for a set of beeps indicating that the high throttle position has been recognized.
* Move the throttle stick to the lowest position.
* You should hear a different set of beeps indicating that the low throttle position has been recognized.

### Programming Mode
Some ESCs have a programming mode that allows you to adjust various settings. This is often accessed by a sequence of throttle stick movements or by using a programming card. Refer to the user manual for the specific programming procedure.

### Set Governor Mode (if applicable)
If your ESC has a governor mode for controlling the rotor speed, follow the instructions in the manual to set it up. Governor mode helps maintain a consistent rotor speed during flight.

### Adjust Timing (if applicable)
Some ESCs allow you to adjust the timing for different motor types. Check the manual to see if timing adjustment is necessary for your specific motor.

### Motor Direction
Ensure that the motor is spinning in the correct direction. If needed, swap any two of the three motor wires to reverse the direction.

### Safety Checks
Before flying, perform safety checks:
Confirm that the throttle stick on the transmitter is set to zero.
Check for proper operation of the motor by increasing and decreasing throttle with the helicopter securely anchored.
Verify that the ESC and motor are not getting excessively hot during operation.

### Fine-Tuning (if needed):
Depending on your specific helicopter setup and preferences, you may need to fine-tune the ESC settings. This can include adjusting brake strength, acceleration, and other parameters.

## Learning to fly an RC Helicopter

Using an RC helicopter simulator is an excellent way for beginners to practice and develop the necessary skills without the risk of damaging a physical helicopter. Here are some key aspects to focus on when using an RC helicopter simulator as a beginner:

### Basic Controls
* Understand and practice the basic controls of an RC helicopter, including throttle, cyclic, and collective pitch.
* Get comfortable with the transmitter sticks and how they affect the helicopter 's movements.
### Hovering
* Master the skill of hovering at a fixed altitude. This involves maintaining a stable position without drifting.
### Orientation
* Learn to control the helicopter in different orientations (nose-in, tail-in, side-in).
* Develop the ability to maintain control regardless of the helicopter 's orientation.
### Forward Flight
* Practice flying the helicopter forward and backward, gradually increasing speed as you gain confidence.
* Focus on maintaining a straight and level flight path.
### Turns and Banking
* Learn how to perform controlled turns and banks.
* Practice making smooth and coordinated turns without losing altitude.
### Figure 8s
* Combine turns and forward flight to practice flying figure 8 patterns.
* This helps improve coordination and spatial awareness.
### Landing and Takeoff
* Practice smooth takeoffs and landings.
* Work on descending the helicopter steadily and landing it gently.
### Simulated Challenges
* Explore the simulator 's built-in challenges or missions to test your skills in various scenarios.
* Challenges may include flying through obstacles, navigating a course, or performing specific maneuvers.
### Emergency Procedures
* Simulate emergency scenarios such as engine failure or loss of control.
* Learn how to react quickly and recover the helicopter in challenging situations.
### Customize Settings
* Familiarize yourself with the simulator 's settings, including adjusting sensitivity and expo settings on the transmitter.
* Customize the simulator to match the characteristics of the specific RC helicopter you plan to fly.
### Consistent Practice
* Regular and consistent practice is key to improving your skills.
* Gradually increase the difficulty level as you become more comfortable with the basics.


## Basic flight techniques
 tail-in hovering, side-in hovering, and nose-in hovering.
## Intermediate flying skills
 forward flight, slow pirouettes, triangle, figure eight.
## Advanced flight techniques
 the circuit, the square, auto-rotations, loops, rolls and flips, stall turns, backwards flight, inverted hovering and flight, aerobatics and 3D flight.
