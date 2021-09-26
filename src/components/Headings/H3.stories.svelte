<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import H3 from "./H3.svelte";
</script>

<Meta
  title="Headings/H3"
  component={H3}
  parameters={{
    backgrounds: {
      default: "dark-gray",
    },
  }}
  argTypes={{
    onClick: { action: "onClick" },
  }}
/>

<Template let:args>
  <H3 {...args}>{args.message}</H3>
</Template>

<Story
  name="Normal"
  args={{
    message: "H3 Text",
  }}
/>
