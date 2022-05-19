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