---
title: GoHugo tips and tricks, moving away from wordpress
date: 2023-12-27T18:24:28+01:00
type: posts
summary: "Some useful tips and tricks for Hugo blog owner"
cover: https://www.waltercedric.com/blog/hugo-logo-wide.webp
categories:
  - Blog
tags:
  - bash
  - linux
  - macos
  - static-code-generator
  - hugo
  - blog
  - platform
  - wordpress
---

## Why leaving Wordpress for Hugo

1. If you are the sole person writing posts, using Github Pages as your hosting platform might be a good option for you. This will allow you to focus on creating content without worrying about technical aspects such as security, updates, and maintenance (Bye bye Wordpress, plugins, PHP, Linux, Mysql).
2. HTML is indeed fast and secure, especially when combined with properly optimized images. You can use a tool like Google PageSpeed Insights to analyze your website's performance and identify areas for improvement.
3. The ability to search and replace text in your files is a useful feature that can help you maintain consistency and accuracy across your content. This can be done using a text editor such as Visual Studio Code, which offer advanced search and replace functionality.
4. As a software engineer, it makes sense for me and I enjoy working with Visual Studio and utilizing plugins (e.g. Visual Studio's Markdown Extension) to enhance my workflow. You can explore various extensions for Visual Studio!
5. Backup and versioning is done using Github
only drawback I currently see is that the free hosting of github pages can stop anytime.

## LastMod alsways up to date
Instead of defining lastmod in front matter, use the git author date or the file modification time when displaying .Lastmod on a page.

See:
* https://gohugo.io/variables/git/#lastmod 42
* https://gohugo.io/getting-started/configuration/#configure-dates 47

With this site configuration…
```yaml
enableGitInfo = true

[frontmatter]
lastmod = [':git', ':fileModTime']
```
…the .Lastmod page method will first try to retrieve the git author date. If that fails, it will look at the file modification time (mtime).

## Use archetype
Create a file in your theme folder, e.g. in themes/dream/archetypes/posts.md
```yaml
---
title: {{ replace .TranslationBaseName "-" " " | title }}
date: {{ .Date }}
cover: https://www.waltercedric.com/cover.webp
summary: "summary"
categories:
  - category1
tags:
  - tag1
---
Cut out summary from your post content here.
The remaining content of your post.
```

It will be use when invoking:

```
hugo new content posts/n-intersting-post.md
```

## Some awesome shortcode
- [Awesome Hugo Shortcodes For Your Websites](https://atharvashah.netlify.app/posts/tech/hugo-shortcodes/)
- [Darth's Hugo shortcodes](https://github.com/Darthagnon/darths-hugo-shortcodes)
- [Hugo-leaflet: insert OSM Maps, Markers and Tracks](https://github.com/altrdev/hugo-leaflet)
- [Hugo Shortcodes roneo collection](https://github.com/RoneoOrg/hugo-shortcode-roneo-collection)
- [Hugo Attachment shortcode](https://oostens.me/posts/hugo-attachment-shortcode/)
- [Hugo Tabs shortcode](https://oostens.me/posts/hugo-tabs-shortcode/)
- [Hugo-cloak-email: hide email adresses from spammers](https://github.com/martignoni/hugo-cloak-email)
- [Hugo Timeline Shortcode](https://metalblueberry.github.io/post/howto/2021-02-28_hugo_timeline_shortcode/)
- [Add Plots With Hugo Shortcodes - Plotly](https://metalblueberry.github.io/post/howto/2019-11-23_add_plots_with_hugo_shortcodes/)

## Dynamic TOC highlighting and collapsible functionality

### Using TocBot (recommended)
see https://github.com/tscanlin/tocbot

### Custom code, not as good as TocBot
Hugo TableOfContents that highlight when scrolling in JQuery

Add to your main javascript file
```js
$(document).ready(function () {
      // collapse levels with more than 1 child
      $('#TableOfContents li').each(function() {
        if ($(this).children('ul').length >= 1) {
          $(this).children('ul').slideToggle();
          $(this).toggleClass('collapsed');
        }
      });

      // make them clickable
      $('#TableOfContents li').click(function(event) {
        event.stopPropagation();
        if ($(this).children('ul').length >= 1) {
          $(this).children('ul').slideToggle();
          $(this).toggleClass('collapsed');
        }
      });

    const toc = $('#TableOfContents');
    if (toc.length) {
        const links = toc.find('a');
        if (links.length) {
            const observer = new IntersectionObserver(els => els.forEach(el => {
                const id = el.target.id;
                id && el.isIntersecting && links.each(function() {
                    const $this = $(this);
                    $this.toggleClass('active', $this.attr('href') === '#' + id);
                });
            }));

            $('h1,h2,h3,h4,h5,h6').each(function() {
                const $this = $(this);
                $this[0].nodeType === 1 && observer.observe($this[0]);
            });
        }
    }

})
```

use this css or modify to your liking
```css
.active {
    background-color: #ccff00!important; /* Highlight color, you can change this */
    color: #fff !important; /* Text color, you can change this */
    text-decoration: none; /* Remove underlines, adjust as needed */
    transition: background-color 0.3s ease; /* Smooth transition effect */
}

.active:hover {
    background-color: #ccff00; /* Darker highlight color on hover, you can change this */
}

.collapsed {
    list-style-type: none; /* Remove default list item marker */
}

.collapsed:before {
    content: '+ '; /* Set content to a plus symbol followed by a space */
    display: inline-block; /* Ensure the content is treated as a block element */
    width: 1em; /* Adjust the width as needed */
    margin-right: 5px; /* Adjust the spacing to your preference */
}
```

## Process css and js
at the place you use your CSS
```js
{{ $semanticCss := resources.Get "/css/semantic.min.css" }}
{{ $semanticCss = $semanticCss | resources.PostCSS }}
{{ if hugo.IsProduction }}
   {{ $semanticCss = $semanticCss | minify | fingerprint | resources.PostProcess }}
{{ end }}
<link href="{{ $semanticCss.RelPermalink }}" rel="stylesheet" />
```

## Some useful bash scripts for Hugo blog owner
These are useful to clean up or maintain a Hugo blog

### Normalize filename extensions to lowercase
This avoid any mess like .JPG .Jpg .webp and so on

> [!CAUTION]
> To be run ONLY in your static folder!

```bash
find . -type f | while read -r file; do
    extension=$(echo "$file" | awk -F. '{print tolower($NF)}')
    mv "$file" "${file%.*}.$extension"
done
```

### Fix jpg to jpeg
jpg is old pre windows 1992, consistently use jpeg

> [!CAUTION]
> To be run ONLY in your static folder!

```bash
find . -type f -name "*.jpg" -exec sh -c 'mv -i "$0" "${0%.jpg}.jpeg"' {} \;
```

### creating thumbs files
Create thumbs run only in gallery folder, I use a shortcode foldergallery.html

> [!CAUTION]
> To be run ONLY in your static folder!

```bash
for i in `find . -type f ! -name "*-thumb.jpeg" -name "*.jpeg"`; do echo $i; if [ -f ${i%.*}-thumb.jpeg ]; then continue; fi; convert $i -resize 352x352 ${i%.*}-thumb.jpeg; done
```

### WEBP next generation image format
Create webp, I use a shortcode picture.html

> [!CAUTION]
> To be run ONLY in your static folder!
> recursive and support space in path

```bash
find . -name "*.webp" -delete

find . -type f -name "*.jpeg" -exec sh -c 'cwebp -q 80 "$0" -o "${0%.jpeg}.webp"' {} \;
find . -type f -name "*.png" -exec sh -c 'cwebp -q 80 "$0" -o "${0%.png}.webp"' {} \;
find . -type f -name "*.gif" -exec sh -c 'cwebp -q 80 "$0" -o "${0%.gif}.webp"' {} \;
```

## Hugo Shortcode

Optimize images

```go
{{ $image := .Get "src" }}
{{ $alt := .Get "alt" }}
{{ $avif := $image | relURL | replaceRE `(\.\w+)$` ".avif" | absURL }}
{{ $webp := $image | relURL | replaceRE `(\.\w+)$` ".webp" | absURL }}

<figure>
  <picture>
    <source type="image/webp" srcset="{{ $webp }}">

    <img loading="lazy" src="{{ $image | absURL }}" title="{{ $alt }}" alt="{{ $alt }}"
    >
  </picture>
  <figcaption>{{ $alt }}</figcaption>
</figure>
```

Usage:
```go
![](https://www.waltercedric.com/hewlett-packard/hp49boot.gif)
```
