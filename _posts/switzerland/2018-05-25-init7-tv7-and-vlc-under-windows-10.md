---

title: 'Init7 TV7 and VLC under windows 10'
date: '2018-05-25T20:17:37+02:00'
author: 'Cédric Walter'



tags:
- box
- computer
- custom
- device
- directly
- Download
- editor
- fix
- HowTo
- individual
- internet
- link
- Links
- list
- long
- may
- switzerland
---

You can watch channels using any software or device as long as it supports multicast. Such as VLC on a computer. A VLC
playlist with all TV7 channels and the multicast addresses is provided for this under the following link:

- [VLC Playlist (XSPF)](https://api.init7.net/tvchannels.xspf)
- [M3U Playlist ](https://api.init7.net/tvchannels.m3u)

# You have the following options:**

1. You open the URL directly from within VLC (Open -> Network and then paste the URL from the above link), so you always
   have the latest updated channel list.
2. Download the file to your computer and open it in VLC.
3. Download the file to your computer and open it in a text editor to search for the respective multicast addresses of
   channels to use with another box or program that does not support XSPF playlists.

Note that the multicast addresses of individual channels and the channel line-up may change. so it is recommend to use
option 1.

Unfortunately this was not working for me at all, I use VMWare and Virtual Box, and both software define custom network
adapter…

somehow vm network adapter do not set properly the automatic metric. The fix is to change the IPv4 metric to 1 on the
physical ethernet (or wireless if needed) and leave the other to automatic.

Useful links

- <https://www.init7.net/en/support/faq/TV-andere-Geraete/>
- <https://www.init7.net/en/support/faq/>