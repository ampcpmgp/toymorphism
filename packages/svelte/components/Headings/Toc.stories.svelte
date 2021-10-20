<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import H1 from "./H1.svelte";
  import H2 from "./H2.svelte";
  import H3 from "./H3.svelte";
  import H4 from "./H4.svelte";
  import H5 from "./H5.svelte";
  import H6 from "./H6.svelte";
  import Toc from "./Toc.svelte";
</script>

<Meta
  title="Headings/Toc"
  component={Toc}
  parameters={{
    backgrounds: {
      default: "gray",
    },
  }}
  argTypes={{
    onClick: { action: "onClick" },
  }}
/>

<Template let:args>
  <Toc {...args} on:click={args.onClick} />
  <div class="scrollable" />
  <H1 attrs={{ id: "heading-1" }}>Heading 1</H1>
  <div class="scrollable" />
  <H2 attrs={{ id: "heading-2" }}>Heading 2</H2>
  <div class="scrollable" />
  <H3 attrs={{ id: "heading-3" }}>Heading 3</H3>
  <div class="scrollable" />
  <H4 attrs={{ id: "heading-4" }}>Heading 4</H4>
  <div class="scrollable" />
  <H5 attrs={{ id: "heading-5" }}>Heading 5</H5>
  <div class="scrollable" />
  <H6 attrs={{ id: "heading-6" }}>Heading 6</H6>
  <div class="scrollable" />
</Template>

<Story name="No settings" args={{}} />

<Story
  name="Full Settings"
  args={{
    color: "blue",
    headings: [
      {
        level: 1,
        text: "Heading 1",
        id: "heading-1",
      },
      {
        level: 2,
        text: "Heading 2",
        id: "heading-2",
      },
      {
        level: 3,
        text: "Heading 3",
        id: "heading-3",
      },
      {
        level: 4,
        text: "Heading 4",
        id: "heading-4",
      },
      {
        level: 5,
        text: "Heading 5",
        id: "heading-5",
      },
      {
        level: 6,
        text: "Heading 6",
        id: "heading-6",
      },
      {
        level: 2,
        text: "Heading 2",
        id: "heading-2",
      },
      {
        level: 2,
        text: "Heading 2",
        id: "heading-2",
      },
      {
        level: 2,
        text: "Heading 2",
        id: "heading-2",
      },
    ],
  }}
/>

<style>
  .scrollable {
    height: 100vh;
  }

  .scrollable::after {
    content: "scrollable";
  }
</style>
