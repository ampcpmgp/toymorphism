<script context="module">
  import chroma from "chroma-js";

  /**
   * @param {string} color
   */
  export function getTextColors(color) {
    const chromaColor = chroma(color);
    const luminance = chromaColor.luminance();
    const isBlack = luminance < 0.01;

    const sideColor = chroma.mix(color, isBlack ? "#444" : "black", 0.3).hex();
    const bottomColor = chroma
      .mix(color, isBlack ? "#444" : "black", 0.4)
      .hex();
    const shadowColor = chromaColor.darken(3).alpha(0.9).hex();

    return {
      sideColor,
      bottomColor,
      shadowColor,
    };
  }
</script>

<script>
  import { colors } from "../../stores/theme";

  /** calculable size (e.g. 1rem, 20px) */
  export let size = "1rem";
  export let lineHeight = "normal";
  /** @type {string} */
  export let color = $colors.text;
  export let gap = "0.25rem";
  export let thickness = "calc(var(--size) / 8)";
  /** @type {import("../../types/props").TextShape} */
  export let shape = "none";

  $: textColors = getTextColors(color);
</script>

<p
  {...$$restProps}
  class:solid-3d={shape === "solid-3d"}
  class:float={shape === "float"}
  class:embossed={shape === "embossed"}
  style="
    {$$restProps.style || ''};
    --size: {size};
    --line-height: {lineHeight};
    --base-color: {color};
    --side-color: {textColors.sideColor};
    --bottom-color: {textColors.bottomColor};
    --shadow-color: {textColors.shadowColor};
    --thickness: {thickness};
    --gap: {gap};
  "
>
  <slot />
</p>

<style>
  .float {
    /* prettier-ignore */
    text-shadow:
      /* bottom */
      0rem calc(var(--thickness) * 1.0) calc(var(--thickness) * 0.8) rgba(0, 0, 0, 0.5),

      /* blank */
      0 0 0 transparent
    ;
  }

  .solid-3d {
    padding-bottom: calc(var(--thickness) * 1.5);

    /* prettier-ignore */
    text-shadow:
      /* bottom */
      0rem calc(var(--thickness) * 0.1) 0rem var(--bottom-color),
      0rem calc(var(--thickness) * 0.2) 0rem var(--bottom-color),
      0rem calc(var(--thickness) * 0.3) 0rem var(--bottom-color),
      0rem calc(var(--thickness) * 0.4) 0rem var(--bottom-color),
      0rem calc(var(--thickness) * 0.5) 0rem var(--bottom-color),
      0rem calc(var(--thickness) * 0.6) 0rem var(--bottom-color),
      0rem calc(var(--thickness) * 0.7) 0rem var(--bottom-color),
      0rem calc(var(--thickness) * 0.8) 0rem var(--bottom-color),
      0rem calc(var(--thickness) * 0.9) 0rem var(--bottom-color),
      0rem calc(var(--thickness) * 1.0) 0rem var(--bottom-color),
      0rem calc(var(--thickness) * 1.5) calc(var(--thickness) * 0.8) rgba(0, 0, 0, 0.5),

      /* blank */
      0 0 0 transparent
      ;
  }

  .embossed {
    font-weight: 700;
    white-space: pre;
    color: transparent;
    background-image: linear-gradient(0deg, var(--base-color) 0%, #fefafd 100%);
    -webkit-background-clip: text;
    background-clip: text;
    filter: drop-shadow(0 1px 1px var(--shadow-color));
  }

  p {
    margin: 0;
    display: inline-flex;
    gap: var(--gap);

    color: var(--base-color);
    font-size: var(--size);
    line-height: var(--line-height);
  }
</style>
