---
title: "BambuLabs Disruptive Innovation Dethorning Prusa and Sending Shockwaves Through the 3D Printing Community"
date: 2024-01-19T10:44:17+01:00
cover: "https://www.waltercedric.com/3dprinting/bambu-lab-vs-prusa-3dprinting.webp"
cover_alt: "Bambu Lab vs Prusa 3d Printer"
cover_width: "1286px"
cover_height: "350px"
summary: "In the ever-evolving landscape of 3D printing, innovation is the key to staying ahead. For years, Prusa Research has held the throne as a leading force in the industry, with their reliable and high-quality 3D printers gaining widespread acclaim. However, a new player has emerged on the scene, and their disruptive technology has sent shockwaves through the 3D printing community. BambuLab, a relatively unknown company until recently, has managed to dethrone Prusa with its groundbreaking advancements in 3D printing technology."
categories:
  - Homelab
tags:
  - 3d-printing
  - prusa
  - bambulab
  - x1c
  - p1p
  - p1s
  - a1
  - open-source
  - foss
  - 3d-printer
  - prusa-research
  - mk3
  - mk4
---
{{< notice warning>}}
Disclaimer I was the owner of a Prusa mini+ that I hate operating. I did tinker a lot, learn a lot, at the cost of printing less. It was really Noisy even in an IKEA enclosure on top of a 9kg Beton plate, slow, bed issue...I sold it after having printed 50 rolls.
My next printer is a Bambu lab because it just print without much tinkering and luck.
{{< /notice >}}

BambuLab burst onto the scene with a mission to redefine the possibilities of 3D printing. While Prusa has been a pioneer in the industry, BambuLab took a different approach, focusing on cutting-edge materials and unique printing techniques. Their team of engineers and designers worked tirelessly to create a 3D printer that would not only match but surpass the capabilities of the reigning champion.

## Key Features that Set BambuLab Apart

**It just print**
Less tinkering thanks to a closed source tailored solution. Less is more!

**Revolutionary Materials:**
BambuLab introduced a range of innovative printing materials that go beyond the conventional filaments used by Prusa. Their proprietary blends include biodegradable and sustainable options, appealing to environmentally conscious users. These materials not only contribute to a greener future but also offer enhanced print quality.

**Adaptive Printing Technology:**
BambuLab's printers utilize adaptive printing technology that adjusts printing parameters in real-time. This means that users can achieve unparalleled precision and consistency across a variety of prints. Prusa's printers, while excellent, lacked this dynamic adaptability, giving BambuLab a significant edge.

**Speed and Efficiency:**
BambuLab's printers are engineered for speed without compromising print quality. With advanced printing algorithms and optimized hardware, BambuLab's machines outpaced Prusa's in terms of both speed and efficiency. This was a game-changer for users who prioritize quick turnaround times without sacrificing the quality of their prints.

**Onput shaping**
Bambu lab use [input shaping](https://en.wikipedia.org/wiki/Input_shaping), which reduces vibrations created by the printer's own movement using sensors in head befaore every print.
The Prusa MK4 faces a significant drawback due to the absence of accelerometer sensors, coupled with the limitation that their approach to input shaping is constrained to fixed values. This poses a considerable challenge in maintaining consistent output quality, given that the input shaping values are not tailored to the specific machine but are instead based on a "generic value." Interestingly, Prusa acknowledges the crucial role of accelerometers in correct input shaping, yet these sensors are not incorporated into the MK4. While the MK4 does feature an input port for a single sensor, it falls short for applications like bedslinging, and the port itself is not connected to anything. Conversely, the Prusa XL includes accelerometers in each toolhead, although they are currently not operational. This omission is disappointing for printers at this price point, particularly because Bambu utilizes these sensors not only for input shaping but also to monitor the machine's "health," including aspects such as belt tension and potential unexpected resistance in the movement system.

## Bambu lab is a lot faster because

* The frame is Welded and has a lot more rigidity than Prusa printed parts,
* Hot end is high flow and flow calibration is near perfect! It utilizes a high-resolution, high-frequency eddy current sensor to measure the pressure in the nozzle. Their algorithm actively compensates the flow rate according to the readings to extrude with accuracy,
* Grippy extruder,
* input shaping!
* The automatic bed leveling (ABL) sensor calibrates and levels the bed properly everytime,
* Nozzle cleaning routine,
* Preset filament settings are amazing. Bambu Slicer has a group of cooling settings to control fan speed and printing speed in filament, and all settings have been fine-tuned, which means that users can directly use Bambu filament to print fast without changing any cooling settings while getting pretty good quality,
* A working AMS, Prusa never really had a working MMU.
Read more in their WIKI https://wiki.bambulab.com/en/software/bambu-studio/high-speed-print-at-quality

But Bambu lab P1P/P1S/X1C printer are not perfect yet:
* Bambu lab printer are really loud!
* The enclosure is not heated (yet) and not sealed, sounds go through,
* The lED strip is not so bright, you may need to add a led strip on top,
* The camera quality is below average (few FPS, low light capabilities), a USB plug for 3rd party camera would be great,
* The Lidar does not work on all plates: in particular textured plates. Moreover, the lidar is only used for the first layer, maybe a later update will continously check the print quality,
* TPU can not be used in AMS,
* Closed source but who really care?

Why so much hate?
* Bambu lab did copy the best open source slicer from Prusa,
* They launched their own portal https://makerworld.com like Prusa did with https://www.printables.com
* Community assume that most of the firmware is a illegal copy of open source firmware,
* The whole design is closed source.

## The Shockwave Effect
As news of BambuLab's advancements spread, the 3D printing community was quick to take notice. Users who had been loyal to Prusa for years began experimenting with BambuLab's printers and materials, discovering a new realm of possibilities. Social media platforms and online forums buzzed with excitement as users shared their experiences, creating a domino effect that led to a significant shift in the industry landscape.

## Prusa's Response:
In the face of this unexpected competition, Prusa Research did not remain idle. Recognizing the need to adapt to the evolving market, Prusa quickly began innovating and releasing firmware updates and new models with improved features. The competition between Prusa and BambuLab sparked a healthy rivalry that ultimately benefited the consumer by driving further innovation.

BambuLab's rise to prominence and its successful challenge to Prusa's dominance is a testament to the dynamic nature of the 3D printing industry. As technology continues to advance, companies must stay on their toes to meet the evolving demands of users. BambuLab's disruptive innovation not only dethroned a giant but also injected a new wave of excitement and competition, pushing the boundaries of what is possible in the world of 3D printing. The shockwave sent by BambuLab serves as a reminder that in the rapidly evolving tech landscape, there is always room for unexpected challengers to rise and redefine the status quo.

# Bambu Lab A1 mini with AMS: Fantastic Value & Speed

A1 Mini offers a build volume of 180 x 180 x 180 mm, a printing speed of up to 500 mm/s, an extrusion temperature of up to 300 ºC, a bed temperature of 80 ºC, and a wide range of compatible materials such as PLA, PETG, TPU and PVA.

* Full-auto Calibration.
* 4-Color Printing with AMS lite.
* Under 48 dB Low Noise in Silent Mode.
* Full-metal Linear Rails and Bearings.
* Vibration and Flow Rate Compensation.
* Build Volume: 180*180*180 mm³
* Chassis: Steel + Extruded Aluminum
* **Tool Head**
  * Hot End: All-Metal
  * Extruder Gears: Steel
  * Nozzle: Stainless Steel
  * Max Hot End Temperature: 300 ℃
  * Nozzle Diameter (Included): 0.4 mm
  * Nozzle Diameter (Optional): 0.2 mm, 0.6 mm, 0.8 mm
  * Filament Cutter: Yes
  Filament Diameter: 1.75 mm
* **Heatbed**
  * Compatible Build Plate: Bambu Textured PEI Plate Bambu Smooth PEI Plate
  * Max Build Plate Temperature: 80 ℃
* **Speed**
  * Max Speed of Toolhead: 500 mm/s
  * Max Acceleration of Toolhead: 10 m/s²
  * Max Hot End Flow: 28 mm³/s @ ABS (Model: 150*150 mm single wall; Material: Bambu ABS; Temperature: 280 ℃)
* **Cooling**
  * Part Cooling Fan: Closed Loop Control
  * Hot End Fan: Closed Loop Control
  * MC Board Cooling Fan: Closed Loop Control
* **Supported Filament**
  * PLA, PETG, TPU, PVA: Ideal
  * ABS, ASA, PC, PA, PET,Carbon/Glass Fiber Reinforced Polymer: Not Recommended
* **Sensors**
  * Monitoring Camera: Low Rate Camera (up to1080P) Timelapse Supported
  * Filament Run Out Sensor: Yes
  * Filament Odometry: Yes
  * Power Loss Recover: Yes
  * Filament Tangle Sensor: Yes
* **Physical Dimensions**
  * Dimensions: 347*315*365 mm³
  * Net Weight : 5.5 kg
* Electrical Requirements
  * Input Voltage: 100-240 VAC, 50/60 Hz
  * Max Power: 150 W
* **Electronics**
  * Display: 2.4 inches 320*240 IPS Touch Screen
  * Connectivity: Wi-Fi, Bambu-Bus
  * Storage: Micro SD Card
  * Control Interface: Touch Screen, APP, PC Application
  * Motion Controller: Dual-Core Cortex M4
* **Software**
  *   * Slicer: Bambu StudioSupport third party slicers which export standard Gcode such as Superslicer, Prusaslicer and Cura, but certain advanced features may not be supported.
Slicer Supported OS: MacOS, Windows
* **Wi-Fi**
  * Frequency Range: 2412 MHz - 2472 MHz (CE) 2412 MHz - 2462 MHz (FCC) 2400 MHz - 2483.5 MHz (SRRC)
  * Transmitter Power (EIRP): ≤ 21.5 dBm (FCC) ≤ 20 dBm (CE/SRRC)
  * Protocol: IEEE 802.11 b/g/n

## Some resources
* [The Bambu Lab Wiki](https://wiki.bambulab.com/en/a1-mini)

## Reducing amount of poop
How to reduce the printer wasted filament when it changes color:

1. Flush into Infill is located on the Others Tab (in advance mode) and will let your poop land into the infill.

2. Tune your flushing volumes by reducing the amount of wasted volume when going from a light color to a darker one. You can also reduce the multiplier.

More ideas that are less useful as they change your workflow:
* If you can print another object at the same time, same height more or less, you can use the wasted poop to create it using flush into object (can be found by right-clicking a model on the build plate).
* Printing multiples of the same item is reducing filament waste during color changes. This is because the printer only wastes filament when it changes color, and will waste the same if you’re printing one or a dozen models.

## Gallery
SAB Goblin Kraken 580 Swashplate Leveller

![SAB Goblin Kraken 580 Swashplate Leveller](/homelab/bambulab/a1/bambu-lab-a1-print-1.webp)
![SAB Goblin Kraken 580 Swashplate Leveller](/homelab/bambulab/a1/bambu-lab-a1-print-2.webp)
![SAB Goblin Kraken 580 Swashplate Leveller](/homelab/bambulab/a1/bambu-lab-a1-print-3.webp)

## In Action
90% of the sound is coming from the ventilator
{{< video "/homelab/bambulab/a1/bambu-lab-a1-print.mp4" "" >}}

# Bambu Lab X1C or updated X1C or Bambu Lab XL?
Waiting till start of february before ordering a bigger printer :smiley:

# From any PDF, Image format to SVG to STL

1. Converted to svg using Figma and Image Tracer plugin
2. Convert SVG to STL using this site: https://svg2stl.com/ .
