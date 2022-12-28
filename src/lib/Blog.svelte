<script lang="ts">
	import bgIntroDesktop from '../assets/images/bg-intro-desktop.svg';
	import bgIntroMobile from '../assets/images/bg-intro-mobile.svg';
	import t from '../assets/images/image-mockups.png';
	import ArticlesList from './ArticlesList.svelte';
</script>

<section class="blog">
	<div class="content">
		<h2 class="content-title">Latest Articles</h2>

		<!-- articles List -->
		<ArticlesList />
	</div>
</section>

<style lang="scss">
	// import variables
	@use '../sass/lib/' as *;

	.blog {
		display: flex;
		justify-content: start;
		align-items: center;
		height: 60vh;
		max-width: 1440px;
		margin: 5rem auto;

		.content {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: flex-start;
			gap: 1.5rem;

			&-title {
				font-size: 2.5rem;
				font-weight: 400;
				color: $dark-blue;
			}
		}
	}
</style>
