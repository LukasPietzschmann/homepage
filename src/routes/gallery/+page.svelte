<script lang='ts'>
	import Overlay from '$lib/components/Overlay.svelte';

	interface Photo {
		src: string;
		desc: string;
	}

	const pics: Photo[] = [
		{ src: '/gallery/bw.jpg', desc: 'Black and white view of Copenhagen airport' },
		{ src: '/gallery/cars.jpg', desc: 'Long exposure of cars on a random intersection' },
		{ src: '/gallery/fuji.jpg', desc: 'View of Mount Fuji' },
		{ src: '/gallery/silvester.jpg', desc: 'Happy new year' },
		{ src: '/gallery/night.jpg', desc: 'Shimmering japanese restaurant' },
	];

	let currentPic: Photo | null = null;
	let overlayOpen = false;
</script>

<style>
	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 1rem;
	}

	.grid .cell {
		width: 100%;
		height: 100%;
		border-radius: var(--radius);
		box-shadow: var(--box-shadow);
		object-fit: cover;
		aspect-ratio: 1 / 1;
		cursor: var(--cursor-pointer);
	}

	.grid > .cell:hover {
		scale: 1.04;
		transition: all 0.1s ease-out;
	}

	.overlay {
		position: fixed;
		inset: 0;
		background: rgba(0, 0, 0, 0.8);
		display: grid;
		place-items: center;
		z-index: 1000;
	}
</style>

<svelte:head>
	<title>Gallery</title>
	<meta name='description' content='Photos taken by Lukas Pietzschmann'/>
	<meta name='robots' content='noindex, noarchive, nocache, nosnippet'/>
</svelte:head>

<h1>Gallery</h1>

<p>
	Here are some photos I've taken. Most of them were captured during my travels or
	outdoor adventures. I hope you enjoy them as much as I enjoyed taking them :)
</p>

<div class='grid'>
	{#each pics as pic}
		<img class='cell' src={pic.src} alt={pic.desc} loading='lazy' onmousedown={() => {
			currentPic = pic;
			overlayOpen = true;
		}}/>
	{/each}
</div>

<Overlay bind:open={overlayOpen}>
	<img src={currentPic?.src} alt={currentPic?.desc}/>
</Overlay>