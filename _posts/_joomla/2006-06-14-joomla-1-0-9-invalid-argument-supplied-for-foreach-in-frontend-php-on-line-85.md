---

title: 'Joomla 1.0.9  Invalid argument supplied for foreach() in frontend.php on line 85'
date: '2006-06-14T11:19:33+02:00'
author: 'Cédric Walter'



tags:
    - joomla
    - patches
---

 ![](/assets/images/2006/05/Joomla.logo_.png) In order to solve to following issues in #Joomla 1.0.9

# Warning**: Invalid argument supplied for foreach() in **/var/www/vhosts/waltercedric.com/httpdocs/includes/frontend.php** on line **85**

Edit the file **includes/frontend.php** , this is the correct code:<span style="color: rgb(255, 0, 0);"> 

```
/**

* Cache some modules information

* @return array

*/

function &initModules() {

	global $database, $my, $Itemid;



	if (!isset( $GLOBALS['_MOS_MODULES'] )) {

		$query = "SELECT id, title, module, position, content, showtitle, params"

		. "\n FROM #__modules AS m"

		. "\n INNER JOIN #__modules_menu AS mm ON mm.moduleid = m.id"

		. "\n WHERE m.published = 1"

		. "\n AND m.access <= '". $my->gid ."'"

		. "\n AND m.client_id != 1"

		. "\n AND ( mm.menuid = '".$Itemid."' OR mm.menuid = 0 )"

		. "\n ORDER BY ordering";



		$database->setQuery( $query );

		$modules = $database->loadObjectList();

		foreach ($modules as $module) {

			$GLOBALS['_MOS_MODULES'][$module->position][] = $module;

		}

	}

	return $GLOBALS['_MOS_MODULES'];

}
```

 <span style="color: rgb(255, 0, 0); background-color: rgb(255, 255, 0); font-weight: bold;">In yellowwhat has changed in that method (extract)  
# . "\\n AND m.access <= <span style="background-color: rgb(255, 255, 0);">‘". $my->gid ."’"  
and  
. "\\n AND ( mm.menuid = <span style="background-color: rgb(255, 255, 0);">‘".$Itemid<span style="background-color: rgb(255, 255, 0);">."’ OR mm.menuid = 0 )"

All credits goes to user [Mathinka ](http://www.joomlaportal.de/joomlaportal-user/mathinka.html)([JoomlaPortal.de](http://www.joomlaportal.de))