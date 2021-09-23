<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import Frame from "./Frame.svelte";
</script>

<Meta
  title="Core/Frame"
  component={Frame}
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
  <Frame {...args}>
    <div class="box" />
  </Frame>
</Template>

<Story name="Normal" args={{}} />

<style>
  .box {
    width: 50vw;
    height: 50vh;
    background-color: white;
  }
</style>
