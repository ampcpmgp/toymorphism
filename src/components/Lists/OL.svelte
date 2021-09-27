<script>
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol#attributes
  export let attrs = {};
</script>

<ol {...attrs}>
  <slot />
</ol>

<style>
  ol {
    counter-reset: section;
    list-style-type: none;
  }
</style>
