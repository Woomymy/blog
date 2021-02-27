---
title: "Archer T3u sur GNU/Linux"
date: 2021-02-27T15:06:10+01:00
draft: false
---

- [Installation sans DKMS](#installation-sans-dkms)
- [Installation avec DKMS](#installation-avec-dkms)

## Problématiques

Récemment, j'ai eu l'occasion d'aider quelqu'un qui possédait un T3U sur son PC portable, afin d'avoir un meilleur débit que la carte WIFI intégrée. La carte n'était pas reconnue sur **Pop!_Os**. Après quelques recherches, j'ai fini par trouver une solution.

## Installation sans DKMS

La procédure d'installation est assez simple. Quelques lignes de bash suffiront:

```bash
wget https://github.com/RinCat/RTL88x2BU-Linux-Driver/archive/master.zip
unzip master.zip
cd RTL88x2BU-Linux-Driver-master
make -j $(nproc) # On utilise tout les coeurs pour les jobs de make
sudo make install
sudo modprobe 88x2bu
```

ET VOILA! Votre adaptateur devrait maintenant être utilisable et disponible dans GNOME(ou autre DE, à vous de voir)

> N.B: Pour les plus feignants d'entre vous, j'ai créé un script automatisé. [Ici](https://github.com/Woomy4680-exe/Archer-T3U-Linux)

## Installation AVEC DKMS

Tout aussi simple, mais avec DKMS(assurez vous de l'avoir installé)

```bash
git clone "https://github.com/RinCat/RTL88x2BU-Linux-Driver.git" /usr/src/rtl88x2bu-git
sed -i 's/PACKAGE_VERSION="@PKGVER@"/PACKAGE_VERSION="git"/g' /usr/src/rtl88x2bu-git/dkms.conf
dkms add -m rtl88x2bu -v git
dkms autoinstall
```

## Sources

[GitHub du Pilote](https://github.com/RinCat/RTL88x2BU-Linux-Driver), un grand merci a son développeur pour son travail ❤️
