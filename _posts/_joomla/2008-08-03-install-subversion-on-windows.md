---
id: 3594
title: 'Install subversion on windows'
date: '2008-08-03T16:53:05+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=3594'

---

[![joomla_cms](/assets/images/2006/01/joomla_cms_thumb.png "joomla_cms")](/assets/images/2008/08/joomla_cms.png)

In order to better develop for #Joomla by having your own subversion local repositories.

My second objective is to version different version of #Joomla!/my components so I can   
run a continuous build strategy with XINC…but more on that later when I will have enough regression tests 🙂

Download the Subversion distribution for you operating system at: <http://subversion.tigris.org/getting.html>

| <div style="text-align: center;">**Subversion Binary Packages** |
|---|
| **AIX**    [![aix](/assets/images/2008/08/aix_thumb.png)](/assets/images/2008/08/aix.png) | <div id="aix" title="aix">[openCollabNet](http://downloads.open.collab.net/binaries.html) | **Debian**    [![debian](/assets/images/2008/08/debian_thumb.png)](/assets/images/2008/08/debian.png) | <div id="debian" title="debian">[Debian Project](http://packages.debian.org/search?keywords=subversion&exact=1)    <tt>apt-get install subversion</tt> |
| **HP-UX**    [![hp](/assets/images/2008/08/hp_thumb.png)](/assets/images/2008/08/hp.png) | <div id="hpux" title="hpux">[HP Porting Centre](http://hpux.connect.org.uk/hppd/cgi-bin/search?term=subversion.) | **Fedora**    [![fedora](/assets/images/2008/08/fedora_thumb.png)](/assets/images/2008/08/fedora.png) | <div id="fedora" title="fedora">[Fedora Project](https://admin.fedoraproject.org/pkgdb/packages/name/subversion)    <tt>yum install subversion</tt> |
| **Mac OS X**    [![mac](/assets/images/2008/08/mac_thumb.png)](/assets/images/2008/08/mac.png) | <div id="osx" title="osx">[Fink package](http://pdb.finkproject.org/pdb/package.php/svn) (Requires Fink)    [MacPorts](http://www.macports.org/ports.php?by=name&substr=subversion) (Requires MacPorts)    [openCollabNet ](http://downloads.open.collab.net/binaries.html)(Universal) | **FreeBSD**    [![freebsd](/assets/images/2008/08/freebsd_thumb.png)](/assets/images/2008/08/freebsd.png) | <div id="freebsd" title="freebsd">[FreeBSD Project](http://www.freebsd.org/cgi/cvsweb.cgi/ports/devel/subversion)    <tt>cd /usr/ports/devel/subversion;    make install</tt> |
| **Red Hat**    [![redhat](/assets/images/2008/08/redhat_thumb.png)](/assets/images/2008/08/redhat.png) | <div id="redhat" title="redhat">[CollabNet](http://www.collab.net/downloads/subversion/redhat.html) (Certified binaries)    [SummerSoft](http://the.earth.li/pub/subversion/summersoft.fay.ar.us/pub/subversion/latest/) (Red Hat 8,9 +) | **NetBSD**    [![netbsd](/assets/images/2008/08/netbsd_thumb.png)](/assets/images/2008/08/netbsd.png) | <div id="netbsd" title="netbsd">[pkgsrc](http://cvsweb.netbsd.org/bsdweb.cgi/pkgsrc/devel/subversion/)    <tt>cd /usr/pkgsrc/devel/subversion;    make install clean</tt> |
| **Solaris**    [![solaris](/assets/images/2008/08/solaris_thumb.png)](/assets/images/2008/08/solaris.png) | <div id="solaris" title="solaris">[CollabNet](http://www.collab.net/downloads/subversion/solaris.html) (Certified binaries, SPARC)    [Sunfreeware](http://www.sunfreeware.com/) (SPARC &amp; i386) | **OpenBSD**    [![openbsd](/assets/images/2008/08/openbsd_thumb.png)](/assets/images/2008/08/openbsd.png) | <div id="openbsd" title="openbsd">[OpenBSD Project](http://www.openbsd.org/cgi-bin/cvsweb.cgi/ports/devel/subversion/)    <tt>cd /usr/ports/devel/subversion;    make install</tt> |
| **Windows**    [![windows](/assets/images/2008/08/windows_thumb.png)](/assets/images/2006/04/windows.png) | <div id="windows" title="windows">[CollabNet](http://www.collab.net/downloads/subversion/) (Certified binaries)    Tigris.org: [Apache 2.0](http://subversion.tigris.org/servlets/ProjectDocumentList?folderID=91) or [Apache 2.2](http://subversion.tigris.org/servlets/ProjectDocumentList?folderID=8100)    [VisualSVN](http://www.visualsvn.com/server) (VisualSVN Server) | **Ubuntu**    [![ubuntu](/assets/images/2008/08/ubuntu_thumb.png)](/assets/images/2008/08/ubuntu.png) | <div id="ubuntu" title="ubuntu">[Ubuntu Packages](http://packages.ubuntu.com/hardy/devel/subversion)    <tt>apt-get install subversion</tt> |

*# Make_a_repository"></a>*   
The first thing you’ll need is a new repository. A repository is where all of your individual projects will be stored.

Create a new directory using the file explorer or with

\# mkdir e:\\xsubrversion

Initialize it by issuing this command:

\# svnadmin create e:\\xsubrversion

Inside your new repository (e:\\xsubrversion ) there is a directory called /conf. There you’ll find a file   
svnserve.conf. Open this file in a text editor.

Just uncomment the following lines by removing the #:

 \[general\]   
anon-access = read   
auth-access = write   
password-db = passwd

In the same directory, you’ll find another text file called passwd, if it do not exist, just create it and put all   
users authorize to access subversion in a \[users\] section. It is a pure key value pair file in the format   
NAME = PASSWORD

 \[users\]   
cedric.walter = xxxxxxx   
monkey.coder = yyyyyy 

Restart the service “Subversion Server“

In #Eclipse PDT/PHP #Eclipse, you can now connect to Subversion with Subversive client (Subclipse is not part of   
Eclipse consortium)

URL: [svn://localhost](svn://localhost "svn://localhost")   
User: cedric.walter   
Password: xxxxxxxxxxxx

[![suversion.subclipse](/assets/images/2008/08/suversion.subclipse_thumb.jpg)](/assets/images/2008/08/suversion.subclipse.jpg) and be able to commit and browse you code [![trunk.subversion.local](/assets/images/2008/08/trunk.subversion.local_thumb.png)](/assets/images/2008/08/trunk.subversion.local_.png)