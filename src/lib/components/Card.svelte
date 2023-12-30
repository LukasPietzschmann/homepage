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

    .card:hover {
        transform: scale(1.035);
        --box-shadow: 0 4px 32px 3px var(--highlight);
    }
</style>

<div class="display: inline-block">
    <div class="card">
        <slot/>
    </div>
</div>
