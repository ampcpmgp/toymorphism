<script>
  import { Button, Text } from "toymorphism";
</script>

<div class="wrapper">
  <Button selected>
    <Text>
      <i class="fas fa-home" />
      Home
    </Text>
  </Button>
  <Button>
    <Text>
      <i class="fas fa-puzzle-piece" />
      Components
    </Text>
  </Button>
  <Button>
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

  .class-to-add {
    padding: 1rem;
  }
</style>
