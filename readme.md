
# Readme
* One repo public cedricwalter.github.io
* Use .github/workflows/hugo.yml
* No need to install brew, hugo, no supply chain attack possible
* Ability to edit md online on github
* Impossible to test locally


Hugo V3
initial:
```
npm i tailwindcss
```

if you chnage themes, then run 
```
npm run css
```

# Previous readme "old tech" DEPRECATED
* one repo public cedricwalter.github.io
* one repo private blog-hugo
* you need to install hugo locally, on macos using brew

you add page in blog-hugo and use deploy.sh to update the content (only html, css, images, javascript) and push to cedricwalter.github.io

```bash
echo "# cedricwalter.github.io" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/cedricwalter/cedricwalter.github.io.git
git push -u origin main
```

# Features

* merged https://hbs.razonyang.com/v1/en/docs/image-processing/
* support webp images if supported by browser
* image galleries

# Initial creation

```bash
brew install hugo --build-extended
brew install webp
brew install libavif
sudo npm install -g purgecss
```

1. Create a <YOUR-PROJECT> git repository on GitHub. This repository will contain Hugo’s content and other source files. it can be private
2. git clone <YOUR-PROJECT> && cd <YOUR-PROJECT>
3. Make your website work locally (hugo server or hugo server -t <YOURTHEME>) and open your browser to http://localhost:1313.
Once you are happy with the results:
Press Ctrl+C to kill the server
4. Edit deploy.sh and adapt USERNAME=xxxxx & YOUR_PROJECT=xxxxxx

1. Create a <USERNAME>.github.io GitHub repository. This is the repository that will contain the fully rendered version of your Hugo website. It must be PUBLIC
2. git clone <USERNAME>.github.io

from <YOUR-PROJECT> run deploy.sh

# Checkout this repo
example
```bash
git clone https://github.com/cedricwalter/cedricwalter.github.io.git cedricwalter.github.io
git clone https://github.com/cedricwalter/blog-hugo.git blog-hugo
cd blog-hugo
chmod +x deploy.sh
```

# Deploy
```
./deploy.sh
```
You can then run ./deploy.sh "Your optional commit message" to send changes to <USERNAME>.github.io. Note that you likely will want to commit changes to your <YOUR-PROJECT> repository as well.

# add new Post

```
hugo new content posts/new.md
```

# Gallery support

run in folder first:

Useful bash

lowercasde all extensions
```
find . -type f | while read -r file; do
    extension=$(echo "$file" | awk -F. '{print tolower($NF)}')
    mv "$file" "${file%.*}.$extension"
done
```

jpg is old pre windows 1992, consistently use jpeg
```
for jpg in `find . -type f -name \*.jpg` ; do mv $jpg ${jpg/jpg/jpeg} ; done
```

create thumbs run only in gallery folder
```
for i in `find . -type f ! -name "*-thumb.jpeg" -name "*.jpeg"`; do echo $i; if [ -f ${i%.*}-thumb.jpeg ]; then continue; fi; convert $i -resize 352x352 ${i%.*}-thumb.jpeg; done

for i in `find . -type f ! -name "*-thumb.webp" -name "*.webp"`; do echo $i; if [ -f ${i%.*}-thumb.webp ]; then continue; fi; convert $i -resize 352x352 ${i%.*}-thumb.webp; done


for i in `find . -type f ! -name "*-thumb.webp" -name "*.webp"`; do echo $i; if [ -f ${i%.*}-thumb.webp ]; then continue; fi; convert $i -resize 640x480 ${i%.*}-thumb.webp; done
```

create webp
```
find . -name "*.webp" -delete

for i in `find . -type f -name "*.jpeg"`; do echo $i; cwebp -q 60 $i -o ${i%.*}.webp; done
for i in `find . -type f -name "*.png"`; do echo $i; cwebp -q 60 $i -o ${i%.*}.webp; done
```



shortcode
```
{{< foldergallery src="scooter/bernardet" >}}
```

from https://netfactory.dk/posts/2020/hugo-gallery/

# TODO

https://gohugobrasil.netlify.app/hosting-and-deployment/hosting-on-github/#:~:text=Deploy%20Hugo%20as%20a%20GitHub,via%20its%20GitHub%20Pages%20service.

# Conversion
https://codebeautify.org/html-to-markdown
https://markdown-convert.com/en/tool/table
https://tableconvert.com/html-to-markdown#google_vignette

# Useful links
https://gohugo.io/quick-reference/emojis/
https://www.markdownguide.org/extended-syntax/#tables

# Others
https://github.com/SchumacherFM/wordpress-to-hugo-exporter

https://hexo.io/docs/
https://github.com/jerryc127/hexo-theme-butterfly
https://butterfly.js.org/en/posts/butterfly-docs-en-get-started/
https://blog.guole.fun
https://blog.guole.fun/posts/hugo-blog/

https://github.com/g1eny0ung/hugo-theme-dream
site https://g1en.site
source code for custom his css  https://github.com/g1eny0ung/blog

