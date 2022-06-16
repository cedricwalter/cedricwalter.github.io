---

title: 'Typical issues with webapplications v1.5'
date: '2004-12-10T22:08:29+01:00'
author: 'Cédric Walter'



---

<font size="3" style="FONT-WEIGHT: bold">rev 1.5

"Security come from education not obscurity! when everybody will know how to attack applications, systems will be more
secure (but on the other side, new class of attack will be created, so It will be and has to be an endless war)".
Cédric Walter

It may be sometimes good to understand all the technicals terms that try to explain vulnerabilities in software….I’ve
done a "small" compilation for You, and have tried to give You meaningful descriptions, examples, and solutions.  
If something is not accurate or you want to provide a better example, please contact me…  
This page should be considered as a start, I have currently no plan to transform my homepage into a security portal, as
it is a full time work for specialized company or group of individuals. After looking at this page, You may be frighten
by the number of issues in todays softwares…

# Attack Categories: from the thread "Attack Categories" on mailing list "Web Application Security Mailing List Archiv" at [<font color="#0000ff" size="2">http://lists.virus.org/](http://lists.virus.org/)#

- Client side trust issues
    - Input Validation
        - Cross Site Scripting (XSS)
        - Client-Side Manipulation
        - Path Traversal
        - URL Encoded Attacks
        - Buffer Attacks
        - SQL injection
        - OS command injection
        - Unicode Attacks
        - Format String Attacks
    - Parameter Tampering
        - Cookie Attacks
        - URL Attacks
        - Hidden Form Fields
        - Serialized objects
    - Authentication
        - Cookie Attacks
        - Brute Force
        - Session Hijacking
    - Browser Residue
        - Comment
        - Auto-Completes
        - Cache
        - History
- Transport issues
    - Session Hi-Jacking
    - Traffic Sniffing
    - Replay attacks
    - Man in the middle attacks
    - DNS spoofing
- Server side issues
    - Information Gathering
    - Mis-configuration
        - Debug Options
        - Samples hacking
        - Directory Browsing
    - Infrastructure Fingerprinting
    - Technology Fingerprinting
    - Spidering
    - Errors
- Application Trojans
    - Cloneable java class’s
- Backdoors
- Buffer Overflows
- Unicode Attacks

# Bad design Attacks

- Unsecure design:
    - Examples:
        - An application has no authentication mechanisms (a way to determine: who are You) and authorization (What can
          a user is allowed to do)
        - Confidential or client related data are store on a medium. could be a database or file on disk) with no
          confidentiality (crypting) and integrity (checking that nothing has been alter by a third person)
        - Nonrepudiation session, no auditing,, and Availability
        - Caching of permissions: be cautious with caching mechanism as it may compromise the whole system if it is
          inherently insecure.
    - Solution:
      -
    - Links:
        - [Web Application Security Fundamentals](http://msdn.microsoft.com/library/en-us/secmod/html/secmod74.asp)
        - [Architectural Patterns for Enabling Application Security (2004) slides
          \[pdf >](http://eclipse.ime.usp.br/cursos/OO/security.pdf) from Joe Yoder at IME/USP
        - IBM Javaworks has a free Structural Analysis Tool

- Back doors and debug options: Back doors are path in the application not documented or not intended to be use
  directly by the user, debug options are switch place by the developer to understand or correct the application if it
  behave not correctly.
    - Back doors can be data port or interface between components layers, or a port in the apllication which is not
      testing autorisation level and user authentification
    - Solution:
        - Reviews your code an design by an external company or another team, most of the time You need a fresh
          view.
        - Remove debug options in production, use precompiler mechanism to parse your code/bytecode before shipping.
        - Verify credential in each layer: even if it is time consuming, having a secure and a fast application may
          be antinomic.You can always use a profiler tool to
        - Reduce surface of attack technique: remove ALL code or functionnality not needed (eg from 3rd party
          vendors or open source frameworks), if during the testing phase, You discover functionnality not intended (
          positive/bad side effect but have security concerns), try to remove them. Alternatively You can also remove
          the webserver admin panel in production, and force maintener to use ssh to activate it before effectively use
          it, so an attacker has to steal a ssh key pair first.
        - Principle of least privilege Your program/indvidual layer/thread should run with the least possible
          privilige to operate correctly without compromising the system. In java You may use the security policy
          framework as a start.
    - Links:
- Broken ACLs/Weak passwords. wrong file authorisation or inconsistent Access Control List permissions on file,
  resources, devices/ easy to find.or trivial password
    - Password *admin* for an admin panel, or default password of well known webserver like Tomcat, Weblogic.
    - Too much rights on a file which is exposed to the internet, for ex: no write, execute for the rest of the world,
      read is enough (rwxr–r–)
    - Solutions:
        - Reviews ACL,
        - Automatic scripts to scan directories and verify permissions, in order to avoid developer or deployment
          mistake
        - Audits
    - Links:
- Weak session management: the web application do not manage correctly *user session* (a part of the memory is
  allocated to the user in the webserver)
    - The unique session key generator is weak, hacker can compute/guess key and try to steal user session data which
      may exist in the system at a given time.
    - Stealing Cookies may occur as a result.
    - Solution: redo design! use eprouved session framework
    - Links:
        - Session Management
          Schemes: [http://www.cgisecurity.com/owasp/html/ch07s03.html](http://www.cgisecurity.com/owasp/html/ch07s03.html)
- CGI-BIN manipulation
  - 
    - Solution:
    - Links:
- Insecure use of cryptography: These attacks are the hardest to perform and require both a good skill in advanced
  math, knowledge of existing crypto algorithms and attacks, analytical skills and an ability to think of things other
  people cannot think of.
    - Why You MUST use open source algorithm and always publish inofrmations on Cipher
      used: [Security through obscurity](http://en.wikipedia.org/wiki/Security_through_obscurity) is BAD
    - Solutions:
        - Open source algorithm,
        - Eprouved cryptographic implementation.,
    - Links:

# Bad coding Attacks

- Unsecure bad Coding habits: unsecure way of implementing which create securities concerns.
    - Examples
        - Common Coding Errors: not adequate primitives types (using a int instead of a long, or using too much
          precision: a long for person age)
        - Lazy Exceptions handling
        - Stack and Heap Overflows
        - Format String Vulnerabilities
        - Race Conditions in heavily paralell code: a singleton which is not a singleton
    - Solution:
        - Training: It may be time to send your developer to a training….
        - Use metrics technology: Metrics is a way to determine rapidly if some code has a bad smell. A lot of books
          and theory can be easily found on Google.
        - Structural Analysis: see links
    - Links:
        - [A free plugin](http://metrics.sourceforge.net/) is available on sourceforge for [
          Eclipse](http://www.eclipse.org/)
- Memory leaks -It is a part of memory that has been allocated but never got freed after its use. The more often
  this occurs the more memory will be wasted and taken away from other processes. In the worst case your application’s
  memory usage will exceed the physical memory size and finally crash the system when the limit of virtual memory is
  reached after a period of heavy hard disc activity.
    - Possible in all development language, more easier in C++, possible in Java.
    - Solutions:
        - Memory leaks detector,
        - Testing your application and monitoring memory,
        - Framework for memory management
    - Links:

# Fooling the user

- Cross-site scripting occurs when a web application gathers malicious data from a user and is a way to theft
  cookies
    - *"Attackers will inject JavaScript, VBScript, ActiveX, HTML, or Flash into a vulnerable application to fool a
      user (Read below for further details) in order to gather data from them. Everything from account hijacking,
      changing of user settings, cookie theft/poisoning, or false advertising is possible. New malicious uses are being
      found every day for XSS attacks.*" *more
      at* [*http://www.cgisecurity.com/articles/xss-faq.shtml*](http://www.cgisecurity.com/articles/xss-faq.shtml)
    - Solution:
        - Only follow links from the main website you wish to view
        - Observe how the link looks like before clicking on it!
    - Links:

# Fooling the application

- Form/hidden field manipulation : a common (weak design) to store persistent data for a user is to use a HTML hidden
  field: it is a text variable store in the page that may use the application for its own business logic.
    - Hacker will modify them and post page to the server till they get the expected result
    - Solution:
        - Avoid hidden fields or reduce them to the least number.
    - Links:
- Parameter Tampering is a simple attack targeting the application business logic by modifying some parameter
    - In a select box, examining hidden values and trying to send other or modified values.
    - Solution: blocking attackers via Input Validation
    - Links:
- Errors triggering sensitive information leak: Pushing application to its limits (searching a way to crash it), in
  order to see if the aplication will give some important informations.
    - Examples:
        - You application display an error page containing servlet name, underlying crash reasons: logins with remote
          host ip in case of webservices, and even worse: part of code like SQL statements which has crash.
    - Solution:
        - Blinding Attackers via Output Sanitation/filtering…
    - Links:
- Stealth Commanding is when you html page contains server page scripting that will be execute on the server.
    - Hacker has only to replace your command by a new to execute malicious code on the server.
    - Solution:
        - Validations or avoid this technology
    - Links:
- SQL injection: A hacker may try to enter valid or invalid SQL statements instead of business parameter (a user name
  in a search field page) in the hope that the developper won’t do validation and that his code will reach the backend
  database.
    - Hackers fill input fields with valid/invalid statements to see if the application crash or return incorect data
      or more information than allowed.
    - There is even some open source tools like [Absinthe](http://www.0x90.org/releases/absinthe/) is a gui-based
      tool that automates the process of downloading the schema &amp; contents of a database that is vulnerable to Blind
      SQL Injection.
    - Solutions: use prepareStatement or a Data Access Object (DAO) frameworks.
    - Links:
- Hidden Manipulation
  - 
    - Solutions:
    - Links:
- Command injection Insufficient URL validation
    - In case of FTP URL. Malicious website may try to inject arbitrary FTP commands in a FTP session using a
      specially crafted pathname containing "%0A" characters.
    - Solution:
        - blocking attackers via Input Validation
    - Links:
      netcontinuum [https://www.netcontinuum.com/securityCentral/TopThreatTypes/details.cfm?n=3](https://www.netcontinuum.com/securityCentral/TopThreatTypes/details.cfm?n=3)

# Cookies Attacks

# During Web application logons, user credentials are authenticated against the Web server using standard HTTP protocols and cookies to maintains connections persistence since HTTP alone was not intended to be persistent. Cookies are small text file that track your browsing habits or store some passwords, inernal login parameters.

17. Cookie poisoning: Injecting new data or modifying some data inside a cookie in order to steal a user identity/
    fake the login mechanism of a server.
    - If the cookie is *Persistent* (the cookie does not "die" when You close the browser and contains most of the times
      a *expiration* date), hackers may use a cookie editor or any text editor (Notepad) to change data in it.
    - If it is a *Session* cookie, Hacker may need to modify the code of an open source browser, which is more difficult
      but not impossible.
    - Solutions:
        - Encrypt the content of the cookie
    - 
      Links: [Hacking Web Applications Using Cookie Poisoning (pdf)](http://www.cgisecurity.com/lib/CookiePoisoningByline.pdf)
18. Cookie Snooping: attack unencrypted cookies not digitally signed or only protected by a timestamp
    - Most of the time, cookie are only encrypted in BASE64
    - Solution: encrypts, signs and time-stamps your cookies! avoid also ->Parameter Tampering
19. Cookie brute force attack: inspecting content of cookie and by guessing via a brute force attack on a parameter
    entering into a system.
20. Cookie manipulations:
    - 
    - <font color="#ff8040">Combine with: session hijacking
    - Solution:
    - Links:
        - Preventing Session Hijacking and Cookie
          Manipulation [http://nwc.securitypipeline.com/howto/53701241](http://nwc.securitypipeline.com/howto/53701241)

    <font color="#ff0000" size="3">Sessions Attacks

    - Session Hijacking – *involves an attacker using captured, brute forced, or reverse-engineered authentication tokens to seize control of a legitimate user’s web application session while that user is logged into the application. This usually results in the legitimate user losing access or functionality to the current web session, while the attacker is able to perform all normal application functions with the same privileges of the legitimate user. This class of attacks usually relies on a combination of other simpler Session Management attacks (Brute Force, Session Replay)* from [http://www.owasp.org/projects/asac/sm-sessionhijacking.shtml](http://www.owasp.org/projects/asac/smsessionhijacking.shtml)
        - Links: [http://www.owasp.org/projects/asac/smsessionhijacking.shtml](http://www.owasp.org/projects/asac/smsessionhijacking.shtml)
    - Session Replay – *A web application is vulnerable to a replay attack if a user’s authentication tokens are captured or intercepted by an attacker. A replay attack involving a web application means that an attacker directly uses these authentication tokens (e.g., session ID in URL, cookie, etc.) to obtain or create service to the user’s account while bypassing normal user authentication (logging in with the appropriate username or password).* from [http://www.owasp.org/projects/asac/sm-sessionreplay.shtml](http://www.owasp.org/projects/asac/sm-sessionreplay.shtml)
        - Links: [http://www.owasp.org/projects/asac/sm-sessionreplay.shtml](http://www.owasp.org/projects/asac/sm-sessionreplay.shtml)
    - Session Brute Force – *Brute-Forcing involves performing an exhaustive key search of a web application authentication token’s key space in order to find a legitimate token that can be used to gain access. This usually takes the form of grinding through a list of usernames and passwords, looking for a particular response that indicates a valid session was found*. from [http://www.owasp.org/projects/asac/sm-bruteforce.shtml](http://www.owasp.org/projects/asac/sm-bruteforce.shtml)
        - Links: [http://www.owasp.org/projects/asac/sm-bruteforce.shtml](http://www.owasp.org/projects/asac/sm-bruteforce.shtml)
    
    Url Attacks