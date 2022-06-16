---

title: 'changing architecture of component'
date: '2005-09-27T21:11:58+02:00'
author: 'Cédric Walter'



tags:
- development
---

As I am in the middle of the development (a little bit more than 60% done) of my PHP Bayesian Naive Filter (a learning
filter against spams comment, guestbook, and posting in general) for Joomla/Mambo and after reading some paper found on
internet:

- On Attacking Statistical Spam Filters, Gregory L. Wittel and S. Felix Wu – Department of Computer Science – University
  of California, Davis One Shields Avenue, Davis, CA 95616 USA
- A Naive Bayes Spam Filter, Kai Wei <kwei@cs.berkeley.edu> CS281A Project, Fall 2003
- But there is more…

I decide that my project will be certainly a failure if I rewrite or reuse a Bayesian filter engine which is not
accurate or using the latest countermeasures. Since I do not want to develop during 3 years an effective filter (will I
ever be able to do it???), I came across the idea of implementing the component *com\_bayesiannaivefilter* in such a way
that I can abstract the core engine and use the work done by the best open source project.

It is also clear for me since the beginning that a spam filter must be trained on a very large data volume (more than
1000 messages, the more the better) in order to categorize the message with accuracy. Webservices will have my
preference as an internet entities with the require cpu horsepower and data store should be able to offer the best
categorizing messages efficiency….

My component will be able to use following Bayesian Naive Filter core: (planned but not done, I it is technically
possible I will do it)

| Plugins | Remarqs | Possible open source project |
|---|---|---|
| *JAVA* | I am a J2EE developer, Back to the roots 🙂 | Som. to propose? contact me! |
| *
PHP* | Core done, but very simple tokenization and hashing of message    Volume of data small | Som. to propose? contact me! |
| *PERL* | Can PHP call perl code? | Som. to propose? contact me! |
| *CGI-BIN* | Should be easy to do | Som. to propose? contact me! |
| *WEBSERVICES* | Should be easy as soon as we found a WS provider    Data volume? | Som. to propose? contact me! |

Each technology may contains many core engine, or different versions. I will fill this table with possible candidate (
You can heelp me by suggesting or speeding development).

# Core requirement:

- Use mySQL,
- Most of internet provider allow the use of CGI-BIN, PERL, JAVA

This project will be soon committed to #Joomla forge!