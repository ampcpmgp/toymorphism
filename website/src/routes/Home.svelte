<script>
  import { Frame } from "toymorphism";
</script>

<div class="wrapper">
  <Frame>aaaa</Frame>
</div>

<style>
  :global(html) {
    height: -webkit-fill-available;
  }
  :global(body) {
    min-height: 100vh;
    min-height: -webkit-fill-available;
    display: grid;
    margin: 1rem;
  }
  .wrapper {
    height: 100%;
    display: grid;
  }
</style>
