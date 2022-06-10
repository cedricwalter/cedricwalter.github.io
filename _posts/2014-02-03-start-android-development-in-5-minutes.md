---
id: 8188
title: 'Start Android Development in 5 Minutes'
date: '2014-02-03T22:21:51+01:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=8188'
permalink: /development/start-android-development-in-5-minutes/
image: /wp-content/uploads/2014/02/android.png
tags:
    - java
---

# ![](/assets/images/2014/02/android.png)

Welcome to Android application development! If you’re new to *Android* app *development*, this where you should *begin*.

# Download Android Studio

Android Studio is a new Android development environment based on [IntelliJ IDEA](http://www.jetbrains.com/idea/ "IntelliJ IDEA"). Similar to #Eclipse with the ADT Plugin, Android Studio provides integrated Android developer tools for development and debugging. On top of the capabilities you expect from [IntelliJ](http://www.jetbrains.com/idea/ "IntelliJ"), [Android Studio](http://developer.android.com/sdk/installing/studio.html "Android Studio") offers:

- [Gradle](http://www.gradle.org/ "Gradle is build automation evolved")-based build support.
- Android-specific refactoring and quick fixes.
- Lint tools to catch performance, usability, version compatibility and other problems.
- [ProGuard](http://proguard.sourceforge.net/ "ProGuard is a free #Java class file shrinker, optimizer, obfuscator, and preverifier.") and app-signing capabilities.
- Template-based wizards to create common Android designs and components.
- A rich layout editor that allows you to drag-and-drop UI components, preview layouts on multiple screen configurations, and much more.
- Built-in support for [Google Cloud Platform](http://android-developers.blogspot.com/2013/06/adding-backend-to-your-app-in-android.html), making it easy to integrate Google Cloud Messaging and App Engine as server-side components.

Download [http://developer.android.com/sdk/installing/studio.html](http://developer.android.com/sdk/installing/studio.html "http://developer.android.com/sdk/installing/studio.html")

This download includes:

- Android Studio **early access preview**
- All the Android SDK Tools to design, test, debug, and profile your app
- The latest Android platform to compile your app
- The latest Android system image to run your app in the emulator

Now start [Android](http://www.android.com/) studio

# Download SDK

[![SDK Manager](http://www.waltercedric.com/images/Android-development-in-5-minutes_13FC5/SDK-Manager_thumb.png "SDK Manager")](http://www.waltercedric.com/images/Android-development-in-5-minutes_13FC5/SDK-Manager.png)

click on “SDK Manager”, this open the following windows, select at least the latest version of

- Android SDK Tools
- Android SDK Build-Tools
- Android 4.4.2 (API 19)

The more you download the better, (so you can support more device, it will just take more disk and take longer to download)

[![download in SDK Manager](http://www.waltercedric.com/images/Android-development-in-5-minutes_13FC5/download-in-SDK-Manager_thumb.png "download in SDK Manager")](http://www.waltercedric.com/images/Android-development-in-5-minutes_13FC5/download-in-SDK-Manager.png)

# Create a new Project

Create a new project

[![createANewProjectInAndroidStudio](http://www.waltercedric.com/images/Android-development-in-5-minutes_13FC5/createANewProjectInAndroidStudio_thumb.png "createANewProjectInAndroidStudio")](http://www.waltercedric.com/images/Android-development-in-5-minutes_13FC5/createANewProjectInAndroidStudio.png)

Click Next and Finish, after some seconds the project will be created

Click now [![startEmulatorInAndroidStudio](http://www.waltercedric.com/images/Android-development-in-5-minutes_13FC5/startEmulatorInAndroidStudio_thumb.png "startEmulatorInAndroidStudio")](http://www.waltercedric.com/images/Android-development-in-5-minutes_13FC5/startEmulatorInAndroidStudio.png), the emulator will start

[![defineEmulatorInAndroidStudio](http://www.waltercedric.com/images/Android-development-in-5-minutes_13FC5/defineEmulatorInAndroidStudio_thumb.png "defineEmulatorInAndroidStudio")](http://www.waltercedric.com/images/Android-development-in-5-minutes_13FC5/defineEmulatorInAndroidStudio.png)

Click OK, be patient, your Hello World app will appear

# Push your app to Google Play Store

In order to push this Application (\*.apk) to Google Play Store, it has to be signed and zip aligned,

Hit CTRL-SHIF-A and type “sign” and select “Generate Signed APK…”

[![GenerateSignedAPK](http://www.waltercedric.com/images/Android-development-in-5-minutes_13FC5/GenerateSignedAPK_thumb.png "GenerateSignedAPK")](http://www.waltercedric.com/images/Android-development-in-5-minutes_13FC5/GenerateSignedAPK.png)

Click OK to continue

[![signAPKContinue](http://www.waltercedric.com/images/Android-development-in-5-minutes_13FC5/signAPKContinue_thumb.png "signAPKContinue")](http://www.waltercedric.com/images/Android-development-in-5-minutes_13FC5/signAPKContinue.png)

hit “Create new…”

[![createNewAPK](http://www.waltercedric.com/images/Android-development-in-5-minutes_13FC5/createNewAPK_thumb.png "createNewAPK")](http://www.waltercedric.com/images/Android-development-in-5-minutes_13FC5/createNewAPK.png)

then fill up the form

[![fillUpTheForm](http://www.waltercedric.com/images/Android-development-in-5-minutes_13FC5/fillUpTheForm_thumb.png "fillUpTheForm")](http://www.waltercedric.com/images/Android-development-in-5-minutes_13FC5/fillUpTheForm.png)

Note the location, password and alias you have chosen

Now in your module helloworld/build.graddle add the following in android {} so it look like. Use for storeFile, storePassword, keyAlias and keyPassword the values entered in previous screen.

Note also “zipAlign true”

```
apply plugin: 'android'  android {     compileSdkVersion 19     buildToolsVersion "19.0.1"      defaultConfig {         minSdkVersion 9         targetSdkVersion 19         versionCode 1         versionName "1.0"     }      signingConfigs {         myConfig {             storeFile file("C:\\Android\\keystore.jks")             storePassword "abced"             keyAlias "android"             keyPassword "abced"         }     }      buildTypes {         release {             runProguard true             zipAlign true             proguardFiles getDefaultProguardFile('proguard-android.txt'), 'proguard-rules.txt'             signingConfig signingConfigs.myConfig         }     }  }  dependencies {     compile 'com.android.support:appcompat-v7:+' }
```

Click on the right corner on [Gradle](http://www.gradle.org/ "Gradle is build automation evolved") Tab

[![graddle](http://www.waltercedric.com/images/Android-development-in-5-minutes_13FC5/graddle_thumb.png "graddle")](http://www.waltercedric.com/images/Android-development-in-5-minutes_13FC5/graddle.png)

and then double click on “assemble”, 3 apk will be create in helloworld/build/apk/

- helloworld-debug-unaligned.apk
- helloworld-release.apk
- helloworld-release-unaligned.apk

Go now to the developer console [https://play.google.com/apps/publish/](https://play.google.com/apps/publish/ "https://play.google.com/apps/publish/") and create or reuse one of your Google account

You can now upload the file helloworld-release.apk to the shop and start using it.

That was the easy part, so now happy coding!

Move now to more advanced topics by visiting [http://developer.android.com/training/basics/firstapp/index.html](http://developer.android.com/training/basics/firstapp/index.html "http://developer.android.com/training/basics/firstapp/index.html")