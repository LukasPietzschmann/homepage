<script lang='ts' module>
	export interface ProjectData {
		thing: string;
		desc: string;
		links: { name: string, link: string }[];
	}
</script>

<script lang='ts'>
	import Card from '$lib/components/Card.svelte';
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import type { IconDefinition } from '@fortawesome/fontawesome-common-types';

	interface Props {
		data: ProjectData[];
		icon: IconDefinition;
	}

	let { data, icon }: Props = $props();
</script>

{#each data as { thing, desc, links } (thing)}
	<Card>
		<div>
			<FontAwesomeIcon {icon}/>
			{thing}</div>
		<div style='margin: 1rem 0'>{desc}</div>
		{#each links as { link, name }, i (i)}
			<!-- @formatter:off -->
			<a data-umami-event={`${thing}: ${name}`} href={link} target='_blank'>{name}</a>{#if i !== links.length - 1},{' '}{/if}
			<!-- @formatter:on -->
		{/each}
	</Card>
{/each}