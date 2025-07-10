---
title: "Rotorflight Flydragon- F722"
summary: ""
type: posts
date: 2024-06-17T10:30:17+01:00
cover: https://www.waltercedric.com/rchelicopter/Rotorflight_rotorflight.webp
summary: "Rotorflight is a Flight Control software suite designed for single-rotor helicopters. It consists of: Rotorflight Flight Controller Firmware. Rotorflight Configurator, for flashing and configuring the flight controller "
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
{{< notice warning>}}
{{< warning >}}
{{< /notice >}}

{{< notice tip>}}
{{< heli-tips >}}
{{< /notice >}}

{{< notice tip>}}I translated the Rotorfligh configurator to French, took me 30h to complete. https://github.com/rotorflight/rotorflight-configurator/pull/82
{{< /notice >}}


## First step
1. Download latest rotorflight configuration for stable (Rotorflight RF1) or Beta (Rotorflight RF2)
2. Connect the Flight controller DragonFly to USB-C to your computer
3. Launch and do a backup in the CLI, by typing `dump all` and saving to a file, just for your reference.
4. Disconnect

## Installing Rotorflight on the Flydragon F722

Rotorflight 2 | FULL SETUP from Flash to First Flight w/ Filters

{{< youtube YdfZgF5WKuQ >}}

Rotorflight 2 | SETUP SPEEDRUN | Flash to Flight in 14 Minutes!

{{< youtube WxYWBPVDbu0 >}}

1. Connect the Flight controller DragonFly to USB-C to your computer
2. Click the button "Update Firmware"
3. Select "All release and snapshots"
4. Select the board "FLYDRAGONF722_V2"

{{< notice warning>}}flydragonf722M_v2 and flydragonf722_v2??
The M is for the motorised tail (2 motors, servos) while the other is for variable tail (1 motor, 4 servos).
{{< /notice >}}


![Rotorflight RF2 and FLYDRAGONF722_V2](/rchelicopter/fbl/rotorflight-2-flydragon-f722.webp)

4. Click "Load Firmware [Online]" button at the bottom of the screen
5. Click now "Flash Firmware"
You're done, safe default for the board have been applied.

## Installing Rotorflight on the remote controller

Copy the LUA scripts on the SDCard https://github.com/rotorflight/rotorflight-lua-scripts

{{< notice warning>}}Attention: the version of the LUA has to match the version of rotorflight, this is especially true for the snapshots. Check the date in the firmware name and use that same date in the filename of the lua scripts zip file.

e.g. ["Rotorflight LUA Scripts Snapshot 2.0.0-20240128"](https://github.com/rotorflight/rotorflight-lua-scripts/releases/tag/snapshot%2F2.0.0-20240128) match "Rotorflight Snapshot 2.0.0-20240128" firmware{{< /notice >}}

## Wiring the controller

Following the official documentation

![Rotorflight Flydragon F722 wiring](/rchelicopter/sab-raw-580/FlyDragonF722_v2.webp?width=500px)

With my YGE Saphir 155 ESC, there is some stuff to do

![YGE Saphir 155 ESC wiring](/rchelicopter/fbl/YGE-Saphir-155-ESC.webp)

* YGE Throttle -> ESC on FlyDragon
* YGE RPM -> RPM-E on FlyDragon
* YGE Telemetry -> SBUS on FlyDragon, set UART 2 to "ESC Telemetry in Rotorflight" and protocol to BLHeli32
* Flash the YGE with latest Beta firmware so it support BLHeli32

{{< notice warning>}}Attention: I did split the plug to remove the ground from the telemetry plug. This is a bad idea, as this plug is used in the USB dongle to update the ESC. Don't do it!{{< /notice >}}

## Installing the controller

Depending how you mount physically the controller on the heli, you may have to adjust the yaw of the sensors.

Heli Seen from the back, tail view

| Default | Rotated |
|---|---|
| ![Alt text](/rchelicopter/fbl/FlyDragonF722-default-mount.webp) | ![Alt text](/rchelicopter/fbl/FlyDragonF722-rotated-mount.webp)  |
| Under "Board and Sensor Alignment" keep Yaw = 0 | Under "Board and Sensor Alignment" set Yaw = 180 |
| Please level the helicopter and calibrate it once. Hit the button "Save and Reboot" | After setting 180 degrees, please level the helicopter and calibrate it once. Hit the button "Save and Reboot" |

Use 3M gray tape tha has NO foam at all

**Verify proper operations in the status widget, that the sensor properly tilt the helicopter in the preview windows**

## Installing FlyDragon ELRS antenna

I used with great success the mount at https://makerworld.com/en/models/88556 printed in PLA, put TPU, PETG is also OK


## Check the swashplate compensation is in the right direction
if you move you heli, say left and right, the swash should move level itself to the horizon, as if it is trying to balance a cup of water in the middle and preventing it from spilling if the swash moves in the same direction as you are moving you heli and making the swash angle EVEN STEEPER, thats a wrong direction.

# Check that the tail compensation is in the right direction
Check your tail to see such that if you put the heli to right side facing you, and that you are looking at the tail rotor head at the hub, when you move the tail towards you, the servo should compensate such that it makes the blades angles push air at you.

# ELRS

## ELRS Channel resolution setting

ELRS has different switch modes for different channel resolutions. We want to have at least 5 channels with full resolution. The Hybrid und Wide switch modes are not sufficient for Helicopter use as they offer only 4 channels with full resolution. We need to use the “8 channel full resolution mode“

## ELRS Transmit power

It is important to not enable Dynamic TX power. This is because of a weird logic tied to channel 5. Please keep The TX Power set to fixed. 25mW should be more then sufficient for line of sight flying for model helicopters.

## Telemetry
Adding sensors not supported by the CSRF protocol, see https://www.rotorflight.org/docs/Tutorial-Walkthroughs/ELRS-telemetry-reuse

## Updating the ELRS internal module

### Bind process

3 methods are available
### ELRS Wifi access point
The Flydragon F722 disable wifi out of the box due to aluminium casing, you need to flash a custom firmware to enable it. From the ELRS web GUI, you can set your binding phrase. [read more in ELRS manual](https://www.expresslrs.org/software/updating/wifi-updating/)

### Boot button
Power the FlyDargon F722 and press the boot button once. The receiver LED would turn off and then turn back on.
Continue pressing the button 2 more times. Make sure the receiver LED doing quick double-blink. Which indicates ELRS binding
mode. In edgeTx select bind using ELRS Lua script.

### Using betaflight passthrough
While the transmitter is disconnected, power the FC and hold the boot button until the receiver LED stays on. This enables the receiver firmware update mode.


[read more in ELRS manual](https://www.expresslrs.org/software/updating/betaflight-passthrough/)
### ELRS companion
Not supported by the FlyDragon F722 :-(

## FlyDragon F722 v2 Manuals
* [FlyDragon F722 v2 ELRS Receiver Manual](/rchelicopter/sab-raw-580/FlyDragonF722_v2_ELRS_Receiver_Manual.pdf)
* [FlyDragon F722 v2 specifications](/rchelicopter/sab-raw-580/FlyDragonF722_v2_FBL_Specifications.pdf)

# FlyLog
https://github.com/Jiki-Mo/FlyLog
