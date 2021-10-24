<script>
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul#attributes
  export let attrs = {};
  export let child = false;
</script>

<ul
  {...attrs}
  style={`
    ${attrs.style || ""};
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
