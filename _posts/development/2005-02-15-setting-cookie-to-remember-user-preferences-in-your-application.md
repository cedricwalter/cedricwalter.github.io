---
id: 1580
title: 'Setting cookie to remember user preferences in Your application'
date: '2005-02-15T21:08:58+01:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=1580'

header:
  teaser: /assets/images/2005/02/javascript.jpg
tags:
    - framework
    - javascript
---

- Persistent or session cookies can be set…
- You can also set the path…
- A lot of options, see the comments from the authors
- A very powerful script!!!!!

```
//------------------------------------------------------------------------------
// TopDragon CookieJar(tm)
//------------------------------------------------------------------------------
// A Javascript CookieJar object with associated methods for using cookies.
//
// Copyright 2001 by TopDragon Software (www.bydisn.com or tracy@bydisn.com).
//
// This code isn't shareware, it's absolutely free. But if you really want to 
// (or if your conscience bugs you) feel free to send cash, gifts, liquor,
// stocks, or just drop me a line and let me know that you're actually using it.
// That will give me incentive to do more free stuff like this.
//
// Be sure to visit the TopDragon software page at www.bydisn.com/software!
// There's lots of other free stuff (and some stuff that that isn't free too).
//------------------------------------------------------------------------------
// You may remove the following instructions/comments to decrease the size of 
// this file, but PLEASE leave the above copyright info. I worked hard on this.
//------------------------------------------------------------------------------
// To use, just include this file in your HTML like this:
//  <script language="JavaScript" src="./TDCookieJar.js"></script>
//
// A CookieJar object is automatically created and initialized.
//
// Methods:
//
//  getCookie(cookie-name)
//
//   Returns the value of the named cookie or "UNDEFINED"
//
//   Example:
//
//    username = CookieJar.getCookie("username");
//
//  setCookie(cookie-name, cookie-value[, cookie-expiration])
//
//   Sets the named cookie to the value specified, with the expiration
//   date specified. Expiration date is optional. If not specified the
//   cookie is temporary (expires when the browser session ends).
//
//   Expiration can be specified in a variety of ways:
//
//    Via a Date object (you set it's value)
//
//    Via the string "NEVER" or "never" or "Never"
//    Never in this case is actually 12/31/2099.
//
//    Via a date string in any of the formats recognized by the 
//    Date.parse method. Such as:
//     "Dec. 25, 2001" or "December 25, 2001"
//
//    Via an "incremental" expression string +nu
//    Where:
//     + signifies an incremental expression
//     n is any positive number
//     u is the "units" designation:
//      d or D for days
//      h or H for hours
//      m or M for minutes
//    For example: "+30d" means the cookies expires in 30 days
//
//   Example:
//
//    CookieJar.setCookie("username","TopDragon","never");
//
//  deleteCookie(cookie-name)
//
//   Deletes the named cookie. Actually, the deletion is done by the
//   browser. This method sets the value of the cookie to null and it's
//   expiration date to a year ago. This will make the browser delete it.
//
//   Example:
//
//    CookieJar.deleteCookie("username");
//
//  cookiesEnabled()
//
//   Returns true if cookies are enabled on this computer, false otherwise.
//   It determines this by attempting to set and retrieve a test cookie.
//
//   Example:
//
//    if ( !CookieJar.cookiesEnabled )
//     alert("You must have cookies enabled to access this site");
//
//  setDomain(domain)
//
//   Sets the valid domain for the cookie. Must be in the form:
//    domain-name.com or subdomain.domain-name.com
//   Only cookies that match the domain name are returned. If
//   you do not set a domain, the current domain is used by the browser.
//
//   The domain you set is used for all subsequently set cookies.
//
//   Example:
//    CookieJar.setDomain("topdragonsoftware.com")
//
//  setPath(pathname)
//
//   Sets the valid path for the cookie. Must be in the form:
//    "/" or "/mypages" or "/mypages/index.html"
//   Only cookies that match the path are returned. / is the most
//   general path. If you do not specify a path, the current path
//   is used (i.e. only the current page will be able to access the
//   cookie). To allow any page on your site to access the cookie,
//   set a pathname of "/".
//
//   The pathname you set is used for all subsequently set cookies.
//
//   Example:
//    CookieJar.setPath("/")
//
//  setSecure([boolean])
//  setUnsecure([boolean])
//
//   Sets or unsets the "secure" status of the cookies. If the status
//   is "secure", the cookie will only be sent via secure pathways
//   (i.e. URLs with https:
// in front of them). If called without a
//   parameters, it's the same specifying "true".
//
//   The secure status you set is used for all subsequently set cookies.
//
//   Example:
//
//    CookieJar.setSecure() or CookieJar.setSecure(true)
//
//  If you need to access the cookies in the cookie jar, they are stored in
//  a "hash" array (i.e. an array indexed by cookie name) called "cookies".
//  For example, to list all cookies in the cookie jar, you can do this:
//
//   with (document.demo) {
//    output.value = "CookieJar Cookies:\n";
//    for ( var cname in CookieJar.cookies ) {
//     output.value += cname+"="+CookieJar.cookies[cname]+"\n";
//    }
//   }
//
//  The CookieJar is automatically refreshed every time you call the 
//  getCookie, setCookie or deleteCookie methods to make sure that cookies
//  which have expired during the session are removed from the CookieJar.
//  If you need to refresh the CookieJar yourself for some reason,
//  you can call the internal refresh function CookieJar.refreshCookies().
//
//  For debugging, you can access the CookieJar as a string. Accessing the
//  CookieJar as a string (for example, when assigning to a variable or a
//  field) will automatically call the CookieJar.toString function to format
//  the output like this: "CookieJar: name=value;name=value;
//
//------------------------------------------------------------------------------
//------------------------------------------------------------------

function TDCookieJarObj() {
    this.cookies = new Array();
    this.secure = false;
    this.domain = "";
    this.path = "";
    this.theCookie = "";
    this.cookiesEnabled = testCookies();
    if (!this.cookiesEnabled) {
        this.toString = cookiesNotEnabled;
        this.refreshCookies = cookiesNotEnabled;
        this.setCookie = cookiesNotEnabled;
        this.getCookie = cookiesNotEnabled;
        this.deleteCookie = cookiesNotEnabled;
        this.setDomain = cookiesNotEnabled;
        this.setPath = cookiesNotEnabled;
        this.setSecure = cookiesNotEnabled;
        this.setUnsecure = cookiesNotEnabled;
    } else {
        this.toString = CookieJarToString;
        this.setCookie = setCookie;
        this.getCookie = getCookie;
        this.deleteCookie = deleteCookie;
        this.setDomain = setDomain;
        this.setPath = setPath;
        this.setSecure = setSecure;
        this.setUnsecure = setUnsecure;
        this.refreshCookies = refreshCookies;
        this.refreshCookies();
    }
    return this;
//------------------------------------------------------------------------------
// Internally Used Functions

// ------------------------------------------------------------------------------
    function cookiesNotEnabled() {
        alert("Cookies are not enabled!");
    }


// cookiesNotEnabled
    function refreshCookies() {
        delete this.cookies;
        this.cookies = new Array();
        this.theCookie = document.cookie;

// If there is a cookie string, parse it and store the cookies
        if (this.theCookie.length > 0) {
            this.theCookie += ';';
            var startpos = 0;
            var endpos = 0;
            do {
                endpos = this.theCookie.indexOf(';', startpos);
                var tmp = this.theCookie.substring(startpos, endpos);
                var eqpos = tmp.indexOf('=');
                if (eqpos > -1) {
                    var cname = tmp.substring(0, eqpos);
                    this.cookies[cname] = unescape(tmp.substring(eqpos + 1));
                } else {
                    this.cookies[tmp] = "";
                }
                startpos = this.theCookie.charAt(endpos + 1) == " " ? endpos + 2 : endpos + 1;
            } while (startpos < this.theCookie.length);
        }
    }


// refreshCookies
    function getExpirationDate(exp) {
// See if it's a Date object
        if (exp.constructor == Date) {
            expdt = exp;
// See if it's the string "NEVER" (never is 12/31/2099 in this case)
        } else if (exp.toUpperCase() == "NEVER") {
            expdt = new Date(2099, 11, 31);

// See if it's an incremental format: +nD (days), +nH (hours), +nM(minutes)
        } else if (exp.charAt(0) == '+') {
            var incr = parseInt(exp.substring(1, exp.length - 1));
            var unit = exp.charAt(exp.length - 1);
            if ('DdHhMm'.indexOf(unit) < 0) {
                alert("CookieJar.setCookie: Invalid expiration date increment unit");
                return "";
            }
            if (isNaN(incr)) {
                alert("CookieJar.setCookie: Non-numeric expiration date increment");
                return "";
            }
            switch (unit.toUpperCase()) {
                case "D" :
                    incr *= 24;
                case "H" :
                    incr *= 60;
                case "M" :
                    incr *= 60;
                default :
                    incr *= 1000;
            }
            expdt = new Date();
            expdt.setTime(expdt.getTime() + incr);

// See if it's a date string in a format accepted by the 

//  Date.parse method, such as "Dec. 25, 2001"
        } else {
            if (isNan(Date.parse(exp))) {
                alert("CookieJar.setCookie: Invalid expiration date");
                return "";
            }
            expdt = new Date(exp);
        }
// Got a valid expiration date, format and return the expires string
        return ";expires=" + expdt.toGMTString();
    }


// getExpirationDate
    function testCookies() {
// Sets and gets a cookie to see if cookies are enabled
        var exp = new Date();
        exp.setTime(exp.getTime() + (60 * 1000));
        document.cookie = "test=1;expires=" + exp.toGMTString();
        if (document.cookie) {
            if (document.cookie.indexOf('test=1') >= 0) {

// Yup, they're enabled. Delete the test cookie
                exp.setFullYear(exp.getFullYear() - 1);
                document.cookie = "test=;expires=" + exp.toGMTString();
                return true;
            }
        }
        return false;
    }


// testCookies
    function CookieJarToString() {
        this.refreshCookies();
        var str = "CookieJar: ";
        for (x in this.cookies) {
            str += x + "=" + this.cookies[x] + ";";
        }
        return str;
    }

// CookieJarToString

// ------------------------------------------------------------------------------

//  CookieJar Public Methods 
//------------------------------------------------------------------------------
    function setCookie(cname, cval) {
        var cexp = "";
        if (arguments.length > 2) {
            cexp = getExpirationDate(arguments[2]);
        }
        var cdom = this.domain == "" ? "" : ";domain=" + this.domain;
        var cpath = this.path == "" ? "" : ";path=" + this.path;
        var csec = this.secure == false ? "" : ";SECURE";
        document.cookie = cname + "=" + escape(cval) + cexp + cdom + cpath + csec;
        this.refreshCookies();
    }


// setCookie
    function getCookie(cname) {
        this.refreshCookies();
        return this.cookies[cname];
    }


// getCookie
    function deleteCookie(cname) {
        var lastyear = new Date();
        lastyear.setFullYear(lastyear.getFullYear() - 1);
        this.setCookie(cname, "", lastyear);
        this.refreshCookies();
    }


// deleteCookie
    function setDomain(domain) {
        this.domain = domain;
    }


// setDomain
    function setPath(path) {
        this.path = path;
    }


// setPath
    function setSecure() {
        if (arguments.length == 0) {
            this.secure = true;
        } else {
            if (typeof (arguments[0]) != "boolean") {
                alert("CookieJar.setSecure: Argument is not boolean");
            } else {
                this.secure = arguments[0];
            }
        }
    }


// setSecure
    function setUnsecure() {
        if (arguments.length == 0) {
            this.secure = false;
        } else {
            if (typeof (arguments[0]) != "boolean") {
                alert("CookieJar.setUnsecure: Argument is not boolean");
            } else {
                this.secure = !arguments[0];
            }
        }
    }


// setUnsecure
}

var CookieJar = new TDCookieJarObj();
```