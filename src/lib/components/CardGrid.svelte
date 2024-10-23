<script lang='ts'>
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
	}

	let { children }: Props = $props();
</script>

<style>
	.card-wrapper {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		gap: 1.5rem 1.5rem;
	}
</style>

<div class='card-wrapper'>
	{@render children()}
</div>