<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import Code from "./Code.svelte";
</script>

<Meta
  title="Texts/Code"
  component={Code}
  parameters={{
    backgrounds: {
      default: "white",
    },
  }}
  argTypes={{
    baseColor: {
      control: {
        type: "color",
      },
    },
    textColor: {
      control: {
        type: "color",
      },
    },
    onClick: { action: "onClick" },
  }}
/>

<Template let:args>
  <Code {...args}>{args.message}</Code>
</Template>

<Story
  name="Hello world"
  args={{
    code: `window.Prism = window.Prism || {};
window.Prism.manual = true;`,
    baseColor: "white",
    textColor: "black",
    attrs: {},
  }}
/>
