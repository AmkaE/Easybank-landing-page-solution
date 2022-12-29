<script lang="ts">
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
		margin: 5rem auto;
	}

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

	@media screen and (max-width: 1280px) {
		.content {
			&-title {
				font-size: 2rem;
			}
		}
	}

	@media screen and (max-width: 768px) {
		.content {
			&-title {
				text-align: center;
				align-self: center;
			}
		}
	}
</style>
