<script context="module">
  import chroma from "chroma-js";

  /**
   * @param {string} color
   */
  function getBaseColors(color) {
    try {
      const chromaColor = chroma(color);
      const sideColor = chroma.mix(color, "black", 0.4).hex();
      const lightColor = chromaColor.brighten(1.5).hex();
      const bottomColor = chroma.mix(color, "black", 0.6).hex();

      return {
        sideColor,
        lightColor,
        bottomColor,
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
  import { colors } from "../../stores/theme.js";
  import { createEventDispatcher } from "svelte";

  /** @type {import("../../types/props").Color} */
  export let color = $colors.base;

  /** @type {"div" | "button"} */
  export let tag = "div";

  export let disabled = false;
  export let selected = false;

  /** @type {"normal" | "circle"} */
  export let shape = "normal";
  /** https://developer.mozilla.org/ja/docs/Web/CSS/transition-duration */
  export let transitionDuration = "80ms";
  /** https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius */
  export let borderRadius = "1rem";
  /** see: https://developer.mozilla.org/en-US/docs/Web/CSS/padding */
  export let padding = "initial";
  /** see: https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction */
  export let flexDirection = "initial";
  /** see: https://developer.mozilla.org/en-US/docs/Web/CSS/font-size */
  export let fontSize = "initial";
  /** see: https://developer.mozilla.org/en-US/docs/Web/CSS/gap */
  export let gap = "initial";

  /** @type {import("../../types/props").Color} */
  export let thickness = "0.6rem";

  const dispatch = createEventDispatcher();

  $: baseColors = getBaseColors(color);

  $: style = `
    ${$$restProps.style || ""};
    --base-color: ${color};
    --side-color: ${baseColors.sideColor};
    --light-color: ${baseColors.lightColor};
    --bottom-color: ${baseColors.bottomColor};
    --thickness: ${thickness};
    --transition-duration: ${transitionDuration};
    --border-radius: ${borderRadius};
    --padding: ${padding};
    --flex-direction: ${flexDirection};
    --font-size: ${fontSize};
    --gap: ${gap};
  `;
</script>

{#if tag === "div"}
  <div class="box-shadow-wrapper" {...$$restProps} {style}>
    <div class="base" class:circle={shape === "circle"} class:selected>
      <slot />
    </div>
  </div>
{:else}
  <!--
    ios safari needs ontouchstart & -webkit-tap-highlight-color
    https://stackoverflow.com/questions/45049873/how-to-remove-the-blue-highlight-of-button-on-mobile
  -->
  <button
    on:click={(e) => dispatch("click", e)}
    {...$$restProps}
    {style}
    {disabled}
    ontouchstart={() => {}}
    class="box-shadow-wrapper"
    selected
  >
    <div class="base" class:circle={shape === "circle"} class:selected>
      <slot />
    </div>
  </button>
{/if}

<style>
  .box-shadow-wrapper {
    padding: calc(var(--thickness) * 0.2);
    /* same top shadow */
    padding-top: calc(var(--thickness) * 0.32);
    /* same bottom shadow */
    padding-bottom: calc(var(--thickness) * 1.67);
    margin-bottom: var(--thickness);
  }

  .base {
    display: flex;
    flex-direction: var(--flex-direction);
    place-items: center;
    border-radius: var(--border-radius);
    background-color: var(--base-color);
    transition: box-shadow var(--transition-duration),
      transform var(--transition-duration);
    padding: var(--padding);
    font-size: var(--font-size);
    gap: var(--gap);

    /* prettier-ignore */
    box-shadow:
      /* top */
      0rem calc(var(--thickness) * -0.16) 0rem var(--light-color),
      0rem calc(var(--thickness) * -0.32) 0rem var(--side-color),

      /* left top & right top */
      calc(var(--thickness) * 0.14) calc(var(--thickness) * -0.16) 0rem var(--side-color),
      calc(var(--thickness) * -0.14) calc(var(--thickness) * -0.16) 0rem var(--side-color),

      /* left bottom & right bottom */
      calc(var(--thickness) * 0.14) calc(var(--thickness) * 0.32) 0rem var(--side-color),
      calc(var(--thickness) * -0.14) calc(var(--thickness) * 0.32) 0rem var(--side-color),
      calc(var(--thickness) * 0.10) calc(var(--thickness) * 0.64) 0rem var(--side-color),
      calc(var(--thickness) * -0.10) calc(var(--thickness) * 0.64) 0rem var(--side-color),

      /* bottom */
      0rem calc(var(--thickness) * 0.64) 0rem var(--side-color),
      0rem calc(var(--thickness) * 1.0) calc(var(--thickness) * 0.16) var(--bottom-color),
      0rem calc(var(--thickness) * 1.67) calc(var(--thickness) * 0.64) 0rem rgba(0, 0, 0, 0.5),

      /* blank */
      0 0 0 transparent
      ;

    /* for ios ref: https://qiita.com/siy1121/items/d5a5f198744cf882ef02 */
    transform: translateY(0);
  }

  .circle {
    border-radius: 50%;
  }

  button {
    /* css reset */
    background-color: transparent;
    border: none;
    outline: none;
    color: initial;
    contain: none;
    user-select: none;
    cursor: pointer;

    /* for ios */
    -webkit-user-select: none;
    appearance: none;

    /* for ios
      https://stackoverflow.com/questions/45049873/how-to-remove-the-blue-highlight-of-button-on-mobile
    */
    -webkit-tap-highlight-color: transparent;
  }

  .selected,
  button:active > .base {
    transform: translateY(calc(var(--thickness) * 1));

    /* prettier-ignore */
    box-shadow:
      /* top */
      0rem calc(var(--thickness) * -0.16) 0rem var(--side-color),

      /* left & right */
      calc(var(--thickness) * 0.16) 0rem 0rem var(--side-color),
      calc(var(--thickness) * -0.16) 0rem 0rem var(--side-color),

      /* bottom */
      0rem calc(var(--thickness) * 0.16) 0rem var(--side-color),

      /* blank */
      0 0 0 transparent
  }

  button:disabled {
    opacity: 0.5;
    pointer-events: none;
  }
</style>
