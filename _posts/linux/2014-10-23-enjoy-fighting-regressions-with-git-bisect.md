---

title: 'Enjoy Fighting regressions with git bisect'
date: '2014-10-23T14:16:19+02:00'
author: 'Cédric Walter'



header:
  teaser: /assets/images/2017/04/git-logo.jpg
tags:
    - git
    - HowTo
---

As Git Bisect is not clear a lot of people, here is a nice PDF to look at [Enjoy Fighting regressions with git bisect, #LinuxCon EU 2013.pdf](http://events.linuxfoundation.org/sites/events/files/slides/Enjoy%20Fighting%20regressions%20with%20git%20bisect,%20LinuxCon%20EU%202013.pdf)

it is about “Linux” combinational explosion… Bug software have the following properties (not desired):

- has many different “configurations”
- may fail under one configuration but not another

N configurations, T tests and C new commits means that a release needs:

## C \* N \* T tests performed

where N and T, at least, are growing with the size of the software.

Git Bisect help find a first bad commit and use a binary search algorithm for efficiency if possible.