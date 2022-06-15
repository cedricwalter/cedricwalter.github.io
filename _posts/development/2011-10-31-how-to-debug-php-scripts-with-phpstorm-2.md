---
id: 7266
title: 'How To Debug PHP scripts with PhpStorm'
date: '2011-10-31T20:55:56+01:00'
author: 'Cédric Walter'



header:
teaser: /assets/images/2011/10/phpstorm_header.png
tags:
- php
---

# ![phpstorm_header](/assets/images/2011/10/phpstorm_header.png "phpstorm_header")**

# [JetBrains PhpStorm](http://www.jetbrains.com/phpstorm/)** is a commercial IDE for PHP built on JetBrains’ IntelliJ IDEA platform.

> [PhpStorm](http://www.jetbrains.com/phpstorm/) provides intelligent editor for PHP code, HTML and #JavaScript with
> on-the-fly code analysis and automated refactoring for PHP and #JavaScript code. Code completion supports PHP 5.3
> including namespaces and closures.

Edit php.ini, located at /xampp/php/php.ini if you use [XAMPP](http://www.apachefriends.org/en/xampp.html)

Turn the following properties

```
implicit_flush = On  ; xdebug.remote_enable  ; Type: boolean, Default value: 0  ; This switch controls whether Xdebug should try to contact a debug client which is listening on the  ; host and port as set with the settings xdebug.remote_host and xdebug.remote_port. If a connection  ; can not be established the script will just continue as if this setting was Off.  xdebug.remote_enable = 1  ; xdebug.remote_handler  ; Type: string, Default value: dbgp  ; Can be either 'php3' which selects the old PHP 3 style debugger output, 'gdb' which enables the GDB  ; like debugger interface or 'dbgp' - the brand new debugger protocol. The DBGp protocol is more  ; widely supported by clients. See more information in the introduction for Remote Debugging.  xdebug.remote_handler = "dbgp"  ; xdebug.remote_host  ; Type: string, Default value: localhost  ; Selects the host where the debug client is running, you can either use a host name or an IP  ; address.  xdebug.remote_host = "localhost"  ; xdebug.remote_port  ; Type: integer, Default value: 9000  ; The port to which Xdebug tries to connect on the remote host. Port 9000 is the default for both the  ; client and the bundled debugclient. As many clients use this port number, it is best to leave this  ; setting unchanged.  xdebug.remote_port = 9000
```

Restart Apache by using XAMPP control panel. [Xdebug](http://xdebug.org) should now be correctly configured, You can
check this installation by using the [online installation check page here](http://xdebug.org/find-binary.php)

[![xampp_restart_apache](/assets/images/2011/10/xampp_restart_apache_thumb.png "xampp_restart_apache")](http://www.waltercedric.com/images/1f48e0fcd6c8_12F9D/xampp_restart_apache.png)

Start [PhpStorm](http://www.jetbrains.com/phpstorm/) and under settings, add a new server if it is not already done   
[![phpStorm_new_php_server](/assets/images/2011/10/phpStorm_new_php_server_thumb.png "phpStorm_new_php_server")](http://www.waltercedric.com/images/1f48e0fcd6c8_12F9D/phpStorm_new_php_server.png)

Then check that you use the default port for [Xdebug](http://xdebug.org)

[![phpStorm_xdebug_settings](/assets/images/2011/10/phpStorm_xdebug_settings_thumb.png "phpStorm_xdebug_settings")](http://www.waltercedric.com/images/1f48e0fcd6c8_12F9D/phpStorm_xdebug_settings.png)

You should now be read to debug your PHP scripts, start the zero configuration feature
of [PhpStorm](http://www.jetbrains.com/phpstorm/) by clicking the phone to make it
green. [PhpStorm](http://www.jetbrains.com/phpstorm/) is now listening to incoming debug connections.

[![phpStorm_debug_stop](/assets/images/2011/10/phpStorm_debug_stop_thumb.png "phpStorm_debug_stop")](http://www.waltercedric.com/images/1f48e0fcd6c8_12F9D/phpStorm_debug_stop.png)

[![phpStorm_debug_start](/assets/images/2011/10/phpStorm_debug_start_thumb.png "phpStorm_debug_start")](http://www.waltercedric.com/images/1f48e0fcd6c8_12F9D/phpStorm_debug_start.png)

Add now add as many breakpoint in your code as required.

Visit this page: [bookmarklets generator](http://www.jetbrains.com/phpstorm/marklets/) , you’ll have to save these
bookmark to start/stop a debugging session by controlling the [Xdebug](http://xdebug.org) cookie.

Now every time you want to debug a page, all you have to do is to use one of these bookmarks!

[![phpstorm_debug_bookmarklets](/assets/images/2011/10/phpstorm_debug_bookmarklets_thumb.png "phpstorm_debug_bookmarklets")](http://www.waltercedric.com/images/1f48e0fcd6c8_12F9D/phpstorm_debug_bookmarklets.png)

Enjoy debugging sessions with ease!