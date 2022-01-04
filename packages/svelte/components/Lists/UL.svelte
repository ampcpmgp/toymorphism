<script context="module">
  const key = {};
</script>

<script>
  import { getContext, setContext } from "svelte";

  const context = getContext(key);
  const parentHierarchy = context ? context.hierarchy : -1;
  const hierarchy = parentHierarchy + 1;

  setContext(key, {
    hierarchy,
  });
</script>

<ul
  {...$$restProps}
  style={`
    ${$$restProps.style || ""};
    --padding-inline-start: ${hierarchy === 0 ? "0" : "1.5rem"}
    `}
>
  <slot />
</ul>

<style>
  ul {
    margin: 0;
    padding: 0;
    padding-inline-start: var(--padding-inline-start);
    list-style-type: none;
  }
</style>
