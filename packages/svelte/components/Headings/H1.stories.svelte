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
  name="Normal"
  args={{
    message: "H1 Text",
    attrs: {
      id: "h1-text",
    },
  }}
/>
