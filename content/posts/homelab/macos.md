---
title: "Apple MacOS disk full? you don't need cleanmymac"
date: 2025-02-16T10:44:17+01:00
summary: "If dont want to pay and use CleanMyMac and still see a lot of space being used, even after rebooting, here are some possible causes and solutions to investigate"
categories:
    - Homelab
tags:
    - apple
    - macos
    - bash
    - terminal
    - howto
---
If dont want to pay and use CleanMyMac and still see a lot of space being used, even after rebooting, here are some possible causes and solutions to investigate:

Note: the bash script at the bottom of this post is safe to use and faster.

# 1. Hidden System Files and Caches
- macOS sometimes caches large amounts of data (e.g., Spotlight indexing, system logs, or updates).
- Open Finder, press `Cmd + Shift + .` to reveal hidden files.
- Check `/private/var/folders/` for large temporary files.
- Check `/Library/Caches/` and `~/Library/Caches/` for excessive cache usage.

# 2. Large Snapshots from Time Machine
Time Machine can create local snapshots on your drive, taking up space.
Open Terminal and type:  
```bash
tmutil listlocalsnapshots /
```
Delete snapshots with:  
```bash
sudo tmutil deletelocalsnapshots <snapshot_name>
```

# 3. Large Applications or Files
- Some apps may store large libraries (e.g., Photos, iTunes, or Final Cut Pro).
- Use Finder to sort files by size (`Cmd + F` > "Kind: Any" > Add size filter).
- Use `About This Mac > Storage` to locate large files.

# 4. iCloud Drive Mismanagement
- Files stored in iCloud may be downloading automatically and consuming space.
- Check `System Preferences > Apple ID > iCloud > Manage`.
- Disable or optimize iCloud Drive.

# 5. Stuck macOS Update
- A failed or paused macOS update can leave temporary files.
- Go to `/macOS Install Data` (if it exists).
- Delete the folder (requires admin permissions).

# 6. Virtual Machines or Containers
- If you use Docker, Parallels, or other virtual environments, they can use large disk images.
- Check their storage settings for oversized files.

# 7. Disk Space Analyzers
- Use a tool to visualize storage usage (CleanMyMac isn’t perfect at finding everything):
- DaisyDisk
- Disk Inventory X
- GrandPerspective

# 8. APFS Purgeable Space
macOS APFS stores "purgeable" data that isn’t immediately visible.
In Terminal, type:  
```bash
diskutil list
```
Look for "Purgeable Space." This will be freed when needed.

# 9. Logs or Crash Reports
Excessive log files can accumulate over time.
Check `/var/log` and `~/Library/Logs`.

# 10. Email Attachments
Large attachments in Mail can consume space.
Open Mail > Preferences > Accounts > Disable "Download Attachments."

# 11. Delete all local snapshots
Attention: after this you can not restore an old version of a file, this remove local backup!
To delete all local Time Machine snapshots on macOS, follow these steps:

## 1. List Local Snapshots
Open Terminal and type:
```bash
tmutil listlocalsnapshots /
```
This will display all local snapshots stored on your Mac, with names like:
```bash
com.apple.TimeMachine.2025-02-14-123456
```

## 2. Delete Snapshots One by One
Use the following command to delete a specific snapshot:
```bash
sudo tmutil deletelocalsnapshots <snapshot_name>
```
Replace `<snapshot_name>` with the name of each snapshot listed in the previous step.

## 3. Delete All Snapshots at Once
If you want to delete all snapshots without specifying each one, you can automate it with a loop:
```bash
for snapshot in $(tmutil listlocalsnapshots / | grep -o 'com.apple.TimeMachine.[0-9-]*'); do
sudo tmutil deletelocalsnapshots $snapshot
done
```

## 4. Confirm Deletion
Re-run the `listlocalsnapshots` command to verify they are gone:
```bash
tmutil listlocalsnapshots /
```

## 5. Prevent Local Snapshots from Reappearing
If you don’t want Time Machine to create local snapshots in the future, you can disable them:
```bash
sudo tmutil disablelocal
```

# MacOS script that clean up some space

```bash
#!/bin/bash

echo "Starting macOS Disk Cleanup..."

# Clear system and user caches
echo "Clearing system and user caches..."
rm -rf ~/Library/Caches/*
rm -rf /Library/Caches/*

# Clear browser caches (Safari)
echo "Clearing Safari caches..."
rm -rf ~/Library/Safari/*
rm -rf ~/Library/Caches/com.apple.Safari/*
rm -rf ~/Library/WebKit/com.apple.Safari/*

# Clear Trash
echo "Emptying Trash..."
rm -rf ~/.Trash/*

# Remove temporary files
echo "Removing temporary files..."
rm -rf /private/var/tmp/*
rm -rf /tmp/*

# Clear logs
echo "Clearing system logs..."
rm -rf /Library/Logs/*
rm -rf ~/Library/Logs/*

# Remove old system updates (if any)
echo "Removing old system update files..."
rm -rf /Library/Updates/*

# Free up Xcode junk (if you have Xcode installed)
if [ -d ~/Library/Developer ]; then
  echo "Clearing Xcode caches..."
  rm -rf ~/Library/Developer/Xcode/DerivedData/*
  rm -rf ~/Library/Developer/CoreSimulator/*
fi

# Remove user cache for Homebrew (if installed)
if command -v brew >/dev/null 2>&1; then
  echo "Clearing Homebrew cache..."
  brew cleanup -s
  rm -rf "$(brew --cache)"
fi

# Show disk space after cleanup
echo "Cleanup completed. Disk space after cleanup:"
df -h /

echo "Done!"
```