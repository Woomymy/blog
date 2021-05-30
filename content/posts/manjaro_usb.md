---
title: "[EN] Installing manjaro on a USB stick"
date: 2021-05-30T15:44:53+02:00
draft: false
---

This guide will help you to install manjaro on a removable medium without requiring to use one USB stick for LiveCD and one destination

## How it works?

To erase and install Manjaro GNU/Linux on the USB stick, we will need to be able to **unplug it** after boot, to be sure the system doesn't require it. The best way to do this is copying the system in RAM. **It may need a consequent amount of ram, depending on the edition** 

## First steps

Firstly, you need an USB stick (thanks captain obvious) with a large capacity **and good Read/Write performances**, burn Manjaro iso with a tool like `dd` (or `rufus` on Windows).

## Booting the ISO

Once the LiveUSB is ready, you need to boot the ISO, using your BIOS / UEFI firmware boot menu. When you get the GRUB menu, select options like Timezone, locale. Select boot with OpenSource / Proprietary drivers and type "e" to modify the command line passed to Linux. On the first like (setparams), you  just need to add `copytoram` parameter before the apostrophe and after `systemd.show_status=1`

![Grub + CopyToRam](/manjaro_grub_copytoram.jpg)

## Done!

Now you just need to install manjaro using the installer (or manjaro architect), and your USB stick will be ready. I recommand you to use LUKS to encrypt the USB, just in case.

