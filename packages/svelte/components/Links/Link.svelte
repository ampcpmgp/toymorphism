<script>
  import { colors } from "../../stores";

  import Text from "./../Texts/Text.svelte";

  export let size = "1rem";
  /** @type {string} */
  export let color = $colors.text;
  /** @type {import("../../types/props").TextShape} */
  export let shape = "none";
  export let textDecorationLine = "underline";

  /** see: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attributes */
  export let attrs = {};
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<a
  {...attrs}
  style="{attrs.style ||
    ''}; --color: {color}; --text-decoration-line: {textDecorationLine};"
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
