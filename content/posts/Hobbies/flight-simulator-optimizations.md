---
title: "optimize Windows 11 for X-Plane and Microsoft Flight Simulator 2024"
summary: "To optimize Windows 11 for **X-Plane 12** and **Microsoft Flight Simulator 2024**, you need to focus on system performance, latency reduction, and stability. Since you're using a high-end flight simulator setup with VR, we'll also optimize for VR performance."
type: posts
date: 2025-02-06T09:10:52+01:00
tags:
  - PPL
  - flying
  - flight-simulator
  - xplane
  - flight-simulator-2024
  - computer-simulator
categories:
  - Hobbies
cover: https://www.waltercedric.com/hobbies/flight/Next-Level-Racing-Flight-Seat-Pro-fully-loaded.webp
---

<!-- vscode-markdown-toc -->
* 1. [**Disable Unnecessary Background Processes**](#DisableUnnecessaryBackgroundProcesses)
* 2. [**Set High-Performance Power Plan**](#SetHigh-PerformancePowerPlan)
* 3. [**Disable Core Isolation & Virtualization-Based Security (VBS)**](#DisableCoreIsolationVirtualization-BasedSecurityVBS)
* 4. [**Turn Off Windows Game Mode & Xbox Services**](#TurnOffWindowsGameModeXboxServices)
* 5. [**Disable Windows Automatic Updates While Playing**](#DisableWindowsAutomaticUpdatesWhilePlaying)
* 6. [**AMD Radeon 7900 XTX Optimization**](#AMDRadeon7900XTXOptimization)
	* 6.1. [**1. BIOS & System-Level Optimizations**](#1.BIOSSystem-LevelOptimizations)
		* 6.1.1. [**Enable Resizable BAR (ReBAR)**](#EnableResizableBARReBAR)
		* 6.1.2. [**Set PCIe to Gen4 (If Needed)**](#SetPCIetoGen4IfNeeded)
	* 6.2. [**2. AMD Adrenalin Settings**](#2.AMDAdrenalinSettings)
		* 6.2.1. [**Graphics Settings**](#GraphicsSettings)
		* 6.2.2. [**Advanced Settings**](#AdvancedSettings)
	* 6.3. [**3. GPU Undervolting (Lower Temps, More Stable FPS)**](#3.GPUUndervoltingLowerTempsMoreStableFPS)
	* 6.4. [**4. Cooling & Thermal Optimization**](#4.CoolingThermalOptimization)
		* 6.4.1. [**Adjust Fan Curve for Better Temps**](#AdjustFanCurveforBetterTemps)
		* 6.4.2. [**Replace Stock Thermal Pads (If Needed)**](#ReplaceStockThermalPadsIfNeeded)
	* 6.5. [**5. Windows & DirectX Optimizations**](#5.WindowsDirectXOptimizations)
		* 6.5.1. [**Enable Hardware-Accelerated GPU Scheduling (HAGS)**](#EnableHardware-AcceleratedGPUSchedulingHAGS)
		* 6.5.2. [**Disable MPO (Multiplane Overlay) to Prevent Stutters**](#DisableMPOMultiplaneOverlaytoPreventStutters)
	* 6.6. [**6. VR Optimization (For Meta Quest 3 / OpenXR)**](#6.VROptimizationForMetaQuest3OpenXR)
* 7. [**Enable OpenXR for Better VR Performance**](#EnableOpenXRforBetterVRPerformance)
* 8. [**Enable DX12 + FidelityFX Super Resolution (FSR)**](#EnableDX12FidelityFXSuperResolutionFSR)
	* 8.1. [**7. In-Game Optimization**](#7.In-GameOptimization)
		* 8.1.1. [**X-Plane 12 (Vulkan Mode)**](#X-Plane12VulkanMode)
		* 8.1.2. [**MSFS 2024 (DX12 + AMD Optimized Settings)**](#MSFS2024DX12AMDOptimizedSettings)
* 9. [NVIDIA Users](#NVIDIAUsers)
* 10. [**Enable Hardware-Accelerated GPU Scheduling (HAGS)**](#EnableHardware-AcceleratedGPUSchedulingHAGS-1)
* 11. [**Disable Fullscreen Optimizations & Enable High DPI Scaling**](#DisableFullscreenOptimizationsEnableHighDPIScaling)
* 12. [**Disable CPU Parking & SMT (if needed)**](#DisableCPUParkingSMTifneeded)
* 13. [**Enable ReBAR (Resizable BAR)**](#EnableReBARResizableBAR)
* 14. [**Overclock & Tune RAM**](#OverclockTuneRAM)
* 15. [**Use an NVMe SSD for the Games**](#UseanNVMeSSDfortheGames)
		* 15.1. [**Increase Pagefile Size (Virtual Memory)**](#IncreasePagefileSizeVirtualMemory)
* 16. [**Oculus/Meta Quest 3**](#OculusMetaQuest3)
* 17. [**SteamVR Settings**](#SteamVRSettings)
* 18. [**OpenXR Toolkit**](#OpenXRToolkit)
* 19. [**Disable Network Throttling**](#DisableNetworkThrottling)
* 20. [**Prioritize Flight Sim Traffic (QoS)**](#PrioritizeFlightSimTrafficQoS)
* 21. [**X-Plane 12**](#X-Plane12)
* 22. [**Microsoft Flight Simulator 2024**](#MicrosoftFlightSimulator2024)
* 23. [**For AMD (Ryzen 5000/7000/8000 Series)**](#ForAMDRyzen500070008000Series)
	* 23.1. [**Enable Precision Boost Overdrive (PBO)**](#EnablePrecisionBoostOverdrivePBO)
	* 23.2. [**Enable EXPO (For DDR5 RAM)**](#EnableEXPOForDDR5RAM)
* 24. [**Enable XMP (RAM Overclocking)**](#EnableXMPRAMOverclocking)
* 25. [**Undervolt via Intel XTU / BIOS**](#UndervoltviaIntelXTUBIOS)
* 26. [**Power Limits (PL1/PL2)**](#PowerLimitsPL1PL2)
* 27. [**Enable Resizable BAR (ReBAR)**](#EnableResizableBARReBAR-1)
* 28. [**Undervolt GPU for Cooler & More Stable Performance**](#UndervoltGPUforCoolerMoreStablePerformance)
* 29. [**Enable PCIe Gen4/5**](#EnablePCIeGen45)
* 30. [**Enable Write Caching for NVMe SSDs**](#EnableWriteCachingforNVMeSSDs)
	* 30.1. [**Custom Fan Curves (For CPU & GPU)**](#CustomFanCurvesForCPUGPU)
* 31. [**Monitor GPU Usage & Temps**](#MonitorGPUUsageTemps)
* 32. [**Test for Stutter-Free VR**](#TestforStutter-FreeVR)

<!-- vscode-markdown-toc-config
	numbering=true
	autoSave=true
	/vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc -->

# **1. Windows 11 Optimization**
##  1. <a name='DisableUnnecessaryBackgroundProcesses'></a>**Disable Unnecessary Background Processes**
- Open **Task Manager (Ctrl + Shift + Esc) > Startup Apps** and disable anything unnecessary.
- Use **MSConfig (Win + R > "msconfig") > Services**, check *Hide all Microsoft services*, then disable unnecessary third-party services (e.g., Adobe, Google Update, etc.).
- Run `powercfg -h off` in **Command Prompt (Admin)** to disable hibernation and free up disk space.

##  2. <a name='SetHigh-PerformancePowerPlan'></a>**Set High-Performance Power Plan**
- Go to **Control Panel > Power Options** and select **High Performance** or **Ultimate Performance** (use `powercfg -duplicatescheme e9a42b02-d5df-448d-aa00-03f14749eb61` to enable it if missing).

##  3. <a name='DisableCoreIsolationVirtualization-BasedSecurityVBS'></a>**Disable Core Isolation & Virtualization-Based Security (VBS)**
Unsecure setup! only use on dedicated simulation computer!
- **Settings > Privacy & Security > Windows Security > Device Security**  
- Disable **Memory Integrity** and **Virtual Machine Platform** (reboot required).  

##  4. <a name='TurnOffWindowsGameModeXboxServices'></a>**Turn Off Windows Game Mode & Xbox Services**
- **Settings > Gaming > Game Mode**, turn **OFF**.  
- **Settings > Apps > Installed apps**, search for Xbox-related apps and uninstall or disable background activity.

##  5. <a name='DisableWindowsAutomaticUpdatesWhilePlaying'></a>**Disable Windows Automatic Updates While Playing**
- Use **Group Policy Editor (gpedit.msc)**:  
  - Navigate to **Computer Configuration > Administrative Templates > Windows Components > Windows Update**  
  - Enable **"Do not include drivers with Windows Updates"** and **"Configure Automatic Updates" > Disabled**  

---

# **2. GPU & Display Optimization**

##  6. <a name='AMDRadeon7900XTXOptimization'></a>**AMD Radeon 7900 XTX Optimization**  

###  6.1. <a name='1.BIOSSystem-LevelOptimizations'></a>**1. BIOS & System-Level Optimizations**
####  6.1.1. <a name='EnableResizableBARReBAR'></a>**Enable Resizable BAR (ReBAR)**
- **BIOS > Advanced > PCIe Settings**  
- Enable **Above 4G Decoding** & **Resizable BAR (SAM - Smart Access Memory)**.  
- Check activation in **AMD Adrenalin > Performance > Tuning > Advanced View**.  

####  6.1.2. <a name='SetPCIetoGen4IfNeeded'></a>**Set PCIe to Gen4 (If Needed)**
- If experiencing stutters, ensure **PCIe Slot Mode** is **Gen4** (not Auto).  

---

###  6.2. <a name='2.AMDAdrenalinSettings'></a>**2. AMD Adrenalin Settings**
Open **AMD Adrenalin** (Right-click Desktop > AMD Software).  

####  6.2.1. <a name='GraphicsSettings'></a>**Graphics Settings**
- **Radeon Super Resolution (RSR)** → *Disabled (Unless GPU-Bound)*  
- **Anti-Lag+** → *Enabled* (Lowers input delay)  
- **Chill** → *Disabled*  
- **Boost** → *Disabled*  
- **Radeon Image Sharpening (RIS)** → *Enabled (50-80% for clarity)*  
- **Wait for Vertical Refresh (V-Sync)** → *Always OFF (Use in-game settings if needed)*  
- **Frame Rate Target Control** → *Off (Unless using VRR, then match refresh rate)*  

####  6.2.2. <a name='AdvancedSettings'></a>**Advanced Settings**
- **Tessellation Mode** → *Override Application* → *x8 (Balanced Performance/Visuals)*  
- **Texture Filtering Quality** → *Performance*  
- **Anisotropic Filtering** → *16x (Improves clarity in flight sims)*  

---

###  6.3. <a name='3.GPUUndervoltingLowerTempsMoreStableFPS'></a>**3. GPU Undervolting (Lower Temps, More Stable FPS)**
##### **Step 1: Find Stable Voltage**
1. Open **AMD Adrenalin > Performance > Tuning > Manual**.  
2. Under **Voltage Control**, lower voltage from **1150mV** to **975-1050mV**.  
3. Apply & test stability in **3DMark Timespy / X-Plane 12 / MSFS 2024**.  

##### **Step 2: Optimize Power Limit**
1. Increase **Power Limit** to **+10%** (allows better boost clocks).  
2. Adjust GPU Clock to **2700-2850MHz** (depends on silicon quality).  

##### **Step 3: Fine-Tune VRAM**
1. Set **VRAM Clock** to **2750-2850MHz**.  
2. Test **Stable Timing** by enabling **Fast Timing Mode** (only for Samsung/Good VRAM chips).  

---

###  6.4. <a name='4.CoolingThermalOptimization'></a>**4. Cooling & Thermal Optimization**
####  6.4.1. <a name='AdjustFanCurveforBetterTemps'></a>**Adjust Fan Curve for Better Temps**
- Open **AMD Adrenalin > Performance > Tuning > Fan Curve**  
- Set:  
  - **0-50°C → 30% Fan Speed**  
  - **50-70°C → 60% Fan Speed**  
  - **70-85°C → 80%+ Fan Speed** (Keep GPU under 85°C for best stability).  

####  6.4.2. <a name='ReplaceStockThermalPadsIfNeeded'></a>**Replace Stock Thermal Pads (If Needed)**
- The **7900 XTX Reference Model** has **bad hotspot issues**.  
- If hotspot temps exceed **110°C**, replace **VRAM thermal pads (1.5mm, 2.0mm on backplate)**.  

---

###  6.5. <a name='5.WindowsDirectXOptimizations'></a>**5. Windows & DirectX Optimizations**
####  6.5.1. <a name='EnableHardware-AcceleratedGPUSchedulingHAGS'></a>**Enable Hardware-Accelerated GPU Scheduling (HAGS)**
- **Settings > System > Display > Graphics**  
- Enable **Hardware-Accelerated GPU Scheduling**.  

####  6.5.2. <a name='DisableMPOMultiplaneOverlaytoPreventStutters'></a>**Disable MPO (Multiplane Overlay) to Prevent Stutters**
1. Open **Regedit (Win + R > regedit)**  
2. Go to:  
   `HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\Dwm`  
3. Create a **DWORD (32-bit) Value** named `OverlayTestMode`  
4. Set its value to `00000005` and restart.  

---

###  6.6. <a name='6.VROptimizationForMetaQuest3OpenXR'></a>**6. VR Optimization (For Meta Quest 3 / OpenXR)**
##  7. <a name='EnableOpenXRforBetterVRPerformance'></a>**Enable OpenXR for Better VR Performance**
1. Open **AMD Adrenalin > Gaming > Global Graphics**  
2. Enable **"Radeon Enhanced Sync"** (Helps with frame pacing in VR).  
3. Use **OpenXR Toolkit**:  
   - **Fixed Foveated Rendering** → Enabled  
   - **Turbo Mode** → Enabled  
   - **FSR 2.1 Upscaling** → Set **80-90% render scale** for better performance.  

##  8. <a name='EnableDX12FidelityFXSuperResolutionFSR'></a>**Enable DX12 + FidelityFX Super Resolution (FSR)**
- In **MSFS 2024**:  
  - Set **DirectX 12 Mode**  
  - Enable **FSR 2.1 Quality Mode** for better VR performance.  

---

###  8.1. <a name='7.In-GameOptimization'></a>**7. In-Game Optimization**
####  8.1.1. <a name='X-Plane12VulkanMode'></a>**X-Plane 12 (Vulkan Mode)**
- **Rendering API** → *Vulkan (Not OpenGL)*  
- **Cloud Detail** → *Medium (Avoid Ultra for FPS stability)*  
- **Reflection Detail** → *Low (Major FPS gain in flight sims)*  
- **Anti-Aliasing** → *FXAA or 2x MSAA (Higher settings hit FPS hard in VR)*  

####  8.1.2. <a name='MSFS2024DX12AMDOptimizedSettings'></a>**MSFS 2024 (DX12 + AMD Optimized Settings)**
- **TAA (Not DLSS, Since Radeon GPUs Don't Support It)**  
- **Texture Resolution** → *High*  
- **Volumetric Clouds** → *Medium (Ultra Kills FPS in VR)*  
- **LOD Scaling** → *100-150 (Avoid 200+ in VR)*  

##  9. <a name='NVIDIAUsers'></a>NVIDIA Users
- **Power Management Mode** → *Prefer maximum performance*  
- **Low Latency Mode** → *On (or Ultra for lowest latency, but test for stability)*  
- **Threaded Optimization** → *On*  
- **Vertical Sync** → *Off (unless using G-Sync/Freesync)*  
- **Texture Filtering - Quality** → *High Performance*  
- **Max Frame Rate** → *Set if using VR to match headset refresh rate*  

##  10. <a name='EnableHardware-AcceleratedGPUSchedulingHAGS-1'></a>**Enable Hardware-Accelerated GPU Scheduling (HAGS)**
- **Settings > System > Display > Graphics**  
- Enable **Hardware-Accelerated GPU Scheduling**  

##  11. <a name='DisableFullscreenOptimizationsEnableHighDPIScaling'></a>**Disable Fullscreen Optimizations & Enable High DPI Scaling**
- Locate `X-Plane.exe` and `FlightSimulator.exe`, right-click → **Properties > Compatibility**  
- **Disable fullscreen optimizations**  
- **Change High DPI Settings** → *Override high DPI scaling behavior* → Set to *Application*  

---

# **3. CPU & RAM Optimization**
##  12. <a name='DisableCPUParkingSMTifneeded'></a>**Disable CPU Parking & SMT (if needed)**
- Use **ParkControl** (by Bitsum) to disable CPU core parking.  
- If using an **AMD CPU**, test disabling SMT (Simultaneous Multithreading) in BIOS for better latency.  

##  13. <a name='EnableReBARResizableBAR'></a>**Enable ReBAR (Resizable BAR)**
- Ensure **Resizable BAR** is enabled in **BIOS** for better GPU performance.  

##  14. <a name='OverclockTuneRAM'></a>**Overclock & Tune RAM**
- If using **EXPO/XMP**, enable it in BIOS to maximize memory speed.  
- If comfortable with overclocking, tighten RAM timings using **DRAM Calculator for Ryzen (if AMD)** or **Intel XTU**.  

---

# **4. Storage Optimization**
##  15. <a name='UseanNVMeSSDfortheGames'></a>**Use an NVMe SSD for the Games**
- Ensure **X-Plane 12** and **MSFS 2024** are installed on **a fast NVMe SSD** to reduce loading times.  
- Defragment **HDDs**, but **do not defragment SSDs**.  

####  15.1. <a name='IncreasePagefileSizeVirtualMemory'></a>**Increase Pagefile Size (Virtual Memory)**
- **Settings > System > About > Advanced system settings**  
- **Performance > Advanced > Virtual Memory**  
- Set **Custom Size**:  
  - Minimum: **1.5x your RAM size**  
  - Maximum: **3x your RAM size**  
- If using an NVMe SSD, set the pagefile there for best performance.  

---

# **5. VR Optimization (For Quest 3 or Other Headsets)**
Since you’re using VR with MSFS 2024 and X-Plane 12:  

##  16. <a name='OculusMetaQuest3'></a>**Oculus/Meta Quest 3**
- Use **Air Link with H.265 enabled** (if using wireless).  
- **Oculus Debug Tool (ODT)**: Set **Encode Bitrate (Mbps)** to 300+ for high-quality visuals.  
- Set **Encode Resolution Width** to **1.3x or 1.5x native resolution** for better clarity.  

##  17. <a name='SteamVRSettings'></a>**SteamVR Settings**
- Set **Motion Smoothing** to **Disabled** (can cause stutters).  
- **Render Resolution**: Keep close to native resolution to avoid GPU bottlenecks.  

##  18. <a name='OpenXRToolkit'></a>**OpenXR Toolkit**
- Install **OpenXR Toolkit** to tweak render scale and enable **foveated rendering** for extra FPS.  

---

# **6. Network & Online Performance**
##  19. <a name='DisableNetworkThrottling'></a>**Disable Network Throttling**
- Open **Regedit (Win + R > regedit)**  
- Navigate to:  
  `HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Multimedia\SystemProfile`  
  - Set `NetworkThrottlingIndex` to **FFFFFFFF** (disable throttling).  
- Navigate to:  
  `HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Multimedia\SystemProfile\Tasks\Games`  
  - Set `GPU Priority` to **8** and `Priority` to **6**.  

##  20. <a name='PrioritizeFlightSimTrafficQoS'></a>**Prioritize Flight Sim Traffic (QoS)**
- If using a high-end **router with QoS (like Ubiquiti)**, prioritize MSFS & X-Plane traffic.  

---

# **7. In-Game Settings Optimization**
##  21. <a name='X-Plane12'></a>**X-Plane 12**
- **CPU-Bound Users**: Lower **Objects Density** & **Shadows**.  
- **GPU-Bound Users**: Lower **Anti-Aliasing (SSAO)** & **Volumetric Clouds**.  
- Disable **Vulkan Debugging (in settings.txt)** to reduce stutters.  

##  22. <a name='MicrosoftFlightSimulator2024'></a>**Microsoft Flight Simulator 2024**
- **Turn off AI Traffic & Multiplayer Traffic** for better FPS.  
- **Reduce Terrain Level of Detail (LOD) to 100-150** for CPU gains.  
- Set **Texture Resolution to High (not Ultra)** for VR.  
- Use **DX12 + DLSS/FSR** for better GPU performance.  

---

I recommend You to **monitor FPS with CapFrameX** and **fine-tuning VR settings** with OpenXR Toolkit.  

---

# BIOS Tuning
**BIOS tuning** can significantly improve performance, reduce stutters, and optimize CPU/GPU usage—especially for VR.  

---

# **1. CPU Optimization (AMD & Intel)**  
##  23. <a name='ForAMDRyzen500070008000Series'></a>**For AMD (Ryzen 5000/7000/8000 Series)**
###  23.1. <a name='EnablePrecisionBoostOverdrivePBO'></a>**Enable Precision Boost Overdrive (PBO)**
1. **Enter BIOS** (Press **Del** or **F2** during boot).  
2. Navigate to **Advanced > AMD Overclocking > Precision Boost Overdrive**.  
   - Set **PBO** to *Advanced*  
   - Set **PBO Scalar** to *10X*  
   - Set **Max CPU Boost Override** to **+200 MHz**  
   - Set **Platform Thermal Limit** to **90-95°C** (lower if you want quieter cooling).  
3. **Curve Optimizer (Undervolting)**
   - Navigate to **Curve Optimizer**  
   - Set **All Cores** to **Negative 15 to 30** (test stability with Cinebench).  
   - If unstable, reduce to **Negative 15 or 10**.  
4. **Enable Eco Mode (Optional)**
   - If temperatures are too high, set **PPT/TDC/EDC** to **100W/80A/120A** for a balance of performance and efficiency.

###  23.2. <a name='EnableEXPOForDDR5RAM'></a>**Enable EXPO (For DDR5 RAM)**
- **Enable EXPO/XMP** (DOCP for ASUS, EXPO for AMD).  
- Test memory stability with **TM5 (Anta777 Extreme preset)** or **MemTest86**.  
- If crashes occur, increase **VSOC Voltage to 1.2V** or reduce EXPO frequency.  

---

# **For Intel (12th, 13th, 14th Gen)**
##  24. <a name='EnableXMPRAMOverclocking'></a>**Enable XMP (RAM Overclocking)**
1. Go to **BIOS > AI Tweaker** (or Overclocking settings).  
2. Enable **XMP Profile 1** (or 2 if unstable).  

##  25. <a name='UndervoltviaIntelXTUBIOS'></a>**Undervolt via Intel XTU / BIOS**
1. **Intel Adaptive Undervolt (For 13th/14th Gen)**  
   - **Go to BIOS > CPU Core Voltage** → Set **Offset Mode** to **Adaptive**.  
   - Start with **-0.05V**, test stability, then push to **-0.1V to -0.15V**.  

2. **Disable E-Cores (For Pure Gaming)**
   - If CPU bottlenecking occurs, disable **Efficiency Cores (E-Cores)** in **BIOS > CPU Configuration**.  

##  26. <a name='PowerLimitsPL1PL2'></a>**Power Limits (PL1/PL2)**
- Set **PL1/PL2** to **253W** (or limit to **150W** for cooler operation).  
- Disable **Intel TVB (Thermal Velocity Boost)** if temps exceed **90°C**.  

---

# **2. GPU Optimization (NVIDIA RTX 3000/4000 Series)**
##  27. <a name='EnableResizableBARReBAR-1'></a>**Enable Resizable BAR (ReBAR)**
1. **Enable Above 4G Decoding** (BIOS > PCIe Settings).  
2. Enable **Resizable BAR** (ReBAR).  
3. Ensure ReBAR is active via **NVIDIA Control Panel > System Information**.  

##  28. <a name='UndervoltGPUforCoolerMoreStablePerformance'></a>**Undervolt GPU for Cooler & More Stable Performance**
Using **MSI Afterburner**:  
1. Open **MSI Afterburner > Curve Editor (Ctrl+F)**.  
2. Find your max stable frequency (e.g., 2800 MHz @ 950mV).  
3. Flatten the curve above your stable voltage to **reduce power draw & temperatures**.  
4. Save & test in **Heaven Benchmark** or **3DMark Timespy**.  

---

# **3. Storage & PCIe Optimization**
##  29. <a name='EnablePCIeGen45'></a>**Enable PCIe Gen4/5**
1. In **BIOS > Advanced > PCIe Settings**, ensure:  
   - **PCIe Link Speed** = *Gen4 or Gen5 (if supported)*.  
   - **NVMe SSD Mode** = *High-Performance Mode* (if available).  

##  30. <a name='EnableWriteCachingforNVMeSSDs'></a>**Enable Write Caching for NVMe SSDs**
1. **Device Manager > Disk Drives > NVMe SSD > Policies**  
2. Enable **"Enable write caching on this device"**  

---

# **4. Cooling & Fan Curves**
###  30.1. <a name='CustomFanCurvesForCPUGPU'></a>**Custom Fan Curves (For CPU & GPU)**
- **Set aggressive fan curves** in **BIOS > Q-Fan (ASUS) / Smart Fan (Gigabyte)**.  
- Adjust **GPU Fan Curve** via **MSI Afterburner** to keep temps below **70°C** for optimal performance.  

---

# **5. Low-Latency BIOS Settings (For Flight Sim VR)**
- **C-States** → *Disabled*  
- **Global C-States** → *Disabled* (AMD only)  
- **Hyperthreading (Intel) / SMT (AMD)** → *Enabled*  
- **Spread Spectrum** → *Disabled* (for better stability)  
- **HPET (High Precision Event Timer)** → *Disabled* in BIOS + `bcdedit /deletevalue useplatformclock`  

---

# **Final Steps: Test & Validate**
1. **Check Performance Gains**  
   - Use **CapFrameX** to log FPS & frametime stability in **X-Plane 12 / MSFS 2024**.  
   - Compare before & after optimizations.  

2. **Stability Testing**  
   - Run **Cinebench R23 (30 min loop)** for CPU stability.  
   - Use **Heaven Benchmark (Loop 20 min)** for GPU stability.  

---

# **8. Monitor & Validate Performance**
##  31. <a name='MonitorGPUUsageTemps'></a>**Monitor GPU Usage & Temps**
- Use **CapFrameX** or **Radeon Metrics Overlay** (Ctrl+Shift+O).  

##  32. <a name='TestforStutter-FreeVR'></a>**Test for Stutter-Free VR**
- Run **3DMark VRMark** to test frame consistency.  

# Final Words
Congratulations!
✅ **Higher FPS & lower frametimes**  
✅ **Cooler temperatures & lower power draw**  
✅ **Smoother VR performance with reduced stutters**  

