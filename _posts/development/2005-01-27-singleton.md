---
id: 1527
title: Singleton
date: '2005-01-27T19:55:43+01:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=1527'

header:
  teaser: /assets/images/2005/01/java-pattern-singleton.png
---

Ensure a class only has one instance, and provide a global point of access to it.

Statically Initialized   
The singleton class is implemented by defining a static field that is statically initialized (that is, the field is initialized when the class is initialized). This has the advantage that invocations of the method used to access the singleton do not incur the overhead of checking whether or not the instance has been created.   
  
Dynamically Initialized   
The singleton class is implemented by defining a static field that is dynamically initialized (that is, the field is initialized the first time its value is requested). This has the advantage that the singleton is not allocated unless it is needed, potentially reducing memory usage.

![](/assets/images/2005/01/java-pattern-singleton.png)

# Links

- [When is a singleton not a singleton](http://www.javaworld.com/javaworld/jw-01-2001/jw-0112-singleton.html)? (Javaworld)  
    

# Source Code

```
/**  * Represents a singleton.  */ public class Singleton { 	/** 	 * Holds the singleton instance. 	 */ 	private static Singleton instance;  	/** 	 * constructor must be private to avoid automatic creation of default 	 * constructor by the compiler 	 *   	 */ 	private Singleton() { 		super(); 	}  	/** 	 * Returns the singleton instance. 	 *  	 * synchronized to prevent race problem 	 *  	 * @return the singleton instance 	 */ 	public static synchronized Singleton getInstance() { 		if (instance == null) { 			instance = new Singleton(); 		} 		return instance; 	} } 
```

  Singleto