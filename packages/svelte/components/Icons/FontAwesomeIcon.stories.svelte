<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import FontAwesomeIcon from "./FontAwesomeIcon.svelte";
</script>

<Meta
  title="Icons/FontAwesomeIcon"
  component={FontAwesomeIcon}
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
  <FontAwesomeIcon {...args} on:click={args.onClick}>child</FontAwesomeIcon>
</Template>

<Story
  name="Full settings"
  args={{
    size: "3rem",
    class: "fas fa-hippo",
  }}
/>
