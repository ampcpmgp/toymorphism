<script>
  import { key } from "./OL.svelte";
  import { colors } from "../../stores/theme";
  import Text from "./../Texts/Text.svelte";
  import { getContext } from "svelte";

  export let size = "1rem";
  /** @type {string} */
  export let color = $colors.text;

  const context = getContext(key);
  const hierarchy = context ? context.hierarchy : 0;

  /** counter Id */
  export let cid = `toymorphism-svelte-ol-${hierarchy}`;
</script>

<li {...$$restProps} style="{$$restProps.style || ''}; --cid: {cid};">
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
    counter-increment: var(--cid);
    content: counters(var(--cid), ".") ". ";
  }
</style>
