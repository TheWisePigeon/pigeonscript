<script>
    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";
</script>

<Header/>

<div class=" bg-green-700 text-white prose">
    <slot></slot>
</div>

<Footer/>