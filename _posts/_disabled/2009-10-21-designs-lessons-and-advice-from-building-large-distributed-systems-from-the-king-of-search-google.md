---
id: 4787
title: 'Designs, Lessons and Advice from Building Large Distributed Systems from the king of search Google'
date: '2009-10-21T16:10:17+02:00'
author: 'Cédric Walter'



header:
  teaser: /assets/images/2009/10/google_logo.jpg
tags:
    - google
---

![google_logo](/assets/images/2009/10/google_logo.jpg "google_logo")

Google’s Jeff Dean was one of the keynote speakers [at an ACM workshop on large-scale computing systems](http://www.cs.cornell.edu/projects/ladis2009/), and discussed some of the technical details of the company’s mighty infrastructure, which is spread across dozens of data centers around the world. His presentation give some insight about what’s going on at Google, and how they have found innovative solutions to meet their never ending quest of speed and bandwidth usage. All their figures have impressed me a lot!

You will learn some of their in house technologies, aka

- [Google File System (GFS)](http://labs.google.com/papers/gfs.html): a scalable distributed file system for large distributed data-intensive applications.
- [Map Reduce](http://labs.google.com/papers/mapreduce.html) is a software framework introduced by Google to support distributed computing on large data sets on clusters of computers \[[WikiPedia](http://en.wikipedia.org/wiki/MapReduce)\], see [Hadoop](http://en.wikipedia.org/wiki/Hadoop) project for a free open source #Java MapReduce implementation.
- [BigTable](http://labs.google.com/papers/bigtable.html) is a compressed, high performance, and proprietary database system built on Google File System (GFS), see [Hadoop HBase](http://hadoop.apache.org/hbase/) project for something similar.
- Their new project: Spanner which will be responsible for Storage &amp; computation system to spans all over their datacenters.

Read now this great document online <http://www.cs.cornell.edu/projects/ladis2009/talks/dean-keynote-ladis2009.pdf> (if it disappear, ask me for a copy)