<script>
  import ULItem from "./../Lists/ULItem.svelte";
  import UL from "./../Lists/UL.svelte";
  import { colors } from "../../stores";

  /** @type {import("../../types/props").TocHeading[]} */
  export let headings = [];
  export let color = $colors.text;
</script>

<UL>
  {#each headings as heading}
    <ULItem style={`margin-left: ${0.5 * (heading.level - 1)}rem;`}>
      <a href={`#${heading.id}`} target="_self" {color}>
        {heading.text}
      </a>
    </ULItem>
  {:else}
    <ULItem>
      <a href="#/" target="_self">No headings found</a>
    </ULItem>
  {/each}
</UL>
