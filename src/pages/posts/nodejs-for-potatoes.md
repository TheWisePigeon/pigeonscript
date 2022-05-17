---
setup: |
  import Layout from '../../layouts/BlogPost.astro'
title: Nodejs for potatoes#1
description: A step to step guide to get started with Nodejs
publishDate: 22 Apr 2022
heroImage: /assets/node.jpg
---
If you found this post because you decided to learn more about Nodejs, you made a good choice. This post is the first of a series about Nodejs, and in this one, we will just be talking about **what is Nodejs**.

## So, what is Nodejs?
Nodejs is a **JavaScript runtime** built on Chrome's V8 **JavaScript engine**. My heart hurts every time I hear people say Nodejs is a language, or a framework, or a library💀 ..it's none of those things. It's just a javascript runtime. Now you might be asking yourself

![](../../../assets/nodejsmeme1.gif)

Well in simple words, a runtime is a sub-system that exists both in the computer where a program is created, as well as in the computer where the program is intended to be run. And Chrome's V8 is the "thing" built in Google's Chrome and many other [browsers](https://en.wikipedia.org/wiki/V8_(JavaScript_engine)#:~:text=V8%20is%20used%20in%20the,Opera%2C%20Vivaldi%20and%20Microsoft%20Edge.), that converts javascript code into machine code. Javascript is a client-side language, it means that it is interpreted and executed only by the browser whereas other languages such as Python and Ruby are server-side languages and executed by the server. Nodejs runs the v8 engine, **outside of the browser** allowing your javascript code to run on both client and server side.

This is great because it means that you don't have to learn a server-side language if you already know javascript, you can use the new ECMAScript standards without worrying about your users browser, you decide which ECMAScript version you want to use according to the Nodejs version. In addition, Nodejs has a lot of libraries that you can use to make pretty much anything you will need to do as a web developer, there are over 1.000.000 open sources packages you can freely use and even if you don't find what you need, you can always create your own.

## How much javascript knowledge do I need to learn Nodejs?
Well not **that much**, but you will need to know the main concepts about javascript which are:
- Variables
- Types
- Expressions
- Functions
- Arrays
- Objects
- Loops
- Conditionals
- Classes
- Scopes
- Template literals
- ES6

If you are an absolute potato it might seems a lot to you, but Javascript is a very simple language to learn, and I will be posting tutorials about it's basics every week, so stick around if you want to learn more Javascript and Nodejs. With that being said, let's quicky summarize what we said before:

- Javascript: client-side language, interpreted and executed by v8 engine in browsers 
- V8 engine: Convert javascript code into machine code
- Nodejs: Javascript runtime, runs v8 engine outside of the browser, allowing javascript code to run on both client and server side

## Final words
I hope you learned something from this post, if you did, [subscribe](/subscribe) to my news letter, I wont spam you🙂

See you next week! Enjoy this photo of a potato 🥔 and read more posts below

![](../../../assets/potatomeme.jpg)

Latest posts:
- [Map-Filter-Reduce](/posts/map-filter-reduce)
- [PyScript](/posts/pyscript-a-quick-overview)
- [Nodejs fetch is here](/posts/node-fetch-is-here)
- [Welcome to PigeonScript](/posts/welcome-to-pigeonscript)