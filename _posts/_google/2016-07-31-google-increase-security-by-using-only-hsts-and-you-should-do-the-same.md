---
id: 8537
title: 'Google increase security by using only HSTS and you should do the same'
date: '2016-07-31T09:33:23+02:00'
author: 'Cédric Walter'



header:
  teaser: /assets/images/2012/01/Nginx-logo.png
---

![](/assets/images/2012/01/Nginx-logo.png)

Google increase security by using only HSTS and it is a good idea to do the same for your server. [HTTP Strict Transport Security (HSTS)](https://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security) instructs browsers to communicate with your site only over HTTPS.

> For many years, we’ve worked to increase the use of encryption between our users and #Google. Today, the [vast majority of these connections](https://www.google.com/transparencyreport/https/) are encrypted, and our work continues on this effort.
> 
> To further protect users, we’ve taken another step to strengthen how we use encryption for data in transit by implementing HTTP Strict Transport Security—[HSTS](https://tools.ietf.org/html/rfc6797) for short—on the [www.google.com](https://www.google.com/) domain. HSTS prevents people from accidentally navigating to HTTP URLs by automatically converting insecure HTTP URLs into secure HTTPS URLs. Users might navigate to these HTTP URLs by manually typing a protocol-less or HTTP URL in the address bar, or by following HTTP links from other websites.
> 
> see [Bringing HSTS to www.google.com](https://security.googleblog.com/2016/07/bringing-hsts-to-wwwgooglecom.html)

Quoting the Mozilla Developer Network:

> If a web site accepts a connection through HTTP and redirects to HTTPS, the user in this case may initially talk to the non-encrypted version of the site before being redirected, if, for example, the user types http://www.foo.com/ or even just foo.com. This opens up the potential for a man-in-the-middle attack, where the redirect could be exploited to direct a user to a malicious site instead of the secure version of the original page. The HTTP Strict Transport Security feature lets a web site inform the browser that it should never load the site using HTTP, and should automatically convert all attempts to access the site using HTTP to HTTPS requests instead. see [https://developer.mozilla.org/en-US/docs/Web/Security/HTTP\_strict\_transport\_security](https://developer.mozilla.org/en-US/docs/Web/Security/HTTP_strict_transport_security "https://developer.mozilla.org/en-US/docs/Web/Security/HTTP_strict_transport_security")

An example scenario:

> You log into a free WiFi access point at an airport and start surfing the web, visiting your online banking service to check your balance and pay a couple of bills. Unfortunately, the access point you’re using is actually a hacker’s laptop, and they’re intercepting your original HTTP request and redirecting you to a clone of your bank’s site instead of the real thing. Now your private data is exposed to the hacker. Strict Transport Security resolves this problem; as long as you’ve accessed your bank’s web site once using HTTPS, and the bank’s web site uses Strict Transport Security, your browser will know to automatically use only HTTPS, which prevents hackers from performing this sort of man-in-the-middle attack.

For #NGINX add this in the `server` block for your HTTPS configuration:

> `add_header Strict-Transport-Security "max-age=63072000; includeSubdomains; "; `

I would also add the X-Frame-Options header to your HTTPS website to make sure it is not embedded in a frame or iframe. This avoids clickjacking, and might be helpfull for HTTPS websites.

> ```
> The X-Frame-Options HTTP response header can be used to indicate whether or not a browser should be allowed to render a page in a `<frame>` or `<iframe>`. Sites can use this to avoid clickjacking attacks, by ensuring that their content is not embedded into other sites. see <a href="https://developer.mozilla.org/en-US/docs/HTTP/X-Frame-Options" title="https://developer.mozilla.org/en-US/docs/HTTP/X-Frame-Options">https://developer.mozilla.org/en-US/docs/HTTP/X-Frame-Options</a>
> ```

For NGINX add this in the server block for your HTTPS configuration:

> `add_header X-Frame-Options "DENY";`

Don’t forget to restart #NGINX.