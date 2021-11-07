<script>
  export let child = false;

  /** counter Id */
  export let cid = "toymorphism-svelte-ol";
</script>

<ol
  {...$$restProps}
  style="
    ${$$restProps.style || ''};
    --cid: {cid};
    --padding-inline-start: {child ? '1.5rem' : '0'}
    "
>
  <slot />
</ol>

<style>
  ol {
    margin: 0;
    padding-inline-start: var(--padding-inline-start);
    counter-reset: var(--cid);
    list-style-type: none;
  }
</style>
