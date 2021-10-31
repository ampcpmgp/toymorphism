<script>
  import { colors, lengths } from "./../../stores/theme.js";
  import Base from "../_Core/Base.svelte";

  /** see: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes */
  export let attrs = {};

  /** @type {import("../../types/props.js").Color} */
  export let baseColor = $colors.base;
  export let disabled = false;
  export let selected = false;

  /** see: https://developer.mozilla.org/en-US/docs/Web/CSS/width */
  export let diameter = "initial";
  /** see: https://developer.mozilla.org/en-US/docs/Web/CSS/padding */
  export let padding = "initial";

  /** @type {import("../../types/props.js").Thickness} */
  export let thickness = $lengths.thickness;
</script>

<Base
  tag="button"
  shape="circle"
  {...attrs}
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
