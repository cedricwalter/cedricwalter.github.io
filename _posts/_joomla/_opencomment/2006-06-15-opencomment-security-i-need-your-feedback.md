---

title: 'OpenComment security: I need Your feedback'
date: '2006-06-15T20:49:31+02:00'
author: 'Cédric Walter'



tags:
    - joomla
---

I’ve tried to improve the security of OpenComment, and I want it to present it here, so You can give it look and have the chance to provide me feedback:

First I’ve create an Oracle with is creating highly depending <span style="font-weight: bold; color: rgb(51, 102, 255);">oracleKeys<span style="color: rgb(51, 102, 255);"> (class OpenCommentSecurities)

Each <span style="font-weight: bold; color: rgb(51, 102, 255);">oracleKeys<span style="color: rgb(51, 102, 255);">  create by theOracle has the following properties:

- <span style="font-weight: bold; color: rgb(51, 102, 255);">oracleKeys<span style="color: rgb(51, 102, 255);">  returned are always MD5 encrypted
- <span style="font-weight: bold; color: rgb(51, 102, 255);">oracleKeys<span style="color: rgb(51, 102, 255);">  are depending of current date and time, server and user browser agent
- <span style="font-weight: bold; color: rgb(51, 102, 255);">oracleKeys<span style="color: rgb(51, 102, 255);">  can timeout

Here is the algorithm:

| $key = session\_id();   if(!$key){    $key = $\_SERVER\[‘REMOTE\_ADDR’\];    }   $value = $key .     $GLOBALS\[‘mosConfig\_absolute\_path’\] .     $\_SERVER\[‘HTTP\_USER\_AGENT’\] .     date("F j, Y, g a");    return md5($value); |
|---|

Security 1  
All AJAX enable functions will test the <span style="font-weight: bold; color: rgb(51, 102, 255);">oracleKey<span style="color: rgb(51, 102, 255);"> submitted by the browser, (can timeout!), so nobody should be able to make mass attack on OpenComment across multiple server  All comments will be identified by a hidden field, I name themcommentChallengeKeys, they have the following properties:

-commentChallengeKeys in page are always MD5 encrypted
-commentChallengeKeys have a common base with the oracle, a <span style="font-weight: bold; color: rgb(51, 102, 255);">oracleKey<span style="color: rgb(51, 102, 255);"> for each comment
-commentChallengeKeys are made of the a Universally Unique IDentifier, version 4 (UUID), Yes Ive get rid of the id, the sql key entropy is higher and UUID should never colllide in a reasonable amount of time when You merge data across databases

Here is the algorithm:

| return md5(<span style="font-weight: bold; color: rgb(51, 102, 255);">$oracleKeys<span style="color: rgb(51, 102, 255);">.$commentUUID) ; |
|---|

<span style="color: rgb(255, 0, 0);">Security 2  
All AJAX enable functions will test the <span style="font-weight: bold; color: rgb(51, 102, 255);">oracleKey<span style="color: rgb(51, 102, 255);"> submitted by the browser AND thecommentChallengeKeys, so nobody should be able to replay the same RateUp/Down attack on multiple server.

Security 3  
All parameters pass to AJAX will be sanitized on the server to avoid XSS attacks $commentTitle = mysql\_real\_escape\_string(strip\_tags($title));  
  
Open items

- Avoiding user to Rate comments too often is still not solve…
- I will welcome any code review or help…

Nest steps…

- Migration scripts…
- Administrator panel has to be brng up to date…
- Testing, testing…
- Code reviews…

Do You see something more? comments are welcomed 😉