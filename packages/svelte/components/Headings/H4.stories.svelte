<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import H4 from "./H4.svelte";
</script>

<Meta
  title="Headings/H4"
  component={H4}
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
  <H4 {...args}>{args.message}</H4>
</Template>

<Story
  name="No settings"
  args={{
    message: "H4 Text",
  }}
/>
