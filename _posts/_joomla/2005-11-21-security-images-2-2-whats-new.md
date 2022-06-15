---

title: 'Security Images 2.2 &#8211; whats new&#8230;'
date: '2005-11-21T09:37:12+01:00'
author: 'Cédric Walter'



header:
  teaser: /assets/images/2005/11/tooMuchretry.gif
tags:
    - joomla
    - securityimages
---

I will also release a new version of akocomment, and resolve the logged in user bugs that many people have reported me.

# release 2.2.0 to be released soon**

- **All** **–** **Security patches**: add missing index.html and PHP missing header: *defined( ‘\_VALID\_MOS’ ) or die( ‘Direct Access to this location is not allowed.’ );*
- **Plugin core** is now able to output image to PNG, JPG or GIF selection in admin core settings
- **Plugin core** is now able to limit the reload tentative of the users, retry counter is stored in user session. If user reload picture more than **Retry** in tab **Text**  
     ![](/assets/images/2005/11/tooMuchretry.gif)
- **Plugin core** has a new switch: Use extended charset in image: ex: +\*%&amp;/()=?!$?@#…true or false
- **Plugin core** is now able to output align text in image using 4 strategies:  
    | System font with random character position | ![](/assets/images/2005/11/SystemFontWithRandomCharacterPosition.gif) |
    |---|---|
    | TTFonts with random character position    The best for me, OCR is more difficult | ![](/assets/images/2005/11/TTFRandomXYalignement.gif) |
    | TTFonts with linear character position    (Default setting) | ![](/assets/images/2005/11/TTFontsWithLinearCharacterPosition.gif) |
    | Random | Above 3 in a random order. |
- **All** **–** Patches for Login/registration #Joomla framework as file in /patches/ You have either: 
    - To modify joomla files manually y following steps below OR
    - Copy already patched file (Joomla 1.0.3) to the server at the right place
- **All** **– Bug** in function getSecurityImageField($textid) the javascript was not boostraped, no influence but bug was revealed when doing login integration
- **All** **– General Settings**: It is now possible to display selectively the reload or sound button.
- **com\_contact**, if user failed to enter the right captcha, he lost his data. This is not a bug but more a functionnalities not existing in #Joomla -> the form with history back is always initialize with empty fileds in Mozilla Firefox, while in IE it is working
- **Plugin All** **– Bug** if logs are activated, php code *logger.php* was not included into the delegate plugins/xx/yy/*checker.php*
- **All** **– New Tab in "General settings" called "Joomla-Patches"** this let You swicth on or off the use of security images in login, registration.
- **Plugin core** **– Bug** correct the contrast of 2 images bg-L-5.png and bg-L-18.png : there were too dark!
- **All** **–** A new menu entry "Check if latest version" has been add, I only have to finish the server code.-> it is not working right now but soon.

# AkoComment**

Administrator mail UTF8 support patch by Karel Neugebauer jr. – http://itx.cz

Install security images form code in existing Joomla code…

| point A | **Open** components\\com\_registration\\registration.html.php **line 54** in function registerForm($option, $useractivation) |
|---|---|
|  | <font color="#808080"><tr>    <td>    <?php echo \_PROMPT\_EMAIL; ?>    </td>    <td>    <input type="text" name="confirmEmail" class="inputbox" size="40" />    </td>    </tr> **<?php     //security image by www.waltercedric.com    global $mosConfig\_absolute\_path;    if (file\_exists($mosConfig\_absolute\_path.’/administrator/components/com\_securityimages/patches/registration.lostPassForm.php’)) {    require\_once($mosConfig\_absolute\_path.’/administrator/components/com\_securityimages/patches/registration.lostPassForm.php’);    }    //end security image by www.waltercedric.com    ?>**    <font color="#808080">    <tr>    <td colspan="2">    <input type="hidden" name="option" value="<?php echo $option;?>" />    <input type="hidden" name="task" value="sendNewPass" /> <input type="submit" class="button" value="<?php echo \_BUTTON\_SEND\_PASS; ?>" />    </td>    </tr> |
| point B | **Open** components\\com\_registration\\registration.html.**at line 164 in** function registerForm($option, $useractivation) |
|  | <font color="#808080"><tr>    <td>    <?php echo \_REGISTER\_VPASS; ?> \*    </td>    <td>    <input class="inputbox" type="password" name="password2" size="40" value="" />    </td>    </tr>     **<?php     //security image by www.waltercedric.com    global $mosConfig\_absolute\_path;    if (file\_exists($mosConfig\_absolute\_path.’/administrator/components/com\_securityimages/patches/registration.html.registerForm.php’)) {    require\_once($mosConfig\_absolute\_path.’/administrator/components/com\_securityimages/patches/registration.html.registerForm.php’);    }    //end security image by www.waltercedric.com    ?>**<font color="#808080">    <tr>    <td colspan="2">    </td>    </tr>     |
| <font color="#808080">point C |  |

Install security images checking code in existing Joomla code…

| Point 1 | **Open** <font face="Courier New Baltic">\\components\\com\_registration\\registration.php **after line 61 add what is in bold below** |
|---|---|
|  | <font color="#808080">$checkusername = mosGetParam( $\_POST, ‘checkusername’, ” );    $checkusername = $database->getEscaped( $checkusername );    $confirmEmail = mosGetParam( $\_POST, ‘confirmEmail’, ”);    $confirmEmail = $database->getEscaped( $confirmEmail );        **//securityimages by www.waltercedric.com    global $mosConfig\_absolute\_path;    if (file\_exists($mosConfig\_absolute\_path.’/administrator/components/com\_securityimages/patches/registration.SendNewPass.php’)) {    include\_once($mosConfig\_absolute\_path.’/administrator/components/com\_securityimages/patches/registration.SendNewPass.php’);     }    //end security images by www.waltercedric.com**    <font color="#808080">    $query = "SELECT id" |
| Point 2 | **Open** \\components\\com\_registration\\registration.php **after line 123 (123 is after added the point 1)** |
|  | <font color="#808080">function saveRegistration( $option ) {    global $database, $acl;    global $mosConfig\_sitename, $mosConfig\_live\_site, $mosConfig\_useractivation, $mosConfig\_allowUserRegistration;    global $mosConfig\_mailfrom, $mosConfig\_fromname, $mosConfig\_mailfrom, $mosConfig\_fromname;  if ($mosConfig\_allowUserRegistration==’0′) {    mosNotAuth();    return;    }      **//securityimages by www.waltercedric.com    global $mosConfig\_absolute\_path;    if (file\_exists($mosConfig\_absolute\_path.’/administrator/components/com\_securityimages/patches/registration.SaveRegistration.php’)) {    include\_once($mosConfig\_absolute\_path.’/administrator/components/com\_securityimages/patches/registration.SaveRegistration.php’);    }     //end security images by www.waltercedric.com**     <font color="#808080">$row = new mosUser( $database );  if (!$row->bind( $\_POST, ‘usertype’ )) {    echo "<script> alert(‘".$row->getError()."’); window.history.go(-1); </script>\\n";    exit();    }   |
| Point 3 | **Open** includes\\joomla.php **after line 610** |
|  | <font color="#808080">$passwd = md5( $passwd );    $bypost = 1;    }    $remember = mosGetParam( $\_POST, ‘remember’, ” ); **//securityimages by www.waltercedric.com    global $mosConfig\_absolute\_path;    if (file\_exists($mosConfig\_absolute\_path.’/administrator/components/com\_securityimages/patches/joomla.login.php’)) {    include\_once($mosConfig\_absolute\_path.’/administrator/components/com\_securityimages/patches/joomla.login.php’);     }    //end security images by www.waltercedric.com**    <font color="#808080">    if (!$username \|\| !$passwd) {    echo "<script> alert(\\"".\_LOGIN\_INCOMPLETE."\\"); window.history.go(-1); </script>\\n";    exit();    } else { |
|  |  |