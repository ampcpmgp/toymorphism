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
  <JellyButton {...args} on:click={args.onClick}>Jelly Button</JellyButton>
</Template>

<Story name="No settings" args={{}} />

<Story
  name="Full settings"
  args={{
    baseColor: "green",
    textColor: "gold",
    padding: "2rem",
    borderRadius: "3rem",
    fontSize: "2rem",
  }}
/>

<style>
</style>
