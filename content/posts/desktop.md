---
title: "Desktop"
date: 2021-04-07T13:04:42+02:00
draft: false
---

# Ma configuration de bureau

## PC Portable

Je dispose d'un Acer Aspire A317-51G avec 12Go de ram (dont 4rajoutés), un i7-10510U et une Geforce MX250. Ce PC portable est donc affecté par une maladie nommée "optimus", comprenez ma souffrance. Le PC tourne sous Calculate GNU/Linux depuis maintenant quelque mois.

### Problèmes rencontrés

Le plus gros problème rencontré avec ce portable est le touchpad. Mais heureusement l'ajout de ces quelques options à mon noyau on permit de régler ce soucis: `i8042.noloop i8042.nomux i8042.nopnp i8042.reset`. Sinon le PC supporte bien Linux, pas trop de problèmes de compatibilté, quelques galères avec Optimus mais bon... On s'y fait!

### Noyau

J'utilise un kernel xanmod avec une [configuration personnalisée](https://github.com/Woomy4680-exe/dotfiles-laptop/blob/main/usr/src/linux/.config) spécialement faite pour ce laptop / mon utilisation.

