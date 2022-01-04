<script>
  import Text from "./../Texts/Text.svelte";
  import { getContext } from "svelte";
  import { key } from "./ol";

  const context = getContext(key);
  const hierarchy = context ? context.hierarchy : 0;

  /** counter Id */
  let cid = `toymorphism-svelte-ol-${hierarchy}`;
</script>

<li {...$$restProps} style="{$$restProps.style || ''}; --cid: {cid};">
  <Text>
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
