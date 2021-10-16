<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import JellyButton from "./JellyButton.svelte";
</script>

<Meta
  title="Buttons/JellyButton"
  component={JellyButton}
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
  <JellyButton {...args} on:click={args.onClick}>child</JellyButton>
</Template>

<Story name="No settings" args={{}} />

<Story
  name="Default"
  args={{
    custom: "custom",
  }}
/>
