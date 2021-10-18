<script>
  import { color as _color } from "../../stores/theme";
  import Text from "../Texts/Text.svelte";

  export let size = "2rem";
  /** @type {string} */
  export let color = $_color.text;

  /** @type {import("../../types/props").TextShape} */
  export let shape = "none";

  /** see: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p#attributes */
  export let attrs = {};
</script>

<h1 {...attrs}>
  <Text {size} {color} {shape}><slot /></Text>
</h1>

<style>
  h1 {
    margin: 0;
    line-height: 0;
    font-weight: inherit;
  }
</style>
