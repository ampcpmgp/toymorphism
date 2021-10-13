<script>
  import { Button, Frame, H1, Text } from "toymorphism";
  import { textColor, baseColor } from "toymorphism/stores/theme";
  import Header from "../containers/!Headers/Header.svelte";
  import { version } from "toymorphism/package.json";

  // $baseColor = "red";
  // $textColor = "brown";
  void baseColor, textColor;
</script>

<Frame gap="0.75rem" padding="1rem" frameColor="lightgoldenrodyellow">
  <Header />

  <H1 color="black">Toymorphism {version}</H1>

  <Button padding="1rem" baseColor="green">
    <Text>Click Me!</Text>
  </Button>
</Frame>

<style>
</style>
