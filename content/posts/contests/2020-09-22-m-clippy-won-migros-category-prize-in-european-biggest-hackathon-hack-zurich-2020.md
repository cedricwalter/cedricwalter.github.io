---
title: m-Clippy WON Migros Category prize in Europe’s Biggest Hackathon Hack Zurich 2020

type: posts
date: 2020-09-22T14:14:31+00:00
url: /m-clippy-won-migros-category-prize-in-european-biggest-hackathon-hack-zurich-2020/
cover: https://www.waltercedric.com/2020/09/DSC_1549-scaled.webp
summary: "Since 2014, HackZurich unites the world’s best tech talents, selected from thousands of applications, representing several elite universities and leading organizations from +85 countries, to collaborate and develop innovative web-, mobile- and hardware applications during a 40-hours hackathon in teams."
tags:
  - dotnet
  - hackathon
  - hackday
  - hackfest
  - ios
  - marathon
  - swiftui
  - team
  - zurich
  - competition
  - winner
categories:
  - Competition
  - Hackathon
---
Last weekend I took part in the biggest European Hackathon [Hack Zurich](https://hackzurich.com/) 2020, and our team m-Clippy won in the [Migros](https://www.migros.ch/) category!

> Since 2014, HackZurich unites the world’s best tech talents, selected from thousands of applications, representing several elite universities and leading organizations from +85 countries, to collaborate and develop innovative web-, mobile- and hardware applications during a 40-hours hackathon in teams. Global industries and organizations provide the latest technologies, tools, and APIs to spark the creation of new prototypes. HackZurich is an unforgettable adventure that every tech-talent should experience at least once in their lifetime: A fun and unique opportunity to touch base with new technologies, innovative communities and career opportunities.
>
> [Author](https://hackzurich.com/)
>
> [Tweet](/)

We decide (Lorenz Hänggi and I) to tackle the workshop challenge number 1, a day before. We went out on Friday 14:00 for a pizza brainstorming on this idea prior to the start of Hack Zürich at 17:00.

We both watched the 35 min Migros Workshop at 20:00

> #1 LET’S CREATE DIGITAL PRODUCT TWINS
> MIGROS
> Imagine knowing in real time for every product what it consists of, where it comes from and how it got to the store and even what you can cook with it tonight. With the help of digital product twin, we create a digital ecosystem and give our customers, employees and suppliers a 360-degree view of the products. This information helps customers to make their shopping experience as simple as possible and to make their purchasing decisions easier for them. We supply a lot of interesting APIs and datasets (like Product Informations, shopping cart data, logistics data, store and shelf layouts to play around with) as well as access to Microsoft Azure Cloud Services (e.g. Spatial Anchors if you want to try something with AR) and Scandit Scan SDK (e.g. for barcode scanning). Furthermore, you’ll get support from our experts. We are excited to create a world full of digital product twins with you!
>
> Visit [migros.ch/de/hackzurich.html](https://www.migros.ch/de/hackzurich.html) for more information.
>
> [Tweet](/)

And we both were active in the Migros Slack channel. Thanks to some developers of Migros, we were exploring the APIs and asking some questions.

The vision
----------

We started by filling up a **Problem Canvas**. A  **Problem Canvas** allows you to identify the customer, the problematic action, the improvement areas, the reasons for customer to switch and the risks of not switching, all in a single view. The number one cause of startup failure is the lack of a real need in the market, according to a recent [post-mortem on startups](https://www.cbinsights.com/research/startup-failure-reasons-top/).

![](https://www.waltercedric.com/2020/09/problem-statement-canvas-1-1024x512.webp)

And we came up with the following idea:

We want to help people with allergies and people who wants to consume products in a sustainable way. We build an add-on to the Cumulus App and the Store-Scanner, later to alert in the Shop if a product is not healthy or not sustainable. Additionally you can check how good was your shopping cart with your preferences.

Designing the logo
------------------

We designed a logo. Note how we reuse the same color palette used by Migros 😉

![](https://www.waltercedric.com/2020/09/logo-1024x915.webp)

Designing the iOS app
---------------------

We start designing mockups using some iPhone wireframes. You can use this template (right click save – as)

![](https://www.waltercedric.com/2020/09/Screen-Shot-2020-09-22-at-4.39.42-PM-1024x701.webp)

Coding!
-------

We started coding on Friday 18.09 18:00 PM, coding 14 hours in a row, sleeping 3 hours, then 24 hours non stop till Sunday 20.09 at 07:00. The last 2 hours before submission deadline were dedicated to:

*   Polish the application (mainly texts: typos, sentences),
*   Working on the pitch deck,
*   Recording a 2 minutes video of the app,
*   Collecting screenshots to complete the devPost profile of the app,
*   And submitting our application at 08:59 AM 🙂 1 minute before the deadline.

Our Pitch Deck:

![](https://www.waltercedric.com/2020/09/Screenshot-2020-09-20-at-08.14.21-1024x576.webp)

![](https://www.waltercedric.com/2020/09/Screenshot-2020-09-20-at-08.15.13-1024x576.webp)

![](https://www.waltercedric.com/2020/09/Screenshot-2020-09-20-at-08.15.44-1024x576.webp)

Inspiration
-----------

Food intolerance or allergy is a significant and widespread medical problem. Food allergy can cause severe symptoms in sensitive individuals and may be life threatening. In many instances the offending food is easily identified however milder forms of food allergy may be more difficult to diagnose.

Food intolerance is a neglected area of medicine because of diagnostic difficulties, non-specific symptoms and the relatively mild nature of the resulting illness; however repeated irritation or inflammation of the gastrointestinal tract may have serious consequences including malabsorption syndromes, small bowel overgrowth, coeliac disease and bowel cancer.

Based on resarch from Migros around 2 millions people in Switzerland are suffering from food intolerances and allergies.

[m-clippy](https://devpost.com/software/m-clippy) is an extension to cumulus App that has access to all cumulus data of its customers shopping cart and products. Additionally the customer is able to enter his eat habits and preference and based on all this information [m-clippy](https://devpost.com/software/m-clippy) provides deep insights into your shopping behaviors.

[m-clippy](https://devpost.com/software/m-clippy) help everyone who has to stick to a restricted diet because of food intolerances or allergies. [m-clippy](https://devpost.com/software/m-clippy) supports consumers eating habits like

*   Bio,
*   vegan,
*   vegetarian, ….

but also support customers who want to eat more

*   National,
*   Regional or
*   outside Switzerland

and with [m-clippy](https://devpost.com/software/m-clippy) the customer can choose from up to 17 different allergens to get tips, insights and recommendations.

Future
------

Customer would get a visual or sound alerts on Migros scanner Subito and a realtime reports / tips in the cumulus. [m-clippy](https://devpost.com/software/m-clippy) displays for the customer, how good or how he/she can improve his/her consumer behaviors (=Gamification this would be also at this time that we can propose them more suitable and alternative products) and will get great recommendations

Our iOS app
-----------

Customers need to select their preferences in Migros cumulus app (intolerance, eating habits, allergens )

![](https://www.waltercedric.com/2020/09/m-clippy-1.webp)

![](https://www.waltercedric.com/2020/09/m-clippy-target-1-1.webp)

![](https://www.waltercedric.com/2020/09/m-clippy-target-2-1.webp)


Customers get insights through recommendations, tips and alternative products based on the preferences.

![](https://www.waltercedric.com/2020/09/m-clippy-tips-1.webp)

![](https://www.waltercedric.com/2020/09/m-clippy-tips-2.webp)

![](https://www.waltercedric.com/2020/09/m-clippy-tips-3.webp)

![](https://www.waltercedric.com/2020/09/m-clippy-tips-4.webp)

![](https://www.waltercedric.com/2020/09/m-clippy-tips-5.webp)

![](https://www.waltercedric.com/2020/09/m-clippy-tips-6.webp)


How we built it
---------------

*   Backend in .NET 3.1 [https://dev.azure.com/m-clippy/m-clippy/\_git/m-clippy](https://dev.azure.com/m-clippy/m-clippy/_git/m-clippy)
*   Frontend in SwiftUI for iOS. 14 [https://dev.azure.com/m-clippy/m-clippy/\_git/m-clippy-app](https://dev.azure.com/m-clippy/m-clippy/_git/m-clippy-app)
*   We use Migros API, Azure Cloud

All submissions
---------------

You can browse all submissions at Hack Zurich 2020 in the gallery here [https://hac](https://hackzurich2020.devpost.com/project-gallery)[kzurich2020.devpost.com/project-gallery](https://hackzurich2020.devpost.com/project-gallery)

The video
---------

You see us at 1:41min receiving the Migros price
