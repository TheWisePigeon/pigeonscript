---
setup: |
  import Layout from '../../layouts/BlogPost.astro'
title: PyScript 🥧📜
description: Le pouvoir de Python maintenant dans votre navigateur
publishDate: 03 Mai 2022
heroImage: /assets/piescript.jpg
---

Oui, j'écris sur python, et oui c'est tout à fait normal, ce blog parle de codage et pas seulement de JavaScript (mon langage préféré). Cela étant dit, passons directement au sujet d'aujourd'hui : **PyScript**.
# Qu'est-ce que PySCript
PyScript est un **framework** javascript qui vous permet de créer des applications Python dans le navigateur en utilisant un mélange de Python et de HTML standard. Son but ultime est de permettre à un public beaucoup plus large de bénéficier de la puissance de Python et de ses diverses bibliothèques incroyables. Il a été annoncé pour la première fois à PyCon US 2022 par Peter Wang, PDG d'[Anaconda](https://www.anaconda.com).
En tant qu'utilisateurs finaux, nous n'avons pas vraiment besoin de comprendre ce qui se passe sous le capot dans les framworks, mais il est parfois bon de le savoir, notamment pour des raisons de sécurité.
# Comment ça marche

![](../../../assets/piestack.jpg)

Cette image explique la magie noire qui se cache derrière. PyScript est construit sur [Pyodide](https://pyodide.org/en/stable/) qui est une distribution python qui vous permet d'installer et d'exécuter des packages Python dans le navigateur à l'aide de [micropip](https://pyodide.org/fr/stable/). Pyodide est basé sur Nodejs et WebAssembly qui est la technologie qui convertit votre code en format bynary que les navigateurs peuvent exécuter. Nous pouvons essentiellement écrire du code dans n'importe quel langage, le compiler au format .wasm, puis l'exécuter dans un navigateur Web, super non ?

# Un Hello world
Dans ce tutoriel, je vais simplement utiliser le CDN mais vous pouvez également télécharger pyscript tout entier.

Ajoutez ces lignes à votre page
```html
<html>
   <head>
     <link rel="stylesheet" href="https://pyscript.net/alpha/pyscript.css" />
     <script defer src="https://pyscript.net/alpha/pyscript.js"></script>
   </head>
</html>
```
Vous pouvez maintenant utiliser la balise py-script dans votre page

```html
   <body>
     <py-script>
       print('Bruh')
     </py-script>
   </body>
```
Et vous pouvez voir votre mot préféré dans votre navigateur

![](../../../assets/pybruh.jpg)

Ceci étant un aperçu rapide, je vais conclure ici, mais je ferai un tutoriel complet à ce sujet sous forme de vidéo ou de publication car il y a encore tellement de choses à découvrir.

# Conclusion
C'est une excellente nouvelle pour tout le monde, même pour les développeurs Javascript, non, pyscript ne remplacera pas Javascript, pourquoi ? Python n'a pas de moyen simple de créer des interfaces utilisateur élégantes, d'empaqueter et de déployer des applications, Javascript le fait mais n'est pas aussi facile à apprendre que python. Les développeurs de Pyscript espèrent que les gens utiliseront les outils puissants de python avec ceux de Javascript pour créer de belles choses, alors ne vous inquiétez pas, Javascript est là et reste.
Voilà, j'espère que vous apprendrez quelque chose de nouveau dans ce post, abonnez-vous à ma [newsletter](/subscribe) et je vous verrai dans le prochain. Restez en sécurité et écrivez du code

[Abonnez-vous](/subscribe) à ma newsletter et lisez plus d'articles ci-dessous :
- [React n'est pas un framework](/postsfr/react-n-est-pas-un-framework)
- [Map Filter et Reduce](/postsfr/map-filter-reduce)
- [Node Fetch est là](/postsfr/node-fetch-is-here)
- [Nodejs pour les patates#1](/postsfr/nodejs-for-potatoes)