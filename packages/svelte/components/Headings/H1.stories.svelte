<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import H1 from "./H1.svelte";
</script>

<Meta
  title="Headings/H1"
  component={H1}
  parameters={{
    backgrounds: {
      default: "white",
    },
  }}
  argTypes={{
    onClick: { action: "onClick" },
  }}
/>

<Template let:args>
  <H1 {...args}>{args.message}</H1>
</Template>

<Story
  name="No settings"
  args={{
    message: "H1 Text",
  }}
/>

<Story
  name="Full settings"
  args={{
    message: "H1 Text",
    color: "#f77",
    size: "3rem",
    shape: "embossed",
  }}
/>
