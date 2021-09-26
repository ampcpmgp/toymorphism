<script>
  import { colors } from "./../../stores/theme.js";
  import chroma from "chroma-js";

  export let color = $colors.base;

  /** see: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div#attributes */
  export let attrs = {};

  const thickness = "1rem";
  $: chromaColor = chroma(color);
  $: luminance = chromaColor.luminance();
  $: isDark = luminance < 0.01;

  $: sideColor = chroma.mix(color, isDark ? "#333" : "black", 0.4).hex();
  $: topLightColor = chromaColor.brighten(1.5).hex();
  $: bottomColor = chroma.mix(color, isDark ? "#333" : "black", 0.6).hex();
</script>

<div
  {...attrs}
  style="
    --base-color: {color};
    --side-color: {sideColor};
    --top-light-color: {topLightColor};
    --bottom-color: {bottomColor};
    --thickness: {thickness};
  "
>
  <slot />
</div>

<style>
  div {
    display: inline-grid;
    place-items: center;
    border-radius: 1rem;
    background-color: var(--base-color);

    /* prettier-ignore */
    box-shadow:
      /* top */
      0rem calc(var(--thickness) * -0.1) 0rem var(--top-light-color),
      0rem calc(var(--thickness) * -0.2) 0rem var(--side-color),

      /* left top & right top */
      calc(var(--thickness) * 0.08) calc(var(--thickness) * -0.1) 0rem var(--side-color),
      calc(var(--thickness) * -0.08) calc(var(--thickness) * -0.1) 0rem var(--side-color),

      /* left & right */
      calc(var(--thickness) * 0.1) 0rem 0rem var(--side-color),
      calc(var(--thickness) * -0.1) 0rem 0rem var(--side-color),

      /* left bottom & right bottom */
      calc(var(--thickness) * 0.08) calc(var(--thickness) * 0.2) 0rem var(--side-color),
      calc(var(--thickness) * -0.08) calc(var(--thickness) * 0.2) 0rem var(--side-color),
      calc(var(--thickness) * 0.06) calc(var(--thickness) * 0.4) 0rem var(--side-color),
      calc(var(--thickness) * -0.06) calc(var(--thickness) * 0.4) 0rem var(--side-color),

      /* bottom */
      0rem calc(var(--thickness) * 0.4) 0rem var(--side-color),
      0rem calc(var(--thickness) * 0.6) calc(var(--thickness) * 0.1) var(--bottom-color),
      0rem var(--thickness) calc(var(--thickness) * 0.4) 0rem rgba(0, 0, 0, 0.5),

      /* blank */
      0 0 0 transparent
      ;
  }
</style>
