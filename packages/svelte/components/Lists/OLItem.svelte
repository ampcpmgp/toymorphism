<script>
  import { color as _color } from "../../stores/theme";
  import Text from "./../Texts/Text.svelte";

  export let size = "1rem";
  export let color = $_color.text;

  // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li#attributes
  export let attrs = {};
  export let cid = "default";
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
