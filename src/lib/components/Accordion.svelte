<script lang="ts">
    import {FontAwesomeIcon} from "@fortawesome/svelte-fontawesome";

    export let open = false;
    export let name: string;
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
		color: var(--text);
		font-size: 1rem;
		margin-bottom: 1rem;
		padding: 10px;
		transition: background-color 0.2s ease-in-out;
		width: 100%;
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
	<button class="header" class:active={open} on:mousedown={toggleOpen}
	        data-umami-event={`${name} ${open ? 'open' : 'close'}`}>
		<slot name="head"/>
		{#if open}
			<span class="expand" in:fade><FontAwesomeIcon icon={faCaretDown}/></span>
		{:else}
			<span class="expand" in:fade><FontAwesomeIcon icon={faCaretRight}/></span>
		{/if}
	</button>

	{#if open}
		<div class="details" transition:slide>
			<slot name="details"/>
		</div>
	{/if}
</div>
