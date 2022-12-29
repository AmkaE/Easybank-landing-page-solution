<script lang="ts">
	import logo from '../assets/images/logo.svg';
	import Attributions from './Attributions.svelte';
	import SocialIcons from './SocialIcons.svelte';
</script>

<footer class="footer">
	<div class="wrapper">
		<div class="content">
			<div class="content-img">
				<img class="logo" src={logo} alt="easybank logo" />

				<!-- social icons -->
				<SocialIcons />
			</div>

			<div class="footer-links">
				<ul>
					<li><a class="footer-link" href="#about">About</a></li>
					<li><a class="footer-link" href="#contact">Contact</a></li>
					<li><a class="footer-link" href="#blog">Blog</a></li>
				</ul>
				<ul>
					<li><a class="footer-link" href="#careers">Careers</a></li>
					<li><a class="footer-link" href="#support">Support</a></li>
					<li>
						<a class="footer-link" href="#privacy-policy">Privacy Policy</a>
					</li>
				</ul>
			</div>

			<div class="footer-legal">
				<button class="btn">Request Invite</button>
				<p class="footer-legal-text">© Easybank. All Rights Reserved</p>
			</div>
		</div>
		<hr />
	</div>

	<Attributions />
</footer>

<style lang="scss">
	// import variables
	@use '../sass/lib/' as *;

	.footer {
		background-color: $dark-blue;
		color: $white;

		.wrapper {
			max-width: 1440px;
			margin: auto;
			padding: 2rem 0;
		}
	}

	.content {
		display: flex;
		justify-content: space-between;
		gap: 1.5rem;
		margin-bottom: 3rem;

		&-img,
		.footer-legal {
			display: flex;
			flex-direction: column;
			gap: 1rem;
			justify-content: space-between;
		}

		.logo {
			background-color: $white;
			padding: 0.2rem;
		}
	}

	.footer-links {
		display: flex;
		gap: 5rem;

		ul {
			display: flex;
			flex-direction: column;
			gap: 0.75rem;
		}

		.footer-link {
			color: $white;
			font-size: 0.9rem;
			text-transform: capitalize;
			transition: color 0.3s ease-in-out;

			&:hover {
				color: $lime-green;
			}
		}
	}

	.footer-legal {
		display: flex;

		.btn {
			align-self: flex-end;
			width: fit-content;
		}

		.footer-legal-text {
			font-size: 0.8rem;
			color: $grayish-blue;
		}
	}

	@media screen and (max-width: 768px) {
		.content {
			flex-direction: column;
			align-items: center;
			justify-content: center;
			gap: 2rem;

			&-img {
				align-items: center;
			}

			.footer-legal {
				align-items: center;

				.btn {
					align-self: center;
				}
			}
		}

		.footer-links {
			flex-direction: column;
			align-items: center;
			gap: 2rem;

			ul {
				align-items: center;
			}
		}
	}
</style>
