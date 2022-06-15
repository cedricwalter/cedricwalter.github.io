---
id: 8185
title: 'Clue a command line tool for Apache Lucene search software'
date: '2014-02-03T21:45:25+01:00'
author: 'Cédric Walter'



tags:
    - java
---

![](https://drupal.org/files/project-images/lucene_0.png)

*[Lucene Core](http://lucene.apache.org/core/)* is an open-source search software, provides #Java-based indexing and search technology, as well as spellchecking, hit highlighting and advanced analysis/tokenization capabilities. **[Luke](http://www.getopt.org/luke/)** is a handy development and diagnostic tool, which accesses already existing Lucene indexes and allows you to display and modify their content.

[Luke](http://www.getopt.org/luke/) is awesome, but often times it is not feasible to inspect an index on a remote machine using a GUI. That’s where Clue comes in. You can SSH into your production box and inspect your index using your favorite shell

Another important feature for Clue is the ability to interact with other Unix commands via piping, e.g. grep, more etc.

Interactive Mode:

```bash
./bin/clue.sh my-idx
```

Non-interactive Mode:

```bash
./bin/clue.sh my-idx command args
```

Command list:

```bash
./bin/clue.sh my-idx help
```

```bash
using configuration file found at: /Users/johnwang/github/clue/config/clue.conf Analyzer:       class org.apache.lucene.analysis.standard.StandardAnalyzer Query Builder:      class com.senseidb.clue.api.DefaultQueryBuilder Directory Builder:  class com.senseidb.clue.api.DefaultDirectoryBuilder IndexReader Factory:    class com.senseidb.clue.api.DefaultIndexReaderFactory delete - deletes a list of documents from searching via a query, input: query directory - prints directory information docval - gets doc value for a given doc, <field> <docid>, if <docid> not specified, all docs are shown exit - exits program explain - shows score explanation of a doc export - export index to readable text files help - displays help info - displays information about the index, <segment number> to get information on the segment merge - force merges segments into given N segments, input: number of max segments norm - displays norm values for a field for a list of documents postings - iterating postings given a term, e.g. <fieldname:fieldvalue> readonly - puts clue in readonly mode reconstruct - reconstructs an indexed field for a document search - executes a query against the index, input: <query string> stored - displays stored data for a given field terms - gets terms from the index, <field:term>, term can be a prefix trim - trims the index, <TRIM PERCENTAGE> <OPTIONS>, options are: head, tail, random tv - shows term vector of a field for a doc
```

See <https://github.com/javasoze/clue> for more details

Thanks [javasoze](https://github.com/javasoze) for this wonderful tool, it is now part of my standard toolbox.