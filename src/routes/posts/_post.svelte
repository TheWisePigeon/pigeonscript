<script>
    export let title;
    export let date;
    import "../../app.css";
</script>

<template>
    <div class=" p-2 dark:text-white">
        <h1>{title}</h1>

        <p>Published the {date}</p>

        <div class=" prose ">
            <slot />
        </div>
    </div>
</template>
