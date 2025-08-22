<script lang='ts'>
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import { faScroll } from '@fortawesome/free-solid-svg-icons';
	import Card from '$lib/components/Card.svelte';
	import { slide } from 'svelte/transition';

	interface Props {
		data: object;
	}

	let { data }: Props = $props();
	let showAbstract = $state(false);

	const linkAnchorRewrite = {
		'doi': 'DOI'
	};
</script>

<style>
	.conference {
		float: right;
		font-style: italic;
		color: var(--text-muted);
	}

	.me {
		font-weight: bold;
	}

	.simulated-hover {
		text-decoration-color: var(--accent);
	}
</style>

<Card>
	<FontAwesomeIcon icon={faScroll}/>
	<span class="conference">@{data.series} ({data.year})</span>{data.title}
	<p>
		{#each data.author as author, i (author)}
			{@const a = author.split(', ')}
			{#if i !== 0}; {/if}
			{#if a[0] === 'Pietzschmann'}
				<span class='me'>{`${a[1]} ${a[0]}`}</span>
			{:else}
				{`${a[1]} ${a[0]}`}
			{/if}
		{/each}
	</p>
	<p>
		{#if data.abstract}
			<button class="link-btn" class:simulated-hover={showAbstract} onmousedown={e => showAbstract = !showAbstract}>
				Abstract
			</button>{#if data.link?.length > 0}, {/if}
		{/if}
		{#each data.link as { anchor, url }, i (i)}
			{#if i !== 0}, {/if}
			<a data-umami-event={`Paper ${data.title}`} rel='noopener noreferrer' target="_blank" href={url}>{
				linkAnchorRewrite[anchor] || anchor
			}</a>
		{/each}
	</p>
	{#if showAbstract}
		<p transition:slide>{data.abstract}</p>
	{/if}
</Card>
