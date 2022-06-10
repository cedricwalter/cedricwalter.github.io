---
id: 4470
title: 'Useful Unix/Linux bash functions'
date: '2009-06-22T20:41:52+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=4470'
permalink: /linux/useful-unix-linux-bash-functions/
image: /wp-content/uploads/2011/05/linux.png
tags:
    - cli
    - linux
    - shell
---

For day to day hacker, they may be more elegant ways to do it (PERL, AWK), but they have work well for me.

- Upper case file name or variable,
- Search and replace in all files content recursively,
- Renaming all files recursively,
- Renaming all directory recursively,
- Copying a set of files from one directory to the other and preserving hierarchy.

## Upper case file name or variable

```
function toUpper {
echo "$1" | sed ‘y/abcdefghijklmnopqrstuvwxyz/ABCDEFGHIJKLMNOPQRSTUVWXYZ/’  
# or
# echo "$1" | tr -s  ‘[:lower:]’  ‘[:upper:]’
}
```

# Usage**:

- in a script toUpper “cedric”
- assign to a variable in a script result=$(toUpper $variable) or result=$(toUpper “cedric”)

## Search and replace in all files content recursively

This can go through all directories

- $3 as base directory
- Search for $1
- Replace with $2

```
function searchAndReplaceRecursively {
   echo "replace ‘$1’ with ‘$2’ in dir ‘$3’";
   for file in `find $3 -type f`;
   do
      echo -ne ".";
      sed -e ‘s/’$1’/’$2’/g’ $file > /tmp/tempfile.tmp
      mv /tmp/tempfile.tmp $file
   done
   echo "";
}
```

# Usage**:

- in a script searchAndReplaceRecursively “cedric” “unix” .

### Renaming all files recursively

This can go through all directories, renaming all files based on parameters:

- $3 as base directory,
- Search for $1 in filename,
- Replace with $2 in filename.

```
function renameFilenameRecursively {
    for file in `find $3 -type f`;
    do
        newFilename=`basename $file | sed -e ‘s/’$1’/’$2’/g’`;
        dirs=`dirname $file`;
        mv $file $dirs/$newFilename;
    done
}
```

# Usage**:

- in a script renameFilenameRecursively “cedric” “unix” .

## Renaming all directory recursively

This can go through all directories, renaming all directories based on parameters:

- $3 as base directory
- Search for $1 in directory name
- Replace with $2 in directory name
- in bold, you can put either 
    - \*$1 the pattern has to be at end of directory name,
    - $1\* the pattern has to be at beginning of directory name,
    - \*$1\* the pattern has to be in the middle of directory name,
    - remove the case all together, the grep $1 filter already the result of the command find.

```
function renameDirectoriesRecursively {
    for adir in `find $3 -type d | grep $1`;
    do
        case $adir in
            *$1* )
                newdirname=$( echo "$adir" | sed -e ‘s/’$1’/’$2’/g’ );
                echo Found $adir will be renamed to $newdirname;
                mv $adir $newDirName;
            esac
    done
}
```

# Usage**:

- in a script renameDirectoriesRecursively “cedric” “unix” .

### Copying a set of files from one directory to the other and preserving hierarchy

```
find . -name $1 -exec cp -r --parents {} $destination \;
```