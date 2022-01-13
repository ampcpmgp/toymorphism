<script>
  import { colors } from "../../stores/theme";
  import Text from "./../Texts/Text.svelte";

  export let size = "1rem";
  /** @type {string} */
  export let color = $colors.text;
</script>

<li {...$$restProps}>
  <Text {size} {color}>
    <div class="counter">
      <slot />
    </div>
  </Text>
</li>

<style>
  li {
    list-style: none;
  }
  li .counter::before {
    /* ⚬ */
    content: "・";
  }
</style>
