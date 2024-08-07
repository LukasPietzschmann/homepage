<svelte:head>
	<title>Self hosted services</title>
	<meta name="description" content="Lukas' self hosted services">
</svelte:head>

<script lang="ts">
	import darkTopology from "$lib/assets/darkTopology.png?enhanced";
	import lightTopology from "$lib/assets/lightTopology.png?enhanced";
	import {faBoxOpen} from "@fortawesome/free-solid-svg-icons";
	import Accordion from "$lib/components/Accordion.svelte";
	import Card from "$lib/components/Card.svelte";
	import {FontAwesomeIcon} from "@fortawesome/svelte-fontawesome";

	const services = [
		{
			thing: "Homepage",
			desc: "Well, you're currently there 😆",
			link: "https://lukas.pietzschmann.org"
		}, {
			thing: 'NextCloud',
			desc: 'My personal NextCloud instance.',
			link: 'https://cloud.pietzschmann.org'
		}, {
			thing: 'AwesomeSearch',
			desc: 'I host a SearXNG instance to keep my searches private and have better control over the results.',
			link: 'https://search.pietzschmann.org'
		}, {
			thing: 'API',
			desc: 'A simple REST API that I currently only use to cache GitHub API responses for this site.',
			link: 'https://api.pietzschmann.org'
		}, {
			thing: 'Analytics',
			desc: 'I host Umami to (GDPR compliantly) track visits to my homepage and search site.',
			link: 'https://analytics.pietzschmann.org'
		}, {
			thing: 'Uptime',
			desc: 'Uptime Kuma tracks the uptime of all services I host. There\'s also a public status page available.',
			link: 'https://uptime.pietzschmann.org'
		}, {
			thing: 'Finances',
			desc: 'I use Actual to track my finance stuff (now I know that I spend way to much on sweets lol)',
			link: 'https://actual.pietzschmann.org'
		}, {
			thing: 'Minecraft',
			desc: 'From time to time I play some good old minecraft with a friend of mine. If you wanna join, mail me :)',
			link: 'https://pietzschmann.org'
		}
	]
</script>

<style>
	.card-wrapper {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		gap: 1.5rem 1.5rem;
	}

	.topology {
		width: 100%;
		height: auto;
	}

	.light {
		display: block;
	}

	.dark {
		display: none;
	}

	@media (prefers-color-scheme: dark) {
		.light {
			display: none;
		}

		.dark {
			display: block;
		}
	}
</style>

<h1>Services</h1>
<enhanced:img class="topology dark" src={darkTopology} alt="Services"/>
<enhanced:img class="topology light" src={lightTopology} alt="Services"/>
<p>
	I host all my services as Docker containers on a VPS at
	<a target="_blank" rel="noreferrer noopener" data-umami-event="NetCup"
	   href="https://netcup.eu">NetCup</a>.
	Among these, only two containers are exposed to the public: Caddy and Minecraft.
	Connections to the Minecraft container are direct and not proxied or relayed. In
	contrast, all other requests are routed through Caddy, which either forwards them
	to the appropriate container or serves static files directly.
</p>
<p>
	To facilitate this setup, the Caddy container is configured to share a network with
	all service containers. However, for services requiring, e.g., a database (like
	NextCloud), the database remains inaccessible to Caddy. Instead, it is connected
	through a dedicated network shared exclusively between the service and the database
	container.
</p>
<Accordion name="Services">
	<span slot="head">Services</span>
	<div slot="details">
		<div style="margin-bottom: 1rem">
			Here is a collections of services I'm currently hosting:
		</div>
		<div class="card-wrapper">
			{#each services as {thing, desc, link} (thing)}
				<Card>
					<div>
						<FontAwesomeIcon icon={faBoxOpen}/>
						<a target="_blank" data-umami-event={`Service ${thing}`}
						   href={link}>{thing}</a>
					</div>
					{desc}
				</Card>
			{/each}
		</div>
	</div>
</Accordion>