---
setup: |
  import Layout from '../../layouts/BlogPost.astro'
title: React n'est pas un framework
description: La différence entre une Librairie et un Framework
publishDate: 23 Mai 2022
---
Salut, bienvenue ou bienvenue sur Pigeonscript. Je suis heureux de vous voir ici. Dans le post d'aujourd'hui, je veux juste parler de la différence entre un **framework** et une **bibliothèque**. Je suis presque sûr qu'une fois dans votre vie, vous avez appelé un framework une bibliothèque, ou une bibliothèque un framework, il y a une grande différence entre ces deux mots. Cet article sera court mais sera toujours utile si vous ne connaissez pas vraiment la différence. Alors, commençons.

# Qu'est-ce qu'une bibliothèque
"En informatique, une bibliothèque est une collection de ressources non volatiles utilisées par des programmes informatiques, souvent pour le développement de logiciels". C'est la définition de wikipedia. C'est une bonne mais laissez-moi vous expliquer davantage. Disons que vous écrivez un programme et que vous vous retrouvez à utiliser le même morceau de code à plusieurs endroits dans le code. Vous décidez de créer un autre fichier, d'y exporter ce code en tant que fonction, puis d'importer ce fichier chaque fois que vous avez besoin d'utiliser cette fonction. Toutes nos félicitations! Vous venez de créer une bibliothèque. La bibliothèque est le fichier, et les "livres" sont les fonctions, les classes... tout ce que vous utilisez régulièrement mais que vous ne voulez pas ou n'avez pas vraiment besoin de réécrire vous-même car un autre développeur l'a déjà fait. La bibliothèque la plus populaire en javascript est [jQuery](https://jquery.com) et est utilisée pour la manipulation DOM, le développement d'applications Ajax, la création d'effets, d'événements et d'animations... Une autre bibliothèque Javascript populaire est [React.js](https://reactjs.org). Oui, React est une bibliothèque, pas un framework. Pourquoi? eh bien voyons ce qu'est un framework et ensuite trouvons la différence.

# Qu'est-ce qu'un framework
La définition de wikipedia est la suivante : "Un framework est un terme générique faisant généralement référence à une **structure** de support essentielle sur laquelle d'autres éléments sont construits". Cela n'a presque rien à voir avec la programmation, mais je voulais souligner le terme **structure**. Un framework en programmation est un outil qui fournit des composants prêts à l'emploi ou des solutions personnalisées afin d'accélérer le développement. Lorsque vous utilisez une bibliothèque, votre code appelle le morceau de code contenu dans la bibliothèque, mais lorsque vous utilisez un framework, c'est le framework qui appelle votre code. Ce principe est appelé [Inversion du contrôle](https://en.wikipedia.org/wiki/Inversion_of_control), et est défini comme un principe qui transfère le contrôle d'objets ou de parties d'un programme à un conteneur (le conteneur étant le framework).

# Où est la différence
La différence est dans le contrôle. Une bibliothèque ne contrôle pas votre code, vous l'utilisez si et quand vous en avez besoin. Un framework, en revanche, contrôle votre code et vous oblige à suivre certains modèles. Lorsque vous utilisez React par exemple, vous avez le contrôle. Tout ce que fait React est de rendre le comportement que vous décrivez dans votre code js ou [jsx](https://reactjs.org/docs/introducing-jsx.html), rien d'autre. Lorsque vous utilisez un framework comme Angular, vous devez suivre son architecture qui repose sur certains [concepts fondamentaux](https://angular.io/guide/architecture).

# Qu'est-ce qui est mieux?
Il n'y a pas de réponse à cette question. Les frameworks et les bibliothèques ont le même objectif : nous faciliter la vie en tant que développeurs. Le choix dépend de votre préférence, il n'y a rien que vous puissiez construire avec React par exemple et pas avec Angular, ce sont deux technologies puissantes.

Oh, c'est déjà la fin. J'espère que je ne vous ai pas fait perdre de temps et que cet article répondra à certaines sinon à toutes vos questions sur le sujet. Merci d'avoir lu et je vous verrai dans le prochain.

[Abonnez-vous](/subscribe) à ma newsletter et lisez plus d'articles ci-dessous :
- [Map Filter et Reduce](/postsfr/map-filter-reduce)
- [Pyscript🥧📜](/postsfr/pyscript-une-vue-d-ensemble)
- [Node Fetch est là](/postsfr/node-fetch-is-here)
- [Nodejs pour les patates#1](/postsfr/nodejs-for-potatoes)