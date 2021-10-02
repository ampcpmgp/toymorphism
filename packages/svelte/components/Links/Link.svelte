<script>
  import Text from "./../Texts/Text.svelte";

  export let size = "1rem";
  export let color;

  /** see: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attributes */
  export let attrs = {};
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<a {...attrs} style="--color: {color};">
  <Text {size} {color}><slot /></Text>
</a>

<style>
  a {
    display: inline-flex;
    text-decoration-color: var(--color);
  }
</style>
