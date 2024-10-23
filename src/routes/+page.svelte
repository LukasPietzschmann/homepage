<script lang='ts'>
	import avatar from '$lib/assets/avatar.png?enhanced';
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
		background-color: var(--background-200);
		border: var(--border);
		border-radius: 100%;
		box-shadow: var(--box-shadow);
		width: 120px;
		height: 120px;
	}

	.button-container {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		width: 100%;
	}

	.button-container a {
		text-decoration: none;
		color: var(--text);
		background-color: var(--background-200);
		text-align: center;
		font-size: .9rem;

		flex: 1 1 calc(25% - 3rem);

		border-radius: var(--radius);
		border: var(--border);
		padding: 1rem;

		transition: var(--transition);
	}

	@media (max-width: 820px) {
		.button-container a {
			flex: 1 1 calc(50% - 3rem);
		}
	}

	@media (max-width: 450px) {
		.button-container a {
			flex: 1 1 100%;
		}
	}

	.button-container a:hover {
		background-color: var(--highlight);
		box-shadow: var(--box-shadow);
	}
</style>

<svelte:head>
	<title>Lukas Pietzschmann</title>
	<meta name='description' content="Lukas' personal home page"/>
</svelte:head>

<div class='avatar-container'>
	<enhanced:img class='avatar-img' alt='Avatar' src={avatar}/>
</div>

<p>Hey! Welcome to my little corner on the internet :)</p>
<p>
	I'm Lukas, a German computer science student based near Ulm and I'm
	currently studying for my master's degree at
	<a href='https://www.uni-ulm.de/en/'>Ulm University</a>.
</p>
<p>
	While I'm interested in a lot of different things, I definitely won't miss any
	chance to nerd about functional programming and typesetting. Although I'm most
	productive with the typical imperative languages, I generally enjoy coding in all
	kinds of languages and paradigms. Generally I'd say: if you know something that I
	don't, go ahead and share it with me. I'm always eager to learn new stuff.
</p>
<p class='button-container'>
	<a href='/projects'>Personal Projects</a>
	<a href='/uni'>University Work</a>
	<a href='/talks'>Talks</a>
	<a href='/services'>Self hosting</a>
</p>