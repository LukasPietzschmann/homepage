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
    import {faGraduationCap} from "@fortawesome/free-solid-svg-icons";

    export let data: ProjectData[];
</script>

<style>
</style>

{#each data as {thing, desc, links}}
	<Card hover={false} style="margin: 1rem 0">
		<div>
			<FontAwesomeIcon icon={faGraduationCap}/>
			{thing}</div>
		<p>{desc}</p>
		{#each links as {link, name}, i}
			<a href={link} data-umami-event={`${thing}: ${name}`}
			   target="_blank">{name}</a>
			{#if i !== links.length - 1},{" "}{/if}
		{/each}
	</Card>
{/each}