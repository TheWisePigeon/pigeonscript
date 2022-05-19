---
setup: |
  import Layout from '../../layouts/BlogPost.astro'
title: Map-Filter-Reduce
description: Méthodes de tableaux Javascript
publishDate: 17 Mai 2022
heroImage: /assets/map.jpg
---
This post is available in french [here](/postsfr/map-filter-reduce)


Hi folks, in today's post I will be talking about some Javascript Array methods. So without further a do, let's get started.

🤔Array methods?🤔
In case you didn't know, Arrays in javascript are single variables used to store different elements. You can think of it as a house in which we have rooms and each room is used by a single person or family. Arrays are objects, they have attributes and methods. Today we will see three of the most powerful array methods in Javascript: **Map**, **Filter** and **Reduce**

# Map
The map() method is used for creating a new array from an existing one by applying a function to each one of the elements of the initial array. 
Here is an example:
```js
const numbers = [1, 2, 3]
const doubled = numbers.map( number => number * 2 )
console.log(doubled) // [2, 4, 6]
```
What happened there? Well we called the map method on the **numbers** array and what we did is basically multiply every **number** in the array by 2 and store the result in the **doubled** array. I used **Arrow functions** which is a very cool feature in Javascript and I will be writing about it in the future. For further explanation, I will reproduce what we did without the arrow function.
```js
const numbers = [1, 2, 3]
const doubled = numbers.map(
    function(number){
        return number * 2
    }
)
console.log(doubled) // [2, 4, 6]
```
We pass to the map method a **callback** function which take as arguments, each element in the array and return the result of a specific operation done in that element. If you don't understand the concept of callbacks don't worry, I'll be covering that too in the coming posts.

# Filter
The filter method is pretty intuitive as its name explain pretty well what it does. Basically it's a filter, it applies a conditional statement against each element of the initial array and only return the "valid" elements. Here is an example for you
```js
const numbers = [-1, -1, 1, 2]
//without arrow function
const positives = numbers.filter(
    function(number){
        return number > 0 //will only return the element if this is true
    }
)
//with arrow function
const positives = numbers.filter(
    number => number > 0
)
console.log(positives)
//console: [1, 2]
```

# Reduce
The reduce() method unlike his friends, returns a single value. It runs a **reducer** on each element of the array and output the final result. Confused? let me explain with code
```js
const numbers = [1, 2, 3]
//without arrow function
const sum = numbers.reduce(
    function (result, number) {
        return result + item
    },
    0
)
//with arrow function
const numbers = [1, 2, 3]
const sum = numbers.reduce(
    (result, number)=> result + number,
    0
)
console.log(sum) // 6
```
You are probably more confused than before, but I got you. What is happening there? We are adding the numbers in the arrays up: 1+2+3 = 6. But how is that heppening? well we pass to the reduce method a callback and an initial value. 
- The initial value

It is the initial value of the **accumulator** and is optional

- The callback

It takes two parameters: the **accumulator** which is the final result of each operation done on each element in the array. Here we want to add all the numbers , at the first iteration the accumulator will be equal to 0 because we initialized it as so
```js
const sum = numbers.reduce(
    function (result, number) {
        return result + item
    },
    0 //here we are saying that the accumulator(result in this case) will be initialized to 0
)
```
The reduce function will then proceed to add each number in the array to the following number as so:
```c
First iteration:
0 + 1 //0 as the initial value of the accumulator and 1 as the first element in the array
Second iteration:
(0 + 1) + 2 //The result of the previous operation becomes the accumulator and is added to the next number in the array
Third iteration:
((0 + 1) + 2) + 3 
```
The accumulator's initial value is 0 by default so we don't need to specify it in case we don't have an initial value to work with
```js
const numbers = [1, 2, 3]
const sum = numbers.reduce(
    (result, number)=> result + number,
    10 //here we set the accumulator to 10, hence the first iteration will be 10 + 1
)
console.log(sum) // 16
```

That's it. I will create a repo showcasing more advanced examples on my github very soon, [Subscribe](/subscribe) to get updated when it releases. I hope you learnt something new or even if you already knew about what I covered in this post, I hope I didn't waste your time 🙂 and I will see you in the next one.

Latest posts:
- [PyScript](/posts/pyscript-a-quick-overview)
- [Nodejs fetch is here](/posts/node-fetch-is-here)
- [Nodejs for potatoes](/posts/nodejs-for-potatoes)
- [Welcome to PigeonScript](/posts/welcome-to-pigeonscript)