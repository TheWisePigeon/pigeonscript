<script context="module">
  export const load = async ({ fetch }) => {
    const posts = await fetch("/apis/posts.json");
    const allPosts = await posts.json();

    return {
      props: {
        posts: allPosts,
      },
    };
  };

  export const age = new Date().getFullYear() - 2002;
  export const status = "junior";
</script>

<script>
  export let posts;
</script>

<template>
  <p>
    Hi, I'm <a href="https://github.com/TheWisePigeon">TheWisePigeon</a>, {age} years
    old {status} developer. Here I'll be sharing some knowledge with code and memes,
    so if(you like coding && memes)&lbrace;subscribe to my mews letter&rbrace;
  </p>
  <ul>
    {#each posts as post}
      <li>
        <h2>
          <a href={post.path}>
            {post.meta.title}
          </a>
        </h2>
        Published {post.meta.date}
      </li>
    {/each}
  </ul>
</template>
