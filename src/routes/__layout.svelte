<script>
    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";
</script>

<Header/>

<div class=" dark:bg-gray-700 dark:text-white   prose prose-a:text-red-400 prose-p:text-center">
    <slot></slot>
</div>

<Footer/>