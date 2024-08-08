<script lang="ts">
	export let hover = false;
	export let style = '';
	export let classes = '';
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

<div class="display: inline-block">
	<div class:hover-card={hover} class={`card ${classes}`} {style}>
		<slot/>
	</div>
</div>
