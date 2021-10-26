<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import Text from "./Text.svelte";
</script>

<Meta
  title="Texts/Text"
  component={Text}
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
  <Text {...args}>
    <div>{args.message}</div>
  </Text>
</Template>

<Story
  name="No settings"
  args={{
    message: "Hello World | こんにちは世界",
  }}
/>

<Story
  name="Shape none"
  args={{
    size: "2rem",
    color: "#fc769f",
    shape: "none",
    message: "Hello World | こんにちは世界",
    attrs: {
      title: "Shape none",
    },
  }}
/>

<Story
  name="Shape solid-3d"
  args={{
    size: "2rem",
    color: "#fc769f",
    shape: "solid-3d",
    message: "Hello World | こんにちは世界",
  }}
/>

<Story
  name="Shape float"
  args={{
    size: "2rem",
    color: "#fc769f",
    shape: "float",
    message: "Hello World | こんにちは世界",
  }}
/>

<Story
  name="Shape embossed"
  args={{
    size: "2rem",
    color: "#fc769f",
    shape: "embossed",
    message: "Hello World | こんにちは世界",
  }}
/>
