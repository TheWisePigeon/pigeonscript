---
setup: |
  import Layout from '../../layouts/BlogPost.astro'
title: Node fetch api est enfin là
publishDate: 22 Apr 2022
description: A quick overview of the fetch api
heroImage: /assets/nodefetch.jpg
---

Je sais que je suis en retard à la fête, j'étais tellement occupé que je n'avais même pas réalisé que NodeJs 18 était encore sorti. Je faisais partie de ceux qui attendaient depuis longtemps que l'API de récupération soit implémentée dans node, et j'étais tellement excité quand il est finalement sorti que j'ai dû écrire ce post. C'est un aperçu rapide de l'API fetch, et j'espère que vous le trouverez utile.

## Qu'est-ce que fetch?
L'API fetch fournit une interface javascript pour accéder et manipuler des parties du pipeline HTTP telles que les requêtes et les réponses. Il est également utilisé pour effectuer des requêtes asynchrones à un serveur Web et renvoyer la réponse.
De nombreux packages de nœuds peuvent être utilisés pour effectuer des requêtes http, telles que axios, superagent, request, etc. Désormais, avec Nodejs 18, vous n'avez plus besoin d'utiliser l'un de ces packages, vous pouvez utiliser directement l'API fetch. Voyons donc comment cela fonctionne et voyons s'il est meilleur que les autres packages.

## Utilisation

Écrivons du code. J'enverrai une demande à jsonplaceholder.typicode.com, et j'utiliserai l'API fetch pour faire la demande.


```javascript
const res = await fetch('https://jsonplaceholder.typicode.com/todos/1', );
if (res.ok) {
  data const = wait res.json();
  console.log(data);
}
```
Je reçois cette réponse est la console 
```javascript
{userId : 1, id : 1, title : "delectus aut autem", completed: false}
```
Super, essayons maintenant une requête POST

```javascript
const res = attendre récupérer('https://jsonplaceholder.typicode.com/posts', {
    method : 'POST',
    body : JSON.stringify({
      title: 'foo',
      body : 'barre',
      userID : 1,
    }),
    headers : {
      'Content-type' : 'application/json ; charset=UTF-8',
    },
  });
  si (res.ok) {
    const bruh = wait res.json();
    console.log(bruh);
  }
```
Nous obtenons cette réponse dans la console
```javascript
{title : "foo", body : "bar", userId : 1, id : 101}
```
## Conclusions
De toute évidence, par rapport à la façon dont les requêtes sont effectuées à l'aide d'autres packages, l'API fetch est beaucoup plus simple et facile à utiliser. Il est toujours en mode expérimental et les développeurs ont déclaré qu'il fournirait un ensemble de fonctionnalités plus puissantes et flexibles à l'avenir. Voilà, j'espère que vous avez trouvé cet article utile et je vous verrai dans le prochain.

[Abonnez-vous](/subscribe) à ma newsletter et lisez plus d'articles ci-dessous :
- [Pyscript🥧📜](/postsfr/pyscript-une-vue-d-ensemble)
- [Nodejs pour les patates#1](/postsfr/nodejs-for-potatoes)