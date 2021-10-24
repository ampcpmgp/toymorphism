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

  /** see: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-target */
  export let target = "_blank";

  /** see: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-href */
  export let href = "";

  /** see: https://developer.mozilla.org/ja/docs/Web/CSS/text-decoration-line */
  export let textDecorationLine = "none";
</script>

<Link attrs={{ target, href }} {textDecorationLine}>
  <CircleButton {diameter} {thickness}>
    <Text {color} {size} {shape}>
      <slot />
    </Text>
  </CircleButton>
</Link>
