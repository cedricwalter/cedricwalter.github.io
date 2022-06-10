---
id: 8239
title: 'maven-release-plugin with GIT'
date: '2015-02-03T14:07:00+01:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=8239'
permalink: /development/maven-release-plugin-with-git/
header:
  teaser: /assets/images/2011/11/maven-logo-black-on-white-1.png
tags:
    - apache
    - atlassian
    - bash
    - bug
    - building
    - built
    - changing
    - check
    - clone
    - code
    - commit
    - conclusions
    - configuration
    - continuous
    - create
    - created
    - default
    - git
    - java
    - maven
---

![](/assets/images/2015/02/apache_maven_thumb.png)## Problem with the #maven release plugin

You may recognize yourself with the following use-cases:

- We have several big modules/repositories with many branches. Per repository we have one parent pom and 50+ children poms. This is for a large JEE project (400 K lines of code) that it is delivered to several different clients.
- We create feature branches, bug fixes, integration branches, release branches etc. We have many versions of the same application deployed to different production environments.
- Every time a new branch is created, the version tag in the parent pom and all children poms need to be updated
- When these branches need to be merged all these poms cause conflicts and they need to be manually resolved, because some times there are other changes in the poms besides just the version change. It is a major problem for us.
- We change the version on every branch because we have a continuous integration server that builds every branch and runs regression tests against every branch, therefore the versions must be different per branch.
- Being able to keep the new version isolated to one file (the parent pom) really makes sense here. (Child pom inherits version from parent property)
- We need to use SNAPSHOTS as we cannot have every developer build the whole system. Developers need to use artifacts built by #TeamCity for their feature branch and they cannot be changing to the last build version they depend on every time a new development build is created.

The #maven release plugin create a lot of issues that have been around for many many years.

## The solution

Why you may want to set the version of your Maven poms from the outside?

- never changes and commit anymore Maven pom versions in every features, bugfix and releases branches
- never having anymore pom conflicts while merging back features/bugfix branches to master or anywhere else

so you can also support pull request from anywhere without having to manually merging pom conflicts

### The maven release plugin way

Prepare and Performing a release runs the following release phases:

1. Check that there are no uncommitted changes in the sources
2. Check that there are no SNAPSHOT dependencies
3. Change the version in the POMs from x-SNAPSHOT to a new version (you will be prompted for the versions to use)
4. **Transform the SCM information in the POM to include the final destination of the tag**
5. Run the project tests against the modified POMs to confirm everything is in working order
6. **Commit the modified POMs**
7. **Tag the code in the SCM with a version name (this will be prompted for)**
8. **Bump the version in the POMs to a new value y-SNAPSHOT (these values will also be prompted for)**
9. **Commit the modified POMs**
10. Checkout from an SCM URL with optional tag
11. Run the predefined Maven goals to release the project (by default, deploy site-deploy)

Some remarks

- Maven poms are modified at step 4/8
- SCM commit are done at step 6 and 9
- SCM tag at step 7

see <http://maven.apache.org/maven-release/maven-release-plugin/index.html>

#### The new maven scm plugin way

only step number 5 is different! 1 to 4 are only here as reminders

1. Checking out the software as it is (done by teamcity with a GIT clone)
2. Giving it a version so it can be uniquely identified (done with a bash script that set the version to the branch name using mvn versions:set)
3. Building, testing and packaging it
4. Deploying it to an artifact repository where it can then be picked for actual roll out on target machines (3 + 4 mvn deploy)
5. Tagging this state in SCM so it can be associated with the matching artifact (new step using mvn scm:tag)

in your main pom.xml  
you never change anymore the version, you can use MASTER-SNAPSHOT / 0-SNAPSHOT everywhere or anything else

```
 <version>MASTER-SNAPSHOT</version> 
```

this is done already but not for release branches, this is because when we release, the maven-release-plugin check for local modification in reactors and refuse to commit something that has open changes (if we change the pom and dont commit them we have this case)  
Now lets add the new maven-scm-plugin config and remove the maven-release-plugin

```
<build>
    <plugins>
        <plugin>
            <groupid>org.codehaus.mojo</groupid>
            <artifactid>versions-maven-plugin</artifactid>
            <version>2.1</version>
        </plugin>
        <plugin>
            <artifactid>maven-scm-plugin</artifactid>
            <version>1.8.1</version>
            <configuration>
                <tag>${project.artifactId}-${project.version}</tag>
            </configuration>
        </plugin>
    </plugins>
</build>
```

Remark: The code above will tag automatically artifacts to ${project.artifactId}-${project.version} but you are free to use anything else. I personaly don’t like to repeat the branch name into the version, so i recommend you to keep the default (${project.version})

All TeamCity builds are now identicals for bugfix, features and hotfix branches,   
The release builds will add an additional deploy step before the plugin run  
deploy scm:tag  
so changes to the pom in reactor will be pushed to the tag in the GIT remote.

## Conclusions

Faster release builds! less automatic commits, test cases do not run twice or 3 times, …let’s resume how this solution compare to the standard maven way of releasing again:

|  | maven-scm-plugin | maven-release-plugin |
|---|---|---|
| Clean/Compile/Test cycle | 1 | 3 |
| POM transformations | 0 | 2 |
| Commits | 0 | 2 \* |
| SCM revisions | 1 | 3 |

\* we don’t want a second commit. One commit = one well defined state = one release candidate.

(References) bash script for all builds (bugfix, releases, features), for releasing builds remove the word -SNAPSHOT in version= 🙂

```
echo 'Will change the version in pom.xml files...' 
branch=$(git rev-parse --abbrev-ref HEAD) 
version="$branch-SNAPSHOT" 
version="$(echo $version | sed 's/bugfix\///g')" 
version="$(echo $version | sed 's/feature\///g')" 
version="$(echo $version | sed 's/release\///g')" 
version="${version^^}" /home/agent/buildagent/tools/maven3/bin/mvn versions:set -DgenerateBackupPoms=false -DnewVersion="$version" 
echo 'Changed version in pom.xml files to $version' 
exit 0
```

## References

- <http://maven.apache.org/scm/maven-scm-plugin/>  
    http://axelfontaine.com/blog/final-nail.html
- http://blogs.atlassian.com/2013/05/maven-git-flow-plugin-for-better-releases/
- http://jira.codehaus.org/browse/MNG-4715
- http://axelfontaine.com/blog/maven-releases-steroids-2.html
- https://github.com/axelfontaine/final-nail/blob/master/pom.xml