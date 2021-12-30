<script>
  import { colors } from "../../stores";
  import Text from "../Texts/Text.svelte";
  import CircleButton from "./CircleButton.svelte";

  export let href = "";
  export let target = "_blank";
  /** @type {string} */
  export let color = $colors.text;
  export let size = "1rem";
  /** @type {import("../../types/props").TextShape} */
  export let shape = "none";
  /** @type {import("../../types/props").Thickness} */
  export let thickness = "0.4rem";
  /** @type {string} */
  export let diameter;
  /** @type {string} */
  export let padding;

  export let rel = "noopener noreferrer";
</script>

<a {...$$restProps} {href} {target} {rel}>
  <CircleButton {diameter} {padding} {thickness}>
    <Text {color} {size} {shape}>
      <slot />
    </Text>
  </CircleButton>
</a>
