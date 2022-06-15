---

title: 'm-Clippy WON Migros Category prize in Europe&#8217;s Biggest Hackathon Hack Zurich 2020'
date: '2020-09-22T16:14:31+02:00'
author: 'Cédric Walter'
categories:
- blockchain



    
header:
    teaser: /assets/images/2020/09/DSC_1549.jpg
tags:
    - dotNet
    - hackathon
    - hackday
    - hackfest
    - ios
    - marathon
    - swiftui
    - team
    - Zurich
---
{:toc}

Last weekend I took part in the biggest European Hackathon [Hack Zurich](https://hackzurich.com/) 2020, and our team m-Clippy won in the [Migros](https://www.migros.ch/) category!

Since 2014, HackZurich unites the world’s best tech talents, selected from thousands of applications, representing several elite universities and leading organizations from +85 countries, to collaborate and develop innovative web-, mobile- and hardware applications during a 40-hours hackathon in teams. Global industries and organizations provide the latest technologies, tools, and APIs to spark the creation of new prototypes. HackZurich is an unforgettable adventure that every tech-talent should experience at least once in their lifetime: A fun and unique opportunity to touch base with new technologies, innovative communities and career opportunities.<footer><div class="uagb-blockquote__author-wrap uagb-blockquote__author-at-left"><cite class="uagb-blockquote__author">[Author](https://hackzurich.com/)</cite>[<svg height="20" viewbox="0 0 512 512" width="20"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg><span class="uagb-blockquote__tweet-label">Tweet](/)</footer>

We decide (Lorenz Hänggi and I) to tackle the workshop challenge number 1, a day before. We went out on Friday 14:00 for a pizza brainstorming on this idea prior to the start of Hack Zürich at 17:00.

We both watched the 35 min Migros Workshop at 20:00

# 1 LET’S CREATE DIGITAL PRODUCT TWINS  
MIGROS  
Imagine knowing in real time for every product what it consists of, where it comes from and how it got to the store and even what you can cook with it tonight. With the help of digital product twin, we create a digital ecosystem and give our customers, employees and suppliers a 360-degree view of the products. This information helps customers to make their shopping experience as simple as possible and to make their purchasing decisions easier for them. We supply a lot of interesting APIs and datasets (like Product Informations, shopping cart data, logistics data, store and shelf layouts to play around with) as well as access to Microsoft Azure Cloud Services (e.g. Spatial Anchors if you want to try something with AR) and Scandit Scan SDK (e.g. for barcode scanning). Furthermore, you’ll get support from our experts. We are excited to create a world full of digital product twins with you!<footer><div class="uagb-blockquote__author-wrap uagb-blockquote__author-at-left"><cite class="uagb-blockquote__author">Visit [migros.ch/de/hackzurich.html](https://www.migros.ch/de/hackzurich.html) for more information.</cite>[<svg height="20" viewbox="0 0 512 512" width="20"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg><span class="uagb-blockquote__tweet-label">Tweet](/)</footer>

And we both were active in the Migros Slack channel. Thanks to some developers of Migros, we were exploring the APIs and asking some questions.

## The vision

We started by filling up a **Problem Canvas**. A **Problem Canvas** allows you to identify the customer, the problematic action, the improvement areas, the reasons for customer to switch and the risks of not switching, all in a single view. The number one cause of startup failure is the lack of a real need in the market, according to a recent [post-mortem on startups](https://www.cbinsights.com/research/startup-failure-reasons-top/).

![](/assets/images/2020/09/problem-statement-canvas-1.png)
And we came up with the following idea:

We want to help people with allergies and people who wants to consume products in a sustainable way. We build an add-on to the Cumulus App and the Store-Scanner, later to alert in the Shop if a product is not healthy or not sustainable. Additionally you can check how good was your shopping cart with your preferences.

## Designing the logo

We designed a logo. Note how we reuse the same color palette used by Migros 😉

![](/assets/images/2020/09/logo.png)

## Designing the iOS app

We start designing mockups using some iPhone wireframes. You can use this template (right click save – as)

![](/assets/images/2020/09/Screen-Shot-2020-09-22-at-4.39.42-PM.png)

## Coding!

We started coding on Friday 18.09 18:00 PM, coding 14 hours in a row, sleeping 3 hours, then 24 hours non stop till Sunday 20.09 at 07:00. The last 2 hours before submission deadline were dedicated to:

- Polish the application (mainly texts: typos, sentences),
- Working on the pitch deck,
- Recording a 2 minutes video of the app,
- Collecting screenshots to complete the devPost profile of the app,
- And submitting our application at 08:59 AM 🙂 1 minute before the deadline.

Our Pitch Deck:

![](/assets/images/2020/09/Screenshot-2020-09-20-at-08.14.21.png)
![](/assets/images/2020/09/Screenshot-2020-09-20-at-08.15.13.png)
![](/assets/images/2020/09/Screenshot-2020-09-20-at-08.15.44.png)

## Inspiration

Food intolerance or allergy is a significant and widespread medical problem. Food allergy can cause severe symptoms in sensitive individuals and may be life threatening. In many instances the offending food is easily identified however milder forms of food allergy may be more difficult to diagnose.

Food intolerance is a neglected area of medicine because of diagnostic difficulties, non-specific symptoms and the relatively mild nature of the resulting illness; however repeated irritation or inflammation of the gastrointestinal tract may have serious consequences including malabsorption syndromes, small bowel overgrowth, coeliac disease and bowel cancer.

Based on resarch from Migros around 2 millions people in Switzerland are suffering from food intolerances and allergies.

[m-clippy](https://devpost.com/software/m-clippy) is an extension to cumulus App that has access to all cumulus data of its customers shopping cart and products. Additionally the customer is able to enter his eat habits and preference and based on all this information [m-clippy](https://devpost.com/software/m-clippy) provides deep insights into your shopping behaviors.

[m-clippy](https://devpost.com/software/m-clippy) help everyone who has to stick to a restricted diet because of food intolerances or allergies. [m-clippy](https://devpost.com/software/m-clippy) supports consumers eating habits like

- Bio,
- vegan,
- vegetarian, ….

but also support customers who want to eat more

- National,
- Regional or
- outside Switzerland

and with [m-clippy](https://devpost.com/software/m-clippy) the customer can choose from up to 17 different allergens to get tips, insights and recommendations.

## Future

Customer would get a visual or sound alerts on Migros scanner Subito and a realtime reports / tips in the cumulus. [m-clippy](https://devpost.com/software/m-clippy) displays for the customer, how good or how he/she can improve his/her consumer behaviors (=Gamification this would be also at this time that we can propose them more suitable and alternative products) and will get great recommendations

## Our iOS app 

Customers need to select their preferences in Migros cumulus app (intolerance, eating habits, allergens )

![](/assets/images/2020/09/m-clippy-1.png)
![](/assets/images/2020/09/m-clippy-target-1-1.png)
![](/assets/images/2020/09/m-clippy-target-2-1.png)

Customers get insights through recommendations, tips and alternative products based on the preferences.

![](/assets/images/2020/09/m-clippy-tips-1.png)
![](/assets/images/2020/09/m-clippy-tips-2.png)
![](/assets/images/2020/09/m-clippy-tips-3.png)
![](/assets/images/2020/09/m-clippy-tips-4.png)
![](/assets/images/2020/09/m-clippy-tips-5.png)
![](/assets/images/2020/09/m-clippy-tips-6.png)

## How we built it

- Backend in .NET 3.1 [https://dev.azure.com/m-clippy/m-clippy/\_git/m-clippy](https://dev.azure.com/m-clippy/m-clippy/_git/m-clippy)
- Frontend in SwiftUI for iOS. 14 [https://dev.azure.com/m-clippy/m-clippy/\_git/m-clippy-app](https://dev.azure.com/m-clippy/m-clippy/_git/m-clippy-app)
- We use Migros API, Azure Cloud

## All submissions

You can browse all submissions at Hack Zurich 2020 in the gallery here [https://hac](https://hackzurich2020.devpost.com/project-gallery)[kzurich2020.devpost.com/project-gallery ](https://hackzurich2020.devpost.com/project-gallery)

## The video

You see us at 1:41min receiving the Migros price

<iframe allow="accelerometer; autoplay; clipb
oard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" frameborder="0" height="608" 
loading="lazy" src="https://www.youtube.com/embed/tyalksLDKVc?feature=oembed" title="Migros am 𝗛𝗮𝗰𝗸𝗭𝘂𝗿𝗶𝗰𝗵 2020 – 
The Aftermovie" width="1080"></iframe>