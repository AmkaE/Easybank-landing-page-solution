<script lang="ts">
	import bgIntroDesktop from '../assets/images/bg-intro-desktop.svg';
	import bgIntroMobile from '../assets/images/bg-intro-mobile.svg';
	import t from '../assets/images/image-mockups.png';
</script>

<section class="intro">
	<div class="content">
		<h1 class="content-title">Next generation <br /> digital banking</h1>
		<p class="content-text">
			Take your financial life online. Your Easybank account
			<br /> will be a one-stop-shop for spending, saving,
			<br /> budgeting, investing, and much more.
		</p>
		<div class="content-btn btn">Request Invite</div>
	</div>

	<div class="intro-img">
		<div class="content">
			<img src={bgIntroDesktop} alt="background for desktop" />
			<img src={bgIntroMobile} alt="background for mobile" />
			<img src={t} alt="foreground for mobile and desktop background images" />
		</div>
	</div>
</section>

<style lang="scss">
	// import variables
	@use '../sass/lib/' as *;

	.intro {
		display: flex;
		justify-content: start;
		align-items: center;
		height: 60vh;
		max-width: 1440px;
		margin: auto;

		.content {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: flex-start;
			gap: 1.5rem;

			&-title {
				font-size: 3.5rem;
				font-weight: 400;
				color: $dark-blue;
			}

			&-text {
				font-size: 1rem;
				font-weight: 400;
				color: $grayish-blue;
			}

			&-btn {
				margin-top: 0.75rem;
			}
		}
	}

	.intro-img {
		position: absolute;
		top: -110px;
		right: -150px;
		width: 700px;

		img {
			width: 100%;
			position: absolute;
			top: 0;
			right: 0;
		}
	}

	// div > img.intro-img-desktop {
	// 	top: -50px;
	// 	right: -50px;
	// }
</style>
