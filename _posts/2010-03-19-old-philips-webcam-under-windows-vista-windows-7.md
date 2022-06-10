---
id: 5077
title: 'Old Philips Webcam under Windows Vista/ Windows 7'
date: '2010-03-19T20:51:07+01:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=5077'
permalink: /hobbies/old-philips-webcam-under-windows-vista-windows-7/
header:
  teaser: /assets/images/2010/03/pcvc720k_40_tlf__thumb.jpg
tags:
    - old
    - windows
---

In this post, I will show you how to bring an old webcam of 2000 back to life for the latest iterations of Windows Vista/Seven by injecting the firmware of another webcam into it.

| [Philips Webcam ToUcam Pro – PCVC740K](http://www.p4c.philips.com/cgi-bin/dcbint/cpindex.pl?ctn=PCVC740K&scy=us&slg=en)Year 2000 |  | [Philips Webcam SPC900NC VGA CCD with Pixel Plus](http://www.p4c.philips.com/cgi-bin/dcbint/cpindex.pl?ctn=SPC900NC/27&scy=us&slg=en)Year 2008 |
|---|---|---|
| [![pcvc720k_40_tlf_](/assets/images/2010/03/pcvc720k_40_tlf__thumb.jpg "pcvc720k_40_tlf_")](/assets/images/2010/03/pcvc720k_40_tlf__2.jpg) |  | [![spc900nc_27_rtv_](/assets/images/2010/03/spc900nc_27_rtv__3.jpg "spc900nc_27_rtv_")](http://www.p4c.philips.com/cgi-bin/dcbint/cpindex.pl?ctn=SPC900NC/27&scy=us&slg=en) |

If you read the Philips Support FAQ

- [Where are the Vista drivers for this webcam?](http://www.p4c.philips.com/cgi-bin/dcbint/faqview.pl?ctn=PCVC740K&dct=QAC&new_tmpl=1&refdisplay=WEBCAM_QAC_66387&refnr=0066387&scy=US&slg=AEN)
- [Does this webcam support Vista 64-bit?](http://www.p4c.philips.com/cgi-bin/dcbint/faqview.pl?ctn=PCVC740K&dct=QAC&new_tmpl=1&refdisplay=WEBCAM_QAC_73637&refnr=0073637&scy=US&slg=AEN)

You will end up with this laconic text: “There are no Vista drivers available for this product due to the product’s age.”

Although [there is an alternate way](http://www.p4c.philips.com/cgi-bin/dcbint/faqview.pl?ctn=PCVC740K&dct=QAC&new_tmpl=1&refdisplay=WEBCAM_QAC_66387&refnr=0066387&scy=US&slg=AEN), that only work with Windows Vista, the solution I propose you is to just make the driver think that it has another webcam plugged in! This work since the reality is that most webcam out there have seen no big hardware changes since many many years. (except packaging/prize and blinking led)

# DISCLAIMER !!! I’m not responsible for damages you could cause to your webcam because of errors in realizing the described firmware upgrade…**

#  **

## Success story

The following webcam got converted successfully:

- 1 webcam PCVC840K converted into SPC900NC
- 2 webcam PCVC740K converted into SPC900NC

The following failed but I was able to recover from the saved firmware:

- Philips PCVC680 USB VGA Camera; Video 

[Contact me](-contact-me.html) if you successfully convert your webcam.

## How to

You need an Operating system that is still able to recognize your webcam. Most of Philips webcams which are discontinued, and refuse to work under Vista/Seven were working under windows XP. So try to get an access to and old PC running that OS. Lucky owner of Windows 7 professional/Ultimate are able to use “[Windows XP mode](http://www.microsoft.com/windows/virtual-pc/download.aspx)”.

Download the software WCRMAC here [http://www.burri-web.org/bm98/soft/wcrmac/wcrmac-2.0.85.zip](http://www.burri-web.org/bm98/soft/wcrmac/wcrmac-2.0.85.zip "http://www.burri-web.org/bm98/soft/wcrmac/wcrmac-2.0.85.zip") and install it.

> WcRmac allows some internal memory modifications of web cams based on the Philips SAA8115 / 8116 camera chips. That are usually cameras with a 640×480 CCD sensor (various brands).

Connect the webcam under windows XP, and install eventually the required drivers. At that point you must be to see the webcam and get an image in windows explorer. Leave the webcam running in the background.

Download the latest firmware of the latest Philips webcam flagship SPC900NC here [http://www.home.zonnet.nl/m.m.j.meijer/D\_I\_Y/spc900nc.bin](http://www.home.zonnet.nl/m.m.j.meijer/D_I_Y/spc900nc.bin "http://www.home.zonnet.nl/m.m.j.meijer/D_I_Y/spc900nc.bin") and copy this file under the directory

- C:\\Program Files\\TWIRG\\WcRmac\\binary\\8116

Start WCRMAC and connect the webcam by selecting it under the menu “webcam”

[![bin-tab](/assets/images/2010/03/bin-tab_thumb.png "bin-tab")](/assets/images/2010/03/bin-tab_2.png)

Now get to the tab “binaries” and click ”Get current and save as” to make a copy of the existing firmware to disk. Now select the latest firmware in the list spc900nc.bin and click on the button “load”

Now the webcam should be recognized under Windows vista/ seven (even 64 bits)! It will have all the software goodies of the latest of the latest webcam: faces detection, anti flickering, up to 90 frame per seconds!

## References

- [http://www.astrosurf.com/astrobond/ebrawe.htm](http://www.astrosurf.com/astrobond/ebrawe.htm "http://www.astrosurf.com/astrobond/ebrawe.htm")
- [http://www.burri-web.org/bm98/soft/wcrmac/](http://www.burri-web.org/bm98/soft/wcrmac/ "http://www.burri-web.org/bm98/soft/wcrmac/")