<script context="module">
  /** @type {import("toymorphism/dist/components/Buttons/Button.svelte").ButtonProps} */
  export const defaultButtonProps = {};

  /** @type {import("toymorphism/dist/components/Buttons/LinkButton.svelte").LinkButtonProps} */
  export const defaultLinkButtonProps = {
    href: "//example.com",
    target: "_blank",
  };

  /** @type {import("toymorphism/dist/components/Icons/FontAwesomeIcon.svelte").FontAwesomeIconProps} */
  export const defaultFontAwesomeIconProps = {
    class: "fas fa-home",
  };

  /** @type {import("toymorphism/dist/components/Headings/Toc.svelte").TocProps} */
  export const defaultTocProps = {
    headings: [
      { id: "/components/_h1", text: "h1", level: 1 },
      { id: "/components/_h2-1", text: "h2-1", level: 2 },
      { id: "/components/_h2-2", text: "h2-2", level: 2 },
      { id: "/components/_h3", text: "h3", level: 3 },
    ],
  };

  /** @type {import("toymorphism/dist/components/Texts/Code.svelte").CodeProps} */
  export const defaultCodeProps = {
    code: "let a = 1",
  };

  export function getDefaultProps(
    /** @type {import("../../types/sveld").Component} */
    component
  ) {
    const props = {};

    switch (component.moduleName) {
      case "LinkButton":
        return defaultLinkButtonProps;

      case "Toc":
        return defaultTocProps;

      case "FontAwesomeIcon":
        return defaultFontAwesomeIconProps;

      case "Code":
        return defaultCodeProps;

      default:
        return props;
    }
  }
</script>

<script>
  import { components } from "toymorphism/dist/COMPONENT_API.json";
  import {
    Button,
    CircleButton,
    Code,
    FontAwesomeIcon,
    Frame,
    H1,
    H2,
    H3,
    H4,
    H5,
    H6,
    JellyButton,
    LinkButton,
    OL,
    OLItem,
    Text,
    Toc,
    UL,
    ULItem,
  } from "toymorphism";

  /** @type {typeof components[0]} */
  export let item;
  export let props = {};
  void components;
</script>

<div class="wrapper">
  {#if item.moduleName === "Button"}
    <Button {...props}>
      <span>🌻</span>
      <span>Button</span>
    </Button>
  {:else if item.moduleName === "CircleButton"}
    <CircleButton {...props}>
      <span style="font-size: 1.8rem;">🎉</span>
    </CircleButton>
  {:else if item.moduleName === "JellyButton"}
    <JellyButton {...props}>Jelly</JellyButton>
  {:else if item.moduleName === "LinkButton"}
    <LinkButton {...props}>example.com</LinkButton>
  {:else if item.moduleName === "Frame"}
    <Frame {...props}>
      <span>content</span>
      <span>content</span>
    </Frame>
  {:else if item.moduleName === "H1"}
    <H1 {...props}>H1</H1>
  {:else if item.moduleName === "H2"}
    <H2 {...props}>H2</H2>
  {:else if item.moduleName === "H3"}
    <H3 {...props}>H3</H3>
  {:else if item.moduleName === "H4"}
    <H4 {...props}>H4</H4>
  {:else if item.moduleName === "H5"}
    <H5 {...props}>H5</H5>
  {:else if item.moduleName === "H6"}
    <H6 {...props}>H6</H6>
  {:else if item.moduleName === "Toc"}
    <Toc {...props} />

    <h1 id="/components/_h1">h1</h1>
    <h2 id="/components/_h2-1">h2-1</h2>
    <h2 id="/components/_h2-2">h2-2</h2>
    <h3 id="/components/_h3">h3</h3>
  {:else if item.moduleName === "FontAwesomeIcon"}
    <FontAwesomeIcon {...props}>
      <!-- no children -->
    </FontAwesomeIcon>
  {:else if item.moduleName === "OL"}
    <OL {...props}>
      <OLItem>item</OLItem>
      <OLItem>item</OLItem>
      <OL>
        <OLItem>item</OLItem>
      </OL>
      <OLItem>item</OLItem>
    </OL>
  {:else if item.moduleName === "OLItem"}
    <OLItem {...props}>item</OLItem>
  {:else if item.moduleName === "UL"}
    <UL {...props}>
      <ULItem>item</ULItem>
      <ULItem>item</ULItem>
      <UL>
        <ULItem>item</ULItem>
      </UL>
      <ULItem>item</ULItem>
    </UL>
  {:else if item.moduleName === "ULItem"}
    <ULItem {...props}>item</ULItem>
  {:else if item.moduleName === "Code"}
    <Code {...props}>
      <!-- no children -->
    </Code>
  {:else if item.moduleName === "Text"}
    <Text {...props}>Hello</Text>
  {:else}
    <!-- else content here -->
  {/if}
</div>

<style>
  .wrapper {
    display: grid;
    place-items: center;
    height: 100%;
    width: 100%;
    overflow: auto;
  }
</style>
