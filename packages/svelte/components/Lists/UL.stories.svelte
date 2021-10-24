<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import ULItem from "./ULItem.svelte";
  import UL from "./UL.svelte";
</script>

<Meta
  title="Lists/UL"
  component={UL}
  parameters={{
    backgrounds: {
      default: "white",
    },
  }}
  argTypes={{
    onClick: { action: "onClick" },
  }}
/>

<Template let:args>
  <UL>
    <ULItem {...args}>ULItem Item</ULItem>
    <ULItem {...args}>ULItem Item</ULItem>
    <ULItem {...args}>ULItem Item</ULItem>
    <ULItem {...args}>ULItem Item</ULItem>
    <UL child>
      <ULItem {...args}>ULItem Item</ULItem>
      <ULItem {...args}>ULItem Item</ULItem>
      <UL child>
        <ULItem {...args}>ULItem Item</ULItem>
      </UL>
    </UL>
    <ULItem {...args}>ULItem Item</ULItem>
    <ULItem {...args}>ULItem Item</ULItem>
    <ULItem {...args}>ULItem Item</ULItem>
    <UL child>
      <ULItem {...args}>ULItem Item</ULItem>
    </UL>
  </UL>
</Template>

<Story name="Default" args={{}} />
