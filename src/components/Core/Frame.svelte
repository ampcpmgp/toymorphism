<script>
  import Base from "./Base.svelte";
</script>

<Base>
  <div>
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
