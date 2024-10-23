<script lang="ts">
	interface Props {
		children: any;
	}

	let { children }: Props = $props()
</script>

<style>
	.card-list :global(.card) {
		margin: 1rem 0;
	}
</style>

<div class="card-list">
	{@render children()}
</div>