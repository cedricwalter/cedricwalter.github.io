---
id: 3916
title: 'Preventing SQL Injection Attacks on your Joomla! Websites'
date: '2008-11-12T06:42:45+01:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=3916'
permalink: /joomla/preventing-sql-injection-attacks-on-your-joomla-websites/
image: /wp-content/uploads/2008/11/image004_thumb.png
tags:
    - attack
    - book
    - box
    - break
    - business
    - character
    - characters
    - checked
    - cms
    - code
    - Coding
    - companies
    - HowTo
    - joomla
    - linux
    - security
    - vulnerabilities
---

**This article is extracted from:** [**Joomla! Web Security**](http://www.packtpub.com/joomla-web-security-guide/book/hp/joomlaweb-abr/0908)

Secure your #Joomla! website from common security threats with this easy-to-use guide

| [![image004](/assets/images/2008/11/image004_thumb.png)](/assets/images/2008/11/image004.png) | 1. Learn how to secure your #Joomla! websites 2. Real-world tools to protect against hacks on your site 3. Implement disaster recovery features 4. Set up SSL on your site 5. Covers #Joomla! 1.0 as well as 1.5 |
|---|---|

For more information, please visit:  
<http://www.PacktPub.com/joomla-web-security-guide/book>

Joomla!, a very popular content management system (CMS) is as you may know an easy-to-deploy-and-use content management system. This ease of use has lent itself to rapid growth of both the CMS and extensions for it. You can install it on almost any host, running #Linux or Windows. This highly versatile software has found itself in such lofty places as large corporate web portals, and humble places such as the simple blog.

Joomla! itself is inherently safe, but misconfigurations of the CMS, vulnerable components, hosts that are poorly configured, and weak passwords can all contribute to the downfall of your site. Hence, it’s always better to ensure the security of your site.

**In this article by Tom Canavan, we will take a look at how SQL injection attacks can occur to your #Joomla website, how we can test for SQL injection attacks, and how to stop SQL injection.**

### Introduction

Mark Twain once said, “There are only two certainties in life-death and taxes.” Even in web security there are two certainties: It’s not “if you are attacked”, but “when and how” your site will be taken advantage of.

There are several types of attacks that your #Joomla! site may be vulnerable to such as CSRF, Buffer Overflows, Blind SQL Injection, Denial of Service, and others that are yet to be found.

The top issues in PHP-based websites are:

- Incorrect or invalid (intentional or unintentional) input
- Access control vulnerabilities
- Session hijacks and attempts on session IDs
- SQL Injection and Blind SQL Injection
- Incorrect or ignored PHP configuration settings
- Divulging too much in error messages and poor error handling
- Cross Site Scripting (XSS)
- Cross Site Request Forgery, that is CSRF (one-click attack)

### SQL Injections

SQL databases are the heart of Joomla! CMS. The database holds the content, the users’ IDs, the settings, and more. To gain access to this valuable resource is the ultimate prize of the hacker. Accessing this can gain him/her an administrative access that can gather private information such as usernames and passwords, and can allow any number of bad things to happen. When you make a request of a page on Joomla!, it forms a “query” or a question for the database. The database is unsuspecting that you may be asking a malformed question and will attempt to process whatever the query is. Often, the developers do not construct their code to watch for this type of an attack. In fact, in the month of February 2008, twenty-one new SQL Injection vulnerabilities were discovered in the Joomla! land. The following are some examples presented for your edification. Using any of these for any purpose is solely your responsibility and not mine:

**Example 1**

```
index.php?option=com_****&Itemid=name&cmd=section§ion=-
```

```
000<span class="rem">/**/union+select<span class="rem">/**/000,111,222,
```

```
      concat(username,0x3a,password),0,
```

```
    concat(username,0x3a,password)<span class="rem">/**/from<span class="rem">/**/jos_users/*
```

**Example 2**

```
index.php?option=com_****&task=****&Itemid=name&catid=97&aid=-
```

```
9988<span class="rem">/**/union<span class="rem">/**/select<span class="rem">/**/
```

```
concat(username,0x3a,password),0x3a,password,
```

```
0x3a,username,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0<span class="rem">/**/
```

```
from<span class="rem">/**/jos_users/*
```

<style type="text/css">     .csharpcode, .csharpcode pre { 	font-size: small; 	color: black; 	font-family: consolas, "Courier New", courier, monospace; 	background-color: #ffffff; 	/*white-space: pre;*/ } .csharpcode pre { margin: 0em; } .csharpcode .rem { color: #008000; } .csharpcode .kwrd { color: #0000ff; } .csharpcode .str { color: #006080; } .csharpcode .op { color: #0000c0; } .csharpcode .preproc { color: #cc6633; } .csharpcode .asp { background-color: #ffff00; } .csharpcode .html { color: #800000; } .csharpcode .attr { color: #ff0000; } .csharpcode .alt  { 	background-color: #f4f4f4; 	width: 100%; 	margin: 0em; } .csharpcode .lnum { color: #606060; }</style>Both of these will reveal, under the right set of circumstances, the usernames and passwords in your system. There is a measure of protection in Joomla! 1.0.13, with an encryption scheme that will render the passwords useless. However, it does not make sense to allow extensions that are vulnerable to remain. Yielding ANY kind of information like this is unacceptable.

The following screenshot displays the results of the second example running on a test system with the vulnerable extension. The two pieces of information are the username that is listed as Author, and the Hex string (partially blurred) that is the hashed password:

You can see that not all MD5 hashes can be broken easily. Though it won’t be shown here, there is a website available where you enter your hash and it attempts to crack it. It supports several popular hashes.

When I entered this hash (of a password) into the tool, I found the password to be Anthony.

[![image001](/assets/images/2008/11/image001_thumb.png)](/assets/images/2008/11/image001.png)

It’s worth noting that this hash and its password are a result of a website getting broken into, prompting the user to search for the “hash” left behind, thus yielding the password.

The important news, however, is that if you are using Joomla! 1.0.13 or greater, the password’s hash is now calculated with a “salt”, making it nearly impossible to break.  
However, the standard MD5 could still be broken with enough effort in many cases. For more information about salting and MD5 see: <http://www.php.net/md5>.

For an interesting read on salting, you may wish to read this link:www.governmentsecurity.org/forum/lofiversion/index.php/t19179.htm

SQL Injection is a query put to an SQL database where data input was expected AND the application does not correctly filter the input. It allows hijacking of database information such as usernames and passwords, as we saw in the earlier example.

Most of these attacks are based on two things. First, the developers have coding errors in their code, or they potentially reused the code from another application, thus spreading the error. The other issue is the inadequate validation of input. In essence, it means trusting the users to put in the RIGHT stuff, and not put in queries meant to harm the system.  
User input is rarely to be trusted for this reason. It should always be checked for proper format, length, and range.

There are many ways to test for vulnerability to an SQL Injection, but one of the most common ones is as follows:

[![image003](/assets/images/2008/11/image003_thumb.png)](/assets/images/2008/11/image003.png)

In some cases, this may be enough to trigger a database to divulge details. This very simplistic example would not work in the login box that is shown. However, if it were presented to a vulnerable extension in a manner such as the following it might work:

<form method="post"><input></input>  
</form>This “posting” method (presented as a very generic exploit and not meant to work per se in Joomla!) will attempt to break into the database by putting forward queries that would not necessarily be noticed.

But why 1=1- – ? According to PHP.NET, “It is a common technique to force the SQL parser to ignore the rest of the query written by the developer with– which is the comment sign in SQL.”

You might be thinking, “So what if my passwords are hashed? They can get them but they cannot break them!”

This is true, but if they wanted it badly, nothing keeps them from doing something such as this:

```
INSERT INTO jos_mydb_users
```

```
(<span class="str">'email',<span class="str">'password',<span class="str">'login_id',<span class="str">'full_name')
```

```
VALUES (<span class="str">'johndoe@email.com',<span class="str">'default',<span class="str">'Jdoe',<span class="str">'John Doe');--';
```

<style type="text/css">     .csharpcode, .csharpcode pre { 	font-size: small; 	color: black; 	font-family: consolas, "Courier New", courier, monospace; 	background-color: #ffffff; 	/*white-space: pre;*/ } .csharpcode pre { margin: 0em; } .csharpcode .rem { color: #008000; } .csharpcode .kwrd { color: #0000ff; } .csharpcode .str { color: #006080; } .csharpcode .op { color: #0000c0; } .csharpcode .preproc { color: #cc6633; } .csharpcode .asp { background-color: #ffff00; } .csharpcode .html { color: #800000; } .csharpcode .attr { color: #ff0000; } .csharpcode .alt  { 	background-color: #f4f4f4; 	width: 100%; 	margin: 0em; } .csharpcode .lnum { color: #606060; }</style>This code has a potential if inserted into a query such as this:

```
http:<span class="rem">//www.yourdomain/vulnerable_extension//index.php?option=com_vulext 
```

```
INSERT INTO jos_mydb_users
```

```
(<span class="str">'email',<span class="str">'password',<span class="str">'login_id',<span class="str">'full_name')
```

```
VALUES (<span class="str">'johndoe@email.com',<span class="str">'default',<span class="str">'Jdoe',<span class="str">'John Doe');--';
```

<style type="text/css">     .csharpcode, .csharpcode pre { 	font-size: small; 	color: black; 	font-family: consolas, "Courier New", courier, monospace; 	background-color: #ffffff; 	/*white-space: pre;*/ } .csharpcode pre { margin: 0em; } .csharpcode .rem { color: #008000; } .csharpcode .kwrd { color: #0000ff; } .csharpcode .str { color: #006080; } .csharpcode .op { color: #0000c0; } .csharpcode .preproc { color: #cc6633; } .csharpcode .asp { background-color: #ffff00; } .csharpcode .html { color: #800000; } .csharpcode .attr { color: #ff0000; } .csharpcode .alt  { 	background-color: #f4f4f4; 	width: 100%; 	margin: 0em; } .csharpcode .lnum { color: #606060; }</style>Again, this is a completely bogus example and is not likely to work. But if you can get an SQL DB to divulge its information, you can get it to “accept” (insert) information it should not as well.

- - - - - -

**This article is extracted from:** [**Joomla! Web Security**](http://www.packtpub.com/joomla-web-security-guide/book/hp/joomlaweb-abr/0908)

Secure your Joomla! website from common security threats with this easy-to-use guide

| [![image004](/assets/images/2008/11/image004_thumb.png)](/assets/images/2008/11/image004.png) | 1. Learn how to secure your Joomla! websites 2. Real-world tools to protect against hacks on your site 3. Implement disaster recovery features 4. Set up SSL on your site 5. Covers Joomla! 1.0 as well as 1.5 |
|---|---|

For more information, please visit:  
[http://www.PacktPub.com/joomla-web-security-guide/book](http://www.packtpub.com/joomla-web-security-guide/book/hp/joomlaweb-abr/0908)

- - - - - -

### Testing for SQL Injections

The following examples are known good tests to detect some SQL Injection vulnerabilities.

Check for input vulnerabilities using “Single Quotes”, as used in the following login form:

*howdy’* OR *1=1- –*

This popular method is sometimes used in the form of a URL and you may see it appended to the INDEX.PHP in your log as follows:

*/index.php?id=howdy’* OR *1=1 – –*

You may also wish to try inputting one of these popular methods:

*‘ OR 1=1 – –*

*” OR 1=1 – –*

*‘OR ‘x’=’x*

There are several more methods and this only scratches the surface of SQL Injections. They attempt to pass unchecked INPUT to the database, which will try to divulge an answer, rather than providing no answer.

Note that you may see the use of the keyword UNION in your logs (see earlier examples). This is usually an early indicator that an attempt is being made on your site.

To learn more about SQL Injections from a developer’s point of view, please refer to the following:

<http://us3.php.net/manual/en/security.database.sql-injection.php>

### A Few Methods to Prevent SQL Injections

This is somewhat beyond the scope of this article, but the following are some things to touch upon:

Developers should ALWAYS validate the user input, that is, test for type, length, format, and range, and always consider what malicious input may be thrown at the queries.

DO NOT assume anything about the user input. For example, you shouldn’t assume that an upload box for images won’t be used for some other purpose. You should restrict the uploads to file types that you want to accept.

How will your application behave if a malicious user enters a 100-megabyte JPG where your application expects a username?

What will happen to your site if a DROP TABLE statement is embedded in a text field? What about a database command such as INSERT?

The answer is: Always enforce the size. If the maximum input is 2 Meg, then enforce it. Don’t allow bigger inputs because your users might be unhappy. If the maximum character length should be eight, do not allow inputs beyond it. This will prevent a buffer overfl ow, and other madness.

Test the content of the string variables and accept only the expected values. Reject entries that contain binary data, escape sequences, and comment characters. This is a common technique.

DO NOT ALLOW SQL statements directly from the user input. Provide a solid user interface that validates the users’ input and then uses it.

String concatenation is the primary point of entry for a script injection. So NEVER concatenate user input that is not validated, and has been checked to ensure that it has no nasty payloads.

ALWAYS assign user rights within your SITE (including you) with the LEAST privileges needed. This keeps down the possibility of using the unnecessary privileges to take over the site.

NEVER connect to the database as an admin, superadmin, or the database owner. Always keep these particular users for administrative use only.

### And According to PHP.NET

“Check if the given input has the expected data type. PHP has a wide range of input validating functions, from the simplest ones found in Variable Functions and in Character Type Functions (for example, is\_numeric(), and ctype\_digit() respectively), and onwards to the Perl compatible Regular Expressions support.

If the application waits for numerical input, consider verifying data with is\_numeric(), or silently change its type using settype(), or use its numeric representation by sprintf().”

There are commercially available tools such as Accunetix that can test for SQL Injections, and several sites that list recent and past extension vulnerabilities.

In essence, test your system using some of the methods mentioned, provide it an input that is totally off the wall, or find some of the exploits and try them on your test server.

Lastly, keeping your system patched is probably one of the best methods to prevent SQL Injections.

### About the Author

A twenty-three year veteran of the Computer Business, and a Data Center Technology Consultant to Fortune-1000 Companies, **Tom Canavan** is a Certified Ethical Hacker and has a degree in Robotics and Numerical Control. He is author of the book Dodging the Bullets – A Disaster Preparation Guide for Joomla! Based Websites.