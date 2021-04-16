---
title: "Disable \"sleep\" and \"hibernate\" keys on GNU/Linux"
date: 2021-04-16T10:25:41+02:00
draft: false
---

## Disable keys using (e)logind config

You just need to edit `/etc/systemd/logind.conf` if you use logind or `/etc/elogind/elogind.conf` if you use elogind (present in some systemd-less distros).

Search these lines:

```ini
#HandleSuspendKey=suspend
#HandleHibernateKey=suspend
```

and replace them by

```ini
HandleSuspendKey=no
HandleHibernateKey=no
```

Now restart your computer and all is now OK!
