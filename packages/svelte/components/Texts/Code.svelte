<script>
  import { colors } from "../../stores/theme";

  import Frame from "../Frames/Frame.svelte";

  export let code = "";
  /** @type {string} */
  export let frameColor = $colors.base;
  /** @type {string} */
  export let textColor = $colors.text;

  /** see: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div#attributes */
  export let attrs = {};
</script>

<Frame {frameColor}>
  <pre
    class="wrapper">
    <code {...attrs} style="{attrs.style || ''}; --text-color: {textColor};">
      {code}
    </code>
  </pre>
</Frame>

<style>
  .wrapper {
    white-space: pre-wrap;
    margin: 1rem;
    font-size: 0.8rem;
  }

  code {
    color: var(--text-color);
  }
</style>
