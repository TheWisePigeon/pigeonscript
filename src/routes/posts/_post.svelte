<script>
    export let title;
    export let date;
    import "../../app.css";
</script>

<template>
    <div class=" lg:w-1/2  p-2 dark:text-white">
        <h1>{title}</h1>

        <p>Published the {date}</p>

        <div class=" prose prose-a:text-red-400 prose-headings:underline ">
            <slot />
        </div>
    </div>
</template>
