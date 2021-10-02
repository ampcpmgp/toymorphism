<script>
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul#attributes
  export let attrs = {};
</script>

<ul {...attrs}>
  <slot />
</ul>

<style>
  ul {
    list-style-type: none;
  }
</style>
