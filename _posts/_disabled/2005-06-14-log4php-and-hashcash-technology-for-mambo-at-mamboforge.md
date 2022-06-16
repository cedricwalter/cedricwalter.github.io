---

title: 'Log4PHP and Hashcash technology for Mambo at Mamboforge'
date: '2005-06-14T21:00:26+02:00'
author: 'Cédric Walter'



tags:
    - cryptographic
    - encryption
    - integration
---

I commit the latest source code of my 2 components for Mambo, You can no grab the latest source code version at <http://mamboforge.net>

- [Log4PHP](http://mamboforge.net/projects/log4php4mambo/): Integration of the famous [LOG4J](logging.apache.org/log4j) technology into Mambo Help any components, modules, mambots to have a way to create accurate informations in logs files: concepts: <http://logging.apache.org/log4j/docs/> Origine of code: <http://www.vxr.it/log4php/>   
    Attention: current config file of log4php 4 mambo create a file on C:\phperrorXXX.txt and not in stdout/stderr
- [Hashcash](http://mamboforge.net/projects/hashcash):  A cryptographic framework for Mambo – Currently protection: form submit with hashcash challenge – MD5, RSA, SHA1. (javascript code for the client, PHP code for the server key generation) There is now in the current HEAD:

1. Backend admin panel,
2. Logs files are written in XMl and can be viewed in the admin area,
3. More OO code as before (I am stucked with PHP 4.2 which is not so OO as PHP 5.0).
4. I have also committed AkoComment, AkoBook, Mambots and templates example of hashcash use

The current code in HEAD is working, but only in MD5 mode, SHA1 is giving me some problem since my PHP factory is not working for some obscure reason -> The *CodeInliner.php* plugins sometimes create a *HahCashGenerator.php* with the default encryption scheme.   
# Attention Hashcash require Log4PHP for Mambo!