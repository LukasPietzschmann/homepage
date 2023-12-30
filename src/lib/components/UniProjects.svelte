<script context="module" lang="ts">
    export interface ProjectData {
        thing: string;
        desc: string;
        links: { name: string, link: string }[];
    }
</script>

<script lang="ts">
    export let data: ProjectData[];
</script>

<style>
    table {
        font-size: 1rem;
        background-color: var(--background);
        border: 1px solid var(--highlight);
        border-radius: var(--radius);
    }

    th {
        font-weight: bold;
        border-bottom: 1px solid;
        text-align: center;
    }

    th,
    td {
        border-right: 1px solid;
    }

    table,
    th,
    td {
        padding: 5px;
        border-color: var(--highlight);
    }

    th:last-child,
    td:last-child {
        border-right: none;
    }

    @media screen and (max-width: 750px) {
        thead {
            display: none;
        }

        tr {
            display: block;
            margin-bottom: 1rem;
            border-bottom: 1px solid;
            border-color: var(--highlight);
        }

        td {
            border-right: none;
            border-bottom: none;
            display: block;
            font-size: 0.8em;
            text-align: left;
        }

        tr:last-child {
            border-bottom: none;
        }

        td::before {
            white-space: pre-wrap;
            content: attr(data-label) ': ';
            float: left;
            font-weight: bold;
            text-transform: uppercase;
        }
    }
</style>

<table>
    <thead>
    <tr>
        <th>Thing</th>
        <th>Description</th>
        <th>Link</th>
    </tr>
    </thead>
    <tbody>
    {#each data as {thing, desc, links}}
        <tr>
            <td data-label="Thing">{thing}</td>
            <td data-label="Description">{desc}</td>
            <td data-label="Link">
                {#each links as {link, name}, i}
                    {#if i !== 0},{/if}<a href={link} target="_blank">{name}</a>
                {/each}
            </td>
        </tr>
    {/each}
</table>