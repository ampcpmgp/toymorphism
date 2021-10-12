<script>
  import { baseColor } from "../../stores/theme";
  import Base from "../_Core/Base.svelte";

  /** see: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div#attributes */
  export let attrs = {};

  /** see: https://developer.mozilla.org/ja/docs/Web/CSS/color */
  export let frameColor = $baseColor;

  /** see: https://developer.mozilla.org/ja/docs/Web/CSS/color */
  export let innerColor = "#fff";
</script>

<Base {attrs} color={frameColor}>
  <div class="base-inner" style="--inner-color: {innerColor};">
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
    padding: 0.25rem;
  }
  .frame {
    border-radius: 1rem;
    flex: 1;
    display: flex;
    place-content: center;
    place-items: center;
    background-color: var(--inner-color);
  }
</style>
