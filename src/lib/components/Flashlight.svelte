<script lang='ts'>
	const initX = -9000;
	const initY = -9000;

	let x: number = $state(initX);
	let y: number = $state(initY);

	let hasMouseMoved: boolean = $derived(x !== initX || y !== initY);

	function handleMousemove(event: MouseEvent) {
		x = event.clientX;
		y = event.clientY;
	}
</script>

<svelte:window on:mousemove={handleMousemove} />

<style>
	.darken-site {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background-color: black;
		pointer-events: none;
		z-index: 9999;
		will-change: mask-image, -webkit-mask-image;
	}

	.the-real-dark-mode {
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		color: white;
		font-size: 2rem;
		z-index: 10000;
		color: var(--text-muted);
		text-align: center;
	}
</style>

<div class="darken-site" style="mask-image: radial-gradient(269px at {x}px {y}px, transparent 0%, black 100%);" />

{#if !hasMouseMoved}
	<div class="the-real-dark-mode">
		Move your mouse and let the light guide you
	</div>
{/if}
