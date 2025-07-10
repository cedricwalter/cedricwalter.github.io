---
title: Apache POI contribution patches
summary: "The [Apache POI][2] Project 's mission is to create and maintain #Java APIs for manipulating various file formats based upon the Office Open XML standards (OOXML) and Microsoft 's OLE 2 Compound Document format (OLE2). In short, you can read and write MS Excel files using #Java. In addition, you can read and write MS Word and MS PowerPoint files using #Java. [Apache POI][2] is your #Java Excel solution (for Excel 97-2008). We have a complete API for porting other OOXML and OLE2 formats and welcome others to participate."
type: posts
date: 2013-06-01T09:34:03+00:00
url: apache-poi-contribution-patches/
tags:
  - java
categories:
  - Developer
---
The [Apache POI][2] Project 's mission is to create and maintain #Java APIs for manipulating various file formats based upon the Office Open XML standards (OOXML) and Microsoft 's OLE 2 Compound Document format (OLE2). In short, you can read and write MS Excel files using #Java. In addition, you can read and write MS Word and MS PowerPoint files using #Java. [Apache POI][2] is your #Java Excel solution (for Excel 97-2008). We have a complete API for porting other OOXML and OLE2 formats and welcome others to participate.

### My Contributions to the Open Source project Apache POI: adding missing Excel functions in #Java

[**Bug 54673**][3] **&#8211; [PATCH] Simple wildcard support in HLOOKUP, VOOLKUP, MATCH, COUNTIF**
Add support for wildcards
? (question mark) Any single character
&#160;&#160;&#160; For example, sm?th finds "smith" and "smyth"
* (asterisk) Any number of characters
&#160;&#160;&#160; For example, *east finds "Northeast" and "Southeast"
~ (tilde) followed by ?, *, or ~A question mark, asterisk, or tilde
&#160;&#160;&#160; For example, fy91~? finds "fy91?"

[**Bug 54723**][4] **&#8211; [PATCH] Support for percentage in VALUE() function
** support for VALUE("30%") or VALUE("30 %") as excel support this

[**Bug 54720**][5] **&#8211; [PATCH] Support for Row/Col Area Range like 8:8 or H:H
** Range support in the form of NameType.ROW:NameType.ROW&#160;&#160;&#160; like 8:8 or 6:8

[**Bug 55037**][6] **&#8211; [PATCH] patch for missing function DELTA**
Add support for function Delta
<http://office.microsoft.com/en-001/excel-help/delta-HP005209057.aspx>

[**Bug 55036**][7] **&#8211; [PATCH] patch for missing function Dec2HEx**
Converts a decimal number to hexadecimal.
<http://office.microsoft.com/en-001/excel-help/dec2hex-HP005209054.aspx>

[**Bug 55038**][8] **&#8211; [PATCH] patch for missing function Dec2Oct**
Converts a decimal number to octal.
<http://office.microsoft.com/en-001/excel-help/dec2oct-HP005209055.aspx>

[**Bug 55041**][9] **&#8211; [PATCH] patch for missing function CODE
** Returns a numeric code for the first character in a text string. The returned code corresponds to the character set used by your computer.
<http://office.microsoft.com/en-001/mac-excel-help/code-function-HA102927539.aspx>

[**Bug 55042**][10] **&#8211; [PATCH] patch for missing function COMPLEX**
Converts real and imaginary coefficients into a complex number of the form x + yi or x + yj.
<http://office.microsoft.com/en-001/excel-help/complex-HP005209019.aspx>

[**Bug 55043**][11] **&#8211; [PATCH] patch for missing function QUOTIENT**
Returns the integer portion of a division. Use this function when you want to discard the remainder of a division.
<http://office.microsoft.com/en-001/excel-help/quotient-HP005209227.aspx>

[**Bug 55047**][12] **&#8211; [PATCH] patch for missing function REPT**
Repeats text a given number of times. Use **REPT** to fill a cell with a number of instances of a text string.
<http://office.microsoft.com/en-001/mac-excel-help/rept-function-HA102927993.aspx>

[**Bug 55055**][13] **&#8211; [PATCH] patch for missing function Bin2Dec**
Converts a binary number to decimal.
Number cannot contain more than 10 characters (10 bits). The most significant bit of number is the sign bit. The remaining 9 bits are magnitude bits. Negative numbers are represented using two 's-complement notation.
<http://office.microsoft.com/en-001/excel-help/bin2dec-HP005209002.aspx>

[**Bug 55057**][14] **&#8211; [PATCH] patch for missing function Hex2Dec**
Converts a hexadecimal number to decimal.
Number cannot contain more than 10 characters (40 bits). The most significant bit of number is the sign bit. The remaining 39 bits are magnitude bits. Negative numbers are represented using two 's-complement notation.
<http://office.microsoft.com/en-001/excel-help/hex2dec-HP005209111.aspx>

[**Bug 55058**][15] **&#8211; [PATCH] patch for missing function FactDouble
** Returns the double factorial of a number.      **
<http://office.microsoft.com/en-001/excel-help/factdouble-HP005209085.aspx>**

[**Bug 55079**][16] **&#8211; [PATCH] patch for missing function IMAGINARY
** Returns the imaginary coefficient of a complex number in x + yi or x + yj text format.
<http://office.microsoft.com/en-001/excel-help/imaginary-HP005209120.aspx>

[**Bug 55080**][17] **&#8211; [PATCH] patch for missing function IMREAL**
Returns the real coefficient of a complex number in x + yi or x + yj text format.
<http://office.microsoft.com/en-001/excel-help/imreal-HP005209131.aspx>

 **[**Bug 55081**][18] &#8211; [PATCH] patch for missing function WEEKNUM**
Returns a number that indicates where the week falls numerically within a year.
<http://office.microsoft.com/en-001/excel-help/weeknum-HP005209337.aspx>

[**Bug 55082**][19] **&#8211; [PATCH] patch for missing function ROMAN**
Converts an arabic numeral to roman, as text.
<http://office.microsoft.com/en-001/excel-help/roman-HP005209238.aspx>

**More to come soon!**

 [1]: /2013/06/apache-poi-logo.webp
 [2]: http://poi.apache.org/
 [3]: https://issues.apache.org/bugzilla/show_bug.cgi?id=54673
 [4]: https://issues.apache.org/bugzilla/show_bug.cgi?id=54723
 [5]: https://issues.apache.org/bugzilla/show_bug.cgi?id=54720
 [6]: https://issues.apache.org/bugzilla/show_bug.cgi?id=55037
 [7]: https://issues.apache.org/bugzilla/show_bug.cgi?id=55036
 [8]: https://issues.apache.org/bugzilla/show_bug.cgi?id=55038
 [9]: https://issues.apache.org/bugzilla/show_bug.cgi?id=55041
 [10]: https://issues.apache.org/bugzilla/show_bug.cgi?id=55042
 [11]: https://issues.apache.org/bugzilla/show_bug.cgi?id=55043
 [12]: https://issues.apache.org/bugzilla/show_bug.cgi?id=55047
 [13]: https://issues.apache.org/bugzilla/show_bug.cgi?id=55055
 [14]: https://issues.apache.org/bugzilla/show_bug.cgi?id=55057
 [15]: https://issues.apache.org/bugzilla/show_bug.cgi?id=55058
 [16]: https://issues.apache.org/bugzilla/show_bug.cgi?id=55079
 [17]: https://issues.apache.org/bugzilla/show_bug.cgi?id=55080
 [18]: https://issues.apache.org/bugzilla/show_bug.cgi?id=55081
 [19]: https://issues.apache.org/bugzilla/show_bug.cgi?id=55082
