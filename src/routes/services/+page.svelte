<svelte:head>
	<title>Self hosted services</title>
	<meta name='description' content="Lukas' self hosted services">
</svelte:head>

<script lang='ts'>
	import Accordion from '$lib/components/Accordion.svelte';
	import CardGrid from '$lib/components/CardGrid.svelte';
	import Services, { type ServiceData } from '$lib/components/Services.svelte';

	const services: ServiceData[] = [
		{
			thing: 'Homepage',
			desc: 'Well, you\'re currently there 😆',
			link: 'https://lukas.pietzschmann.org'
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
			link: 'https://api.pietzschmann.org/docs'
		}, {
			thing: 'Analytics',
			desc: 'I host Umami to (GDPR compliantly) track visits to my homepage and search site.',
			link: 'https://analytics.pietzschmann.org'
		}, {
			thing: 'Uptime',
			desc: 'Uptime Kuma tracks the uptime of all services I host. There\'s also a public status page available.',
			link: 'https://uptime.pietzschmann.org/status/public'
		}, {
			thing: 'Finances',
			desc: 'I use Actual to track my finance stuff (now I know that I spend way to much on sweets lol)',
			link: 'https://actual.pietzschmann.org'
		}, /* {
			thing: 'Minecraft',
			desc: 'From time to time I play some good old minecraft with a friend of mine. If you wanna join, mail me :)',
			link: 'https://pietzschmann.org'
		}, */ {
			thing: 'RSS Bridge',
			desc: 'To make more websites RSS compatible, I run my own instance of RSS Bridge.',
			link: 'https://rss.pietzschmann.org/'
		}, {
			thing: 'RSS Reader',
			desc: 'I use MiniFlux to keep up with all the news I care about.',
			link: 'https://news.pietzschmann.org'
		}, {
			thing: 'Tor Relay',
			desc: 'I run a Tor relay to help the Tor network stay healthy and fast.',
			link: 'https://metrics.torproject.org/rs.html#details/661F7F281A1A4658C570BA1DCBA5D4373DEF93D1'
		}
	];
</script>

<h1>Services</h1>
<p>
	I host everything on three VPSs at
	<a data-umami-event='NetCup' href='https://netcup.eu' rel='noreferrer noopener'
		target='_blank'>NetCup</a>.
	I recently switched from using Docker Compose for everything to a NixOS-based setup.
	Having a version-controlled declarative configuration for the entire system is really
	nice when you want to tinker with stuff and thus need to rollback changes sometimes.
</p>
<p>
	Please don't (D)DoS my services though 😅
</p>
<p>
	<CardGrid>
		<Services data={services}/>
	</CardGrid>
</p>