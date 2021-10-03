<script>
  import { colors } from "../../stores/theme";
  import Base from "../_Core/Base.svelte";

  /** see: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes */
  export let attrs = {};
  export let baseColor = $colors.base;
</script>

<Base tag="button" {...attrs} color={baseColor} on:click>
  <slot />
</Base>

<style>
</style>
