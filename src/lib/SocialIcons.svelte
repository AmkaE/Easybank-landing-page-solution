<script lang="ts">
	import facebookIcon from '../assets/images/icon-facebook.svg';
	import youtubeIcon from '../assets/images/icon-youtube.svg';
	import twitterIcon from '../assets/images/icon-twitter.svg';
	import pinterestIcon from '../assets/images/icon-pinterest.svg';
	import instagramIcon from '../assets/images/icon-instagram.svg';
</script>

<div class="social-icons">
	<a href="#footer" class="icon">
		<img src={facebookIcon} alt="facebook icon" />
	</a>
	<a href="#footer" class="icon">
		<img src={youtubeIcon} alt="youtube icon" />
	</a>
	<a href="#footer" class="icon">
		<img src={twitterIcon} alt="twitter icon" />
	</a>
	<a href="#footer" class="icon">
		<img src={pinterestIcon} alt="pinterest icon" />
	</a>
	<a href="#footer" class="icon">
		<img src={instagramIcon} alt="instagram icon" />
	</a>
</div>

<style>
	.social-icons {
		display: flex;
		gap: 0.7rem;
	}

	.icon {
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
