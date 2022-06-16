---

title: 'How to export/backup all your SMS from the Apple iPhone to the disk'
date: '2010-07-04T15:09:23+02:00'
author: 'Cédric Walter'



tags:
    - backup
    - disk
    - Download
    - local
---

[![iphone](/assets/images/2010/07/iphone_thumb.jpg "iphone")](/assets/images/2010/07/iphone.jpg)

You need of course a Jailbroken iPhone, normal and loyal user of Apple you are not allowed to save your own SMS!!!

shh to your iphone, using [WINSCP](http://winscp.net/eng/index.php) for example

[![iphone.export.sms.00](/assets/images/2010/07/iphone.export.sms_.00_thumb.jpg "iphone.export.sms.00")](http://www.waltercedric.com/images/stories/iphone.export.sms.00.jpg)

Use login root, default password is alpine (but you should have change it to something else for better security a long time ago)

Go to the directory /private/var/mobile/Library/SMS

[![iphone.export.sms.01](/assets/images/2010/07/iphone.export.sms_.01_thumb.jpg "iphone.export.sms.01")](http://www.waltercedric.com/images/stories/iphone.export.sms.01.jpg)

and copy the file sms.db to your local disk

Download SQL lite browser at <http://sqlitebrowser.sourceforge.net/>

> SQLite Database Browser is a freeware, public domain, open source visual tool used to create, design and edit database files compatible with SQLite. It is meant to be used for users and developers that want to create databases, edit and search data using a familiar spreadsheet-like interface, without the need to learn complicated SQL commands. Controls and wizards are available for users to:
> 
> - Create and compact database files
> - Create, define, modify and delete tables
> - Create, define and delete indexes
> - Browse, edit, add and delete records
> - Search records
> - Import and export records as text
> - Import and export tables from/to CSV files
> - Import and export databases from/to SQL dump files
> - Issue SQL queries and inspect the results
> - Examine a log of all SQL commands issued by the application

open the file sms.db in Sql Lite Browser

[![iphone.export.sms.02](/assets/images/2010/07/iphone.export.sms_.02_thumb.jpg "iphone.export.sms.02")](http://www.waltercedric.com/images/stories/iphone.export.sms.02.jpg)

Click on the Tab “Browse Data” and select the Table “Message”, you can see your SMS!

Now under the menu File – Export – Export as CSV

[![iphone.export.sms.03](/assets/images/2010/07/iphone.export.sms_.03_thumb.jpg "iphone.export.sms.03")](http://www.waltercedric.com/images/stories/iphone.export.sms.03.jpg)

You’re done!

[![iphone.export.sms.04](/assets/images/2010/07/iphone.export.sms_.04_thumb.jpg "iphone.export.sms.04")](http://www.waltercedric.com/images/stories/iphone.export.sms.04.jpg)

Attention: even if the file format (CSV) can be read in any text editor /[Open Office](http://www.openoffice.org/)/Office Excel, the data are not presented in an user friendly manner!

### \#@$!&amp; APPLE: This is My iPhone and these are MY DATA!