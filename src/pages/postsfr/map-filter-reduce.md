---
setup: |
  import Layout from '../../layouts/BlogPost.astro'
title: Map-Filter-Reduce
description: Méthodes de tableaux Javascript
publishDate: 17 Mai 2022
heroImage: /assets/map.jpg
---

Salut les gens, dans le post d'aujourd'hui, je vais parler de certaines méthodes de tableaux en javascript. Alors sans plus tarder, commençons.

🤔Méthodes de tableau ?🤔
Au cas où vous ne le sauriez pas, les tableaux en javascript sont des variables uniques utilisées pour stocker différents éléments. Vous pouvez le considérer comme une maison dans laquelle nous avons des chambres et chaque chambre est utilisée par une seule personne ou une famille. Les tableaux sont des objets, ils ont des attributs et des méthodes. Aujourd'hui, nous verrons trois des méthodes de tableau les plus puissantes en Javascript : **Map**, **Filter** et **Reduce**

# Map
La méthode map() permet de créer un nouveau tableau à partir d'un tableau existant en appliquant une fonction à chacun des éléments du tableau initial.
Voici un exemple:

```js
const nombres = [1, 2, 3]
const doubles = nombres.map( nombre => nombre * 2 )
console.log(doubles) // [2, 4, 6]
```
Que s'est-il passé là-bas? Eh bien, nous avons appelé la méthode map sur le tableau **nombres** et ce que nous avons fait est essentiellement de multiplier chaque **nombre** du tableau par 2 et de stocker le résultat dans le tableau **doublé**. J'ai utilisé une "**Fonction fléchée**" qui est une fonctionnalité très intéressante en Javascript et j'écrirai à ce sujet à l'avenir. Pour plus d'explications, je vais reproduire ce que nous avons fait sans la fonction fléchée.

```js
const nombres = [1, 2, 3]
const doubles = nombres.map(
    function(nombre){
        return nombre * 2
    }
)
console.log(doubles) // [2, 4, 6]
```
Nous passons à la méthode map un **callback** qui prend comme arguments chaque élément du tableau et renvoie le résultat d'une opération spécifique effectuée dans cet élément. Si vous ne comprenez pas le concept des rappels, ne vous inquiétez pas, j'en parlerai également dans les prochains articles.

# Filter
La méthode filter() est assez intuitive car son nom explique assez bien ce qu'elle fait. Fondamentalement, c'est un filtre, il applique une instruction conditionnelle à chaque élément du tableau initial et ne renvoie que les éléments qui vérifient cette condition. Voici un exemple pour vous
```js
const nombres = [-1, -1, 1, 2]
//sans fonction fléchée
const positifs = nombres.filter(
    function(nombre){
        return nombre > 0 //ne retournera que les nombres positifs
    }
)
//avec fonction fléchée 
const positifs = nombres.filter(
    nombre => nombre > 0
)
console.log(positifs)
//console: [1, 2]
```

# Reduce
La méthode reduce() contrairement à ses amis, renvoie une seule valeur. Il exécute un **réducteur** sur chaque élément du tableau et affiche le résultat final. Confus? laissez-moi vous expliquer avec du code:

```js
const nombres = [1, 2, 3]
//avec fonction fléchée 
const somme = nombres.reduce(
    function (result, number) {
        return result + item
    },
    0
)
//sans fonction fléchée 
const nombres = [1, 2, 3]
const somme = nombres.reduce(
    (result, number)=> result + number,
    0
)
console.log(somme) // 6
```
Vous êtes probablement plus confus qu'avant, mais je vous tiens. Que se passe-t-il là-bas? Nous additionnons les nombres dans les tableaux : 1+2+3 = 6. Mais qu'en est-il ? eh bien nous passons à la méthode reduce un **callback** et une valeur initiale.
- La valeur initiale

C'est la valeur initiale de l'**accumulateur** et est facultative

- Le **callback**

Il prend deux paramètres : l'**accumulateur** qui est le résultat final de chaque opération effectuée sur chaque élément du tableau. Ici on veut additionner tous les nombres , à la première itération l'accumulateur sera égal à 0 car on l'a initialisé comme ça

```js
const somme = nombres.reduce(
    function (result, number) {
        return result + item
    },
    0 //ici nous disons que l'accumulateur (result dans ce cas) sera initialisé à 0
)
```
La fonction reduce ajoutera ensuite chaque nombre du tableau au nombre suivant :
```c
Première iteration:
0 + 1 //0 comme valeur initiale de l'accumulateur et 1 comme premier élément du tableau
Seconde iteration:
(0 + 1) + 2 //Le résultat de l'opération précédente devient l'accumulateur et est ajouté au nombre suivant dans le tableau
Troisième iteration:
((0 + 1) + 2) + 3 
```
La valeur initiale de l'accumulateur est 0 par défaut, nous n'avons donc pas besoin de le spécifier au cas où nous n'aurions pas de valeur initiale avec laquelle travailler
```js
const nombres = [1, 2, 3]
const somme = nombres.reduce(
    (result, number)=> result + number,
    10 //ici nous mettons l'accumulateur à 10, donc la première itération sera 10 + 1
)
console.log(somme) // 16
```

C'est ça. Je créerai très bientôt un répertoire présentant des exemples plus avancés sur mon github, [Abonnez vous](/subscribe) pour être mis à jour lors de sa sortie. J'espère que vous avez appris quelque chose de nouveau ou même si vous saviez déjà ce que j'ai couvert dans ce post, j'espère que je ne vous ai pas fait perdre votre temps 🙂 et je vous verrai dans le prochain.

[Abonnez-vous](/subscribe) à ma newsletter et lisez plus d'articles ci-dessous :
- [Pyscript🥧📜](/postsfr/pyscript-une-vue-d-ensemble)
- [Nodejs pour les patates#1](/postsfr/nodejs-for-potatoes)