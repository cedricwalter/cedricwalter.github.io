---

title: 'Video Camera: using Aurel modules.'
date: '2004-09-05T17:01:31+02:00'
author: 'Cédric Walter'



header:
  teaser: /assets/images/2004/09/mav1.jpg
tags:
    - electronic
    - 'RC helicopter'
---

 Be careful ! in France you are not allowed to transmit in realtime video from an aircraft !

# You need:

- [Aurel](http://www.aurel.it/) H2-TV Channel Audio-Video Modulator  
     Mod. MAV-VHF224 225 Fr Description :  
     Low cost CATV circuit for high quality audio-video signals, operating in the VHF Band. Input signals can be fed from videocameras, tuners, video tape players, etc, directly using the lines of the standardized output connectors (i.e. SCART), while output R.F. can be received with any standard not modified TV receiver. The Modulator is very stable in frequency and features high harmonic rejection.

| \| Characteristics \| Min \| Typ \| Max \| Unit \| \|---\|---\|---\|---\|---\| \| VS \| Supply Voltage \| 4.75 \| 5 \| 5.25 \| Vdc \| \| IS \| Supply Current \|  \| 90 \|  \| mA \| \| PO \| RF Output power \|  \| 1 \|  \| mW \| \| IM \| 3rd Order Intermodulation \|  \|  \| 60 \| dBm \| \| FC \| Carrier Frequency \| 223.75 \| 224.5 \| 225.25 \| MHz \| \| IM \| Video Input Modulation \|  \| 1.2 \|  \| Vpp \| \| FSC \| Sub-Carrier Frequency \|  \| 5.5 \|  \| MHz \| \| MA \| Audio FM Modulation \|  \| 1 \|  \| Vpp \| \| II \| Input Impedance \|  \| 100 \|  \| KW \| \| TPE \| Pre-enphasis \|  \| 50 \|  \| S \| \| TOP \| Operating temperature range \| -20 \|  \| +80 \| Â°C \| | \| Pin-Out \| \|---\|---\| \| 1 \| Ground \| \| 2 \| Audio Input \| \| 3 \| Ground \| \| 4 \| Video Input \| \| 5 \| Ground \| \| 6 \| +5V \| \| 7 \| Ground \| \| 8 \| RF Output \| | ![](/assets/images/2004/09/mav1.jpg) |
|---|---|

- [Aurel](http://www.aurel.it/) H2 Channel CATV Amplifier  
     Mod. M.C.A. 224 130 Fr Description :  
     Linear CATV circuit for high quality audio-video signal amplification, operating on the VHF H2 Channel. RF input signal can be derived from a Audio Video Modulator (best operation is with our mod. MAV-VHF 224). Output can be received with any standard not modified TV receiver.

| \| \\| Characteristics \\| Min \\| Typ \\| Max \\| Unit \\| \\|---\\|---\\|---\\|---\\|---\\| \\| VS \\| Supply Voltage \\| 11.4 \\| 12 \\| 12.6 \\| Vdc \\| \\| IS \\| Supply Current \\|  \\| 100 \\|  \\| mA \\| \\| FW \\| Working Frequency \\|  \\| 224 \\|  \\| MHz \\| \\| PO \\| RF Output power (2 mW IN) \\|  \\| +19 \\|  \\| dBm \\| \\| DI \\| Intermodulation distorsion \\|  \\| 50 \\| 60 \\| dB \\| \\| TOP \\| Operating temperature range \\| -20 \\|  \\| +80 \\| Â°C \\| \| \|---\| | \| \\| Pin-Out \\| \\|---\\|---\\| \\| 1 \\| +12v \\| \\| 2 \\| Enable \\| \\| 3 \\| Ground \\| \\| 6 \\| RF Input \\| \\| 7 \\| Ground \\| \\| 10 \\| Ground \\| \\| 13 \\| Ground \\| \\| 15 \\| RF Output \\| \| \|---\| | ![](/assets/images/2004/09/mca1.jpg) |
|---|---|

- Mini color video cam 890 Fr

| \| \\| \\\| Characteristics \\\| \\\|---\\\| \\\| Video system \\\| PAL \\\| \\\| Effective pixel \\\| 628\*582 \\\| \\\| Synchro \\\| internal \\\| \\\| Resolution (TV lines) \\\| 380 \\\| \\\| S/N Ration \\\| > 42 dB \\\| \\\| Mill Illumination \\\| 3 lux at F1.2 \\\| \\\| Electronic shutter \\\| 1/50 – 1/150 000 \\\| \\\| Video output \\\| 1V , 75 Ohms \\\| \\\| Lens \\\| 3.6 mm – 5 mm (F 2 -> 4.5) \\\| \\\| Lens Angle \\\| 92Â° -> 65Â° \\\| \\\| Power current \\\| 50 mA \\\| \\\| Power Source \\\| DC12V \\\| \\| \\|---\\| \| \|---\| | \| \\| \\\| Pin-Out \\\| \\\|---\\\|---\\\| \\\| Red \\\| +12v \\\| \\\| Yellow \\\| signal \\\| \\\| Black \\\| Ground \\\| \\| \\|---\\| \| \|---\| | ![](/assets/images/2004/09/camera.jpg) |
|---|---|

- a good and safety box (in case of crash) 18 Fr
- Accus (2 \* 9V), a free rx channel. 296 Fr
- 2 voltage regulator : 7812 (12V) and 7805 (5V) + 2 \* 100 nF 27 Fr
- A small TV (LCD) ex 11cm TFT 1000 Fr

![](images/Helico/elec/lcdtft.jpg)

Conclusions :

The result is very bad with no specific antenna, maybe I should replace my 32 cm wire with something better. Distance are bad too and some polarized effect appear when you turned the device : Really BAD !

Â