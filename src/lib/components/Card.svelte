<script lang="ts">
    export let hover = true;
    export let style = '';
    export let classes = '';
</script>

<style>
    .card {
        font-size: 1rem;
        background: var(--background);
        border: 1px solid var(--highlight);
        border-radius: var(--radius);
        box-shadow: var(--box-shadow);
        padding: 1rem;
        transform: scale(1);
        transition: all .2s ease-in-out;
    }

    .hover-card:hover {
        transform: scale(1.035);
        --box-shadow: 0 4px 32px 3px var(--highlight);
    }
</style>

<div class="display: inline-block">
    <div class:hover-card={hover} class={`card ${classes}`} {style}>
        <slot/>
    </div>
</div>
