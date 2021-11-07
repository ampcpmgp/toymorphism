<script>
  import { colors } from "../../stores/theme";
  import Base from "../_Core/Base.svelte";

  /** @type {import("../../types/props").Color} */
  export let edgeColor = $colors.base;
  /** @type {import("../../types/props").Color} */
  export let frameColor = "#fff";
  export let padding = "initial";
  /** @type {import("../../types/props").Padding} */
  export let edgePadding = "0.25rem";
  export let gap = "initial";
</script>

<Base {$$restProps} color={edgeColor}>
  <div
    class="base-inner"
    style="
      {$$restProps.style || ''};
      --inner-color: {frameColor};
      --padding:{padding};
      --gap:{gap};
      --edge-padding: {edgePadding};
    "
  >
    <div class="frame">
      <slot />
    </div>
  </div>
</Base>

<style>
  .base-inner {
    display: flex;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    place-content: center;
    padding: var(--edge-padding);
  }
  .frame {
    border-radius: 1rem;
    background-color: var(--inner-color);
    padding: var(--padding);
    flex: 1;
    display: flex;
    flex-direction: column;
    place-content: center;
    place-items: center;
    gap: var(--gap);
  }
</style>
