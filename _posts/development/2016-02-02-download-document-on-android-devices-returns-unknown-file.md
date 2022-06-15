---
id: 8327
title: 'Download document on Android devices returns unknown file'
date: '2016-02-02T14:07:23+01:00'
author: 'Cédric Walter'



tags:

- java

---

Downloading resources on Android devices returns unknown file in Google Chrome, or internal browser but not in Firefox
for Android!

## Short version

- Do not rely on self signed certificate for android when downloading resources: **android download manager wont
  work** (below Android 4.1.4 SSL was even not supported in download manager)
- Android do not support all kind of SSL Cipher, check the compatibility table below

## Long Story

On some Android devices clicking the download link return back an error and show an ‘Unknown file’. The file of an
initial size of 790kb get partially and randomly downloaded: sometimes you get 140kb, sometimes 224kb or more.

There is a workaround: if one lets the cursor on the link and clicks ‘Save’ then the saved document is correct and can
be opened.

This issue appear on some Android phone, not on Android tablet (???) and never on iOS (sic)

Looking at the logs, we have found that In Apache access log the resource-size returned is not the same as in Tomcat
access log (only when client is Android). Using Desktop class browser (Google Chrome, Firefox, Opera, Safari) the sizes
returned by Tomcat and Apache is the same!

After a lot of try and error we found out that Android is able to download properly the resource when connecting
directly to tomcat (e.g. without SSL), however in this case there is a VERY strange behaviour:

So, when we try to download the resource via HTTP, android needs to connect twice! The first connection seems to abort
and only the second connection (Android download manager) is able to fetch everything.

After that, we enabled the debug logging in Apache and had look at the output.

```
[Tue Jan 26 16:06:29 2016] [info] Initial (No.1) HTTPS request received <span class="code-keyword" style="color: #000091;">for child 0 (server skye3.innoveo.com:443) [Tue Jan 26 16:06:29 2016] [debug] mod_proxy_http.c(56): proxy: HTTP: canonicalising URL <span class="code-comment" style="color: #808080;">//localhost:8443/xx.pdf [Tue Jan 26 16:06:29 2016] [debug] proxy_util.c(1525): [client 172.16.2.176] proxy: http: found worker http:<span class="code-comment" style="color: #808080;">//localhost:8443/ <span class="code-keyword">for http://localhost:8443/xx<span style="line-height: 12.8px; font-family: Tahoma, Helvetica, Arial, sans-serif;">.pdf

[Tue Jan 26 16:06:29 2016] [debug] mod_proxy.c(1026): Running scheme http handler (attempt 0) [Tue Jan 26 16:06:29 2016] [debug] mod_proxy_http.c(1982): proxy: HTTP: serving URL http:<span class="code-comment" style="color: #808080;">//localhost:8443/xx.pdf [Tue Jan 26 16:06:29 2016] [debug] proxy_util.c(2102): proxy: HTTP: has acquired connection <span class="code-keyword" style="color: #000091;">for (localhost) [Tue Jan 26 16:06:29 2016] [debug] proxy_util.c(2158): proxy: connecting http:<span class="code-comment" style="color: #808080;">//localhost:8443/xx.pdf to localhost:8443 [Tue Jan 26 16:06:29 2016] [debug] proxy_util.c(2285): proxy: connected /xxxxx.pdf to localhost:8443 [Tue Jan 26 16:06:29 2016] [debug] mod_proxy_http.c(1741): proxy: start body send [Tue Jan 26 16:06:29 2016] [info] [client 172.16.2.176] (104)Connection reset by peer: core_output_filter: writing data to the network [Tue Jan 26 16:06:29 2016] [info] [client 172.16.2.176] (103)Software caused connection abort: SSL output filter write failed. [Tue Jan 26 16:06:29 2016] [debug] mod_proxy_http.c(1851): proxy: end body send [Tue Jan 26 16:06:29 2016] [debug] proxy_util.c(2120): proxy: HTTP: has released connection <span class="code-keyword" style="color: #000091;">for (localhost) [Tue Jan 26 16:06:29 2016] [info] [client 172.16.2.176] Connection to child 3 established (server skye3.innoveo.com:443) ... ~removed useless debug output~ [Tue Jan 26 16:06:29 2016] [debug] ssl_engine_kernel.c(1966): [client 172.16.2.176] SSL virtual host <span class="code-keyword" style="color: #000091;">for servername skye3.innoveo.com found [Tue Jan 26 16:06:29 2016] [debug] ssl_engine_kernel.c(1853): OpenSSL: Loop: SSLv3 read client hello A [Tue Jan 26 16:06:29 2016] [debug] ssl_engine_kernel.c(1853): OpenSSL: Loop: SSLv3 write server hello A [Tue Jan 26 16:06:29 2016] [debug] ssl_engine_kernel.c(1853): OpenSSL: Loop: SSLv3 write certificate A [Tue Jan 26 16:06:29 2016] [debug] ssl_engine_kernel.c(1853): OpenSSL: Loop: SSLv3 write key exchange A [Tue Jan 26 16:06:29 2016] [debug] ssl_engine_kernel.c(1853): OpenSSL: Loop: SSLv3 write server done A [Tue Jan 26 16:06:29 2016] [debug] ssl_engine_kernel.c(1853): OpenSSL: Loop: SSLv3 flush data Tue Jan 26 16:06:29 2016] [debug] ssl_engine_io.c(1929): OpenSSL: read 5/5 bytes from BIO#7f1a4c1230d0 [mem: 7f1a4c17a493] (BIO dump follows) ... ~removed useless debug output~ [Tue Jan 26 16:06:29 2016] [debug] ssl_engine_kernel.c(1853): OpenSSL: Loop: SSLv3 read client key exchange A [Tue Jan 26 16:06:29 2016] [debug] ssl_engine_io.c(1929): OpenSSL: read 5/5 bytes from BIO#7f1a4c1230d0 [mem: 7f1a4c17a493] (BIO dump follows) ... ~removed useless debug output~ [Tue Jan 26 16:06:29 2016] [debug] ssl_engine_kernel.c(1853): OpenSSL: Loop: SSLv3 read finished A [Tue Jan 26 16:06:29 2016] [debug] ssl_engine_kernel.c(1853): OpenSSL: Loop: SSLv3 write session ticket A [Tue Jan 26 16:06:29 2016] [debug] ssl_engine_kernel.c(1853): OpenSSL: Loop: SSLv3 write change cipher spec A [Tue Jan 26 16:06:29 2016] [debug] ssl_engine_kernel.c(1853): OpenSSL: Loop: SSLv3 write finished A [Tue Jan 26 16:06:29 2016] [debug] ssl_engine_kernel.c(1853): OpenSSL: Loop: SSLv3 flush data [Tue Jan 26 16:06:29 2016] [debug] ssl_engine_kernel.c(1849): OpenSSL: Handshake: done [Tue Jan 26 16:06:29 2016] [info] Connection: Client IP: 172.16.2.176, Protocol: TLSv1.2, Cipher: ECDHE-RSA-AES256-SHA (256/256 bits) [Tue Jan 26 16:06:29 2016] [info] [client 172.16.2.176] (70014)End of file found: SSL input filter read failed. [Tue Jan 26 16:06:29 2016] [info] [client 172.16.2.176] Connection closed to child 2 with standard shutdown (server skye3.innoveo.com:443) [Tue Jan 26 16:06:29 2016] [info] [client 172.16.2.176] Connection to child 0 established (server skye3.innoveo.com:443) ...
```

So we see, the intial SSL connect works, we can see the request issued and the proxy request. Body is written and then
“connection reset by peer”

After careful search it is pretty sure that we are running into this
problem: <https://code.google.com/p/chromium/issues/detail?id=440951>  
Summary:   
when you try to download stuff with chromium it works (even from unsecure sources), this is why the first connect is
okay. however chromium interrupts the download to hand it over to android download manager (this is why actually
displaying pictures works, despite the fact that they are delivered though the same pipeline, e.g. skye code, tomcat
version, apache and ssl). this is also why we see two downloads per click in the log files. Problem is however that
android download manager does NOT NEVER EVER download stuff from unsecure sources (e.g. selfsigned certs) and thus the
final download fails. this is also true for the default andoid browser, because they also use the android download
manager.

# Solution**: the only solution was be to upgrade to valid SSL certificates (Verizon, Verisign or any other) instead of self signed. This increase the number of Android device working but unfortunately some Android devices were still NOT able to download resources with a valid SSL cert…

By using the Android SDK debug console (adb.exe logcat > file.txt) of android, we saw the following:

```
ne 7487: D/DownloadManager( 3054): [1] Starting 	Line 7489: W/DownloadManager( 3054): [1] Stop requested with status HTTP_DATA_ERROR: Handshake failed 	Line 7491: D/DownloadManager( 3054): [1] Finished with status WAITING_TO_RETRY
```

This show again that the initial connect to our server happen correctly but return partial content but is then forwarded
to the download manager that try to build another connection that is still fail

# Solution**: change Apache cipher suite according to the table below.

### Android compatibility table

<http://developer.android.com/reference/javax/net/ssl/SSLEngine.html>

Depending on which version of android you would like to support you’ll have to find a cipher suite that is supported by
iOS, Android while not sacrificing too much security.

| **Android Version** | **Released** | **API Level** | **Name** | **Build Version Code** |
|---|---|---|---|---|
| Android 6.0 | August 2015 | 23 | Marshmallow | Android.OS.BuildVersionCodes.Marshmallow |
| Android 5.1 | March 2015 | 22 | Lollipop | Android.OS.BuildVersionCodes.LollipopMr1 |
| Android 5.0 | November 2014 | 21 | Lollipop | Android.OS.BuildVersionCodes.Lollipop |
| Android 4.4W | June 2014 | 20 | Kitkat Watch | Android.OS.BuildVersionCodes.KitKatWatch |
| Android 4.4 | October 2013 | 19 | Kitkat | Android.OS.BuildVersionCodes.KitKat |
| Android 4.3 | July 2013 | 18 | Jelly Bean | Android.OS.BuildVersionCodes.JellyBeanMr2 |
| Android 4.2-4.2.2 | November 2012 | 17 | Jelly Bean | Android.OS.BuildVersionCodes.JellyBeanMr1 |
| Android 4.1-4.1.1 | June 2012 | 16 | Jelly Bean | Android.OS.BuildVersionCodes.JellyBean |
| Android 4.0.3-4.0.4 | December 2011 | 15 | Ice Cream Sandwich | Android.OS.BuildVersionCodes.IceCreamSandwichMr1 |
| Android 4.0-4.0.2 | October 2011 | 14 | Ice Cream Sandwich | Android.OS.BuildVersionCodes.IceCreamSandwich |
| Android 3.2 | June 2011 | 13 | Honeycomb | Android.OS.BuildVersionCodes.HoneyCombMr2 |
| Android 3.1.x | May 2011 | 12 | Honeycomb | Android.OS.BuildVersionCodes.HoneyCombMr1 |
| Android 3.0.x | February 2011 | 11 | Honeycomb | Android.OS.BuildVersionCodes.HoneyComb |
| Android 2.3.3-2.3.4 | February 2011 | 10 | Gingerbread | Android.OS.BuildVersionCodes.GingerBreadMr1 |
| Android 2.3-2.3.2 | November 2010 | 9 | Gingerbread | Android.OS.BuildVersionCodes.GingerBread |
| Android 2.2.x | June 2010 | 8 | Froyo | Android.OS.BuildVersionCodes.Froyo |
| Android 2.1.x | January 2010 | 7 | Eclair | Android.OS.BuildVersionCodes.EclairMr1 |
| Android 2.0.1 | December 2009 | 6 | Eclair | Android.OS.BuildVersionCodes.Eclair01 |
| Android 2.0 | November 2009 | 5 | Eclair | Android.OS.BuildVersionCodes.Eclair |
| Android 1.6 | September 2009 | 4 | Donut | Android.OS.BuildVersionCodes.Donut |
| Android 1.5 | May 2009 | 3 | Cupcake | Android.OS.BuildVersionCodes.Cupcake |
| Android 1.1 | February 2009 | 2 | Base | Android.OS.BuildVersionCodes.Base11 |
| Android 1.0 | October 2008 | 1 | Base | Android.OS.BuildVersionCodes.Base |

It is always a good idea to validate your SSL settings by using one the these online services (In no particular order).
Some even report if you are vulnerable to some common SSL attacks ()

- <https://www.ssllabs.com/ssltest/>
- <https://cryptoreport.websecurity.symantec.com/checker/views/certCheck.jsp>