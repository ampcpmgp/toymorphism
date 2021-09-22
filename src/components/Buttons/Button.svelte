<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
</script>

<button on:click={(e) => dispatch("click", e)}>
  <slot />
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
    display: grid;
    place-items: center;
    border-radius: 1rem;

    background-color: #fc769f;

    /* prettier-ignore */
    box-shadow:
      /* top */
      0rem -0.1rem 0rem rgba(255, 255, 255, 0.7),
      0rem -0.2rem 0rem #cb4966,

      /* left & right */
      0.08rem -0.1rem 0rem #cb4966,
      -0.08rem -0.1rem 0rem #cb4966,
      0.1rem 0rem 0rem #cb4966,
      -0.1rem 0rem 0rem #cb4966,
      0.08rem 0.2rem 0rem #cb4966,
      -0.08rem 0.2rem 0rem #cb4966,
      0.06rem 0.4rem 0rem #cb4966,
      -0.06rem 0.4rem 0rem #cb4966,

      /* bottom */
      0rem 0.4rem 0rem #cb4966,
      0rem 0.6rem 0.1rem #be4265,
      0rem 1rem 0.4rem 0rem rgba(128, 128, 128, 1),

      /* blank */
      0 0 0 transparent
      ;
  }
</style>
