<script>
    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";
</script>

<Header/>
<main class=" w-screen h-screen flex  justify-center">
<slot></slot>
</main>
<Footer/>