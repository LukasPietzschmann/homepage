<script context="module" lang="ts">
	export interface ServiceData {
		thing: string;
		desc: string;
		link: string;
	}
</script>

<script lang="ts">
	import Card from "$lib/components/Card.svelte";
	import {FontAwesomeIcon} from "@fortawesome/svelte-fontawesome";
	import {faBoxOpen} from "@fortawesome/free-solid-svg-icons";

	export let data: ServiceData[];
</script>

{#each data as {thing, desc, link}}
	<Card>
		<div>
			<FontAwesomeIcon icon={faBoxOpen}/>
			<a target="_blank" data-umami-event={`Service ${thing}`} href={link}>{thing}</a>
		</div>
		<div>{desc}</div>
	</Card>
{/each}