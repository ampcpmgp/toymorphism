<script context="module">
  export const key = {};
</script>

<script>
  import { getContext, setContext } from "svelte";

  const context = getContext(key);
  const parentHierarchy = context ? context.hierarchy : -1;
  const hierarchy = parentHierarchy + 1;
  setContext(key, {
    hierarchy,
  });

  /** counter Id */
  export let cid = `toymorphism-svelte-ol-${hierarchy}`;
</script>

<ol
  {...$$restProps}
  style="
    ${$$restProps.style || ''};
    --cid: {cid};
    --padding-inline-start: {hierarchy === 0 ? '0' : '1.5rem'}
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
