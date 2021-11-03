<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import H5 from "./H5.svelte";
</script>

<Meta
  title="Headings/H5"
  component={H5}
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
  <H5 {...args}>{args.message}</H5>
</Template>

<Story
  name="No settings"
  args={{
    message: "H5 Text",
  }}
/>
