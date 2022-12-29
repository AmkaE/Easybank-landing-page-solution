<script lang="ts">
	import { navbarStore } from '../stores/navbarStore';
	import bgIntroDesktop from '../assets/images/bg-intro-desktop.svg';
	import bgIntroMobile from '../assets/images/bg-intro-mobile.svg';
	import imageMockups from '../assets/images/image-mockups.png';

	$: isNavOpen = $navbarStore;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<section
	class={`intro ${isNavOpen ? 'darken-bg' : ''}`}
	on:click={navbarStore.closeMenu}
>
	<div class="content">
		<h1 class="content-title">Next generation <br /> digital banking</h1>
		<p class="content-text">
			Take your financial life online. Your Easybank account
			<br /> will be a one-stop-shop for spending, saving,
			<br /> budgeting, investing, and much more.
		</p>
		<button class="content-btn btn">Request Invite</button>
	</div>

	<div class="intro-img">
		<div class="content">
			<img
				class="bg-desktop"
				src={bgIntroDesktop}
				alt="background for desktop"
			/>
			<img class="bg-mobile" src={bgIntroMobile} alt="background for mobile" />
			<img
				class="image-mockups"
				src={imageMockups}
				alt="foreground for mobile and desktop background images"
			/>
		</div>
	</div>
</section>

<style lang="scss">
	// import variables
	@use '../sass/lib/' as *;

	.content {
		&-title {
			font-size: 3.5rem;
			font-weight: 400;
			color: $dark-blue;
		}

		&-text {
			font-size: 1rem;
			font-weight: 400;
			color: $grayish-blue;
			line-height: 1.5rem;
		}

		&-btn {
			margin-top: 0.75rem;
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
			right: 50px;
		}

		img.image-mockups {
			max-width: 650px;
		}

		.bg-mobile {
			display: none;
		}

		.bg-desktop {
			display: block;
		}
	}

	@media screen and (max-width: 1280px) {
		.content {
			&-title {
				font-size: 3rem;
			}

			&-text {
				font-size: 0.9rem;
				line-height: 1.5rem;
			}
		}

		.intro-img {
			position: absolute;
			top: -110px;
			right: -150px;
			width: 700px;

			img.bg-desktop {
				max-width: 500px;
				right: 50px;
			}

			img.image-mockups {
				max-width: 600px;
				right: 50px;
			}
		}
	}

	@media screen and (max-width: 1100px) {
		.intro-img {
			position: absolute;
			top: -110px;
			right: -150px;
			width: 700px;

			img.bg-desktop {
				max-width: 500px;
				right: 50px;
			}

			img.image-mockups {
				max-width: 470px;
				right: 50px;
			}
		}
	}

	@media screen and (max-width: 768px) {
		main {
			position: static;
		}

		.intro {
			max-width: 100%;
			width: 100%;
			display: flex;
			flex-direction: column;
			height: fit-content;
			gap: 0rem;
			padding: 0;
		}

		.darken-bg {
			&::after {
				content: '';
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				background-color: rgba($color: $dark-blue, $alpha: 0.6);
			}
		}

		.content {
			order: 2;
			padding: 0rem;
			align-items: center;
			text-align: center;
			padding-bottom: 0rem;
			margin-top: 0;
			margin-bottom: 3rem;
		}

		.intro-img {
			max-width: 100%;
			width: 100%;
			order: 1;
			position: static;
			padding: 0rem;

			img {
				position: static;
				max-width: 100%;
				width: 100%;
			}

			img.bg-mobile {
				display: block;
				max-width: 100%;
			}

			img.bg-desktop {
				display: none;
			}

			img.image-mockups {
				max-width: 100%;
				position: absolute;
				top: -240px;
				left: 50%;
				transform: translateX(-50%);
			}
		}
	}

	@media screen and (max-width: 640px) {
		.intro-img {
			img.image-mockups {
				top: -200px;
			}
		}
	}

	@media screen and (max-width: 540px) {
		.content {
			&-title {
				font-size: 2rem;
			}
		}

		.intro-img {
			img.image-mockups {
				top: -150px;
			}
		}
	}

	@media screen and (max-width: 440px) {
		.intro-img {
			img.image-mockups {
				top: -100px;
			}
		}
	}
</style>
