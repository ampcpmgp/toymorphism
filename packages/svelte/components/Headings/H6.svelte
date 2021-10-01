<script>
  import Text from "../Texts/Text.svelte";

  export let size = "0.67rem";
  export let color;

  /** see: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p#attributes */
  export let attrs = {};
</script>

<h6 {...attrs}>
  <Text {size} {color}><slot /></Text>
</h6>

<style>
  h6 {
    margin: 0;
    line-height: 0;
    font-weight: inherit;
  }
</style>
