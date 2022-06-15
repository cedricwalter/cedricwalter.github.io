---

title: 'A patch to protect Mambo administrator login page'
date: '2005-02-26T22:58:56+01:00'
author: 'Cédric Walter'



tags:
    - cryptographic
    - installation
    - joomla
---

 A Patch to protect Mambo administrator login page againstbrute force password attack!

# How it is working?**

1. It is a component com\_hashcash containing alls script to create a MD5 key in PHP and javascript, and verifying a challenge.
2. The server is sending inside a hidden field a MD5 value which is directly linked to the server, user sessionid, time.
3. The client will have to encrypt with a MD5 javascript (costly cpu operation for a spammer) the value of this hidden field and send it back to the server as hidden field name.
4. If the test is not succesful, the spammer will get banned for 60seconds.
5. All successful/unsucessful submit are logged in a file.
6. When the file get bigger as 64kb, an email is sent to the admin.

# Installation:**  
 This component has no administration panel! Simply overwrite the file on Your server with the content of the zip. A component package install is on the way.

# Original Mambo file affected for the login page:**

- /administrator/index.php <- add verification of the challenge
- administrator\\templates\\mambo\_admin\\login.php <- insert hidden fields, and reference to MD5 javascript
- administrator\\templates\\mambo\_admin\_blue\\login.php <- insert hidden fields, and reference to MD5 javascript

 Future?  


- Many cryptographic algorithm, SHA1 on the way,
- A mambots for changing on the fly all FORM before submit,
- Ako\_comment has been already patched, and tested -> Waiting OK from Arthur Konze for releasing.
- Ako\_guestbok must be changed  
   

[](http://www.waltercedric.com/pass/Mambo_hashcash_login.zip)link in download section…  
