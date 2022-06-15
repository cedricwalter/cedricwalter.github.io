---
id: 4773
title: 'Watermarking your images with ImageMagick'
date: '2009-10-13T00:10:12+02:00'
author: 'Cédric Walter'



---

[![joomla_cms](/assets/images/2006/01/joomla_cms_thumb.png "joomla_cms")](/assets/images/2009/10/joomla_cms.png)

# ![](/assets/images/2009/10/taticelinuxtux10409_thumb.png) *Digital watermarking*** *is the process of possibly irreversibly embedding information into a digital signal. The signal may be audio, pictures or video, for example. If the signal is copied, then the information is also carried in the copy. In visible watermarking, the information is visible in the picture or video. Typically, the information is text or a logo which identifies the owner of the media.* \[[Wikipedia](http://en.wikipedia.org/wiki/Image_watermarking)\]

I decide to go with **an offline watermarking first**, but you can let any #Joomla!® extension watermark picture on the fly using php and .htaccess (at the cost of additional CPU server resources).

### Why Watermarking pictures?

There is a lot of reasons, among others:

- To limit images stealing, advanced users will still be able to crop/blur your watermark through!
- To drive more new users/returning visitors to your site, anybody using your images in a forums may want to visit your site if the watermark can be read (don’t use complex logo, except if you have a well known brand)
- To advertise your online work,

## Attention

The first thing to do is **to make a backup of your images**! applying a watermarking is a non reversible process, usually this mean for Joomla!® to save your /images/stories directory

You’ll have to decide what size you want your photos to be displayed at and how much space the text or logo will take up. Keep it small enough so as not to ruin the photo.

### Create a watermark using GIMP

Download the excellent [GIMP](http://www.gimp.org/) if not already done.

- Windows user can download it freely at <http://www.gimp.org/windows/>
- Linux users, using OpenSuse, Mandrake, Debian or any other have [GIMP](http://www.gimp.org/) already installed.

Create a new picture with transparent background

![watermark.in.gimp.02](/assets/images/2009/10/watermark.in_.gimp_.02.png "watermark.in.gimp.02")

Using the text tool, create a black or white title, you can also import/create an original logo.

![watermark.in.gimp](/assets/images/2009/10/watermark.in_.gimp_.png "watermark.in.gimp")

Save the file using a .png or .gif extension, don’t use .jpg as it don’t handle transparency

Result:

![watermark](/assets/images/2009/10/watermark.png "watermark")

### Prepare your Linux server

My script require you to install [ImageMagick](http://www.imagemagick.org/script/index.php)

[ImageMagick®](http://www.imagemagick.org/script/index.php)<sup> </sup> is a software suite to create, edit, and compose bitmap images. It can read, convert and write images in a variety of [formats](http://www.imagemagick.org/script/formats.php) (over 100) including [DPX](http://www.imagemagick.org/script/motion-picture.php), [EXR](http://www.imagemagick.org/script/high-dynamic-range.php), GIF, JPEG, JPEG-2000, PDF, PhotoCD, PNG, Postscript, SVG, and TIFF. Use [ImageMagick](http://www.imagemagick.org/script/index.php) to translate, flip, mirror, rotate, scale, shear and transform images, adjust image colors, apply various special effects, or draw text, lines, polygons, ellipses and Bézier curves.

#### ImageMagick install in OpenSuse

As root run

\# zipper in ImageMagick

#### ImageMagick install in Debian

As root run

\# apt-get install ImageMagick

## Features

### Support dir name and filename space

Support space in path and filename, not so easy as you think. Bash force me to use “” around variables to support space in path and use a while loop instead of a for loop to support space in filename.

### Scan you directories

Scan your directories recursively for all pictures starting starting from the current directory (.).

### Do not watermark all pictures

I don’t want to apply a watermark to all my pictures, I have decided to check against the size of the images and apply only if a threshold is reach (here all images bigger in width than 1024 pixels). The command identify allow you to retrieve the characteristics of any pictures

geometry=$(identify $each)

return for example

./desktop.jpg JPEG 1024×819 1024×819+0+0 DirectClass 8-bit 94.8613kb

Add a bit of Bash REGEX magic (since 2004 with bash 4.0) to correctly identify picture size

regex=”(\[0-9\]\*)x(\[0-9\]\*)”

and voila! I can now use $height and $width in my function.

## Limitations

### Do not run the script twice or more

Do not run the script twice or more on same directory/sub directories, or the watermark will get darker and darker. The code do not check if any watermark already exist, and apply the same watermark over and over pictures that reach the threshold.

## Installation

The script must be runnable

\# chmod u+x watermark.sh

## Configuration

open the file watermark.sh

\# vi watermark.sh

and change all variables value at the top

### Position of the Text Watermark

You can position the text using the following [Gravity](http://www.imagemagick.org/script/command-line-options.php#gravity), possible values are: <kbd>NorthWest</kbd>, <kbd>North</kbd>, <kbd>NorthEast</kbd>, <kbd>West</kbd>, <kbd>Center</kbd>, <kbd>East</kbd>, <kbd>SouthWest</kbd>, <kbd>South</kbd>, <kbd>SouthEast</kbd>.

| <kbd>NorthWest</kbd> | <kbd>North</kbd> | <kbd>NorthEast</kbd> |
|---|---|---|
|  |  |  |
|  | <kbd>Center</kbd> |  |
|  |  |  |
| <kbd>SouthWest</kbd> | <kbd>South</kbd> | <kbd>SouthEast</kbd> |

If the [-gravity](http://www.imagemagick.org/script/command-line-options.php#gravity) option is present with <kbd>NorthEast</kbd>, <kbd>East</kbd>, or <kbd>SouthEast</kbd> gravity, it gives the distance leftward from the right edge of the image to the right edge of the cropping region. Similarly, if the [-gravity](http://www.imagemagick.org/script/command-line-options.php#gravity) option is present with <kbd>SouthWest</kbd>, <kbd>South</kbd>, or <kbd>SouthEast</kbd> gravity, the distance is measured upward between the bottom edges.

[See more details HERE](http://www.imagemagick.org/script/command-line-options.php#gravity)

## The bash script

### Source Code

```
#!/bin/bash echo <span class="str">"*******************************************" echo <span class="str">"* Image Watermarking Script               *" echo <span class="str">"* By Cedric Walter - www.waltercedric.com *" echo <span class="str">"* Licence GNU/GPL v3 or later              *" echo <span class="str">"*******************************************" echo <span class="str">" "  BASEDIR=.  WATERMARK=<span class="str">"/srv/www/vhosts/waltercedric.com/httpdocs/watermark.png"  #Below <span class="kwrd">this width no watermark will be apllied MIN_PIC_HEIGHT=600 MIN_PIC_WIDTH=800  # NorthEast, East, or SouthEast gravity, it gives the distance leftward from the

# right edge of the image to the right edge of the cropping region.  # Similarly, <span class="kwrd">if the -gravity option <span class="kwrd">is present with SouthWest, South, or SouthEast

# gravity, the distance <span class="kwrd">is measured upward between the bottom edges.  WATERMARK_POSITION=northeast  #Transparency percentage TRANSPARENCY_PERCENTAGE=15  #normal user dont change below  #<span class="kwrd">this use bash regular expression capabilities regex=<span class="str">"([0-9]*)x([0-9]*)"    <span class="kwrd">function applyWatermarkForExtension {  find $BASEDIR -type f -name <span class="str">"$1" | <span class="kwrd">while read each    <span class="kwrd">do      geometry=$(identify <span class="str">"$each")     echo $geometry         <span class="kwrd">if [[ ${geometry} =~ ${regex} ]]; then         echo <span class="str">"$geometry matches"         i=1          n=${#BASH_REMATCH[*]}          width=${BASH_REMATCH[$i]}         let i++          height=${BASH_REMATCH[$i]}         echo width=$width height=$height          <span class="kwrd">if [ $width -gt $MIN_PIC_WIDTH ];then           echo <span class="str">"Working on $each ..."           composite -gravity $WATERMARK_POSITION -dissolve $TRANSPARENCY_PERCENTAGE $WATERMARK <span class="str">"$each" <span class="str">"$each" 2> /dev/<span class="kwrd">null           echo <span class="str">"... Done!"         fi     fi        done  }   #add <span class="kwrd">new pictures extensions here  applyWatermarkForExtension <span class="str">"*.jpg" applyWatermarkForExtension <span class="str">"*.gif" applyWatermarkForExtension <span class="str">"*.png" applyWatermarkForExtension <span class="str">"*.jpeg"  exit 0
```

## Download

[Download from my download section.](https://waltercedric.com/new/?p=536)

### references

- <http://www.imagemagick.org/script/command-line-processing.php>
- <http://www.imagemagick.org/script/command-line-options.php>
- <http://www.imagemagick.org/Usage>