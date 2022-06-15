---

title: 'Naive Bayesian filter worth considering for Mambo?'
date: '2005-08-26T19:15:15+02:00'
author: 'Cédric Walter'



tags:
    - categories
    - distribute
---

 Do You think it could be a great idea to have a spamming filter in Mambo in order to reduce spam tentatives? It is one of the most effective methods available right now is Bayesian filtering

*A spam filter that evaluates email message content to determine the probability that it is spam. Bayesian filters are adaptable and can learn to identify new patterns of spam by analyzing incoming email.. Instead of identifying subject line or headers of the email, Bayesian filter will review the content of the email to prevent or block spamming. Bayesian filtering is the process of using Bayesian statistical methods to classify documents into categories.*

I am currently writing a new component com\_bayesianNaiveFilter, the engine itself (naive bayesian filter in php) has not be written by me, but I can surely integrate it quite nicely into akocomment and akobook and write an admin panel for it. Only one problem:

- A filter not well trained won’t recognize any spam messages, each user has to trained it’s own filter. If I want to avoid this, I will be forced to distribute a huge volume of data with my component (a database full of spam words). Maybe we can use some database of well trusted sources (I dont want to implement a P2P network of linked user database, at least not now and not in PHP4)