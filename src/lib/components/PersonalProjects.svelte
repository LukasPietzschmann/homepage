<script context="module" lang="ts">
	export interface ProjectId {
		owner: string;
		repo: string;
	}
</script>

<script lang="ts">
	import Card from "$lib/components/Card.svelte";
	import {fetchAndReturnJson} from "$lib/helper";
	import CardGrid from "$lib/components/CardGrid.svelte";
	import {faBookmark, faStar} from "@fortawesome/free-regular-svg-icons";
	import colors from "$lib/colors";
	import {faCodeFork} from "@fortawesome/free-solid-svg-icons";
	import {FontAwesomeIcon} from "@fortawesome/svelte-fontawesome";
	import {config} from '@fortawesome/fontawesome-svg-core'

	config.autoAddCss = false

	export let projectIds: ProjectId[];
</script>

<style>
	.info-block {
		display: flex;
		align-items: center;
		margin-right: 1rem;
	}
</style>

<CardGrid>
	{#each projectIds as {owner, repo} (owner + repo)}
		{@const slug = `${owner}/${repo}`}
		{#await fetchAndReturnJson(`https://api.pietzschmann.org/gh/repos/${slug}`)}
			<Card>
				<div style="margin: 1rem" class="center">Loading ...</div>
			</Card>
		{:then result}
			{@const {description, language, stargazers_count: stars, forks} = result}
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
				<hr/>
				<div style="display: flex">
					<div class="info-block">
						<span style="margin-right: 4px; background-color: {colors[language]}; width: 0.6em; height: 0.6em; display: inline-block; border-radius: 50%;"/>
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
		{:catch message}
			<Card>
				<div>{owner}/{repo}</div>
				<hr/>
				<div style="margin-top: 1rem">
					<span style="color: red">&#10008;</span>
					{message}
				</div>
			</Card>
		{/await}
	{/each}
</CardGrid>