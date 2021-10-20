<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import H6 from "./H6.svelte";
</script>

<Meta
  title="Headings/H6"
  component={H6}
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
  <H6 {...args}>{args.message}</H6>
</Template>

<Story
  name="Normal"
  args={{
    message: "H6 Text",
  }}
/>
