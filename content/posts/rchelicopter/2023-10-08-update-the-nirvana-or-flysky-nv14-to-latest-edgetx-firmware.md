---
title: Update the Nirvana or FlySky NV14 to latest EdgeTX firmware

type: posts
date: 2023-10-08T20:02:18+00:00
summary: "EdgeTX is a popular open-source firmware for RC (Radio Control) transmitters. It offers a wide range of features and customization options for hobbyists and enthusiasts in the RC community. Keeping your EdgeTX installation up to date ensures you have access to the latest features, improvements, and bug fixes. One crucial aspect of updating EdgeTX is updating the SD card contents. In this blog post, we will guide you through the process of updating EdgeTX and its SD card to the latest version."
url: /rc-helicopter-airplanes-fpv-drone/update-the-nirvana-or-flysky-nv14-to-latest-edgetx-firmware/
cover: /2023/10/nirvana-nv14-edgetx.webp
tags:
  - controller
  - drone
  - edgetx
  - HowTo
  - nv14
  - rc
  - remote
categories:
  - RC Technologies
---

EdgeTX is a popular open-source firmware for RC (Radio Control) transmitters. It offers a wide range of features and customization options for hobbyists and enthusiasts in the RC community. Keeping your EdgeTX installation up to date ensures you have access to the latest features, improvements, and bug fixes. One crucial aspect of updating EdgeTX is updating the SD card contents. In this blog post, we will guide you through the process of updating EdgeTX and its SD card to the latest version.

You can update any remote control using OpenTX or EdgeTX using a computer or directly on the radio

## Flash EdgeTX firmware using a computer

1\. Put the Nirvana into DFU mode:
a. Take out and reinsert the battery OR switch off the remote control.
b. Press the DFU button gently with a pin and insert the USB wire at the same time.

![nirvana-nv14-enter-dfu-mode](/2023/10/nirvana-nv14-enter-dfu-mode-1024x545.webp)

MacOS will ask you to confirm with a popup that you want to connect to the “STM32 Bootloader”, click accept

Visit [https://buddy.edgetx.org/](https://buddy.edgetx.org/) in Google CHROME and follow the process

![nirvana-nv14-edgetx-update](/2023/10/nirvana-nv14-edgetx-update-1-1024x699.webp)

![nirvana-nv14-edgetx-update](/2023/10/nirvana-nv14-edgetx-update-2-1024x699.webp)

![nirvana-nv14-edgetx-update](/2023/10/nirvana-nv14-edgetx-update-3-1024x699.webp)

When completed, just restart the controller and update the SDCard content, ideally with EdgeTX companion

![nirvana-nv14-edgetx-update](/2023/10/Screenshot-2023-10-08-at-21.43.13-1024x516.webp)

## Flash EdgeTX firmware in the radio

### **Step 1: Check Your Current EdgeTX Version:**

Before you begin the update process, it’s a good practice to check your current EdgeTX version. Navigate to the “System” or “About” menu on your radio to find this information. Knowing your current version will help you ensure that you’re updating to a newer version.

### **Step 2: Download the Latest EdgeTX Firmware:**

To update EdgeTX using your radio, you’ll need to download the latest firmware version compatible with your radio model. You can find these firmware files on the official EdgeTX website. Follow these steps:

1.  Open your web browser and go to the EdgeTX website ([https://edgetx.org/](https://edgetx.org/)). You can get the right binary for your radio here [https://buddy.edgetx.org/#/flash?version=v2.9.1&target=nv14](https://buddy.edgetx.org/#/flash?version=v2.9.1&target=nv14)
2.  Look for a section or link that provides downloads or firmware updates.
3.  Locate and download the firmware file corresponding to your specific radio model.

### **Step 3: Copy the Firmware to Your Radio:**

Once you have downloaded the latest EdgeTX firmware for your radio model, follow these steps to copy it to your transmitter:

1.  Connect your radio to your computer using a USB cable or memory card reader, depending on your radio model.
2.  Your radio will appear as a removable drive on your computer. Open this drive.
3.  Locate the folder where you should place the firmware file. Typically, this folder is named “FIRMWARE” or “FIRMWARES.”
4.  Copy the downloaded firmware file (it’s usually a .bin file) into this folder on your radio’s storage.

### **Step 4: Initiate the Update on Your Radio:**

With the firmware file copied to your radio, you can initiate the update directly from your radio’s menu OR entering DFU mode:

1.  On your radio, navigate to the “System” or “Settings” menu.
2.  Look for an option related to firmware updates. It may be labeled “Firmware Update,” “Flash Firmware,” or something similar.
3.  Select this option, and your radio will search for the firmware file you placed in the “FIRMWARE” folder.
4.  Once the firmware file is found, confirm that you want to proceed with the update.

#### DFU mode with any EdgeTX remote

Enter DFU mode by pushing both trim inward/toward the screen/to the center while pressing power on

#### DFU mode with Nirvana NV14 FlySky

Enter DFU mode by pushing both trim (blue button) inward/toward the screen/to the center while pressing power on

### **Step 5: Wait for the Update to Complete:**

Your radio will now start the firmware update process. This may take a few minutes, so be patient and avoid interrupting the process.

### **Step 6: Verify the Update:**

After the update is complete, your radio will typically restart with the latest EdgeTX version. Double-check the system information to ensure that your radio is now running the latest firmware.

### **Final words**

Updating EdgeTX using your radio is a straightforward process that doesn’t require a computer or any complex tools. By following the steps outlined in this guide, you can keep your radio’s firmware up to date and enjoy the latest features and improvements in EdgeTX. Regular updates ensure that your RC experience remains enjoyable and up to par with the latest developments in the EdgeTX community. Happy flying!

Copy the latest bin file in the sdcard firmware directory.

![Resize](/2023/10/nirvana-nv14-dfu-mode-radio-693x1024.webp)

A new screen will appear: “EdgeTX Bootloader”, use Right trim to move and long press to select

Now select “Write Firmware”, and find the EdgeTX firmware bin file.

Follow the process.

## How to Update the SD Card of EdgeTX to the Latest Version

### **Step 1: Backup Your Existing SD Card:**

Before you begin the update process, it’s essential to back up your existing EdgeTX SD card contents. This ensures that you can recover your previous settings and models if anything goes wrong during the update. To back up your SD card:

1.  Insert the SD card from your RC transmitter into your computer using an SD card reader.
2.  Copy the entire contents of the SD card to a safe location on your computer. This includes all the files and folders.

### **Step 2: Download the Latest EdgeTX SD Card Contents:**

To update your EdgeTX SD card, you will need the latest SD card contents package. You can download this package from the official EdgeTX website. Follow these steps:

1.  Open your web browser and go to the EdgeTX website ([https://edgetx.org/](https://edgetx.org/)).
2.  Look for a section or link that provides downloads or SD card contents.
3.  Download the latest SD card contents package. This package is usually available as a compressed ZIP file.

### **Step 3: Extract the Contents:**

Once the download is complete, locate the downloaded ZIP file and extract its contents to a folder on your computer. This folder will contain all the necessary files and folders required for the update.

### **Step 4: Copy the Files to Your SD Card:**

Now it’s time to copy the extracted files and folders to your EdgeTX SD card. Follow these steps:

1.  Insert the EdgeTX SD card into your computer’s SD card reader.
2.  Open the folder where you extracted the contents of the downloaded package.
3.  Select all the files and folders in this folder.
4.  Copy the selected files and folders.
5.  Go to the SD card drive on your computer and paste the copied files and folders onto the root directory of the SD card. Overwrite any existing files if prompted.

### **Step 5: Safely Eject the SD Card:**

After copying the files, safely eject the SD card from your computer.

### **Step 6: Insert the Updated SD Card into Your RC Transmitter:**

Now that you’ve updated the SD card contents, insert the SD card back into your RC transmitter.

### **Step 7: Test the Update:**

Power on your transmitter and ensure that the update was successful. You should see the latest EdgeTX interface and have access to the updated features and improvements.

### **Final words**

Updating the SD card contents of your EdgeTX transmitter is a crucial step in keeping your RC experience up to date and taking advantage of the latest features and improvements. By following the steps outlined in this guide, you can ensure a smooth and hassle-free update process. Remember to always back up your existing SD card contents before performing an update to avoid any data loss. Enjoy your upgraded EdgeTX experience!

# Nirvana NV14 Manuals

[Nirvana NV14 Manuals](/rchelicopter/nv14/flysky_nirvana_manual.pdf)
