---

title: '404SEF without mod rewrite'
date: '2005-02-18T23:47:45+01:00'
author: 'Cédric Walter'



tags:
    - includes
    - kyosho
    - 'RC helicopter'
---

Use [404SEF](http://mamboforge.net/projects/sef404/) when you can not activate mod rewrite in apache because Your internet provider do not allow it….

1. Enable SEF in mambo configuration
2. do NOT rename the htaccess.txt
3. open /includes/sef.php and change this line: (~ line 217)  
    return $mosConfig\_live\_site."/".$string;  
    to  
    return $mosConfig\_live\_site."/index.php/".$string;