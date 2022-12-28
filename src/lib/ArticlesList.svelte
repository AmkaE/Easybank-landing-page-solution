<script lang="ts">
	import imageCurrency from '../assets/images/image-currency.jpg';
	import imageRestaurant from '../assets/images/image-restaurant.jpg';
	import imagePlane from '../assets/images/image-plane.jpg';
	import imageConfetti from '../assets/images/image-confetti.jpg';

	const artiles = [
		{
			image: imageCurrency,
			title: 'Receive money in any currency with no fees',
			author: 'By Claire Robinson',
			text: "The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single ...",
		},
		{
			image: imageRestaurant,
			title: 'Treat yourself without worrying about money',
			author: 'By Wilson Hutton',
			text: 'Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you ...',
		},
		{
			image: imagePlane,
			title: 'Take your Easybank card wherever you go',
			author: 'By Wilson Hutton',
			text: "We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show ...",
		},
		{
			image: imageConfetti,
			title: 'Our invite-only Beta accounts are now live !',
			author: 'By Claire Robinson',
			text: "After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site ...",
		},
	];
</script>

<section class="articles">
	{#each artiles as article}
		<div class="article">
			<img class="article-img" src={article.image} alt="article" />
			<div class="article-body">
				<p class="article-author">{article.author}</p>
				<h3 class="article-title">{article.title}</h3>
				<p class="article-text">{article.text}</p>
			</div>
		</div>
	{/each}
</section>

<style lang="scss">
	@use '../sass/lib/' as *;

	.articles {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 1rem;
	}

	.article {
		display: flex;
		flex-direction: column;
		gap: 2rem;
		margin-top: 2rem;
		background-color: $white;
		overflow: hidden;
		border-radius: 0.5rem;
		box-shadow: 0 0 1px rgba($color: $black, $alpha: 0.2);

		&-img {
			margin-bottom: 1rem;
			height: 15rem;
		}

		&-body {
			display: flex;
			flex-direction: column;
			gap: 1rem;
			padding: 0 1.5rem 1.5rem 1.5rem;
		}

		&-author {
			font-size: 0.75rem;
			color: $grayish-blue;
			text-transform: capitalize;
		}

		&-title {
			font-size: 1.5rem;
			font-weight: 400;
			color: $dark-blue;
			cursor: pointer;
			transition: color 0.3s ease-in-out;

			&:hover {
				color: $lime-green;
			}
		}

		&-text {
			font-size: 0.875rem;
			font-weight: 400;
			color: $grayish-blue;
			line-height: 1.25rem;
		}
	}
</style>
