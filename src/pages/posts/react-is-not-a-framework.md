---
setup: |
  import Layout from '../../layouts/BlogPost.astro'
title: React is not a framework
description: The difference between a library and a framework
publishDate: 23 May 2022
---
*This article is available is french [here](/postsfr/react-n-est-pas-un-framework)*

Hi, welcome back or welcome to Pigeonscript. I'm happy to see you here. In today's post, I just want to talk about the difference between a **framework** and a **library**. I'm pretty sure, once in your life you called a framework a library, or a library a framework, there's a big difference between these two words. This post will be a short one but will still be helpful if you don't really know the difference . So let's get started.

# What is a Library
"In computer science a library is a collection of non-volatile resources used by computer programs, often for software development". That's the definition from wikipedia. It's a good one but let me explain further. Let's say you are writing a program and you find yourself using the same bit of code in many places in the code. You decide to create another file, export that code there as a function and then import that file everytime you need to use that function. Congratulations! You just created a library. The library is the file, and the "books" are the functions, classes...everything you use on a regular basis but don't want or really need to write it yourself because another developer already did it. The most popular library in javascript is [jQuery](https://jquery.com) and is used for DOM manipulation, JSON parsing, Ajax applications development, creating effects, events and animations... Another popular Javascript library is [React.js](https://reactjs.org). Yes, React is a library, not a framework. Why? you may ask, well let's see what a framework is and then find the difference.

# What is a Framework
The wikipedia definition is this: "A framework is a generic term commonly referring to an essential supporting **structure** which other things are built on top of". This a little to nothing related to programming, but I wanted to highlight the term **structure**. A framework in programming is a tool that provides ready-made components or solutions that are customized in order to speed up development. When you are using a library, your code calls the piece of code contained in the libray, but when you are using a framework, it's the framework who calls your code.  This principle is refeered to as the [Inversion of Control](https://en.wikipedia.org/wiki/Inversion_of_control), and is defined as a principle which transfers the control of objects or portions of a program to a container(the container being the framework).

# Where is the difference
The difference is in the Control. A library does not control your code, you use it if and when you need it. A framework in the other hand, controls your code and oblige you to follow certain patterns. When using React for example, you are in control. Everything React does is render the behaviour you describe in your js or [jsx](https://reactjs.org/docs/introducing-jsx.html) code, nothing else. When using a framework as Angular, you have to follow it's architecture which relies on certain [fundamental concepts](https://angular.io/guide/architecture).

# What is better?
There is no answer to this question. Both frameworks and libraries have the same goal: make our lives as developers easier. The choice depends on your preference, there is nothing you can build with React for example and not with Angular, they are both powerful technologies. 

That's it. I hope I didn't waste your time and that this post will answer some if not all of your questions about the subject. Thanks for reading and I will see you in the next one. [Subscribe](/subscribe) to my newsletter if you haven't already and read more posts down below :)

Latest posts:
- [Map-Filter-Reduce](/posts/map-filter-reduce)
- [PyScript](/posts/pyscript-a-quick-overview)
- [Nodejs fetch is here](/posts/node-fetch-is-here)
- [Nodejs for potatoes](/posts/nodejs-for-potatoes)
- [Welcome to PigeonScript](/posts/welcome-to-pigeonscript)