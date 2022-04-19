<script>
    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";
</script>

<Header/>
<main class=" bg-gray-700   h-screen flex justify-center m-auto  w-full ">
    <slot></slot>
</main>
<Footer/>