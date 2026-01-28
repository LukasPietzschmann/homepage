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
		background: linear-gradient(0deg,var(--highlight) 0%, var(--background-200) 100%);
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

<p>Hey, I'm Lukas! Welcome to my little corner on the internet :)</p>
<p>
	A lot of what I love involves staring at a screen for hours on end. Whether that's
	<a href='/projects'>programming</a>, fiddling with some self-hosted <a
	href='/services'> services</a>, or even looking at the tiny screen of my camera as I
	try to get <s>the perfect</s> a <a data-umami-event='Pixelfed Portfolio'
	rel='noopener noreferrer' target='_blank'
	href="https://portfolio.pixelfed.social/luke.jpeg">decent shot</a>.
</p>
<p>
	This site covers some of the things I think are worth sharing, including both
	artifacts from my work as a PhD student as well as stuff I do in my free time.
</p>
<p>
	Have fun poking around!
</p>
<p class='button-container'>
	<a href='/projects'>Personal Projects</a>
	<a href='/uni'>Academic Work</a>
	<a href='/talks'>Talks & Workshops</a>
</p>