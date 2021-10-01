<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import Base from "./Base.svelte";
</script>

<Meta
  title="Core/Base"
  component={Base}
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
  <Base {...args}>
    <div class="box" />
  </Base>
</Template>

<Story
  name="With white box"
  args={{
    color: "#fc769f",
  }}
/>

<style>
  .box {
    width: 150px;
    height: 40px;
    background-color: white;
  }
</style>
