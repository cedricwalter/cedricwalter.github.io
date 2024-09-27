#!/bin/bash

USERNAME=cedricwalter
YOUR_PROJECT=blog-hugo

find . -name .DS_Store -delete

echo -e "\033[0;32mDeploying updates to GitHub $USERNAME.github.io domain ...\033[0m"

# Build the project.
hugo -d ../$USERNAME.github.io --cleanDestinationDir --gc --minify # if using a theme, replace with `hugo -t <YOURTHEME>`

# Go To Public folder
cd ../$USERNAME.github.io
# Add changes to git.
git add .

# Commit $USERNAME.github.io changes.
msg="rebuilding site `date`"
if [ $# -eq 1 ]
  then msg="$1"
fi
git commit -m "$msg"

# Push source and build repos.
git push origin

# Come Back up to the Project Root
cd ..
cd $YOUR_PROJECT

echo -e "\033[0;32mDeploying updates to GitHub master ...\033[0m"
git add .
git commit -m "update hugo site `date`"
git push origin main
