<script context="module" lang="ts">
    export type ProjectId = string;
</script>

<script lang="ts">
    import ProjectCard from "$lib/components/ProjectCard.svelte";
    import Card from "$lib/components/Card.svelte";
    import {fetchAndReturnJson} from "$lib/helper";

    export let projectIds: ProjectId[];
</script>

<style>
    .card-wrapper {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 1.5rem 1.5rem;
    }
</style>

<div class="card-wrapper">
    {#each projectIds as id (id)}
        {#await fetchAndReturnJson(`https://api.pietzschmann.org/gh/repos/${id}`)}
            <Card>
                <div style="margin: 1rem" class="center">Loading ...</div>
            </Card>
        {:then result}
            {@const {description, language, stargazers_count: stars, forks} = result}
            <ProjectCard urlTail={id} description={description} language={language} stars={stars} forks={forks}/>
        {:catch message}
            <Card>
                <div>{id}</div>
                <div style="margin-top: 1rem">
                    <span style="color: red">&#10008;</span>
                    {message}
                </div>
            </Card>
        {/await}
    {/each}
</div>