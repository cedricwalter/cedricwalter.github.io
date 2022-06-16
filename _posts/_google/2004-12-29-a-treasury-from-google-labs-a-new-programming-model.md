---

title: 'A treasury from Google Labs: a new programming model'
date: '2004-12-29T18:55:43+01:00'
author: 'Cédric Walter'



tags:
    - development
    - distributed
    - google
    - programmers
    - programming
    - 'search engine'
---

# MapReduce: Simplifed Data Processing on Large Clusters

 "*MapReduce is a programming model and an associated implementation for processing and generating large data sets. Users specify a map function that processes a key/value pair to generate a set of intermediate key/value pairs, and a reduce function that merges all intermediate values associated with the same intermediate key.* "  
 Statistics of jobs in august 2004, as usual impressive amount of data!!!  
 *Number of jobs 29,423   
 Average job completion time 634 se  
 Machine days used 79,186 days  
 Input data read 3,288 TB   
 Intermediate data produced 758 TB   
 Output data written 193 TB*   
 …

 "*It has been used across a wide range of domains within Google, including: large-scale machine learning problems, clustering problems for the Google News and Froogle products, MapReduce has been so successful because it makes it possible to write a simple program and run it ef ciently on a thousand machines in the course of half an hour, greatly speeding up the development and prototyping cycle. Furthermore, it allows programmers who have no experience with distributed and/or parallel systems to exploit large amounts of resources easily.*" [more in the PDF here](http://labs.google.com/papers/mapreduce-osdi04.pdf)