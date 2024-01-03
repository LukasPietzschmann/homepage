<script lang="ts">
    import avatar from '$lib/assets/avatar.png?enhanced';
    import PersonalProjects, {type ProjectId} from "$lib/components/PersonalProjects.svelte";
    import UniProjects, {type ProjectData} from "$lib/components/UniProjects.svelte";

    const uniProjects: ProjectData[] = [
        {
            thing: 'Java dataflow graph',
            desc: 'I built a module for an existing research project, that can generate dataflow graphs for java. To explain the stuff, I prepared some slides and a poster.',
            links: [{name: 'Slides', link: '/dfg_presentation.pdf'}, {name: 'Poster', link: '/dfg_poster.pdf'}]
        },
        {
            thing: 'C++ SIMD Intrinsics',
            desc: 'I prepared a small talk about SIMD intrinsics in C++ for a small grade bonus.',
            links: [{name: 'Slides', link: '/simd_presentation.pdf'}]
        },
        {
            thing: 'Spark Paper',
            desc: 'After the course "distributed computing platforms in practice" I wrote a small report summarizing the most important concepts of Apache Spark.',
            links: [{name: 'Report', link: '/spark_report.pdf'}]
        },
        {
            thing: 'Spark Lecture',
            desc: 'For the course "distributed computing platforms in practice" I held a lecture about Apache Spark and in memory processing. I also provided a short exercise sheet.',
            links: [
                {name: 'Slides', link: '/spark_lecture.pdf'},
                {name: 'Exercise', link: '/spark_exercise.pdf'}
            ]
        },
        {
            thing: 'Bachelor thesis',
            desc: 'My bachelor thesis extended the MOSTflexiPL project. This time I implemented a compiler-backend that compiled MOSTflexiPl code into machine code using LLVM.',
            links: [
                {name: 'Thesis', link: '/bachelor.pdf'},
                {name: 'Code', link: 'https://github.com/LukasPietzschmann/Bachelorarbeit'}
            ]
        },
        {

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
        }
    ];
    const personalProjects: ProjectId[] = [
        'LukasPietzschmann/awesome-beamer',
        'LukasPietzschmann/telescope-tabs',
        'LukasPietzschmann/PL0-Compiler',
        'LukasPietzschmann/LZip',
    ];

    let activeTab = 0;
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

    .tab-button-wrapper {
        margin: 1.5rem auto;
        display: grid;
        grid-template-columns: 1fr 1fr;
        border-radius: 8px;
        box-shadow: var(--box-shadow);
    }

    .tab-button-wrapper > #tab1 {
        border-top-left-radius: var(--radius);
        border-bottom-left-radius: var(--radius);
    }

    .tab-button-wrapper > #tab2 {
        border-top-right-radius: var(--radius);
        border-bottom-right-radius: var(--radius);
    }

    .tab-content-wrapper {
        padding: 1rem;
        background-color: var(--highlight-background);
        border-radius: var(--radius);
        box-shadow: var(--box-shadow);
        border: 1px solid var(--highlight);
    }

    .tab-button {
        color: var(--text);
        padding: 10px;
        background-color: var(--highlight-background);
        font-size: 1rem;
        transition: background-color 0.2s ease-in-out;
        cursor: pointer;
        border: 1px solid var(--highlight);
    }

    .tab-button:hover {
        background-color: var(--highlight);
    }

    .tab-button.active {
        background-color: var(--background);
        cursor: default;
    }

    .tab-content {
        display: none;
    }

    .tab-content.active {
        display: block;
    }
</style>

<svelte:head>
    <title>Lukas Pietzschmann</title>
</svelte:head>

<div class="avatar-container">
    <enhanced:img class="avatar-img" src={avatar} alt="Avatar"/>
</div>

<p>Hey! You just stumbled over my little corner on the internet :)</p>
<p>
    I'm Lukas, a german computer science student based near Ulm and I'm
    currently studying for my master's degree at the
    <a href="https://www.uni-ulm.de/en/">University of Ulm</a>.
</p>
<p>
    I enjoy coding in all kinds of languages, but C and C++ (and TeX &#128521)
    are probably the ones I am most experienced with. While many different
    things spark my interest, you can always get my attention by talking about
    compilers, functional programming, and typesetting.
</p>

<div>
    <div class="tab-button-wrapper">
        <button id="tab1" class="tab-button" class:active={activeTab === 0} on:click={() => activeTab = 0}>
            Personal Projects
        </button>
        <button id="tab2" class="tab-button" class:active={activeTab === 1} on:click={() => activeTab = 1}>
            University Stuff
        </button>
    </div>
    <div class="tab-content-wrapper">
        <div class="tab-content" class:active={activeTab === 0}>
            <div style="margin-bottom: 1rem">Check out some personal projects I enjoy(ed) working on:</div>
            <PersonalProjects projectIds={personalProjects}/>
        </div>
        <div class="tab-content" class:active={activeTab === 1}>
            <div style="margin-bottom: 1rem">
                This is a little collection of things I wrote or made for various uni-courses, sorted by date
                (descending).
            </div>
            <UniProjects data={uniProjects}/>
        </div>
    </div>
</div>