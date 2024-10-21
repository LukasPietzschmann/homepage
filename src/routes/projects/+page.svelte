<script lang="ts">
	import PersonalProjects, {
		type ProjectId
	} from "$lib/components/PersonalProjects.svelte";

	const personalProjects: ProjectId[] = [
		{owner: 'LukasPietzschmann', repo: 'awesome-beamer'},
		{owner: 'LukasPietzschmann', repo: 'telescope-tabs'},
		{owner: 'LukasPietzschmann', repo: 'zigchr'},
		{owner: 'LukasPietzschmann', repo: 'Haskellator9000'},
		{owner: 'LukasPietzschmann', repo: 'LZip'},
		{owner: 'LukasPietzschmann', repo: 'PL0-Compiler'}
	];
</script>

<svelte:head>
	<title>Personal Projects</title>
	<meta name="description" content="Lukas' personal projects">
</svelte:head>

<h1>Personal Projects</h1>

<p>
	Outside of my <a data-umami-event="Studies" href="/uni">studies</a>, I like to
	implement fun little things, hack on some LaTeX code, or dump way too many hours
	into my <a data-umami-event="NVim Config"
	href="https://github.com/LukasPietzschmann/nvim-config" target="_blank"
	rel="noopener noreferrer">NeoVim config</a>. For example, I once reimplemented GZip
	decompression in good old C. I also open-source most of my personal work, so check
	out my <a data-umami-event="GitHub" href="https://github.com/LukasPietzschmann"
	target="_blank" rel="noopener noreferrer">GitHub</a>! Some of my projects even
	attracted contributions from others, which I’m way too excited about 😆.
</p>
<p>
	Since there was no way I could decide on less favorites, here's a selection of
	six that I really enjoy(ed) working on:
</p>
<PersonalProjects projectIds={personalProjects}/>