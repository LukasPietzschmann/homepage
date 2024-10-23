<script lang='ts'>
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
	}

	let { children }: Props = $props();
</script>

<style>
	.card-list :global(.card) {
		margin: 1rem 0;
	}
</style>

<div class='card-list'>
	{@render children()}
</div>