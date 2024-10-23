<script lang='ts'>
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
		hover?: boolean;
		style?: string;
		classes?: string;
	}

	let { children, hover = false, style = '', classes = '' }: Props = $props();
</script>

<style>
	.card {
		font-size: 1rem;
		background: var(--background-200);
		border: var(--border);
		border-radius: var(--radius);
		padding: 1rem;
		transform: scale(1);
		transition: var(--transition);
	}

	.hover-card:hover {
		box-shadow: var(--box-shadow);
		background-color: var(--highlight);
	}
</style>

<div class='display: inline-block'>
	<div {style} class={classes} class:card={true} class:hover-card={hover}>
		{@render children()}
	</div>

</div>