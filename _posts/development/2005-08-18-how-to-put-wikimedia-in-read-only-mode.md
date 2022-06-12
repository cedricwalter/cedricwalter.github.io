---
id: 2003
title: 'How to put wikimedia in read only mode'
date: '2005-08-18T20:58:56+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=2003'

tags:
    - homepage
---

I am encountering strong spammings tentatives in [my Wiki](/wiki/index.php?title=Main_Page) as well, that’s why I decide to lock write changes to my WIki. This is how You can also do it.

Open LocalSettings.php and set a new key `$wgReadOnlyFile like this 

``

$wgReadOnlyFile="./.lock.txt";`

The value must be the name of of a file, then put the reason for the lock inside the file using the wikipedia notation

”’I’ve block my Wiki because of spammers! It will reopen as soon as I find a solution, if It annoy You can still contact me at [http://www.waltercedric.com”’](http://www.waltercedric.com''')

The contents of the file will be displayed to anyone trying to edit the wiki.

Note that readonlyfile is not guaranteed to be absolutely safe; if you need to guarantee that MediaWiki will never write to the data, you need to do this on the database itself (e.g. revoke UPDATE,INSERT,DELETE from the wiki user, or put MySQL into read-only mode).