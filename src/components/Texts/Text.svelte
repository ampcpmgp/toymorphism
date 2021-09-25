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
      /* bottom */
      0rem calc(var(--size) * 0.005) 0rem #cb4966,
      0rem calc(var(--size) * 0.01) 0rem #cb4966,
      0rem calc(var(--size) * 0.015) 0rem #cb4966,
      0rem calc(var(--size) * 0.02) 0rem #cb4966,
      0rem calc(var(--size) * 0.025) 0rem #cb4966,
      0rem calc(var(--size) * 0.03) 0rem #cb4966,
      0rem calc(var(--size) * 0.035) 0rem #be4265,
      0rem calc(var(--size) * 0.04) 0rem #be4265,
      0rem calc(var(--size) * 0.06) calc(var(--size) * 0.05) rgba(0, 0, 0, 0.6),

      /* blank */
      0 0 0 transparent
      ;
  }
</style>
