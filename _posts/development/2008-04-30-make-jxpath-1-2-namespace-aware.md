---
id: 3428
title: 'Make JXPATH 1.2 namespace aware'
date: '2008-04-30T10:49:45+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=3428'

---

Some hours of hard work to find a workaround for this issue…I hope that it will help some of you   
as this simple issue should be quite common.

Here is a sample xml that reveal the issue (sample.xml):

```
 1:  <span class="kwrd"><?<span class="html">xml <span class="attr">version<span class="kwrd">="1.0" <span class="attr">encoding<span class="kwrd">="UTF-8"?<span class="kwrd">>
```

```
<span class="lnum">   2:  <span class="kwrd"><<span class="html">address <span class="attr">xmlns:xsi<span class="kwrd">="http://www.w3.org/2001/XMLSchema-instance"
```

```
 3:          <span class="attr">xmlns<span class="kwrd">="http://www.example.com/test"
```

```
<span class="lnum">   4:          <span class="attr">xsi:schemaLocation<span class="kwrd">="http://www.example.com/test sample.xsd"<span class="kwrd">>
```

```
 5:    <span class="kwrd"><<span class="html">name<span class="kwrd">>name<span class="kwrd"></<span class="html">name<span class="kwrd">>
```

```
<span class="lnum">   6:    <span class="kwrd"><<span class="html">street<span class="kwrd">>street<span class="kwrd"></<span class="html">street<span class="kwrd">>
```

```
 7:    <span class="kwrd"><<span class="html">city<span class="kwrd">>city<span class="kwrd"></<span class="html">city<span class="kwrd">>
```

```
<span class="lnum">   8:    <span class="kwrd"><<span class="html">country<span class="kwrd">>country<span class="kwrd"></<span class="html">country<span class="kwrd">>
```

```
 9:  <span class="kwrd"></<span class="html">address<span class="kwrd">>
```

<style type="text/css">   .csharpcode, .csharpcode pre { 	font-size: small; 	color: black; 	font-family: consolas, "Courier New", courier, monospace; 	background-color: #ffffff; 	/*white-space: pre;*/ } .csharpcode pre { margin: 0em; } .csharpcode .rem { color: #008000; } .csharpcode .kwrd { color: #0000ff; } .csharpcode .str { color: #006080; } .csharpcode .op { color: #0000c0; } .csharpcode .preproc { color: #cc6633; } .csharpcode .asp { background-color: #ffff00; } .csharpcode .html { color: #800000; } .csharpcode .attr { color: #ff0000; } .csharpcode .alt  { 	background-color: #f4f4f4; 	width: 100%; 	margin: 0em; } .csharpcode .lnum { color: #606060; }</style>A very simple XSD schema (sample.xsd)

```
 1:  <span class="kwrd"><?<span class="html">xml <span class="attr">version<span class="kwrd">="1.0" <span class="attr">encoding<span class="kwrd">="UTF-8" <span class="attr">standalone<span class="kwrd">="no"?<span class="kwrd">>
```

```
<span class="lnum">   2:  <span class="kwrd"><<span class="html">xs:schema <span class="attr">xmlns:xs<span class="kwrd">="http://www.w3.org/2001/XMLSchema" 
```

```
 3:             <span class="attr">targetNamespace<span class="kwrd">="http://www.example.com/test" 
```

```
<span class="lnum">   4:             <span class="attr">xmlns<span class="kwrd">="http://www.example.com/test"<span class="kwrd">>
```

```
 5:      <span class="kwrd"><<span class="html">xs:element <span class="attr">name<span class="kwrd">="address"<span class="kwrd">>
```

```
<span class="lnum">   6:          <span class="kwrd"><<span class="html">xs:complexType<span class="kwrd">>
```

```
 7:              <span class="kwrd"><<span class="html">xs:sequence<span class="kwrd">>
```

```
<span class="lnum">   8:                  <span class="kwrd"><<span class="html">xs:element <span class="attr">name<span class="kwrd">="name" <span class="attr">type<span class="kwrd">="xs:string" <span class="kwrd">/>
```

```
 9:                  <span class="kwrd"><<span class="html">xs:element <span class="attr">name<span class="kwrd">="street" <span class="attr">type<span class="kwrd">="xs:string" <span class="kwrd">/>
```

```
<span class="lnum">  10:                  <span class="kwrd"><<span class="html">xs:element <span class="attr">name<span class="kwrd">="city" <span class="attr">type<span class="kwrd">="xs:string" <span class="kwrd">/>
```

```
11:                  <span class="kwrd"><<span class="html">xs:element <span class="attr">name<span class="kwrd">="country" <span class="attr">type<span class="kwrd">="xs:string" <span class="kwrd">/>
```

```
<span class="lnum">  12:              <span class="kwrd"></<span class="html">xs:sequence<span class="kwrd">>
```

```
13:          <span class="kwrd"></<span class="html">xs:complexType<span class="kwrd">>
```

```
<span class="lnum">  14:      <span class="kwrd"></<span class="html">xs:element<span class="kwrd">>
```

```
15:  <span class="kwrd"></<span class="html">xs:schema<span class="kwrd">>
```

<style type="text/css">   .csharpcode, .csharpcode pre { 	font-size: small; 	color: black; 	font-family: consolas, "Courier New", courier, monospace; 	background-color: #ffffff; 	/*white-space: pre;*/ } .csharpcode pre { margin: 0em; } .csharpcode .rem { color: #008000; } .csharpcode .kwrd { color: #0000ff; } .csharpcode .str { color: #006080; } .csharpcode .op { color: #0000c0; } .csharpcode .preproc { color: #cc6633; } .csharpcode .asp { background-color: #ffff00; } .csharpcode .html { color: #800000; } .csharpcode .attr { color: #ff0000; } .csharpcode .alt  { 	background-color: #f4f4f4; 	width: 100%; 	margin: 0em; } .csharpcode .lnum { color: #606060; }</style>And a simple java client, using JUNIT4

```
 1:  import java.io.InputStream;
```

```
<span class="lnum">   2:   
```

```
 3:  import javax.xml.parsers.DocumentBuilder;
```

```
<span class="lnum">   4:  import javax.xml.parsers.DocumentBuilderFactory;
```

```
 5:   
```

```
<span class="lnum">   6:  import org.apache.commons.jxpath.JXPathContext;
```

```
 7:  import org.junit.Assert;
```

```
<span class="lnum">   8:  import org.junit.Test;
```

```
 9:  import org.w3c.dom.Document;
```

```
<span class="lnum">  10:   
```

```
11:  <span class="kwrd">public <span class="kwrd">class JXpath12NameSpaceIssue{
```

```
<span class="lnum">  12:   
```

```
13:    <span class="preproc">@Test
```

```
<span class="lnum">  14:    <span class="kwrd">public <span class="kwrd">void testCountNonWorkingXML() {
```

```
15:      InputStream xmlStream = <span class="kwrd">this.getClass().getResourceAsStream(<span class="str">"/sample.xml");
```

```
<span class="lnum">  16:   
```

```
17:      <span class="kwrd">try {
```

```
<span class="lnum">  18:        JXPathContext context = <span class="kwrd">this.getJXPathContext(xmlStream);
```

```
19:        Double value = (Double)context.getValue(<span class="str">"count(//name)");
```

```
<span class="lnum">  20:        Assert.assertEquals(1, value, 0.0);
```

```
21:      } <span class="kwrd">catch (Exception e) {
```

```
<span class="lnum">  22:        Assert.fail(e.getMessage());
```

```
23:      }
```

```
<span class="lnum">  24:    }
```

```
25:   
```

```
<span class="lnum">  26:    <span class="kwrd">public JXPathContext getJXPathContext(InputStream inputStream) {
```

```
27:      <span class="kwrd">try {
```

```
<span class="lnum">  28:        DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
```

```
29:        factory.setValidating(<span class="kwrd">false); <span class="rem">//This is for xml with DTD only!
```

```
<span class="lnum">  30:        factory.setNamespaceAware(<span class="kwrd">true); <span class="rem">//if namespace in xml, make no difference if true or false
```

```
31:        factory.setFeature(<span class="str">"http://apache.org/xml/features/validation/schema", <span class="kwrd">true);
```

```
<span class="lnum">  32:   
```

```
33:        DocumentBuilder builder = factory.newDocumentBuilder();
```

```
<span class="lnum">  34:        builder.setErrorHandler(<span class="kwrd">new JXPathErrorHandler());
```

```
35:   
```

```
<span class="lnum">  36:        Document document = builder.parse(inputStream);
```

```
37:        JXPathContext context = JXPathContext.newContext(document);
```

```
<span class="lnum">  38:   
```

```
39:        context.setLenient(<span class="kwrd">true);
```

```
<span class="lnum">  40:        <span class="kwrd">return context;
```

```
41:      } <span class="kwrd">catch (Throwable throwable) {
```

```
<span class="lnum">  42:        throwable.printStackTrace();
```

```
43:      }
```

```
<span class="lnum">  44:      <span class="kwrd">return <span class="kwrd">null;
```

```
45:    }
```

<style type="text/css">   .csharpcode, .csharpcode pre { 	font-size: small; 	color: black; 	font-family: consolas, "Courier New", courier, monospace; 	background-color: #ffffff; 	/*white-space: pre;*/ } .csharpcode pre { margin: 0em; } .csharpcode .rem { color: #008000; } .csharpcode .kwrd { color: #0000ff; } .csharpcode .str { color: #006080; } .csharpcode .op { color: #0000c0; } .csharpcode .preproc { color: #cc6633; } .csharpcode .asp { background-color: #ffff00; } .csharpcode .html { color: #800000; } .csharpcode .attr { color: #ff0000; } .csharpcode .alt  { 	background-color: #f4f4f4; 	width: 100%; 	margin: 0em; } .csharpcode .lnum { color: #606060; }</style>This line Double value = (Double)context.getValue(<span class="str">"count(//name)"); will always make the   
test case fail, as the value of context.getValue(<span class="str">"count(//name)"); is 0.0 instead of 1.0

As soon as You remove the namespace from the XML file

```
 1:  <span class="kwrd"><?<span class="html">xml <span class="attr">version<span class="kwrd">="1.0" <span class="attr">encoding<span class="kwrd">="UTF-8"?<span class="kwrd">>
```

```
<span class="lnum">   2:  <span class="kwrd"><<span class="html">address <span class="attr">xmlns:xsi<span class="kwrd">="http://www.w3.org/2001/XMLSchema-instance"
```

```
 3:          <strike><span class="attr">xmlns<span class="kwrd">="http://www.example.com/test"</strike>
```

```
<span class="lnum">   4:          <span class="attr">xsi:schemaLocation<span class="kwrd">="http://www.example.com/test sample.xsd"<span class="kwrd">>
```

<style type="text/css">   .csharpcode, .csharpcode pre { 	font-size: small; 	color: black; 	font-family: consolas, "Courier New", courier, monospace; 	background-color: #ffffff; 	/*white-space: pre;*/ } .csharpcode pre { margin: 0em; } .csharpcode .rem { color: #008000; } .csharpcode .kwrd { color: #0000ff; } .csharpcode .str { color: #006080; } .csharpcode .op { color: #0000c0; } .csharpcode .preproc { color: #cc6633; } .csharpcode .asp { background-color: #ffff00; } .csharpcode .html { color: #800000; } .csharpcode .attr { color: #ff0000; } .csharpcode .alt  { 	background-color: #f4f4f4; 	width: 100%; 	margin: 0em; } .csharpcode .lnum { color: #606060; }</style>The code will return the correct value aka 1.0. The explanation has been found on internet thanks to Google

From <http://www.mail-archive.com/commons-user@jakarta.apache.org/msg07865.html>

> *JXPath 1.2 handles namespaces somewhat differently from JXPath 1.1. It   
> is following the XPath specification more closely. The specification   
> describes the procedure of matching a name by comparing so-called   
> expanded names. An expanded name is a combination of a local name and a   
> namespace URI. In Quote from the spec: "Two expanded-names are equal if   
> they have the same local part, and either both have a null namespace   
> URI or both have non-null namespace URIs that are equal." The notion of   
> default namespace applies to elements of an XML document, but does not   
> apply to XPaths. Quote: "if the QName does not have a prefix, then the   
> namespace URI is null (this is the same way attribute names are   
> expanded). It is an error if the QName has a prefix for which there is   
> no namespace declaration in the expression context*    
> *To remedy the situation, do the following two things:*
> 
> *1. Register the namespace with the JXPathContext:   
> context.registerNamespace("schema", <http://www.verticon.com/react2/schema>;);*

> Namespaces do not apply to objects, unless, of course, those objects are handled by   
> custom NodePointers that are made namespace-aware. The standard distribution of   
> JXPath does not contain any such NodePointers. As far as the interpretation of XPaths   
> on XML documents is concerned, we are bound by the XPath 1.0 standard.   
> On the other hand, the standard does not say anything about applying XPaths to any   
> non-XML object models, therefore we were free to make pretty much arbitrary choices.   
> One of those choices was to ignore namespaces.

More can [also be read here](http://commons.apache.org/jxpath/users-guide.html#Registering%20Namespaces)

> When using namespaces, it is important to remember that XPath matches qualified   
> names (QNames) based on the namespace URI, not on the prefix. Therefore the XPath   
> `"//foo:bar"` may not find a node named "foo:bar" if the prefix `"foo"` in the context   
> of the node and in the execution context of the XPath are mapped to different URIs.   
> Conversely, `"//foo:bar"` will find the node named `"biz:bar"`, if `"foo"` in the   
> execution context and `"biz"` in the node context are mapped to the same URI.
> 
> In order to use a namespace prefix with JXPath, that prefix should be known to   
> JXPathContext. JXPathContext knows about namespace prefixes declared on the   
> document element of the context node (the one passed to   
> `JXPathContext.newContext(node)`), as well as the ones explicitly registered using   
> the [`JXPathContext.registerNamespace(prefix, namespaceURI)`](http://commons.apache.org/jxpath/apidocs/org/apache/commons/jxpath/JXPathContext.html#registerNamespace%28java.lang.String,%20java.lang.String%29) method.

So you should end up with:

```
 1:  Document document = builder.parse(inputStream);
```

```
<span class="lnum">   2:  JXPathContext context = JXPathContext.newContext(document);
```

```
 3:  context.registerNamespace(<span class="str">"schema", <span class="str">"http://www.example.com/test");
```

```
<span class="lnum">   4:  Double value = (Double)context.getValue(<span class="str">"count(//schema:name)");
```

<style type="text/css">   .csharpcode, .csharpcode pre { 	font-size: small; 	color: black; 	font-family: consolas, "Courier New", courier, monospace; 	background-color: #ffffff; 	/*white-space: pre;*/ } .csharpcode pre { margin: 0em; } .csharpcode .rem { color: #008000; } .csharpcode .kwrd { color: #0000ff; } .csharpcode .str { color: #006080; } .csharpcode .op { color: #0000c0; } .csharpcode .preproc { color: #cc6633; } .csharpcode .asp { background-color: #ffff00; } .csharpcode .html { color: #800000; } .csharpcode .attr { color: #ff0000; } .csharpcode .alt  { 	background-color: #f4f4f4; 	width: 100%; 	margin: 0em; } .csharpcode .lnum { color: #606060; }</style>You can also go another way, and remove any namespace by forcing JAXB2 to   
[create XML and DOM without qualified namespace](http://java.sun.com/javase/6/docs/api/javax/xml/bind/annotation/XmlNsForm.html)

In com.example.xml.jaxb.package-info.java.package-info.java  go from

   
 XmlNsForm.QUALIFIED to XmlNsForm.UNQUALIFIED[   ](http://java.sun.com/javase/6/docs/api/javax/xml/bind/annotation/XmlNsForm.html)

```
 1:  @javax.xml.bind.annotation.XmlSchema
```

```
<span class="lnum">   2:  (<span class="kwrd">namespace = <span class="str">"http://www.example.com/test", 
```

```
 3:  elementFormDefault = javax.xml.bind.annotation.XmlNsForm.UNQUALIFIED)
```

```
<span class="lnum">   4:  package com.example.test;
```

<style type="text/css">   .csharpcode, .csharpcode pre { 	font-size: small; 	color: black; 	font-family: consolas, "Courier New", courier, monospace; 	background-color: #ffffff; 	/*white-space: pre;*/ } .csharpcode pre { margin: 0em; } .csharpcode .rem { color: #008000; } .csharpcode .kwrd { color: #0000ff; } .csharpcode .str { color: #006080; } .csharpcode .op { color: #0000c0; } .csharpcode .preproc { color: #cc6633; } .csharpcode .asp { background-color: #ffff00; } .csharpcode .html { color: #800000; } .csharpcode .attr { color: #ff0000; } .csharpcode .alt  { 	background-color: #f4f4f4; 	width: 100%; 	margin: 0em; } .csharpcode .lnum { color: #606060; }</style>