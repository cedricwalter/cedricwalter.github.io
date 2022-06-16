---

title: 'Protecting You Mambo admin panel using htaccess'
date: '2005-08-18T18:49:43+02:00'
author: 'Cédric Walter'



header:
  teaser: /assets/images/2005/08/protectMamboWithHtaccess.jpg
tags:
    - dictionnary
---

 .htaccess files are very versatile, and can easily protect some area of Your Homepage. In the case of Mambo, I am here giving You a way to secure it in less than 5 minutes.

All You have to do is to drop a file named .htaccess in Your /administrator directory

| Here is a templates of .htaccess You can use |
|---|
| \# Do not allow any user to access this file – to copy in all .htaccess   <Files .htaccess>   order allow,deny   deny from all   </Files> \#force admin area with .htaccess password   AuthType Basic   AuthUserFile /pathto/.htpasswd   AuthGroupFile /dev/null   AuthName "Walter Cedric Administrator Area"   <Limit GET POST>   require valid-user   </Limit>   |

- pathto should normally be outside you public webserver directory!  
    In plesk, that means outside the httpdocs directory!
- .htpasswd is a Text file which contains a mapping login:password.

| Example of .htpasswd |
|---|
| admin:XXXXXXX |

XXXXXXX must be replace by it’s crypt version, use that Url to create a new   
crypted value:

# http://de.selfhtml.org/cgi-bin/cryptform.pl?password=aSI45I#56B4KgR34542

In this example, I want to have aSI45I#56B4KgR34542 as password (my real password is even more complex!), the page then display me

cziW29BR6Y3fM

Be careful it is changing at each reload of the page since the system add "salt" to the password in order to avoid brute force attack with dictionnary.

So I create a file .htpasswd which contains:

| Example of .htpasswd |
|---|
| admin:cziW29BR6Y3fM |

So In order to be able to go in my administrator Mambo panel, I will have to type

 ![](/assets/images/2005/08/protectMamboWithHtaccess.jpg)

user name: admin  
password: cziW29BR6Y3fM

HTACCESS is containing a lot more keywords and way to protect some data or directories.   
I recommend You to google a little bit to find some exhaustive articles like this one in german:  
[http://de.selfhtml.org/servercgi/server/htaccess.htm#optionen](http://de.selfhtml.org/servercgi/server/htaccess.htm#optionen)

If Youre using my component hashcash or any statistics log tools on YOur server, YOu may know the IP of the bad guys which try to break Your site. There is a way to block these attacking zombies at the server level. Just extends the section Limit of the .htaccess file

 <Limit GET POST>  
order allow,deny  
allow from all  
deny from XXX.XXX.XXX.XXX  
# deny from .microsoft.com   
# </Limit>

where XXX.XXX.XXX.XXX is the IP or part of the IP (XXX or XXX.XXX or XXX.XXX.XXX), but it can be a DNS. You can add as many lines as You want.