<script lang="ts">
	interface Props {
		children: any;
		hover?: boolean;
		style?: string;
		classes?: string;
	}

	let { children, hover = false, style = '', classes = ''}: Props = $props();
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
		{@render children()}
	</div>
</div>
