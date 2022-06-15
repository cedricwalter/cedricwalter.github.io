---

title: 'USB3 external enclosure falsely recognized as DTMB BDA TV USB in windows 10'
date: '2016-07-29T19:21:56+02:00'
author: 'Cédric Walter'

header:
teaser: /assets/images/2016/07/ib-234-u31_3.jpg
---

![IB-234-U31](/assets/images/2016/07/ib-234-u31_3.jpg "IB-234-U31")

This 2 disks are known to be wrongly recognized by Windows 10

- Raid sonic ICY BOX IB-234-U31 external enclosure for 2,5 SSD/HDD (USB 3.1 up to 10 Gbit/s – Backwards compatible to
  USB 3.0/2.0/1.1)
- Raid sonic Icy Box IB-234U3 SATA HDD/SSD external Enclosure for 2.5 inch Laptops (USB 3.0 interface 5 Gbit/s)

The disk has been misidentified and you need to force it to be recognized as a storage device. (In OSX El Capitan/Ubuntu
16.04 it work without any issues)

Attention: this how-to only apply if you do not have any “Digital Multimedia Broadcasting (DTMB)” device connect to the
computer.

Go to the device manager (Windows + X – Select Device Manager)

Search for “Sound, video and game controllers” (this is where you USB3 disk is hidden)

Right Click on “DTMB BDA TV USB”

select Update Driver software…

select Browse my computer

![image](/assets/images/2016/07/image_11.png "image")

Select now Let me pick form a list of device drivers on my computer

![image](/assets/images/2016/07/image_12.png "image")

Select Have Disk… a pop up appear

![image](/assets/images/2016/07/image_13.png "image")

Click browse and select on disk c:\\Windows\\inf\\usbstor.inf

![image](/assets/images/2016/07/image_14.png "image")

Click OK, Select **the** **second choice** in list: “USB Attached SCSI (UAS) Mass Storage Device” then button Next

[![image](/assets/images/2016/07/image_thumb_5.png "image")](/assets/images/2016/07/image_16.png)

You’re done!