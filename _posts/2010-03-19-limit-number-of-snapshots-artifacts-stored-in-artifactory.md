---
id: 5069
title: 'Limit number of snapshots artifacts stored in Artifactory'
date: '2010-03-19T20:04:23+01:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=5069'
permalink: /development/limit-number-of-snapshots-artifacts-stored-in-artifactory/
image: /wp-content/uploads/2010/03/maven-logo-2.gif_3_3.jpg
tags:
    - number
    - time
---

![maven-logo-2.gif_3](/assets/images/2010/03/maven-logo-2.gif_3_3.jpg "maven-logo-2.gif_3")

If your **[Artifactory](http://www.jfrog.org/products.php)** installation grows of many Gb each day – althought you do not deploy so many new artifacts. I suggest you to look under the repositories settings.

All your local repositories are configured as default with **Snapshot** **Version** **Behavior** = **Non-Unique**. [As stated in the manual](http://wiki.jfrog.org/confluence/pages/viewpage.action?pageId=12157166), all deployed SNAPSHOTS with be keep with unique time-stamp and build number suffix in the background (and you’ll only see one version in the tree).

I recommend you to switch to **Non-Unique**. In that mode [Artifactory](http://www.jfrog.org/products.php) should only keep the N latest **Snapshot** of an groupid/artifact/name file. So you’ll be able to keep the repository size under control.

**Note**

- **Deployer-respecting behavior** – [Artifactory](http://www.jfrog.org/) will respect the user snapshot policy, i.e. act as a standard, non-smart, repository.
- **Non-unique snapshots** – You can limit the number of saved artifacts in this mode
- **Unique snapshots** – with unique time-stamp and build number suffix. This keep potentially all your SNAPSHOTS even if they are not recently been accessed (Nexus has a cleanup policy by last access)

[![artifactory.limit.snapshot.number](/assets/images/2010/03/artifactory.limit_.snapshot.number_thumb.png "artifactory.limit.snapshot.number")](/assets/images/2010/03/artifactory.limit_.snapshot.number_2.png)