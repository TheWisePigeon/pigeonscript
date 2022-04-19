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

  export const status = "junior";
</script>

<script>
  export let posts;
</script>

<svelte:head>
  <title>Tech Pigeon </title>
</svelte:head>

<template>
  <div class=" dark:bg-gray-700 dark:text-white   prose prose-a:text-red-400 prose-p:text-white">
    <p class=" text-center">
      Hi, I'm <a href="https://github.com/TheWisePigeon">Freeman</a>. Because every developer should have a blog, here is mine. Hope you will learn something useful here
    </p>
    <ul>
      {#each posts as post}
        <div>
          <h2>
            <a href={post.path}>
              {post.meta.title}
            </a>
            <p class="text-sm" >{post.meta.description}</p>
            <p class=" text-sm">Published on {post.meta.date}</p>
          </h2>
        </div>
      {/each}
    </ul>
  </div>
</template>
