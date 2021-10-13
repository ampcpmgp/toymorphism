<script>
  import { baseColor as _baseColor } from "../../stores/theme";
  import Base from "../_Core/Base.svelte";

  /** see: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes */
  export let attrs = {};

  /** @type {string} */
  export let baseColor = $_baseColor;
  export let disabled = false;
  export let selected = false;
  export let padding = "initial";
  export let fontSize = "initial";
  export let gap = "initial";
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
  on:click
>
  <slot />
</Base>

<style>
</style>
