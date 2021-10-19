<script>
  import { colors } from "../../stores/theme";
  import Base from "../_Core/Base.svelte";

  /** see: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes */
  export let attrs = {};
  export let baseColor = $colors.base;
  export let disabled;
  export let selected;

  /** see: https://developer.mozilla.org/en-US/docs/Web/CSS/width */
  export let diameter = "initial";
  /** see: https://developer.mozilla.org/en-US/docs/Web/CSS/padding */
  export let padding = "initial";
</script>

<Base
  tag="button"
  shape="circle"
  {...attrs}
  color={baseColor}
  {disabled}
  {selected}
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
