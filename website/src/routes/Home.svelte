<script>
  import { Button, H1, Text } from "toymorphism";
  import Header from "../containers/!Headers/Header.svelte";
  import { version } from "toymorphism/package.json";
</script>

<div class="wrapper">
  <Header />

  <H1 color="black">toymorphism {version}</H1>

  <Button>
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
