<script>
	import { fade } from "svelte/transition";

	export let photos = [];
  
	let idx = Math.floor(Math.random() * photos.length);
  
	const next = () => {
	  idx = (idx + 1) % photos.length;
	};
  
	setInterval(next, 3000);
  </script>
  
  <section class="carousel">
	{#each [photos[idx]] as photo (idx)}
	<div class="banner-cta">
		<img class="banner-cta__image" src={photo.url} alt={photo.title} />
		<span class="banner-cta__text">{photo.title} ➜</span>
	</div>
	{/each}
  </section>
  
  <style>
	.carousel {
	  position: relative;
	  height: 200px;
	  transition: transform 0.4s;
	}
	.carousel:hover {
	  transform: translateY(-0.3rem);
	}
	.banner-cta {
	  position: absolute;
	  inset: 0;
	  object-fit: cover;
	}
  
	.banner-cta::after {
	  content: "";
	  position: absolute;
	  inset: 0;
	  background: linear-gradient(transparent, var(--text));
	  border-radius: 0.5rem;
	}
  
	.banner-cta__image {
	  width: 100%;
	  height: 100%;
	  object-fit: cover;
	  border-radius: 0.5rem;
	}
	.banner-cta__text {
	  position: absolute;
	  z-index: 1;
	  bottom: 0.5rem;
	  right: 1rem;
	  font-family: var(--font-heading);
	  color: white;
	}
  </style>