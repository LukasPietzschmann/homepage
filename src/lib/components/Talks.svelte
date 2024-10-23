<script lang='ts' module>
	export interface TalkData {
		title: string;
		location: string;
		desc: string;
		link: string;
		reload?: boolean;
	}
</script>

<script lang='ts'>
	import Card from '$lib/components/Card.svelte';
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import { faMessage } from '@fortawesome/free-solid-svg-icons';

	interface Props {
		data: TalkData[];
	}

	let { data }: Props = $props();
</script>

<style>
	.location {
		color: var(--text-muted);
		float: right;
	}

	@media (max-width: 610px) {
		.location {
			float: none;
		}
	}
</style>

{#each data as { title, location, desc, link, reload } (title)}
	<Card>
		<div>
			<FontAwesomeIcon icon={faMessage}/>
			<a rel={reload ? "external" : null} href={link}>{title}</a> <span class='location'>@{location}</span>
		</div>
		<div style='margin-top: 1rem'>{desc}</div>
	</Card>
{/each}