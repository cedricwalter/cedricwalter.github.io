---

title: 'Working com_securityimages 2.0!'
date: '2005-11-07T19:25:27+01:00'
author: 'Cédric Walter'



tags:
    - characters
    - environment
    - installation
    - integration
    - interesting
    - responsible
    - securityimages
---

# The new version of com\_securityimages is now working locally in my developer environment.

- Multi core enable (code developed to authorize many external core and versions). Today "core 1.1" and "freecap 1.4" are available…
- Reload button which allow the user to ask a new pictures if he is not able to recognize the characters in the pictures
- Possibility to generate different capctha size by adding a http parameter when asking for URL, ideal for a login component integration 😉 (I am also on it)
- Refactored code with a lot of tricks 😉 -> interesting to read for all people wanting to try PHP
- Sound support has been started…it is on the good way

# What’s open before delivery…

- The installer is not up to date, I have at least 400% more files than in release 1.1.X … 🙂
- The database schema has changed (one column more in DB) -> a migration path will be provided for all 1.1.X users
- I’ve broke an interface, or better sa

This time I will test installation of component in my TEST and PROD #Joomla environment…  
Code already checked into CVS  
Expect a release without sound support (depends if I have enough time) to beta tester at the end of the week end…