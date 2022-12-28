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
		height: 60vh;
	}

	.why-choose {
		display: flex;
		justify-content: start;
		align-items: center;
		height: 100%;
		max-width: 1440px;
		margin: auto;

		.content {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: flex-start;
			gap: 1.5rem;

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
	}
</style>
