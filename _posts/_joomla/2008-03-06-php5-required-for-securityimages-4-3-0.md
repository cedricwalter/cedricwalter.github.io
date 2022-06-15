---

title: 'PHP5 required for SecurityImages 4.3.0'
date: '2008-03-06T17:32:27+01:00'
author: 'Cédric Walter'



---

I did not see that I was using a feature only available in PHP5 while coding the class administrator/components/com\_securityimages/classSecurityimagesSession.php (Singleton holding database connections)

And this PHP5 and was looking at how the database connection is done in #Joomla! 1.5. I am providing a patch for that that will allow all of you to run SecurityImages on PHP4 and PHP5, download [SecurityImages 4.3.1](http://www.waltercedric.com/downloads-for-joomla/doc_download/56-comsecurityimages-430.html)

Remember: **PHP4 is discontinued**:

As [mentioned in this post on PHP.net](http://www.php.net/index.php#2007-07-13-1) the PHP4 life cycle is finally coming to a close:

*Today it is exactly three years ago since PHP 5 has been released. In those three years it has seen many improvements over PHP 4. PHP 5 is fast, stable &amp; production-ready and as PHP 6 is on the way, PHP 4 will be discontinued.*

 *The PHP development team hereby announces that support for PHP 4 will continue until the end of this year only. After 2007-12-31 there will be no more releases of PHP 4.4. We will continue to make critical security fixes available on a case-by-case basis until 2008-08-08. Please use the rest of this year to make your application suitable to run on PHP 5.*

They also [link to a migration 

\+ You can expect 25% more speed just by going to PHP5.

Visiting [www.gophp5.org](http://www.gophp5.org) may also help in your migration   
*Since the launch of GoPHP5.org, **over 100 software projects and over 200 web hosts** have come on board to support the adoption of PHP 5.2.*

<div class="wlWriterSmartContent" id="scid:32a77b7a-5ea4-47be-84fc-ff7471384e10:40b80b73-16df-483e-b3c1-5048d466a060" style="padding-right: 0px; display: inline; padding-left: 0px; padding-bottom: 0px; margin: 0px; padding-top: 0px">[<](http://www.gophp5.org/)