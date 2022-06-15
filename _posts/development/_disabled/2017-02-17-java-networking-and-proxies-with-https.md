---

title: 'Java Networking and Proxies with HTTPS'
date: '2017-02-17T10:20:37+01:00'
author: 'Cédric Walter'



tags:
- backend
- default
- environments
- host
- HowTo
- html
- internal
- java
- proxy
---

In today’s networking environments, particularly corporate ones, application developers have to deal with proxies almost
as often as system administrators. In some cases the application should use the system default settings, in other cases
it will we want to have a very tight control over what goes through which proxy, and, somewhere in the middle, most
applications will be happy to delegate the decision to their users by providing them with a GUI to set the proxy
settings, as is the case in most browsers.

There is a lot of misleading information on the internet on how to not use the proxy when using HTTPS connections. There
are 3 properties you can set to specify the proxy that will be used by the http protocol handler:

- `http.proxyHost`: the host name of the proxy server
- `http.proxyPort`: the port number, the default value being 80.
- `http.nonProxyHosts`:a list of hosts that should be reached directly, bypassing the proxy. This is a list of patterns
  separated by ‘|’. The patterns may start or end with a ‘\*’ for wildcards. Any host matching one of these patterns
  will be reached through a direct connection instead of through a proxy.

There is no https.nonProxyHosts, if your company only use https backend connections (which is highly recommended even
for internal network connections) then you may have to exclude your service xxx.xxx.xxx.xxx with something like this

```bash
-Dhttp.nonProxyHosts="localhost|127.0.0.*|xxx.xxx.xxx.xxx" -Dhttps.proxyHost=proxy.xxxx.xxx -Dhttp.proxyPort=443
```

For the “non proxy hosts” list, the HTTPS protocol handler will use the same as the http handler (i.e.
http.nonProxyHosts).

References <http://docs.oracle.com/javase/8/docs/technotes/