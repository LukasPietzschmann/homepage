<script lang="ts">
    import avatar from "$lib/assets/avatar.png?enhanced";
    import PersonalProjects, {
        type ProjectId
    } from "$lib/components/PersonalProjects.svelte";
    import UniProjects, {type ProjectData} from "$lib/components/UniProjects.svelte";
    import Accordion from "$lib/components/Accordion.svelte";
    import {faFileLines, faGraduationCap} from "@fortawesome/free-solid-svg-icons";

    const academicWork: ProjectData[] = [
        {
            thing: 'The Anatomy of R code',
            desc: `I coauthored a paper about the anatomy of real-world R code. The
                   paper conducts a large-scale, static analysis of more than 50
                   million lines of R code to identify their characteristics and the
                   features that are actually used. It was accepted at MSR 2024.`,
            links: [{name: 'Paper', link: 'https://doi.org/10.1145/3643991.3644911'}]
        },
        {
            thing: 'Bachelor Thesis',
            desc: `My bachelor thesis extended the MOSTflexiPL project by adding a
                   backend to the compiler that uses LLVM to lower MOSTflexiPL to
                   machine code.`,
            links: [
                {name: 'Thesis', link: '/bachelor.pdf'},
                {
                    name: 'Code',
                    link: 'https://github.com/LukasPietzschmann/Bachelorarbeit'
                }
            ]
        },
    ];
    const uniProjects: ProjectData[] = [
        {
            thing: "Haskell’s Lenses Lecture",
            desc: `For the course "Functional programming 2", I held a lecture about
                   lenses in Haskell. I also provided an exercise sheet.`,
            links: [
                {name: 'Slides', link: '/lenses_lecture.pdf'},
                {name: 'Exercise', link: '/lenses_exercise.pdf'}
            ]
        },
        {
            thing: 'Abstract Interpretation Poster',
            desc: `I extended the existing research project flowR by adding an abstract
                   interpretation module. Here you can see a poster that I prepared for
                   the interim fair.`,
            links: [{name: 'Poster', link: '/ai_poster.pdf'}]
        },
        {
            thing: 'Java dataflow graph Presentation',
            desc: `I built a module for an existing research project, that can generate
                   dataflow graphs for java. To explain hwo it works, I prepared some
                   slides and a poster.`,
            links: [
                {name: 'Slides', link: '/dfg_presentation.pdf'},
                {name: 'Poster', link: '/dfg_poster.pdf'}
            ]
        },
        {
            thing: 'SIMD Intrinsics Lightning Talk',
            desc: `I prepared a small talk about SIMD intrinsics in C++ for the lecture
                   "Concepts of concurrent, parallel, and distributed programming".`,
            links: [{name: 'Slides', link: '/simd_presentation.pdf'}]
        },
        {
            thing: 'Apache Spark Lecture',
            desc: `For the course "Distributed computing platforms in practice", I held
                   a lecture about Apache Spark and in memory processing.`,
            links: [
                {name: 'Slides', link: '/spark_lecture.pdf'},
                {name: 'Exercise', link: '/spark_exercise.pdf'},
                {name: 'Report', link: '/spark_report.pdf'}
            ]
        },
        /*{
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
    const personalProjects: ProjectId[] = [
        {owner: 'LukasPietzschmann', repo: 'awesome-beamer'},
        {owner: 'LukasPietzschmann', repo: 'telescope-tabs'},
        {owner: 'LukasPietzschmann', repo: 'Haskellator9000'},
        {owner: 'LukasPietzschmann', repo: 'LZip'}
    ];
</script>

<style>
	.avatar-container {
		display: flex;
		justify-content: center;
		font-size: 2rem;
		margin-bottom: 2rem;
		margin-top: 3rem;
	}

	.avatar-img {
		background-color: var(--highlight-background);
		border: 1px solid var(--highlight);
		border-radius: 100%;
		box-shadow: var(--box-shadow);
		width: 120px;
		height: 120px;
	}
</style>

<svelte:head>
	<title>Lukas Pietzschmann</title>
	<meta name="description" content="Lukas' personal home page"/>
</svelte:head>

<div class="avatar-container">
	<enhanced:img class="avatar-img" src={avatar} alt="Avatar"/>
</div>

<p>Hey! You just stumbled over my little corner on the internet :)</p>
<p>
	I'm Lukas, a German computer science student based near Ulm and I'm
	currently studying for my master's degree at the
	<a href="https://www.uni-ulm.de/en/">University of Ulm</a>.
</p>
<p>
	I enjoy coding in all kinds of languages, but C and C++ (and TeX &#128521)
	are probably the ones I am most experienced with. While many different
	things spark my interest, you can always get my attention by talking about
	compilers, functional programming, and typesetting.
</p>
<p>
	<Accordion name="Personal Projects">
		<span slot="head">Personal Projects</span>
		<div slot="details">
			<div style="margin-bottom: 1rem">Check out some personal projects I
				enjoy(ed) working on:
			</div>
			<PersonalProjects projectIds={personalProjects}/>
		</div>
	</Accordion>
	<Accordion name="Uni Projects">
		<span slot="head">University Projects</span>
		<div slot="details">
			<div style="margin-bottom: 1rem">
				This is a little collection of things I wrote or made for various
				uni-courses.
			</div>
			<UniProjects icon={faFileLines} data={uniProjects}/>
		</div>
	</Accordion>
	<Accordion name="Academic Work">
		<span slot="head">Academic Work</span>
		<div slot="details">
			<div style="margin-bottom: 1rem">
				Here you can find some of the academic work I did during my studies.
			</div>
			<UniProjects icon={faGraduationCap} data={academicWork}/>
		</div>
	</Accordion>
</p>