<script>
  import { colors } from "../../stores/theme";
  import Text from "../Texts/Text.svelte";

  export let size = "1.5rem";
  /** @type {string} */
  export let color = $colors.text;
  /** @type {import("../../types/props").TextShape} */
  export let shape = "float";
</script>

<h2 {...$$restProps}>
  <Text {size} {color} {shape}><slot /></Text>
</h2>

<style>
  h2 {
    margin: 0;
    line-height: 0;
    font-weight: inherit;
  }
</style>
