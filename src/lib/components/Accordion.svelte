<script>
	import {FontAwesomeIcon} from "@fortawesome/svelte-fontawesome";

	export let open = false;
	import {slide, fade} from 'svelte/transition';
	import {faCaretDown, faCaretRight} from "@fortawesome/free-solid-svg-icons";

	const toggleOpen = () => open = !open
</script>

<style>
	.header {
		display: flex;
		cursor: pointer;
	}

	.header {
		background: var(--highlight-background);
		border-radius: var(--radius);
		border: 1px solid var(--highlight);
		box-shadow: var(--box-shadow);
		font-size: 1rem;
		margin-bottom: 1rem;
		padding: 10px;
		transition: background-color 0.2s ease-in-out;
	}

	.header.active {
		background: var(--highlight);
	}

	.details {
		margin-bottom: 1rem;
	}

	@media screen and (min-width: 750px) {
		.details {
			padding: 1rem;
			background: var(--highlight-background);
			border-radius: var(--radius);
			border: 1px solid var(--highlight);
			box-shadow: var(--box-shadow);
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

<div class="accordion">
	<div class="header" class:active={open} on:mousedown={toggleOpen} role="button"
	     tabindex="0">
		<slot name="head"/>
		<div class="expand">
			{#if open}
				<span in:fade><FontAwesomeIcon icon={faCaretDown}/></span>
			{:else}
				<span in:fade><FontAwesomeIcon icon={faCaretRight}/></span>
			{/if}
		</div>
	</div>

	{#if open}
		<div class="details" transition:slide>
			<slot name="details"/>
		</div>
	{/if}
</div>
