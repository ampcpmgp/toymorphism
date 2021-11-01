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
    frameColor: {
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
  <Code {...args} />
</Template>

<Story
  name="No settings"
  args={{
    code: `window.Prism = window.Prism || {};
window.Prism.manual = true;`,
  }}
/>
<Story
  name="Full settings"
  args={{
    code: `window.Prism = window.Prism || {};
window.Prism.manual = true;`,
    frameColor: "white",
    edgeColor: "skyblue",
    textColor: "black",
    edgePadding: "1rem",
    attrs: {},
    codeAttrs: { title: "prism" },
  }}
/>
