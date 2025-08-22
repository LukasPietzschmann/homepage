<script lang='ts'>
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import { faGithub } from '@fortawesome/free-brands-svg-icons';
	import { faGraduationCap, faBars, faEnvelope, faHome, faKey, faXmark } from '@fortawesome/free-solid-svg-icons';
	import { slide } from 'svelte/transition';
	import '@fortawesome/fontawesome-svg-core/styles.css';
	import Card from '$lib/components/Card.svelte';
	import ScrollToTop from '$lib/components/ScrollToTop.svelte';
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
	}

	let { children }: Props = $props();

	let responsive = $state(false);
	let sage = $state(false);
	let club = $state(false);
</script>

<style>
    footer div {
        margin: 2rem;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }

    .dot {
        margin: 0 15px;
    }

    nav {
        margin-top: 1rem;
    }

    nav a {
        text-decoration: none;
        color: var(--text);
    }

    nav .nav-link {
        float: right;
        margin-left: 2rem;
    }

    nav .nav-logo {
        display: inline-block;
    }

    nav #nav-toggle {
        display: none;
        user-select: none;
        color: var(--text);
    }

    @media screen and (max-width: 610px) {
        nav {
            overflow: hidden;
            max-height: 2rem;
            transition: all 0.6s cubic-bezier(0.5, 0.5, 0, 1);
        }

        nav.responsive {
            max-height: 12.5rem;
            border: var(--border);
            border-radius: var(--radius);
            padding: 1rem;
            box-shadow: var(--box-shadow);
            background-color: var(--background-200);
        }

        nav .nav-link {
            display: none;
            margin-left: 0;
            margin-top: 1rem;
        }

        nav.responsive .nav-link {
            float: none;
            display: block;
            text-align: left;
        }

        nav .nav-logo {
            display: block;
        }

        nav #nav-toggle {
            display: block;
            float: right;
            background: none;
            border: none;
            padding: 0;
            font: inherit;
            outline: inherit;
        }
    }

    #last-modified {
        color: var(--text-muted);
        margin-top: 2rem;
    }
</style>

<header>
	<nav class:responsive>
		<div class='nav-logo'>
			<a style='width: fit-content' href='/'>
				<FontAwesomeIcon icon={faHome}/>
				Home
			</a>
			<button id='nav-toggle' aria-label='Toggle Header Navigation' onmousedown={() => responsive = !responsive} type='button'>
				{#if responsive}
					<FontAwesomeIcon icon={faXmark}/>
				{:else}
					<FontAwesomeIcon icon={faBars}/>
				{/if}
			</button>
		</div>
		<a class='nav-link' href='/keys'>
			<FontAwesomeIcon icon={faKey}/>
			Keys
		</a>
		<a class='nav-link' data-umami-event='GitHub' href='https://github.com/LukasPietzschmann' rel='noopener noreferrer' target='_blank'>
			<FontAwesomeIcon icon={faGithub}/>
			GitHub
		</a>
		<!-- <a class='nav-link' data-umami-event='LinkedIn' href='https://www.linkedin.com/in/lukas-p-83aa261a3' rel='noopener noreferrer' -->
		<!-- 	target='_blank'> -->
		<!-- 	<FontAwesomeIcon icon={faLinkedin}/> -->
		<!-- 	LinkedIn -->
		<!-- </a> -->
		<a class='nav-link' data-umami-event='LinkedIn' href='https://www.uni-ulm.de/in/vs/inst/team/lukas-pietzschmann/' rel='noopener noreferrer'
			target='_blank'>
			<FontAwesomeIcon icon={faGraduationCap}/>
			Work
		</a>
		<a class='nav-link' data-umami-event='Email' href='mailto:lukas@pietzschmann.org'>
			<FontAwesomeIcon icon={faEnvelope}/>
			Email
		</a>
	</nav>
</header>

<noscript>
	<Card style='border: 1px solid darkred; background-color: rgba(255,0,0,0.1); margin-top: 2rem'>
		Whoops! It looks like you disabled JavaScript. Turn it back on for this site to function properly.
	</Card>
</noscript>

{@render children()}

<ScrollToTop/>

<footer>
	<div>
		<a href='/imprint'>
			Imprint
		</a>
		<div class='dot'>•</div>
		<a href='/privacy'>
			Privacy Policy
		</a>
		<div class='dot'>•</div>
		<a data-umami-event='Uptime' href='https://uptime.pietzschmann.org/status/public' rel='noopener noreferrer' target='_blank'>
			Uptime
		</a>
		<div class='dot'>•</div>
		<button class='link-btn' data-umami-event='Sage' onmousedown={() => {
			club = false;
			sage = !sage;
		}}>
			IPv6 Sage
		</button>
		<div class='dot'>•</div>
		<button class='link-btn' data-umami-event='512kb' onmousedown={() => {
			sage = false;
			club = !club;
		}}>
			512K Club
		</button>
	</div>
	{#if sage}
		<div transition:slide>
			<a data-umami-event='Sage site' href='https://ipv6.he.net' rel='noopener noreferrer' target='_blank'>
				<img rel='preload' alt='IPv6 Sage Certificate' src='https://ipv6.he.net/certification/create_badge.php?pass_name=AwesomeLuke&badge=1'/>
			</a>
		</div>
	{/if}
	{#if club}
		<div transition:slide>
			<a data-umami-event='512kb site' href='https://512kb.club' rel='noopener noreferrer' target='_blank'>
				<img rel='preload' height='40rem' alt='A proud member of the orange team of 512KB club' src='https://512kb.club/assets/images/orange-team.gif'/>
			</a>
		</div>
	{/if}
	<div id='last-modified'>Last modified: {BUILD_DATE}</div>
</footer>