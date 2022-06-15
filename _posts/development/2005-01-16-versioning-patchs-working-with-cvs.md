---
id: 1482
title: 'Versioning, patchs, working with CVS'
date: '2005-01-16T20:34:27+01:00'
author: 'Cédric Walter'



tags:
    - customer
    - development
    - interfaces
---

I present You here some tips to deal with CVS integration into eclipse.

Tips

- The tutorial ship with #Eclipse is quite good, take a look in HELP or search (cvs) into the help for articles..

# Rules:**

- If You have a huge number of Projects in Your workspace, always try to have closed version of these especially if you are not supposed to change them.
-Releases should follows an X.Y.Z convention where:
- X = The major release number   
    An increment of this number generally indicates a significant change to the code base. The increment may be completely incompatible with prior versions.
- Y = The minor release number   
    An increment of this number usually indicates a significant change to functionality or architecture but with a moderate to high level of backward compatibility with previous versions.
- Z = The maintenance release number   
    An increment of this number usually indicates bug fixing within the X.Y release and possibly small enhancements and limited new features. These versions are expected to be fully backwardly compatible with previous increments.


P1X project 1, version X, in workpace  
 P2Y project 2, version Y  
 p3Z project 3, version Z  
 P1H project 1, HEAD version

| **Case A:** You are continuing the development of a project …    Your team has reach a milestone, and want to continue development of the project . Happen 98% of the time |
|---|
| ``` IF (you decide to make a change on P1_X) AND (P1_X is the latest closed version of P1) <span class="syntax18">{

        Compare project P1_X with the project P1_Head;

        IF (P1_X identical to P1_Head) <span class="syntax18">{

                Load P1_Head code;

        <span class="syntax18">}

        ELSE <span class="syntax18">{

                IF (P1_Head code is worth loading<span class="syntax18">/using) <span class="syntax18">{

                 Load P1_Head code;

                 Compare P1_Head with P1_X, and merge changes <span class="syntax8">if needed to code in workspace;

                 <span class="syntax2">//<span class="syntax2">You<span class="syntax2"> <span class="syntax2">have<span class="syntax2"> <span class="syntax2">now<span class="syntax2"> <span class="syntax2">a<span class="syntax2"> <span class="syntax2">open<span class="syntax2"> <span class="syntax2">edition<span class="syntax2"> <span class="syntax2">of<span class="syntax2"> <span class="syntax2">P1<span class="syntax2"> <span class="syntax2">in<span class="syntax2"> <span class="syntax2">workspace<span class="syntax2"> <span class="syntax2">which<span class="syntax2"> <span class="syntax2">is<span class="syntax2"> <span class="syntax2">a<span class="syntax2"> <span class="syntax2">merge<span class="syntax2"> <span class="syntax2">of<span class="syntax2"> <span class="syntax2">P1X<span class="syntax2"> <span class="syntax2">and<span class="syntax2"> <span class="syntax2">P1H

                <span class="syntax18">} ELSE <span class="syntax18">{

                 jump to <span class="syntax8">case B; 

                <span class="syntax18">}

        <span class="syntax18">}

        Continue development;

<span class="syntax18">} ``` |

 

| **Case B:**You want to make a patch on a project…  - The version of the project has already been deployed or sold to customer, and - Your actual code may be a lot more advance, but not finished, not tested, possibly breaking interfaces of other components and - You prefer to continue development on the old version to reduce risks of instabilities. |
|---|
| ``` <span class="syntax2">//<span class="syntax2">old<span class="syntax2"> <span class="syntax2">status<span class="syntax2"> <span class="syntax2">of<span class="syntax2"> <span class="syntax2">a<span class="syntax2"> <span class="syntax2">project<span class="syntax2"> <span class="syntax2">which<span class="syntax2"> <span class="syntax2">have<span class="syntax2"> <span class="syntax2">a<span class="syntax2"> <span class="syntax2">problem/your<span class="syntax2"> <span class="syntax2">prefer<span class="syntax2">  Load P1_X in workspace;  (Team <span class="syntax18">- replace with <span class="syntax18">- choose version P1_X) 

On P1_X, create a branch (Team <span class="syntax18">- create branch <span class="syntax18">- name it <span class="syntax8">for ex: P1_X_b01);

Develop, test, develop;

Commit the branch (Team <span class="syntax18">- commit : <span class="syntax14">this put code in its own HEAD)

When the branch is stable, create a version P1_X_1 <span class="syntax8">for example (Team <span class="syntax18">- Tag as verion)



Decide <span class="syntax8">if now <span class="syntax8">if the change done on P1_X_1 are worth to bring in P1_Head, <span class="syntax8">if so You will have to follow Case A

 ``` |