<script>
  import { createEventDispatcher } from "svelte";
  import Base from "../Core/Base.svelte";

  const dispatch = createEventDispatcher();
</script>

<button on:click={(e) => dispatch("click", e)}>
  <Base>
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
