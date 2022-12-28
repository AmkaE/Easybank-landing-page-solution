<script lang="ts">
	import onlineBankingIcon from '../assets/images/icon-online.svg';
	import budgetingIcon from '../assets/images/icon-budgeting.svg';
	import onboardingIcon from '../assets/images/icon-onboarding.svg';
	import apiIcon from '../assets/images/icon-api.svg';

	const features = [
		{
			id: 1,
			icon: onlineBankingIcon,
			title: 'Online Banking',
			text: 'Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.',
		},
		{
			id: 2,
			icon: budgetingIcon,
			title: 'Simple Budgeting',
			text: "See exactly where your money goes each month. Receive notifications when you're close to hitting your limits.",
		},
		{
			id: 3,
			icon: onboardingIcon,
			title: 'Fast Onboarding',
			text: "We don't do branches. Open your account in minutes online and start taking control of your finances right away.",
		},
		{
			id: 4,
			icon: apiIcon,
			title: 'Open API',
			text: 'Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.',
		},
	];
</script>

<section class="features">
	{#each features as feature (feature.id)}
		<div class="feature">
			<img src={feature.icon} alt={feature.title} class="feature-icon" />
			<h3 class="feature-title">{feature.title}</h3>
			<p class="feature-text">{feature.text}</p>
		</div>
	{/each}
</section>

<style lang="scss">
	@use '../sass/lib/' as *;

	.features {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 1rem;
	}

	.feature {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		margin-top: 2rem;

		&-icon {
			width: 3.5rem;
			height: 3.5rem;
			margin-bottom: 1rem;
		}

		&-title {
			font-size: 1.5rem;
			font-weight: 400;
			color: $dark-blue;
		}

		&-text {
			font-size: 0.875rem;
			font-weight: 400;
			color: $grayish-blue;
			line-height: 1.25rem;
		}
	}
</style>
