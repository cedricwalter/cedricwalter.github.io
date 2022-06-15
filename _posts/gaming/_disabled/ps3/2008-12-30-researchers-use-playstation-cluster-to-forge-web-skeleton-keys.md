---
id: 4001
title: 'Researchers Use PlayStation Cluster to Forge Web Skeleton Keys'
date: '2008-12-30T23:11:28+01:00'
author: 'Cédric Walter'



header:
  teaser: /assets/images/2008/12/ps3cluster_thumb.png
---

How to create a rogue CA certificate…

*We* (note Alexander Sotirov, Marc Stevens, Jacob Appelbaum, Arjen Lenstra, David Molnar, Dag Arne Osvik, Benne de Weger) *have identified a vulnerability in the Internet Public Key Infrastructure (PKI) used to issue digital certificates for secure websites. As a proof of concept we executed a practical attack scenario and successfully created a rogue Certification Authority (CA) certificate trusted by all common web browsers. This certificate allows us to impersonate any website on the Internet, including banking and e-commerce sites secured using the HTTPS protocol.*

| [![ps3cluster](/assets/images/2008/12/ps3cluster_thumb.png)](/assets/images/2008/12/ps3cluster.png) | *\[..\]*  *"A single attempt for constructing a chosen-prefix collision costs about a little more than a day. The first stage consisting of the birthday search is computationally the most expensive. Luckily it is also **very suited for the special SPU cores of the Cell Processor that the Sony PlayStation 3 uses. We had about 200 PS3s** at our disposal, located at the* [*"PlayStation Lab"*](http://www.win.tue.nl/%7Ebdeweger/PS3Lab/) *of Arjen Lenstra at EPFL, Lausanne, Switzerland (see the picture). The birthdaying takes about 18 hours on the 200 PS3s using 30GB of memory that was equally divided over the PS3s. The second stage computes the 3 collision blocks that eliminate the `IHV` differences left after the first stage and costs in total about 3 to 10 hours on a high-end quadcore pc."*  *from <http://www.win.tue.nl/hashclash/rogue-ca/>* |
|---|---|

Note: only certificate signed with MD5 are forgeable, and it required a lot of knowledge and money at the moment… unfortunately these are things that spammer, thief and zombies network have at disposal. By luck as soon as Verisign switch to a more secure hashing function, the problem will be solved (Verisign will phase MD5 by January out)

Note2: even a geek need 1 week to understand the explanations 😉

*Read more at <http://www.win.tue.nl/hashclash/rogue-ca/>*