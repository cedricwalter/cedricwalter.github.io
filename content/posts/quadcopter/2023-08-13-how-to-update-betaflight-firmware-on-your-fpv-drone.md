---
title: How to update Betaflight firmware on your FPV drone
summary: "Upgrading the Betaflight firmware on your FPV drone is essential to access the latest features, improvements, and bug fixes. Here 's a step-by-step guide on how to upgrade the Betaflight version:"
type: posts
date: 2023-08-13T18:36:11+00:00
url: /how-to-update-betaflight-firmware-on-your-fpv-drone/
cover: /2023/08/betaflight.webp
tags:
  - betaflight
  - drone
  - fpv
  - HowTo
categories:
  - Quadcopter
---
Upgrading the Betaflight firmware on your FPV drone is essential to access the latest features, improvements, and bug fixes. Here 's a step-by-step guide on how to upgrade the Betaflight version:

  1. **Backup Your Configuration:** Before you begin, make sure to back up your current Betaflight configuration. This includes your settings, PID tuning, and any other customizations you 've made. You can save your configuration by using the "Backup" feature within the Betaflight Configurator.
  2. **Download the Latest Firmware:** Visit the Betaflight firmware repository on GitHub to download the latest firmware for your flight controller. Go to the following link: <https://github.com/betaflight/betaflight/releases>Download the firmware file that matches your flight controller 's hardware. Make sure to choose the appropriate target and version.
  3. **Open Betaflight Configurator:** Launch the Betaflight Configurator software on your computer. If you don 't have it installed, you can download it from the Betaflight website.
  4. **Connect Your Drone:** Connect your FPV drone to your computer using a USB cable. Make sure your drone is powered on and the flight controller is detected by your computer.
  5. **Put Your Flight Controller in DFU Mode (if needed):** Some flight controllers might require you to put them in Device Firmware Upgrade (DFU) mode to update the firmware. Refer to your flight controller 's manual for specific instructions on how to do this.
  6. **Flash the New Firmware:**
      * In the Betaflight Configurator, navigate to the "Firmware Flasher" tab.
      * Click on the "Load Firmware [Local]" button and select the firmware file you downloaded earlier.
      * If your flight controller requires DFU mode, click the "Flash Firmware" button while the flight controller is in DFU mode. Otherwise, you can usually just click "Flash Firmware."
      * Wait for the flashing process to complete. Your flight controller will reboot with the new firmware.
  7. **Restore Your Configuration:** After the firmware upgrade, you 'll likely need to reset your flight controller 's settings to default. You can then restore your saved configuration using the backup you created earlier.
  8. **Calibration and Testing:** Once your configuration is restored, make sure to calibrate your sensors (gyro, accelerometer) and test your drone 's stability and responsiveness. You may need to adjust PID settings or other parameters to achieve optimal flight performance.
  9. **Verify Everything Works:** Test all your drone 's components and functions to ensure everything is functioning as expected. Check motor direction, receiver signal, and all modes and switches.

Remember that firmware upgrades can sometimes introduce new bugs or compatibility issues, so it 's a good practice to keep an eye on community forums and feedback to ensure a smooth transition to the new version.
