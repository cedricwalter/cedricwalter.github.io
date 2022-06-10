---
id: 3313
title: 'Benchmarking your LAMP server'
date: '2008-04-01T20:20:12+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=3313'
permalink: /development/benchmarking-your-lamp-server/
---

| [![apache](/assets/images/2008/04/apache_thumb.jpg)](/assets/images/2008/04/apache.jpg) | The acronym **LAMP** refers to a solution stack of software, usually free and open source software, used to run dynamic Web sites or servers. It stand for:  - Linux, for the operating system; - Apache, the Web server; - MySQL, the database management system (or database server); - Perl, Python, and PHP, the programming languages. |
|---|---|

` ``ab` is a tool for benchmarking your **Apache Hypertext Transfer Protocol (HTTP) server**. It is designed to give you an impression of how your current Apache installation performs. This especially shows you how many requests per second your Apache installation is capable of serving.   
Apache-utils package contains utility programs for webservers and some add-on programs useful for any webserver. These include:

- ab (Apache benchmark tool)
- Logresolve (Resolve IP addresses to hostname in logfiles)
- htpasswd (Manipulate basic authentication files)
- htdigest (Manipulate digest authentication files)
- dbmmanage (Manipulate basic authentication files in DBM format, using perl)
- htdbm (Manipulate basic authentication files in DBM format, using APR)
- rotatelogs (Periodically stop writing to a logfile and open a new one)
- split-logfile (Split a single log including multiple vhosts)
- checkgid (Checks whether the caller can setgid to the specified group)
- check\_forensic (Extract mod\_log\_forensic output from apache log files)

This package Apache-Utils can be install through apt or YaST depending if you are using a Debian base distro or OpenSuse

### Prerequistes

- Define realistic objectives, do not create too much virtual clients if you do not have usually that kind of user traffic..
- For example an objective could be: number of users served, or percentage of the requests served within a certain time
- This tool **ab** do not simulate realistic user behavior, it just hit a page without being able to simulate a complex workflow (like login, navigate and do things users usually do)
- Try to monitor at the same time the CPU/Memory consumed in order not to make false assumption on apache settings (use top d 1)

### Attention

It is an iterative process!

1. Benchmark,
2. Change settings and
3. Restart benchmark.

It is very important to only **change a setting a time** in order to better identify what is really bringing something! By changing only one settings at a time, you can:

- Better see the influence on CPU, memory (you must look also at resources, a server swapping to disk is never good)
- There is not so much universal settings bringing a speed kick (except DNSlookup off, keep alive small), some settings are depending on your Linux kernel version, CPU class, disk speed, network latency

### **Other components** 

[![mysql](/assets/images/2008/04/mysql_thumb.jpg)](http://www.waltercedric.com/images/stories/BenchmarkingyourLAMPserver_E0E8/mysql.jpg) While tuning apache, you will see that most of the time is used in PHP/MySQL, for MySQL recommend to run at the same time [tuning-primer.sh, read more here](http://www.waltercedric.com/internet-www-mainmenu-54/348-mysql/1214-optimizing-mysql-with-tuning-primersh.html)

### Usage

`<strong>ab</strong> [ -<strong>A</strong> <var>auth-username</var>:<var>password</var> ] [ -<strong>c</strong> <var>concurrency</var> ] [ -<strong>C</strong> <var>cookie-name</var>=<var>value</var> ] [ -<strong>d</strong> ] [ -<strong>e</strong> <var>csv-file</var> ] [ -<strong>g</strong> <var>gnuplot-file</var> ] [ -<strong>h</strong> ] [ -<strong>H</strong> <var>custom-header</var> ] [ -<strong>i</strong> ] [ -<strong>k</strong> ] [ -<strong>n</strong> <var>requests</var> ] [ -<strong>p</strong> <var>POST-file</var> ] [ -<strong>P</strong> <var>proxy-auth-username</var>:<var>password</var> ] [ -<strong>q</strong> ] [ -<strong>s</strong> ] [ -<strong>S</strong> ] [ -<strong>t</strong> <var>timelimit</var> ] [ -<strong>T</strong> <var>content-type</var> ] [ -<strong>v</strong> <var>verbosity</var>] [ -<strong>V</strong> ] [ -<strong>w</strong> ] [ -<strong>x</strong> <var><table>-attributes</var> ] [ -<strong>X</strong> <var>proxy</var>[:<var>port</var>] ] [ -<strong>y</strong> <var><tr>-attributes</var> ] [ -<strong>z</strong> <var><td>-attributes</var> ] [http://]<var>hostname</var>[:<var>port</var>]/<var>path</var>`

### Options

<dl><dt>`-A <var>auth-username</var>:<var>password</var>`</dt><dd>Supply BASIC Authentication credentials to the server. The username and password are separated by a single `:` and sent on the wire base64 encoded. The string is sent regardless of whether the server needs it (*i.e.*, has sent an 401 authentication needed). </dd><dt>`-c <var>concurrency</var>`</dt><dd>Number of multiple requests to perform at a time. Default is one request at a time. </dd><dt>`-C <var>cookie-name</var>=<var>value</var>`</dt><dd>Add a `Cookie:` line to the request. The argument is typically in the form of a `<var>name</var>=<var>value</var>` pair. This field is repeatable. </dd><dt>`-d`</dt><dd>Do not display the "percentage served within XX \[ms\] table". (legacy support). </dd><dt>`-e <var>csv-file</var>`</dt><dd>Write a Comma separated value (CSV) file which contains for each percentage (from 1% to 100%) the time (in milliseconds) it took to serve that percentage of the requests. This is usually more useful than the ‘gnuplot’ file; as the results are already ‘binned’. </dd><dt>`-g <var>gnuplot-file</var>`</dt><dd>Write all measured values out as a ‘gnuplot’ or TSV (Tab separate values) file. This file can easily be imported into packages like Gnuplot, IDL, Mathematica, Igor or even Excel. The labels are on the first line of the file. </dd><dt>`-h`</dt><dd>Display usage information. </dd><dt>`-H <var>custom-header</var>`</dt><dd>Append extra headers to the request. The argument is typically in the form of a valid header line, containing a colon-separated field-value pair (*i.e.*, `"Accept-Encoding: zip/zop;8bit"`). </dd><dt>`-i`</dt><dd>Do `HEAD` requests instead of `GET`. </dd><dt>`-k`</dt><dd>Enable the HTTP KeepAlive feature, *i.e.*, perform multiple requests within one HTTP session. Default is no KeepAlive. </dd><dt>`-n <var>requests</var>`</dt><dd>Number of requests to perform for the benchmarking session. The default is to just perform a single request which usually leads to non-representative benchmarking results. </dd><dt>`-p <var>POST-file</var>`</dt><dd>File containing data to POST. </dd><dt>`-P <var>proxy-auth-username</var>:<var>password</var>`</dt><dd>Supply BASIC Authentication credentials to a proxy en-route. The username and password are separated by a single `:` and sent on the wire base64 encoded. The string is sent regardless of whether the proxy needs it (*i.e.*, has sent an 407 proxy authentication needed). </dd><dt>`-q`</dt><dd>When processing more than 150 requests, `ab` outputs a progress count on `stderr` every 10% or 100 requests or so. The `-q` flag will suppress these messages. </dd><dt>`-s`</dt><dd>When compiled in (`ab -h` will show you) use the SSL protected `https` rather than the `http` protocol. This feature is experimental and *very* rudimentary. You probably do not want to use it. </dd><dt>`-S`</dt><dd>Do not display the median and standard deviation values, nor display the warning/error messages when the average and median are more than one or two times the standard deviation apart. And default to the min/avg/max values. (legacy support). </dd><dt>`-t <var>timelimit</var>`</dt><dd>Maximum number of seconds to spend for benchmarking. This implies a `-n 50000` internally. Use this to benchmark the server within a fixed total amount of time. Per default there is no timelimit. </dd><dt>`-T <var>content-type</var>`</dt><dd>Content-type header to use for POST data. </dd><dt>`-v <var>verbosity</var>`</dt><dd>Set verbosity level – `4` and above prints information on headers, `3` and above prints response codes (404, 200, etc.), `2` and above prints warnings and info. </dd><dt>`-V`</dt><dd>Display version number and exit. </dd><dt>`-w`</dt><dd>Print out results in HTML tables. Default table is two columns wide, with a white background. </dd><dt>`-x <var><table>-attributes</var>`</dt><dd>String to use as attributes for `<table>`. Attributes are inserted `<table <var>here</var> >`. </dd><dt>`-X <var>proxy</var>[:<var>port</var>]`</dt><dd>Use a proxy server for the requests. </dd><dt>`-y <var><tr>-attributes</var>`</dt><dd>String to use as attributes for `<tr>`. </dd><dt>`-z <var><td>-attributes</var>`</dt><dd>String to use as attributes for `<td>`. </dd></dl>### Some real examples

time /usr/sbin/ab2 -n 500 -c 30 <http://www.waltercedric.com>   
This will make 500 requests on them and hammering localhost for 30 seconds

| **After tuning** | **Before tuning** |
|---|---|
| <small><small>Benchmarking www.waltercedric.com </small><small>Completed 100 requests</small>    <small>Completed 200 requests</small>    <small>Completed 300 requests</small>    <small>Completed 400 requests</small>    <small>Finished 500 requests</small>    <small>Server Software: NOYB</small>    <small>Server Hostname: www.waltercedric.com</small>    <small>Server Port: 80</small>    <small>Document Path: /index.php</small>    <small>Document Length: 45532 bytes</small>    <small>Concurrency Level: 30</small>    **<small>Time taken for tests: 38.576375 seconds</small>** <small>Complete requests: 500</small>    <small>Failed requests: 19</small>    <small> (Connect: 0, Length: 19, Exceptions: 0)</small>    <small>Write errors: 0</small>    <small>Total transferred: 23000106 bytes</small>    <small>HTML transferred: 22762106 bytes</small>    <small>Requests per second: 12.96 \[#/sec\] (mean)</small>    <small>Time per request: 2314.582 \[ms\] (mean)</small>    <small>Time per request: 77.153 \[ms\] (mean, across all concurrent requests)</small>    <small>Transfer rate: 582.25 \[Kbytes/sec\] received</small>    <small>Connection Times (ms)</small>    <small> min mean\[+/-sd\] median max</small>    <small>Connect: 0 8 36.9 0 207</small>    <small>Processing: 394 2239 345.3 2237 6223</small>    <small>Waiting: 379 2197 340.9 2190 6173</small>    <small>Total: 397 2247 344.2 2239 6223</small>    <small>Percentage of the requests served within a certain time (ms)</small>    <small> **50% 2239**</small>    <small> 66% 2294</small>    <small> 75% 2327</small>    <small> 80% 2357</small>    <small> 90% 2457</small>    <small> 95% 2560</small>    <small> 98% 2973</small>    <small> 99% 3341</small>    <small>100% 6223 (longest request)</small>    <small>real 0m38.617s</small>    <small>user 0m0.024s</small>    <small>sys 0m0.240s</small></small> | Benchmarking www.waltercedric.com    Completed 100 requests    Completed 200 requests    Completed 300 requests    Completed 400 requests    Finished 500 requests   Server Software: NOYB    Server Hostname: www.waltercedric.com    Server Port: 80   Document Path: /index.php    Document Length: <small><small>45532 </small></small>bytes   Concurrency Level: 30    **Time taken for tests: 108.897481** seconds    Complete requests: 500    Failed requests: 19     (Connect: 0, Length: 19, Exceptions: 0)    Write errors: 0    Total transferred: <small><small>23000106</small> </small>bytes    HTML transferred: <small><small>23000106</small> </small>bytes    Requests per second: 4.59 \[#/sec\] (mean)    Time per request: 6533.849 \[ms\] (mean)    Time per request: 217.795 \[ms\] (mean, across all concurrent requests)    Transfer rate: 178.41 \[Kbytes/sec\] received   Connection Times (ms)     min mean\[+/-sd\] median max    Connect: 0 114 478.9 0 2276    Processing: 336 6186 1665.2 6108 16189    Waiting: -5148 5982 1982.8 6066 16009    Total: 391 6301 1580.2 6120 17093   Percentage of the requests served within a certain time (ms)     **50% 6120**     66% 6453     75% 6778     80% 7046     90% 7861     95% 8516     98% 10110     99% 12418    100% 17093 (longest request)   real 1m48.905s    user 0m0.024s    sys 0m0.152s |

time /usr/sbin/ab2 -kc 10 -t 30 http://www.waltercedric.com   
This will open 10 connections, using Keep-Alive on them and hammering localhost for 30 seconds

### Same tests but without mod\_security

- [Mod\_security](http://www.modsecurity.org/) is a module for Apache which act like a software firewall
- Depending on the number of rules, can greatly affect through output speed

time /usr/sbin/ab2 -kc 10 -t 30 http://www.waltercedric.com    
This will open 10 connections, using Keep-Alive on them and hammering localhost for 30 seconds

<small>real 0m39.040s   
user 0m0.020s   
sys 0m0.208s</small>

<small>Nearly one second more with [mod\_security gotroot rules](http://www.gotroot.com/), worth the added security!</small>

If you want to know more options and how to use apache ab check the apache ab/ab2 man page click [here](http://httpd.apache.org/docs/2.0/programs/ab.html) for this man page

### How to optimize Apache/Joomla/PHP

I forward You to some of my previous articles:

- [Speed up your web pages with YSlow](http://www.waltercedric.com/internet-www-mainmenu-54/345-performances/1194-speed-up-your-web-pages-with-yslow.html), to identify and reduce the number of http requests
- [Speed up your apache server running PHP](http://www.waltercedric.com/internet-www-mainmenu-54/329-apache/1123--speed-up-your-apache-server-running-php.html)
- [Speed up your apache server with mod\_expires](http://www.waltercedric.com/internet-www-mainmenu-54/329-apache/1212-how-to-speed-cms-like-joomla.html)
- [Speed up your apache server running PHP with fastCGI](http://www.waltercedric.com/internet-www-mainmenu-54/329-apache/1122-speed-up-your-apache-server-running-php-with-fastcgi.html)
- [Speed up your apache server with mod\_deflate](http://www.waltercedric.com/internet-www-mainmenu-54/329-apache/1121-speed-up-your-apache-server-with-moddeflate.html)
- [Speed up your apache server with mod\_cache](http://www.waltercedric.com/internet-www-mainmenu-54/329-apache/1120-speed-up-your-apache-server-with-modcache.html)
- [The Alternative PHP Cache install](http://www.waltercedric.com/internet-www-mainmenu-54/341-php/1181-apc-install-howto.html)
- [Impact of Zend Optimizer on PHP Performance](http://www.waltercedric.com/internet-www-mainmenu-54/341-php/1264-impact-of-zend-optimizer-on-php-performance.html)

And more ideas here [Secure, Safe, Fast Linux Hosting](http://www.waltercedric.com/internet-www-mainmenu-54/313-security/1272-secure-safe-fast-linux-hosting.html)