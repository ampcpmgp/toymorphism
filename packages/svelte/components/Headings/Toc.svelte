<script>
  import Link from "./../Links/Link.svelte";
  import ULItem from "./../Lists/ULItem.svelte";
  import UL from "./../Lists/UL.svelte";
  import { colors } from "../../stores";

  /** @type {import("../../types/props").TocHeading[]} */
  export let headings = [];
  export let color = $colors.text;
</script>

<UL>
  {#each headings as heading}
    <ULItem attrs={{ style: `margin-left: ${0.5 * (heading.level - 1)}rem;` }}>
      <Link
        attrs={{
          href: `#${heading.id}`,
          target: "_self",
        }}
        {color}
      >
        {heading.text}
      </Link>
    </ULItem>
  {:else}
    <ULItem>
      <Link attrs={{ href: "#", target: "_self" }}>No headings found</Link>
    </ULItem>
  {/each}
</UL>
