---
id: 2429
title: 'Playing with Axis C++ and Apache 1.3.1'
date: '2006-04-05T21:56:24+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=2429'
permalink: /java/playing-with-axis-c-and-apache-1-3-1/
image: /wp-content/uploads/2006/04/AxisCpp-lib-directory.png
tags:
    - framework
    - java
---

Here is a How to since it take me a very long time to install something which should have been trivial….  
For the benefit of the community, I am publishing it here on my free time 🙂 … Enjoy…

**Apache Axis and Apache Axis C++ are implementation of the SOAP ("Simple Object Access Protocol") submission to W3C. From the W3C draft specification:**

*SOAP is a lightweight protocol for exchanging structured information in a decentralized, distributed environment. It is an XML based protocol that consists of three parts: an envelope that defines a framework for describing what is in a message and how to process it, a set of encoding rules for expressing instances of application-defined datatypes, and a convention for representing remote procedure calls and responses.*

**Axis C/C++ (Axis CPP)** *is a non-Java implementation of Axis. At its core Axis CPP has a C++ runtime engine. The provided tooling allows you to create C++ client-side stubs and server-side skeletons. The server skeletons can be deployed to either a full Apache web server using the supplied apache module or a "simple\_axis\_server" – which is a simple HTTP listener (designed to help you test your services).*

    
<big>1. Download</big> either [Apache 2.0 or Apache 1.3](http://httpd.apache.org/)  
unpack it to<span style="FONT-STYLE: italic"> c:\\apache

<big>2. Download </big>the [latest version of Axis C++](http://ws.apache.org/axis/cpp/index.html)  
unpack it to <span style="FONT-STYLE: italic">c:\\axis

Note: try to avoid space in path, it has always been proved to be a mess under Windows.

<big>3. Open and add following lines</big> at the end of Apache config file

| Apache 1.3in <span style="FONT-STYLE: italic">c:\\apache\\conf\\http.conf | Apache 2.0in <span style="FONT-STYLE: italic">c:\\apache\\conf\\http.conf |
|---|---|
| LoadModule axis\_module ../axis/lib/modules/mod\_axis.dll   &lt;Location /axis&gt;   SetHandler axis   &lt;/Location&gt; | LoadModule axis\_module ../axis/lib/mod\_axis2.dll   &lt;Location /axis&gt;   SetHandler axis   &lt;/Location&gt; |

<big>4. Now it is starting to be interesting,</big> both <span style="FONT-STYLE: italic">mod\_axis.dll and <span style="FONT-STYLE: italic">mod\_axis2.dll have dependencies to an old dll which do no more exist since windows 98 ! <span style="FONT-STYLE: italic">msjava.dll

You need to copy from Internet [<span style="FONT-STYLE: italic">msjava.dll](http://www.google.com/url?sa=U&start=1&q=http://www.dll-files.com/dllindex/dll-files.shtml%3Fmsjava&e=9797) into <span style="FONT-STYLE: italic">c:\\axis\\lib  
You also need to copy the xerces parser [<span style="FONT-STYLE: italic">xerces-c\_2\_2\_0.dll](http://webzila.com/dll/2/xerces-c_2_2_0.zip) into <span style="FONT-STYLE: italic">c:\\axis\\lib

![Axiss C++ required library in lib directory](/assets/images/2006/04/AxisCpp-lib-directory.png)  
<span style="FONT-STYLE: italic">  
<big>5. Create a file <span style="FONT-STYLE: italic">axiscpp.conf </big>(or search in zip distributions for a template of it) and copy it into <span style="FONT-STYLE: italic">c:\\axis  
Modify all path to DLL accordingly. Note that relative path or absolute path also work.  


| Example of <span style="FONT-STYLE: italic">axiscpp.conf |
|---|
| \# The comment character is ‘#’   \#Available directives are as follows   \#(Some of these directives may not be implemented yet)   \#   \#WSDDFilePath:The path to the server wsdd   \#LogPath:The path to the axis log    \#ClientLogPath:The path to the axis client log   \#ClientWSDDFilePath:The path to the client wsdd   \#Transport\_http:The HTTP transport library   \#Transport\_smtp:The SMTP transport library   \#XMLParser:The xml parser library   \#NodeName:Node name   \#ListenPort:Listening port   \#Channel\_HTTP:The HTTP transport channel library   \#Channel\_HTTP\_SSL:The HTTP transport secure channel library LogPath:c:\\axis\\logs\\AxisLog.txt   WSDDFilePath:c:\\axis\\conf\\server.wsdd   XMLParser:c:\\axis\\lib\\AxisXMLParser.dll   Transport\_http:c:\\axis\\lib\\HTTPTransport.dll   Channel\_HTTP:c:\\axis\\lib\\HTTPChannel.dll   Channel\_HTTP\_SSL:c:\\axis\\lib\\HTTPSSLChannel.dll |

<big>6. Go into <span style="FONT-STYLE: italic">c:/apache</big> and create a small batch file there <span style="FONT-STYLE: italic">

| <span style="FONT-STYLE: italic">example of start script for Apache <span style="FONT-STYLE: italic">startApache.bat |
|---|
| SET AXIS\_HOME=c:\\axis   SET AXISCPP\_DEPLOY=c:\\axis   SET PATH=%PATH%;c:\\axis\\lib   SET LIB\_PATH=%LIB\_PATH%;c:\\axis\\lib apache.exe   pause |

<big>7. create a file</big> in <span style="FONT-STYLE: italic">c:\\axis\\conf\\server.wsdd

| Example of <span style="FONT-STYLE: italic">c:\\axis\\conf\\server.wsdd |
|---|
| &lt;?xml version="1.0" encoding="UTF-8"?&gt;   &lt;!– The Entity, wspath in the following internal subset allows setting a     path for the webservices location –&gt;   &lt;!DOCTYPE vars \[ &lt;!ENTITY wspath "/home/sanjaya/Axis/webservices/"&gt; \]&gt; &lt;deployment xmlns="http://xml.apache.org/axis/wsdd/"     xmlns:C="http://xml.apache.org/axis/wsdd/providers/C"     xmlns:CPP="http://xml.apache.org/axis/wsdd/providers/CPP"&gt;    &lt;globalConfiguration&gt;    &lt;/globalConfiguration&gt;    &lt;service name="transportProperties"     provider="CPP:DOCUMENT"     description="This is a simple test"&gt;    &lt;parameter name="className"     value="c:\\axis\\dll\\calculator.dll"/&gt;    &lt;parameter name="allowedMethods" value="add subtract"/&gt;    &lt;/service&gt;   &lt;/deployment&gt; |

<big>Use script 6</big>. to start Apache, if you get an exception, read it or verify DLL dependencies with [DLL dependency walker](http://www.google.com/url?sa=U&start=1&q=http://www.dependencywalker.com/&e=9797)

Go In a Browser and type [http://localhost/axis](http://localhost/axisâ€?)  
 **![Axis-cpp-Working-in-apache](/assets/images/2006/04/Axis-cpp-Working-in-apache.gif)**