<script>
	import { navbarStore } from '../stores/navbarStore';
	import logo from '../assets/images/logo.svg';
	import hamburgerIcon from '../assets/images/icon-hamburger.svg';
	import menuCloseIcon from '../assets/images/icon-close.svg';

	$: isNavOpen = $navbarStore;

	$: if (isNavOpen) {
		document.body.style.overflow = 'hidden';
	} else {
		document.body.style.overflow = 'auto';
	}
</script>

<nav class="nav">
	<img src={logo} alt="easybank logo" />
	<ul class={`nav-links ${$navbarStore ? 'show-menu' : 'hide-menu'}`}>
		<li>
			<a class="nav-link" href="/" on:click={navbarStore.closeMenu}>Home</a>
		</li>
		<li>
			<a class="nav-link" href="#about" on:click={navbarStore.closeMenu}
				>About</a
			>
		</li>
		<li>
			<a class="nav-link" href="#contact" on:click={navbarStore.closeMenu}
				>Contact</a
			>
		</li>
		<li>
			<a class="nav-link" href="#blog" on:click={navbarStore.closeMenu}>Blog</a>
		</li>
		<li>
			<a class="nav-link" href="#careers" on:click={navbarStore.closeMenu}
				>Careers</a
			>
		</li>
	</ul>
	<button class="btn">Request Invite</button>

	<!-- hamburger menu -->
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div class="hamburger-menu" on:click={navbarStore.toggleMenu}>
		<img
			class={$navbarStore ? 'hide' : 'show'}
			src={hamburgerIcon}
			alt="hambuger menu icon"
		/>
		<img
			class={$navbarStore ? 'show' : 'hide'}
			src={menuCloseIcon}
			alt="menu close icon"
		/>
	</div>
</nav>

<style lang="scss">
	@use '../sass/lib/' as *;

	.nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		max-width: 1440px;
		margin: auto;
		padding: 0 1rem;
	}

	.nav-links {
		display: flex;
		gap: 2rem;
		padding: 1.5rem 1rem;
	}

	.nav-link {
		color: $grayish-blue;
		font-size: 0.95rem;
		text-transform: capitalize;
		padding: 1.3rem 0rem;
		transition: border 0.3s, color 0.3s ease-in-out;

		&:hover {
			border-width: 4px;
			border-style: solid;
			border-image: linear-gradient(0.25turn, $lime-green, $bright-cyan) 1;
			border-top: none;
			border-left: none;
			border-right: none;
			color: $dark-blue;
		}
	}

	.hamburger-menu {
		display: none;
	}

	@media screen and (max-width: 768px) {
		.nav {
			padding: 1.5rem 1rem;
			position: relative;
		}

		.hamburger-menu {
			display: block;
			cursor: pointer;
		}

		.btn {
			display: none;
		}

		.nav-links {
			flex-direction: column;
			align-items: center;
			background: $white;
			position: absolute;
			top: 80px;
			left: 50%;
			width: 90%;
			transform: translateX(-50%);
			border-radius: 0.5rem;
			z-index: 100;
			box-shadow: 0px 0px 10px rgba($color: $black, $alpha: 0.5);
		}

		.nav-link {
			color: $dark-blue;
			font-size: 1rem;
			font-weight: bold;

			&:hover {
				border: none;
			}
		}

		.show-menu {
			display: flex;
		}

		.hide-menu {
			display: none;
		}

		.show {
			display: block;
		}

		.hide {
			display: none;
		}
	}
</style>
