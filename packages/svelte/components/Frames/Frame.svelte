<script>
  import Base from "../_Core/Base.svelte";

  /** see: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div#attributes */
  export let attrs = {};
  export let color;
  /** see: https://developer.mozilla.org/ja/docs/Web/CSS/overflow */
  export let overflow = "hidden";
</script>

<Base {color}>
  <div {...attrs} style="{attrs.style}; --overflow: {overflow};">
    <slot />
  </div>
</Base>

<style>
  div {
    margin: 0.25rem;
    overflow: var(--overflow);
    border-radius: 1rem;
  }
</style>
