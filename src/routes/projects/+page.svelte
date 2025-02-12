<script lang='ts'>
	import PersonalProjects, { type ProjectId } from '$lib/components/PersonalProjects.svelte';

	const personalProjects: ProjectId[] = [
		{ owner: 'LukasPietzschmann', repo: 'awesome-beamer' },
		{ owner: 'LukasPietzschmann', repo: 'telescope-tabs' },
		{ owner: 'LukasPietzschmann', repo: 'zigchr' },
		{ owner: 'LukasPietzschmann', repo: 'Haskellator9000' },
		{ owner: 'LukasPietzschmann', repo: 'LZip' },
		{ owner: 'flowr-analysis', repo: 'slicing-coverage-r-package' }
	];
</script>

<svelte:head>
	<title>Personal Projects</title>
	<meta name='description' content="Lukas' personal projects">
</svelte:head>

<h1>Personal Projects</h1>

<p>
	Outside of my <a data-umami-event='Studies' href='/uni'>studies</a>, I like to
	implement fun little things, hack on some LaTeX code, or dump way too many hours
	into my <a data-umami-event='NVim Config'
		href='https://github.com/LukasPietzschmann/nvim-config' rel='noopener noreferrer'
		target='_blank'>NeoVim config</a>. I also open-source most of my personal work,
	so check out my <a data-umami-event='GitHub' href='https://github.com/LukasPietzschmann'
		rel='noopener noreferrer' target='_blank'>GitHub</a>! Some of my projects even
	attracted contributions from others, which I’m way too excited about 😆.
</p>
<p>
	Additionally, I like to tinker with self-hosted services, like my Nextcloud instance
	or a Minecraft server. I wrote a little bit about what I host and how I host it
	<a data-umami-event='Self hosting' href='/services'>here</a>.
</p>
<p>
	Since there was no way I could decide on less favorites, here's a selection of
	six that I really enjoy(ed) working on:
</p>
<PersonalProjects projectIds={personalProjects}/>