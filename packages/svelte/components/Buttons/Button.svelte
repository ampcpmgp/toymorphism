<script>
  import { createEventDispatcher } from "svelte";
  import Base from "../Core/Base.svelte";

  /** see: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes */
  export let attrs = {};
  export let baseColor;

  const dispatch = createEventDispatcher();
</script>

<button {...attrs} on:click={(e) => dispatch("click", e)}>
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
</style>
