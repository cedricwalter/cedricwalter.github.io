---
id: 4764
title: 'JIRA update from 3.13 to 4.0'
date: '2009-10-07T14:21:37+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=4764'
permalink: /homepage/jira-update-from-3-13-to-4-0/
image: /wp-content/uploads/2009/10/jira.waltercedric.com_.png
---

[![jira.waltercedric.com](/assets/images/2009/10/jira.waltercedric.com_.png "jira.waltercedric.com")](http://jira.waltercedric.com)I did update [my bug tracker](http://jira.waltercedric.com) to the latest release of JIRA

Press release

“ The Atlassian JIRA team is delighted to present a brand new version of one of the world’s favourite issue-trackers.

We have improved the UI to provide contextual awareness, improving the navigation and usability with features like activity streams and issue history. We have also added the most powerful searching capabilities ever seen in a bug tracker, called JIRA Query Language (JQL). The simple auto-complete entry system makes it incredibly easy for any user to create sophisticated queries.

We have completely overhauled the [JIRA](http://www.atlassian.com/software/jira/) dashboards to make it quick and easy for anyone to create and add gadgets, move them around using drag &amp; drop, and share dashboards with other team members. Using the new Plugins 2.0 architecture, we built new dashboards using OpenSocial. This means each [JIRA](http://www.atlassian.com/software/jira/) dashboard is an OpenSocial container allowing you to consume any OpenSocial compliant gadgets from either Atlassian tools or other external sources. Conversely, [JIRA](http://www.atlassian.com/software/jira/) gadgets can be exposed in any OpenSocial container (like iGoogle, and soon, Confluence).”

[JIRA 4.0 – Standalone (TAR.GZ Archive)](http://www.atlassian.com/software/jira/downloads/binary/atlassian-jira-enterprise-4.0-standalone.tar.gz)   
55.8 MB • Released 06-Oct-2009 ([Release notes](http://confluence.atlassian.com/display/JIRA/JIRA+4.0+Release+Notes) | [Upgrade notes](http://confluence.atlassian.com/display/JIRA/JIRA+4.0+Upgrade+Guide))

A small update how to is following

## Small JIRA update How to

I’ve made a small script to automate JIRA update as it required most of the time repetitive steps

### Update Script

#### Usage

./update.sh 3.13.3 4.0 /home/jira jiradb

#### Code

update.sh script

#!/bin/sh 

old=$1   
new=$2   
jirahome=$3   
db\_name=$4

cd $jirahome

echo Stopping old instance   
./atlassian-jira-enterprise-$old-standalone/bin/shutdown.sh

echo dumping old database version   
mysqldump –opt $db\_name &gt; $db\_name.sql

echo Retrieving latest version   
wget [http://www.atlassian.com/software/jira/downloads/binary/atlassian-jira-enterprise-$new-standalone.tar.gz](http://www.atlassian.com/software/jira/downloads/binary/atlassian-jira-enterprise-$new-standalone.tar.gz)

echo Copy old customization. db, port and ajp from server.xml   
cp $jirahome/atlassian-jira-enterprise-$new-standalone/conf/server.xml $jirahome/atlassian-jira-enterprise-$new-standalone/conf/server.xml.ori   
cp $jirahome/atlassian-jira-enterprise-$old-standalone/conf/server.xml $jirahome/atlassian-jira-enterprise-$new-standalone/conf/server.xml 

echo Copy database settings   
cp $jirahome/atlassian-jira-enterprise-$old-standalone/atlassian-jira/WEB-INF/classes/entityengine.xml $jirahome/atlassian-jira-enterprise-$new-standalone/atlassian-jira/WEB-INF/classes/entityengine.xml

echo Copy mysql library   
cp $jirahome/atlassian-jira-enterprise-$old-standalone/common/lib/mysql-\*.jar $jirahome/atlassian-jira-enterprise-$new-standalone/common/lib/mysql-\*.jar

echo edit manually and set jira.home   
echo edit ./atlassian-jira-enterprise-$new-standalone/atlassian-jira/WEB-INF/classes/jira-application.properties   


Note that you will have to [update the DB schema manually](http://confluence.atlassian.com/display/JIRA/JIRA+4.0+Database+Schema+Changes+for+MySQL+and+Oracle)