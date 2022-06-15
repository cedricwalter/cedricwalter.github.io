---
id: 7218
title: 'Use always Google.com as default search engine in Chrome for direct search'
date: '2011-10-20T11:06:58+02:00'
author: 'Cédric Walter'



tags:
    - example
    - google
    - local
---

[![google_logo](/assets/images/2011/10/google_logo_thumb.jpg "google_logo")](/assets/images/2009/10/google_logo.jpg)

Nothing is more disturbing than to be redirected to you local Google domain (.ch, .fr, .de or any other) when you want to do a search using English keywords. Did you notice by the way that the index returned is different? you do not get the same number of results or any accurate results at all if you use the same query on your local Google domains…

Here is a small tip to force Google Chrome to redirect all your direct search (when you type in the location bar and click enter) always to Google.com or any other local domains of Google instead of the one that is revealed by your IP country.

Under Google Options or you can click on this link <chrome://settings/browser>

[![google_chrome_setSearch_always_to_google_com](/assets/images/2011/10/google_chrome_setSearch_always_to_go2_thumb.png "google_chrome_setSearch_always_to_google_com")](http://www.waltercedric.com/images/Google.com-as-default-search-engine_D527/google_chrome_setSearch_always_to_go2.png)

Click on Button manage Search Engine

Add a new engine, I did name it “always google.com” in my example and use this URL

[http://www.google.com/search?{google:rlz}{google:acceptedsuggestion}{google:originalqueryforsuggestion}sourceid=chrome&amp;ie={inputencoding}&amp;q=%s](http://www.google.com/search?{google:rlz}{google:acceptedsuggestion}{google:originalqueryforsuggestion}sourceid=chrome&ie={inputencoding}&q=%s "http://www.google.com/search?{google:rlz}{google:acceptedsuggestion}{google:originalqueryforsuggestion}sourceid=chrome&ie={inputencoding}&q=%s")

[![google_chrome_setSearch_always_to_google_com_2](/assets/images/2011/10/google_chrome_setSearch_always_to_go_thumb.png "google_chrome_setSearch_always_to_google_com_2")](http://www.waltercedric.com/images/Google.com-as-default-search-engine_D527/google_chrome_setSearch_always_to_go.png)

You can then click on this new search and make it as default

Additionally you can also set your homepage to [www.google.com/ncr](http://www.google.com/ncr) to always have the global domains and avoid being redirected to Google.ch