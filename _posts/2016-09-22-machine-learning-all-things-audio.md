---
id: 8585
title: 'Podcast Machine Learning All things Audio'
date: '2016-09-22T20:57:46+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=8585'
permalink: /development/machine-learning-all-things-audio/
---

Audio Signals Quality Diagnostics with Image Analysis.   
by Vasily Tolkachev, ZHAW

In this technical talk I present a number of interesting findings from a project with our industrial partner. The goal
was to build a decent discriminative model which is able to distinguish between working and broken sound emitters based
on the sound files produced by them.   
We approached the problem with various image analysis tools by applying different classifiers on spectrograms of these
files. A technique called t-SNE, which led to the key findings in the project, is going to be introduced. Having faced a
number of data artefacts such as erroneous labels and class imbalance, sufficiently good performance was already
achieved with Random Forest after a number of important transformations. In conclusion, a comparison to variational
autoencoders will be exemplified.

<iframe allowfullscreen="" frameborder="0" height="315" loading="lazy" src="https://www.youtube.com/embed/Lc-DDk6WRBE" width="560"></iframe> [Powerpoint presentation](https://github.com/vastol/Zurich-ML-talk/blob/master/(Tolkachev)%20Audio%20Signals%20Quality%20Diagnostics%20with%20Image%20Analysis.pdf)

Audio Based Bird Species Identification Using Deep Learning Techniques   
by Elias Sprengel, ETHZ

Accurate bird species identification is essential for biodiversity conservation and acts as an important tool in
understanding the impact of cities and commercial areas on ecosystems. Therefore, many attempts have been made to
identify bird species automatically. These attempts usually rely on audio recordings because images of birds are harder
to obtain. They work well when the number of bird species is low and the recordings contain little background noise, but
they quickly deteriorate when employed in any real world scenario.

In this talk, we present a new audio classification approach based on recent advances in the domain of deep learning.
With novel pre-processing and data augmentation methods, we train a neural network on the biggest publicly available
dataset. This dataset contains crowd-sourced recordings of 999 bird species, providing an excellent way of evaluating
our system in a more realistic scenario. Our convolutional neural network is able to surpass current state of the art
results and won this year’s international BirdCLEF 2016 Recognition Challenge.

<iframe allowfullscreen="" frameborder="0" height="315" loading="lazy" src="https://www.youtube.com/embed/m22yonUA_ZM" width="560"></iframe>