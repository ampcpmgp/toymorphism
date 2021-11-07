<script>
  import { colors } from "../../stores/theme";
  import Text from "../Texts/Text.svelte";

  export let size = "2rem";
  /** @type {string} */
  export let color = $colors.text;
  /** @type {import("../../types/props").TextShape} */
  export let shape = "float";
</script>

<h1 {...$$restProps}>
  <Text {size} {color} {shape}><slot /></Text>
</h1>

<style>
  h1 {
    margin: 0;
    line-height: 0;
    font-weight: inherit;
  }
</style>
