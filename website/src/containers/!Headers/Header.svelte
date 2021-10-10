<script>
  import { Button, Text } from "../../../../packages/svelte";
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
      <i class="fas fa-info-circle" />
      Info
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
