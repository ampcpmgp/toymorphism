<script>
  import { Button, H1, Text } from "../../../packages/svelte";
  import Header from "../containers/!Headers/Header.svelte";
  import { version } from "../../../packages/svelte/package.json";
</script>

<div class="wrapper">
  <Header />

  <H1 color="black">Toymorphism {version}</H1>

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
