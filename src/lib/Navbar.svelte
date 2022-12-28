<script>
	import logo from '../assets/images/logo.svg';
</script>

<nav class="nav">
	<img src={logo} alt="easybank logo" />
	<ul class="nav-links">
		<li><a class="nav-link" href="/">Home</a></li>
		<li><a class="nav-link" href="#about">About</a></li>
		<li><a class="nav-link" href="#contact">Contact</a></li>
		<li><a class="nav-link" href="#blog">Blog</a></li>
		<li><a class="nav-link" href="#careers">Careers</a></li>
	</ul>
	<button class="btn">Request Invite</button>

	<!-- TODO: hamburger menu -->
</nav>

<style lang="scss">
	@use '../sass/lib/' as *;

	.nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		max-width: 1440px;
		margin: auto;
	}

	.nav-links {
		display: flex;
		gap: 2rem;
	}

	.nav-link {
		color: $grayish-blue;
		font-size: 0.9rem;
		text-transform: capitalize;
	}
</style>
