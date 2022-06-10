---
id: 1513
title: Prototype
date: '2005-01-20T21:43:24+01:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=1513'
permalink: /development/prototype/
header:
  teaser: /assets/images/2005/01/java-pattern-prototype.png
tags:
    - interface
---

Specify the kinds of objects to create using a prototypical instance, and create new objects by copying this prototype.

![](/assets/images/2005/01/java-pattern-prototype.png)

# Source Code

```
/**  * Declares interface for cloning itself.  * @role __Prototype  */ public interface Prototype {         Prototype createCopy();}  /**  * Implements an operation for cloning itself.  */ public class ConcretePrototype1 implements Prototype {         protected ConcretePrototype1(ConcretePrototype1 prototype)          {            // initialize new copy with prototype         }          public Prototype createCopy() {            return new ConcretePrototype1(this);                 } }  /**  * Implements an operation for cloning itself.  */ public class ConcretePrototype1 implements Prototype {         protected ConcretePrototype1(ConcretePrototype1 prototype) {           // initialize new copy with prototype         }          public Prototype createCopy() {                 return new ConcretePrototype1(this);                 } } 
```