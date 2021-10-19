<script>
  import Router from "svelte-spa-router";
  import routes from "./routes";
</script>

<Router {routes} />

<style>
  :global(body) {
    padding: 1rem;
    margin: auto;
    max-width: 1080px;
  }
</style>
