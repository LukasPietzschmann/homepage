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

		flex: 1 1 calc(33% - 3rem);

		border-radius: var(--radius);
		border: var(--border);
		padding: 1rem;

		transition: var(--transition);
	}

	@media (max-width: 670px) {
		.button-container a {
			flex: 1 1 calc(50% - 3rem);
		}
	}

	@media (max-width: 500px) {
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
	I'm Lukas, a research assistant at the
	<a target='_blank' href='https://www.uni-ulm.de/en/in/vs/'>Institute of Distributed Systems</a>
	at Ulm University.
</p>
<p>
	Research-wise, I'm exploring potential privacy risks associated with public datasets
	stemming from empirical research. I'm currently particularly interested in possible
	attack vectors and the potential for re-identification of individuals in these
	datasets.
</p>
<p style='margin-top: 0;'>
	Besides that, I'm also working on the <a data-umami-event='BwNet' rel='noopener
	noreferrer' target='_blank' href="https://bwnet2.belwue.de/">bwNET2.0</a> project,
	which is concerned with the development of various parts of the <a
	data-umami-event='BelWü' rel='noopener noreferrer' target='_blank'
	href="https://www.belwue.de/">BelWü</a> network. My main focus is in the monitoring,
	collection, and provision of network data for the purpose of research and analysis.
</p>
<p>
	Outside of work, I'm interested in a lot of different things, but I definitely won't
	miss any chance to nerd about functional programming and typesetting. Check out my
	personal and university projects to see what I'm up to!
</p>
<p class='button-container'>
	<a href='/projects'>Personal Projects</a>
	<a href='/uni'>Academic Work</a>
	<a href='/talks'>Talks & Workshops</a>
</p>