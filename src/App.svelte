<script lang="ts">
	import Navbar from './lib/Navbar.svelte';
	import Intro from './lib/Intro.svelte';
	import WhyChoose from './lib/WhyChoose.svelte';
	import Blog from './lib/Blog.svelte';
	import Footer from './lib/Footer.svelte';
</script>

<header>
	<Navbar />
</header>

<main>
	<Intro />
	<WhyChoose />
	<Blog />
</main>

<Footer />

<style lang="scss">
	// import variables
	// @use './sass/lib/' as *;
</style>
