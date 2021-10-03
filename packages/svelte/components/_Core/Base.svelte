<script>
  import { getBaseColors } from "../../utils/color.js";
  import { colors } from "../../stores/theme.js";
  import { createEventDispatcher } from "svelte";

  export let color = $colors.base;

  /** @type {"div" | "button"} */
  export let tag = "div";

  /**
   * see: https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes
   * and specified tag attributes
   */
  export let attrs = {};

  const dispatch = createEventDispatcher();
  const thickness = "0.6rem";

  $: baseColors = getBaseColors(color);
  $: style = `
    ${attrs.style};
    --base-color: ${color};
    --side-color: ${baseColors.sideColor};
    --top-light-color: ${baseColors.topLightColor};
    --bottom-color: ${baseColors.bottomColor};
    --thickness: ${thickness};
  `;
</script>

{#if tag === "div"}
  <div class="base" {...attrs} {style}>
    <slot />
  </div>
{:else}
  <button
    on:click={(e) => dispatch("click", e)}
    class="base"
    {...attrs}
    {style}
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

    /* prettier-ignore */
    box-shadow:
      /* top */
      0rem calc(var(--thickness) * -0.16) 0rem var(--top-light-color),
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

  button {
    /* css reset */
    background-color: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    appearance: none;

    /* custom style */
    cursor: pointer;
  }

  button:hover {
    /* prettier-ignore */
    box-shadow:
      /* top */
      0rem calc(var(--thickness) * -0.16) 0rem var(--bottom-color),

      /* left top & right top */
      calc(var(--thickness) * 0.14) calc(var(--thickness) * -0.16) 0rem var(--bottom-color),
      calc(var(--thickness) * -0.14) calc(var(--thickness) * -0.16) 0rem var(--bottom-color),

      /* left & right */
      calc(var(--thickness) * 0.16) 0rem 0rem var(--bottom-color),
      calc(var(--thickness) * -0.16) 0rem 0rem var(--bottom-color),

      /* bottom */
      0rem calc(var(--thickness) * 0.64) 0rem var(--bottom-color),
      0rem calc(var(--thickness) * 1.0) calc(var(--thickness) * 0.16) var(--bottom-color),
      0rem calc(var(--thickness) * 1.67) calc(var(--thickness) * 0.64) 0rem rgba(0, 0, 0, 0.5),


      /* blank */
      0 0 0 transparent
  }

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
</style>
