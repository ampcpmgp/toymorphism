<script context="module">
  import chroma from "chroma-js";

  /**
   * @param {string} color
   */
  export function getBaseColors(color) {
    const chromaColor = chroma(color);
    const luminance = chromaColor.luminance();
    const isDark = luminance < 0.5;
    const textColor = (
      isDark ? chromaColor.brighten(1.5) : chromaColor.saturate(1.5)
    ).hex();

    return {
      textColor,
    };
  }
</script>

<!--
  Jelly Button

  Thanks to the following authors.

  Source:
  * https://codepen.io/ampcpmgp/pen/oNebWwY
  * https://dribbble.com/shots/6209185-BIG-Jelly-Button
 -->
<script>
  import { colors } from "./../../stores/theme.js";
  import Text from "../Texts/Text.svelte";
  import Jelly from "../_Core/Jelly.svelte";

  /** @type {string} */
  export let baseColor = $colors.base;
  export let padding = "1rem";
  export let paddingX = "";
  export let paddingY = "";
  export let borderRadius = "2rem";
  export let fontSize = "";

  const { textColor } = getBaseColors(baseColor);
</script>

<Jelly
  color={baseColor}
  paddingX={padding || paddingX}
  paddingY={padding || paddingY}
  {borderRadius}
>
  <Text shape="embossed" color={textColor} size={fontSize}><slot /></Text>
</Jelly>
