---
id: 2694
title: '1 week of mod_evasive some nasty bots get blacklisted'
date: '2006-08-30T23:19:26+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=2694'

tags:
    - security
---

This are my mod\_evasive settings:  
   
LoadModule evasive20\_module /usr/lib/apache2/mod\_evasive20.so  
<IfModule mod\_evasive20.c>  
 DOSHashTableSize 3097  
 DOSPageCount 5  
 DOSSiteCount 100  
 DOSPageInterval 2  
 DOSSiteInterval 2  
 DOSBlockingPeriod 600  
 DOSEmailNotify xxx@xxx.com  
</IfModule>

And this is a small documentation I’ve forget to add in the previous article:

-DOSHashTableSize: is the size of the table of URL and IP combined. The greater this setting, the more memory is required for the look up table, but also the faster the look ups are processed. This option will automatically round up to the nearest prime number.
-DOSPageCount: is the number of same page requests from the same IP during an interval that will cause that IP to be added to the block list.
-DOSSiteCount: is the number of pages requested of a site by the same IP during an interval which will cause the IP to be added to the block list.
-DOSPageInterval: Interval for the ‘DOSPageCount’ threshold in second intervals.
-DOSSiteInterval:Interval for the ‘DOSSiteCount’ threshold in second intervals.
-DOSBlockingPeriod: is the time the IP is blacked (in seconds
-DOSEmailNotify: can be used to notify by sending an email everytime an IP is blocked
-DOSSystemCommand: is the command used to execute a command when an IP is blocked. It can be used to add a block the user from a firewall or router.
-DOSWhiteList: can be used to whitelist IPs such as 127.0.0.1

  So if anybody on my homepage request 5 times the same page in less than 2 seconds, it will get blacklisted.  
If anybody try to make more than 100 requests of my homepage in less than 2 seconds, it will get blacklisted.   
   
In less than a week, the following Bots get blacklisted.

84.80.211.6 Unknown Country  
62.226.126.102 Germany  
202.64.146.221 Chinese (Hong Kong)  
88.152.174.86 Unknown Country  
84.30.174.179 Dutch (Netherlands)  
84.154.17.72 GERMANY (DE) City: Muenchen Latitude: 48.15 Longitude: 11.5833  
70.225.166.33 United States  
202.63.102.211 Country: INDIA (IN) City: Hyderabad Latitude: 17.3833 Longitude: 78.4833  
69.148.83.2 UNITED STATES (US)  
195.38.6.181 Swedish (Sweden)  
81.242.199.145 BELGIUM (BE) City: Tournai Latitude: 50.6 Longitude: 3.3833  
217.120.138.11 NETHERLANDS (NL) City: Harlingen Latitude: 53.1833 Longitude: 5.4167  
195.145.98.50 GERMANY (DE) City: Heinsberg Latitude: 51.0333 Longitude: 8.15  
195.4.181.237 GERMANY (DE)  
80.166.87.34 DENMARK (DK)  
84.87.167.10 Dutch (Netherlands)  
81.208.83.238 ITALY (IT) City: Roma Latitude: 41.9 Longitude: 12.4833  
66.249.66.199 UNITED STATES (US) City: Mountain View, CA Latitude: 37.402 Longitude: -122.078 GOOGLE  
84.137.16.79 GERMANY (DE)  
86.83.255.147 Dutch (Netherlands)  
66.249.65.99 UNITED STATES (US) City: Raleigh, NC Latitude: 35.8219 Longitude: -78.6588