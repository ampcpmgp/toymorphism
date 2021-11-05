<script>
  import { colors } from "../../stores";
  import Link from "../Links/Link.svelte";
  import Text from "../Texts/Text.svelte";
  import CircleButton from "./CircleButton.svelte";

  /** @type {string} */
  export let color = $colors.text;
  export let size = "1rem";
  /** @type {import("../../types/props").TextShape} */
  export let shape = "none";
  /** @type {import("../../types/props").Thickness} */
  export let thickness = "0.4rem";
  /** see: https://developer.mozilla.org/en-US/docs/Web/CSS/width */
  export let diameter = "initial";
  /** see: https://developer.mozilla.org/en-US/docs/Web/CSS/width */
  export let padding = "initial";
  /** @type {import("../../types/props").Target} */
  export let target = "_blank";
  /** see: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-href */
  export let href = "";
  /** @type {import("csstype").Properties["textDecoration"]} */
  export let textDecorationLine = "none";

  /** @type {HTMLAnchorElement["rel"]}
   * see: https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types
   */
  export let rel = "noopener noreferrer";
</script>

<Link attrs={{ target, href }} {textDecorationLine} {rel}>
  <CircleButton {diameter} {padding} {thickness}>
    <Text {color} {size} {shape}>
      <slot />
    </Text>
  </CircleButton>
</Link>
