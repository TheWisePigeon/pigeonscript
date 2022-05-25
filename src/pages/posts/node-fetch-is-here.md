---
setup: |
  import Layout from '../../layouts/BlogPost.astro'
title: Node fetch api is here
publishDate: 22 Apr 2022
description: A quick overview of the fetch api
heroImage: /assets/nodefetch.jpg
---

This post is available in French [here](/postsfr/node-fetch-is-here)

I know I'm late to the party, I was so busy I didn't even realize NodeJs 18 was out yet. I was part of those who were waiting for the fetch api to be implemented in node for a long time, and I was so excited when it finally came out that I had to write this post. It's a quick overview of the fetch api, and I hope you will find it useful. 

## What is fetch?
The fetch api provides a javascript interface for accessing and manipulating parts of the HTTP pipeline such as requests and responses. It is also used to perform asynchronous requests to a web server and return the response.
There are a lot of node packages that can be used to perform http requests, such as axios, superagent, request, and so on. Now with Nodejs 18, you don't need to use any of these packages anymore, you can use the fetch api directly. So let's take a look at how it works and see if it's better than the other packages.

## Usage

Let's write some code. I will be sending a request to jsonplaceholder.typicode.com, and I will be using the fetch api to make the request.


```javascript
const res = await fetch('https://jsonplaceholder.typicode.com/todos/1', );
if (res.ok) {
  const data = await res.json();
  console.log(data);
}
```
I get this response is tne console
```javascript
{userId: 1, id: 1, title: "delectus aut autem", completed: false}
userId: 1
id: 1
title: "delectus aut autem"
completed: false
```
Great, now let's try a POST request

```javascript
const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  if (res.ok) {
    const bruh = await res.json();
    console.log(bruh);
  }
```
We get this response in the console
```javascript
{title: "foo", body: "bar", userId: 1, id: 101}
title: "foo"
body: "bar"
userId: 1
id: 101
```

## Final thoughts
Obviously when compared to how requests are made using other packages, the fetch api is much more simple and easy to use. It's still in experimental mode and the developers said it will provide a more powerful, flexible feature set in the future. That's it, I hope you found this post useful and I will see you in the next one.

[Subscribe](/subscribe) to my newsletter and read more posts below:
Latest posts:
- [React is not a framework](/posts/react-is-not-a-framework)
- [Map-Filter-Reduce](/posts/map-filter-reduce)
- [PyScript](/posts/pyscript-a-quick-overview)
- [Nodejs for potatoes](/posts/nodejs-for-potatoes)
- [Welcome to PigeonScript](/posts/welcome-to-pigeonscript)