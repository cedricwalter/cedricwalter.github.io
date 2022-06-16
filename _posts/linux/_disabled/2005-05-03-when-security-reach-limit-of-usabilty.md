---

title: 'When Security reach limit of usabilty'
date: '2005-05-03T19:30:23+02:00'
author: 'Cédric Walter'



tags:
- distribution
- encrypted
- generated
---

Found on slashdot.org a poster has state:

"*I once built a very secure linux version. Here is the sorts of things it I did.  
1\) It had no shells of any sort, nor any user interface of any sort.  
2\) It would not mount any filesystem whose CDs meet a certain checksum (this avoided mounting random data). CDs that
had the right checksum it would automatically run a program with a particular name. This was the sole way to introduce
new software/issue commands to the system.  
3\) It only about 4 open ports, and 2 for getting data and 2 it used to sending the data out.  
4\) It was stripped having almost no software except the bare mimimum needed to run 2 apps. It used a minimal set of
libraries missing any links that weren’t needed for the included software. All the apps and all the libraries had their
names scrambled (using a hash generator) so apache might be something like /vksjl39/skl9394/i8843nvnnf. This made the
box harder to get around. The result most pieces of gcc software wouldn’t have run at all with a great deal of knowledge
about the box.  
5\) It checksummed the bios to verify the bios wasn’t corrupted (i.e. boot password was intact).  
6\) Data on the drives were encrypted.  
Sound like a fun distribution to work on? On the other hand under computer generated network attacks (like say 10000
attacks per second) they system was able function fine indefinitely. Even somebody with physical access would have had
to take a long time to hack the system. That is sort of the ultimate in #Linux security. The goal of hardening a system
it to reduce points of entry for people to issue privledged commands, and this is done by reducing features. And that
means a decrease in usability."*

# it is extreme 🙂