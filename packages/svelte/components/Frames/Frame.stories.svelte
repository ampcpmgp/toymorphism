<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import Text from "../Texts/Text.svelte";
  import Frame from "./Frame.svelte";
</script>

<Meta
  title="Frames/Frame"
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
      <Text size="2rem" color="#fc769f">Hello World</Text>
    </div>
  </Frame>
</Template>

<Story
  name="Normal"
  args={{
    color: "#fc769f",
    attrs: { title: "Frame" },
  }}
/>

<Story
  name="Overflow visible"
  args={{
    color: "#fc769f",
    overflow: "visible",
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
