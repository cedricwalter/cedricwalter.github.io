---

title: ''
date: '2004-09-01T23:18:46+02:00'
author: 'Cédric Walter'

header:
teaser: /assets/images/2004/09/daemonui.jpg
tags:
- 'RC helicopter'
---

# Learn On simulator FIRST!!!!

<http://www.rc-sim.de/> Homepage about simulator
[http://reflex.cmedv.de](http://reflex.cmedv.de/)

## Flight simulators

- Reflex [http://www.reflex-sim.de](http://www.reflex-sim.de/)
- Ipacs Aerofly Pro [http://www.aerofly.de](http://www.aerofly.de/)
- Knife Edge Realflight G2 [http://www.realflight.com](http://www.realflight.com/)
- Tru-Flite 3D <http://www.tru-flite.co.uk/sitr.htm>
- Cockpit master [http://www.cockpitmaster.com](http://www.cockpitmaster.com/)
- CSM V10 <http://www.rcmodels.org/csm>
- PRE-Flight http://www.users.bigpond.net.au/atv/preflight001.htm

## Free simulators

- FMS [http://simulator.home.pages.de](http://simulator.home.pages.de/)
- RCSimSikorsky <http://home.zonnet.nl/blacksphere2/rcsim.html>

# Utility of a simulator

- Save your money : you can do virtual crash.But not too many, otherwise your learning curve will be flat.
- Fly when it is raining outside !
- Fly when it is snowing outside !
- Improve your manoeuvre, learn new tricks.
- Fly for free before you buy a helicopter, if you find it boring you sell the simulator and not your beautiful and
  expensive "as new heli" on ebay…after 3 hours….
- Avoid dangerous situation for you and your heli.

# Training

Practice the "Oh My God" recovery : Take the helicopter up, close your eyes, SCRAMBLE the sticks for several seconds,
open your eyes, then try to recover the bird.

For basic skills:  
a) tail in hover  
b) nose in hover  
c) inverted tail in hover  
d) inverted nose in hover  
e) slow transition between a-b &amp; c-d by piroetting.   
f) upright figure 8's fast and slow  
g) inverted figure 8's fast and slow.

Unfortunately, a lot of new manoeuvres are built upon being able to fly your heli backwards and sideways without getting
confused. So for new stuff, I've been trying my best to keep it to:

a) stationary piro-etting (all piroetting done nose right to keep it simple for now)  
b) inverted stationary piro-etting  
c) piro-etting T's  
d) inverted piro-etting T's  
e) backwards figure 8's  
f) inverted backwards figure 8's

## List of all available RC simulator

On this
page [http://hem.passagen.se/rasmus-modellflyg/Simulatorer\_eng\_index.html](http://hem.passagen.se/rasmus-modellflyg/Simulatorer_eng_index.html)



# How to make a backup of RealflightÂ©Â® G2

Since a lot of people are reading this page, I update it with my experience and the latest state of the art. Solutions
to get a Realflight G2working copy are:

- Go and search on eDonkey network, with eDonkey client or better with eMule (both are peer to peer client program). All
  you have to do is to download the image (500Mo in rar files) and wait the download completion…
- Make a backup copy of your original CD.

# Backup your original realflight G2

So first I let me say I made a backup copy of the CD which I bought and as in no way pirated since that is illegal.
Stealing overpriced programs by piracy is wrong. Okay well I used clonecd (it work for me with 4.0.19) and made an image
with one of my cd-reader. In fact you can try with all cd reade/burner till you get a correct dump! To know if the dump
is correct, I suggest you to mount the image with daemon tool, and see when you mount the image if the install setup is
starting and can be completed.

Realflight is protected with "Safedisk 2.0" (why the hell did they not use a dongle like CSM). It uses
complex patterns of bad sectors to overload the decoder in most CD writers. (note that some writer do not care, like
some Mitsumi or Philips burner, search on internet for a list, recent burner seems to burn nearly everything, even "copy
protect" audio cd can be read)

To know if you can successfully burn a working copy, look at you CD burner, it must handle the EFM technology, otherwise
you can simulate the EFM with clone CD built-in function AWS (Amplify Weak Sector). The key of success with "Safedisk
2.0" is to burn the image very slowly, max 4X

I used CloneCD to both read and write the software successfully. Of course this should only be done to make personal
backup copies, and for no illegal purposes. With clone Cd > 4.0.19, you must choose the profile: protected CD and use at
least a burner that support DAO RAW (Best) or RAW SAO + SUB  
Personaly, I do not recommend to do a backup in this way: I prefer to store the image on disk (a lot of us has more
than 100Go) and simulate the CD drive with daemon tool. Advantage, the program is starting in 5 seconds, vs 45 seconds
with the original CD. You can create a virtual drive, let say L: and modify the file fileread.ini in realflight/ to
point to L:

Try to upgrade your simulator to the version 533, because it will not ask you each 2 days to insert/swap all CD. Do not
upgrade to the latest version since they introduce a new protection scheme rfdcdverify.exe (someone report that alcohol
120% outpassed this new security, but I did not test it)

# Simulate a CD drive

# 1.0 Daemon tool 3.02 and daemon UI 1.52

Now what Daemon tools does is to allow you to mount CD images created by Clone CD 'AND' bypass the "Safedisk 2"
protection code when you access the mounted images. Think of it as an additional CD drive on your system that is smart
about protected CDs. Clone CD is used to copy your licensed original RF, RF Add-ons, and G2 CDs and save them as image
files on your hard drive. Daemon UI just provides a nice little Windows user interface to simplify mounting and
unmounting of the CD images. Also since Realflight only knows about one CD drive you MUST use the Daemon
Tools virtual drive for all of your RealFlight disks (cannot mix with real CDs for Add-ons CDs or such).
To change RealFlight to use your new (virtual) CD drive just edit fileread.ini in the RealFlight<sup>
Â©Â®</sup> program directory to point to the drive letter of the virtual drive (ie InstallDir=L:\\).  
Now this setup seems to work 100%. When Realflight askes you to insert one of the other disks just use
Daemon UI to eject/unmount the current CD image and Mount the requested one.  
In mount settings, do not forget to activate the following:

![](/assets/images/2004/09/daemonui.jpg)

Locate the image file (.ccd if create with clone cd) and mount it. Everything is done with mouse right click

# 2.0 Alcohol 120%

The name of this tool is very strange, but it support nearly all image format (.ccd .cue. .iso .mds …) and can burn,
read, create virtual drive. It has an assistant with built in profile to outpassed most protection scheme. It work with
Realflight and all addon, I test it with version 1.3.5. A trial version can be downloaded
at [www.alcohol-soft.com](http://www.alcohol-soft.com/)

# Support Realflight and please buy the software, otherwise we will have no next release of Realflight!

Ask Realflight company to release or open the physical engine, and provide a airplanes editor!  
You can find original CD on ebay for less money. Simulator are not toys, they are TOOLS

# Links

Clone CD [www.elby.de](http://www.elby.de/)   
Daemon Tools [www.daemon-tools.com](http://www.daemon-tools.com/)   
DaemonUI [www.daemon-tools.com](http://www.daemon-tools.com/)   
Alcohol 120% [www.alcohol-soft.com](http://www.alcohol-soft.com/)

# How to backup the latest G2 update

Here is my solution, often use:

- Install on a internet capable PC (we name it A) your copy of G2, and update to the latest release.
- Copy from (A) the directory realflight and the knifeedge directory located in 'program files/common files/knifeedge'
  to a blank CD.
- Go to the next PC (we name it B) with original installation disk and backup of A on CD.
- Install Realflight G2 on pc (B)
- You have now a working version of Realflight G2 but with an "old release"
- Overwrite the original directory you just install with the backup from pc A from the backup CD.
- Note: it work even with addons…

# Port of Realflight server

You can see the port number if you have a Firewall installed.

- www.hobbico.com \[206.221.233.121\], port 10160
- 64.66.167.148, port 21
- 64.66.167.148, port 17196