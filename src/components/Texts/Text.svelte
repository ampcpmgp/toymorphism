<script>
  export let size = "1rem";
</script>

<p style="--size: {size}">
  <slot />
</p>

<style>
  p {
    display: inline-grid;
    place-items: center;

    margin: 0;
    color: #fc769f;
    font-size: var(--size);
    line-height: calc(var(--size) * 1);

    /* prettier-ignore */
    text-shadow:
      /* left & right */
      calc(var(--size) * 0.02) 0rem 0rem #cb4966,
      calc(var(--size) * -0.02) 0rem 0rem #cb4966,

      calc(var(--size) * 0.02) calc(var(--size) * 0.1) 0rem #cb4966,
      calc(var(--size) * -0.02) calc(var(--size) * 0.1) 0rem #cb4966,

      /* bottom */
      0rem calc(var(--size) * 0.05) 0rem #cb4966,
      0rem calc(var(--size) * 0.1) 0rem #be4265,

      /* blank */
      0 0 0 transparent
      ;
  }
</style>
