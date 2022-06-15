---

title: 'Apache M2Eclipse: Get rid of Duplicate resources when opening resources and types'
date: '2012-04-06T13:25:32+02:00'
author: 'Cédric Walter'



header:
  teaser: /assets/images/2011/11/maven-logo-black-on-white-1.png
tags:
    - about
    - apache
    - click
    - create
    - debug
    - eclipse
    - enjoy
    - example
    - having
    - HowTo
    - launch
    - look
    - make
    - maven
---

In this small post, I’ll show you how to remove duplicated resources in the Open Resource view of #Eclipse

Eclipse – M2Eclipse – Subversive

## Activate Maven Modules Filter

Without on the left, with the Maven Modules Filter active, a more clean view on your projects

![ApacheM2eGetRidOfDerivedResourcesWhenOpeningResourcesAndTypes_000](http://www.waltercedric.com/images/Get-rid-of-derived-resources-when-openin_CD11/ApacheM2eGetRidOfDerivedResourcesWhenOpeningResourcesAndTypes_000.png "ApacheM2eGetRidOfDerivedResourcesWhenOpeningResourcesAndTypes_000")![ApacheM2eGetRidOfDerivedResourcesWhenOpeningResourcesAndTypes_001](http://www.waltercedric.com/images/Get-rid-of-derived-resources-when-openin_CD11/ApacheM2eGetRidOfDerivedResourcesWhenOpeningResourcesAndTypes_001.png "ApacheM2eGetRidOfDerivedResourcesWhenOpeningResourcesAndTypes_001")

Disturbing is that resources are duplicated in view

![ApacheM2eGetRidOfDerivedResourcesWhenOpeningResourcesAndTypes_003](http://www.waltercedric.com/images/Get-rid-of-derived-resources-when-openin_CD11/ApacheM2eGetRidOfDerivedResourcesWhenOpeningResourcesAndTypes_003.png "ApacheM2eGetRidOfDerivedResourcesWhenOpeningResourcesAndTypes_003")

Ill show you now how to remove them!

## How to remove duplicated resources in the Open Resource view of Eclipse

- Create one working set with ALL your top Maven modules, named top for example
- Create another working set for all of your maven modules and put only the maven modules inside

So it look like this

![ApacheM2eGetRidOfDerivedResourcesWhenOpeningResourcesAndTypes_004](http://www.waltercedric.com/images/Get-rid-of-derived-resources-when-openin_CD11/ApacheM2eGetRidOfDerivedResourcesWhenOpeningResourcesAndTypes_004.png "ApacheM2eGetRidOfDerivedResourcesWhenOpeningResourcesAndTypes_004")

Now in open Resource, click on the icon menu, and select “Select Working Set”

![ApacheM2eGetRidOfDerivedResourcesWhenOpeningResourcesAndTypes_005](http://www.waltercedric.com/images/Get-rid-of-derived-resources-when-openin_CD11/ApacheM2eGetRidOfDerivedResourcesWhenOpeningResourcesAndTypes_005.png "ApacheM2eGetRidOfDerivedResourcesWhenOpeningResourcesAndTypes_005")

Only select the working set “modules”

![ApacheM2eGetRidOfDerivedResourcesWhenOpeningResourcesAndTypes_006](http://www.waltercedric.com/images/Get-rid-of-derived-resources-when-openin_CD11/ApacheM2eGetRidOfDerivedResourcesWhenOpeningResourcesAndTypes_006.png "ApacheM2eGetRidOfDerivedResourcesWhenOpeningResourcesAndTypes_006")

Enjoy the result

![ApacheM2eGetRidOfDerivedResourcesWhenOpeningResourcesAndTypes_007](http://www.waltercedric.com/images/Get-rid-of-derived-resources-when-openin_CD11/ApacheM2eGetRidOfDerivedResourcesWhenOpeningResourcesAndTypes_007.png "ApacheM2eGetRidOfDerivedResourcesWhenOpeningResourcesAndTypes_007")

By the way, I recommend you to only synchronize the working “top” for avoiding having to look at duplicated changes in synchronize view.

Launch configurations stored in modules may also be duplicated in the menus and in the Run dialog, there also you can apply the same trick: aka using windows working set filtering…

## About “Hide folders of physically nested modules (experimental)”

There is experimental option to hide folders of physically nested modules (see Window->Preferences->Maven), but it relies on optional eclipse APIs and does not guarantee all plugins will actually ignore hidden resources. Make sure to reimport all projects into workspace if you decide to try this. Platform debug and subversive are expected to respect IResource#isHidden state, so you should not see any duplicates when this flag is on.