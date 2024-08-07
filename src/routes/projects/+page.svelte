<script lang="ts">
	import PersonalProjects, {
		type ProjectId
	} from "$lib/components/PersonalProjects.svelte";

	const personalProjects: ProjectId[] = [
		{owner: 'LukasPietzschmann', repo: 'awesome-beamer'},
		{owner: 'LukasPietzschmann', repo: 'telescope-tabs'},
		{owner: 'LukasPietzschmann', repo: 'Haskellator9000'},
		{owner: 'LukasPietzschmann', repo: 'LZip'}
	];
</script>

<svelte:head>
	<title>Personal Projects</title>
	<meta name="description" content="Lukas' personal projects">
</svelte:head>

<h1>Personal Projects</h1>

<p>
	Outside of my studies, I like to implement fun little things,
	hack on some LaTeX code, or dump way too many hours
	into my NeoVim config. For example, last year I
	reimplemented GZip decompression in good old C. I also
	open-source most of my personal work, so check out my
	<a data-umami-event="GitHub" href="https://github.com/LukasPietzschmann">GitHub</a>!
	Some of my projects even attracted contributions from
	others, which I’m way too excited about 😆.
</p>
<p>
	Here's a little collection of projects I enjoy(ed) working on:
</p>
<PersonalProjects projectIds={personalProjects}/>