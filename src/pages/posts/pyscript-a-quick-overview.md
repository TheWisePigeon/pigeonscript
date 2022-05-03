---
setup: |
  import Layout from '../../layouts/BlogPost.astro'
title: PyScript 🥧📜
description: The power of python now in the browser
publishDate: 03 May 2022
heroImage: /assets/piescript.jpg
---
This post is available in French [here](/postsfr/pyscript-une-vue-d-ensemble)

Yes, I am writing about python, and yes it's completely normal, this blog is about coding and not only JavaScript (my favourite language). With that being said, let's jump right into today's subject: **PyScript**. 
# What is PySCript
PyScript is javascript **framework** that allows you to create Python applications in the browser using a mix of Python and standard HTML. It's ultimate purpose is to allow a much wider audience to benefit from the power pf Python and it's various incredibles libraries. It has been first announced at PyCon US 2022 by Peter Wang, [Anaconda's](https://www.anaconda.com) CEO.
As end users we don't really have to understand what is happening under the hood in framworks, but sometimes it's good to know, especially for security reasons.
# How does it work
![](../../../assets/piestack.jpg)

This picture explains the dark magic behind it. PyScript is built on [Pyodide](https://pyodide.org/en/stable/) which is a python distribution which allows you to install and run Python packages in the browser using [micropip](https://pyodide.org/en/stable/). Pyodide is based on Nodejs and WebAssembly which is the technology that convert your code into bynary format that browsers can run. We can basically write code in any language, compile it to .wasm format and then run it in a web browser, great right?

# A basic example
Let's print some bruhs with pyscript. In this tutorial I will just use the CDN but you can also download the whole thing.

Add these lines to your page 
```html
<html>
  <head>
    <link rel="stylesheet" href="https://pyscript.net/alpha/pyscript.css" />
    <script defer src="https://pyscript.net/alpha/pyscript.js"></script>
  </head>
</html>
``` 
You can now use the py-script tag in your page

```html
  <body>
    <py-script>
      print('Bruh')
    </py-script>
  </body>
```
And you can see your favourite word in your browser

![](../../../assets/pybruh.jpg)

This being a quick overview I will wrap thing here, but I will make a full tutorial on this as a video or a post because there are a lot more things to discover.

# Final toughts
This is great news for everyone, even for Javascript developers, no, pyscript will not replace Javascript, why? Python does not have a straight forward way to build elegant UIs, package and deploy applications, Javascript does but is not as easy to learn as python. Pyscript developers hope that people will use python powerfull tools along with Javascript ones to build awesome stuff, so don't worry, Javascript is here to stay.
That's it, I hope you learn something new in this post, subscribe to my [newsletter](/subscribe) and I will see you in the next one. Stay safe and write code

Read more articles:
- [Node fetch is here](/posts/node-fetch-is-here)
- [Nodejs for potatoes#1](/posts/nodejs-for-potatoes) 
