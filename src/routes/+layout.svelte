<script lang="ts">
    import {FontAwesomeIcon} from '@fortawesome/svelte-fontawesome';
    import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
    import {faHome, faBars, faXmark, faEnvelope, faKey} from "@fortawesome/free-solid-svg-icons";
    import {config} from '@fortawesome/fontawesome-svg-core'
    import '@fortawesome/fontawesome-svg-core/styles.css'
    import Card from "$lib/components/Card.svelte";

    config.autoAddCss = false

    let responsive = false;
</script>

<style>
    footer {
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
            border: 1px solid var(--highlight);
            border-radius: var(--radius);
            padding: 1rem;
            box-shadow: var(--box-shadow);
            background-color: var(--highlight-background);
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
            cursor: pointer;
            outline: inherit;
        }
    }
</style>

<header>
    <nav class:responsive>
        <div class="nav-logo">
            <a href="/" style="width: fit-content">
                <FontAwesomeIcon icon={faHome}/>
                Home
            </a>
            <button type="button" id="nav-toggle" on:mousedown={() => responsive = !responsive}>
                {#if responsive}
                    <FontAwesomeIcon icon={faXmark}/>
                {:else}
                    <FontAwesomeIcon icon={faBars}/>
                {/if}
            </button>
        </div>
        <a class="nav-link" href="/keys">
            <FontAwesomeIcon icon={faKey}/>
            Keys
        </a>
        <a class="nav-link" data-umami-event="GitHub" href="https://github.com/LukasPietzschmann" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub}/>
            GitHub
        </a>
        <a class="nav-link" data-umami-event="LinkedIn" href="https://www.linkedin.com/in/lukas-p-83aa261a3" target="_blank"
           rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin}/>
            LinkedIn
        </a>
        <a class="nav-link" data-umami-event="Email" href="mailto:lukas.pietzschmann@outlook.de">
            <FontAwesomeIcon icon={faEnvelope}/>
            Email
        </a>
    </nav>
</header>

<noscript>
    <Card hover={false} style="border: 1px solid darkred; background-color: rgba(255,0,0,0.1); margin-top: 2rem">
        Whoops! It looks like you disabled JavaScript. Turn it back on for this site to function properly.
    </Card>
</noscript>

<slot/>

<footer>
    <a href="/imprint">
        Imprint
    </a>
    <div class="dot">•</div>
    <a href="/privacy">
        Privacy Policy
    </a>
    <div class="dot">•</div>
    <a data-umami-event="Uptime" href="https://uptime.pietzschmann.org/status/public" target="_blank" rel="noopener noreferrer">
        Uptime
    </a>
    <div class="dot">•</div>
    <a data-umami-event="Analytics" href="https://analytics.pietzschmann.org/share/rpUDid7d9z2Cuzxm/lukas.pietzschmann.org" target="_blank" rel="noopener noreferrer">
        Analytics
    </a>
</footer>
