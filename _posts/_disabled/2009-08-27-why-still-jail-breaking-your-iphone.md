---
id: 4585
title: 'Why still Jail breaking your iPhone?'
date: '2009-08-27T18:27:38+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=4585'

header:
  teaser: /assets/images/2009/08/iphone3gs.jpg
---

![iphone3gs](/assets/images/2009/08/iphone3gs.jpg "iphone3gs") Just because of some software you will NEVER find anytime soon in the official iTunes store.

- AdBlock: block advertisements,
- **FREE**: PrivaCy for avoiding developer to track your usage habits (similar to analytics)
- **FREE**: How to remove all advertisement in free applications and Safari
- **FREE:** How to blacklist Malware server in Safari using Spybot immunize hosts entries

All these tips only work on Jail broken devices, the last 2 tips require a bit more knowledge than just installing an applications with [Cydia](http://cydia.saurik.com/), use at your own risk!

## AdBlock

- Block silently all ads
- speed up internet browsing and speed up Safari loading time
- Subscribe to public (and free) filter lists and stay up to date automatically.

![adblock.safari.iphone.01](/assets/images/2009/08/adblock.safari.iphone.01_thumb.png "adblock.safari.iphone.01") ![adblock.safari.iphone.02](/assets/images/2009/08/adblock.safari.iphone.02_thumb.png "adblock.safari.iphone.02")

But it cost 2.4euro after some time and will create annoying popup when it found an advertisement.

If you still want to remove all advertisements for FREE you can also follow a more radical path:

### Remove all advertisements in SAFARI and free iPhone applications

Download the replacement host file from [this link](http://jamesisbored.com/iphone/content/hosts.php) and replace your hosts file at the root of your iPhone using [iPhone Browser](http://code.google.com/p/iphonebrowser/) or any SCP client ([winscp](http://winscp.net/eng/index.php) for example)

# Attention**

- If you want to use the [Categories App](http://www.iphonehacks.com/2008/10/categories-app.html), then please remove the 127.0.0.1 mm.admob.com line from the downloaded replacement host file, otherwise it will not work. I
- if you don’t want to disable Apple’s kill-switch mechanism then remove this line as well 127.0.0.1 iphone-services.apple.com from the replacement host file.

### Avoid spyware/malware to install in you safari browser

Using the same idea as before, i simply add a list of hosts known for containing malware and spyware into the /etc/hosts file. You can get an an actual list for free by installing [spybot](http://www.safer-networking.org/en/index.html) (I cant provide a link to a ready to use hosts file as it seems to be copyrighted by Spybot)

*Spybot – Search &amp; Destroy detects and removes spyware, a relatively new kind of threat not yet covered by common anti-virus applications. Spyware silently tracks your surfing behaviour to create a marketing profile for you that is transmitted without your knowledge to the compilers and sold to advertising companies. If you see new toolbars in your Internet Explorer that you haven’t intentionally installed, if your browser crashes inexplicably, or if your home page has been "hijacked" (or changed without your knowledge), your computer is most probably infected with spyware. Even if you don’t see the symptoms, your computer may be infected, because more and more spyware is emerging. Spybot-S&amp;D is free, so there’s no harm giving it a try to see if something has invaded your computer.*

Install this software (by the was it is excellent), start it and Immunize your PC

Go to

C:\\WINDOWS\\system32\\drivers\\etc (Windows XP)

and open the hosts file from there, you now have a huge list of all malware known server (Spybot use a blacklisting technique to mitigate risks) you can also use for your iPhone. Contrary to Spybot, you’ll have to manually sync the host file.

## PrivaCy 

# ![privacy.cydia.analytics.blocking](/assets/images/2009/08/privacy.cydia_.analytics.blocking_thumb.jpg "privacy.cydia.analytics.blocking")**

It has recently come to the attention of angry Cydia users that they are being watched by many of the applications they have installed from the App Store.

Sites like [I-phone-home](http://i-phone-home.blogspot.com/) have been discussing this in detail, leading to a [post on the Dev-Team Blog](http://blog.iphone-dev.org/post/164789333/a-pinch-too-much) about one provider in particular: Pinch Media.

Pinch Media, however, is not the only tracking provider: on the iPhone alone there are three other companies:   
Flurry, Medialets, and [Mobclix](http://www.mobclix.com/).

Developers integrate these systems for much the same reason people use Google Analytics: to better understand how their customers use their products. Unfortunately, due to the restrictions Apple places on their App Store, these providers are unable to directly interface with the users they affect. Instead, they rely on developers of every single application to document what information is being logged, and allow users to "opt-out" if they desire. Thanks to applications like redsn0w and Cydia, however, these restrictions are no longer important: a system-wide global "opt-out" setting is now possible. Pinch Media realized this fact, and took the lead in contacting me regarding getting this feature out there to all the users of jail broken devices: they care. With BigBoss, we then contacted all of the other providers, getting not only their blessing, but also their technical expertise in disabling their systems.

The result is PrivaCy: a new Settings panel that allows you to selectively opt-out of sending anonymous usage statistics to each of these providers. This extension was a **team effort**, and was able to be executed as quickly as it was thanks to the help and interest of the companies involved.

From <http://cydia.saurik.com/package/com.saurik.privacy>