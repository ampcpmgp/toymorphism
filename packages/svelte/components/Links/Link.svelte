<script>
  import { colors } from "../../stores";

  import Text from "./../Texts/Text.svelte";

  /** @type {import("../../types/props").FontSize} */
  export let size = "1rem";
  /** @type {import("../../types/props").Color} */
  export let color = $colors.text;
  /** @type {import("../../types/props").TextShape} */
  export let shape = "none";
  /** @type {import("csstype").Properties["textDecoration"]} */
  export let textDecorationLine = "underline";
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<a
  {...$$restProps}
  style="{$$restProps.style || ''};
  --color: {color}; --text-decoration-line: {textDecorationLine};"
>
  <Text {size} {color} {shape}><slot /></Text>
</a>

<style>
  a {
    display: inline-flex;
    text-decoration-color: var(--color);
    text-decoration-line: var(--text-decoration-line);
  }
</style>
