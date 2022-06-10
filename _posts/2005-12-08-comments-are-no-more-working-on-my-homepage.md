---
id: 2197
title: 'Comments are no more working on my homepage'
date: '2005-12-08T22:37:20+01:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=2197'
permalink: /internet/comments-are-no-more-working-on-my-homepage/
tags:
    - deactivating
    - directories
    - extensions
    - homepage
---

**Comments <strike>are no more</strike> working on my homepage**

This is not due to my plugin security images but more to [openSEF](http://www.opensef.org/), a very good SEF (Search Engine Friendly)/ SEO (Search Engine Optimisation) component for #Joomla/Mambo:

- <span style="FONT-STYLE: italic">SEO are techniques and changes that are made to the content and code of a web site in order to increase its rankings in the results pages of search engines and directories. These changes may involve rewriting body copy, altering Title or Meta tags, removal of Frames or Flash content, and the seeking of incoming links.

which currently is not able to rewrite correctly URL of the component akocomment (and akobook as well). This is very frustrating for me and for You as well (As I have received many emails on this). I will have t write an extensions this week end to solve this issue.

**I’ve solved the issue with openSEF by promptly deactivating it** when the user submit a for from akocomment or akobook. All You have to do is siimply edit the file */component/com\_sef/sef.php*

| before   (Line 26) | $sefEnabled = (file\_exists( $sefConfigFile ) &amp;&amp; filesize( $sefConfigFile ) &gt; 0);   if ($sefEnabled &amp;&amp; $\_SERVER\[‘REQUEST\_METHOD’\] == ‘POST’ &amp;&amp; !empty( $\_POST\[‘option’\] ))    $sefEnabled = !($\_POST\[‘option’\] == ‘login’ \|\| $\_POST\[‘option’\] == ‘login’ \|\| $\_POST\[‘option’\] == ‘com\_phpshop’); |
|---|---|
| after | $sefEnabled = (file\_exists( $sefConfigFile ) &amp;&amp; filesize( $sefConfigFile ) &gt; 0);   if ($sefEnabled &amp;&amp; $\_SERVER\[‘REQUEST\_METHOD’\] == ‘POST’ &amp;&amp; !empty( $\_POST\[‘option’\] ))    $sefEnabled = !($\_POST\[‘option’\] == ‘login’ \|\| $\_POST\[‘option’\] == ‘login’ \|\| $\_POST\[‘option’\] == ‘com\_phpshop’) \|\| $\_POST\[‘option’\] == ‘com\_akocomment’ \|\| $\_POST\[‘option’\] == ‘com\_akobook’); |

This is of course a hack and not a correct solution, akocomment URL won’t be SEO friendly ! I Will have to inverst more time to write a custom extension for OpenSEF….