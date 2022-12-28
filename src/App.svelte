<script lang="ts">
	import Navbar from './lib/Navbar.svelte';
	import Intro from './lib/Intro.svelte';
	import Attributions from './lib/Attributions.svelte';
	import WhyChoose from './lib/WhyChoose.svelte';
</script>

<header>
	<Navbar />
</header>

<main>
	<Intro />
	<WhyChoose />
</main>

<footer>
	<!--  -->
</footer>

<Attributions />

<style lang="scss">
	// import variables
	// @use './sass/lib/' as *;
</style>
