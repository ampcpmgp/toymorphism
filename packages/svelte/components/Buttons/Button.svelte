<script>
  import { colors } from "../../stores/theme";
  import Base from "../_Core/Base.svelte";

  /** @restProps {button} */

  /** Default value is $colors.base
   * If you want to use custom colors, see below
   * https://developer.mozilla.org/en-US/docs/Web/CSS/color
   * @type {string} */
  export let baseColor = $colors.base;
  export let disabled = false;
  export let selected = false;
  export let padding = "0.5rem";
  export let fontSize = "initial";
  export let gap = "0.25rem";
  /** @type {import("../../types/props").Thickness} */
  export let thickness = "0.6rem";
</script>

<Base
  {...$$restProps}
  tag="button"
  color={baseColor}
  {disabled}
  {selected}
  {padding}
  {fontSize}
  {gap}
  {thickness}
  on:click
>
  <slot />
</Base>

<style>
</style>
