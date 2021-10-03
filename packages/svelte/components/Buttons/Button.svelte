<script>
  import { createEventDispatcher } from "svelte";
  import { colors } from "../../stores/theme";
  import { getLuminance } from "../../utils/color";
  import Base from "../_Core/Base.svelte";

  /** see: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes */
  export let attrs = {};
  export let baseColor = $colors.base;

  const dispatch = createEventDispatcher();
  $: isDark = getLuminance(baseColor);
  $: brightness = isDark ? "80%" : "120%";
</script>

<button
  {...attrs}
  on:click={(e) => dispatch("click", e)}
  style="--brightness: {brightness};"
>
  <Base color={baseColor}>
    <slot />
  </Base>
</button>

<style>
  button {
    /* css reset */
    background-color: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    appearance: none;
    padding: 0;

    /* custom style */
    cursor: pointer;
  }

  button:hover {
    filter: brightness(var(--brightness));
  }
</style>
