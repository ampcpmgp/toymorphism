<script>
  import { colors } from "../../stores";
  import Text from "../Texts/Text.svelte";

  /** @type {string} */
  let className = "";

  /**
   * see more: https://fontawesome.com/v5.15/icons
   */
  export { className as class };

  export let href =
    "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css";
  export let size = "2rem";
  /** @type {string} */
  export let color = $colors.base;
  export let thickness = "calc(var(--size) / 8)";
  /** @type {import("../../types/props").TextShape} */
  export let shape = "solid";
</script>

<svelte:head>
  <link rel="stylesheet" {href} />
</svelte:head>

<Text {size} {color} {thickness} {shape}>
  <i {...$$restProps} class={className} />
</Text>
