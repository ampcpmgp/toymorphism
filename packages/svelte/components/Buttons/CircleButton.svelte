<script>
  import { colors, lengths } from "./../../stores/theme.js";
  import Base from "../_Core/Base.svelte";

  /** @restProps {button} */

  /** @type {import("../../types/props").Color} */
  export let baseColor = $colors.base;
  export let disabled = false;
  export let selected = false;

  /** Set diameter length.
   * See below for possible values.
   * https://developer.mozilla.org/en-US/docs/Web/CSS/width */
  export let diameter = "initial";
  /** https://developer.mozilla.org/en-US/docs/Web/CSS/padding */
  export let padding = "0.2rem";

  /** @type {import("../../types/props").Thickness} */
  export let thickness = $lengths.thickness;
</script>

<Base
  {...$$restProps}
  tag="button"
  shape="circle"
  color={baseColor}
  {disabled}
  {selected}
  {thickness}
  on:click
>
  <div class="circle" style="--diameter: {diameter}; --padding: {padding};">
    <slot />
  </div>
</Base>

<style>
  .circle {
    display: grid;
    place-items: center;
    width: var(--diameter);
    height: var(--diameter);
    padding: var(--padding);
  }
</style>
