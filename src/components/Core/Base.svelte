<script>
  export let hidden = true;

  const thickness = "1rem";
</script>

<div class:hidden style="--thickness: {thickness}"><slot /></div>

<style>
  div {
    display: inline-grid;
    place-items: center;
    border-radius: 1rem;
    background-color: #fc769f;

    /* prettier-ignore */
    box-shadow:
      /* top */
      0rem calc(var(--thickness) * -0.1) 0rem rgba(255, 255, 255, 0.7),
      0rem calc(var(--thickness) * -0.2) 0rem #cb4966,

      /* left & right */
      calc(var(--thickness) * 0.08) calc(var(--thickness) * -0.1) 0rem #cb4966,
      calc(var(--thickness) * -0.08) calc(var(--thickness) * -0.1) 0rem #cb4966,
      calc(var(--thickness) * 0.1) 0rem 0rem #cb4966,
      calc(var(--thickness) * -0.1) 0rem 0rem #cb4966,
      calc(var(--thickness) * 0.08) calc(var(--thickness) * 0.2) 0rem #cb4966,
      calc(var(--thickness) * -0.08) calc(var(--thickness) * 0.2) 0rem #cb4966,
      calc(var(--thickness) * 0.06) calc(var(--thickness) * 0.4) 0rem #cb4966,
      calc(var(--thickness) * -0.06) calc(var(--thickness) * 0.4) 0rem #cb4966,

      /* bottom */
      0rem calc(var(--thickness) * 0.4) 0rem #cb4966,
      0rem calc(var(--thickness) * 0.6) calc(var(--thickness) * 0.1) #be4265,
      0rem var(--thickness) calc(var(--thickness) * 0.4) 0rem rgba(128, 128, 128, 1),

      /* blank */
      0 0 0 transparent
      ;
  }

  .hidden {
    overflow: hidden;
  }
</style>
