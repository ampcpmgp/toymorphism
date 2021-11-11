<script>
  import { colors } from "../../stores/theme";
  import Text from "../Texts/Text.svelte";

  export let size = "0.83rem";
  /** @type {string} */
  export let color = $colors.text;
  /** @type {import("../../types/props").TextShape} */
  export let shape = "float";
</script>

<h5 {...$$restProps}>
  <Text {size} {color} {shape}><slot /></Text>
</h5>

<style>
  h5 {
    margin: 0;
    line-height: 0;
    font-weight: inherit;
  }
</style>
