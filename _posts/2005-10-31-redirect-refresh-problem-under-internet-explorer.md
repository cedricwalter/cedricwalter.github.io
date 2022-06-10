---
id: 2076
title: 'Redirect/Refresh problem under Internet explorer'
date: '2005-10-31T14:49:05+01:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=2076'
permalink: /internet/redirect-refresh-problem-under-internet-explorer/
tags:
    - difficulties
    - homepage
---

 Since at least 2 days, My homepage has been unavailable to all Internet explorer users…(76% of my visitors)

| **Browser** | **https://waltercedric.com** | **http://www.waltercedric.com** |
|---|---|---|
| **Internet Explorer 6.0** | working | endless redirect loop |
| **Firefox 1.0.7** | working | working |
| **Opera 8.5** | working | working |

My internet page has under it’s root directory [<font color="#800080">http://www.waltercedric.com](https://waltercedric.com/new/?p=45) an index.html file which redirect You to #Joomla [http://www.waltercedric.com/Mambo/](/Mambo/)

The following file has work since recently, under IE but suddenly stop 3 days ago…

| **Content of index.html** \| endless redirect loop \| \|:-:\| |
|---|
| &lt;html&gt;   &lt;head&gt;   &lt;title&gt;&lt;/title&gt;   &lt;META HTTP-EQUIV="refresh" content="0 ; /Mambo/index.php"&gt;   &lt;/head&gt;   &lt;body&gt;&lt;/body&gt;   &lt;/html&gt; |

Firefox has no difficulties with the file above. After a quick Look at the [W3C consortium for HTML normalisation](http://www.w3.org/MarkUp/), I found the following code

| **Content of index.html (working)** |
|---|
| &lt;html&gt;   &lt;head&gt;   &lt;title&gt;&lt;/title&gt;   &lt;META HTTP-EQUIV="refresh" content="1;URL=/Mambo/index.php"&gt;   &lt;/head&gt;   &lt;body&gt;&lt;/body&gt;   &lt;/html&gt; |

So to resume, a coding error, lazy standard and **ME** only testing under firefox…I apologize for inconvenience…and will try to avoid such situation in future.