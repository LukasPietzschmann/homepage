<script generics='Item' lang='ts'>
	export let items: Item[] = [];
	export let minColWidth = 200;
	export let gap = 20;

	let width = 0;
	let columns: Item[][] = [];

	$: numCols = width ? Math.floor(width / (minColWidth + gap)) : 1;
	$: safeCols = Math.max(1, numCols);

	$: {
		let cols = Array.from({ length: safeCols }, () => []);

		items.forEach((item, i) => {
			cols[i % safeCols].push(item);
		});

		columns = cols;
	}
</script>

<div
	class='masonry-wrapper'
	bind:clientWidth={width}
	style='gap: {gap}px;'
>
	{#each columns as col}
		<div class='masonry-column' style='gap: {gap}px;'>
			{#each col as item}
				<div class='masonry-item'>
					<slot {item}/>
				</div>
			{/each}
		</div>
	{/each}
</div>

<style>
	.masonry-wrapper {
		display: flex;
		justify-content: center;
		align-items: flex-start;
		width: 100%;
		box-sizing: border-box;
	}

	.masonry-column {
		display: flex;
		flex-direction: column;
		flex: 1;
		min-width: 0;
	}

	.masonry-item {
		width: 100%;
		display: block;
	}
</style>