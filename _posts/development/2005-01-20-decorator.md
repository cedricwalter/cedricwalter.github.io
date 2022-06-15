---
id: 1491
title: Decorator
date: '2005-01-20T21:19:08+01:00'
author: 'Cédric Walter'



header:
  teaser: /assets/images/2005/01/java-pattern-decorator.png"
tags:
    - functionality
---

Attach additional responsibilities to an object dynamically. Decorators provide a flexible alternative to subclassing for extending functionality.

![](/assets/images/2005/01/java-pattern-decorator.png)

# Source Code

```
/**  * Defines the interface for objects that can have responsibilities added to the  * dynamically.  *   * @role __Component  */ public abstract class Component { 	/** 	 * Sample operation. 	 */ 	public abstract void doSomeStuff(); }  /**  * Defines an object to which additional responsibilities can be attached.  */  public class ConcreteComponent extends Component { 	/** @see patterns.gof.decorator.Component#doSomeStuff() */ 	public void doSomeStuff() { 		// provide implementation here 	} }  /**  * Adds responsibilities to the component.  */  public class ConcreteDecorator extends Decorator { 	public ConcreteDecorator(Component decorateMe) { 		super(decorateMe); 	}  	/** 	 * Behavior added by decorator. 	 */ 	private void addedBehavior() { 		// some extra functionality goes here 	}  	public void doSomeStuff() { 		super.doSomeStuff(); 		addedBehavior(); 	} }  /**  * Maintains the reference to a Component object and defines an interface that  * conforms to Component's interface  *   * @role __Decorator  */  public abstract class Decorator extends Component { 	/** reference to the decorated component */ 	protected Component component;  	/** 	 * @param decorateMe 	 *            component to decorate 	 */ 	public Decorator(Component decorateMe) { 		this.component = decorateMe; 	}  	public void doSomeStuff() { 		component.doSomeStuff(); 	} } 
```