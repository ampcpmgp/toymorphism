<script>
  import { getBaseColors } from "../../utils/color.js";
  import { colors } from "../../stores/theme.js";
  import { createEventDispatcher } from "svelte";

  export let color = $colors.base;
  /** @type {"div" | "button"} */
  export let tag = "div";
  export let disabled = false;
  export let selected = false;
  /** @type {"normal" | "circle"} */
  export let shape = "normal";

  /** see: https://developer.mozilla.org/en-US/docs/Web/CSS/length */
  export const thickness = "0.6rem";

  /**
   * see: https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes
   * and specified tag attributes
   */
  export let attrs = {};

  const dispatch = createEventDispatcher();

  $: baseColors = getBaseColors(color);
  $: style = `
    ${attrs.style};
    --base-color: ${color};
    --side-color: ${baseColors.sideColor};
    --light-color: ${baseColors.lightColor};
    --bottom-color: ${baseColors.bottomColor};
    --thickness: ${thickness};
  `;
</script>

{#if tag === "div"}
  <div
    class="base"
    class:circle={shape === "circle"}
    class:selected
    {...attrs}
    {style}
  >
    <slot />
  </div>
{:else}
  <button
    on:click={(e) => dispatch("click", e)}
    class="base"
    class:circle={shape === "circle"}
    class:selected
    {...attrs}
    {style}
    {disabled}
  >
    <slot />
  </button>
{/if}

<style>
  .base {
    display: inline-grid;
    place-items: center;
    border-radius: 1rem;
    background-color: var(--base-color);
    transition: box-shadow 100ms, transform 100ms;

    /* prettier-ignore */
    box-shadow:
      /* top */
      0rem calc(var(--thickness) * -0.16) 0rem var(--light-color),
      0rem calc(var(--thickness) * -0.32) 0rem var(--side-color),

      /* left top & right top */
      calc(var(--thickness) * 0.14) calc(var(--thickness) * -0.16) 0rem var(--side-color),
      calc(var(--thickness) * -0.14) calc(var(--thickness) * -0.16) 0rem var(--side-color),

      /* left & right */
      calc(var(--thickness) * 0.16) 0rem 0rem var(--side-color),
      calc(var(--thickness) * -0.16) 0rem 0rem var(--side-color),

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
  }

  .circle {
    border-radius: 50%;
  }

  button {
    /* css reset */
    background-color: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    appearance: none;
    color: initial;

    /* custom style */
    cursor: pointer;
  }

  .selected,
  button:active {
    transform: translateY(calc(var(--thickness) * 1));

    /* prettier-ignore */
    box-shadow:
      /* top */
      0rem calc(var(--thickness) * -0.16) 0rem var(--side-color),

      /* left top & right top */
      calc(var(--thickness) * 0.14) calc(var(--thickness) * -0.16) 0rem var(--side-color),
      calc(var(--thickness) * -0.14) calc(var(--thickness) * -0.16) 0rem var(--side-color),

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
