<script>
  import { baseColor, Button, Frame, H1, Text, textColor } from "toymorphism";
  import Header from "../containers/!Headers/Header.svelte";
  import { version } from "toymorphism/package.json";

  $baseColor = "lightgreen";
  $textColor = "black";
</script>

<Frame gap="0.75rem" padding="1rem" frameColor="lightgoldenrodyellow">
  <Header />

  <H1 color="black" shape="embossed">Toymorphism {version}</H1>

  <Button padding="1rem" baseColor="green">
    <Text>Click Me!</Text>
  </Button>
</Frame>
