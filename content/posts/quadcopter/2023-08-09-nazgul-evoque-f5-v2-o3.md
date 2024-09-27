---
title: 'Nazgul Evoque F5 V2 O3'
summary: "Nazgul Evoque F5 V2 O3 GPS Bind & Fly ELRS using Radiomaster ZORRO 4 in 1 with Radiomaster Ranger Nano TX in 10 minutes and some tips and tricks."
type: posts
date: 2023-08-09T10:34:16+00:00
cover: /2023/08/iFlight-Nazgul-Evoque-F5-V2-HD-5inch-6S-FPV-Drone-BNF-F5X-F5D-Squashed-X-or-e1691577482692.webp
tags:
  - betaflight
  - dji
  - drone
  - elrs
  - fpv
  - nazgul
  - radiomaster
categories:
  - Quadcopter
---
# Nazgul Evoque F5 V2 O3 GPS Bind & Fly ELRS using Radiomaster ZORRO 4 in 1 with Radiomaster Ranger Nano TX in 10 minutes

With a maximum speed of 190 Km/h, an impressive hover time of around 8 minutes and a whopping flight distance of 5 km, the Nazgul Evoque F5 V2 6S is all set to become your go-to FPV drone.

# Prerequisites

*   Nazgul Evoque F5D or F5X V2 O3 GPS ExpressLRS
*   DJI goggles 2
*   Software to install
    *   ExpressLRS Configurator installed [https://github.com/ExpressLRS/ExpressLRS/releases](https://github.com/ExpressLRS/ExpressLRS/releases)
    *   Betaflight Configurator installed [https://github.com/betaflight/betaflight-configurator/releases](https://github.com/betaflight/betaflight-configurator/releases)
    *   EdgeTX Companion installed [https://github.com/EdgeTX/edgetx/releases](https://github.com/EdgeTX/edgetx/releases )
*   Radiomaster ZORRO transmitter 4 in 1 multi protocol or ELRS
*   Radiomaster Ranger nano TX ELRS
*   A small ventilator to keep the O3 cool while updating the receiver update


# Betaflight 4.5 CLI Diff

Here is the Dump for Betaflight 4.5 and Nazgul Evoque F5D V2 O3

https://betaflight.com/docs/wiki/release/betaflight-4-5-release-notes

## Notes
* OSD
 * Error messages are displayed in the middle of the screen, e.g. arming flags
* Return to Home is configured and as a result You can not ARM if you have not at lest 7 Satellites
* Mode tab
 * After using this CLI, check ALL mode, which switch you prefer to ARM, BEEPER, GPS, Flight modes, ...
* Receiver tab
 * Mapping AETR1234, if you use something else dont forget to change it!
* Motor tab
 * XING2 2207 4S / 6S Brushless Motor are 12N14P, so 14 poles

```bash
#

# diff all

# version
# Betaflight / STM32F7X2 (S7X2) 4.5.0 Apr 28 2024 / 06:56:11 (c155f5830) MSP API: 1.46
# config rev: 3068e6e

# start the command batch
batch start

# reset configuration to default settings
defaults nosave

board_name IFLIGHT_BLITZ_F722
manufacturer_id IFRC
mcu_id 000d00295746501920303431
signature

# name: Nazgul F5 V2

# feature
feature MOTOR_STOP
feature GPS
feature TELEMETRY
feature RSSI_ADC
feature LED_STRIP
feature OSD

# serial
serial 0 131073 115200 57600 0 115200
serial 1 64 115200 57600 0 115200
serial 3 2 115200 115200 0 115200

# beacon
beacon RX_LOST
beacon RX_SET

# led
led 0 0,0::A:4
led 1 1,0::A:4
led 2 2,0::A:4
led 3 3,0::A:4
led 4 4,0::A:4
led 5 5,0::A:4
led 6 6,0::A:4
led 7 7,0::A:4
led 8 8,0::A:4
led 9 0,1::A:4
led 10 1,1::A:4
led 11 2,1::A:4
led 12 3,1::A:4
led 13 4,1::A:4
led 14 5,1::A:4
led 15 6,1::A:4
led 16 7,1::A:4
led 17 8,1::A:4
led 18 9,0::A:4
led 19 10,0::A:4
led 20 11,0::A:4
led 21 12,0::A:4
led 22 13,0::A:4
led 23 14,0::A:4
led 24 15,0::A:4
led 25 9,1::A:4
led 26 10,1::A:4
led 27 11,1::A:4
led 28 12,1::A:4
led 29 13,1::A:4
led 30 14,1::A:4
led 31 15,1::A:4

# aux
aux 0 0 3 1475 2100 0 0
aux 1 1 1 1400 1625 0 0
aux 2 2 1 900 1100 0 0
aux 3 46 2 1425 1625 0 0
aux 4 13 0 1675 2100 0 0
aux 5 35 2 1725 2100 0 0

# rxfail
rxfail 3 s 1275

# master
set gyro_lpf2_static_hz = 0
set dyn_notch_count = 1
set dyn_notch_q = 500
set dyn_notch_min_hz = 130
set acc_calibration = -46,-36,46,1
set rc_smoothing_auto_factor = 35
set rc_smoothing_auto_factor_throttle = 28
set rc_smoothing_setpoint_cutoff = 12
set rc_smoothing_feedforward_cutoff = 12
set rc_smoothing_throttle_cutoff = 20
set fpv_mix_degrees = 10
set blackbox_disable_pids = ON
set blackbox_disable_rc = ON
set blackbox_disable_setpoint = ON
set blackbox_disable_gyro = ON
set blackbox_disable_gyrounfilt = ON
set blackbox_disable_acc = ON
set blackbox_disable_debug = ON
set blackbox_disable_motors = ON
set blackbox_disable_rpm = ON
set dshot_idle_value = 509
set dshot_bidir = ON
set motor_pwm_protocol = DSHOT300
set failsafe_delay = 10
set failsafe_throttle = 1200
set failsafe_switch_mode = STAGE2
set failsafe_procedure = GPS-RESCUE
set vbat_warning_cell_voltage = 355
set yaw_motors_reversed = ON
set small_angle = 45
set gps_sbas_mode = AUTO
set gps_ublox_use_galileo = ON
set gps_set_home_point_once = ON
set gps_rescue_throttle_min = 1200
set gps_rescue_throttle_hover = 1265
set gps_rescue_min_sats = 7
set osd_cap_alarm = 1000
set osd_alt_alarm = 120
set osd_link_quality_pos = 2433
set osd_link_tx_power_pos = 2401
set osd_rssi_dbm_pos = 2465
set osd_flymode_pos = 568
set osd_throttle_pos = 449
set osd_current_pos = 481
set osd_mah_drawn_pos = 2593
set osd_gps_speed_pos = 2497
set osd_gps_sats_pos = 2369
set osd_home_dir_pos = 2337
set osd_home_dist_pos = 2338
set osd_flight_dist_pos = 2561
set osd_altitude_pos = 18913
set osd_avg_cell_voltage_pos = 2625
set osd_disarmed_pos = 2454
set osd_stat_bitmask = 4486956
set osd_gps_sats_show_pdop = ON
set craft_name = Nazgul F5 V2
set pilot_name = Cédric

profile 0

# profile 0
set profile_name = nazgul
set dterm_lpf1_dyn_min_hz = 52
set dterm_lpf1_dyn_max_hz = 105
set dterm_lpf1_static_hz = 52
set vbat_sag_compensation = 100
set anti_gravity_gain = 20
set p_pitch = 62
set i_pitch = 55
set d_pitch = 57
set f_pitch = 139
set p_roll = 59
set i_roll = 53
set d_roll = 50
set f_roll = 134
set p_yaw = 59
set i_yaw = 53
set f_yaw = 134
set angle_limit = 55
set horizon_level_strength = 50
set d_min_roll = 48
set d_min_pitch = 54
set feedforward_smooth_factor = 20
set feedforward_jitter_factor = 15
set feedforward_boost = 5
set dyn_idle_min_rpm = 35
set simplified_master_multiplier = 140
set simplified_i_gain = 50
set simplified_d_gain = 115
set simplified_pi_gain = 95
set simplified_dmax_gain = 15
set simplified_feedforward_gain = 80
set simplified_dterm_filter = OFF
set simplified_dterm_filter_multiplier = 70
set tpa_rate = 60
set tpa_breakpoint = 1300

profile 1

profile 2

profile 3

# restore original profile selection
profile 0

rateprofile 0

# rateprofile 0
set roll_rc_rate = 10
set pitch_rc_rate = 10
set yaw_rc_rate = 10
set roll_expo = 30
set pitch_expo = 30
set yaw_expo = 30

rateprofile 1

rateprofile 2

rateprofile 3

# restore original rateprofile selection
rateprofile 0

# save configuration
save
#
```

# DJI Goggles 2

Don’t use them on the Nazgul without the FCC hack, I crash once 30m away because the signal was too low…

# Nazgul Evoque F5D or F5X


### What are the difference between FPV dead cat (F5D) and FPV X (F5X) frame?

“FPV dead cat” and “X” frame are two different configurations for quadcopter drone frames. These frame designs have distinct characteristics that can affect the drone’s performance, flight characteristics, and capabilities. Here are the main differences between the two:

### FPV Dead Cat Frame

*   Design: The “FPV Dead Cat” configuration is a variation of the traditional quadcopter design. It gets its name from the shape resembling a “dead cat” due to the front arms extending forward while the rear arms extend diagonally backward.
*   Motor Placement: In a FPV Dead Cat frame, the front motors are positioned farther apart than the rear motors. This asymmetrical motor arrangement can help reduce the visibility of the propellers in the drone’s camera view, enhancing the quality of FPV (First-Person View) footage.
*   Stability: The diagonal motor layout can contribute to improved stability and reduced vibrations, which can lead to smoother flight and better video quality.

### FPV X Frame

*   Design: The “X frame” configuration is one of the most common quadcopter designs. It features a symmetrical layout where all four arms extend outward in an “X” shape.
*   Motor Placement: In an X frame, all four motors are evenly spaced and aligned. This symmetrical layout can provide balanced thrust distribution and predictable flight characteristics.
*   Agility: X frames are known for their agility and responsiveness in flight. The balanced motor placement allows for quick changes in direction and maneuvers, making them popular for racing and acrobatics.
*   Simplicity: X frames are often simpler in design and easier to build compared to more complex configurations like the FPV Dead Cat.

# Express LRS

## FLASH the transmitter TX with latest ELRS firmware

![](/2023/08/Ranger-Nano-2.4GHZ-ELRS-Module-144x300.webp)

Featuring up to 1W output, F-1000Hz refresh rates and a high-efficiency cooling system, the Ranger Micro 2.4GHz ELRS Module represents the cutting edge in ELRS technology. Attach the module to a compatible radio (RadioMaster [Zorro](https://www.radiomasterrc.com/products/zorro-radio-controller) and more) to enjoy all that ELRS has to offer. The included T-shape antenna is designed for maximum signal coverage. An optional MOXON antenna is available for directional applications.

* Note: The Ranger Nano 2.4GHz ELRS Module fits Nano module bays, for JR style/Micro connectors, please consider the [Ranger](https://www.radiomasterrc.com/products/ranger-2-4ghz-elrs-module) and the [Ranger Micro modules](https://www.radiomasterrc.com/products/ranger-micro-2-4ghz-elrs-module).

Launch Express LRS Configurator, select latest release, for me the 3.3.0, and the target “”Radiomaster 2.4GHz” and the device ”Radiomaster Ranger 2.4GHz TX”

![](/2023/08/Express-LRS-Configurator-Radiomaster-2.4GHz-TX-step1-1024x642.webp)

Connect the computer to the ”Radiomaster Ranger 2.4GHz TX” with a USB-C cable

Click the button “Download LUA Script” to save the elrsv3.lua file, it has to go in scripts/tools/ on the SD-CARD, see later step

Scroll down and enter a custom binding phrase, the more unique the better, it allow the sender to autobind, and allow more than one pilot to fly at the same time.

*   The REGULATORY\_DOMAIN\_EU\_CE\_2400 has to be set, it limite power to 100mW but can be overridden later

*   HOME\_WIFLSSID and HOME WIFI PASSWORD are your WIFI network SSID and password, they are optional

![](/2023/08/Express-LRS-Configurator-Radiomaster-2.4GHz-TX-step2-1024x580.webp)

Click “Flash” it will build an upload the latest firmware on your Radiomaster Ranger nano TX, it take 1-2 min to complete and reboot

## Flash the receiver RX with latest ELRS firmware

There is 4 methods to update your receiver

*   Inject the [ELRS RX firmware as Betaflight Passthrough](https://www.expresslrs.org/software/updating/betaflight-passthrough/)
*   Update the [ELRS RX firmware](https://www.expresslrs.org/software/updating/betaflight-passthrough/) with WIFI (3 methods!)

I choose this one that work for me

Attention: Cool down your DJI O3 unit with the ventilator!

Attention: Don’t switch on the Radiomaster ZORRO, keep it Off!

Remove the propeller first and connect the main power

power on the drone and Wait 60s, the onboard RX receiver will create a new WIFI network with SSID “ExpressLRS RX” password: expresslrs DONT CONNECT TO IT NOW

Launch Express LRS Configurator, select latest release, for me the 3.3.0, and the target “iFlight 2.4 GHz” and the device ”iFlight 2.4 GHz RX”

*   Select “Flashing Method” to “WIFI”
*   Keep the SAME binding phrase as previously

Click the button “BUILD” and wait till completion (this require an internet connection so we don’t use the expressLRS network up to here)

When the build is completed, connect to the expressLRS network WIFI. Click now Flash and wait till completion

Connecting to the WIFI expressLRS network open a webpage to 10.0.0.1, You can see there that the latest firmware is installed, override some settings and update with a binary file.

# Radiomaster ZORRO

## EdgeTX

“EdgeTX” is a community-driven open-source project that focuses on developing alternative firmware for radio control transmitters used in the hobby of remote-controlled (RC) models, such as drones, airplanes, helicopters, and more. The firmware is designed to replace the stock firmware that comes with many RC transmitters, offering additional features, customization options, and improvements based on the needs and preferences of the RC community.

EdgeTX is built upon the open-source project OpenTX, which is widely used in the RC hobby. OpenTX provides a flexible and powerful platform for programming and controlling RC transmitters. EdgeTX takes the foundation of OpenTX and builds upon it, adding new features, enhancements, and user interface improvements.

Why EdgeTX is better and recommended on your Radiomaster Zorro

1.  Customization: EdgeTX often offers more customization options than the stock firmware of RC transmitters. This allows users to tailor the transmitter’s behavior to their specific needs and preferences.
2.  New Features: EdgeTX developers may introduce new features that are not present in the original firmware, which can enhance the user experience and provide additional functionality.
3.  User Interface Improvements: EdgeTX might include improvements to the user interface, making it more intuitive and user-friendly for programming and controlling RC models.
4.  Bug Fixes and Updates: Like any software project, EdgeTX may include bug fixes and updates to address issues or vulnerabilities that might exist in the stock firmware.
5.  Community-Driven Development: EdgeTX is often developed by a community of hobbyists who are passionate about improving RC transmitter firmware. This community-driven approach allows for a wider range of ideas and contributions.
6.  Open Source: EdgeTX, like its predecessor OpenTX, is open-source software. This means that the source code is available to the public, enabling anyone to contribute to its development, review its code, and ensure transparency.

## Update EdgeTX

Launch EdgeTX companion

![](/2023/08/edgetx-companion-add-radio-profile-zorro-1-1024x978.webp)

Create a new profile, using menu “Settings” – “Add profile” – select Radio Type = Radiomaster Zorro

I fly RC Helicopter so I do not switch off noheli, you need to activate lua scripts

Lua (pronounced “loo-uh”) is a lightweight, high-level programming language designed for embedded systems, scripting, and general-purpose programming. It’s often used as an extension or embedded scripting language in various applications and software frameworks. Lua is known for its simplicity, flexibility, and ease of integration.

![](/2023/08/edgeTx-read-models-and-settings.webp)

You can now do a backup first by clicking “Read models and setting from radio” and saving on your disk the documents (.etx)

![](/2023/08/edgeTx-settings-icon.webp)

Click settings

![](/2023/08/edgeTx-settings-for-update-1024x980.webp)

Define a folder for updates first

![](/2023/08/edgeTx-update.webp)

Click the Update button to refresh all version and follow on screen

![](/2023/08/edgeTx-sdcard-update-button.webp)

Update the SDCARD to reflect the latest state of the EdgeTX firmware

# Betaflight

## Modes and switches

The GPS support Galileo, so activate it under configuration, this was not in the default of iFlight configuration.

The BNF (Bind and Fly)ELRS version come with a Betaflight preset, we just need to assign switches to some modes

![](/2023/08/betaflight-nazgul-evoque-assign-switches-1024x540.webp)

with the above setup:

*   SF switch and G button must be activated for the drone to ARM
*   SC switch is the beeper or drone finder
*   SB switch is the angle or manual mode
*   SE activate the failsafe

![](/2023/08/radiomaster-zorro-tx-layout-1024x592.webp)

## GPS rescue mode

GPS Rescue is OFF by default to prevent from unwanted or unexpected drone behavior.

Please carefully study the Betaflight Wiki on [https://github.com/betaflight/betaflight/ wiki/GPS-rescue-mode](https://github.com/betaflight/betaflight/ wiki/GPS-rescue-mode) and setup an AUX switch for first tests in line of sight and safe environment!

Enable Expert Mode in the Betaflight Configurator
to access the Failsafe tab and configure the GPS Rescue feature. Default setup needs at least 5 satellites before you’re able to arm, unless you adapt the settings. At this point in time, DJI digital FPV can’t display OSD messages (for example if GSP Rescue is not available). Analog FPV does!

Quote BF:
 “GPS Rescue Mode is intended to bring your quad back autonomously in case of an emergency such as loss of video or radio link. The only purpose of GPS Rescue is to bring the quad back into range so you can retake control as soon as possible. GPS Rescue IS NOT a full “Return To Home\* (RTH) function.\*

Fly in a straight line
for at least 100 meters past your descent distance, make sure the home arrow is pointing at your direction to confirm correct GPS functionality. Manually activate GPS rescue mode and study it’s behaviour.

GPS performance
(search speed and the amount of satellites found) greatly depends on the environment you’re in. Bad weather and obstructed areas will give you fewer satellites and a fewer accuracy that might not work reliably before take-off or even in-flight. Always make sure not to bring yourself or others in danger!

## Recommended failsafe GPS setup

*   40 Angle
*   30 Initial altitude (meters)
*   20 Descent distance (meters)
*   30 Minimun distance to home(meters)
*   5.00 Ground speed(meters/second)
*   1100 Throttie minimum
*   1600 Throttle maximum
*   1275 Throttle hover
*   5.00 Ascend rate(meters/second)
*   1.00 Descend rate(meters/second)
*   8 Minimum satelites

DO NOT ACTIVATE: Allow arming without fix-WARNING: the GPS Rescue will not be available
