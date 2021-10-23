<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import LinkButton from "./LinkButton.svelte";
</script>

<Meta
  title="Buttons/LinkButton"
  component={LinkButton}
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
  <LinkButton {...args} on:click={args.onClick}>child</LinkButton>
</Template>

<Story name="No settings" args={{}} />
