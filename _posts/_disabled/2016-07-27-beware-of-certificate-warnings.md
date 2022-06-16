---

title: 'Beware of Certificate Warnings'
date: '2016-07-27T12:54:50+02:00'
author: 'Cédric Walter'



---

How many times have you seen an alert similar to one of the below while trying to connect to the café or airport #WiFi
to check email or login to a secure website?

![1507221](http://www.waltercedric.com/images/1507221_3.jpg "1507221")

OR

[![Beware of Certificate Warnings](http://www.waltercedric.com/images/beware_of_certificate_warnings_thumb.jpg "Beware of Certificate Warnings")](http://www.waltercedric.com/images/beware_of_certificate_warnings_2.jpg)

How many times have your just ignored the alert, and clicked OK to continue?

If you clicked OK without understanding or caring about the meaning of the alert, unfortunately you are not alone. And
this is one reason why hackers have such an easy time compromising systems, infecting them with malware, and stealing or
encrypting their sensitive data. But how can they do that?

If you receive a #certificate error such as above, there are several reasons that you need to be very careful in what
you do next. In any of these cases if you click OK and continue to the site, the passwords you send could be seen and
you may infect your computer with #malware that could steal or destroy your data.

# Some Reasons you may see a Certificate Error:

9. The website’s certificate has been revoked (probably a fraudulent site!)
10. The website’s address does not match the address (could be the company is using the same certificate for several
    websites)
11. The website’s certificate is out of date (caution)
12. The website’s certificate is not from a trusted source (use caution – many phishing and malware sites use fake
    certificates)
    Think of a website’s certificate as its form of identity. If a family member asked to borrow your car keys, you
    might hand them the keys. But if a stranger asked to borrow your car keys, would you let them?

Your computer identifies the site you are visiting by comparing its certificate creator’s signature with its own local
copy in something called a Certificate Trust List (CTL).

# Certificate security is achieved via a chain-of-trust:

- \#Certificate #Authorities create certificates for Subordinate #Authorities and in the process sign the certificates
  they create
- Subordinate #Authorities create certificates for websites, etc., and in the process they also sign the certificates
  they create
- Your computer’s Certificate Trust List has a copy of the valid certificate creator’s signatures and compares it to the
  copy presented to you by the website

That’s just a very high level view of what’s going on, but when you visit an authentic website the basic premise of
chain-of-trust security is simply this:

The website’s certificate was created by someone you trust… or more specifically, someone your computer trusts. Anyone
can easily make their own fake certificate, give it a name such as ‘starbucks.com’, and pose as Starbucks to
unsuspecting web or #Wi-Fi users connecting to their # OLE_LINK2"></a># OLE_LINK1">rogue wireless access poin</a>t.

Your computer’s own Certificate Trust List is your silent defender – making sure that any secure website you visit is
actually the one your computer knows &amp; trusts.

However if you bypass the warning your computer provides, you are now in potentially dangerous territory!