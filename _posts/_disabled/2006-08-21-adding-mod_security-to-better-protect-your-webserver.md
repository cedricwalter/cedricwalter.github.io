---
id: 2687
title: 'Adding mod_security to better protect your webserver'
date: '2006-08-21T19:32:50+02:00'
author: 'Cédric Walter'



header:
  teaser: /assets/images/2006/08/mod_security.gif
tags:
    - security
---

 

| ![](/assets/images/2006/08/mod_security.gif) | ModSecurity<sup style="font-style: italic;">TM</sup> is an open source intrusion detection and prevention engine for web applications (or a web application firewall). Operating as an Apache Web server module or standalone, the purpose of ModSecurity is to increase web application security, protecting web applications from known and unknown attacks. from <http://www.modsecurity.org/> |
|---|---|

[ ](http://www.modsecurity.org/)  
Installing <small><span style="font-family: Courier New,Courier,monospace;">mod\_security</small> as DSO is easier, and the procedure is the same for both Apache branches. First unpack the distribution somewhere (anywhere will do, I copy the .c files in my home),

| <small><font color="#ffffff" style="color: rgb(0, 0, 0);">\# cd   \# wget http://www.modsecurity.org/download/mod\_security-1.9.4.tar.gz    # tar -zxfv mod\_security-1.9.4.tar.gz    # cd mod\_security-1.9.4/apache2</small> |
|---|

and compile the module with:

| apache1 | apache2 |
|---|---|
| <small>/usr/local/psa/admin/bin/apxs -cia ~/mod\_security.c</small> | <small>/usr/sbin/apxs2 -cia ~/mod\_security.c</small> |

  First problem that may occur is the absence of

-Gcc: <font size="-1">The GNU Compiler Collection (usually shortened to GCC) is a set of programming language compilers produced by the GNU Project. It is free software distributed by the Free Software Foundation (FSF) under the GNU GPL, and is a key component of the GNU toolchain. It is the standard compiler for the open source Unix-like operating systems, and certain proprietary operating systems derived therefrom such as Mac OS X. \[[WikiPedia](http://en.wikipedia.org/wiki/Gcc)\]
-apache-dev: contains the <font size="-1">apxs tool, and required pache heder to compile a module

Both can be installed via YaST2…

Tips: if your apxs2 is not located at <small style="font-family: Courier New,Courier,monospace; font-weight: bold;">/usr/bin/apxs2</small>, you can search it by typing <small><span style="font-weight: bold; font-family: Courier New,Courier,monospace;">\# find / -name apxs2</small>

| <small>\# /usr/sbin/apxs2 -cia ~/mod\_security.c   /usr/share/apache2/build/libtool –silent –mode=compile gcc -prefer-pic -O2 -march=i586 -mcpu=i686 -fmessage-length=0 -Wall -g -fPIC -Wall -fno-strict-aliasing -D\_LARGEFILE\_SOURCE -DAP\_HAVE\_DESIGNATED\_INITIALIZER -DLINUX=2 -D\_REENTRANT -D\_XOPEN\_SOURCE=500 -D\_BSD\_SOURCE -D\_SVID\_SOURCE -D\_GNU\_SOURCE -DAP\_DEBUG -Wmissing-prototypes -Wstrict-prototypes -Wmissing-declarations -pthread -I/usr/include/apache2 -I/usr/include/apache2 -I/usr/include/apache2 -c -o /root/mod\_security.lo /root/mod\_security.c &amp;&amp; touch /root/mod\_security.slo   /usr/share/apache2/build/libtool –silent –mode=link gcc -o /root/mod\_security.la -rpath /usr/lib/apache2 -module -avoid-version /root/mod\_security.lo   /usr/share/apache2/build/instdso.sh SH\_LIBTOOL=’/usr/share/apache2/build/libtool’ /root/mod\_security.la /usr/lib/apache2   /usr/share/apache2/build/libtool –mode=install cp /root/mod\_security.la /usr/lib/apache2/   cp /root/.libs/mod\_security.so /usr/lib/apache2/mod\_security.so   cp /root/.libs/mod\_security.lai /usr/lib/apache2/mod\_security.la   cp /root/.libs/mod\_security.a /usr/lib/apache2/mod\_security.a   ranlib /usr/lib/apache2/mod\_security.a   chmod 644 /usr/lib/apache2/mod\_security.a   PATH="$PATH:/sbin" ldconfig -n /usr/lib/apache2   ———————————————————————-   Libraries have been installed in:    /usr/lib/apache2 </small>If you ever happen to want to link against installed libraries   in a given directory, LIBDIR, you must either use libtool, and   specify the full pathname of the library, or use the `-LLIBDIR’   flag during linking and do at least one of the following:    – add LIBDIR to the `LD\_LIBRARY\_PATH’ environment variable    during execution    – add LIBDIR to the `LD\_RUN\_PATH’ environment variable    during linking    – use the `-Wl,–rpath -Wl,LIBDIR’ linker flag    – have your system administrator add LIBDIR to `/etc/ld.so.conf’  See any operating system documentation about shared libraries for   more information, such as the ld(1) and ld.so(8) manual pages.   ———————————————————————-   chmod 755 /usr/lib/apache2/mod\_security.so   <span style="color: rgb(51, 51, 255);">apxs:Error: Config file /etc/apache2/httpd2-prefork.conf not found. |
|---|

Do not take care of the error in blue, since the resulting shared library (<small><span style="font-family: Courier New,Courier,monospace;">mod\_security.so</small>) has been automatically copied into <small><span style="font-family: Courier New,Courier,monospace;">/usr/lib/apache2 </small>

Copy then the desired rule set (<span style="font-family: Courier New,Courier,monospace;"><small>modsecurity-general.conf</small> or <small><span style="font-family: Courier New,Courier,monospace;">modsecurity-php.conf</small>) into <small><span style="font-family: Courier New,Courier,monospace;">/etc/apache2</small>

 Edit<span style="font-family: Courier New,Courier,monospace;"> <small>/etc/apache2/httpd.conf</small> and add the following lines at the end of file, it is also recommended to use the rules from [www.GotRoot.com](http://www.gotroot.com/tiki-index.php?page=mod_security+rules)

| <small>LoadModule security\_module /usr/lib/apache2/mod\_security.so    SecFilterEngine On    Include /etc/apache2/modsecurity\_rules/modsecurity-general.conf    Include /etc/apache2/modsecurity\_rules/modsecurity-hardening.conf </small> #rules set found at http://www.gotroot.com/tiki-index.php?page=mod\_security+rules    Include /etc/apache2/modsecurity\_rules/gotroot/apache2-rules.conf    Include /etc/apache2/modsecurity\_rules/gotroot/badips.conf    Include /etc/apache2/modsecurity\_rules/gotroot/blacklist2.conf    Include /etc/apache2/modsecurity\_rules/gotroot/blacklist.conf    Include /etc/apache2/modsecurity\_rules/gotroot/exclude.conf    Include /etc/apache2/modsecurity\_rules/gotroot/jitp.conf    Include /etc/apache2/modsecurity\_rules/gotroot/proxy.conf    Include /etc/apache2/modsecurity\_rules/gotroot/recons.conf    Include /etc/apache2/modsecurity\_rules/gotroot/rootkits.conf    Include /etc/apache2/modsecurity\_rules/gotroot/rules.conf    Include /etc/apache2/modsecurity\_rules/gotroot/useragents.conf |
|---|

 BUT be carefull with <small>modsecurity-hardening.conf  
 </small>

1. This fle has to be tuned for your server: logs files location, advanced rulesets, read carfeully and uncomment TODO if needed
2. As default <small style="font-family: Courier New,Courier,monospace;">mod\_security</small> is in learning mode: it log and let the request pass through (line <small style="font-family: Courier New,Courier,monospace;">SecFilterDefaultAction "pass, log"</small>), recommended as soon as You have a good rulesets <small><span style="font-family: Courier New,Courier,monospace;">SecFilterDefaultAction "deny,log,status:500"</small>

 <small> </small>Restart Apache2 by typing

|\# /etc/init.d/apache2 restart |
|---|

 Now it is time to check if mod\_security is running

| <small>\# tail -f /var/log/apache2/error\_log    \[Mon Aug 21 18:43:38 2006\] \[notice\] Apache/2.0.53 (Linux/SUSE) configured — resuming normal operations    \[Mon Aug 21 19:01:56 2006\] \[notice\] caught SIGTERM, shutting down    \[Mon Aug 21 19:01:57 2006\] \[warn\] Init: Session Cache is not configured \[hint: SSLSessionCache\]    \[Mon Aug 21 19:01:57 2006\] \[warn\] RSA server certificate CommonName (CN) `h790663.serverkompetenz.net’ does NOT match server name!?    \[Mon Aug 21 19:01:57 2006\] \[warn\] RSA server certificate CommonName (CN) `plesk’ does NOT match server name!?    \[Mon Aug 21 19:01:57 2006\] \[notice\] suEXEC mechanism enabled (wrapper: /usr/sbin/suexec2)    \[Mon Aug 21 19:01:57 2006\] \[notice\] mod\_security/1.9.4 configured    \[Mon Aug 21 19:01:57 2006\] \[warn\] RSA server certificate CommonName (CN) `h790663.serverkompetenz.net’ does NOT match server name!?    \[Mon Aug 21 19:01:57 2006\] \[warn\] RSA server certificate CommonName (CN) `plesk’ does NOT match server name!?    \[Mon Aug 21 19:01:57 2006\] \[notice\] Apache/2.0.53 (Linux/SUSE) configured — resuming normal operations</small> |
|---|

links

- <http://www.modsecurity.org/documentation/modsecurity-apache/1.9.3/modsecurity-manual.html#N10083>
- <http://www.modsecurity.org/>