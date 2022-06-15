---
id: 1505
title: Flyweight
date: '2005-01-20T21:35:04+01:00'
author: 'Cédric Walter'



header:
  teaser: /assets/images/2005/01/java-pattern-flyweight.png
---

Use sharing to support large numbers of fine-grained objects efficiently.

![](/assets/images/2005/01/java-pattern-flyweight.png)

# Source Code

```
/**  * Declares an interface through which flyweights can receive and act on  * extrinsic state.  *   * @role __Flyweight  */ public interface Flyweight { 	void sampleOperation(FlyweightContext context); }  /**  * Represents extrinsic state of flyweight(s).  *   * @role __State  */  public interface FlyweightContext { }  /**  * Implements the Flyweight interface and adds storage for intrinsic state, if  * any. Objects of this class must be sharable. Any state it stores must be  * intrinsic (independent of this object's context)  */  public class ConcreteFlyweight implements Flyweight { 	public ConcreteFlyweight(Object key) { 		// initialize internal state 	}  	/** @see patterns.gof.flyweight.Flyweight#sampleOperation(FlyweightContext) */ 	public void sampleOperation(FlyweightContext context) { 		// provide implementation here 	} }  /**  * Creates and manages flyweight objects. Ensures that flyweights are shared  * properly. When a client requests a flyweight, this factory supplies an  * existing instance or creates one, if none exists.  *   * @role __Factory  */  public class FlyweightFactory { 	private HashMap flyweight;  	public FlyweightFactory() { 		flyweight = new HashMap(); 	}  	public Flyweight getFlyweight(Object key) { 		if (flyweight.containsKey(key)) { 			return (Flyweight) flyweight.get(key); 		} else { 			Flyweight newFlyweight = new ConcreteFlyweight(key); 			flyweight.put(key, newFlyweight); 			return newFlyweight; 		} 	}  	/** 	 * @return new instance ofunshared flyweight 	 */ 	public Flyweight getUnsharedConcreteFlyweight() { 		return new UnsharedConcreteFlyweight(); 	} }  /**  * Not all Flyweight subclasses need to be shared  */  public class UnsharedConcreteFlyweight implements Flyweight { 	/** @see patterns.gof.flyweight.Flyweight#sampleOperation(FlyweightContext) */ 	public void sampleOperation(FlyweightContext context) { 		// provide implementation here 	}  } 
```