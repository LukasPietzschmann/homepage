<script context="module" lang="ts">
	export interface ProjectData {
		thing: string;
		desc: string;
		links: { name: string, link: string }[];
	}
</script>

<script lang="ts">
	import Card from "$lib/components/Card.svelte";
	import {FontAwesomeIcon} from "@fortawesome/svelte-fontawesome";
	import type {IconDefinition} from "@fortawesome/fontawesome-common-types";

	export let data: ProjectData[];
	export let icon: IconDefinition
</script>

{#each data as {thing, desc, links}}
	<Card>
		<div>
			<FontAwesomeIcon icon={icon}/>
			{thing}</div>
		<div style="margin: 1rem 0">{desc}</div>
		{#each links as {link, name}, i}
			<!-- @formatter:off -->
			<a href={link} data-umami-event={`${thing}: ${name}`} target="_blank">{name}</a>{#if i !== links.length - 1},{" "}{/if}
			<!-- @formatter:on -->
		{/each}
	</Card>
{/each}