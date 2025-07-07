<script lang='ts'>
	import Accordion from '$lib/components/Accordion.svelte';
	import UniProjects, { type ProjectData } from '$lib/components/UniProjects.svelte';
	import Paper from '$lib/components/Paper.svelte';
	import { faFileLines, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
	import CardList from '$lib/components/CardList.svelte';
	import publications from '$lib/assets/publications.json';

	const theses: ProjectData[] = [
		{
			thing: 'Master\'s Thesis',
			desc: `For my master's thesis I implemented a novel approach to calculate
			       code coverage for R packages. The approach only consideres code that
			       is executed and relevant for the test's result as covered. To
			       evaluate it, I implemented mutatr: a mutation testing frameword for
			       R.`,
			links: [
				{
					name: 'Slicing Coverage',
					link: 'https://github.com/flowr-analysis/slicing-coverage-r-package'
				},
				{
					name: 'MutatR',
					link: 'https://github.com/flowr-analysis/mutatr'
				}
			]
		},
		{
			thing: 'Bachelor\'s Thesis',
			desc: `My bachelor's thesis extended the MOSTflexiPL project by adding a
                   backend to the compiler that uses LLVM to lower MOSTflexiPL code to
                   machine code.`,
			links: [
				{
					name: 'Code Generation',
					link: 'https://github.com/LukasPietzschmann/Bachelorarbeit/tree/master/Codegen'
				}
			]
		},
	];
	const uniProjects: ProjectData[] = [
		{
			thing: 'Haskell’s Lenses Lecture',
			desc: `For the course "Functional programming 2", I held a lecture about
                   lenses in Haskell. I also provided an exercise sheet.`,
			links: [
				{ name: 'Slides', link: '/lenses_lecture.pdf' },
				{ name: 'Exercise', link: '/lenses_exercise.pdf' }
			]
		},
		{
			thing: 'Abstract Interpretation Poster',
			desc: `I extended the existing research project flowR by adding an abstract
                   interpretation module. Here you can see a poster that I prepared for
                   the interim fair.`,
			links: [ { name: 'Poster', link: '/ai_poster.pdf' } ]
		},
		{
			thing: 'Java dataflow graph Presentation',
			desc: `I built a module for an existing research project, that can generate
                   dataflow graphs for java. To explain hwo it works, I prepared some
                   slides and a poster.`,
			links: [
				{ name: 'Slides', link: '/dfg_presentation.pdf' },
				{ name: 'Poster', link: '/dfg_poster.pdf' }
			]
		},
		{
			thing: 'SIMD Intrinsics Lightning Talk',
			desc: `I prepared a small talk about SIMD intrinsics in C++ for the lecture
                   "Concepts of concurrent, parallel, and distributed programming".`,
			links: [ { name: 'Slides', link: '/simd_presentation.pdf' } ]
		},
		{
			thing: 'Apache Spark Lecture',
			desc: `For the course "Distributed computing platforms in practice", I held
                   a lecture about Apache Spark and in memory processing.`,
			links: [
				{ name: 'Slides', link: '/spark_lecture.pdf' },
				{ name: 'Exercise', link: '/spark_exercise.pdf' },
				{ name: 'Report', link: '/spark_report.pdf' }
			]
		},
	];
</script>

<svelte:head>
	<title>Academic Work</title>
	<meta name='description' content="Lukas' work at the university">
</svelte:head>

<h1>Academic Work</h1>

<p>
	This page contains most of the artifacts I created at university, both during my
	studies and as a research assistant.
</p>
<Accordion name='Publications' open={true}>
	{#snippet head()}
		Publications
	{/snippet}
	{#snippet details()}
		<CardList>
			{#each publications as paper (paper.ID)}
				<Paper data={paper} />
			{/each}
		</CardList>
	{/snippet}
</Accordion>
<Accordion name='Theses'>
	{#snippet head()}
		Theses
	{/snippet}
	{#snippet details()}
		<CardList>
			<UniProjects data={theses} icon={faGraduationCap}/>
		</CardList>
	{/snippet}
</Accordion>
<Accordion name='Uni Projects'>
	{#snippet head()}
		Projects and Slides
	{/snippet}
	{#snippet details()}
		<CardList>
			<UniProjects data={uniProjects} icon={faFileLines}/>
		</CardList>
	{/snippet}
</Accordion>