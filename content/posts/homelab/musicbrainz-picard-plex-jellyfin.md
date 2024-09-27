---
title: Music Library Organization with MusicBrainz Picard for Plex or Jellyfin
date: 2024-01-01T10:44:17+01:00
cover: "/homelab/Music-Library-Organization-with-MusicBrainz-Picard-for-Plex-or-Jellyfin.webp"
summary: "If you're a music enthusiast who loves curating an extensive collection, you understand the importance of having a well-organized music library. One powerful tool that can significantly enhance your music organization experience, especially when using media server, is [MusicBrainz Picard](https://picard.musicbrainz.org)."
categories:
  - Homelab
tags:
  - music
  - plex
  - jellyfin
---
If you're a music enthusiast who loves curating an extensive collection, you understand the importance of having a well-organized music library. One powerful tool that can significantly enhance your music organization experience, especially when using media server, is [MusicBrainz Picard](https://picard.musicbrainz.org).  Mastering your music library organization with [MusicBrainz Picard](https://picard.musicbrainz.org) is a game-changer for Plex and Jellyfin users. It ensures that your music is accurately tagged, consistently named, and seamlessly integrated into your media server. By investing a little time in the setup and periodic maintenance, you can enjoy a superior music streaming experience and take pride in a meticulously organized music collection. A music collection organized and enriched with accurate metadata, providing a more enjoyable listening experience.

 {{< notice tip>}}
 Do not create custom directory like Christmas, Blues, Jazz but let Picard set properly the genre and handle the file structure (Artist/Albums*). In the the long run it is the way to go!

 Music metadata belong to the file NOT to the database of Jellyfin or Plex. This has only advantages
 * Faster media server scans
 * Easier to locate the mess in your library
 * Portability if you move from plex to jellyfin or any other media server
 * If you reinstall your media server and lose its metadata, again faster scan
 * More accurate results at the cost of a one time effort
 {{< /notice >}}

 {{< notice warning>}}
 * [MusicBrainz Picard](https://picard.musicbrainz.org) move and rename files content, do a backup before it is too late!
 * Restart often the software especially after having processed a huge number of files. It crash often so a restart avoid to lose some work.
 {{< /notice >}}

 ## Caution or how you can mess your library with Picard
* Picard has no idea about duplicates, multiple identical files (same metadata but different compilations albums) will create duplicates (1) (2)...(n) in their filename in the target albums! so dont run on compilations. Either you only collect compilations or essentials from artists or you avoid them at all costs!
* Picard could sometimes not correctly attribute files: you may end up with lot of albums folder with one or two songs, e.g it split one legit albums into multiples!
* Picard database is top but sometimes typo make it create identical artists or albums with only slight typo
* Picard will only move what it knows, a perfectly fine and complete album from the left windows may end in an album on disk with only a few songs
 and the list goes on...

## What is [MusicBrainz Picard](https://picard.musicbrainz.org)?

[MusicBrainz Picard](https://picard.musicbrainz.org) is a free and open-source cross-platform music tagger that uses an online music database to identify and tag your music files. It ensures that your music library has accurate and consistent metadata, making it easier to navigate, search, and enjoy your music through various media players, including Plex.

### Getting Started

#### Download and Install [MusicBrainz Picard](https://picard.musicbrainz.org)
- Head over to the official [MusicBrainz Picard](https://picard.musicbrainz.org) website and download the latest version suitable for your operating system.
- Follow the installation instructions to set up the application on your computer.

#### Configure MusicBrainz Picard
- Launch [MusicBrainz Picard](https://picard.musicbrainz.org) and go to "Options" we will adjust settings related to file naming, tags, and plugins to tailor the application to your specific needs.

Configuring [MusicBrainz Picard](https://picard.musicbrainz.org) for optimal use involves adjusting several options to ensure accurate tagging and seamless integration. Here are some recommended options and settings:

##### General Options
- Preserve timestamps of tagged files: Keep this option enabled to maintain the original file creation and modification timestamps.

##### File Naming Options
- Rename files using metadata: Enable this option to rename your music files based on the metadata from MusicBrainz.
- Use forward slashes to separate multi-level path components: If you prefer a folder structure for your music library, enabling this option can help maintain a clean hierarchy.
- move file saved to a new directory so you can see progress

##### Tags Options
- Check spelling of all tags before saving: This can help prevent common errors in tags and ensure consistency.
- Preserve tags like: lyrics, copyright,  ...


##### Metadata Options
- Translate artist names to this locale: Set this option based on your preferred language for artist names.
- Translate release and track titles to this locale: Similarly, set your preferred language for release and track titles.

##### Cover Art Options
- Download cover art automatically: Enable this option to ensure that [MusicBrainz Picard](https://picard.musicbrainz.org) fetches cover art for your albums.

##### Advanced Options
- Ignore MBIDs when loading new files: Disabling this option may help Picard identify your files more accurately, especially if they were previously tagged using MusicBrainz identifiers.

##### Plugins
Explore and install plugins that enhance the functionality of [MusicBrainz Picard](https://picard.musicbrainz.org), such as the "Last.fm" plugin for additional metadata.

Attention the more plugin you add the more queries are done, the slower it is!

Lyrics with musicmatch, only 2000 songs per day in the free version

My favorite list of plugins are:
* AcousticBrainz Tags
* Album Artist Website
* Last.fm
* Musixmatch Lyrics

##### Metadata Providers
- In the Metadata Providers section, you can choose which sources Picard should use to retrieve metadata. Make sure "MusicBrainz" is selected as the primary source for accurate data.

##### Cover Art Archive
- Configure the Cover Art Archive options to specify the preferred size and quality of cover art downloads.

##### Save Options
- Save tags to file: Ensure that this option is selected to save the updated metadata directly to your music files.

Remember to periodically review and adjust these settings based on your preferences and any changes in your music library. Regularly updating your library using [MusicBrainz Picard](https://picard.musicbrainz.org).

### Organizing Your Music Library

 {{< notice tip>}}Keep your library on SSD till it is organized.{{< /notice >}}

1. Add Files to [MusicBrainz Picard](https://picard.musicbrainz.org) (left panel)
- Drag and drop your music files or entire folders into the [MusicBrainz Picard](https://picard.musicbrainz.org) interface. Work in small batches, Picard will crash if you use 20k files, best is to drag one album at a time!


2. Click the cluster button, this will put track into their respective albums

3. For each clustered items, click "Lookup"
- The application will analyze and identify your tracks, attempting to match them with entries in the MusicBrainz database. Sometimes it is not properly identified: in that case look if you have not another version of the same albums (more or less songs with what has been identified)
- Be patient and wait till the queue is empty, the number of request per second to musicbrainz is limited
- On the left side, you will have some leftover that were not properly identified: they may be (un)clustered



- For clustered file that are still unknown, right click "lookup in browser" and hit tag if you find a match (tedious part)

- Clustered file are maybe still not all moving to the right side panel, time to hit  "Scan" button on them and wait again

- DO NOT SAVE non clustered files (never right click save in the left panel), you can work later on them again. If you hit save you would move them to the destination folder with wrong metadata!

#### Review and Confirm Matches (right panel)
- [MusicBrainz Picard](https://picard.musicbrainz.org) will present you with potential matches for your tracks. Review the suggestions and confirm the correct matches.
- Use the "Scan" and "Lookup" functions to refine and enhance the accuracy of your matches.
- Understand icon colors https://picard-docs.musicbrainz.org/en/getting_started/status_icons.html
- Sometimes a red CD icon, just need a right click "refresh" to turn gold
- ONLY hit Save if albums are with gold icons!

#### Applying Metadata Tags
- Once matches are confirmed, click the "Save" button to apply the metadata tags to your music files.
- [MusicBrainz Picard](https://picard.musicbrainz.org) will update the file names, folder structure, and tags based on the information from the MusicBrainz database, and move the files to a new folder (it set in options)

## Jellyfin Integration

Open Jellyfin and navigate to your music library.
Trigger a library scan or refresh to recognize the changes made by MusicBrainz Picard.
Jellyfin will import the updated metadata, providing a well-organized and enriched presentation of your music collection.

## Plex Integration

### Setting Up Plex for Music
Open Plex and navigate to your music library.
Ensure that the library is set up correctly, pointing to the folder where your organized music files are stored.

### Library Scanning
Trigger a library scan in Plex to recognize the changes made by [MusicBrainz Picard](https://picard.musicbrainz.org).
Plex will import the updated metadata, providing a cohesive and organized presentation of your music library.

## Additional Tips

### Regular Maintenance
Periodically run [MusicBrainz Picard](https://picard.musicbrainz.org) to update and maintain your music library as you add new tracks or albums.

### Backups
Before making significant changes, consider backing up your music library to avoid accidental data loss.

### Explore Plugins
[MusicBrainz Picard](https://picard.musicbrainz.org) supports various plugins that can enhance its functionality. Explore and install plugins that align with your preferences.

## Support me

[Buy me a coffee](https://www.buymeacoffee.com/cedricwalter)
