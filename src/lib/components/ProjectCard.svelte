<script lang="ts">
	import languages from "$lib/colors.json"
	import Card from "$lib/components/Card.svelte";
	import {FontAwesomeIcon} from '@fortawesome/svelte-fontawesome';
	import {faBookmark, faStar} from "@fortawesome/free-regular-svg-icons";
	import {faCodeFork} from "@fortawesome/free-solid-svg-icons";
	import {config} from '@fortawesome/fontawesome-svg-core'
	import '@fortawesome/fontawesome-svg-core/styles.css';

	config.autoAddCss = false

	export let owner: string;
	export let repo: string;
	export let description: string;
	export let language: string;
	export let stars: number;
	export let forks: number;

	const slug = `${owner}/${repo}`;
</script>

<style>
	.info-block {
		display: flex;
		align-items: center;
		margin-right: 1rem;
	}
</style>

<Card>
	<div style="display: flex; align-items: center">
		<FontAwesomeIcon style="margin-right: 8px" icon={faBookmark}/>
		<a target="_blank" rel="noopener noreferrer" data-umami-event={slug}
		   href="https://github.com/{slug}">
			<!-- @formatter:off -->
			<span>{owner}</span><wbr/><span>/</span><wbr/><span>{repo}</span>
			<!-- @formatter:on -->
		</a>
	</div>
	{description}
	<hr style="color: var(--highlight)"/>
	<div style="display: flex">
		<div class="info-block">
			<span style="margin-right: 4px; background-color: {languages[language]}; width: 0.6em; height: 0.6em; display: inline-block; border-radius: 50%;"/>
			{language}
		</div>
		<div class="info-block">
			<FontAwesomeIcon style="margin-right: 4px" icon={faStar}/>
			{stars}
		</div>
		<div class="info-block">
			<FontAwesomeIcon style="margin-right: 4px" icon={faCodeFork}/>
			{forks}
		</div>
	</div>
</Card>