<script>
  import { colors } from "../../stores/theme";

  import Frame from "../Frames/Frame.svelte";

  export let code = "";
  /** @type {import("../../types/props").Color} */
  export let frameColor = "white";
  /** @type {import("../../types/props").Color} */
  export let edgeColor = $colors.base;
  /** @type {import("../../types/props").Color} */
  export let textColor = $colors.text;
  /** @type {import("../../types/props").Padding} */
  export let padding = "1rem";
  /** @type {import("../../types/props").Padding} */
  export let edgePadding = "0.25rem";

  /** see: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/code#attributes */
  export let codeAttrs = {};
</script>

<Frame {frameColor} {edgeColor} {edgePadding} {...$$restProps}>
  <pre>
    <code {...codeAttrs} style="{codeAttrs.style || ''}; --text-color: {textColor}; --padding: {padding};">
      {code}
    </code>
  </pre>
</Frame>

<style>
  pre {
    margin: 0;
  }

  code {
    display: flex;
    padding: var(--padding);
    font-size: 0.8rem;
    color: var(--text-color);
    line-height: 1.5;
  }
</style>
