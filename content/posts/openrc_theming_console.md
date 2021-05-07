---
title: "[EN] Theming your TTY (with OpenRC)"
date: 2021-05-05T11:23:03+02:00
draft: false
---

## Changing the console font

The console font can be changed in `/etc/conf.d/consolefont`. The fonts are located in `/usr/share/consolefonts` (in PSF format).

After changing the settings, you can add the service in the "sysinit" runlever (`rc-update add consolefont sysinit`)

## Setting up a colorscheme

You can change the TTY(s) colors using

```bash
echo -en \\e]P{TERMINAL_COLOR}{COLOR_HEX}
```

An exemple with "nord" color scheme [from here](https://github.com/lewisacidic/nord-tty/blob/master/nord-tty)

```bash
echo -en \\e]P02E3440
echo -en \\e]P1BF616A
echo -en \\e]P2A3BE8C
echo -en \\e]P3EBCB8B
echo -en \\e]P481A1C1
echo -en \\e]P5B48EAD
echo -en \\e]P688C0D0
echo -en \\e]P7E5E9F0
echo -en \\e]P84C566A
echo -en \\e]P9BF616A
echo -en \\e]PAA3BE8C
echo -en \\e]PBEBCB8B
echo -en \\e]PCB48EAD
echo -en \\e]PD8FBCBB
echo -en \\e]PEECEFF4
```

and in a OpenRC service:
```bash
#!/sbin/openrc-run

description="Aplies a colorscheme to the TTY"

depend()
{
	need termencoding
	after devfs
	keyword -docker -lxc -openvz -prefix -systemd-nspawn -uml -vserver -xenu
}

start()
{
	einfo "Setting up tty color scheme"
	for i in 1 2 3 4 5 6 7 8 9 10 11 12
	do
		t="/dev/tty${i}"
		echo -en \\e]P02E3440 >> $t
		echo -en \\e]P1BF616A >> $t
		echo -en \\e]P2A3BE8C >> $t
		echo -en \\e]P3EBCB8B >> $t
		echo -en \\e]P481A1C1 >> $t
		echo -en \\e]P5B48EAD >> $t
		echo -en \\e]P688C0D0 >> $t
		echo -en \\e]P7E5E9F0 >> $t
		echo -en \\e]P84C566A >> $t
		echo -en \\e]P9BF616A >> $t
		echo -en \\e]PAA3BE8C >> $t
		echo -en \\e]PBEBCB8B >> $t
		echo -en \\e]PCB48EAD >> $t
		echo -en \\e]PD8FBCBB >> $t
		echo -en \\e]PEECEFF4 >> $t
	done
}
```
Copy this service in `/etc/init.d/tty-colorscheme-nord` and add it to the "sysinit" runlevel (`rc-update add tty-colorscheme-nord sysinit`)

## Taking a screenshot

If you want to "take a screenshot" of your TTY, you can use `fbcat` or `fbgrab`.

