<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import Jelly from "./Jelly.svelte";
</script>

<Meta
  title="_Core/Jelly"
  component={Jelly}
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
  <Jelly {...args} on:click={args.onClick}>
    <span>Jelly</span>
    <span>Button</span>
  </Jelly>
</Template>

<Story name="No settings" args={{}} />

<Story
  name="Full settings"
  args={{
    color: "#fc769f",
    paddingX: "5rem",
    paddingY: "2rem",
    borderRadius: "3.75rem",
    style: "--gap: 20px;",
  }}
/>
