---
id: 3258
title: 'Debugging PHP scripts in Eclipse'
date: '2008-03-10T20:39:44+01:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=3258'

header:
  teaser: /assets/images/2008/03/3433d4e09c154bdab168cf2c1c685f0d.jpg
---

Debugger are full-featured PHP debugger engine. They are interactive tools that allows   
you to debug PHP scripts locally or remotely, from an IDE or from the console. There is 3   
debugger on the market, **XDEBUG** (open source) , **ZEND** (closed source), **DBG** (commercial   
but source code available) by luck all are free 🙂

I recommend you to develop with **Eclipse PDT:** The #Eclipse Foundation has released the 1.0   
of the #Eclipse PHP Development Tools (PDT) project. #Eclipse PDT is a set of tools and   
frameworks that enhance the productivity of developers using PHP, a popular, general-purpose   
dynamic language that is especially suited for development of web applications and web services.

I have prepared a HowTo also for eclipse PDT, but it is still not ready for prime time.

# DBG**

|  | 1. Native debugger. 2. Debug locally or remotely 3. JIT. When enabled it can start debugging Just In Time when an error happens. 4. Supports back-trace, e.g. displays a list of all procedures with their local variables, 5. Step-in, step-out, step-over, run to cursor, change execution point withing current scope…), evaluate any valid php expression(s) or inspect arrays, classes and simple variables, modify their values on the fly and even create any new variables. 6. Supports conditional breakpoints and even global ones 7. Allows to change execution point 8. has embedded profiler, 9. Allows multiple debugger processes running simultaneously. 10. Has open COM interfaces for integration with win32-based 3rd party IDEs. 11. Linux, BSD, SunOs, MacOs and Win32 are supported. |
|---|---|

# XDEBUG**

|  | **Xdebug** provides:  - [stack traces](http://xdebug.org/docs/stack_trace) and [function traces](http://xdebug.org/docs/execution_trace) in error messages with:      - full [parameter display](http://xdebug.org/docs/display) for user defined functions     - function name, file name and line indications     - support for member functions - memory allocation - protection for infinite recursions - [profiling](http://xdebug.org/docs/profiler) information for PHP scripts - [code coverage analysis](http://xdebug.org/docs/code_coverage) - capabilities to [debug your scripts interactively](http://xdebug.org/docs/remote) with a debug client |
|---|---|

# ZEND**

Debugger Extension can be downloaded from [Zend Downloads](http://downloads.zend.com/pdt/server-debugger/)

| <div class="wlWriterSmartContent" id="scid:32a77b7a-5ea4-47be-84fc-ff7471384e10:f804bb84-f797-4734-a4c4-652dea294f1f" style="padding-right: 0px; display: inline; padding-left: 0px; padding-bottom: 0px; margin: 0px; padding-top: 0px">[![](/assets/images/2008/03/3433d4e09c154bdab168cf2c1c685f0d.jpg)](http://www.zend.com/) | Zend debugger in #Eclipse also works for MySQL statements! |
|---|---|

# **

## Installing ZEND debugger in #Eclipse

The Zend Executable Debugger #Eclipse plugin adds PHP debugging capabilities to the #Eclipse environment.

# Add the following remote location to the eclipse manager, even if you have eclipse PDT**

```
<a href="http://downloads.zend.com/pdt">http://downloads.zend.com/pdt</a>
```

# [![zend.debugger.in.eclipse](/assets/images/2008/03/zend.debugger.in_.eclipse_thumb.gif)](/assets/images/2008/03/zend.debugger.in_.eclipse.gif) **

# **

## ZEND debugging mysql statement

You’ll have to configured the PHP binary included with the ZEND debugger to be able to debug SQL queries. Search for a PHP.ini in your eclipse/plugins directory, you’ll find 2 files.

Ex:

- <font face="Courier New" size="1">E:\\eclipse\\bin\\PDT\\plugins\\org.zend.php.debug.debugger.win32.x86\_5.2.12.v20071210\\resources\\php4\\php.ini
- <font face="Courier New" size="1">E:\\eclipse\\bin\\PDT\\plugins\\org.zend.php.debug.debugger.win32.x86\_5.2.12.v20071210\\resources\\php5\\php.ini

And add these line in one of these files according to your PHP version

<font face="Courier New" size="2">extension\_dir = "**xampp\_path**/php/ext"   
extension="**xampp\_path**/php/ext/php\_mysql.dll"   
extension="**xampp\_path**/php/ext/php\_mysqli.dll"   
include\_path =".;**xampp\_path**/php;"

## Installing Zend debugger server in XAMPP

Please note that the Zend Executable Debugger is not available from the #Eclipse PDT update Manager, so download ZEND debugger (Free) from [Zend Downloads](http://downloads.zend.com/pdt/server-debugger/), you must extract the zip ZendDebugger-5.2.12-cygwin\_nt-i386.zip.

In the zip file, you’ll see multiple directories   
![zend.debugger.install](/assets/images/2008/03/zend.debugger.install.gif)

Use the version that match the one in XAMPP (you have note at chapter A, for me 5.2.3 so copy files from 5\_2\_x\_comp) and copy the dll in   
# xampp\_path**\\php\\extensions\\

[![zend.debugger.php.5.2.x](/assets/images/2008/03/zend.debugger.php_.5.2.x_thumb.gif)](/assets/images/2008/03/zend.debugger.php_.5.2.x.gif)

Open the file php.ini located at **xampp\_path**\\apache\\bin\\php.ini   
and add these keys if they do not already exist:

[XDebug\]   
;; Only Zend OR (!) XDebug   
;zend\_extension\_ts="\\xampp\\php\\ext\\php\_xdebug.dll"   
zend\_extension\_ts="\\xampp\\php\\extensions\\ZendDebugger.dll"   
zend\_debugger.allow\_hosts=127.0.0.1   
zend\_debugger.expose\_remotely=always

```
; this is to see output while debugging implicit_flush = On 
```

# Switch off all other debugger as it may conflict with Zen**

```
eaccelerator.enable="0"
```

```
;extension=dbg.dll
```

```
:extension=xdebug.dll
```

Restart apache, check for proper operations by going to http://localhost

| Note |
|---|
| Apache will crash if you have more than one key in php.ini with the name zend\_extension\_ts, so uncomment all other entries! |

##  

## Debugging PHP in #Eclipse PDT

Go to Debug dialog for creating and managing run configurations

- Choose as **Server Debugger**: Zend Debugger   
     [![debug.as.zend.eclipse](/assets/images/2008/03/debug.as_.zend_.eclipse_thumb.gif)](/assets/images/2008/03/debug.as_.zend_.eclipse.gif)
- Choose as **PHP Server**: XAMPP
- **File** should point to the root of your #Joomla! installation ex: /PROD2/index.php because in XAMPP htdocs directory I have a subdirectory /PROD2 with #Joomla! 1.5 inside
- Remove the option **Break at First Line**
- Keep **URL** to Auto Generate

As seen in the screen shot below

[![zend.debugging.eclipse.joomla](/assets/images/2008/03/zend.debugging.eclipse.joomla_thumb.gif)](/assets/images/2008/03/zend.debugging.eclipse.joomla.gif)

Now click on button configure

- Give a **Name**, not important here, lets keep XAMPP
- Enter the root URL that points to the document root of this server, for me it is <http://localhost/PROD2>

[![zend.debugging.eclipse.joomla_1](/assets/images/2008/03/zend.debugging.eclipse.joomla_1_thumb.gif)](/assets/images/2008/03/zend.debugging.eclipse.joomla_1.gif)

Go to tab "Path Mapping"

- As **Path on server** enter E:\\xampp\\htdocs\\PROD2
- Choose **Path in Workspace** /PROD2

[![zend.debugging.eclipse.joomla_2](/assets/images/2008/03/zend.debugging.eclipse.joomla_2_thumb.gif)](/assets/images/2008/03/zend.debugging.eclipse.joomla_2.gif)

Confirm all windows, and you can now start the debugger by clinking on debug button [![zend.debugging.eclipse.joomla_3](/assets/images/2008/03/zend.debugging.eclipse.joomla_3_thumb.gif)](/assets/images/2008/03/zend.debugging.eclipse.joomla_3.gif)

You’re done, you can now set breakpoint and debug #Joomla! or your code easily

[![zend.debugging.eclipse.joomla_4](/assets/images/2008/03/zend.debugging.eclipse.joomla_4_thumb.gif)](/assets/images/2008/03/zend.debugging.eclipse.joomla_4.gif)

## Installing #Joomla in #Eclipse

We will now install #Joomla 1.0.15 and #Joomla 1.5.1 (newest version at time of writing into eclipse)   
Create two new PHP project in your workspace, one name joomla1.0.x the other joomla1.5.x for example

Attention: the root workspace must be located at xampp\_path/htdocs

## Setting Zend Debugger in #Eclipse PDT for #Joomla!

In the PHP perspective of eclipse, go to the menu debug