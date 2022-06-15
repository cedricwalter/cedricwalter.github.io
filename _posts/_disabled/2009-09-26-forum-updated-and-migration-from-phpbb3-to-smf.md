---
id: 4698
title: 'Forum updated and migration from phpBB3 to SMF'
date: '2009-09-26T14:16:34+02:00'
author: 'Cédric Walter'



header:
  teaser: /assets/images/2009/09/Phpbb3_logo_thumb.png
---

[![Phpbb3_logo](/assets/images/2009/09/Phpbb3_logo_thumb.png "Phpbb3_logo")](/assets/images/2009/09/Phpbb3_logo.png) [![smf-logo](/assets/images/2009/09/smflogo_thumb.png "smf-logo")](/assets/images/2009/09/smflogo.png)

I’ve decide to go away from phpBB3 as applying mod is a joke, it require you to patch/edit php file manually while in SMF, it is a plugin.

### Migrate your forums from phpBB3 to SMF 

Download the converter convert.php at <http://www.simplemachines.org/community/index.php?topic=218449.0> and save it in the root folder of a new SMF installation.

Backup your SMF/phpBB3 databases and files just in case something bad happen.

The conversion tools is really powerful and support luckily a huge list of forums:

- AEF 1.0.x
- Burning Board 2.3.x, 3.0.x
- Burning Board Lite 2.0.x
- Dragonfly CMS 9.2.x
- Drupal 5.7, 6.2
- e107 0.7.7
- Fireboard 1.0.x
- IPB 1.3.x, 2.0.x, 2.1.x, 2.2.x, 2.3.x
- LDU 802
- MyBB 1.2.x , 1.4.x
- PHP-Fusion 6.x, 7.x
- PHPKit 1.6.x
- PHP-Nuke
- phpBB 2.0.19+, phpBB3+
- punBB 1.3
- Seditio 1.2.x
- SimpleBoard 1.0 &amp; 1.0
- Snitz Forums 3.4
- THWBoard 3.0
- Vanilla 1.1.x
- vBulletin 3.5 3.6 3.7
- wowBB 1.7
- XMB 1.9.8
- XOOPS &amp; newBB 2 2.0
- XOOPS &amp; CBB 3 3.0
- YaBB SE 1.5.4

Download the right convert SQL file from

<http://www.simplemachines.org/community/index.php?topic=140741.0>

# Software:** phpBB   
# Version:** [phpBB3+](http://www.simplemachines.org/community/index.php?topic=218449.0)

then run

php convert.php –path\_to=/srv/www/vhosts/forums/httpdocs/smf –path\_from=/srv/www/vhosts/forums/httpdocs/phpbb3 –convert\_script=phpbb3\_to\_smf.sql –db\_pass=xxxxxxxxxxxxx –debug