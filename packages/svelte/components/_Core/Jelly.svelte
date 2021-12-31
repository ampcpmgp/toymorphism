<script context="module">
  import chroma from "chroma-js";

  /**
   * @param {string} color
   */
  export function getJellyColors(color) {
    try {
      const chromaColor = chroma(color);
      const topColor = chromaColor.brighten(0.5).hex();
      const edgeColor = chromaColor.darken(1.2).hex();
      const topEdgeColor = chromaColor.brighten(0.2).saturate(2).hex();
      const borderColor = chromaColor.saturate(1.5).alpha(0.2).hex();

      return {
        topColor,
        borderColor,
        edgeColor,
        topEdgeColor,
      };
    } catch (error) {
      console.warn(
        "Chroma could not convert color: ",
        color,
        "\n",
        "See more: https://developer.mozilla.org/en-US/docs/Web/CSS/color"
      );

      return {};
    }
  }
</script>

<script>
  import { colors } from "../../stores/theme";
  import { createEventDispatcher } from "svelte";

  /** @type {import("../../types/props").Color} */
  export let color = $colors.base;

  export let disabled = false;

  /** https://developer.mozilla.org/ja/docs/Web/CSS/transition-duration */
  export let transitionDuration = "80ms";

  /** Only one can be specified
   * see: https://developer.mozilla.org/en-US/docs/Web/CSS/padding */
  export let padding = "1rem";
  /** see: https://developer.mozilla.org/en-US/docs/Web/CSS/padding */
  export let paddingX = "";
  /** see: https://developer.mozilla.org/en-US/docs/Web/CSS/padding */
  export let paddingY = "";

  /** https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius */
  export let borderRadius = "2rem";

  /** see: https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction */
  export let flexDirection = "initial";

  /** see: https://developer.mozilla.org/en-US/docs/Web/CSS/gap */
  export let gap = "initial";

  const dispatch = createEventDispatcher();

  $: jellyColors = getJellyColors(color);
  $: style = `
    ${$$restProps.style || ""};
    --base-color: ${color};
    --top-color: ${jellyColors.topColor};
    --border-color: ${jellyColors.borderColor};
    --edge-color: ${jellyColors.edgeColor};
    --top-edge-color: ${jellyColors.topEdgeColor};
    --transition-duration: ${transitionDuration};
    --border-radius: ${borderRadius};
    --padding-x: ${paddingX || padding};
    --padding-y: ${paddingY || padding};
    --flex-direction: ${flexDirection};
    --gap: ${gap};
  `;
</script>

<!--
  ios safari needs ontouchstart & -webkit-tap-highlight-color
  https://stackoverflow.com/questions/45049873/how-to-remove-the-blue-highlight-of-button-on-mobile
-->
<button
  on:click={(e) => dispatch("click", e)}
  {...$$restProps}
  class="wrapper {$$restProps.class || ''}"
  {style}
  {disabled}
  ontouchstart={() => {}}
>
  <slot />
</button>

<style>
  .wrapper {
    display: flex;
    flex-direction: var(--flex-direction);
    gap: var(--gap);
    position: relative;
    padding: var(--padding-y) var(--padding-x);
    border-radius: var(--border-radius);

    transition: box-shadow var(--transition-duration);

    border: 1px solid var(--border-color);
    background-image: linear-gradient(
      var(--top-color) 0%,
      var(--base-color) 100%
    );

    /* prettier-ignore */
    box-shadow:
      0 0 calc(var(--padding-y) * 0.05) 0 var(--border-color),
      0 calc(var(--padding-y) * -0.2) calc(var(--padding-y) * 0.6) var(--edge-color) inset,
      0 calc(var(--padding-y) * 0.4) calc(var(--padding-y) * 0.2) rgba(255, 255, 255, 0.4) inset,
      0 calc(var(--padding-y) * 0.1) calc(var(--padding-y) * 0.3) 0 var(--top-edge-color) inset,
      /* blank */
      0 0 0 transparent
      ;
  }

  .wrapper::before,
  .wrapper::after {
    transition: opacity var(--transition-duration);
  }

  .wrapper::before {
    content: "";
    display: block;
    height: calc(var(--padding-y) * 0.1);
    position: absolute;
    top: calc(var(--padding-y) * 0.15);
    left: 50%;
    transform: translateX(-50%);
    width: calc(100% - calc(var(--border-radius) * 1));
    border-radius: 80%;

    opacity: 0.5;
    background-image: linear-gradient(
      -270deg,
      rgba(255, 255, 255, 0) 0%,
      #ffffff 20%,
      #ffffff 80%,
      rgba(255, 255, 255, 0) 100%
    );
  }

  .wrapper::after {
    content: "";
    display: block;
    height: calc(var(--padding-y) * 0.1);
    position: absolute;
    bottom: calc(var(--padding-y) * 0.2);
    left: 50%;
    transform: translateX(-50%);
    width: calc(100% - calc(var(--border-radius) * 1));
    background: #fff;
    border-radius: 100%;

    filter: blur(1px);
    opacity: 0.05;
    background-image: linear-gradient(
      -270deg,
      rgba(255, 255, 255, 0) 0%,
      #ffffff 20%,
      #ffffff 80%,
      rgba(255, 255, 255, 0) 100%
    );
  }

  .selected,
  button:active {
    box-shadow: initial;
  }

  .selected::before,
  button:active::before,
  .selected::after,
  button:active::after {
    opacity: 0;
  }

  button {
    cursor: pointer;

    /* for ios */
    -webkit-user-select: none;
    appearance: none;

    /* for ios
      https://stackoverflow.com/questions/45049873/how-to-remove-the-blue-highlight-of-button-on-mobile
    */
    -webkit-tap-highlight-color: transparent;
  }
</style>
