---

title: 'OSGi made easy with Maven Apache Felix'
date: '2009-10-28T18:01:24+01:00'
author: 'Cédric Walter'



header:
  teaser: /assets/images/2011/11/maven-logo-black-on-white-1.png
tags:
    - apache
    - development
    - framework
    - functionality
    - great
    - interface
    - interfaces
    - maven
    - may
    - one
    - plugin
    - service
    - supported
---

> The [Apache Felix #Maven SCR Plugin](http://felix.apache.org/site/apache-felix-maven-scr-plugin.html) is a great tool to ease the development of OSGi components and services. Components and services are defined through annotations and the plugin creates the necessary descriptors for the OSGi Declarative Services, Config Admin and Metatype services. Starting with version 1.4.0 of the plugin, OSGi Declarative Services versions 1.0 and 1.1 are supported.
> 
> #### # ApacheFelixMavenSCRPlugin-Introduction"></a>Introduction
> 
> In OSGi based systems functionality is mainly provided through services. Unlike traditional systems but comparable to Spring, a service is not reqiured to implement a framework defined interface. Instead services implement one or more interfaces, which stipulate the type of service provided. It is the lifetime of the bundle, which defines the lifetime of the service: A service object may be instantiated when the bundle is started and will automatically be removed when the bundle is stopped (and the service has not already been unregistered).