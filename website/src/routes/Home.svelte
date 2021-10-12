<script>
  import { Button, H1, Text, theme } from "toymorphism";
  import Header from "../containers/!Headers/Header.svelte";
  import { version } from "toymorphism/package.json";

  theme.colors.set({
    base: "lightgoldenrodyellow",
    text: "brown",
  });
</script>

<div class="wrapper">
  <Header />

  <H1 color="black">Toymorphism {version}</H1>

  <Button baseColor="red">
    <Text>Click Me!</Text>
  </Button>
</div>

<style>
  .wrapper {
    display: flex;
    flex-direction: column;
    gap: 6rem;
    max-width: 1080px;
    margin: auto;
    background-color: lightgoldenrodyellow;
    place-items: center;
  }
</style>
