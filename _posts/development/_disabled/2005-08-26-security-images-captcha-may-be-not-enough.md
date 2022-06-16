---

title: 'Security images (captcha) may be not enough'
date: '2005-08-26T19:13:20+02:00'
author: 'Cédric Walter'



---

 oups it seems (!) that protecting form with security images may be a not so good idea (it may stop a lot of spammer but not all)… As there is already some open source or closed programs to defeat them…I am convince that not all spammer will be able or want to attack site protected with images, especially user homepage. But if the site is well known (ex: Yahoo)…read below: frightening!

[PWNtcha stands for "Pretend Weâ&#128;&#153;re Not a Turing Computer but a Human Antagonist",](http://sam.zoy.org/pwntcha/) as well as PWN capTCHAs. This projectâ&#128;&#153;s goal is to demonstrate the inefficiency of many captcha implementations.

Anyway this page is giving me enough idea at how to tune my code to avoid/disallow/make it more difficult automatic recognition of characters…

Among others, [from this page](http://www.brains-n-brawn.com/default.aspx?vDir=aicaptcha):

- render the characters with different colors -> I will do it, easy
- make some characters darker than the background, and some lighter
- use gradient colors for the backgrounds and the characters
- dont align all the characters vertically -> Possible in current implementation
- dont make the answers words, so that a dictionary could be used -> already random
- use more characters and symbols -> done
- use uppercase and lowercase characters -> already done
- use a different number of characters each time ->done
- rotate some of the characters more drastically (i.e. upside down) -> will try
- do more overlapping of characters
- Add a grid ->done
- make some pixels of a single character not touching
- have grid lines that cross over the characters with their same color
- consider asking natural language questions

[Breaking a Visual CAPTCHA homepage](http://www.cs.berkeley.edu/~mori/gimpy/gimpy.html) of the Shape Contexts based approach to break Gimpy, the CAPTCHA test used at Yahoo! to screen out bots. Our method can successfully pass that test 92% of the time