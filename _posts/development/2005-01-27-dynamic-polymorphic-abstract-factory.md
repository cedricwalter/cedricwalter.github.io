---
id: 1525
title: 'Dynamic polymorphic abstract factory'
date: '2005-01-27T19:07:08+01:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=1525'

header:
  teaser: /assets/images/2005/01/java-pattern-dynamic-polymorphical-abstractfactory.png
---

This package contains a dynamic polymorphic factory…

- New class can be add dynamically to the factory… even during runtime (dynamic)
- Factory methods are in a separate class as virtual functions. (polymorphism)
- Different types of factories can be subclassed from the basic factory.. (abstract)
- Useful iin case of licence problem, since Concrete classes are created at runtime, and only need to reside in classpath (If they are not present the code still compile). Below, the example show multiple authorization and autorisation scheme, that can be switche on/off very fast.
- Factory can be driven with an external condition (properties, registry ….)

   
Notice also that the specific concrete classes are dynamically loaded on demand…(class.forname())

![](/assets/images/2005/01/java-pattern-dynamic-polymorphical-abstractfactory.png)

# Source Code

```
/**  * Creation date: (7/19/2002 2:50:45 PM)  *   * @author: Cedric Walter  */ public interface AuthentificationIF {          public boolean Authentificate(HttpServletRequest req,                        HttpServletResponse resp);        public boolean hasAutorisation(HttpServletRequest req,                        HttpServletResponse resp);}  public abstract class AuthentificationA implements AuthentificationIF { 
```

```
/**   * AuthentificationA constructor comment.   */         public AuthentificationA() {                 super();        }          
```

```
/**   * Authentificate method comment.   */         
```

```
public abstract boolean Authentificate(                        
```

```
javax.servlet.http.HttpServletRequest req,                        
```

```
javax.servlet.http.HttpServletResponse resp);
```

```
}  abstract class AuthentificationFactoryA {          private static java.util.Map factories = new java.util.HashMap();        
```

```
/**   * ComputeFactory constructor comment.   */         public AuthentificationFactoryA() {                 super();        }          public static void addFactory(String id, AuthentificationFactoryA f) {                 factories.put(id, f);        }          public static final AuthentificationIF createAuthentification(String id)                        

	throws FactoryCreationException {                 if (!factories.containsKey(id)) {                         try {                                 // Load dynamically                                 Class.forName(id);                        

			} 

		       catch (ClassNotFoundException e) {                                 throw new FactoryCreationException(id);                        

			}                         // verify that it has been stored                         if (!factories.containsKey(id))                                

			throw new FactoryCreationException(id);                

		       }                 return ((AuthentificationFactoryA) factories.get(id)).getAuthentification();        

	}          protected abstract AuthentificationIF getAuthentification();}  /**  * concrete class of the abstract factory   */ public class MyAuthentificationFactory extends AuthentificationFactoryA {          public MyAuthentificationFactory() {                 super();        }          /**   * not use since it is subclass   */         protected AuthentificationIF getAuthentification() {                 return null;        } }  /**  * @author: Cedric Walter  */ public class NimiusAuthentification extends AuthentificationA implements                 AuthentificationIF {           private static class Factory extends AuthentificationFactoryA {                 protected AuthentificationIF getAuthentification() {                         return new NimiusAuthentification();                }         }          static {                 AuthentificationFactoryA.addFactory("com.waltercedric.gof.pattern.factory.NimiusAuthentification",                                new NimiusAuthentification.Factory());        }          
```

```
/**   * Local constructor comment.   */         public NimiusAuthentification() {                 super();        }          
```

```
/**   * Authenficate method comment.   */         public boolean Authentificate(javax.servlet.http.HttpServletRequest req, 

				 javax.servlet.http.HttpServletResponse resp) 

	{                 //do some stuff                 return true;        }          public boolean hasAutorisation(javax.servlet.http.HttpServletRequest req, 

				  javax.servlet.http.HttpServletResponse resp) 

	{                  //do some stuff                 return true;        } }  /**  * @author: Cedric Walter  */ public class NoAuthentification extends AuthentificationA implements                 AuthentificationIF {          private static class Factory extends AuthentificationFactoryA {                 protected AuthentificationIF getAuthentification() {                         return new NoAuthentification();                }         }          static {                 AuthentificationFactoryA.addFactory(                                "com.waltercedric.gof.pattern.factory.NoAuthentification",                                new NoAuthentification.Factory());        }          /**   * Local constructor comment.   */         public NoAuthentification() {                 super();        }          /**   * Authenficate method comment.   */         public boolean Authentificate(javax.servlet.http.HttpServletRequest req,

                        javax.servlet.http.HttpServletResponse resp) {                 return true;        }          /**   * hasAutorisation method comment.   */         public boolean hasAutorisation(javax.servlet.http.HttpServletRequest req, 

                       javax.servlet.http.HttpServletResponse resp) {                 return true;        } }  /**  * @author: Cedric Walter  */ public class ObtreeAuthentification extends AuthentificationA implements                 AuthentificationIF {          private static class Factory extends AuthentificationFactoryA {                 protected AuthentificationIF getAuthentification() {                         return new ObtreeAuthentification();                }         }          static {                 AuthentificationFactoryA.addFactory(                                "com.waltercedric.gof.pattern.factory.ObtreeAuthentification",                                new ObtreeAuthentification.Factory());        }          /**   * Local constructor comment.   */         public ObtreeAuthentification() {                 super();        }          /**   * Authenficate method comment.   */         public boolean Authentificate(javax.servlet.http.HttpServletRequest req,

                        javax.servlet.http.HttpServletResponse resp) {                 return true;        }          /**   * hasAutorisation method comment.   */         public boolean hasAutorisation(javax.servlet.http.HttpServletRequest req,

                        javax.servlet.http.HttpServletResponse resp) {                 return true;        } } 
```