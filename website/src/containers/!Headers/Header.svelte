<script>
  import { Button, Text } from "toymorphism";
</script>

<div class="wrapper">
  <Button padding="0.5rem" gap="0.4rem" selected>
    <Text color="white" size="1.5rem" shape="solid-3d">
      <i class="fas fa-home" />
    </Text>
    <Text>Home</Text>
  </Button>
  <Button padding="0.5rem" gap="0.4rem">
    <Text color="white" size="1.5rem" shape="solid-3d">
      <i class="fas fa-puzzle-piece" />
    </Text>
    <Text>Components</Text>
  </Button>
  <Button padding="0.5rem" gap="0.4rem">
    <Text color="white" size="1.5rem" shape="solid-3d">
      <i class="fas fa-book" />
    </Text>
    <Text>Documents</Text>
  </Button>
</div>

<style>
  .wrapper {
    display: flex;
    place-content: center;
    gap: 1rem;
    margin: auto;
  }
</style>
