<script lang='ts'>
	import { faCaretDown, faCaretRight } from '@fortawesome/free-solid-svg-icons';
	import { fade, slide } from 'svelte/transition';
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import type { Snippet } from 'svelte';

	interface Props {
		head: Snippet;
		details: Snippet;
		open?: boolean;
		name: string;
	}

	let { head, details, open = false, name }: Props = $props();

	const toggleOpen = () => open = !open;
</script>

<style>
	.header {
		display: flex;
		background: var(--background-200);
		border-radius: var(--radius);
		border: var(--border);
		color: var(--text);
		font-size: 1rem;
		padding: 10px;
		transition: var(--transition);
		width: 100%;

		margin-top: 1rem;
	}

	.header.active {
		box-shadow: var(--box-shadow);
	}

	.header:hover {
		background: var(--highlight);
		box-shadow: var(--box-shadow);
	}

	@media screen and (min-width: 750px) {
		.details {
			padding: 1rem;
			border-radius: var(--radius);
		}
	}

	.expand {
		background: none;
		border: none;
		color: var(--text);
		cursor: pointer;
		margin-left: auto;
	}
</style>

<div class='accordion'>
	<button class='header' class:active={open} data-umami-event={`${name} ${open ? 'open' : 'close'}`}
		onmousedown={toggleOpen}>
		{@render head()}
		{#if open}
			<span class='expand' in:fade><FontAwesomeIcon icon={faCaretDown}/></span>
		{:else}
			<span class='expand' in:fade><FontAwesomeIcon icon={faCaretRight}/></span>
		{/if}
	</button>

	{#if open}
		<div class='details' transition:slide>
			{@render details()}
		</div>
	{/if}
</div>
