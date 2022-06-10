---
id: 8046
title: 'Git and GitHub Training'
date: '2013-05-27T19:06:11+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=8046'
permalink: /development/git-and-github-training/
image: /wp-content/uploads/2013/05/github.png
tags:
    - git
    - github
    - tutorial
---

![github](/assets/images/2013/05/github.png "github")

I went today to a [Git](http://git-scm.com/)/[GitHub](https://github.com/ "GitHub social coding Git repositories") training organized by [Canoo](http://www.canoo.com/ "Canoo") and lead by [Tim Berglund](http://timberglund.com/ "Tim Berglund is a githubber") ([GitHub.com](https://github.com/ "GitHub social coding Git repositories")) The online training presentation is available at <http://teach.github.com/presentations/git-foundations.html> use first left key then left/right/up and bottom keys to navigate through the slides.

My notes are still under reviews, but are available at <http://gittraining.waltercedric.com>

[GitHub](https://github.com/ "GitHub social coding Git repositories") also offers free, short, topical online classes about [GitHub](https://github.com/ "GitHub social coding Git repositories"), [Git](http://git-scm.com/) and the union of these two technologies [Here](http://training.github.com/web/free-classes/ "GitHub Free Training").

<span style="font-size: 150%; font-family: SansSerif,sans-serif; font-weight: bold;">GIT training

- Tim Berglund 
    - [<span class="l">~ http://timberglund.com/ ](http://timberglund.com/)[<span class="l">~ https://twitter.com/tlberglund ](https://twitter.com/tlberglund)
        
        [<span class="l">~ https://github.com/tlberglund ](https://github.com/tlberglund) ![](http://gittraining.waltercedric.com/images/GIT%20training_2122405937457008671.jpeg)
        
        Online Slides
        
        
        - http://teach.github.com/presentations/git-foundations.html#/
- <span style="font-family: SansSerif,sans-serif; font-weight: bold;">config
    - global 
        - user level config for logged in user
    - local 
        - use when pushing to github later
    - system 
        - apply to every user logged in on the machine
    - Git autodetect file type 
        - binary
        - text 
            - CRLF 
                - dont mess with it if it is working
                
                \#Colorize console output for legibility  
                git config –global color.ui auto
                
                \#Force files to be LF in the repo, even on Mac/Linux  
                git config –global core.autocrlf input
                
                \#Force Windows to convert to CRLF  
                \# on checkout and to LF on `add`  
                git config –global core.autocrlf true
    - Git Help 
        - git help config 
            - To print and read
- <span style="font-family: SansSerif,sans-serif; font-weight: bold;">1. Staging area
    - <span style="font-family: SansSerif,sans-serif; font-weight: bold;">first add
        - git init newproject
        - cd newproject
        - vi caesar.txt
        - git status 
            - file red 
                - untracked
                - modified
        - git add caesar.txt 
            - file green = tracked
            - it is now in staging
        - refs are name for objects 
            - ex master
        - modifiy the file 
            - vi caesar.txt
        - file has to go to staging before being committed 
            - git add caesar.txt 
                - go in staging
                - when in staging the file has no refs
            - git commit -m “small change” 
                - now has a name associated to it
    - <span style="font-family: SansSerif,sans-serif; font-weight: bold;">Why
        - so you can work on paralell files or topics 
            - is it not a bad sign?
        - you can also commit then later “part” of the file 
            - you could break easily since unit test may be broken with half file
        - advance command 
            - revert 
                - not like subversion
            - cherry pick
            - only if you know what it is in your stagign area
- <span style="color: rgb(255, 0, 0); font-size: 133%; font-family: SansSerif,sans-serif; font-weight: bold;">4. Branching
    - <span style="color: rgb(255, 0, 0); font-family: SansSerif,sans-serif; font-weight: bold;">HEAD
        - equals to most recent commit
        - is going to be the parent of the next commit
        - it is where the branch live
        - master is just another branch
        - a branch is at least 2 commit with the same parent
    - branch is fast because it is local
    - Play 
        - create a branch 
            - git branch feature
            - this do not switch to the branch
        - move to branch 
            - git checkout feature check where you are working
                
                
                - git branch
                - git status
                
                vi caesar.txt
                
                git add caesar.txt
                
                git commit -m “add a title”
                
                git lg
                
                
                - ![](http://gittraining.waltercedric.com/images/GIT%20training_869757525407852613.jpeg)
        - merge feature to master 
            - git checkout master
            - git merge feature 
                - ![](http://gittraining.waltercedric.com/images/GIT%20training_5031759174995103116.jpeg)
            - and kill that branch 
                - better not used it if its a feature
    - <span style="font-family: SansSerif,sans-serif; font-weight: bold;">git reset
        - if we discover an error in commit message 259a4c9
        - hard 
            - reset both master and any branch 
                - like merge has never happen
                - blow up old commit and create new ons!
                - dangerous you can lose code
        - Play 
            - git reset –hard 259a4c9
            - git commit –amend 
                - commits are lost 
                    - you can not find it
                    - still there as an object but has no refs!
                    - you have to remember the hash
                    - may be garbage collected after 60 days
                    - git reflog 
                        - may be still in there
            - you can then redo a git merge feature
        - better use rebase 
            - 95% of git users dont know how
            - quite advanced
    - git branch adopted 259a4c9 
        - create a branch adopted of the amended commit
    - delete the branch 
        - git branch -d feature 
            - delete the label of the branch
            - but the commit stay of course
        - git branch -d adopted 
            - will complains as not merged
            - force the delete of non merged
            - git branch -D adopted
- <span style="color: rgb(255, 0, 0); font-size: 133%; font-family: SansSerif,sans-serif; font-weight: bold;">5. merge conflict
    - GIT search for chunk that are similar and can merged automatically
    - Play 
        - git merge feature
        - git status 
            - show merge conflict
    - if you know what is in reflog 
        - git reset –hard HEAD@{1}
        - you can undo last command
        - not always 1 command lead to only one entry in reflog
        - use with precaution
    - external merge tool 
        - p4merge 
            - config 
                - git config –global merge.tool p4merge
                - git config –global mergetool.prompt false
                - git config –global mergetool.keepBackup false
                - git config –global mergetool.keepTemporaries false
            - use 
                - git mergetool
    - to solve merge conflict on binary file 
        - automatic merge not possible
        - you can decide your or theirs is the right one
        - git checkout –theirs — animated.gif 
            - git add animated.gif 
                - git commit -m “use their version of binary animated.gif”
- <span style="color: rgb(255, 0, 0); font-size: 133%; font-family: SansSerif,sans-serif; font-weight: bold;">7. GitHub
    - git remote add origin https://xxxxx/yyyy.git 
        - create a local config at .git/config
        - origin is a convention name
    - git push 
        - push unique content to remote
        - git push -u origin master 
            - -u to make master remember that it
                
                track remote origin
        - git branch -a 
            - now display also remote branch in red
    - git help daemon 
        - share to start a git server
            
            to server your local
            
            git repo as a remote
            
            for colleagues
    - git help bundle 
        - no network? write objects and refs into files
            
            for sharing on cdrom or
            
            shared drive
            
            for highla secure environment
            
            without network: ex military
    - git fetch 
        - get all objects, blobs and commit but do not change master
            
            
            - just get and save commits in local remote area (read only)
                
                git checkout feature5
                
                
                - feature5 being in remote origin
                - will create a local branch feature5
    - git pull 
        - do a git fetch and merge into master
    - git push 
        - need no parameter but use push.default if it exist
        - every local branch will be pushed as default if none have been specified
        - use 
            - git config –global push.default simple 
                - to only push the branch where you have
                - set it if you dont know te default
            - git help config 
                - upstream
                - simple
                - …
        - when pushing failed 
            - failed to push some refs upstream because there is a new commit
                
                in master which is ahead of mine
                
                fast forwards will work
                
                only if i have new stuff
                
                
                - git pull (make a merge) git push
                    
                    better would have been to
                    
                    make a rebase also to clear
                    
                    the noise of merging to push
    - Fun 
        - [<span class="l">~ http://octodex.github.com/ ](http://octodex.github.com/%20)
- <span style="color: rgb(255, 0, 0); font-size: 150%; font-family: SansSerif,sans-serif; font-weight: bold;">9. Collaborating
    - Play 
        - git config –global credential.helper cache 
            - work only in linux/mac
            
            vi cedric.txt
            
            git add .
            
            git commit -m “add file”
            
            git push
            
            
            - if not succed do a git pull
            
            gitk –all
            
            
            - see a lot of noise because of merge done by pull before
                
                each push
            
            force to rebase on pull is a
            
            good idea to remove noise
            
            
            - git config –local branch.master.rebase true
            - or better 
                - git config –global branch.autosetuprebase always ![](http://gittraining.waltercedric.com/images/GIT%20training_4278618534427246241.jpeg)
    - tags 
        - 3 differents 
            - reference 
                - git tag XXXXX hash 
                    - it is a reference
                    - always point to commit
            - annotated 
                - -a –annotate Make an unsigned, annotated tag object
                - git tag -a ANNOTATED\_TAG
                - is an indirection to a tag
            - …
            
            <span style="color: rgb(255, 0, 0);"> 
            
            tags are not pushed
            
            by default to origin
            
            
            - git push 
                - do nothing
            - git push origin ANNOTATED\_TAG 
                - push a specific tag
            - git push –tags 
                - push all tags
            
            delete
            
            
            - a tag 
                - git tag -d tagname
            - a branch 
                - git push –delete origin branchname
                - git push origin :branchname
- revealJS
- <span style="font-family: SansSerif,sans-serif; font-weight: bold;">filesystem
    - Hooks 
        - entry point to hook
    - refs
    - objects
    - HEAD 
        - commit youre on
- <span style="font-family: SansSerif,sans-serif; font-weight: bold;">2. Log history
    - \# git log
    - hash 
        - 40 character hash
    - git log –format= email
    - git log –format=raw 
        - useful for training
        - relationship tree -> parent -> author -> committer 
            - it is a graph 
                - important to understand
            - git log –graph
            - git log –graph –decorate –format=oneline 
                - still a lot of hash
            - git log –graph –decorate –format=oneline –abbrev-commit
    - git log –patch 
        - Show all history with patches
    - <span style="font-family: SansSerif,sans-serif; font-weight: bold;">aliases
        - git lol 
            - git config –global alias.lol “log –graph –decorate –oneline –all” <span style="color: rgb(51, 136, 0);">http://boyen.github.com
                
                
                - like a puppet for developer
                
                ![](http://gittraining.waltercedric.com/images/GIT%20training_2354008536894185700.jpeg)
        - git lg 
            - git config –global alias.lg “log –graph –pretty=format:’%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset’ –abbrev-commit –all” ![](http://gittraining.waltercedric.com/images/GIT%20training_8492003915828502756.jpeg)
- <span style="color: rgb(255, 0, 0); font-size: 133%; font-family: SansSerif,sans-serif; font-weight: bold;">3. Diff
    - git diff
    - git diff –staged 
        - what is my next commit will do?
    - git diff –word-diff 
        - ![](http://gittraining.waltercedric.com/images/GIT%20training_8590750968389453306.jpeg)
    - git diff HEAD 
        - show changes between local and something in history
    - create scripts 
        - ~/scripts/git-xxxxxx
        - ~/scripts/git-log
    - git log ec7674 -1 –patch 
        - to look at a particular commit and its diff
    - git show ec7674
- <span style="color: rgb(255, 0, 0); font-size: 133%; font-family: SansSerif,sans-serif; font-weight: bold;">4. move and rename
    - remove a file from VCS and keep local copy 
        - git rm –cached — <filename>
        - git commit -m “remove from vcs”
    - GIT integrity check 
        - each commit contains at least one tree and one or more blobs
        - content is king
        - blobs 
            - store file content
            - no permissions
            - no metadata
            - each blob is stored under first 2 character of hash directory in /objects
            - every change of a file create a NEW blob 
                - diff is calculating the diff on demand not storing them like svn
        - tree 
            - contains file name
            - references to one or many blobs
            - one to n tree in a commit
        - git pack 
            - all commits can get packed to find similar blob
            - 5 to 10 times less space than SVN
        - git GC 
            - find all commits, trees and blobs that can not be accessed and remove them
    - git add -u . 
        - update only tracked file not moved/renamed file
        - use instead 
            - git add -A .
    - git checkout — file3.txt 
        - revert file content
    - similarity content analyser 
        - if more then 50% then it count the the file as renamed otherwise it is new
        - git log -2 –stat 
            - may show delete + add for a move operations
        - git log -2 –stat -M 
            - display also similarity index
            - may show move correctly
            - git log -2 –stat -M90 
                - with 90% similarity threashold
            - git log -2 –stat -M — file3.txt 
                - limit to file
            - git log -2 –stat -M –follow — file3.txt 
                - changes + move + create
- <span style="color: rgb(255, 0, 0); font-size: 150%; font-family: SansSerif,sans-serif; font-weight: bold;">6. Rebase
    - interactive rebase
    - rewrite the history 
        - changing authors or any other properties
    - preparation for merging 
        - <span style="font-family: SansSerif,sans-serif; font-weight: bold;">Rebase Rebase Fastforward
            - ![](http://gittraining.waltercedric.com/images/GIT%20training_4428215117541974993.jpeg) ex: to make my code changes in branch appear like a continuation of master
                
                
                - d19′ = d19
                - e69′ = e69
                - but still different commits!
                
                do it in branch
                
                you want to move
                
                
                - git rebase master 
                    - change shape of the graph keep timestamp and author
                        
                        pull of all commits of a branch &amp;
                        
                        replay all commit in master
                        
                        
                        - may create small conflicts
                
                make the history straightforward
                
                
                - especially if you have a lot of branches 
                    - otherwise look like a train station
                - but you hide informations 
                    - from which branch it was merged
        - <span style="font-family: SansSerif,sans-serif; font-weight: bold;">non fastforward
        - <span style="color: rgb(255, 0, 0); font-family: SansSerif,sans-serif; font-weight: bold;">history
            - <span style="color: rgb(255, 0, 0); font-family: SansSerif,sans-serif; font-weight: bold;">is a graph not a list like in “git log”
            - <span style="color: rgb(255, 0, 0); font-family: SansSerif,sans-serif; font-weight: bold;">it is not temporal but topological
    - interactive rebase 
        - to group commits into one 
            - “commits are stories not just checkpoints”
        - git rebase -i \[start, end\] 
            - start = HEAD as default
            - end = hash
            - git rebase -i HEAD^ 
                - parent of head
                - you can combine HEAD^^^^^^
            - git rebase -i HEAD~10 
                - last 10 commit
            - git rev-parse HEAD^ 
                - give hash
            - git help gitrevisions 
                - adavnce list of expressions
            - create a file so you can decide what to do 
                - has command
                - pick, reword, edit,squash, fixup and exec
                - you can not squash the oldest commit
- <span style="color: rgb(255, 0, 0); font-size: 150%; font-family: SansSerif,sans-serif; font-weight: bold;">8. Forking
    - Play 
        - git clone xxxx
        - vi xxxxx.txt
        - git add .
        - git commit -m “”
        - git push
        - open a pull request
    - pull request 
        - invitation to start a conversation
        - add metadata 
            - screenshots
            - emoji-cheat-sheet.com
        - is an iterative process 
            - threaded discussion
    - ideas 
        - when opening a feature branch 
            - create a pull request immediately
            - improve communication and awareness and start discussion
            - even if there is no code yet done
    - merge conflict can not be solved in github 
        - has to be done in command line