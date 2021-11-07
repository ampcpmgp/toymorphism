<script>
  import { colors } from "../../stores/theme";
  import Base from "../_Core/Base.svelte";

  /** @restProps {button} */

  /** @type {string} */
  export let baseColor = $colors.base;
  export let disabled = false;
  export let selected = false;
  export let padding = "initial";
  export let fontSize = "initial";
  export let gap = "initial";
  /** @type {import("../../types/props").Thickness} */
  export let thickness = "0.6rem";
</script>

<Base
  tag="button"
  {$$props}
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
