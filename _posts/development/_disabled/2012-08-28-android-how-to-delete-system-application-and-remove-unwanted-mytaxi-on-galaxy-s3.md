---

title: 'Android how to delete system application and remove unwanted MyTaxi on Galaxy S3'
date: '2012-08-28T20:32:56+02:00'
author: 'Cédric Walter'



header:
  teaser: /assets/images/2012/08/android2.png
tags:
    - android
    - google
    - opensource
---

![](/assets/images/2012/08/android2.png)

I use the hard way, free but a bit more difficult as it require a rooted device, I personally use “[Android Terminal Emulator](https://play.google.com/store/apps/details?id=jackpal.androidterm&feature=search_result#?t=W251bGwsMSwxLDEsImphY2twYWwuYW5kcm9pZHRlcm0iXQ..)” with granted root permissions (after typing su a prompt will appear)

# Android how to delete system application

```
su (enter) mount -o rw,remount /system (enter) rm -r /system/app/FILE-NAME-HERE.apk (enter)
```

# How to remove this SHIT of [myTaxi – Passenger Taxi App](https://play.google.com/store/apps/details?id=taxi.android.client&feature=search_result#?t=W251bGwsMSwxLDEsInRheGkuYW5kcm9pZC5jbGllbnQiXQ..) on Samsung Galaxy S3 

This application got installed without my knowledge by a Samsung update as a System App that CANNOT BE UN INSTALLED!

First before I forgot: Go to hell Samsung and [Intelligent Apps GmbH](http://www.mytaxi.net/) 

 If either of you continue in that direction, installing software without my prior permission, the next update to my Samsung Galaxy S3 will be [CyanogenMod](http://www.cyanogenmod.com/) 10

Back to the removal of MyTaxi, Samsung did hide taxi.android.client\_v2.5.1.apk under the name /system/app/samsung\_ch.apk

To remove it

```
su (enter) mount -o rw,remount /system (enter) rm -r /system/app/samsung_ch.apk (enter)
```