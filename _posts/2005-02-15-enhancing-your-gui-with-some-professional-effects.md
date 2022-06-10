---
id: 1577
title: 'Enhancing Your GUI with some professional effects'
date: '2005-02-15T20:15:14+01:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=1577'
permalink: /javascript/enhancing-your-gui-with-some-professional-effects/
header:
  teaser: /assets/images/2005/02/javascript.jpg
tags:
    - HowTo
    - html
    - javascript
    - tutorial
---

# Browser #Javascript tips and tricks for improving Your business application GUI**  
All credits to original authors….

All theses examples have to be put in the body onload=”” tag of Your pages….

More in the [javascript section](http://waltercedric.com/Mambo/index.php?option=com_content&task=category&sectionid=9&id=109&Itemid=53)….

 **How to deactivate the F5 button (RELOAD page) IEonly**

```
function avoidF5key(){
    if (document.all) {
        document.onkeydown = function (){
            var key_f5 = 116; // 116 = F5
            if (key_f5==event.keyCode) {
                event.keyCode=0;
                return false;
            }
            return true;
        }
    }
}
```

 **How to change images when the user hover on them All**

```
<img src="image1.jpg" hsrc="image2.jpg">
```

```
function changeImageOnHover() {

    if (!document.getElementById) return
    var imgOriginSrc;
    var imgTemp = new Array();
    var imgarr = document.getElementsByTagName(‘img’);
    for (var i = 0; i < imgarr.length; i++) {
        if (imgarr[i].getAttribute(‘hsrc’)) {
            imgTemp[i] = new Image();
            imgTemp[i].src = imgarr[i].getAttribute(‘hsrc’);
            imgarr[i].onmouseover = function() {
                imgOriginSrc = this.getAttribute(‘src’);
                this.setAttribute(‘src’,this.getAttribute(‘hsrc’)) }
            imgarr[i].onmouseout = function() {
                this.setAttribute(‘src’,imgOriginSrc) }
        }
    }
}
```

 **How to display a moving slider which distract user during long server operations**

 Put this code anywhere in Your page:

```
<DIV ID="splashScreen" STYLE="position:absolute;z-index:5;top:30%;left:35%;">
    <TABLE BGCOLOR="#000000" BORDER=1 BORDERCOLOR="#000000"
           CELLPADDING=0 CELLSPACING=0 HEIGHT=100 WIDTH=100>
        <TR>
            <TD WIDTH="10%" HEIGHT="10%" BGCOLOR="#CCCCCC" ALIGN="CENTER" VALIGN="MIDDLE">
                


                <IMG SRC="/ofev/wait/rotatinghpvlogo.gif">
<FONT FACE="Helvetica,Verdana,Arial" SIZE=3 COLOR="#000066"><B>Page Loading. Please wait…</B></FONT>
<IMG SRC="/ofev/wait/wait.gif" BORDER=1 WIDTH=75 HEIGHT=15>


                

 </TD>

        </TR>
    </TABLE>
</DIV>
```

 Put this code in your submit function:

```
function myubmit(MyForm) {
    startPleaseWait();
    document.forms[MyForm].submit();
}
```

put this code in your Body onload:

```
onload=stopPleaseWait();

//autodetection of browser
// IE 5 and up, NS 6 and up
if (document.getElementById) {
    var upLevel = true;
} else // Netscape 4
if (document.layers) {
    var ns4 = true;
} else

//IE 4
if (document.all) {
    var ie4 = true;
}

function showObject(obj) {
    if (ns4) {
        obj.visibility = "show";
    } else if (ie4 || upLevel) {
        obj.style.visibility = "visible";
    }
}

function hideObject(obj) {
    if (ns4) {
        obj.visibility = "hide";
    } else if (ie4 || upLevel) {
        obj.style.visibility = "hidden";
    }
}

//start the please wait popup windows
function startPleaseWait() {
    if (upLevel) {
        var splash = document.getElementById("splashScreen");
    } else if (ns4) {
        var splash = document.splashScreen;
    } else if (ie4) {
        var splash = document.all.splashScreen;
    }
    if (splash != null)

        showObject(splash);
}

//stop the please wait popup windows
function stopPleaseWait() {
    if (upLevel) {
        var splash = document.getElementById("splashScreen");
    } else if (ns4) {
        var splash = document.splashScreen;
    } else if (ie4) {
        var splash = document.all.splashScreen;
    }
    if (splash != null)

        hideObject(splash);
}

// avoid refresh of page (key F5) only working in IE
function avoidF5key() {
    if (document.all) {

        document.onkeydown = function (
            {
                var key_f5 = 116; // 116 = F5
                if(key_f5 == event.keyCode)

        {
            event.keyCode = 0;
            return false;
        }
        return true;
    }
    }
}
```