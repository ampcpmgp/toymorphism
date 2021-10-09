<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import CircleButton from "./CircleButton.svelte";
</script>

<Meta
  title="Buttons/CircleButton"
  component={CircleButton}
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
  <CircleButton {...args} on:click={args.onClick}>
    <div style="font-size: 2rem;">
      {args.text}
    </div>
  </CircleButton>
</Template>

<Story
  name="Diameter 6rem"
  args={{
    text: "🎶🎶",
    diameter: "6rem",
    baseColor: "lightgreen",
  }}
/>

<Story
  name="Padding 2rem"
  args={{
    text: "🎶🎶",
    padding: "2rem",
    baseColor: "lightgreen",
  }}
/>
