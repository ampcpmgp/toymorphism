<script>
  import { createEventDispatcher } from "svelte";

  export let label = "";
  export let primary = true;
  export let backgroundColor = "#ccc";
  /** small, medium, large */
  export let size = "small";

  const dispatch = createEventDispatcher();
</script>

<button
  class:primary
  class:small={size === "small"}
  class:medium={size === "medium"}
  class:large={size === "large"}
  style="background-color: {backgroundColor}"
  on:click={(e) => dispatch("click", e)}
>
  {label}
</button>

<style>
  .primary {
    color: red;
  }

  .small {
    font-size: 0.8rem;
  }
  .medium {
    font-size: 1rem;
  }
  .large {
    font-size: 1.2rem;
  }
</style>
