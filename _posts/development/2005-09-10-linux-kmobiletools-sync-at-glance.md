---
id: 2029
title: 'linux kmobiletools sync at glance'
date: '2005-09-10T23:42:28+02:00'
author: 'Cédric Walter'



header:
  teaser: /assets/images/2005/09/kmobiletoolSonyK750-settings1.png
---

 Make your sony ericsson k750 mobile phone communicate with your PC under linux…

The difficulty is to find the right device the sony ericsson k750 has received from linux

1\. Open a terminal console, ans as root (type # su then root password)  
2\. verify that udev (the automounting system) has recognized your phone. type  
\# lsusb  
Bus 003 Device 006: ID 0d49:7100 Maxtor  
Bus 003 Device 001: ID 0000:0000  
Bus 002 Device 050: ID 045e:0025 Microsoft Corp. IntelliEye Mouse  
Bus 002 Device 001: ID 0000:0000  
Bus 001 Device 006: ID 0fce:d016 Sony Ericsson Mobile Communications AB  
Bus 001 Device 001: ID 0000:0000

For me the telephone has been recognized…

3\. Lets find the device now, type  
\# dmesg  
and search for the ericsson, If You find the device name, You are lucky. I must admit that I did not find it like this,   
I brute force all possibilities 🙂 since I find on the official homepage of kmobiletools that it must be /ttyACM\*

4\. check permissions  
most of the time only the root has access to ttyACM (must be the modem port), check  
\# ls -la /dev/ttyACM\*  
crw——- 1 root uucp 166, 0 2005-03-19 20:36 /dev/ttyACM0  
crw——- 1 root uucp 166, 1 2005-09-10 23:19 /dev/ttyACM1  
crw——- 1 root uucp 166, 2 2005-03-19 20:36 /dev/ttyACM2  
crw——- 1 root uucp 166, 3 2005-03-19 20:36 /dev/ttyACM3

5\. change permissions temporarly (will be overwritten at reboot by udev and that’s better because i am gonna give full access to all)  
\# chmod a+rw /dev/ttyACM

6\. verification  
\# ls -la /dev/ttyACM\*  
crw-rw-rw- 1 root uucp 166, 0 2005-03-19 20:36 /dev/ttyACM0  
crw-rw-rw- 1 root uucp 166, 1 2005-09-10 23:22 /dev/ttyACM1  
crw-rw-rw- 1 root uucp 166, 2 2005-03-19 20:36 /dev/ttyACM2  
crw-rw-rw- 1 root uucp 166, 3 2005-03-19 20:36 /dev/ttyACM3

7\. start kmobiletools and go to the menu Settings / main settings

as "mobile phone": choose Ericsson generic  
as "mobile phone device" enter one of these (brute force phase)  
/dev/ttyACM0 or  
/dev/ttyACM1 or  
/dev/ttyACM2 or  
/dev/ttyACM3  
click after each choice, apply, if You did not receive an error message, then You have found the right modem tty

and it work!!! see screenshots below (click read more)

in order to set access rights on ttyACM1 "correctly" and definitively, You must as root open the file  
/etc/udev/rules.d/50-udev.rules  
search for ttyACM, I found for my SuSE 9.3  
 <meta content="text/html; charset=UTF-8" http-equiv="Content-Type"></meta> <meta content="Kate, the KDE Advanced Text Editor" name="Generator"></meta>KERNEL="ttyACM\*", NAME="%k", GROUP="uucp", MODE="660"  
change to   
 <meta content="text/html; charset=UTF-8" http-equiv="Content-Type"></meta> <meta content="Kate, the KDE Advanced Text Editor" name="Generator"></meta>KERNEL="ttyACM\*", NAME="%k", GROUP="uucp", MODE="666"

note 666 is unsecure, better would be to add user to the group, but i don’t want to risk instabilities if I do not know how to do it:Any #Linux master reading this text?

    
Settings: ![](/assets/images/2005/09/kmobiletoolSonyK750-settings1.png)  
 ![](/assets/images/2005/09/kmobiletoolSonyK750-settings2.png)  
 And Result  
 ![](/assets/images/2005/09/kmobiletoolSonyK750.png)