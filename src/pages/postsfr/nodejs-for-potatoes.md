---
setup: |
  import Layout from '../../layouts/BlogPost.astro'
title: Nodejs pour les noobs#1
description: Un guide pour commencer avec Nodejs
publishDate: 22 Apr 2022
heroImage: /assets/node.jpg
---
Si vous avez trouvé cet article parce que vous avez décidé d'en savoir plus sur Nodejs, vous avez fait un bon choix. Cet article est le premier d'une série sur Nodejs, et dans celui-ci, nous ne parlerons que de **ce qu'est Nodejs**.

## Alors, qu'est-ce que Nodejs ?
Nodejs est un **environnement d'exécution JavaScript** construit sur le **moteur JavaScript** V8 de Chrome. Mon cœur me fait mal à chaque fois que j'entends des gens dire que Nodejs est un langage, un framework ou une bibliothèque 💀 .. ce n'est rien de tout cela. C'est juste un runtime javascript. Maintenant, vous vous demandez peut-être ce que tout cela signifie


Et bien, en termes simples, un runtime est un sous-système qui existe à la fois dans l'ordinateur où un programme est créé, ainsi que dans l'ordinateur où le programme est destiné à être exécuté. Et le V8 de Chrome est la "chose" intégrée à Chrome de Google et à de nombreux autres navigateurs, qui convertit le code javascript en code machine. Javascript est un langage côté client, cela signifie qu'il est interprété et exécuté uniquement par le navigateur alors que d'autres langages tels que Python et Ruby sont des langages côté serveur et exécutés par le serveur. Nodejs exécute le moteur v8, **en dehors du navigateur**, permettant à votre code javascript de s'exécuter à la fois côté client et côté serveur.

C'est très bien car cela signifie que vous n'avez pas besoin d'apprendre un langage côté serveur si vous connaissez déjà javascript, vous pouvez utiliser les nouvelles normes ECMAScript sans vous soucier du navigateur de vos utilisateurs, vous décidez quelle version ECMAScript vous souhaitez utiliser en fonction de la version Nodejs. De plus, Nodejs possède de nombreuses bibliothèques que vous pouvez utiliser pour créer à peu près tout ce dont vous aurez besoin en tant que développeur Web. Il existe plus de 1 000 000 de packages open source que vous pouvez utiliser librement et evcen si vous ne trouvez pas dont vous avez besoin, vous pouvez toujours créer le vôtre.

## De combien de connaissances javascript ai-je besoin pour apprendre Nodejs ?
Eh bien pas **tant que ça**, mais vous aurez besoin de connaître les principaux concepts de javascript qui sont :
- Variables
- Les types
- Expressions
- Les fonctions
- Tableaux
- Objets
- Boucles
- Conditionnels
- Des classes
- Champs d'application
- Littéraux de modèle
- ES6

Si vous êtes un débutant absolu, cela peut vous sembler beaucoup, mais Javascript est un langage très simple à apprendre, et je publierai des tutoriels sur ses bases chaque semaine, alors restez dans les parages si vous voulez en savoir plus sur Javascript et Nodejs. Cela étant dit, résumons rapidement ce que nous avons dit auparavant :

- Javascript : langage côté client, interprété et exécuté par le moteur v8 dans les navigateurs
- Moteur V8 : Convertir le code javascript en code machine
- Nodejs : exécution Javascript, exécute le moteur v8 en dehors du navigateur, permettant au code javascript de s'exécuter à la fois côté client et côté serveur

## Derniers mots
J'espère que vous avez appris quelque chose de cet article, si vous l'avez fait, [abonnez-vous](/subscribe) à ma newsletter, je ne vous spammerai pas🙂

À la semaine prochaine! Profitez de cette photo d'une pomme de terre 🥔 et lisez plus d'articles ci-dessous
![](../../../assets/potatomeme.jpg)

[Abonnez-vous](/subscribe) à ma newsletter et lisez plus d'articles ci-dessous :
- [Pyscript🥧📜](/postsfr/pyscript-une-vue-d-ensemble)
- [Node Fetch est là](/postsfr/node-fetch-is-here)