<script>
  import { color } from "../../stores/theme";
  import Base from "../_Core/Base.svelte";

  /** see: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div#attributes */
  export let attrs = {};

  /** see: https://developer.mozilla.org/ja/docs/Web/CSS/color */
  export let edgeColor = $color.base;

  /** see: https://developer.mozilla.org/ja/docs/Web/CSS/color */
  export let frameColor = "#fff";

  export let padding = "initial";
  export let edgePadding = "0.25rem";
  export let gap = "initial";
</script>

<Base {attrs} color={edgeColor}>
  <div
    class="base-inner"
    style="
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
