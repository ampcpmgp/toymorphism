<script>
  import { components } from "toymorphism/dist/COMPONENT_API.json";
  import * as toymorphism from "toymorphism";
  import {
    Button,
    CircleButton,
    Code,
    Frame,
    H1,
    H2,
    H3,
    H4,
    H5,
    H6,
    Link,
    LinkButton,
    rescale,
  } from "toymorphism";

  /** @type {typeof components[0]} */
  export let item;
  void components;
</script>

<div class="wrapper">
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
    <div use:rescale={0.8}>
      <Code
        code="let a = 1"
        edgeColor="lightblue"
        frameColor="white"
        textColor="black"
        padding="0.5rem 0.2rem"
        edgePadding="0.2rem"
      />
    </div>
  {:else if item.moduleName === "Frame"}
    <div use:rescale={0.5}>
      <Frame
        edgeColor="#ccc"
        frameColor="#fff"
        edgePadding="0.5rem"
        padding="0.5rem"
        gap="0.25rem"
      >
        <span>content</span>
        <span>content</span>
      </Frame>
    </div>
  {:else if item.moduleName === "H1"}
    <H1 color="#f66" shape="float" size="2.2rem">H1</H1>
  {:else if item.moduleName === "H2"}
    <H2 color="#f66" shape="float" size="2.0rem">H2</H2>
  {:else if item.moduleName === "H3"}
    <H3 color="#f66" shape="float" size="1.8rem">H3</H3>
  {:else if item.moduleName === "H4"}
    <H4 color="#f66" shape="float" size="1.6rem">H4</H4>
  {:else if item.moduleName === "H5"}
    <H5 color="#f66" shape="float" size="1.4rem">H5</H5>
  {:else if item.moduleName === "H6"}
    <H6 color="#f66" shape="float" size="1.2rem">H6</H6>
  {:else if item.moduleName === "Link"}
    <Link
      size="1.2rem"
      shape="none"
      color="black"
      target="_blank"
      rel="noopener noreferrer"
      textDecorationLine="underline"
      href="//example.com">Link</Link
    >
  {:else if item.moduleName === "LinkButton"}
    <LinkButton
      size="1rem"
      shape="none"
      color="black"
      target="_blank"
      rel="noopener noreferrer"
      diameter="2rem"
      thickness="0.4rem"
      textDecorationLine="none"
      padding="0.4rem"
      href="//example.com">Link</LinkButton
    >
  {:else}
    <svelte:component this={toymorphism[item.moduleName]} />
  {/if}
</div>

<style>
  .wrapper {
    display: grid;
    place-items: center;
    height: 100%;
  }
</style>
