<script>
  import { colors } from "../../stores/theme";

  import Frame from "../Frames/Frame.svelte";

  export let code = "";
  /** @type {string} */
  export let frameColor = $colors.base;
  /** @type {string} */
  export let textColor = $colors.text;
  /** @type {import("../../types/props").Padding} */
  export let padding = "1rem";
  /** @type {import("../../types/props").Padding} */
  export let edgePadding = "0.25rem";

  /** see: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div#attributes */
  export let attrs = {};
  /** see: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/code#attributes */
  export let codeAttrs = {};
</script>

<Frame {frameColor} {edgePadding} {attrs}>
  <pre>
    <code {...codeAttrs} style="{codeAttrs.style || ''}; --text-color: {textColor}; --padding: {padding};">
      {code}
    </code>
  </pre>
</Frame>

<style>
  code {
    display: flex;
    padding: var(--padding);
    font-size: 0.8rem;
    color: var(--text-color);
  }
</style>
