<script lang="ts">
	import avatar from "$lib/assets/avatar.png?enhanced";
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

	.button-container {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		width: 100%;
	}

	.button-container a {
		text-decoration: none;
		color: var(--text);
		background-color: var(--highlight-background);
		text-align: center;
		font-size: .9rem;

		flex: 1 auto;

		border-radius: var(--radius);
		border: none;
		padding: 1rem;

		transition: background-color .2s, box-shadow .2s;
	}

	.button-container a:hover {
		background-color: var(--highlight);
		box-shadow: var(--box-shadow);
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
<p class="button-container">
	<a href="/projects">Personal Projects</a>
	<a href="/uni">University Work</a>
	<a href="/services">Hosted Services</a>
</p>