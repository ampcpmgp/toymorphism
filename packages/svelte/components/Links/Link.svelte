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
  /** @type {string} */
  export let href = "";
  /** @type {import("../../types/props").Target} */
  export let target = "_blank";
  /** @type {HTMLAnchorElement["rel"]}
   * see: https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types
   */
  export let rel = "noopener noreferrer";

  /** see: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attributes */
  export let attrs = {};
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<a
  {...attrs}
  style="{attrs.style ||
    ''}; --color: {color}; --text-decoration-line: {textDecorationLine};"
  href={href || attrs.href}
  target={target || attrs.target}
  rel={rel || attrs.rel}
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
