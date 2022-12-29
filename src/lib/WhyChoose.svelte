<script lang="ts">
	import FeaturesList from './FeaturesList.svelte';
</script>

<section class="wrapper">
	<div class="why-choose">
		<div class="content">
			<h2 class="content-title">Why choose Easybank?</h2>
			<p class="content-text">
				We leverage Open Banking to turn your bank account into your financial
				hub. <br />
				Control your finances like never before.
			</p>

			<!-- features List -->
			<FeaturesList />
		</div>
	</div>
</section>

<style lang="scss">
	// import variables
	@use '../sass/lib/' as *;

	.wrapper {
		width: 100%;
		background: $light-grayish-blue;
		padding: 5rem 0;
	}

	.why-choose {
		height: 100%;
	}

	.content {
		&-title {
			font-size: 3rem;
			font-weight: 400;
			color: $dark-blue;
		}

		&-text {
			font-size: 1rem;
			font-weight: 400;
			color: $grayish-blue;
			line-height: 1.5rem;
		}
	}

	@media screen and (max-width: 1280px) {
		.content {
			&-title {
				font-size: 2.5rem;
			}

			&-text {
				font-size: 0.9rem;
				line-height: 1.5rem;
			}
		}
	}

	@media screen and (max-width: 768px) {
		.content {
			text-align: center;
			align-items: center;
		}
	}

	@media screen and (max-width: 540px) {
		.content {
			&-title {
				font-size: 1.5rem;
			}
		}
	}
</style>
