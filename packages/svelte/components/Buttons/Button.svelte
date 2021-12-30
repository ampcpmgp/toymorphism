<script>
  import { colors } from "../../stores/theme";
  import Base from "../_Core/Base.svelte";

  /** @restProps {button} */

  /** @type {string} */
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
