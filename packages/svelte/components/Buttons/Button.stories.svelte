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
    baseColor: {
      control: {
        type: "color",
      },
    },
    disabled: { control: "boolean" },
    selected: { control: "boolean" },
    onClick: { action: "onClick" },
  }}
/>

<Template let:args>
  <Button {...args} on:click={args.onClick}>
    <div>{args.text}</div>
    <div>{args.text}</div>
  </Button>
</Template>

<Story
  name="No settings"
  args={{
    text: "🎶",
  }}
/>

<Story
  name="Full Settings"
  args={{
    text: "🎶",
    baseColor: "lightgreen",
    padding: "1rem",
    fontSize: "2rem",
    gap: "1rem",
    disabled: false,
    selected: false,
    thickness: "1rem",
  }}
/>

<Story
  name="Disabled"
  args={{
    text: "🎶",
    baseColor: "lightgreen",
    padding: "1rem",
    fontSize: "2rem",
    gap: "1rem",
    disabled: true,
  }}
/>

<Story
  name="Selected"
  args={{
    text: "🎶",
    baseColor: "lightgreen",
    padding: "1rem",
    fontSize: "2rem",
    gap: "1rem",
    selected: true,
  }}
/>

<Story
  name="Black baseColor"
  args={{
    text: "🎶🎶🎶",
    baseColor: "black",
    padding: "1rem",
    fontSize: "2rem",
    gap: "1rem",
  }}
/>
