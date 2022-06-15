---

title: 'CSS sprite generator online'
date: '2009-05-26T23:08:01+02:00'
author: 'Cédric Walter'



header:
  teaser: /assets/images/2009/05/css.sprite.generator.png
tags:
    - internet
    - web
    - web2.0
---

[![css.sprite.generator](/assets/images/2009/05/css.sprite.generator.png "css.sprite.generator")](http://css-sprite-generator.waltercedric.com)

Here is an useful tool for improving performance of your website: The CSS sprite generator takes a number of source images and combines them into a single "sprite" image and supplies CSS to map to each image within the sprite. The technique this tool employs is often used to improve the performance of a web site by reducing the number of HTTP requests that the client’s browser needs to make.

CSS sprites are a way to reduce the number of HTTP requests made for image resources referenced by your site. Images are combined into one larger image at defined X and Y coordinates. Having assigned this generated image to relevant page elements the `background-position` CSS property can then be used to shift the visible area to the required component image.

This technique can be very effective for improving site performance, particularly in situations where many small images, such as menu icons, are used. The [Yahoo! home page](http://www.yahoo.com/), for example, employs the technique for exactly this.

I’ve installed a copy of this tool at:

<http://css-sprite-generator.waltercedric.com>

And took time to:

1. Improve the overall internal security of the tools, by using some technique of Joomla! framework, so most type of attacks (XSS, parameter tampering, path browsing, avoid direct execution of files) should be eliminated,
2. The tool now extract the ZIP file without being forced to use the dangerous shell\_exec php command (I switch it off on my host anyway), the tool support if they are available in that order: ZipArchive(), zip\_open() and shell\_exec()
3. Make the code a bit more portable (avoiding .. inclusion for files, use DIRECTORY\_SEPARATOR)

And I did audit the code using [Acunetix Web security Scanner](http://www.acunetix.com/vulnerability-scanner/), the result can be seen below:

![css.sprite.generator.acunetix](/assets/images/2009/05/css.sprite.generator.acunetix.png "css.sprite.generator.acunetix")

The source code for CSS Sprite Generator is available for download and is covered by a BSD license. Want to run a local copy, get the source code at [https://launchpad.net/css-sprite-generator](https://launchpad.net/css-sprite-generator "https://launchpad.net/css-sprite-generator")

# My version** will be available soon, link to appear later this week.

### Note about PHP and Zip support

To install zip PECL package run the following as root:

# pear install [http://pecl.php.net/get/zip](http://pecl.php.net/get/zip)

and create a new file at

# vi /etc/php5/conf.d/zip.ini

with following content

extension=zip.so

Restart apache