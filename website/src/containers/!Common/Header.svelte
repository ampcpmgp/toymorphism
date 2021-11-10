<script>
  import { push } from "svelte-spa-router";
  import { Button, H1, Text } from "toymorphism";
  import { version } from "toymorphism/package.json";

  /** @type {"home" | "components" | "documents"} */
  export let currentPage = "home";
</script>

<div class="wrapper">
  <H1 shape="embossed">Toymorphism {version}</H1>

  <div class="button-group">
    <Button
      padding="0.5rem"
      gap="0.4rem"
      selected={currentPage === "home"}
      on:click={() => push("/")}
    >
      <Text color="white" size="1.5rem" shape="solid-3d">
        <i class="fas fa-home" />
      </Text>
      <Text>Home</Text>
    </Button>

    <Button
      padding="0.5rem"
      gap="0.4rem"
      selected={currentPage === "components"}
      on:click={() => push("/components/")}
    >
      <Text color="white" size="1.5rem" shape="solid-3d">
        <i class="fas fa-puzzle-piece" />
      </Text>
      <Text>Components</Text>
    </Button>

    <Button
      padding="0.5rem"
      gap="0.4rem"
      selected={currentPage === "documents"}
      on:click={() => push("/documents/")}
    >
      <Text color="white" size="1.5rem" shape="solid-3d">
        <i class="fas fa-book" />
      </Text>
      <Text>Documents</Text>
    </Button>
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
</style>
