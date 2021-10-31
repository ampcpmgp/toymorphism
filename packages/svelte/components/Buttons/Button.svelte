<script>
  import { colors } from "../../stores/theme";
  import Base from "../_Core/Base.svelte";

  /** see: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes */
  export let attrs = {};

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
  {attrs}
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
