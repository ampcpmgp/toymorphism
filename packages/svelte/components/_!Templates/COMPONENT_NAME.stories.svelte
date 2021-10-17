<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import COMPONENT_NAME from "./COMPONENT_NAME.svelte";
</script>

<Meta
  title="__GROUP_NAME__/COMPONENT_NAME"
  component={COMPONENT_NAME}
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
  <COMPONENT_NAME {...args} on:click={args.onClick}>child</COMPONENT_NAME>
</Template>

<Story name="No settings" args={{}} />

<Story
  name="Full settings"
  args={{
    custom: "custom",
  }}
/>

<style></style>
