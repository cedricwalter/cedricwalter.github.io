---
id: 4166
title: 'Skype me button for Joomla!'
date: '2009-02-15T20:21:37+01:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=4166'

---

[![joomla_cms](/assets/images/2006/01/joomla_cms_thumb.png "joomla_cms")](/assets/images/2009/02/joomla_cms.png)

Thanks to Skype web integration, making a button to show your online status has never been so easier.

Attention, you will also

- Somehow loose some privacy as anybody will be able to call you/chat with you
- Need to change your Skype privacy settings to show your status online [learn more](http://www.skype.com/intl/en/share/buttons/status.html)

Create your html code Snippet by going to

<div class="wlWriterSmartContent" id="scid:32a77b7a-5ea4-47be-84fc-ff7471384e10:36ebfc84-beff-4c62-80a1-16d061a8b5a2" style="display: inline; margin: 0px; padding: 0px;">[![](/assets/images/2009/02/810cf211e5264d39946e08b6088f18af.jpg)](http://www.skype.com/intl/en/share/buttons/)Note: the online generator always create call URL, if you want to allow only chat, just alter slightly   
the URL, exchange **call** with **chat**

```
<span class="kwrd"><<span class="html">script <span class="attr">type<span class="kwrd">="text/javascript" 

<span class="attr">src<span class="kwrd">="http://download.skype.com/share/skypebuttons/js/skypeCheck.js"<span class="kwrd">>

</<span class="html">script<span class="kwrd">> <span class="kwrd"><<span class="html">a <span class="attr">href<span class="kwrd">="skype:cedric.walter?<strong>call</strong>"<span class="kwrd">>

<<span class="html">img <span class="attr">src<span class="kwrd">="<a href="http://mystatus.skype.com/bigclassic/cedric%2Ewalter">http://mystatus.skype.com/bigclassic/cedric%2Ewalter</a>"

<span class="attr">style<span class="kwrd">="border: none;" <span class="attr">width<span class="kwrd">="182" <span class="attr">height<span class="kwrd">="44" <span class="attr">alt<span class="kwrd">="My status" <span class="kwrd">/>

</<span class="html">a<span class="kwrd">>
```

1. Copy the code Snippet in an empty file in your #Joomla! root. For the example, lets call it   
    skypeme.html
2. In the module manager, create a copy the module ‘wrapper’, rename the copy to ‘skypeme’   
     (or whatever make sense for you)
3. Edit the ‘skypeme’ module settings,
4. Under “Module Parameters”, set the URL to http://yourjoomlasite/skypeme.html
5. Publish the module

If you need to support multiple Skype account, I recommend you to use one of the extensions at   
[Joomla extension in online status category](http://extensions.joomla.org/extensions/clients/online-status).

You can see the result live at the bottom of my page.