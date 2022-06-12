---
id: 1581
title: 'Minimize some part of Your GUI to have more space'
date: '2005-02-15T21:21:48+01:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=1581'

---

- Let the user minimize/maximise some part of Your GUI to have more space on demand

- Working in all browser

- Use cookieJar script also in this section

Method to put in Your <HEAD> html document:

 <span class="syntax8">var CookieJar <span class="syntax18">= <span class="syntax8">new <span class="syntax6">TDCookieJarObj()<span class="syntax18">;<span class="syntax2"><span class="syntax2">  CookieJar<span class="syntax18">.<span class="syntax6">setPath(<span class="syntax13">"<span class="syntax13">/<span class="syntax13">")<span class="syntax18">; <span class="syntax8">function <span class="syntax6">FoldByName(iImageID<span class="syntax18">, sMenuID) <span class="syntax18">{   
 <span class="syntax8">if (document<span class="syntax18">.<span class="syntax6">getElementById(sMenuID)<span class="syntax18">.style<span class="syntax18">.display <span class="syntax18">=<span class="syntax18">= <span class="syntax13">‘<span class="syntax13">none<span class="syntax13">‘) <span class="syntax18">{   
 document<span class="syntax18">.<span class="syntax6">getElementById(sMenuID)<span class="syntax18">.style<span class="syntax18">.display <span class="syntax18">= <span class="syntax13">‘<span class="syntax13">block<span class="syntax13">‘<span class="syntax18">;   
 document<span class="syntax18">.images<span class="syntax18">\[iImageID<span class="syntax18">\]<span class="syntax18">.src<span class="syntax18">=<span class="syntax13">‘<span class="syntax13">up.gif<span class="syntax13">‘<span class="syntax18">;   
 document<span class="syntax18">.images<span class="syntax18">\[iImageID<span class="syntax18">\]<span class="syntax18">.alt<span class="syntax18">=<span class="syntax13">‘<span class="syntax13">Minimize<span class="syntax13">‘<span class="syntax18">;   
 document<span class="syntax18">.images<span class="syntax18">\[iImageID<span class="syntax18">\]<span class="syntax18">.title<span class="syntax18">=<span class="syntax13">‘<span class="syntax13">Minimize<span class="syntax13">‘<span class="syntax18">;   
 CookieJar<span class="syntax18">.<span class="syntax6">setCookie(sMenuID<span class="syntax18">,<span class="syntax13">"<span class="syntax13">open<span class="syntax13">")<span class="syntax18">;   
 <span class="syntax18">} <span class="syntax8">else <span class="syntax18">{   
 document<span class="syntax18">.<span class="syntax6">getElementById(sMenuID)<span class="syntax18">.style<span class="syntax18">.display <span class="syntax18">= <span class="syntax13">‘<span class="syntax13">none<span class="syntax13">‘<span class="syntax18">; document<span class="syntax18">.images<span class="syntax18">\[iImageID<span class="syntax18">\]<span class="syntax18">.src<span class="syntax18">=<span class="syntax13">‘<span class="syntax13">down.gif<span class="syntax13">‘<span class="syntax18">; document<span class="syntax18">.images<span class="syntax18">\[iImageID<span class="syntax18">\]<span class="syntax18">.alt<span class="syntax18">=<span class="syntax13">‘<span class="syntax13">Maximize<span class="syntax13">‘<span class="syntax18">; document<span class="syntax18">.images<span class="syntax18">\[iImageID<span class="syntax18">\]<span class="syntax18">.title<span class="syntax18">=<span class="syntax13">‘<span class="syntax13">Maximize<span class="syntax13">‘<span class="syntax18">;   
 CookieJar<span class="syntax18">.<span class="syntax6">setCookie(sMenuID<span class="syntax18">,<span class="syntax13">"<span class="syntax13">close<span class="syntax13">")<span class="syntax18">;   
 <span class="syntax18">} <span class="syntax18">}

Example of use, here I want to hide the title on demand because it take a lot of space….The user has now a switch on-switch off icon where He can minimize on demand this part of the GUI  
 <span class="syntax18"><a href<span class="syntax18">=<span class="syntax13">"<span class="syntax13">javascript:FoldByName(‘TITLE’,’TITLE2′);<span class="syntax13">"<span class="syntax18">><span class="syntax18"><img name<span class="syntax18">=<span class="syntax13">‘<span class="syntax13">ButtonExpand<span class="syntax13">‘ id<span class="syntax18">=<span class="syntax13">‘<span class="syntax13">TITLE<span class="syntax13">‘ src<span class="syntax18">=<span class="syntax13">‘<span class="syntax13">down.gif<span class="syntax13">‘ alt<span class="syntax18">=<span class="syntax13">‘<span class="syntax13">hide<span class="syntax13"> <span class="syntax13">the<span class="syntax13"> <span class="syntax13">title<span class="syntax13">‘ align<span class="syntax18">=<span class="syntax13">‘<span class="syntax13">AbsMiddle<span class="syntax13">‘ style<span class="syntax18">=<span class="syntax13">‘<span class="syntax13">border-width:0px;<span class="syntax13">‘ <span class="syntax18">/<span class="syntax18">><span class="syntax18"><<span class="syntax18">/a<span class="syntax18">> <span class="syntax18"><div <span class="syntax8">class<span class="syntax18">=smallText id<span class="syntax18">=<span class="syntax13">‘<span class="syntax13">TITLE2<span class="syntax13">‘<span class="syntax18">>   
<span class="syntax18"><H1<span class="syntax18">> This is an Example<span class="syntax18"><<span class="syntax18">/H1<span class="syntax18">> <span class="syntax18"><<span class="syntax18">/div<span class="syntax18">> <span class="syntax18"><script language<span class="syntax18">=<span class="syntax13">‘<span class="syntax13">Javascript<span class="syntax13">‘<span class="syntax18">>cookie <span class="syntax18">= CookieJar<span class="syntax18">.<span class="syntax6">getCookie(<span class="syntax13">"<span class="syntax13">TITLE2<span class="syntax13">")<span class="syntax18">;<span class="syntax8">if ( cookie <span class="syntax18">=<span class="syntax18">= <span class="syntax13">"<span class="syntax13">close<span class="syntax13">" )<span class="syntax6">FoldByName(<span class="syntax13">‘<span class="syntax13">TITLE<span class="syntax13">‘<span class="syntax18">,<span class="syntax13">‘<span class="syntax13">TITLE2<span class="syntax13">‘)<span class="syntax18">;<span class="syntax18"><<span class="syntax18">/script<span class="syntax18">>