<script>
  import { colors } from "../../stores/theme";

  import Frame from "../Frames/Frame.svelte";

  export let code = "";
  export let baseColor = $colors.base;
  export let textColor = $colors.text;

  /** see: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div#attributes */
  export let attrs = {};
</script>

<Frame color={baseColor}>
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
    margin: 10px;
    font-size: 14px;
  }

  code {
    color: var(--text-color);
  }
</style>
