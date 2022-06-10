---
id: 2110
title: 'forced to deactivate SEF404 in Joomla'
date: '2005-11-15T22:31:24+01:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=2110'
permalink: /internet/forced-to-deactivate-sef404-in-joomla/
tags:
    - configuration
    - homepage
---

One more time my Site is creating too much load on mysql server, and this probably because of SEF404.

*(**SEF**) Allows Search Engine Friendly URLS for apache and IIS, returns proper 404 status code for missing content, provides logging of 404 errors, and creation of special "shortcut" URLs that allow the user to redirection to the new URL.*

My ranking will probably go down for a while, since in 2 weeks my url are constantly changing on my homepage. In between I have installed [OpenSEF](http://opensef.org/)

***OpenSEF** is an open source advanced SEF component for #Joomla!/Mambo/OSM which enables automatic and manual text-based search engine friendly URLs for core and 3rd-party components. One goal of the OpenSEF project is to create relationships with many 3rd-party component developers to ensure that OpenSEF works immediately and flawlessly with all components.*

I’ve patched #Joomla kernel to display some interesting information in one log file on server: because #Joomla normaly output only sql statement in user browser.

The file contains all queries executed per user

user has executed 82 queries  
queryId dateAndTime queryExecution sqlQuery  
…  
…

the code is below in click read more

1. <font style="BACKGROUND-COLOR: rgb(255,255,0)">create a file logger.php and place it under the root of Joomla

```
defined( '_VALID_MOS' );



/** a small hack to display all  queries executed by joomla per page 

 * @authors Walter Cedric

 */

if ($mosConfig_debug) {

	

	if ( !function_exists('fopen')  || 

		 !function_exists('fclose') || 

		 !function_exists('fwrite') )

	  return;

	

	$file = fopen($mosConfig_absolute_path.'/sqllogs.txt', 'a');

	if(!$file){

	   die("File failed to open");

	} else{

		

	   $msg = $databas-->_ticker . " queries executed for user\n";

	   foreach ($database->_log as $k=>$sql) {

 		$msg .= $k+1 . " " . $sql."\n";

	   }

		

	   $status = fwrite($file, $msg);

	   fclose($file);

	   if(!$status){

	      die("sqllog write failed...");

	   }

	

	}

}



?>




```

**<font style="BACKGROUND-COLOR: rgb(255,255,0)">2. open index.php and replace**

```
// displays queries performed for page

if ($mosConfig_debug) {

 echo $database->_ticker . ' queries executed';

 echo '';

  foreach ($database->_log as $k=>$sql) {

   echo $k+1 . "\n" . $sql . '<hr />';

 }

}
```

**<font style="BACKGROUND-COLOR: rgb(255,255,0)">by**

```
//add by <a>www.waltercedric.com</a>

include($mosConfig_absolute_path.'/logger.php');


```

**<font style="BACKGROUND-COLOR: rgb(255,255,0)">3. Open /includes/database.php and replace line 261 what’s in bold**global $mosConfig\_debug;  
 if ($this->\_limit > 0 || $this->\_offset > 0) {  
 $this->\_sql .= "\\nLIMIT $this->\_offset, $this->\_limit";  
 }  
 $this->\_errorNum = 0;  
 $this->\_errorMsg = ”;  
 **if ($this->\_debug) {  
 $this->\_ticker++;  
 $this->\_log\[\] = $this->\_sql;  
 }   
 $this->\_cursor = mysql\_query( $this->\_sql, $this->\_resource );****<font style="BACKGROUND-COLOR: rgb(255,255,0)">by:**

```
//add by waltercedric.com

  if ($this->_debug) {

     $start = microtime();

  }



  $this->_cursor = mysql_query( $this->_sql, $this->_resource );  

  if ($this->_debug) {

   $this->_ticker++;

     $this->_log[] = "".date('Y.m.d H:i:s')." ".round(microtime()-$start, 4)." '".str_replace("\n", " ", $this->_sql);

  }


```

<font style="BACKGROUND-COLOR: rgb(255,255,0)">**4. Create a file**   
sqllogs.txt under Joomla root and chmod to 666

```
<strong><font style="BACKGROUND-COLOR: rgb(255,255,0)">5. To start logging, open configuration.php</strong> 

and set $mosConfig_debug = '0'; to $mosConfig_debug = '1';
```

Quick and dirty, but it is late 23:00 PM and I still have to go for dinner…next time I will do it better:

- export a CSV file, rotating logs, and so on….

```
```