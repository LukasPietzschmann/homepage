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

<style>
</style>

{#each data as {thing, desc, links}}
	<Card hover={false} style="margin: 1rem 0">
		<div>
			<FontAwesomeIcon icon={icon}/>
			{thing}</div>
		<p>{desc}</p>
		{#each links as {link, name}, i}
			<a href={link} data-umami-event={`${thing}: ${name}`}
			   target="_blank">{name}</a>{#if i !== links.length - 1},{" "}{/if}
		{/each}
	</Card>
{/each}