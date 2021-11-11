<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import H2 from "./H2.svelte";
</script>

<Meta
  title="Headings/H2"
  component={H2}
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
  <H2 {...args}>{args.message}</H2>
</Template>

<Story
  name="No settings"
  args={{
    message: "H2 Text",
  }}
/>
