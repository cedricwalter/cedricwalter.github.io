---
title: "Radiomaster Nexus for Rotorflight"
summary: ""
type: posts
date: 2024-06-17T10:30:17+01:00
cover: https://www.waltercedric.com/rchelicopter/Rotorflight_rotorflight.webp
summary: "The NEXUS Flybarless (FBL) control unit has been designed from the ground up based on the Rotorflight 2.0 reference design. All aspects of the NEXUS have been planned and tested for optimum performance and compatibility, ensuring the best out-of-the-box Rotorflight experience on the market today."
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
  - sab-raw-580
  - sab
categories:
  - RC helicopter
---
The NEXUS Flybarless (FBL) control unit has been designed from the ground up based on the Rotorflight 2.0 reference design. All aspects of the NEXUS have been planned and tested for optimum performance and compatibility, ensuring the best out-of-the-box Rotorflight experience on the market today.

Rotorflight is a Flight Control software suite designed for single-rotor helicopters. It consists of: Rotorflight Flight Controller Firmware. Rotorflight Configurator, for flashing and configuring the flight controller

With its advanced STM32F722 MCU and the TDK ICM-42688-P 6-axis MEMS motion tracking device, which combines a 3-axis gyroscope and a 3-axis accelerometer, the NEXUS flight controller ensures precision control and flight. A large 128MB of onboard flash memory ensures you can log all your flights for fine-tuning and adjustment.

Our Plug'n'Play solder-free RP3-H ExpressLRS receivers feature a locking connector system to ensure a stable connection between the control unit and receiver. DSM and S.BUS ports are also available for use with your selected receiver type. The NEXUS also features multi-function ports for future expansion.

The NEXUS features a CNC machined aluminum case as standard, which looks great, protects the control unit, and dissipates heat for the F722 processor.

After more than 12 months of R&D, the NEXUS has been tested, tuned, and tested again by not only the developers at Rotorflight but also a team of experienced helicopter pilots who took part in our beta testing program. We would like to thank the Rotorflight team and the Beta testing team for making the NEXUS possible!

{{< notice warning>}}
{{< warning >}}
{{< /notice >}}

{{< notice tip>}}
{{< heli-tips >}}
{{< /notice >}}

{{< notice tip>}}I translated the Rotorfligh configurator to French, took me 30h to complete. https://github.com/rotorflight/rotorflight-configurator/pull/82
{{< /notice >}}

## Features
https://www.radiomasterrc.com/products/nexus-helicopter-flight-controller

### ELRS
* non-ELRS users don't need to deal with dangling antennas.
* ELRS users have a plug-and-play option with the RP3-H.

### Update ELRS
ELRS RX version MUST match the ELRS TX version!

Using the WiFi method is the easiest.
1. Plug the NEXUS with USB-C without LiPo and wait for 60s
3. Download ExpressLRS configurator
4. Build
5. Connect to "ExpressLrs RX"
6. Upload bin file

## Mounting

WIP

# Setup

## Radiomaster Tx16s setup
use
* https://github.com/bob01/etx-templates
* https://github.com/offer-shmuely/rf2-touch-edgetx

## Detailled Rotorflight setup
{{< youtube VcOebsyBGqM >}}
{{< youtube kS20_eaAP8A >}}
{{< youtube CLk8pIkCRqA >}}
more https://www.youtube.com/watch?v=VcOebsyBGqM&list=PLy3TC1ILJYTht1pKEBHK4f_E6sJRLNp4v

or
{{< youtube YdfZgF5WKuQ >}}

## Fast Rotorflight setup in 14 min
{{< youtube WxYWBPVDbu0 >}}

# FAQs

## Motors are not spooling
Does it spool if you use override? YES look at the arming flag to locate issue (https://www.rotorflight.org/docs/Tutorial-Setup/Status#arming), NO! you may need to calibrate ESC

## Throttle position is higher than the min arm position
1. Lower the throttle in your TX
2. If you can't make your throttle go lower on your TX you can increase the throttle channel value for Armin on the receiver tab

## F.Port Support
If you want to connect f.port to sbus port then you need to switch the resources from rx to tx
F.port is one wire only
You connect it to SBUS slot
Then in CLI you switch the resources

```
resource SERIAL_RX 2 NONE
resource SERIAL_TX 2 A03
```
![f-port](https://github.com/cedricwalter/Rotorflight-Docs/assets/763491/ce4b6dc5-9908-4d38-a8de-bf97ef964bee)

Then in configurator you enable these two

## Tips
- A, B, C are nearly identical expansion ports
- You can use the S.BUS port for ESC telemetry, if you are not using it for S.BUS or F.Port. You can use the S.BUS port for F.Port, and use the DSM port for ESC telemetry Or you can use any of the expansion ports for ESC telemetry
