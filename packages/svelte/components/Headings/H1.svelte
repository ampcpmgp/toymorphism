<script>
  import { colors } from "../../stores/theme";
  import Text from "../Texts/Text.svelte";

  export let size = "2rem";
  /** @type {string} */
  export let color = $colors.base;

  /** see: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p#attributes */
  export let attrs = {};
</script>

<h1 {...attrs}>
  <Text {size} {color}><slot /></Text>
</h1>

<style>
  h1 {
    margin: 0;
    line-height: 0;
    font-weight: inherit;
  }
</style>
