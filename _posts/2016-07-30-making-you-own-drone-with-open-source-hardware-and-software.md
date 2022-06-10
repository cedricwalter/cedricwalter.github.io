---
id: 8527
title: 'Making your own drone with open source hardware and software'
date: '2016-07-30T20:10:16+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=8527'
permalink: /hobbies/making-you-own-drone-with-open-source-hardware-and-software/
header:
  teaser: /assets/images/2016/07/arducopter_3.png
---

### ![Arducopter](/assets/images/2016/07/arducopter_3.png "Arducopter")

[Arducopter](http://www.arducopter.co.uk/) is an easy to use multirotor / helicopter UAV. Arducopter runs on the ArduPilot/Pixhawk autopilot. With GPS, this APM/pixhawk is a complete UAV solution that sets it apart from traditional multirotor which often only support remote control. The [Arducopter](http://www.arducopter.co.uk/) system features fully autonomous way-point based flight, with mission planning and real time telemetry via the powerful ground control station. The code is capable of controlling all of the major rotor wing airframes, including Traditional Helicopters, Tricopter(3/Y6), Quadrotor (X/+), Hexa(X/+), and Octa(X/+/V). All you need to do is change the firmware and some parameters on your ArduPilot Mega board.

Note that [Arducopter](http://www.arducopter.co.uk/) software is **fairly mature** and has some great power features, but **is considered to be at the end of its life**, from a software viewpoint, future features are due to be on the [Pixhawk](https://pixhawk.org/) only.

## PixHawk

[Pixhawk](https://pixhawk.org/) is an independent, open-hardware project aiming at providing high-end autopilot hardware to the academic, hobby and industrial communities at low costs and high availability. It provides hardware for the #Linux Foundation [DroneCode](http://dronecode.org/) project. It originated from the [PIXHAWK Project](http://pixhawk.ethz.ch/) of the [Computer Vision and Geometry Lab of ETH Zurich (Swiss Federal Institute of Technology)](http://cvg.ethz.ch/) and [Autonomous Systems Lab](http://www.asl.ethz.ch/) as well from a number of excellent individuals

![pic-prod-pixhawk1](/assets/images/2016/07/pic-prod-pixhawk1_3.jpg "pic-prod-pixhawk1")

Some of the features of the Pixhawk are good for safety such as dual GPS, the EKF (an algorithm to spot faults) and in the pipeline sense and avoid.

### [VRBRAIN](https://vrbrain.wordpress.com/)

# VRBRAIN** autopilot system is a versatile UAV system based around the **VRBRAIN** multipurpose board loaded with a 32 bit version of [Arducopter firmware](http://copter.ardupilot.com/) and a ground station based on [Mission Planner](http://copter.ardupilot.com/wiki/common-install-mission-planner/) software. The autopilot controls the multicopter during flight using internal gyroscopes, accelerometers, and other electronic components. Flight missions are created using Mission Planner on your ground station and loaded onto the autopilot. Once the copter is placed in autonomous mode, the autopilot receives location data from the GPS module and executes the mission script. For safety, a radio control (RC) receiver is connected to the APM to allow for manual control using an RC transmitter.

APM, PX4 and Pixhawk are "open source" and "open hardware" and are supported by an international team of developers. Pixhawk and VRBrain development is ongoing and improvements and new capabilities are added very frequently.

# Creating your own drone

#### Required

13. Flight controller ArduPilot Mega or Pixhawk
14. Frame (or multi-rotor frame)
15. Motor to rotates the propeller
16. ESC are used to control the brushless motors and are rated in terms on Amps, the amp rating of your ESC will need to match that of the motor you are using
17. Multi-rotors generally use large propellers, 10×45, and 12×47 are the most popular.
18. Radio Transmitter/Receiver
19. Battery and Charger
#### Optional

21. Wireless Telemetry Kit
22. Optical Flow Sensor – used to help with position hold at low altitudes.
23. Ultrasonic Rangefinder (Sonar) used to help with your drone altitude hold at low altitudes (under 10m), above 10m the built in barometer is used.
24. Battery Monitor to warn you when the battery is low so you can land.
25. Camera Gimbal
26. Wireless Video FPV
27. On Screen Display
The most important part of your drone is the flight controller. There are currently two main boards to choose from, ArduPilot Mega v2.6 or Pixhawk. The flight controller keeps your multi-rotor stable while you are flying in manual mode, and can take over to fly to 3D waypoints when you fly in autonomous mode.

[![PixhawkQuad](/assets/images/2016/07/pixhawkquad_thumb.jpg "PixhawkQuad")](/assets/images/2016/07/PixhawkQuad.jpg)