<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import Button from "./Button.svelte";
</script>

<Meta
  title="Buttons/Button"
  component={Button}
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
  <Button {...args} on:click={args.onClick}>
    <div style="font-size: 2rem; margin: 1rem 1.2rem;">{args.text}</div>
  </Button>
</Template>

<Story
  name="Emoji Button"
  args={{
    text: "🎶",
  }}
/>

<Story
  name="More Emojis"
  args={{
    text: "🎶🎶🎶",
  }}
/>
