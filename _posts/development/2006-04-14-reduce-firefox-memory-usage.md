---
id: 2452
title: 'Reduce Firefox memory usage'
date: '2006-04-14T20:56:22+02:00'
author: 'Cédric Walter'



tags:
- opensource
- software
---

![](/assets/images/2006/04/firefox-logo.jpg)

it is not inusual for my firefox to eat more than 400Mb of RAM and this because I rarely closed it down and/or work with
many windows at the same time. Memory leaks is a known problem and some action are currently taken by the developers…

The Hack below will improve (but not fix the problem) by unloading Firefox as much as possible from memory and saving it
to disk when you minimize its windows.

1. Open Firefox and go to the Address Bar. And Type in the URL bar ***about:config*** and then press Enter.
2. Right Click in the page and select *New -> Boolean*.
   ![](/assets/images/2006/04/firefox-logo.jpg)

it is not inusual for my firefox to eat more than 400Mb of RAM and this because I rarely closed it down and/or work with
many windows at the same time. Memory leaks is a known problem and some action are currently taken by the developers…

The Hack below will improve (but not fix the problem) by unloading Firefox as much as possible from memory and saving it
to disk when you minimize its windows.

1. Open Firefox and go to the Address Bar. And Type in the URL bar ***about:config*** and then press Enter.
2. Right Click in the page and select *New -> Boolean*.
3. In the box that pops up enter ***config.trim\_on\_minimize***. Press Enter.
4. Now select ***True*** and then press Enter.
5. Restart Firefox.

This trick is also reversible and is not affecting speed or stability of mozilla Firefox.

You can also reduce the number of pages saved for the BACK button (who need it today? with 8Mb bandwidth…) by affecting
the key *browser.sessionhistory.max\_total\_viewers*

In Between I must also admit, that I now only use Firefox for development (thanks to the great list of plugins
available: webtools, measureit, css editor, javascript debugger ….). My choice is Opera 8.5 and this because I have
always 50 windows open! 🙂