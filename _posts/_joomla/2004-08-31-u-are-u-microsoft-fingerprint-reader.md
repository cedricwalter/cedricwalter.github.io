---

title: 'U.are.U/Microsoft fingerprint reader'
date: '2004-08-31T23:39:03+02:00'
author: 'Cédric Walter'



header:
  teaser: /assets/images/2004/08/sensoroverall.jpg
tags:
    - capabilities
    - conclusions
---

| ![](/assets/images/2004/08/sensoroverall.jpg) | [Microsoft ](http://www.microsoft.com/)has aquired Digital Persona technology for their fingerprint sensor ([keyboard &amp; mouse](http://www.microsoft.com/hardware/mouseandkeyboard/productdetails.aspx?pid=036)), so It may be time to read this "old" review (posted before M$ even announce avaibility of it security device line) because it contains some comments you won’t find elsewhere:   product name U are U, U.are.U   By [Digitalpersona](http://www.digitalpersona.com/), [Microsoft](http://www.microsoft.com/) |
|---|---|

 

# Usage:

 You can create as many profile as needed, open a browser and go to the login page (Here I choose [www.runryder.com](http://www.runryder.com/) as an example)

| ![](/assets/images/2004/08/u.are_.u.step1_.jpg)   Put your finger on the sensor, the page do not exist in the keystore, so a page will popup. The title of internet page is use as key. |
|---|
| ![](/assets/images/2004/08/u.are_.u.step2_.jpg)   Enter the first credential, here the login and drag it to the right place in logon page. Repeat for all fields in page. |
| ![](/assets/images/2004/08/u.are_.u.step3_.jpg) |
| ![](/assets/images/2004/08/u.are_.u.step4_.jpg) |
| next time You go to that page, put your finger on the sensor and You’re in! |

 

# Bad:

- Only working in Internet explorer, not working in any other browser: [Opera](http://www.opera.com/) or [Mozilla](http://www.mozilla.org/)   
    NEW: U.are.U is working in Firefox 1.0 but Microsoft fingerprint NOT
- Security by obscurity (which has be proven to be the worst strategy in history of cryptography): no mention to algorithm used, cipher strengths, no possible review of code. Would’nt it be good for customers, or sales to use clearly communicate on algorithm used?
- Impossibility to do a backup of the keystore, web profiles… where is the repository of credentials? in windows SAM registry? If you lost your windows account (due to a crash or whatever), your only option is to use the small recovery utility provided, but you will have to remember your passphrase, and you have lost your web account profile.
- Only working with Windows! Linux is gaining market share at the rate not seen before, why not opening some part to the community or developing a drivers?
- In a browser, profile are depending on windows title -> clearly not enough if you have many credential on different pages which the same title. Maybe the software should use a variable html part of the content, url…
- Dll mess, a lot of library are copied to windows/system32 but this is common under Windows…
- Software version is 2.1, no update since 2002. I would like to see more options!
- The manual do not give enough advices on how to increase security, which habits are bad, and basics security concepts.
- Encrypting disk or directory is not possible: only files. You can right click on any file, choose encrypt  
    ![](/assets/images/2004/08/u.are_.u.encryptfiles.jpg)  
    and start encryption by putting one finger on the sensor:  
    [![](/assets/images/2004/08/u.are_.u.readyforencrypting.jpg)](http://www.microsoft.com/)Decrypting is done by double clicking on a encrypted resource, and putting one finger on the sensor: EASY  
    ![](/assets/images/2004/08/u.are_.u.encrypted.resource.jpg)



![](/assets/images/2004/08/sensorfront.jpg)

# Good:

- Work perfectly with Windows, no problems with: lotus notes login, windows logon, web browsing…   
    | ![](/assets/images/2004/08/idok.jpg) | ![](/assets/images/2004/08/idnotok.jpg) |
    |---|---|
    | You are identified | Unknow user |
- GUI for the average Joe user, nice and simple, very easy to use. Here the contextual menu:  
    ![](/assets/images/2004/08/u.are_.u.panel_.jpg)
- Very fast regognition,
- Fast Learning phase, in 5 minutes the device is working.
- Nice design, the red color is a nice touch on your desk.
- Price tags under 69$ in USA (but be careful it will cost You 270â&#130;¬ in Europe…)
- Good integration in windows (here in system tray)  
    ![](/assets/images/2004/08/u.are_.u.systemtray.jpg)

![](/assets/images/2004/08/sensorrear.jpg)

# 

# Conclusions/What I would like to see

- Open source the code!!!!
- Working with other browser, Mozilla has 18% of market now, all together alternate browser have less than 30% (see [google geist here](http://www.google.com/press/zeitgeist.html))
- Use a know standard: PGP? for example (PGP disk for encrypting folder and partitions)
- Name of algorithm used: Blowfish?, AES? and options to change cipher strength.
- A file based keystore, a lot more easier for backup.
- A linux version or plugin for [Kwallet](http://www.kde.org/).

  
New What are the differences with the Microsoft version?

I’ve had the chance to see a Microsoft keyboard with the fingerprint reader in action, what a shame!!

- Only basic functionnality are still in the driver.
- No possibility to encrypt file with the device,
- It is working ONLY in Internet explorer, not in Mozilla (Is it a surprise for You???).
- Only "normal" windows are recognized by the system: no way to use it under a terminal (rxvt – cygwin) where the digital persona just work.

I would stay away from the Microsoft version as long as they do not integrate new intersting capabilities. No need to mention that drivers are not compatible each other….



# Overall

A product for geek, but due to lack of peer reviews on algorithms, it is certainly not a corporate device in any means. For example: why attacking the keystore if you can hook a backdoor to the activeX component in use? (should be easy to do with all Internet explorer issues…)

# Links

purpletiger22000@yahoo.com sell them in usa at a good prices, also on ebay.com as well

```
	EHAG 

	Industriestrasse 8 

	Oetwil am See, ZH 8618 

	Switzerland 

	+41 43 844 94 00 

	<a href="/Mambo/mambots/editors/htmlarea2/popups/www.ehag.ch" rel="noopener noreferrer" target="_self">www.ehag.ch</a> 



	COMEDIA 

	4 BIS ALLEE CHARLES V 

	VINCENNES, - 94300 

	France 

	33 1 43 28 48 48 

	<a href="/Mambo/mambots/editors/htmlarea2/popups/www.comediatech.com" rel="noopener noreferrer" target="_self">www.comediatech.com</a> 
```

# Others reviews:

- <http://www.dansdata.com/uareu.htm> A very good review with some tips how to fake the sensor
- Microsoft Device
- [Michael Swanson’s Blog](http://weblogs.asp.net/mswanson/archive/2004/12/03/274170.aspx?Pending=true)
- [RedNova](http://www.rednova.com/news/display/?id=84955)
- [Security Pipeline](http://nwc.securitypipeline.com/howto/47102003)
- Microsoft Optical Desktop with Fingerprint Reader [PCMAG](http://www.pcmag.com/article2/0,1759,1731352,00.asp)


