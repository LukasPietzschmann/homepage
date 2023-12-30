<script>
    import {browser} from "$app/environment";
</script>

<svelte:head>
    <title>Privacy Policy</title>
</svelte:head>

<h1>Privacy Policy</h1>
<h2>Tracking</h2>
<p>This website and other related websites use Matomo for analytics, hosted on a root server at NetCup. The tracking
    method does not use any cookies and no data is sent to third-party services. No personally identifiable information
    is collected.
</p>
<p>You can opt out of tracking by clicking the checkbox below:</p>
{#if browser}
    <div id="matomo-opt-out"></div>
    <script src="https://matomo.pietzschmann.org/index.php?module=CoreAdminHome&action=optOutJS&divId=matomo-opt-out&language=auto&showIntro=1">
    </script>
{/if}
<p style="color: var(--highlight)">
    If you don’t see any checkbox, Matomo might be blocked by an Adblocker. In this case, no tracking data is
    collected.
</p>
<p> The collected data is used to see which pages are being accessed. The following data is being collected: </p>
<ul>
    <li>IP address (two bytes masked)</li>
    <li>Information sent by the browser</li>
    <li>Referrer data</li>
</ul>
<p>All raw data is deleted after 180 days. Aggregated data is deleted after 12 months.</p>