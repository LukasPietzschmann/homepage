<script lang='ts'>
	import Accordion from '$lib/components/Accordion.svelte';
	import UniProjects, { type ProjectData } from '$lib/components/UniProjects.svelte';
	import { faFileLines, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
	import CardList from '$lib/components/CardList.svelte';

	const academicWork: ProjectData[] = [
		{
			thing: 'The Anatomy of R code',
			desc: `I coauthored a paper about the anatomy of real-world R code. The
                   paper conducts a large-scale, static analysis of more than 50
                   million lines of R code to identify their characteristics and the
                   features that are actually used. It was accepted at MSR 2024.`,
			links: [ { name: 'Paper', link: 'https://doi.org/10.1145/3643991.3644911' } ]
		},
		{
			thing: 'Bachelor Thesis',
			desc: `My bachelor thesis extended the MOSTflexiPL project by adding a
                   backend to the compiler that uses LLVM to lower MOSTflexiPL to
                   machine code.`,
			links: [
				{ name: 'Thesis', link: '/bachelor.pdf' },
				{
					name: 'Code',
					link: 'https://github.com/LukasPietzschmann/Bachelorarbeit'
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
	/* {
			thing: 'Project paper',
			desc: 'The project paper I wrote was all about the MOSTflexiPL compilation process. I developed a TUI that lets you view the compilers internal state during the whole process.',
			links: [
				{name: 'Paper', link: '/term_paper.pdf'},
				{name: 'Code', link: 'https://github.com/LukasPietzschmann/Projektarbeit'}
			]
		},
		{
			thing: 'Term paper',
			desc: 'For the course "computer networks" I wrote a short paper about HTTP and how it works. This is only a 10 page summary of everything so don\'t expect anything to advanced.',
			links: [{name: 'Paper', link: '/computer_networks.pdf'}]
		}*/
	];
</script>

<svelte:head>
	<title>University Work</title>
	<meta name='description' content="Lukas' work at the university">
</svelte:head>

<h1>University Work</h1>

<p>
	During my bachelor's and master's studies, I produced a variety of
	stuff. This, among others, includes slides, projects, papers, and theses.
	I compiled a little list of the more interesting things:
</p>
<Accordion name='Academic Work' open={true}>
	{#snippet head()}
		Academic Work (Theses, Paper)
	{/snippet}
	{#snippet details()}
		<CardList>
			<UniProjects data={academicWork} icon={faGraduationCap}/>
		</CardList>
	{/snippet}
</Accordion>
<Accordion name='Uni Projects'>
	{#snippet head()}
		University Projects
	{/snippet}
	{#snippet details()}
		<CardList>
			<UniProjects data={uniProjects} icon={faFileLines}/>
		</CardList>
	{/snippet}
</Accordion>