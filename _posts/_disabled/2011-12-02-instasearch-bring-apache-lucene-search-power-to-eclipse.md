---
id: 7334
title: 'InstaSearch  bring Apache Lucene search power to Eclipse'
date: '2011-12-02T21:31:05+01:00'
author: 'Cédric Walter'



header:
  teaser: /assets/images/2011/12/eclipse_instasearch_thumb.png
tags:
    - java
---

[Among the 1246 plugins (!) available for #Eclipse](http://marketplace.eclipse.org/), I found this one that I really like to use since it has immediately boost my productivity in [Eclipse](http://eclipse.org/).

[InstaSearch](http://code.inf.unibz.it/instasearch) is an [Eclipse](http://eclipse.org/) plug-in for doing fast text search in the workspace. The search is performed instantly as-you-type and resulting files are displayed in an #Eclipse view. It is a lightweight plug-in based on [Apache Lucene](http://lucene.apache.org/) search engine. Each file then can be previewed using few most matching and relevant lines. A double-click on the match leads to the matching line in the file.

It’s really instant and it searches through all the files in the workspace, by default it index the following file extensions (but you can add your own)

aj,ant,bat,bookmap,c,cfg,cmd,confluence,cpp,css,dbk,dita,ditamap,ditaval,dtd,ecore,ecore2ecore,   
ecore2xml,emof,ent,exsd,fo,genmodel,h,hpp,htm,html,htpl,inc,ini,java,js,jsf,json,jsp,jspf,jspx,jsv,jtpl,log,   
macrodef,mathml,mediawiki,meta,mf,mml,mod,ncx,nvdl,opf,php,php3,php4,php5,phps,phtml,pl,pom,prefs,   
product,properties,py,rnc,rng,sch,sh,shtm,shtml,sql,sqlj,svg,tag,tagf,tagx,tagxf,target,textile,tld,tracwiki,tsd,twiki,   
txt,vxml,wml,wsdd,wsdl,wsil,wsimsg,wssc,wssr,xhtml,xmi,xml,xpl,xproc,xq,xql,xqm,xquery,xqy,xsd,xsl,xslt,xtm,xu

[![eclipse_instasearch](/assets/images/2011/12/eclipse_instasearch_thumb.png "eclipse_instasearch")](/assets/images/2011/12/eclipse_instasearch.png)

As it use [Apache Lucene](http://lucene.apache.org/) internally you can build some nice queries:

- Searching for ***icefaces*** could result in 35 hits (items contain the word *icefaces* )
- Searching for ***web.xml*** results in 3 hits (items contain the word *web.xml or file named *web.xml** )
- Searching for ***icefaces** ***web.xml**** (without quotes) results in 148 hits (items contain the words *icefaces* or *web.xml* or both)
- Searching for **icefaces and *web.xml*** results in 3 hits (results contain both words *icefaces* and *web.xml* )

 [![eclipse_instasearch_01](/assets/images/2011/12/eclipse_instasearch_01_thumb.png "eclipse_instasearch_01")](/assets/images/2011/12/eclipse_instasearch_01.png)

- To exclude search terms just add a “-” in front of it: **icefaces –application**
- To perform a single character wildcard search use the "**?**" symbol.
- To perform a multiple character wildcard search use the "**\***" symbol (looks for 0 or more characters).
- Finding words that are within a specific distance away. To do a proximity search use the tilde, "~", symbol at the end of a Phrase. For example to search for "**Specifies**" and "**milliseconds**" within 5 words of each other in a document use the search: **"Specifies" "milliseconds" ~5**

[![eclipse_instasearch_02](/assets/images/2011/12/eclipse_instasearch_02_thumb.png "eclipse_instasearch_02")](/assets/images/2011/12/eclipse_instasearch_02.png)

# Main Features**

- Instantly shows search results
- Shows suggestions using auto-completion
- Shows a preview using relevant lines
- Matches partial words
- Opens and highlights matches in files
- Searches jar source attachments

You can install it from #Eclipse Marketplace (Menu Help – then Select #Eclipse Marketplace and search for [InstaSearch](http://code.inf.unibz.it/instasearch))

You can find a lot more plugin at [Eclipse Marketplace](http://marketplace.eclipse.org/)