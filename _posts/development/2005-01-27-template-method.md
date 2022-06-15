---
id: 1531
title: 'Template method'
date: '2005-01-27T20:00:33+01:00'
author: 'Cédric Walter'



header:
  teaser: /assets/images/2005/01/java-pattern-templatemethod.png
---

Defines the skeleton of an algorithm in an operation, deferring some steps to subclasses. Template Method lets subclasses refine certain steps of an algorithm without changing the algorithm’s structure.

![](/assets/images/2005/01/java-pattern-templatemethod.png)

# Source Code

```
/**  

* This class defines abstract primitive operations  that concrete  

* subclasses define to implement steps of an algorithm. Implements a template  

* method defining the skeleton of an algorithm.  

*   

* @role __TemplateContext  */  public abstract class Context {  /**   

* Primitive operation.   

*/  public abstract void doPrimitiveOperation();  /**   

* Defines the skeleton of an algorithm. Calls primitive operations as well   

* as operations defined in AbstractClass or those in other objects.   

*/  public void templateMethod() {  // put your code here  doPrimitiveOperation();  // put your code here  } }  /**  

* Implements the primitive operations to carry out subclass-specific steps of  

* the algorithm.  

*/  public class ConcreteClass extends Context {  /** 

@see patterns.gof.templatemethod.Context#doPrimitiveOperation() 

*/ public void doPrimitiveOperation() {    // provide implementation here  } } 
```

  Template