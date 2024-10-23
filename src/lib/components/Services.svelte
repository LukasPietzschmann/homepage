<script lang='ts' module>
	export interface ServiceData {
		thing: string;
		desc: string;
		link: string;
	}
</script>

<script lang='ts'>
	import Card from '$lib/components/Card.svelte';
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import { faBoxOpen } from '@fortawesome/free-solid-svg-icons';

	interface Props {
		data: ServiceData[];
	}

	let { data }: Props = $props();
</script>

{#each data as { thing, desc, link } (thing)}
	<Card>
		<div>
			<FontAwesomeIcon icon={faBoxOpen}/>
			<a data-umami-event={`Service ${thing}`} href={link} target='_blank'>{thing}</a>
		</div>
		<div>{desc}</div>
	</Card>
{/each}