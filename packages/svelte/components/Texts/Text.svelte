<script>
  import { textColor } from "../../stores/theme";
  import { getTextColors } from "../../utils/color";

  export let size = "1rem";
  export let color = $textColor;

  /** see: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p#attributes */
  export let attrs = {};

  $: textColors = getTextColors(color);
</script>

<p
  {...attrs}
  style="
    {attrs.style || ''};
    --size: {size};
    --base-color: {color};
    --side-color: {textColors.sideColor};
    --bottom-color: {textColors.bottomColor};
    --thickness: calc(var(--size) / 15);
  "
>
  <slot />
</p>

<style>
  p {
    display: inline-grid;
    place-items: center;

    margin: 0;
    color: var(--base-color);
    font-size: var(--size);
    line-height: calc(var(--size) * 1);

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
</style>
