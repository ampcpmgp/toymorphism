<script>
  import { components } from "toymorphism/dist/COMPONENT_API.json";
  import * as toymorphism from "toymorphism";
  import { Button, CircleButton, Code, rescale } from "toymorphism";

  /** @type {typeof components[0]} */
  export let item;
  void components;
</script>

{#if item.moduleName === "Button"}
  <Button
    padding="0.5rem"
    baseColor="#99f"
    fontSize="0.8rem"
    disabled={false}
    selected={false}
    gap="0.25rem"
    thickness="0.6rem"
  >
    <span>🌻</span>
    <span>Button</span>
  </Button>
{:else if item.moduleName === "CircleButton"}
  <CircleButton
    baseColor="#f99"
    padding="0.2rem"
    diameter="2rem"
    disabled={false}
    selected={false}
    thickness="0.4rem"
  >
    🎉
  </CircleButton>
{:else if item.moduleName === "Code"}
  <div use:rescale={0.6}>
    <Code
      code="let a = 1"
      frameColor="white"
      textColor="black"
      padding="0.5rem 0.2rem"
      edgePadding="0.2rem"
    />
  </div>
{:else}
  <svelte:component this={toymorphism[item.moduleName]} />
{/if}
