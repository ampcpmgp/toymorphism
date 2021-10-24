<script>
  import { colors } from "../../stores/theme";
  import Text from "./../Texts/Text.svelte";

  export let size = "1rem";
  export let color = $colors.text;

  // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li#attributes
  export let attrs = {};
  /** counter Id */
  export let cid = "toymorphism-svelte-ol";
</script>

<li {...attrs} style="{attrs.style || ''}; --cid: {cid};">
  <Text {size} {color}>
    <div class="counter">
      <slot />
    </div>
  </Text>
</li>

<style>
  li .counter::before {
    counter-increment: var(--cid);
    content: counters(var(--cid), ".") ". ";
  }
</style>
