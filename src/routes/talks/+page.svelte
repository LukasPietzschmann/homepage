<script lang='ts'>
	import Talks, { type TalkData } from '$lib/components/Talks.svelte';
	import CardList from '$lib/components/CardList.svelte';

	const talks: TalkData[] = [
		{
			title: 'Constrained Zig',
			location: 'Zigtoberfest 2024',
			desc: 'Constraint programming, unlike imperative programming, focuses on defining\
                   the desired properties of a result rather than specifying a sequence of steps.\
                   We will explore interesting properties of this approach using Constraint\
                   Handling Rules embedded in the ZIG language.',
			link: '/talks/zigtoberfest24',
			reload: true,
		},
		{
			title: 'You Shall Not Block',
			location: 'Zigtoberfest 2025',
			desc: 'Locks are common in concurrent programming but can introduce performance\
                   issues, deadlocks, and complexity. Lock-free data structures use atomic\
                   operations to avoid these problems, enabling smoother and faster execution.\
                   We’ll explore how to implement them in Zig, when they’re most effective,\
                   and also touch on concepts like progress guarantees and levels of “freeness”.',
			link: '/talks/zigtoberfest25',
			reload: true,
		},
	];
</script>

<svelte:head>
	<title>Talks</title>
	<meta name='description' content='Talks Lukas gave at various occasions'>
</svelte:head>

<h1>Talks</h1>

<CardList>
	<Talks data={talks}/>
</CardList>