<script>
  export let child = false;
</script>

<ul
  {...$$restProps}
  style={`
    ${$$restProps.style || ""};
    --padding-inline-start: ${child ? "1.5rem" : "0"}
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
