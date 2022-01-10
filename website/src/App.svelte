<script>
  import Router from "svelte-spa-router";
  import { colors } from "toymorphism";
  import routes from "./routes";

  $colors.base = "lightgreen";
</script>

<Router {routes} />

<style>
  :global(body) {
    padding: 1rem;
    margin: auto;
    max-width: 1080px;
    overflow-y: scroll;
  }
</style>
