---
id: 1036
title: 'Read rc helicopter main rotor RPM realtime'
date: '2004-09-05T17:04:42+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=1036'
permalink: /hobbies/read-rc-helicopter-main-rotor-rpm-realtime/
image: /wp-content/uploads/2004/09/expectedResult.jpg
tags:
    - electronic
    - 'RC helicopter'
---

**THIS IS STILL A PROTOTYPE; NOT TESTED OR WORKING!!!!!!** [**TECHNICAL HELP OR REVIEW APRECIATED** ](http://www.waltercedric.com/comment.html)

 **(I'M A POOR SOFTWARE ENGINEER…)**> > > > **![](/assets/images/2004/09/expectedResult.jpg)**

Â

**Status:**

**11.01.2003** Tx and Rx are working with the 2 voltage regulator. the switching circuit on the rx side is not commutting as expected. Help needed!  
 26.01.2003 measure the current to correctly determine the values of R for the bipolar transistor switch

**I NEED YOUR HELP!** I  
 f you can resolve this, feel free to [**contact me**](http://www.waltercedric.com/comment.html), all ideas are welcome: (read the principle before)

![](/assets/images/2004/09/HelpNeeded.gif)

![](/assets/images/2004/09/help.gif)

Â

**Costs: as found in Europe

- [RX and Tx Aurel](http://www.waltercedric.com/Helico/elec/tachometer/www.aurel.it) 433MHz 29â&#130;¬ and 9â&#130;¬. They need both a very stable alimentation: 5volts +- 250mV
- 2 Voltage regulator, 7805 (+5V)
- Cycle computer, limit to 300km/h ($15)
- 1 Transistor 2N2222A and some resistors.

**TOTAL**: currently $53 approx $70 expected, target below 100$

I can only work during the week-end, expect to have a runnable device in 2-3 weeks. I will use a dremel electric motor to test the accuracy of the final setup (both in remote, and in "normal" mode to test linearity and response time).

**Principle:**

| **![](/assets/images/2004/09/prnciple.gif)** |
|---|
| The cycle computer do not use a hall sensor, only a switch that can be closed by a magnet. The RX ciruit part must also simulate an electronic switch (close or open the cycle computer input). To be convinced, you can simulate the sensor and see the speed increase if you close periodically (fast enough) the 2 wires of the cycle computer. |

**Datasheets:**

| - [Aurel RX](http://www.waltercedric.com/Helico/elec/tachometer/extern/RX-4M50RR30SF.pdf) ([www.aurel.it](http://www.aurel.it/) ) - [Aurel TX](http://www.waltercedric.com/Helico/elec/tachometer/extern/TX-4M50SA05IA.pdf) ([www.aurel.it](http://www.aurel.it/) ) | - [L7805](http://www.waltercedric.com/Helico/elec/tachometer/extern/l7805.pdf), Voltage regulator - [2N2222](http://www.waltercedric.com/Helico/elec/tachometer/extern/2N2222.pdf), Bipolar NPN transistor |
|---|---|

**Drawning:**

**RX part: Document in Powerpoint, feel free to modify it, and send it back with suggestions -&gt;**[**CLICK HERE**](http://www.waltercedric.com/Helico/elec/tachometer/docs/RXAurelTachometer.ppt)

![](/assets/images/2004/09/ImplRX.gif)

Â

**Right now, I do not know:**

- **if I need a comparator after the digital data output. -&gt; it is integrated in the receiver. Output is 0Volt OR 3,8Volts (dicrete values)**
- **if I need an antenna. Range test to be done and incocuity of device (no interferences in PPM and PCM mode)**

**The transistor is not switching, bad value of ib and rb, rc (11.01.2003)**

- **Rc** found for IC = IC1 = 10 mA and VCE = VCE1 = 1 V. lead to RC = (VCC-VCE1)/Ic1= (1,53 -1)/0.01=&gt; **Rc= 50 Ohms**
- **Rb** found for IB = IB1 = 100 ÂµA . Vcde = 5 V. lead to Rb = (Vcde-Vbe)/ IB1, Vbe=0.7V for Silicium Transistor =&gt; **Rb=44KOhms**

**TX part: Document in Powerpoint, feel free to modify it, and send it back with suggestions -&gt;**[**CLICK HERE**](http://www.waltercedric.com/Helico/elec/tachometer/docs/TXAurelTachometer.ppt)

**Right now, I do not know:**

- **if I need in ?A? a separate power source, (with this lot of ampere, we can destruct the detector when it will be close by the magnet),**
- **if I need in ?B? something for avoiding the noise when the mechanical switch will close…(should create at least 400 on-off….) to test if it modify the speed, the cycle computer should integrate one already. Bad: it only send no relevant data to the RX.**

**![](/assets/images/2004/09/ImplTX.gif)**

Â

**Prototype:**

**When you create or try to reproduce this kit, please validate each stage before continuing: in eg:**

**1. Test both voltage regulator, assure that they deliver 5 volts +- 250mV  
 2. Test the TX and RX, simulate the on/off signal with a wire connected to +5Volts, the Rx output go to a voltmeter  
 2. Do not connect the sensor, you can use 2 wires, one connected to +5V, the other side to the data input of TX**

Â

**final version:**

**TODO**

Â

**gallery:**

|  | ![](/assets/images/2004/09/TheBeginning.jpg) | ![](/assets/images/2004/08/cyclecomputer.jpg) |
|---|---|---|