<script>
  import { generateRandomString } from "../../utils/random";

  // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol#attributes
  export let attrs = {};
  export let hierarchy = false;

  /** counter Id */
  $: cid = hierarchy ? generateRandomString(20) : "default";
</script>

<ol {...attrs} style="${attrs.style || ''}; --cid: {cid};">
  <slot {cid} />
</ol>

<style>
  ol {
    margin: 0;
    padding: 0;
    counter-reset: var(--cid);
    list-style-type: none;
  }
</style>
