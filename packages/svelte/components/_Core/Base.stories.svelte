<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import Base from "./Base.svelte";
</script>

<Meta
  title="_Core/Base"
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
  name="Tag div"
  args={{
    color: "lightgreen",
  }}
/>

<Story
  name="Selected"
  args={{
    selected: true,
    color: "lightgreen",
  }}
/>

<Story
  name="Tag button"
  args={{
    tag: "button",
    color: "lightgreen",
  }}
/>

<style>
  .box {
    width: 150px;
    height: 40px;
    margin: 20px;
    background-color: white;
  }
</style>
