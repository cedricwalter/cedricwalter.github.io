---
id: 547
title: 'Eclipse Plugins'
date: '2004-08-31T22:50:25+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=547'
permalink: /java/eclipse-plugins/
---

My platform of development is Suse 9.0 and #Eclipse 3.0M4

**eclipse launcher (link)**

The best eclipse launcher available as today, written in smalltalk by my friends of [www.xdreamteam.ch](http://www.xdreamteam.ch/)

[**xdt Eclipse Launcher V1.0 RC2**](java/eclipse/EclipseLauncherinstall.zip) (761 KB) ist ein Tool fÃ¼r #Java-Entwickler die mit #Eclipse arbeiten.Mit dem xdt Eclipse Launcher verwalten Sie ihre Workspaces und kÃ¶nnen diese von einem Ort aus starten. Der xdt #Eclipse Launcher startet als System-Tray Program, von wo Sie die MÃ¶glichkeit haben neue Definitionen einzutragen, oder die bestehenden Definitionen einfach und schnell zu starten.

**HP Nimius/E3 launcher**

> Plugin for starting a HP Nimius application, Hewlett Packard Nimius informations can be found at [www.hpnimius.com](http://www.hpnimius.com/) This plugin was originally developped at work, and has been totally rewritten to avoid any copyright infrigment.  
>  Why is the difference with a #Eclipse Launcher? you have 3 icons…
> 
> **Installation:**
> 
> - Unzip the zip file in your eclipse/plugins/ directory and restart eclipse.
> - **Or** point the download manager to this url [http://www.waltercedric.com/java/eclipse/plugins/site.xml](http://www.chez.com/waltercedric/java/eclipse/plugins/site.xml) **SOON**
> 
> **Prerequisite:** This plugin assume that you are using a project for E3 which have the following structure (but you can change the default location of components):
> 
> |  |  |  |
> |---|---|---|
> | Project XXX/etc | contains xml files, properties |  |
> | Project XXX/log |  |  |
> | Project XXX/lib | contains applications E3 services and java code |  |
> 
> **Greetings:**  
>  This plugin is based on Tomcat sysdeo plugin and was simply extended. Since the original code is based on the MIT licence, I am also giving you this code under the same conditions.
> 
>  **The MIT Licence:**  
>  Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following   
>  conditions:  
>  The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.  
>  THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
> 
> **Tutorials:**

[http://www.awprofessional.com/articles/article.asp?p=31789&amp;seqNum=1](http://www.awprofessional.com/articles/article.asp?p=31789&seqNum=1)

FAQ:

**Starting Tomcat in eclipse**

i get the following exceptions:

> > > 2004-07-14 14:40:55,540 0 \[main\] ERROR org.apache.commons.digester.Digester – Digester.getParser:   
> > >  javax.xml.parsers.ParserConfigurationException: AElfred parser is namespace-aware  
> > >  at com.icl.saxon.aelfred.SAXParserFactoryImpl.newSAXParser(SAXParserFactoryImpl.java:37)  
> > >  at org.apache.commons.digester.Digester.getParser(Digester.java:686)  
> > >  at org.apache.commons.digester.Digester.getXMLReader(Digester.java:902)  
> > >  at org.apache.commons.digester.Digester.parse(Digester.java:1548)  
> > >  at org.apache.catalina.startup.Catalina.start(Catalina.java:449)  
> > >  at org.apache.catalina.startup.Catalina.execute(Catalina.java:400)  
> > >  at org.apache.catalina.startup.Catalina.process(Catalina.java:180)  
> > >  at sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)  
> > >  at sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:39)  
> > >  at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:25)  
> > >  at java.lang.reflect.Method.invoke(Method.java:324)  
> > >  at org.apache.catalina.startup.Bootstrap.main(Bootstrap.java:203

“With tomcat 4.x, things become simpler, but this version of tomcat uses the jaxp sax parser factory. Moreover, this version of tomcat requires a validating parser, and it doesn”t check whether the parser actually is validating. If the AElfred parser is supplied in the system properties, an exception will be thrown when tomcat attempts to set validating on. I”d recommend using the (validating) xerces 1.4.4 sax parser rather than AElfred parser. It”s not safe to rely on the default parser, by not setting system properties, because it”s very likely there are several versions of the JAXP classes in the classpath, and who knows when you might get another one. The practice by the distributors of XML tools to include implementations of the JAXP classes in their own jar files is, of course, rather insane, but that”s the way it is.

 Do this,  
 System.setProperty(“javax.xml.parsers.SAXParserFactory”,  
 “org.apache.xerces.jaxp.SAXParserFactoryImpl”);=20  
 but also do this  
 System.setProperty(“org.xml.parsers.sax.parser”,  
 “org.apache.xerces.parsers.SAXParser”);=20  
 since many third party tools base the parser choice on =  
 “org.xml.parsers.sax.parser” rather than use the SAXParserFactory.

 Regards,  
 Daniel Parker[  
 http://presentingxml.sourceforge.net/”](http://presentingxml.sourceforge.net/)

in eclipse add the following key to the launcher in VM arguments

-Djavax.xml.transform.TransformerFactory=com.icl.saxon.TransformerFactoryImpl -Djavax.xml.parsers.DocumentBuilderFactory=org.apache.xerces.jaxp.DocumentBuilderFactoryImpl  
 -Djavax.xml.parsers.SAXParserFactory=org.apache.xerces.jaxp.SAXParserFactoryImpl  
 -Dorg.xml.parsers.sax.parser=org.apache.xerces.parsers.SAXParser