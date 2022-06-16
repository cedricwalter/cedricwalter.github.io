---

title: 'Parser incompatibility or Parser order in Classpath'
date: '2004-08-31T22:43:11+02:00'
author: 'Cédric Walter'



---

# Parser incompatibility

Parser order in Classpath, classloader, loading sequence in a highly complex and distributed environment.

Especially in a distributed environment, order of parser found is a major problem during the walk of the JVM in
classpath. For example, Different versions of the parser SAX are co-existing in the classpath due to components
restrictions :

- Parser sax 1.0 is required for BEA Weblogic 6.0 and Xerces 1.3.1
- Parser sax 2.0 is required for Xerces 1.4 and crimson
- Crimson is required for APACHE SOAP 2.2
- You may want to use Apache soap client because it still accept to run with a JVM 1.2.2

Try to draw a graph or parser dependancy: determine for all components in your application which DOM level is required.

> Solution 1: Only use one parser [Apache Xerces](http://xml.apache.org/xerces-j/) (XML) and only one
> transformer [Saxon](http://saxon.sourceforge.net/) (XST) or [Apache Xalan](http://xml.apache.org/xalan-j/) (XST). It
> is
> not always possible since some 3rd party tools, like weblogic.jar or oracle.jar are coming with some crap inside…
>
> > For example weblogic 6.0 contains a SAX 1.0 (<http://edocs.bea.com/wls/docs61/notes/migrate60to61.html>) But
> > weblogic 6.1 a SAX 2.0!!!!!
> >
> > - Extract from BEA website:  
      > > *"Apache XML Parser  
      > > The XML WebLogic Server 6.0 -> 6.1 parser has been updated and is now based on the Apache Xerces 1.3.1 parser.
      The parser implements version 2 of the SAX and DOM interfaces. Users who used older parsers that were shipped in
      previous versions may receive deprecation messages."*
> > - Solutions :  
      > > – Displace the jar file in the classpath, so it will be load after the sax2 compliant parser….
> > - And ?  
      > > – Just for being confused, with no change at all, your code may be run if you use BEA Weblogic 6.1!!!!
> > - What to retain ?   
      > > – Order of packages loading is very important when working in JAVA.  
      > > – If you are lost, and want to know when a package or class is loaded, you can start java with this
      parameter: *-verbose* the default output is System.out  
      > > – You need to check carefully all preconditions before using a new 3rd party component, in order to see if you
      will not be incompatible with others 3rd party tools.

> Solution 2: Even if you have multiple parser in classpath, you can still force javax.xml factory to use the
> parser/transformer you want…
>
> Force Factory: create 3 files and put them in front of classpath in a directory META-INF/services/
>
> - File named: *javax.xml.parsers.DocumentBuilderFactory* may contains *
    org.apache.xerces.jaxp.DocumentBuilderFactoryImpl* (or *org.apache.crimson.jaxp.DocumentBuilderFactoryImpl)*
> - File named: *javax.xml.parsers.SAXParserFactory* may contains *org.apache.xerces.jaxp.SAXParserFactoryImpl* (or *
    com.icl.saxon.aelfred.SAXParserFactoryImpl*)
> - File named: *javax.xml.transform.TransformerFactory* may contains *com.icl.saxon.TransformerFactoryImpl*
>
> OR create 3 java variables when your start your java process:
>
> *java* -D*javax.xml.parsers.DocumentBuilderFactory=org.apache.xerces.jaxp.DocumentBuilderFactoryImpl
-Djavax.xml.parsers.SAXParserFactory=org.apache.xerces.jaxp.SAXParserFactoryImpl
-Djavax.xml.transform.TransformerFactory*=*com.icl.saxon.TransformerFactoryImpl*
>
> OR use system variables, in your code you can type, for each variable (not very flexible):
>
> *System.setProperty("avax.xml.transform.TransformerFactory*","*com.icl.saxon.TransformerFactoryImpl")*