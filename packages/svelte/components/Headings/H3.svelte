<script>
  import { colors } from "../../stores/theme";
  import Text from "../Texts/Text.svelte";

  export let size = "1.17rem";
  /** @type {string} */
  export let color = $colors.text;
  /** @type {import("../../types/props").TextShape} */
  export let shape = "float";
</script>

<h3 {...$$restProps}>
  <Text {size} {color} {shape}><slot /></Text>
</h3>

<style>
  h3 {
    margin: 0;
    line-height: 0;
    font-weight: inherit;
  }
</style>
