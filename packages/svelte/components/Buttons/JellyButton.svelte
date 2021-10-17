<!--
  Jelly Button

  Thanks to the following authors.

  Source:
  * https://codepen.io/ampcpmgp/pen/oNebWwY
  * https://dribbble.com/shots/6209185-BIG-Jelly-Button
 -->
<script>
  import { baseColor as _baseColor } from "./../../stores/theme.js";
  import Text from "../Texts/Text.svelte";
  import Jelly from "../_Core/Jelly.svelte";

  /** @type {string} */
  export let baseColor = $_baseColor;
  export let padding = "1rem";
  export let paddingX = "";
  export let paddingY = "";
  export let borderRadius = "2rem";
  export let fontSize = "";
</script>

<Jelly
  color={baseColor}
  paddingX={padding || paddingX}
  paddingY={padding || paddingY}
  {borderRadius}
>
  <Text shape="embossed" color={baseColor} size={fontSize}><slot /></Text>
</Jelly>

<style>
</style>
