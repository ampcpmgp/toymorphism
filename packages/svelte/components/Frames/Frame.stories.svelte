<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import Text from "../Texts/Text.svelte";
  import Frame from "./Frame.svelte";
</script>

<Meta
  title="Frames/Frame"
  component={Frame}
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
  <Frame {...args}>
    <Text size="2rem" color="green">Hello World</Text>
    <Text size="2rem" color="green">Hello World</Text>
    <Text size="2rem" color="green">Hello World</Text>
  </Frame>
</Template>

<Story
  name="No settings"
  args={{
    attrs: { title: "Frame" },
  }}
/>

<Story
  name="All settings"
  args={{
    edgeColor: "lightgreen",
    frameColor: "#ffff99",
    gap: "1rem",
    padding: "1rem",
    edgePadding: "0.5rem",
    attrs: { title: "Frame" },
  }}
/>
