<script>
  import { colors } from "../../stores/theme";
  import Text from "../Texts/Text.svelte";

  export let size = "1rem";
  /** @type {string} */
  export let color = $colors.text;
  /** @type {import("../../types/props").TextShape} */
  export let shape = "float";

  /** see: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p#attributes */
  export let attrs = {};
</script>

<h4 {...attrs}>
  <Text {size} {color} {shape}><slot /></Text>
</h4>

<style>
  h4 {
    margin: 0;
    line-height: 0;
    font-weight: inherit;
  }
</style>
