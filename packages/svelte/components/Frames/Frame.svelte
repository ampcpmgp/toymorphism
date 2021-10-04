<script>
  import Base from "../_Core/Base.svelte";

  /** see: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div#attributes */
  export let attrs = {};
  export let color;
</script>

<Base {color}>
  <div {...attrs}>
    <slot />
  </div>
</Base>

<style>
  div {
    margin: 0.25rem;
    overflow: hidden;
    border-radius: 1rem;
  }
</style>
