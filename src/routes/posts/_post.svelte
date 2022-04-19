<script>
    export let title;
    export let date;
    import "../../app.css";
</script>

<template>
    <div class=" w-96 p-2 dark:text-white">
        <h1>{title}</h1>

        <p>Published the {date}</p>

        <div class=" prose prose-a:text-red-400 prose-headings:underline ">
            <slot />
        </div>
    </div>
</template>
