<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import Text from "../Texts/Text.svelte";
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
    <div class="box">
      <Text size="2rem">Hello World</Text>
    </div>
  </Frame>
</Template>

<Story
  name="Normal"
  args={{
    attrs: { title: "Frame" },
  }}
/>

<style>
  .box {
    width: 50vw;
    height: 50vh;
    display: grid;
    place-items: center;
    background-color: white;
  }
</style>
