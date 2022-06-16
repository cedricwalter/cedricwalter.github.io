---

title: 'A git workflow that is easy and scale for product development'
date: '2019-09-02T14:02:00+02:00'
author: 'Cédric Walter'

header:
teaser: /assets/images/2017/04/git-logo.jpg
tags:
- bugs
- centralized
- client
- code
- collaboration
- conclusions
- confluence
- continuous
- create
- created
- customer
- depending
- deployed
- description
- development
- git
- master
- release
---

There are numerous GIT workflow floating around
like [Centralized Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows#centralized-workflow)
, [Gitflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)
, [Forking flow](https://www.atlassian.com/git/tutorials/comparing-workflows/forking-workflow)
and [Feature Branch Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow)

Over the last 10 years, I have followed this really simple workflow, similar to the forking flow.- it allow Parallel
Development, features branches can be merged to any release branches or ideally Master

- Collaboration Feature branches also make it easier for two or more developers to collaborate on the same feature

We consider Master the stable version of the product, this branch should be deployed automatically using continuous
delivery

## Every ticket, bugs, fix, features

is done first in a new branch from master

- Using the ticket number first,
- with a short but understandable description written in lower case, e.g. PROJ-11-fix-login. This will let you create
  automatic releases notes because [Jira ](https://www.atlassian.com/software/jira)
  and [Confluence](https://www.atlassian.com/software/confluence) will recognize the ticket number in the branch name

These ticket, bugs, fix, features should NEVER be merged to master without a Pull Request (PR) and a code
review.

After the review process it can be merged to master. (merge will be blocked if no reviewer has accepted the code
changes)

## Delivering code

Code deployed to production or customer instance can ONLY be deployed from a release branch name 1.0, 1.1, 1.2,….

## Fixes in production or customer release

Fixes in production or customer release branch are done the usual way (ticket-name but branch created from release
branch name) and create a new git tag 1.0.1 (first fix of release 1.0.1, then 1.0.2 ….)

These branches created from release branches can but must NOT be merged to master depending on the quality of the
fix and urgency. To be discussed on a case by case basis

- e.g. hot ugly fixes, aka workaround, done in urgency for a customer won't be merged to master and may be rewritten to
  finally be merged to master later.
- But the normal case it that these fixes will be merged to master.

## Conclusions

This workflow has allowed me in the past to handle multiple version (1.1, 1.2.5, 1.5) of a corporate product run by
multiple client at the same time. Even if supporting multiple version is not a desirable setup in the long run…

