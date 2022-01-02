<script>
  import ULItem from "./../Lists/ULItem.svelte";
  import UL from "./../Lists/UL.svelte";

  /** @type {import("../../types/props").TocHeading[]} */
  export let headings = [];
</script>

<UL>
  {#each headings as heading}
    <ULItem style={`margin-left: ${0.5 * (heading.level - 1)}rem;`}>
      <a href={`#${heading.id}`} target="_self">
        {heading.text}
      </a>
    </ULItem>
  {:else}
    <ULItem>
      <a href="#/" target="_self">No headings found</a>
    </ULItem>
  {/each}
</UL>
