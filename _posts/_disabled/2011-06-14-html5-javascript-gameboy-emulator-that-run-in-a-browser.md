---

title: 'HTML5/JavaScript Gameboy Emulator that run in a browser'
date: '2011-06-14T20:58:08+02:00'
author: 'Cédric Walter'



header:
  teaser: /assets/images/2011/06/HTML5_JavaScript_Gameboy_Emulator.png
tags:
    - emulator
    - games
    - html
    - java
    - javascript
    - local
    - vintage
    - vintagegaming
---

[![HTML5_JavaScript_Gameboy_Emulator](/assets/images/2011/06/HTML5_JavaScript_Gameboy_Emulator.png "HTML5_JavaScript_Gameboy_Emulator")](http://www.grantgalitz.org/gameboy/)

[Grant Galitz](http://www.grantgalitz.org/) has released an [Open Source GameBoy Color emulator](http://www.grantgalitz.org/gameboy/) written in HTML5/JavaScript! and it plays local roms nicely (Here Zelda). Congratulations to Him for this master piece of work. The GameBoy can now be played everywhere in any decent browser.

![HTML5_JavaScript_Gameboy_Emulator_zelda](/assets/images/2011/06/HTML5_JavaScript_Gameboy_Emulator_zelda.png "HTML5_JavaScript_Gameboy_Emulator_zelda")

> This is a GameBoy Color emulator written purely in #JavaScript by Grant Galitz.
> 
> The video is done either through HTML5 canvas or by a fallback of creating BMP binary picture format data URI strings and appending the result to regular HTML img tags.
> 
> Save states are implemented through the window.localStorage object, and are serialized/deserialized through JSON. SRAM saving is also implemented through the window.localStorage object, and are serialized/deserialized through JSON. In order for save states to work properly on most browsers, you need set the maximum size limit for DOM storage higher, to meet the needs of the emulator’s save data size.
> 
> For more information about this emulator and its source code, visit the #GIT repository at:<https://github.com/grantgalitz/GameBoy-Online>.