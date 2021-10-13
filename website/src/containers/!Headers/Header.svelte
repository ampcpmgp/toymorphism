<script>
  import { Button, Text } from "toymorphism";
</script>

<div class="wrapper">
  <Button padding="0.5rem" selected>
    <Text>
      <i class="fas fa-home" />
      Home
    </Text>
  </Button>
  <Button padding="0.5rem">
    <Text>
      <i class="fas fa-puzzle-piece" />
      Components
    </Text>
  </Button>
  <Button padding="0.5rem">
    <Text>
      <i class="fas fa-book" />
      Documents
    </Text>
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
