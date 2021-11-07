<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import Text from "./Text.svelte";
</script>

<Meta
  title="Texts/Text"
  component={Text}
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
  {#if args.message}
    <Text {...args}>
      <div>{args.message}</div>
    </Text>
  {:else if args.icon}
    <Text {...args}>
      <i class="fas fa-paw" />
      <i class="fas fa-hippo" />
      <i class="fas fa-kiwi-bird" />
      <i class="fas fa-horse" />
    </Text>
  {/if}
</Template>

<Story
  name="No settings"
  args={{
    message: "Hello World | こんにちは世界",
  }}
/>

<Story
  name="Shape none"
  args={{
    size: "2rem",
    color: "#fc769f",
    shape: "none",
    message: "Hello World | こんにちは世界",
  }}
/>

<Story
  name="Shape solid-3d"
  args={{
    size: "2rem",
    color: "#fc769f",
    shape: "solid-3d",
    message: "Hello World | こんにちは世界",
  }}
/>

<Story
  name="Shape float"
  args={{
    size: "2rem",
    color: "#fc769f",
    shape: "float",
    message: "Hello World | こんにちは世界",
  }}
/>

<Story
  name="Shape embossed"
  args={{
    size: "2rem",
    color: "#fc769f",
    shape: "embossed",
    message: "Hello World | こんにちは世界",
  }}
/>

<Story
  name="Font awesome"
  args={{
    size: "5rem",
    gap: "1rem",
    shape: "solid-3d",
    color: "#fc769f",
    icon: true,
  }}
/>
