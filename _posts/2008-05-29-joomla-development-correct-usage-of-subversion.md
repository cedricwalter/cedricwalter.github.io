---
id: 3467
title: 'Joomla development, correct usage of subversion'
date: '2008-05-29T19:26:46+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=3467'
permalink: /development/joomla-development-correct-usage-of-subversion/
image: /wp-content/uploads/2008/05/JoomlaLogo_thumb.gif
---

[![JoomlaLogo](/assets/images/2008/05/JoomlaLogo_thumb.gif)](/assets/images/2008/05/JoomlaLogo.gif) I am developing for #Joomla! now since the beginning but I was always disturbed by   
the way people are using the code repository of #Joomla! ([www.joomlacode.org](http://www.joomlacode.org)).   
I am doing professional java development but was never able to reproduce the way   
I am working nor really did take the time to really do it correctly (help by the fact that I   
was developing always alone). Things changes… and now I am part of the effort of   
bringing #JoomlaComment to run natively in #Joomla! 1.5 in a team of 3 people.

What people are doing, most of the time, is committing the code they write to #Joomla   
SVN/CVS in a flat way, it is just a set of files, or sometime even only the deliverable   
(a set of zip that user can install)

So these kind of subversion layout are not uncommon

| **A set of files** | **A set of directory containing just different code version and code exploded** | **Just one version exploded in root** |
|---|---|---|
| securityimages5.0.0.zip    securityimages4.3.2.zip    plugin4.3.3.zip | /securityimages5.0.0    /securityimages4.3.2    /plugin4.3.3 | file1.php    file2.php |
| **layout A** | **layout B** | **layout C** |

All of these layout are highly not efficient…The point of SVN/CVS   
is to compare and synchronize code easily (you merge code nearly 40% of your time   
as a developer), and resolve code conflicts. SVN only store differences so sync is fast   
and repository size is very low.

> **Subversion**® is an open-source version control system. Subversion® allows developers to share   
> there projects on the repositories, where they are stored afterwards. Repository is much similar   
> to a file server, except the fact, that it not only stores the copy of the file system, but its previous   
> states and changing history. Subversion® access its repositories using network, so it provides a   
> probability for a person to work over some shared files and watch for every possible changes made   
> by other developers.

With all of the above layout A, B or C, the code committed is not connected to the runtime   
where you are developing!

The developer runtime is a running #Joomla instance, and developer change their code directly   
in the file system of #Joomla!. If you work in a group, you’ll be force to connect another project   
with the layout A, B or C and merge code change manually from the local #Joomla! instance to the shared   
directory.

## Recommended SVN layout

I am now using the recommended SVN layout: /trunk /tags /branches

> **Trunk** is a main (head) line of development. That’s where you share your project and do initial commit.   
> The code in trunk is considered not stable or in development. Usually nobody should commit code which   
> break the trunk (to know it there is nothing else better than regression testing and continuous build server)   
>  **Tag** is a snapshot of the project state. You can create a tag of the one specified revision or a tag, containing   
> resources of different revisions. Tags are a kind of specific labels for a set of files each with its own revision   
> number. Used to track the important events if project’s life cycle.
> 
> **Branching** means creating a new line of development on the repository location. This may be useful in   
> a different cases, for example if different clients wish to get the same product but with some differences   
> in functionality. Of course it’s not convenient to create both products from the beginning to the end   
> separately, so the developers create branches. Branches are the additional lines of development.   
> Used when branching for different versions from one initial is needed or when each developer has his   
> own development line and plan.

I recommend you [using #Eclipse PDT (free),](http://www.eclipse.org/pdt/) So I have created 2 new PHP project in eclipse:   
**securityimages4** (Joomla! 1.4) and **securityimages5** (Joomla! 1.5). For eaxmple **securityimages5**

- Contains #Joomla 1.5.3, my code is sometimes highly dependent on a specific #Joomla API version,   
    or may break if #Joomla! release a new version, so it has to be tested against some specific version of it
- Has the latest version of securityimages installed (5.0.0Rc1)
- Has a MYSQL dump securityimages.sql which create a DB securityimages4 with its data, so anybody can have   
    a running environment just by doing a checkout from trunk
- Has an ANT build file, more on it later.

This project is fully versioned (so even #Joomla! and MYSQL dump). What could be disturbing at first but make sense   
to version also the container (Joomla!) where your code run.

## Carefully commit

While working in a team, not all file has to be committed to /trunk

The configuration.php for example is a default one (mine), anybody can make change but shall not commit it to the trunk! ->   
Not all developer use XAMPP at the same location or may use another DB user (this is another topic among a team of developer:   
standardize developer environment). I’ve commit dummy login/password for administrator panel is admin:admin   
The login for MYSQL in configuration.php is root: empty.

## Development

When I develop, alone or in a team, I do daily before every change a Team synchronize on project securityimages4 in order   
to see what has changed or who has done what and on which lines.

I it highly recommended not to update without looking at what is coming from SVN, so anybody can give give feedback on   
code quality better if you look at it), you get update from the trunk, or commit your new code change to the trunk.

As soon as I have no visible bug and all functionalities, I create a new release

## Create a new release

When I want to make a new release, I launch in eclipse an ant build (right click – run as ant build on / securityimages4/build.xml)

This create the deliverable (a component zip or N files as zip with a version number) that I can publish/version also in another project   
or NOT version at all since I can at any time load a project tag of securityimages4 and recreate the deliverable build!

The deliverable are what I publish on my site.

The ANT build file look like:

```
<span class="lnum">   1:  <span class="kwrd"><?<span class="html">xml <span class="attr">version<span class="kwrd">="1.0" <span class="attr">encoding<span class="kwrd">="UTF-8"?<span class="kwrd">>
```

```
<span class="lnum">   2:  <span class="kwrd"><<span class="html">project <span class="attr">name<span class="kwrd">="securityimages" <span class="attr">default<span class="kwrd">="_build"<span class="kwrd">>
```

```
<span class="lnum">   3:  <span class="kwrd"><<span class="html">description<span class="kwrd">>Create a new release of joomla component<span class="kwrd"></<span class="html">description<span class="kwrd">>
```

```
<span class="lnum">   4:   
```

```
<span class="lnum">   5:  <span class="kwrd"><<span class="html">property <span class="attr">name<span class="kwrd">="workspace.dir" <span class="attr">value<span class="kwrd">="." <span class="kwrd">/>
```

```
<span class="lnum">   6:  <span class="kwrd"><<span class="html">property <span class="attr">name<span class="kwrd">="component.version" <span class="attr">value<span class="kwrd">="5.0.0RC2" <span class="kwrd">/>
```

```
<span class="lnum">   7:  <span class="kwrd"><<span class="html">property <span class="attr">name<span class="kwrd">="component.name" <span class="attr">value<span class="kwrd">="securityimages" <span class="kwrd">/>
```

```
<span class="lnum">   8:   
```

```
<span class="lnum">   9:  <span class="kwrd"><<span class="html">property <span class="attr">name<span class="kwrd">="destination.dir" <span class="attr">value<span class="kwrd">="c:\temp\${component.name}-${component.version}" <span class="kwrd">/>
```

```
<span class="lnum">  10:   
```

```
<span class="lnum">  11:  <span class="kwrd"><<span class="html">target <span class="attr">name<span class="kwrd">="_preparedirs"<span class="kwrd">>
```

```
<span class="lnum">  12:  <span class="kwrd"><<span class="html">mkdir <span class="attr">dir<span class="kwrd">="${destination.dir}" <span class="kwrd">/>
```

```
<span class="lnum">  13:  <span class="kwrd"></<span class="html">target<span class="kwrd">>
```

```
<span class="lnum">  14:   
```

```
<span class="lnum">  15:  <span class="kwrd"><<span class="html">target <span class="attr">name<span class="kwrd">="_build" <span class="attr">depends<span class="kwrd">="_preparedirs" <span class="attr">description<span class="kwrd">="deploy joomla component"<span class="kwrd">>
```

```
<span class="lnum">  16:  <span class="kwrd"><<span class="html">copy <span class="attr">todir<span class="kwrd">="${destination.dir}/components" <span class="attr">filtering<span class="kwrd">="on"<span class="kwrd">>
```

```
<span class="lnum">  17:  <span class="kwrd"><<span class="html">fileset <span class="attr">dir<span class="kwrd">="${workspace.dir}/administrator/components/com_${component.name}" <span class="attr">includes<span class="kwrd">="**/*.*" <span class="kwrd">/>
```

```
<span class="lnum">  18:  <span class="kwrd"><<span class="html">fileset <span class="attr">dir<span class="kwrd">="${workspace.dir}/components/com_${component.name}" <span class="attr">includes<span class="kwrd">="**/*.*" <span class="kwrd">/>
```

```
<span class="lnum">  19:  <span class="kwrd"><<span class="html">fileset <span class="attr">dir<span class="kwrd">="${workspace.dir}/plugins/seystem" <span class="attr">includes<span class="kwrd">="${component.name}.*" <span class="kwrd">/>
```

```
<span class="lnum">  20:  <span class="kwrd"></<span class="html">copy<span class="kwrd">>
```

```
<span class="lnum">  21:  <span class="kwrd"><<span class="html">copy <span class="attr">todir<span class="kwrd">="${destination.dir}/plugin" <span class="attr">filtering<span class="kwrd">="on"<span class="kwrd">>
```

```
<span class="lnum">  22:  <span class="kwrd"><<span class="html">fileset <span class="attr">dir<span class="kwrd">="${workspace.dir}/plugins/seystem" <span class="attr">includes<span class="kwrd">="${component.name}.*" <span class="kwrd">/>
```

```
<span class="lnum">  23:  <span class="kwrd"></<span class="html">copy<span class="kwrd">>
```

```
<span class="lnum">  24:  <span class="kwrd"></<span class="html">target<span class="kwrd">>
```

```
<span class="lnum">  25:  <span class="kwrd"></<span class="html">project<span class="kwrd">>
```

<style type="text/css">    .csharpcode, .csharpcode pre { 	font-size: small; 	color: black; 	font-family: consolas, "Courier New", courier, monospace; 	background-color: #ffffff; 	/*white-space: pre;*/ } .csharpcode pre { margin: 0em; } .csharpcode .rem { color: #008000; } .csharpcode .kwrd { color: #0000ff; } .csharpcode .str { color: #006080; } .csharpcode .op { color: #0000c0; } .csharpcode .preproc { color: #cc6633; } .csharpcode .asp { background-color: #ffff00; } .csharpcode .html { color: #800000; } .csharpcode .attr { color: #ff0000; } .csharpcode .alt  { 	background-color: #f4f4f4; 	width: 100%; 	margin: 0em; } .csharpcode .lnum { color: #606060; }</style>Its purpose it to build a new deliverable in one click without going through the file system over and over.

I also version the project **securityimages5** with the same version number, so I can then continue developing in trunk.

## Branching an existing release

If someone report an issue, lets say in securityimages5.0.1.zip and code in /trunk is too far away in trunk or still unstable   
to be released, I make a branch on project **securityimages5**

I load the tag version 5.0.1 of the project **securityimages5** in my eclipse workspace (Team replace with – tags) and open   
a branch (Team – open branch) and this project is now suddenly similar to another trunk:

- A branch is not unique and is reacting like a trunk
- The tag 5.0.1 still exist and is read only
- I can now can commit new code in the branch (= to a trunk)
- The main /trunk still exist and is not touched

When all issues are solved, after many commit to the branch (= to a trunk), I version the branch with a …. Tag, for example   
5.0.2 which is a normal tag and represent a new stable state in the lifetime of the software.

## Nasty back porting

Somehow a bug in version 5.0.1 has a lot of chance of also being in the latest version (the code in /trunk). So I am forced to   
load the trunk (= current code) and make Team – compare with – another branch – tag version – 5.0.2 and back port all code   
changes in trunk if it make sense.

Remember a tag should never be change, it is possible to overwrite tag, but this should occur 0.000001% of the developer lifetime.   
A tag is a freeze code status from the past and the past can not be change 😉

## Joomla Releasing new versions

Joomla release a new version? I install the new version of #Joomla! in my eclipse project **securityimages5** If securityimages still   
work, nice! if not I make changes for that version of #Joomla! and create a … new tag of securityimages.

## Conclusions

You are now able to compare the trunk with any working/non working versions (tag or branches) of the past. See what has committed what   
and where in the file system of #Joomla! and this by using the merging client of #Eclipse SVN/CVS client which is way more efficient than any diff   
for merging code. This were before with version directory in Subversion (SVN/CVS) not possible.