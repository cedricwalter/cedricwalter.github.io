---

title: 'Microsoft Force-Installs Firefox Extension'
date: '2009-02-03T12:14:18+01:00'
author: 'Cédric Walter'



header:
  teaser: /assets/images/2009/02/firefox.eat_.internetexplorer.gif
---

## And alter the user-agent of Firefox!

![firefox.eat.internetexplorer](/assets/images/2009/02/firefox.eat_.internetexplorer.gif) Seems that Microsoft is considering now adding extensions to Firefox in order not to loose market share in the browser (a war is restarting?)

![microsoft.net.assistant](/assets/images/2009/02/microsoft.net_.assistant_5.jpg)

I’ve notice on Sunday evening the install of a new (HIDDEN) Firefox add-on

- XP don’t display this add-on so it CANT be removed easily using the add-on manager
- VISTA display the add-on “Microsoft .Net Framework Assistant” but uninstalling it in Firefox, restarting do not WORK

# Attention: you will encounter this issue

- if you run Microsoft Update and install Microsoft .NET 3.5
- If you install Microsoft Visual Studio 2008 (which require the above component)

Removing it wont make you loose a lot of things:

"Adds [ClickOnce](http://en.wikipedia.org/wiki/ClickOnce) support and the ability to report installed .NET versions to the web server”

## How to remove it

You’ll have to hack the registry of Windows for now 🙁

1. Open your Start Menu and choose Run.
2. Type in regedit and click OK.
3. Within there, you have to look for something like called`HKEY_LOCAL_MACHINE\SOFTWARE\Mozilla\Firefox\extensions` and delete the key there   
    For Windows Vista 64-bit `HKEY_LOCAL_MACHINE\SOFTWARE\Wow6432Node\Mozilla\Firefox\Extensions`
4. Type in Firefox abo`ut:config` in the address bar in Firefox, accept the warning
5. Remove (right click reset) `general.useragent.extra.microsoftdotnet`
6. Remove (right click reset) `microsoft.CLR.clickonce.autolaunch`.
7. Open Windows Explorer and go to`\WINDOWS\Microsoft.NET\Framework\v3.5\Windows Presentation Foundation\DotNetAssistantExtension\` to remove the last remnants of the evil extension.

# Links

- <http://tech.slashdot.org/article.pl?sid=09/02/01/2143218>
- [http://support.mozilla.com/tiki-view\_forum\_thread.php?locale=en-US&amp;comments\_parentId=265132&amp;forumId=1](http://support.mozilla.com/tiki-view_forum_thread.php?locale=en-US&comments_parentId=265132&forumId=1)
- <https://tepin.aiki.de/blog/archives/363-.net-Framework-Assistant-in-Firefox-deinstallieren.html>
- <http://stadt-bremerhaven.de/2009/02/02/microsoft-installiert-heimlich-eine-erweiterung-fr-firefox/>
- <http://nambulous.wordpress.com/2008/08/23/remove-the-net-framework-assistant-10-from-firefox/>
- <http://wyday.com/blog/2008/how-to-uninstall-microsoft-net-framework-assistant-from-firefox/>

This is such a way