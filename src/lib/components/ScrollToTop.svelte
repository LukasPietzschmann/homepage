<script lang='ts'>
	import { blur } from 'svelte/transition';

	let scrollY: number = $state(0);
	const showGotoTop = $derived(scrollY >= 800);
</script>

<style>
	.gotoTop {
		background: none;
		border: none;
		position: fixed;
		bottom: 0;
		right: 0;
		margin: 2rem;
		transition-duration: 0.2s;
		z-index: 999;
	}

	.gotoTop:hover {
		transform: translateY(-.3rem);
	}
</style>

<svelte:window bind:scrollY/>

{#if showGotoTop}
	<button class='gotoTop' aria-label='Scroll to top'
		data-umami-event='Scroll to top' onmousedown={() => window.scrollTo({ top: 0, behavior: 'smooth' })} transition:blur>
		<svg height='48' viewBox='0 0 24 24' width='48'
			xmlns='http://www.w3.org/2000/svg'>
			<g fill='none' stroke='var(--text)' stroke-width='1.5'>
				<path d='M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z'
					fill='var(--background)'/>
				<path d='m15 13.5l-3-3l-3 3' stroke-linecap='round'
					stroke-linejoin='round'/>
			</g>
		</svg>
	</button>
{/if}