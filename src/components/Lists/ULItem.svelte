<script>
  import { colors } from "../../stores/theme";
  import Text from "./../Texts/Text.svelte";

  export let size = "1rem";
  export let color = $colors.text;

  // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li#attributes
  export let attrs = {};
</script>

<li {...attrs}>
  <Text {size} {color}>
    <div class="counter">
      <slot />
    </div>
  </Text>
</li>

<style>
  li .counter::before {
    /* ⚬ */
    content: "🞄 ";
  }
</style>
