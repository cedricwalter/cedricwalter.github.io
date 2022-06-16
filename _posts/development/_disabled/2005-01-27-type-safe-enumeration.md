---

title: 'Type Safe Enumeration'
date: '2005-01-27T20:06:17+01:00'
author: 'Cédric Walter'



header:
  teaser: /assets/images/2005/01/java-pattern-type-safe-enumeration.png
tags:
    - corresponding
---

Create a class that approximates an equivalent Pascal enumeration or C enum. A specific enumeration will be represented by a class with specific instances corresponding to each element of the enumerations and public static final fields to access the instances.

- Existing in #Java Tiger 1.5

- Elements are ordered and comparable
- Enumeration elements are serializable
- Enumeration element Name lookup is supported
- Methods sequencing is included

![](/assets/images/2005/01/java-pattern-type-safe-enumeration.png)

# Source Code

```
/  * Type Safe Enumeration: Colors elements: Red, Blue, Green, Yellow, White  */ public final class Colors implements Comparable, Serializable { 	/ 	 * The map of enumeration elements to names. 	 */ 	private static HashMap nameLookup = new HashMap(5);  	/ 	 * The array of enumeration elements. 	 */ 	private static Colors[] ordinalLookup = new Colors[5];  	/ 	 * The "Red" enumeration element 	 */ 	public static final Colors Red = new Colors("Red", 0);  	/ 	 * The "Blue" enumeration element 	 */ 	public static final Colors Blue = new Colors("Blue", 1);  	/ 	 * The "Green" enumeration element 	 */ 	public static final Colors Green = new Colors("Green", 2);  	/ 	 * The "Yellow" enumeration element 	 */ 	public static final Colors Yellow = new Colors("Yellow", 3);  	/ 	 * The "White" enumeration element 	 */ 	public static final Colors White = new Colors("White", 4);  	/ 	 * The string representation of the enumeration. 	 */ 	private final String printName;  	/ 	 * The ordinal value of the enumeration used for comparison purposes. 	 */ 	private final int ordinal;  	/ 	 * Create an enumeration element. Prevent instances of this class from being 	 * created externally. 	 *  	 * @param name 	 *            the name of the enumeration element 	 * @param position 	 *            the ordinal position of the enumeration element 	 */ 	private Colors(String name, int position) { 		this.ordinal = position; 		this.printName = name; 		ordinalLookup[position] = this; 		nameLookup.put(name, this); 	}  	/ 	 * Compare two enumeration elements 	 *  	 * @param arg 	 *            the object to compare this to 	 * @return the difference between the ordinal values 	 * @see java.lang.Comparable#compareTo(Object) 	 */ 	public int compareTo(Object arg) { 		return this.ordinal - ((Colors) arg).ordinal; 	}  	/ 	 * Return the string representation of the enumeration. 	 *  	 * @return the name of the enumeration element 	 */ 	public String toString() { 		return printName; 	}  	/ 	 * Resolve the enumeration element. 	 *  	 * @return the resolved enumeration element 	 * @throws ObjectStreamException 	 *             if the enumeration element could not be resolved. 	 */ 	private Object readResolve() throws ObjectStreamException { 		return ordinalLookup[ordinal]; 	}  	/ 	 * Return the first enumeration element 	 *  	 * @return the first enumeration element 	 */ 	public static Colors first() { 		return ordinalLookup[0]; 	}  	/ 	 * Return the last enumeration element 	 *  	 * @return the last enumeration element 	 */ 	public static Colors last() { 		return ordinalLookup[ordinalLookup.length - 1]; 	}  	/ 	 * Return the enumeration element preceding this element 	 *  	 * @return the enumeration element preceding this element 	 */ 	public Colors predecessor() { 		return (this == first()) ? null : ordinalLookup[ordinal - 1]; 	}  	/ 	 * Return the enumeration element following this element 	 *  	 * @return the enumeration element following this element 	 */ 	public Colors successor() { 		return (this == last()) ? null : ordinalLookup[ordinal + 1]; 	}  	/ 	 * Return the enumeration element with the given name 	 *  	 * @param name 	 *            the name of the enumeration element to find 	 * @return the named enumeration element 	 */ 	public static Colors valueOf(String name) { 		return (Colors) nameLookup.get(name); 	}  } 
```