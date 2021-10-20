<script>
  import { colors, Button, Frame, H1, Text } from "toymorphism";
  import Header from "../containers/!Headers/Header.svelte";
  import { version } from "toymorphism/package.json";

  $colors.base = "lightgreen";
</script>

<Frame gap="0.75rem" padding="1rem" frameColor="lightgoldenrodyellow">
  <Header />

  <H1 shape="embossed">Toymorphism {version}</H1>

  <Button padding="1rem" baseColor="green">
    <Text>Click Me!</Text>
  </Button>
</Frame>
