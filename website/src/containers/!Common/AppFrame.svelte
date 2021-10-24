<script>
  import { Frame } from "toymorphism";
  import Footer from "./Footer.svelte";
</script>

<Frame gap="1.5rem" padding="1rem" frameColor="lightgoldenrodyellow">
  <slot />
  <Footer />
</Frame>
