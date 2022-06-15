---

title: 'New version of related Articles 1.5.1'
date: '2008-12-15T20:23:06+01:00'
author: 'Cédric Walter'



header:
  teaser: /assets/images/2008/12/relatedarticlesforJoomla_thumb.png
---

[![relatedarticlesforJoomla](/assets/images/2008/12/relatedarticlesforJoomla_thumb.png)](/assets/images/2008/12/relatedarticlesforJoomla.png)

As requested

“I like your plugin so much and I have a request if it’s possible. I need the items to have the correct SEF links as it displayed in the site”

# BUG**: SEF URL’s were not properly translated, now corrected thanks to a bit bigger SQL

<font face="Courier" size="2">SELECT 

<font face="Courier" size="2">a.id, a.title, a.created, CASE WHEN CHAR\_LENGTH(a.alias) THEN CONCAT\_WS(“:”, a.id, a.alias) ELSE a.id END as slug, CASE WHEN CHAR\_LENGTH(b.alias)

<font face="Courier" size="2">THEN CONCAT\_WS(“:”, b.id, b.alias) ELSE b.id END as catslug, u.id AS sectionid

<font face="Courier" size="2">FROM jos\_content as a INNER JOIN jos\_categories AS b ON b.id=a.catid INNER JOIN jos\_sections AS u ON u.id = a.sectionid

<font face="Courier" size="2">WHERE ( state = ‘1’ AND a.checked\_out = 0 ) AND a.state = 1 AND u.published = 1 AND b.published = 1 AND ( publish\_up = ‘0000-00-00 00:00:00’ OR

<font face="Courier" size="2">publish\_up = ‘2008-12-15 19:38:19’ ) AND catid = 1 AND a.id < 6 ORDER BY id DESC LIMIT 10

😉

# NEW**: plugin renamed to Content – Related Articles for more clarity in backend panel

# NEW**: back link to my site for helping me keeping program GPL and covering cost of hosting (this help me keeping a high page rank). Can be switch off in plugin settings

This version is now running on my site….

[Download HERE](index.php?option=com_versions&tmpl=component&catid=13)