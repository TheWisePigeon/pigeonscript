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

<svelte:head>
  <title>Tech Pigeon</title>
</svelte:head>

<template>
  <div class=" dark:bg-gray-700 dark:text-white   prose prose-a:text-red-400 prose-p:text-center  h-screen relative">
    <p>
      Hi, I'm <a href="https://github.com/TheWisePigeon">TheWisePigeon</a>, {age}
      years old {status} developer. Here I'll be sharing some knowledge, using code
      and memes, so if(you like coding && memes)&lbrace;subscribe to my mews letter&rbrace;
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
  </div>
</template>
