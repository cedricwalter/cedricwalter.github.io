---
id: 1590
title: 'Slowing down spamming! Hashcash challenge in com_akocomment'
date: '2005-02-24T23:01:21+01:00'
author: 'Cédric Walter'



tags:
    - development
    - integration
    - joomla
---

So I have just finished and test the integration of a hashcash challenge (MD5) into the com\_akocomment component…using the code of this page <http://dev.wp-plugins.org/browser/wp-hashcash/trunk/> only an extract but all credit to original authors:

- C.S. – www.cimmanon.org
- Gene Shepherd – www.imporium.org
- John F -www.stonegauge.com
- Magenson – http://blog.magenson.de/
- Matt Mullenweg – photomatt.net
- Matt Warden – www.mattwarden.com
- Paul Andrew Johnston – pajhome.org.uk  
    and to Arthur Konze, the author of com\_akocomment : webmaster@mamboportal.com

I must also pack everything into a new version of the component or better say refactored the code a little bit, because it is still full of debug statements…

Principle:  
robot wo want to submit spam comments must pay the prize (using cpu time, approx. 100 hashcash max. each minute on a high end computer) and compute manually (can not be automated by submitting directly to the form) a Hashcash ([www.Hashcash.org](http://www.Hashcash.org))

Extract form the document of wp-hashcash:  
"Wordpress Hashcash  
Introduction:  
Taking Mattâ&#128;&#153;s stopgap spam solution, which sends precomputed hashes to be echoed back by the user-agentâ&#128;&#153;s form, Iâ&#128;&#153;ve added dynamic generation of the md5 hash. Rather than write it to a hidden field, we wait until the form is submitted to compute the hash. This prevents spammers from automatically scraping the form, because anyone wanting to submit a comment \*must\* execute the javascript md5.  
This plugin used to be called â&#128;&#156;Spam Stopgap Extreme.â&#128;? Now itâ&#128;&#153;s been moved to the WP plugins repository under the new name â&#128;&#156;Wordpress Hashcash.â&#128;? All future development will take place through the plugins repository.  
New Features:  


- Log and emailing of spam, for your records
- Client-side hash required.
- The â&#128;&#156;Keyâ&#128;? is hashed once before output to the html formâ&#128;&#147;so spammers canâ&#128;&#153;t make sense of it, and then hashed on the client side, again.
- The â&#128;&#156;Keyâ&#128;? is now a time-dependent, visitor dependent hash, for more variability. You canâ&#128;&#153;t just compute the right md5 once, because itâ&#128;&#153;s always changing.
- Failure to compute the md5 hash results in a 1 minute timeout penalty. "

Expect a release before week end…But I must also informArthur Konze first for a feedback  
Then I will add the same code in login page (because generizing the code),in order to avoidbrute forcingpassword in admin login page….and in guestbook (because I was spammed many times last week)