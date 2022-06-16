---

title: 'Abstract factory'
date: '2005-01-20T21:31:29+01:00'
author: 'Cédric Walter'



header:
  teaser: /assets/images/2005/01/java-pattern-abstractfactory.png
tags:
    - corresponding
---

Provide an interface for creating families of related or dependent objects without specifying their concrete classes.

![](/assets/images/2005/01/java-pattern-abstractfactory.png)

# Source Code

```java
/  * Abstract factory declares an interface for operations that create abstract  * product objects.  * 
  * @role __Factory  */ public interface AbstractFactory {        
   /   * Creates abstract product   */         ProductA createProductA();        /   * Creates abstract product   */         
   ProductB createProductB();}  /  * Abstract factory declares an interface for operations that create abstract  * product objects.  *   
   * @role __Factory  */ public interface AbstractFactory {         /   * Creates abstract product   */         ProductA createProductA();        /   * Creates abstract product   */         ProductB createProductB();}  /  * Abstract product - an interface for a type of Product object.  *   * @role __Product  * @see AbstractFactory  */ public interface ProductA {          /*   * add product method declarations here   */ }  /  * Concrete Factory implements operations of AbstractFactory to create Concrete  * product objects.  */ public class MyFactory implements AbstractFactory {          /   * Creates concrete product ConcreteProduct1   */         public ProductA createProductA() {                 return new ConcreteProduct1();        }          /   * Creates concrete product ConcreteProduct2   */         public ProductB createProductB() {                 return new ConcreteProduct2();        }  }  /  * Concrete product defines a product object to be created by the corresponding  * concrete factory.  *   * @see MyFactory  */ public class ConcreteProduct1 implements ProductA {  }  /  * Concrete product defines a product object to be created by the corresponding  * concrete factory.  *   * @see MyFactory  */ public class ConcreteProduct2 implements ProductB {  } 
```