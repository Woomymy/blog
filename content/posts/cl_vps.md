---
title: "[EN] Installing Calculate GNU/Linux on your VPS"
date: 2021-04-23T09:03:44+02:00
draft: false
---

This guide aims to help you to install Calculate GNU/Linux on your VPS. It can be adapted to other distros but you may need some modifications for things like GRUB command lines.

## What you need

- A GNU/Linux distribution installed on your VPS
- A VNC Client like TigerVNC
- VNC acces to your VPS

## Booting Calculate ISO

Firstly, you need to download a Calculate Server Scratch (or a Calculate Directory server) ISO and rename it "css.iso".

### Moving the ISO to correct location

If you have a separated "/boot/", you need to move "css.iso" to "/boot/css.iso". In other cases, just move it "/css.iso".

### Creating a GRUB menuentry

The next thing to do is creating a GRUB menuentry for the ISO. Here's an exemple (save it to /etc/grub.d/40_custom)

```bash
#!/bin/sh
exec tail -n +3 $0
# This file provides an easy way to add custom menu entries.  Simply type the
# menu entries you want to add after this comment.  Be careful not to change
# the 'exec tail' line above.

menuentry 'Calculate GNU/Linux installer' \$menuentry_id_option 'calculate' {
	loopback loop /css.iso
	linux (loop)/boot/vmlinuz rd.live.ram  root=live iso-scan/filename=/css.iso quiet
	initrd (loop)/boot/initrd
}
```

Now update the GRUB menu (`update-grub` or `grub-mkconfig -o /boot/grub/grub.cfg`).

### Connecting with VNC and starting the installer

Now, connect with VNC to your VPS and choose "Calculate GNU/Linux installer". You are now able to use cl-install and install your Calculate system. Make sure you don't need aditionnal network configurations and other things like this. If you wan help to install Calculate, you can check my [Calculate GNU/Linux install guide](https://calculate-install.woomy.ovh/posts/cls/)
