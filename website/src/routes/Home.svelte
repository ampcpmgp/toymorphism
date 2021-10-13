<script>
  import { Button, Frame, H1, Text } from "toymorphism";
  import { textColor, baseColor } from "toymorphism/stores/theme";
  import Header from "../containers/!Headers/Header.svelte";
  import { version } from "toymorphism/package.json";

  // $baseColor = "red";
  // $textColor = "brown";
  void baseColor, textColor;
</script>

<div class="wrapper">
  <Frame innerColor="lightgoldenrodyellow">
    <div class="content">
      <Header />

      <H1 color="black">Toymorphism {version}</H1>

      <Button baseColor="red">
        <Text>Click Me!</Text>
      </Button>
    </div>
  </Frame>
</div>

<style>
  .wrapper {
    display: flex;
    flex-direction: column;
    place-items: center;
  }

  .content {
    margin: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
</style>
