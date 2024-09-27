---
title: "Flybarless Gyroscope for RC helicopter"
summary: "A flybarless gyroscope, also known as a flybarless system or FBL system, is a crucial component in RC helicopters that replaces the traditional flybar setup. The primary function of a flybarless gyroscope is to stabilize the helicopter during flight by controlling the cyclic and tail rotor servos based on the pilot's inputs and external factors such as wind."
type: posts
date: 2024-01-07T10:44:17+01:00
cover: /2023/11/sab-raw-700-rc-helicopter.webp
tags:
  - rc-helicopters
  - flybarless-systems
  - fbl-controllers
  - helicopter-gyro
  - rc-helicopter-setup
  - flight-controller
  - rc-helicopter-electronics
  - fbl-system-features
  - helicopter-tuning
  - fbl-system-compatibility
  - choosing-fbl-gyro
  - rc-helicopter-technology
  - flybarless-advantages
  - self-leveling-helicopter
  - rc-helicopter-tips
  - hobbyist-blog
  - remote-control-flying
  - helicopter-community
  - rc-helicopter-enthusiasts
  - fbl-system-reviews
categories:
  - RC helicopter
---
## What is a flybarless gyroscope?
A flybarless gyroscope, also known as a flybarless system or FBL system, is a crucial component in RC helicopters that replaces the traditional flybar setup. The primary function of a flybarless gyroscope is to stabilize the helicopter during flight by controlling the cyclic and tail rotor servos based on the pilot's inputs and external factors such as wind.

Here's a simplified explanation of how a flybarless gyroscope works:

### Sensor Input
The flybarless system contains sensors, usually gyroscopes and accelerometers, that continuously monitor the helicopter's movements in three dimensions: pitch, roll, and yaw. These sensors provide real-time data on the helicopter's orientation.

![](/2023/10/RC-Helicopter-Understanding-Transmitter-Flight-Controls--1024x533.webp)

### Microprocessor Processing
The sensor data is processed by a microprocessor within the flybarless system. The microprocessor calculates the helicopter's current attitude and any deviations from the desired level flight. Most of the time an ARM 32 Bits CPU.

### Cyclic and Tail Control
The flybarless system then adjusts the cyclic servos (which control pitch and roll) and the tail rotor servo based on the sensor data. This adjustment is made to counteract any undesired movements and maintain stability.

### Electronic Mixing
Unlike traditional flybar setups, where mechanical linkages transmit control inputs, flybarless systems use electronic mixing to adjust the pitch and roll of the main rotor blades directly. This allows for quicker and more precise corrections.

### Adjustable Gain
Most flybarless systems have an adjustable gain setting. The gain determines the sensitivity of the system to movement inputs. Pilots can tune the gain to find a balance between stability and responsiveness, taking into account their flying style and the helicopter's characteristics.

### Additional Features
Many modern flybarless systems come with additional features such as self-leveling, bailout, and integration with telemetry systems. Self-leveling can automatically bring the helicopter to a level attitude if the pilot releases the controls, while bailout can quickly recover the helicopter from extreme orientations.

### Connectivity
The flybarless system is connected to the helicopter's receiver, where it receives input signals from the pilot's transmitter. It interprets these signals to determine the pilot's intentions and adjusts the servo outputs accordingly.

By relying on electronic sensors and rapid adjustments, flybarless systems offer several advantages over traditional flybar setups, including increased agility, quicker response to pilot inputs, and better performance in windy conditions. These systems have become standard in many modern RC helicopters, providing a more dynamic and enjoyable flying experience.

## Flybarless system brands
Always check for the latest models and reviews, as the RC market is dynamic, and new products are frequently introduced. Additionally, it's crucial to choose a flybarless system that is compatible with your specific helicopter model and fits your flying preferences.

## Open source flybarless gyroscope brands

### Rotorflight

Rotorflight is more than just an FBL gyro. It's a Flight Control Software Suite, consisting of the
firmware (to go into the FC board), the Configurator software, and the Data Log Analyzer (blackbox) software.
It is forked from Betaflight 4.2, but also borrows ideas and code from Heliflight3D. The version 2.0 will allow auto tuning! Open source and cheaper than any FBL system. Adjustable gain with a LUA script. This is clearly the future for FBL system! [Status page](https://github.com/rotorflight/rotorflight/wiki/Status)

As such, it inherits all the great features Betaflight is known for, including
* Support for plethora of FC boards
* Many RX protocols: PPM, Spektrum, FrSky, CSRF, XBus, etc.
* Many telemetry protocols: FrSky, HoTT, S.Port, MSP, etc.
* Many ESC protocols: PWM, Oneshot, Multishot, DShot, etc.
* Blackbox logging
* In-flight tuning
* Video OSD for FPV
* LED strip support
* And MUCH MORE

Rotorflight then adds RC helicopter specific features in the mix:
* PID control loop designed for helis
* Main rotor speed governor
* Motorized tail support
* Two stage rescue
* Tail torque assistance (TTA/TALY)
* Flexible motor/servo mixer and configuration
* Advanced gyro filtering / RPM filtering
* Control normalisation
* Piro compensation
* Swash ring
* And MUCH MORE

Rotorflight is an open source software (GPLv3) project, meaning
* It does not cost anything
* The source code is available
* Anybody can contribute to the project
* It is supported by the community, rather than a company
* It offer advanced rescue function at no costs

They are now Hardware specific board (F405, or better F722) on aliexpress for $36 to $70 with ELRS!
e.g.
* Cheapest but still great, you need to hook a receiver https://www.aliexpress.us/item/1005005598973773.html  $36
* Matek is famous for iNav, RF2 do not support it yet through https://www.aliexpress.us/item/1005006246339349.html  $66
* Best if you use ELRS: Steam Rotorflight RFt metal gyroscope / model helicopter gyroscope /inside ELRS dual antenna receiver 2.4GHz https://www.aliexpress.us/item/1005005600319135.html  $72


* Rotorflight is available on GitHub, https://github.com/rotorflight
* Rotorflight Wiki is the main source of up-to-date information, https://github.com/rotorflight/rotorflight/wiki
* Discord chat room for related discussions and help, https://discord.gg/FyfMF4RwSA
* Helifreak forum https://www.rcgroups.com/forums/showthread.php?4000345-Rotorflight-Flight-Control-%28FBL%29-Software-Official-discussion

Mateksys G474-HELI which is not supported by Rotorflight V1, only Rotorflight V2 (Beta)

## Commercial flybarless gyroscope brands

### Align
Align is a well-known brand in the RC helicopter industry, and they offer a range of flybarless systems, including the Align 3GX and Align 3GX MRS. Not worth to look at. There iares better choices and easier brands on the market now.

### Microbeast
Microbeast, developed by BeastX, is a popular flybarless system that is used in various RC helicopters. It's known for its advanced features and ease of setup. The AttitudeControl offers various operating modes with which the helicopter can be brought into a horizontal position "at the touch of a button". In detail, these are: "Rescue mode", "3D mode" and the "hover trainer" in which the helicopter can be flown like a multicopter. Additional options, such as automatic pitch addition or locking certain control functions, make the system incredibly versatile. AttitudeControl turns the MICROBEAST PLUS into a co-pilot and training aid for beginners and advanced pilots alike!

### Spirit
The Spirit flybarless system is recognized for its performance and flexibility. It's designed to work with a variety of helicopter models and offers advanced tuning options.

### Brain / Bavarian Demon
Brain and Bavarian Demon are brands that offer flybarless systems like the Brain 2 and Bavarian Demon 3X. They are known for their stability and advanced programming features.

### VBar
VBar, produced by Mikado, is a popular flybarless system with a range of options, including the VBar Neo. It's known for its precise control and advanced setup options.

### Ikon
The Ikon flybarless system is known for its simplicity and user-friendly setup. It's designed to work with various helicopters and offers features like self-leveling.

### Skookum Robotics
Skookum Robotics produces high-performance flybarless systems like the Skookum SK540. These systems are known for their stability and advanced tuning capabilities.

### Xbar
Xbar is another brand that produces flybarless systems for RC helicopters. They offer features like bailout and advanced tuning options.

## How to choose a FBL system?

Choosing a Flybarless (FBL) system for your RC helicopter involves considering several factors to ensure compatibility with your helicopter model and meeting your flying preferences. Here are key considerations to help you make an informed decision:

### Buy one that your friends use
Getting helped is a valuable thing.

### Helicopter Compatibility
Ensure that the FBL system is compatible with your specific helicopter model. Check the manufacturer's website, product documentation, or user forums for a list of supported helicopters.

### Features and Functionality
Consider the features offered by the FBL system. Some common features include:
* Gyro Modes Different systems may offer various gyro modes (e.g., heading hold, rate mode).
* Self-Leveling Some FBL systems have self-leveling capabilities, which can be beneficial for beginners or in emergency situations. I would not buy a FBL system without as this funtion is so cheap compare to a crash.
* Telemetry Integration Look for systems that can integrate with telemetry to provide real-time data about your helicopter's performance.
* Bailout Some systems have bailout functions, allowing the helicopter to automatically recover to a level attitude.

### Ease of Setup
Consider the ease of setup and programming. Some FBL systems come with user-friendly software, making it easier to configure settings and tune the system. Look for systems with clear setup instructions and good user interfaces.

### djustability and Tuning
Check the level of adjustability and tuning options the FBL system provides. Advanced users may appreciate systems that allow fine-tuning of parameters to match their flying style.

### Build Quality and Durability
Consider the build quality and durability of the FBL system. Ensure that it can withstand the vibrations and conditions associated with RC helicopter flight. Most casing are in metal or plastic.

### Community Support
Check if there is a strong user community or support forums for the FBL system. Having access to a community can be valuable for troubleshooting, sharing experiences, and getting advice.

### Brand Reputation
Consider the reputation of the brand. Established brands in the RC helicopter industry often have a track record for producing reliable and high-performance FBL systems.

### Budget
Determine your budget for the FBL system. Prices can vary, and while it's essential to stay within your budget, also consider the features and performance you need.

### Updates and Firmware
Check if the FBL system has a history of firmware updates. Regular updates can indicate ongoing support and improvements from the manufacturer.

### Integration with Other Electronics
Ensure that the FBL system integrates smoothly with your receiver, transmitter, and other electronic components in your helicopter.

### Flight Controller Compatibility
If you are using a separate flight controller, such as an autopilot system, ensure that it is compatible with the FBL system.

### Personal Preferences
Consider your personal flying preferences and experience level. Some pilots prefer systems with advanced features, while others may prefer simplicity.

Before making a purchase, read product reviews, seek recommendations from experienced RC helicopter pilots, and gather as much information as possible about the FBL system you are interested in. Always refer to the specific requirements and recommendations of your helicopter model and the FBL system manufacturer.

## Flybarless Gyroscope Setup

Setting up a flybarless gyroscope for an RC helicopter involves several steps to ensure stable and responsive flight. Below is a general guide, but keep in mind that specific instructions may vary based on the brand and model of your flybarless controller. Always refer to the manufacturer's manual for the most accurate information. Here's a basic guide:

### Pre-requisites
1. Read the Manual
Go through the manual provided by the manufacturer. This is crucial for understanding specific settings and features of your flybarless system.

2. Install Gyro System
Physically mount the flybarless gyro system onto your helicopter, following the instructions in the manual.

### Electronic Connections
1. Connect the Gyro
Connect the flybarless system to your receiver, servos, and motor according to the manual. Make sure to follow the correct channel assignments.

2. Check Wiring
Ensure that all the wiring is correctly connected, and there are no loose connections. Verify the correct polarity for each wire.

### Mechanical Setup
1. Level the Swashplate
Ensure that the swashplate is level when the sticks on the transmitter are at their midpoint. Adjust the servo arms and linkages to achieve this.

2. Set Servo Center
Make sure all your servo arms are at 90 degrees when the transmitter sticks are at their midpoint. Adjust the linkages as necessary.

3. Check Blade Pitch
Verify that your main rotor blades have the correct pitch range as per your helicopter's specifications. Adjust the pitch linkages if needed.

### Gyro Configuration
1. Initialize Gyro
Power up your helicopter, and the gyro will typically go through an initialization sequence. Ensure the helicopter remains stationary during this process.

2. Adjust Gain Settings
Start with the gyro gain (also called "gain" or "stability") at a low setting. Gradually increase it until you observe stable flight. Be cautious not to set it too high, as it may lead to oscillations or even a loss of control.

3. Bank Switch Setup
Configure your transmitter to have a switch for different flight modes (e.g., Normal, Idle-up, etc.). Assign different gain values to each flight mode if your gyro supports this feature.

### Test Flight
1. Perform Ground Checks
With the rotor blades removed for safety, check the cyclic and tail control movements to ensure they respond correctly to transmitter inputs.

2. Hover Tests
Conduct low-altitude hover tests to assess stability and responsiveness. Make adjustments to gain settings if necessary.

3. Fine-tune
Fine-tune the gyro settings based on your preferences and flying style. Pay attention to how the helicopter responds to different maneuvers.

### Safety Tips
1. Safety First
Always follow safety precautions and guidelines when working with RC helicopters.

2. Double-Check
Before every flight, double-check all connections, servos, and the gyro system.

3. Start Slow
If you're new to flybarless systems, start with conservative gain settings and gradually increase them as you gain experience.

Remember that these steps are general guidelines, and you should always refer to the specific instructions provided by your flybarless controller's manufacturer.
