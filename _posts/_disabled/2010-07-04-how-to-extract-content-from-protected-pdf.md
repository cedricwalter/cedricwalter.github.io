---

title: 'How to extract content from protected PDF'
date: '2010-07-04T15:19:18+02:00'
author: 'Cédric Walter'



tags:
    - enjoy
    - look
---

![pdf-icon](/assets/images/2010/07/pdficon_32bb5f3433b379c43fdabac6ea14ba32.png "pdf-icon")Some PDFs on the internet have a copy protection to make sure you cannot copy-paste any content from the PDF into a document you’re writing. Defeating this protection is very easy as you will see in this post.

I will use a combination of Open Source tools to extract the content of a protected PDF..

This is how a protected PDF look like in Adobe Acrobat under File – Properties

 [![password.protected.pdf.copy.text](/assets/images/2010/07/password.protected.pdf.copy_.text_thumb.png "password.protected.pdf.copy.text")](http://www.waltercedric.com/images/stories/password.protected.pdf.copy.text.png)

You will need to obtain GhostScript

> Ghostscript is an interpreter for the PostScript language and for PDF, and related software and documentation.

So run the self-extracting EXE from <http://pages.cs.wisc.edu/~ghost/doc/GPL/gpl871.htm> to install the engine

> [gs871w32.exe](http://mirror.cs.wisc.edu/pub/mirrors/ghost/GPL/gs871/gs871w32.exe), GPL Ghostscript 8.71 for 32-bit Windows (the common variety).  
> [gs871w64.exe](http://mirror.cs.wisc.edu/pub/mirrors/ghost/GPL/gs871/gs871w64.exe), GPL Ghostscript 8.71 for 64-bit Windows (x86\_64).

Now install the viewer from <http://pages.cs.wisc.edu/~ghost/gsview/get49.htm>

> [gsv49w32.exe ](http://mirror.cs.wisc.edu/pub/mirrors/ghost/ghostgum/gsv49w32.exe)Win32 self extracting archive   
> [gsv49w64.exe ](http://mirror.cs.wisc.edu/pub/mirrors/ghost/ghostgum/gsv49w64.exe)Win64 (x86\_64) self extracting archive

[![password.protected.pdf.copy.gsview](/assets/images/2010/07/password.protected.pdf.copy_.gsview_thumb.png "password.protected.pdf.copy.gsview")](http://www.waltercedric.com/images/stories/password.protected.pdf.copy.gsview.png)

Then start [Gsview](http://pages.cs.wisc.edu/~ghost/gsview/get49.htm) and Open the PDF, you can either convert it to PS (Postscript) and you’ll be able to edit it like any other document or under the menu Edit – text extract you’ll be able to save the context in a Text file. Enjoy 🙂