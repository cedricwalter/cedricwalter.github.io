---
id: 2073
title: 'eBanking applications change their login mechanism'
date: '2005-10-26T21:39:48+02:00'
author: 'Cédric Walter'



tags:
    - authentication
    - communications
    - cryptographic
    - interesting
    - transmission
---

 Some examples of what is going on in online eBanking applications securities…

- **Lloyds TSB** i[s going from a 2 stage login system to a securid](http://news.bbc.co.uk/1/hi/business/4340898.stm) (2 stage login [definition at WikiPedia](http://en.wikipedia.org/wiki/Two_Factor_Authentication))in order to reduce online fraud…  
    First, users must enter a username and password. Then, on a second screen, they are asked to use drop-down menus to choose three letters from a self-chosen memorable piece of information. The aim of using menus rather than the keyboard has been to defeat so-called "keyloggers", tiny bits of software which can be used by hackers who have breached a PC’s security to read every key pressed and thus sniff out passwords. There’s no hiding the fact that fraud is on the increase Matthew Timms, Lloyds TSB But newer keyloggers now also take screenshots, which can reveal the entire memorable word after the bank’s website has been used just a few times.   
    …  
    Lloyds says that about Ã&#130;Â£12m was lost to this kind of scam in 2004 – but it warns that attacks are multiplying fast.
- [Federal regulators will require banks to strengthen](http://news.yahoo.com/s/ap/20051017/ap_on_hi_te/internet_banking_security) security for Internet customers through authentication that goes beyond mere user names and passwords, which have become too easy for criminals to exploit.

One interesting point is that Mozilla firefox want to drop definitively SSL 2.0

SSL is a security protocol methodology ([Originally created by Netscape in 1994](http://wp.netscape.com/eng/security/SSL_2.html)) designed to create a secure connection to the server for the transmission of confidential data through the Internet. SSL uses public key encryption, one of the industry’s strongest encryption methods, to protect data as it travels over the Internet. .

support in favor of the stronger SSL3.0 or [TLS 1.0  ](http://www.ietf.org/rfc/rfc2246.txt)  
Transport Layer Security. A protocol intended to secure and authenticate communications across a public networks by using data encryption. TLS is designed as a successor to SSL and uses the same cryptographic methods but supports more cryptographic algorithms.

Do not forget to have a look at [verisign tutorial on what to do to keep your site security up to date](http://www.verisign.com/Resources/Security_Services_Newsletters/The_Connection_-_Trusted_Business_News/page_dev035500.html)