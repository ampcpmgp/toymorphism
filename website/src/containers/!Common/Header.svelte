<script>
  import { push } from "svelte-spa-router";
  import { Button, FontAwesomeIcon, H1, Text } from "toymorphism";
  import { version } from "toymorphism/package.json";

  /** @type {"home" | "components" | "documents"} */
  export let currentPage = "home";

  // https://github.com/ampcpmgp/toymorphism/issues/247
  /** @type {"/" | "/components" | "/documents" | undefined} */
  let clickedPage;

  $: {
    clickedPage && push(clickedPage);
  }
</script>

<div class="wrapper">
  <H1 shape="embossed" color="#888" size="1.8rem">Toymorphism {version}</H1>

  <div class="button-group">
    <Button
      padding="0.5rem"
      gap="0.4rem"
      selected={currentPage === "home" || clickedPage === "/"}
      on:click={() => (clickedPage = "/")}
    >
      <FontAwesomeIcon
        color="white"
        size="1.5rem"
        class="fas fa-home"
        style="min-width: 2rem;"
      />

      <div class="hide-sp">
        <Text>Home</Text>
      </div>
    </Button>

    <Button
      padding="0.5rem"
      gap="0.4rem"
      selected={currentPage === "components" || clickedPage === "/components"}
      on:click={() => (clickedPage = "/components")}
    >
      <FontAwesomeIcon
        color="white"
        size="1.5rem"
        class="fas fa-puzzle-piece"
        style="min-width: 2rem;"
      />

      <div class="hide-sp">
        <Text>Components</Text>
      </div>
    </Button>

    <!-- <Button
      padding="0.5rem"
      gap="0.4rem"
      selected={currentPage === "documents" || clickedPage === "/documents"}
      on:click={() => (clickedPage = "/documents")}
    >
      <FontAwesomeIcon
        color="white"
        size="1.5rem"
        class="fas fa-book"
        style="min-width: 2rem;"
      />

      <div class="hide-sp">
        <Text>Documents</Text>
      </div>
    </Button> -->
  </div>
</div>

<style>
  .wrapper {
    display: flex;
    flex-direction: column;
    place-items: center;
    gap: 1.5rem;
    margin: auto;
  }

  .button-group {
    display: flex;
    place-content: center;
    gap: 1rem;
    margin: auto;
  }

  @media (max-width: 576px) {
    .hide-sp {
      display: none;
    }
  }
</style>
